import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { arrayToObject, deepFlat, map } from '../../../../utils';
import {
  getFacetsStub,
  getHierarchicalFacetStub,
  getNumberRangeFacetStub,
  getSimpleFacetStub
} from '../../../../__stubs__/facets-stubs.factory';
import { facetsXStoreModule } from '../module';
import { FacetsState } from '../types';
import { resetFacetsStateWith } from './utils';

describe('testing facets module getters', () => {
  Vue.use(Vuex);
  const gettersKeys = map(facetsXStoreModule.getters, getter => getter);
  const store: Store<FacetsState> = new Store(facetsXStoreModule as any);

  describe(`${gettersKeys.flattenedFilters} getter`, () => {
    it('should be empty', () => {
      resetFacetsStateWith(store, {
        facets: {}
      });

      expect(store.getters.flattenedFilters).toHaveLength(0);
    });

    it('should not be empty', () => {
      const facetsStub = getFacetsStub();
      resetFacetsStateWith(store, {
        facets: arrayToObject(facetsStub, 'id')
      });

      expect(store.getters.flattenedFilters.length).toBeGreaterThan(0);
    });

    it('should be the same filters array when no hierarchical facets are included', () => {
      const facetsStub = [getSimpleFacetStub(), getNumberRangeFacetStub()];
      const filtersStub = facetsStub.flatMap(facet => [...facet.filters]);

      resetFacetsStateWith(store, {
        facets: arrayToObject(facetsStub, 'id')
      });

      expect(store.getters.flattenedFilters).toStrictEqual(filtersStub);
    });

    it('should be flattened filters', () => {
      const facetsStub = getFacetsStub();
      resetFacetsStateWith(store, {
        facets: arrayToObject(facetsStub, 'id')
      });

      expect(store.getters.flattenedFilters).toStrictEqual([
        ...getSimpleFacetStub().filters,
        ...deepFlat(getHierarchicalFacetStub().filters, 'children'),
        ...getNumberRangeFacetStub().filters
      ]);
    });
  });

  describe(`${gettersKeys.selectedFilters} getter`, () => {
    it('should be empty', () => {
      const facetsStub = getFacetsStub();
      resetFacetsStateWith(store, {
        facets: arrayToObject(facetsStub, 'id')
      });

      expect(store.getters.selectedFilters).toHaveLength(0);
    });

    it('should be 5 selected', () => {
      const facetsStub = getFacetsStub();
      const dictionaryFacetsStub = arrayToObject(facetsStub, 'label');

      dictionaryFacetsStub['hierarchical_category'].filters[0].selected = true;
      dictionaryFacetsStub['hierarchical_category'].filters[3].selected = true;
      dictionaryFacetsStub['brand_facet'].filters[0].selected = true;
      dictionaryFacetsStub['price_facet'].filters[0].selected = true;
      dictionaryFacetsStub['price_facet'].filters[1].selected = true;
      resetFacetsStateWith(store, {
        facets: dictionaryFacetsStub
      });

      expect(store.getters.selectedFilters).toHaveLength(5);
    });
  });
});
