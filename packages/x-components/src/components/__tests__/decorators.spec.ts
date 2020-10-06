import { mount, Wrapper } from '@vue/test-utils';
import Vue, { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import Vuex, { Store } from 'vuex';
import { XEvent } from '../../wiring/events.types';
import { searchBoxXStoreModule } from '../../x-modules/search-box/store/module';
import { searchBoxXModule } from '../../x-modules/search-box/x-module';
import { installNewXPlugin } from '../../__tests__/utils';
import { Getter, State, XOn } from '../decorators';
import { xComponentMixin } from '../x-component.mixin';

const createdListener = jest.fn();
const dataListener = jest.fn();
const multipleListener = jest.fn();
const singleListener = jest.fn();
const optionsListener = jest.fn();
const filteredOptionsListener = jest.fn();
const filteredWithMultipleOptionsListener = jest.fn();

@Component({
  mixins: [xComponentMixin(searchBoxXModule)]
})
class TestingComponent extends Vue {
  @State('searchBox', 'query')
  public query!: string;
  @Getter('searchBox', 'trimmedQuery')
  public trimmedQuery!: string;

  protected events: XEvent[] = ['UserIsTypingAQuery', 'UserTalked'];

  @XOn('UserAcceptedAQuery')
  testingXOnSingle(payload: string): void {
    singleListener(this, payload);
  }

  @XOn(['UserOpenedX', 'UserClosedX'])
  testingXOnMultiple(): void {
    multipleListener(this);
  }

  @XOn(component => (component as TestingComponent).events)
  testingXOnData(payload: unknown): void {
    dataListener(this, payload);
  }

  @XOn('UserOpenedX', { moduleName: 'searchBox' })
  testingXOnOptions(): void {
    optionsListener(this);
  }

  @XOn('UserClosedX', { moduleName: 'empathize' })
  testingXOnOptionsFiltered(): void {
    filteredOptionsListener(this);
  }

  @XOn('UserClosedX', { moduleName: 'searchBox', origin: 'default' })
  testingXOnMultipleOptionsFiltered(): void {
    filteredWithMultipleOptionsListener(this);
  }

  created(): void {
    createdListener(this);
  }

  render(createElement: CreateElement): VNode {
    return createElement();
  }
}

describe('testing decorators', () => {
  let localVue: typeof Vue;
  let component: Wrapper<TestingComponent>;

  beforeEach(() => {
    component?.vm.$destroy();
    jest.clearAllMocks();
    [, localVue] = installNewXPlugin();
    localVue.use(Vuex);
    const store = new Store({
      modules: {
        x: {
          namespaced: true,
          modules: {
            searchBox: { namespaced: true, ...searchBoxXStoreModule } as any
          }
        }
      }
    });
    installNewXPlugin({}, localVue);

    component = mount(TestingComponent, {
      localVue,
      store
    });
  });

  describe('testing map state and getter', () => {
    it('maps store state', () => {
      expect(component.vm.query).toEqual('');

      component.vm.$store.commit('x/searchBox/setQuery', 'pork shoulder ');

      expect(component.vm.query).toEqual('pork shoulder ');
    });

    it('maps store getters', () => {
      expect(component.vm.trimmedQuery).toEqual('');

      component.vm.$store.commit('x/searchBox/setQuery', 'short ribs ');

      expect(component.vm.trimmedQuery).toEqual('short ribs');
    });
  });

  describe(`testing ${XOn.name} decorator`, () => {
    it('calls original created hook', () => {
      expect(createdListener).toHaveBeenCalledWith(component.vm);
    });

    it('subscribes to a defined event', () => {
      component.vm.$x.emit('UserAcceptedAQuery', 'algo grasioso');

      expect(singleListener).toHaveBeenCalled();
      expect(singleListener).toHaveBeenCalledWith(component.vm, 'algo grasioso');
    });

    it('subscribes to a defined array of events', () => {
      component.vm.$x.emit('UserOpenedX');
      component.vm.$x.emit('UserClosedX');

      expect(multipleListener).toHaveBeenCalledTimes(2);
    });

    it('subscribes dynamically to the events defined in a data property', async () => {
      component.vm.$x.emit('UserIsTypingAQuery', 'algo grasioso');
      component.vm.$x.emit('UserTalked', 'algo chistoso');

      expect(dataListener).toHaveBeenNthCalledWith(1, component.vm, 'algo grasioso');
      expect(dataListener).toHaveBeenNthCalledWith(2, component.vm, 'algo chistoso');

      (component.vm as any).events = ['UserClearedQuery'];
      await localVue.nextTick();
      dataListener.mockClear();

      component.vm.$x.emit('UserIsTypingAQuery', 'algo grasioso');
      component.vm.$x.emit('UserTalked', 'algo chistoso');
      expect(dataListener).not.toHaveBeenCalled();

      component.vm.$x.emit('UserClearedQuery', '');
      expect(dataListener).toHaveBeenCalled();
    });

    it('un-subscribes to any subscribed event when destroying the component', () => {
      component.vm.$destroy();
      component.vm.$x.emit('UserAcceptedAQuery', 'que pasara que misterios habra');
      component.vm.$x.emit('UserIsTypingAQuery', 'estare escribiendo?');
      component.vm.$x.emit('UserTalked', 'no he dicho nada');
      component.vm.$x.emit('UserOpenedX');
      component.vm.$x.emit('UserClosedX');

      expect(singleListener).not.toHaveBeenCalled();
      expect(multipleListener).not.toHaveBeenCalled();
      expect(dataListener).not.toHaveBeenCalled();
    });

    it('filters out callback based on options passed to the decorator', () => {
      component.vm.$x.emit('UserOpenedX');
      expect(optionsListener).toHaveBeenCalled();
      component.vm.$x.emit('UserClosedX');
      expect(filteredOptionsListener).not.toHaveBeenCalled();
    });

    it('filters out callback based on multiple options passed to the decorator', () => {
      component.vm.$x.emit('UserClosedX', undefined, { origin: 'empathize_term' });
      expect(filteredWithMultipleOptionsListener).not.toHaveBeenCalled();
      component.vm.$x.emit('UserClosedX', undefined, { origin: 'default' });
      expect(filteredWithMultipleOptionsListener).toHaveBeenCalled();
    });
  });
});
