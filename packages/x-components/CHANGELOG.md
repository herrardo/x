# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.0](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.30...@empathyco/x-components@5.0.0) (2023-12-01)


### ⚠ BREAKING CHANGES

* **components:** remove deprecated origins from (#1344)
* **facets:** The '__unknown-facet__' value for a facetId is deprecated: it has been replaced by the UNKNOWN_FACET_KEY constant, whose value is '__unknown__'.

Co-authored-by: Guillermo Cacheda <cachedacodes@gmail.com>
* setPageSize search module mutation has been replaced by the setConfig mutation. 
setTaggingConfig tagging module mutation and setFacetsConfig facets module mutation have been replaced by the mergeConfig mutation.

EMP-2328
* the property 'querySuggestions' in '' now returns the query suggestions that should be displayed based on the module's config. A new property called 'fullQuerySuggestions' returns all the query suggestions in the module

EMP-1463
* **deps:** minimum node version required is 18.
* **deps:** minimum version required is node v18

EMP-274
* **design-system:** The `x-components` design system has been deprecated. 
The exported theme is no longer available. If you need support for the old design system you should import `@empathyco/x-components/design-system/deprecated-full-theme.css`.
* **design-system:** `x-grid-list` and `x-grid-list__item` classes have been removed from `BaseGrid` component.
* **design-system:** `x-grid-list--cols-{columns}` has been renamed to `x-base-grid--cols-{columns}`
* **design-system:** `x-list` class has been removed from the following components: 

   `BaseModal`, `BaseSuggetions`, `BaseTabsPanel`, `Facets`, `FiltersList`, `FiltersSearch`, `IdentifierResults`, `MyHistory`, `PartialResultList`, `ResultVariantSelector`, `Recommendations`, `RelatedTags`, `SlidingPanel`, `SelectedFiltersList`.
   
* **design-system:** `FixedHeaderAndAsidesLayout` `MultiColumnMaxWidthLayout` and `SingleColumnLayout` have been deprecated.
* **design-system:** `BaseModal` default opacity has changed from `0.7` to `0.3`.
* **design-system:** `x-list__item` class has been removed from `BaseTabsPanel` component.
* **design-system:** `x-message` class has been removed from `Redirection` component.

EMP-133

Co-authored-by: Diego Pascual <diegopf@users.noreply.github.com>
Co-authored-by: Manuel Navarro <manueln@empathy.co>
* **design-system:** Old `design-system` `progress-bar` styles are now located in the `deprecated-full-theme.css` file.
* **design-system:** Renamed `x-progress-bar__line` class to `x-progress-bar-fill`.
* `base-column-picker-list` structure changes. It now wraps the buttons in a div instead of using ul and li. Additionally, the class for the selected option has been changed to `x-selected`.
* **design-system:** Old `design-system` `Tag` styles are now located in the  `deprecated-full-theme.css` file.
* **design-system:** Old `x-tag--is-curated` and `x-tag--is-selected` classes are no longer used by `RelatedTag` component. 
* **design-system:** design system scroll styles are deprecated. To continue using them import from deprecated-full-theme.css
* **design-system:** Old design-system `Icon` styles are now located in the `deprecated-full-theme.css` file.
Removed `checkbox-card`, `nq1`, `nq2`, `nq3`, and `nq4 icons`.
* **components:** class `x-picture__image` renamed to `x-picture-image`, deprecate classes `x-picture__image--placeholder` and `x-picture__image--fallback`
* **components:** Renamed `SlidingPanel` css classes `x-sliding-panel--at-start` and `x-sliding-panel--at-end` to `x-sliding-panel-at-start` and `x-sliding-panel-at-end` respectively.
* **components:** Renamed `SlidingPanel` buttons css classes `x-sliding-panel__button-left` and `x-sliding-panel__button-right` to `x-sliding-panel-button-left` and `x-sliding-panel-button-right` respectively.
* **components:** Old design-system `SlidingPanel` styles (including the updated button classes) are now located in the `deprecated-full-theme.css` file.
* **history-queries:** Renamed `removeHistoryQueryClass` prop to `removeButtonClass`.
* Rename `x-grid` class to `x-grid-list`.
* Rename `x-grid__item` class to `x-grid-list__item`.
* Rename `x-grid--cols-{cols}` class to `x-grid-list--cols-{cols}`.
* **design-system:** suggestion and suggestion group styles are now deprecated. To continue using them import from `deprecated-full-theme.css`.
* Rename `NextQueryPreviewMounted` to `NextQueryPreviewMountedHook` and `QueryPreviewRemoved` to `QueryPreviewUnmountedHook`
* **components:** Removes `queryHTML` slot scope prop from `BaseSuggestion`, `PopularSearch` `QuerySuggestion` and `HistoryQuery`. Use the new `Highlight` component instead.
* the event `SearchResponseProvided` was renamed to `SearchResponseChanged`
* **design-system:** the old design system button styles are now located in the `deprecated-full-theme.css`, if a setup is not using the new design system, it must import this file.
* **components:** `facets` are now optional in `Suggestion`.
* **tagging:** `tagging` property of `Taggable` and `queryTagging` property of `SearchResponse` are optional.
* **result:** `Result` model properties are optional, except `id`, `modelName` and `tagging`.
* **facets:** Removed the `setFilter`mutation from `facets` X-Module. Use `mutateFilter` instead.
* **facets:** Modified the `HierarchicalFilter.children` Model type. Now it is an `Array<HierarchicalFilter>` instead of an array of ids.
* `--x-number-aspect-ratio-picture` is now inverted. Previously a value of 2 meant that it was twice taller than wider. Now it means twice wider than taller.
* `XAPI` is now available now at `window.InterfaceX`.
* **facets:** Renamed method `registerFilterModifier` in `FilterEntityFactory` to `registerModifierByFacetId`.
* **facets:** Changed `modifiers` parameter of `registerFilterModifier` in `FilterEntityFactory` from a single array in favour of rest parameters.
* Request types moved to `x-types` package. Change the imports from `x-adapter` to `x-type`.
* Removed `TaggingInfo` type. Use `TaggingRequest` from `@empathyco/x-types` instead.
* **eslint:** Vue config now also extends the recommended config from vuejs-accesibility plugin.
* Remove `selected` and `previous` logic from related tags.
* Remove `EmpathyRequestRelatedTagsQueryMapper`.
* **components:** Removed `CollapseFromTop` Animation. Use `animateScale()` instead.
* **components:** Removed `TranslateFromLeft` and `TranslateFromRight` components. Use `animateTranslate('left')` and `animateTranslate('right')` instead.
* **facets:** Remove `BaseFilter` component. Use `RenderlessFilter`instead.
* **components:** `SlidingPanel` buttons do not have the round variant set by default.
* **components:** ArrowIcon changed to ArrowLeftIcon.
* **storage-service:** `StorageService` has been renamed to `BrowserStorageService`.

### Features

* adapt `base-column-picker-list` to use the XDS component of button group (#1115) ([7057b8f](https://github.com/empathyco/x/commit/7057b8f7cd7f1e20ad248c40e8da97450895cd26)), closes [EX-8144](https://searchbroker.atlassian.net/browse/EX-8144)
* Adapt Result mapping according to new API standard (#1039) ([89186b6](https://github.com/empathyco/x/commit/89186b604d72f18bce257b88b536243c11c5ddf3))
* **adapter:** disable cancel http client (#658) ([3b5b86d](https://github.com/empathyco/x/commit/3b5b86d4725edefa084181a704df716a389eecbc)), closes [EX-6875](https://searchbroker.atlassian.net/browse/EX-6875)
* **adapter:** use the `x-adapter-platform` (#565) ([55bccb4](https://github.com/empathyco/x/commit/55bccb4118bc0fd2468b736eb470942aaae2e4ae)), closes [EX-5936](https://searchbroker.atlassian.net/browse/EX-5936)
* add 'my_history' as feature location (#587) ([7b0263e](https://github.com/empathyco/x/commit/7b0263e23c9afb2af61174ac53bdedd3eb4263ba)), closes [EX-6527](https://searchbroker.atlassian.net/browse/EX-6527)
* add `alt-text` accessibility ([da5a10a](https://github.com/empathyco/x/commit/da5a10a236aae5fae96943fe0ad54849df15e7f5)), closes [EX-5930](https://searchbroker.atlassian.net/browse/EX-5930)
* add `dynamic-props` mixin (#798) ([defafbb](https://github.com/empathyco/x/commit/defafbb2c40f51e3c44474b469b353472a91a828)), closes [EX-7220](https://searchbroker.atlassian.net/browse/EX-7220)
* add `filterItemClass` prop to `HierarchicalFilter` (#1135) ([99de550](https://github.com/empathyco/x/commit/99de5508e64e2d8c5ea849f89a3cc81472527c4d))
* add `Highlight` component (#872) ([1b5aa57](https://github.com/empathyco/x/commit/1b5aa5793b7916ec0433b4110b7ef355f882f4f6)), closes [EX-7468](https://searchbroker.atlassian.net/browse/EX-7468)
* add `prettier-plugin-tailwindcss` (#1033) ([c3eae8b](https://github.com/empathyco/x/commit/c3eae8bef0a75fa1e78f1190947a74fa9269d6bd)), closes [EX-7884](https://searchbroker.atlassian.net/browse/EX-7884)
* add `queriesPreview` option to snippet config (#654) ([7733c98](https://github.com/empathyco/x/commit/7733c9856b2859574ca0cace9c79b8b58545f46a)), closes [EX-6849](https://searchbroker.atlassian.net/browse/EX-6849)
* Add `setSnippetConfig` function to the `X` API ([8c53cc7](https://github.com/empathyco/x/commit/8c53cc74cdd95e1a8ef3aa8167206cd81685d1e7)), closes [EX-5384](https://searchbroker.atlassian.net/browse/EX-5384)
* add `uiLang` parameter (#714) ([f4108d4](https://github.com/empathyco/x/commit/f4108d4a76582dac7b1f8cd240e91f226e7b1ad5)), closes [EX-6855](https://searchbroker.atlassian.net/browse/EX-6855)
* add `vue devtools` plugin to ease `XEvents` and `wiring` visualization (#215) ([bd148ec](https://github.com/empathyco/x/commit/bd148ecb9682f8d4161d278c03f110f8f050d323)), closes [EX-7032](https://searchbroker.atlassian.net/browse/EX-7032)
* add alias for the query suggestions that should be displayed (#1247) ([4de1ccc](https://github.com/empathyco/x/commit/4de1ccc2f287749f91a1014edc3c127c9207bc52))
* Add close event to BaseXAPI (#1091) ([1aaaeb0](https://github.com/empathyco/x/commit/1aaaeb0dd2cb20a90655e9afe7622de67616e708)), closes [EX-8050](https://searchbroker.atlassian.net/browse/EX-8050)
* Add directional origins for translate animations (#773) ([9f4a0b0](https://github.com/empathyco/x/commit/9f4a0b03c675291672081388e42fcec725ab594d))
* add dynamic classes to the suggestion item inside the `base-suggestions` (#1008) ([3e0b683](https://github.com/empathyco/x/commit/3e0b683eb83b9b2e9f6ebb0a17b80a9ff46d6e3c)), closes [EX-7834](https://searchbroker.atlassian.net/browse/EX-7834)
* add dynamic props for title to promoteds and banner (#1168) ([1914f01](https://github.com/empathyco/x/commit/1914f01981a2de48c65d3a88cfcedc26c2a293fe))
* add filters to the query preview request (#1292) ([7f20022](https://github.com/empathyco/x/commit/7f20022eee593460681bfb1c4d574162f325cc05))
* add position on Banner and Promoted models (#800) ([e7393fb](https://github.com/empathyco/x/commit/e7393fbce8d0767d3c762aa714fe94e162203a12)), closes [EX-7293](https://searchbroker.atlassian.net/browse/EX-7293)
* Add search input hover events (#772) ([393cc87](https://github.com/empathyco/x/commit/393cc877457f618396a5b71a7a826e6e8d139c3a)), closes [EX-7177](https://searchbroker.atlassian.net/browse/EX-7177)
* add settings icon (#589) ([7f93849](https://github.com/empathyco/x/commit/7f9384915718805809ff733f2be60ae6ebb01910)), closes [EX-6519](https://searchbroker.atlassian.net/browse/EX-6519)
* add sticky filters (#1113) ([3b51b60](https://github.com/empathyco/x/commit/3b51b6045a283f9f27dd7c6e16dec7f68a8a2921)), closes [EX-8076](https://searchbroker.atlassian.net/browse/EX-8076)
* add view to test base-result-link accessibility (#972) ([21d185a](https://github.com/empathyco/x/commit/21d185a8a107f95be4436dabfbeffe83bc7dcd62))
* adding edocs preview ([8580a72](https://github.com/empathyco/x/commit/8580a72fa3b9125ad7a487995eabedb7ecfbde2b))
* apply dynamic css mixin to sliding panel and column picker list buttons (#815) ([4cc040d](https://github.com/empathyco/x/commit/4cc040d7d7c4751a5f31c6e36acfa64d28cbb23d)), closes [EX-7224](https://searchbroker.atlassian.net/browse/EX-7224)
* **banner:** add support without title and no clickable (#1069) ([7207767](https://github.com/empathyco/x/commit/72077675691dc8fab7361f64e0302aa8d33213fa))
* Change suggestion components to bind $attrs to base suggestions (#831) ([49c139b](https://github.com/empathyco/x/commit/49c139bc55f4cc1a2e1e0ec2e2e7972376eaf487)), closes [EX-7356](https://searchbroker.atlassian.net/browse/EX-7356)
* **components:** add  `columns` prop in `BaseVariableColumnGrid` (#1112) ([8a74847](https://github.com/empathyco/x/commit/8a7484779542768a1f03dbd09eff164b0ecb8686)), closes [EX-8135](https://searchbroker.atlassian.net/browse/EX-8135)
* **components:** add `BaseSwitch` component (#586) ([31cde2d](https://github.com/empathyco/x/commit/31cde2dfb79dcc549c8662b558ef5b80529f2d01)), closes [EX-6004](https://searchbroker.atlassian.net/browse/EX-6004)
* **components:** add `buttonClass` prop in `SlidingPanel` ([fa554a2](https://github.com/empathyco/x/commit/fa554a2231ec9a00b5aea566970c2b7b0d34845f)), closes [EX-5233](https://searchbroker.atlassian.net/browse/EX-5233)
* **components:** add `contentClass` to `modals` (#1009) ([68b8790](https://github.com/empathyco/x/commit/68b8790289dd6e233c0199497cdb09f515ccbeec)), closes [EX-7479](https://searchbroker.atlassian.net/browse/EX-7479)
* **components:** add `getTargetElement` util to retrieve the `event.target` (#870) ([8be7beb](https://github.com/empathyco/x/commit/8be7beba25a5a90b142fbb1a905d41503befc92c))
* **components:** Add `GlobalXBus `component ([cc8e28b](https://github.com/empathyco/x/commit/cc8e28b5b5d7f1735c490c0b576d620f4f1dd103)), closes [EX-3535](https://searchbroker.atlassian.net/browse/EX-3535)
* **components:** add `MainModal`, `OpenMainModal` and `CloseMainModal` (#609) ([526ab58](https://github.com/empathyco/x/commit/526ab5813f58258180b5640cab6bf0f2179fa40a)), closes [EX-6546](https://searchbroker.atlassian.net/browse/EX-6546)
* **components:** Add `payload` and `metadata` to the `SnippetCallbackExecuted` event payload ([a18b8fa](https://github.com/empathyco/x/commit/a18b8fafcc7607fef82d3c9fb1211669f3bbc8a3)), closes [EX-5324](https://searchbroker.atlassian.net/browse/EX-5324)
* **components:** add `SnippetCallbacks` component ([0b89a9f](https://github.com/empathyco/x/commit/0b89a9ff0de60194567d47e768bf0f0fb654b998)), closes [EX-5002](https://searchbroker.atlassian.net/browse/EX-5002)
* **components:** add disable animation mixin (#703) ([ea344f9](https://github.com/empathyco/x/commit/ea344f9d5e7b36da6aabdd4fe5d2a1ad05dbcfc8)), closes [EX-6838](https://searchbroker.atlassian.net/browse/EX-6838)
* **components:** add filters to base-suggestions (#758) ([2014861](https://github.com/empathyco/x/commit/2014861453215808ee4279f9484f1d845780d7bf)), closes [EX-6346](https://searchbroker.atlassian.net/browse/EX-6346)
* **components:** add grid-4-col and update light-bulb icons (#579) ([5312952](https://github.com/empathyco/x/commit/5312952c69f67525a35b77008128264eddaae206)), closes [EX-6506](https://searchbroker.atlassian.net/browse/EX-6506)
* **components:** Add icons for Arrows UP DOWN LEFT and RIGHT. (#295) ([693b26f](https://github.com/empathyco/x/commit/693b26f8e2d250f97bcf0cce472299b2edcc4823)), closes [EX-5245](https://searchbroker.atlassian.net/browse/EX-5245)
* **components:** Add new origins to the `animateClipPath` animation factory. (#777) ([d016057](https://github.com/empathyco/x/commit/d016057ea0c92901dc88df755351b4acee32f472)), closes [EX-7195](https://searchbroker.atlassian.net/browse/EX-7195)
* **components:** add new slot `extra-aside` to `SingleColumnLayout` and `FixedHeaderAndAsidesLayout` (#591) ([91d406e](https://github.com/empathyco/x/commit/91d406ed7267d420009a5f3ee8c5cc092f74546a)), closes [EX-6614](https://searchbroker.atlassian.net/browse/EX-6614)
* **components:** add radio button icons (#574) ([4432d5f](https://github.com/empathyco/x/commit/4432d5f927e5c5cac6cb7481923e32ceb6cb0499)), closes [EX-6439](https://searchbroker.atlassian.net/browse/EX-6439)
* **components:** add Result Rating component ([db5cbb5](https://github.com/empathyco/x/commit/db5cbb5779e0e503ec934df4cda3dd241c49fc8e)), closes [EX-5243](https://searchbroker.atlassian.net/browse/EX-5243)
* **components:** Allow `BaseResultAddToCart` to use external listeners. ([a596c07](https://github.com/empathyco/x/commit/a596c07c1ead0e8d3fcf169afddaf15ad6d92e47)), closes [EX-5323](https://searchbroker.atlassian.net/browse/EX-5323)
* **components:** created abstract factory for animations ([a6120c1](https://github.com/empathyco/x/commit/a6120c135f93e5993f8d41b2b823085a2bf3d291)), closes [EX-5355](https://searchbroker.atlassian.net/browse/EX-5355)
* **components:** deprecate x-picture__image and placeholder/fallback styles (#1036) ([73a08a5](https://github.com/empathyco/x/commit/73a08a576b3f9b715cccefee8cb452d00cd45bcb)), closes [EX-7888](https://searchbroker.atlassian.net/browse/EX-7888)
* **components:** Emit ColumnsNumberRendered event on BaseGrid (#806) ([87a8ca9](https://github.com/empathyco/x/commit/87a8ca947f8d83dff1a0044db80649eb297361fb)), closes [EX-7291](https://searchbroker.atlassian.net/browse/EX-7291)
* **components:** fix 'BaseRating' component styles (#264) ([053447f](https://github.com/empathyco/x/commit/053447fdb2884f04f6099b6b78876c006568a644)), closes [EX-5096](https://searchbroker.atlassian.net/browse/EX-5096)
* **components:** insert promoteds in the grid using position (#801) ([b537cae](https://github.com/empathyco/x/commit/b537caeb2077fa6b8d5898d0dbdb9069a06ab2e8)), closes [EX-7295](https://searchbroker.atlassian.net/browse/EX-7295)
* **components:** make `BaseIdModalClose` rendering configurable (#627) ([4bf97af](https://github.com/empathyco/x/commit/4bf97af19ac5f2fd1b08b6e4097dec45eef00679)), closes [EX-6726](https://searchbroker.atlassian.net/browse/EX-6726)
* **components:** make `BaseIdModalOpen` rendering configurable (#637) ([77cb564](https://github.com/empathyco/x/commit/77cb5646b1e43c8b7aa428db4102dc6aca8affdf)), closes [EX-6751](https://searchbroker.atlassian.net/browse/EX-6751)
* **components:** merge a variant with the result (#667) ([553d0e5](https://github.com/empathyco/x/commit/553d0e5de8ef5468eb673246f39fbeb826301fa1)), closes [EX-6762](https://searchbroker.atlassian.net/browse/EX-6762)
* **components:** remove deprecated origins (#1355) ([3d7c981](https://github.com/empathyco/x/commit/3d7c981380bd8af30724780f7810808d563db471))
* **components:** Use `Highlight` component inside suggestion components.(#894) ([ceb9c0c](https://github.com/empathyco/x/commit/ceb9c0c729d9a7a3b8a983e5b23912d561f2bd4d)), closes [EX-7469](https://searchbroker.atlassian.net/browse/EX-7469)
* **components:** use XDS `sliding panel` (#1028) ([9773003](https://github.com/empathyco/x/commit/97730036b473678b8487a386bc6d83bd3ecf872d)), closes [EX-7831](https://searchbroker.atlassian.net/browse/EX-7831)
* **components:** variants auto selection (#679) ([c1c8664](https://github.com/empathyco/x/commit/c1c866481ae8866fec4fd9e2dd5389fcba00e62b)), closes [EX-6878](https://searchbroker.atlassian.net/browse/EX-6878)
* Create experience controls module tests (#1303) ([98acc0f](https://github.com/empathyco/x/commit/98acc0f68a184f6774acb1f8f6506ec9f5d1ed48))
* **design-system:** add `curated` modifier to the `suggestion` ([dd229fd](https://github.com/empathyco/x/commit/dd229fd3d64840ed3041bec618a1a23e3726430d)), closes [EX-5290](https://searchbroker.atlassian.net/browse/EX-5290)
* **design-system:** add `icon` to XDS  (#1053) ([21605ab](https://github.com/empathyco/x/commit/21605abc99f5da05556cfa7edb4213c61c205b78)), closes [EX-7783](https://searchbroker.atlassian.net/browse/EX-7783)
* **design-system:** Add `Input Group` component to the X Desing System. (#1066) ([5f83b14](https://github.com/empathyco/x/commit/5f83b1460408e0e3b6a5f7fedaf91ee006d27a9c)), closes [EX-7944](https://searchbroker.atlassian.net/browse/EX-7944)
* **design-system:** add `product-image` `XDS` component (#1025) ([d60e239](https://github.com/empathyco/x/commit/d60e239012d04d547b5430eb8afc22536f66d838))
* **design-system:** add `suggestion` component to the XDS (#838) ([055af83](https://github.com/empathyco/x/commit/055af838ddbf3a1293936d5994c455e4e8499654))
* **design-system:** add `tailwindcss` to `x-components` and configure it to use `x-tailwindcss` (#655) ([4109a8a](https://github.com/empathyco/x/commit/4109a8ad9d29378078603d97e31c073ceb2671ae)), closes [EX-6793](https://searchbroker.atlassian.net/browse/EX-6793)
* **design-system:** Add bottom variant to `x-shadow` utility in the Design System ([a23552f](https://github.com/empathyco/x/commit/a23552f29d1ec1b7939c770862d91f9e2f3a4890)), closes [EX-5184](https://searchbroker.atlassian.net/browse/EX-5184)
* **design-system:** add curated tags (#311) ([9f40c2b](https://github.com/empathyco/x/commit/9f40c2b17eb08353efc964dba075470877eead46)), closes [EX-5089](https://searchbroker.atlassian.net/browse/EX-5089)
* **design-system:** add identifier result in suggestion component ([d4ce3c2](https://github.com/empathyco/x/commit/d4ce3c2eb1188e38e55e466f65c9da165bf9bfe7)), closes [EX-5065](https://searchbroker.atlassian.net/browse/EX-5065)
* **design-system:** Add more utility classes.  ([592e076](https://github.com/empathyco/x/commit/592e0761d201d80fdf62ba260ac4ef0847fb7f17)), closes [EX-5241](https://searchbroker.atlassian.net/browse/EX-5241)
* **design-system:** Add suggestion group component (#943) ([4bac818](https://github.com/empathyco/x/commit/4bac8183a29ec17a99a90edeae55ba3d4301b626)), closes [EX-7496](https://searchbroker.atlassian.net/browse/EX-7496)
* **design-system:** add tailwind showcase component (#778) ([0178ef5](https://github.com/empathyco/x/commit/0178ef5a4b472e2ca14f98f1243d08e36e1f5840)), closes [EX-7078](https://searchbroker.atlassian.net/browse/EX-7078)
* **design-system:** add XDS badge component (#1100) ([c0d8446](https://github.com/empathyco/x/commit/c0d84461b1cb72705e8570766c19078c2eef3abf)), closes [EX-7992](https://searchbroker.atlassian.net/browse/EX-7992)
* **design-system:** add XDS progress bar component (#1149) ([21a52f5](https://github.com/empathyco/x/commit/21a52f5b3af3f4ac341e3b9844e0273b355153aa))
* **design-system:** add zoom effect (#799) ([e7af33a](https://github.com/empathyco/x/commit/e7af33a7d2186e4fc6191961ee8b12a35198fc59)), closes [EX-6315](https://searchbroker.atlassian.net/browse/EX-6315)
* **design-system:** allow suggestions to be tags ([24c94bb](https://github.com/empathyco/x/commit/24c94bb604f87a2135a36be5a298f053eba80738)), closes [EX-4917](https://searchbroker.atlassian.net/browse/EX-4917)
* **design-system:** change curated tag toke values to reuse default ones. ([2fd261a](https://github.com/empathyco/x/commit/2fd261ae54ec3de8eabdbcd5611bf5e1416d37f8)), closes [EX-5354](https://searchbroker.atlassian.net/browse/EX-5354)
* **design-system:** deprecate old design system button styles (#830) ([78fbf63](https://github.com/empathyco/x/commit/78fbf63116a9312e361540388b2573e0939dc7ae))
* **design-system:** deprecate old DS (#1138) ([53b0558](https://github.com/empathyco/x/commit/53b05585551a07548bf8071d5112b94f4151544b))
* **design-system:** deprecate old DS `Tag` component (#1103) ([f698e00](https://github.com/empathyco/x/commit/f698e004daa0ed73fafefa2968c2b1ced66397e7)), closes [EX-7990](https://searchbroker.atlassian.net/browse/EX-7990)
* **design-system:** deprecate old DS filters (#1121) ([dd9690d](https://github.com/empathyco/x/commit/dd9690d5f59ae39e6c7f1a29f542732c03221cfe)), closes [EX-8152](https://searchbroker.atlassian.net/browse/EX-8152)
* **design-system:** deprecate old suggestion and suggestion group styles (#975) ([69d8bc5](https://github.com/empathyco/x/commit/69d8bc59ce43660b3295dcafa9283598d1143336)), closes [EX-7725](https://searchbroker.atlassian.net/browse/EX-7725)
* **design-system:** deprecate old typography styles (#973) ([15d6d64](https://github.com/empathyco/x/commit/15d6d64c18fe28664e873802fe34073158c30648)), closes [EX-7726](https://searchbroker.atlassian.net/browse/EX-7726)
* **design-system:** deprecate old x-scroll styles (#1073) ([3916c5f](https://github.com/empathyco/x/commit/3916c5fab866a51f5c2df089cef3e80a9c0ae1ee)), closes [EX-7982](https://searchbroker.atlassian.net/browse/EX-7982)
* **design-system:** generate old design system tokens with tailwind values (#675) ([7aa42e4](https://github.com/empathyco/x/commit/7aa42e4e26ec34fea942bbf7f0c7f10a97a94237)), closes [EX-6790](https://searchbroker.atlassian.net/browse/EX-6790)
* **desing-system:** Add `Grid2RowsIcon` component ([cbd014f](https://github.com/empathyco/x/commit/cbd014fb1a07c2aa738c3ef828c9caf5ec9ded39)), closes [EX-5238](https://searchbroker.atlassian.net/browse/EX-5238)
* **desing-system:** Add layout `layout-stack` util. (#1076) ([38db5b3](https://github.com/empathyco/x/commit/38db5b3b4c10a2bd288e9e79b15232f063002156)), closes [EX-8000](https://searchbroker.atlassian.net/browse/EX-8000)
* **desing-system:** Add new color tokens. (#275) ([e93fcc4](https://github.com/empathyco/x/commit/e93fcc4cea0e975441695f14a66b0863cb5896af)), closes [EX-5171](https://searchbroker.atlassian.net/browse/EX-5171)
* disable `@typescript-eslint/no-extra-parens` rule (#715) ([3718017](https://github.com/empathyco/x/commit/3718017c5528156f931bc8b1f2d208cdb50781ed)), closes [EX-6996](https://searchbroker.atlassian.net/browse/EX-6996)
* Emit SearchResponseProvided event from Search Module (#864) ([586899d](https://github.com/empathyco/x/commit/586899dbb556f50772bdfd1dc4eb5216ebd15e41)), closes [EX-5167](https://searchbroker.atlassian.net/browse/EX-5167)
* **empathize:** show Empathize only when it has content  (#820) ([c926335](https://github.com/empathyco/x/commit/c926335a33dca2e8d379accd065726e02bd6f384)), closes [EX-7169](https://searchbroker.atlassian.net/browse/EX-7169)
* **eslint:** add `vuejs-accessibility` plugin (#427) ([6789771](https://github.com/empathyco/x/commit/6789771ab88a909552da74095694a4c2a191a51d)), closes [EX-5845](https://searchbroker.atlassian.net/browse/EX-5845)
* **EX-3539:** track PDP add to cart (#306) ([dcad4f6](https://github.com/empathyco/x/commit/dcad4f69ce6b267960f882b3831459e372086272)), closes [EX-3539](https://searchbroker.atlassian.net/browse/EX-3539) [EX-3538](https://searchbroker.atlassian.net/browse/EX-3538)
* **experience-controls:** experience controls module and adapter (#1307) ([6ae3f6b](https://github.com/empathyco/x/commit/6ae3f6b3d537910781dbfebf3b2e670eff391911))
* export sticky modifier (#1151) ([8bbd1ab](https://github.com/empathyco/x/commit/8bbd1ab6b0b595c94386bdc0f37d7061df072127))
* **extra-params:** add option to add more extra params using a prop in `SnippetConfigExtraParams` component ([7f9f8b2](https://github.com/empathyco/x/commit/7f9f8b2a7d2a78ed5a101f6e005fffa4f20d3594)), closes [EX-5205](https://searchbroker.atlassian.net/browse/EX-5205)
* **extra-params:** allow currency to be an extra param as default ([319851d](https://github.com/empathyco/x/commit/319851da07f04a79aae128081c9c45cd7ae1b1e9))
* **extra-params:** makes `excludedExtraParams` configurable ([ca2bed1](https://github.com/empathyco/x/commit/ca2bed17c7ef8ed893a65e7d1a055901491ea8fa))
* extract SessionService to x-utils package ([5268808](https://github.com/empathyco/x/commit/52688087e577dfd7ce9b0669b21ada75ae67053c))
* **facets:** add `PreselectedFilters` component ([5496d78](https://github.com/empathyco/x/commit/5496d7868c77d8b9211fd532bf964770da1d6a3c)), closes [EX-6023](https://searchbroker.atlassian.net/browse/EX-6023)
* **facets:** add `registerModifierByFilterModelName` ([36956a1](https://github.com/empathyco/x/commit/36956a13b33cc5430381d33ac53cd33b706136da)), closes [EX-6106](https://searchbroker.atlassian.net/browse/EX-6106)
* **facets:** add facets mixin to share logic between components ([c8a9046](https://github.com/empathyco/x/commit/c8a904612213cd12040dd6fa1348f6c9a7726eda)), closes [EX-2899](https://searchbroker.atlassian.net/browse/EX-2899)
* **facets:** Add slot by Facet ModelName. (#572) ([899515a](https://github.com/empathyco/x/commit/899515a1424bfab9a8d937a1feb9507917173807)), closes [EX-6433](https://searchbroker.atlassian.net/browse/EX-6433)
* **facets:** change `NumberRangeFilter` component to use `RenderlessFilter` instead of `BaseFilter` ([f0edfac](https://github.com/empathyco/x/commit/f0edfac14a184ed7fefd27e1c1e700848ada4471)), closes [EX-3953](https://searchbroker.atlassian.net/browse/EX-3953)
* **facets:** expose `clickEvents` as a `prop` in filters components using a `RenderlessFilter` ([013d83d](https://github.com/empathyco/x/commit/013d83d93ac734a1365bbf98a19ae15dc2f1a64b)), closes [EX-5986](https://searchbroker.atlassian.net/browse/EX-5986)
* **facets:** implement a strategy to decide what filters are sent in the request (#1124) ([a2174b5](https://github.com/empathyco/x/commit/a2174b58d356cc16177cf3d4c2ac3866dadd86b7)), closes [EX-7550](https://searchbroker.atlassian.net/browse/EX-7550)
* **facets:** Move filters flattening from `x-adapter-platform` to `x-components`. (#626) ([2bebaeb](https://github.com/empathyco/x/commit/2bebaeb2863fe794f1b3bea924904651b9302ef6)), closes [EX-6484](https://searchbroker.atlassian.net/browse/EX-6484)
* **facets:** remove filters on new query (#717) ([e452ece](https://github.com/empathyco/x/commit/e452ecebb194b2fa248402405e26ed1044c1d849)), closes [EX-6196](https://searchbroker.atlassian.net/browse/EX-6196)
* **facets:** Unify __unknown__ and __unknown-facet__ in a constant (#1351) ([30585f2](https://github.com/empathyco/x/commit/30585f2d57653aa33c68f748ff10f93202f1887e))
* filter query preview (#1296) ([9543c47](https://github.com/empathyco/x/commit/9543c477cd8a305fd89edb9b24d046c774537c9b))
* filters in history queries (#1315) ([1e266d9](https://github.com/empathyco/x/commit/1e266d9ce8dbf5661488800bc9566f117c1616f5))
* fix form label warnings ([2437b09](https://github.com/empathyco/x/commit/2437b096ca1ddb9b97c3207e338b9fb587bc3ea7)), closes [EX-6025](https://searchbroker.atlassian.net/browse/EX-6025)
* fix rest of warnings for accessibility ([553d5ba](https://github.com/empathyco/x/commit/553d5bac9256871e69de2c3b87dfc99a993d0f1f)), closes [EX-6149](https://searchbroker.atlassian.net/browse/EX-6149)
* hidde overflow-y in the sliding panel (#768) ([3458e61](https://github.com/empathyco/x/commit/3458e618005e6a1bcd875127749a90b411b80f86)), closes [EX-7015](https://searchbroker.atlassian.net/browse/EX-7015)
* history-queries-switch wai aria adjustments (#847) ([c05e194](https://github.com/empathyco/x/commit/c05e194306520aef2d8d684f38f616ab26e9ebf9)), closes [EX-7344](https://searchbroker.atlassian.net/browse/EX-7344)
* **history-queries:** add `HistoryQueriesSwitch` component (#593) ([8c87cc3](https://github.com/empathyco/x/commit/8c87cc3a35336720d3da79ab7347e52caa4cd922)), closes [EX-6515](https://searchbroker.atlassian.net/browse/EX-6515)
* **history-queries:** add `my-history` component ([a7de7f2](https://github.com/empathyco/x/commit/a7de7f297251bf4290787e362f46b2ab3ec6a428)), closes [EX-3582](https://searchbroker.atlassian.net/browse/EX-3582)
* **history-queries:** add `MyHistory` component ([9929212](https://github.com/empathyco/x/commit/992921275edcca7a6c14ab6dfeaa2dbacae6a5e8)), closes [EX-5703](https://searchbroker.atlassian.net/browse/EX-5703)
* **history-queries:** add `UserClickedDismissDisableHistoryQueries` event ([ea0bddc](https://github.com/empathyco/x/commit/ea0bddce87ec1e87b753bb39863cbee903fb9eed)), closes [EX-6682](https://searchbroker.atlassian.net/browse/EX-6682)
* **history-queries:** add dynamic classes to the history query suggestion (#1014) ([ddd4ac7](https://github.com/empathyco/x/commit/ddd4ac76f30f90bb68497d507948caee060944cf)), closes [EX-7853](https://searchbroker.atlassian.net/browse/EX-7853)
* **history-queries:** add dynamic classes to the remove history query button (#1007) ([b5623d1](https://github.com/empathyco/x/commit/b5623d1c6f7f2709251164c6055b616218163c6f)), closes [EX-7833](https://searchbroker.atlassian.net/browse/EX-7833)
* **history-queries:** add toggle to enable/disable the history queries ([655b55a](https://github.com/empathyco/x/commit/655b55a3f10788073a842d18f7849634e5f94376)), closes [EX-5600](https://searchbroker.atlassian.net/browse/EX-5600)
* **history-queries:** bind `formatTime` to `suggestion-content` slot (#598) ([589eef2](https://github.com/empathyco/x/commit/589eef287534e9916dcda7b0ad86626eb450decd)), closes [EX-6611](https://searchbroker.atlassian.net/browse/EX-6611)
* **history-queries:** bind formatTime callback to MyHistory suggestion slot (#1049) ([0e20cf3](https://github.com/empathyco/x/commit/0e20cf3315b2f2a687ee63b14bb50bac021eb57f)), closes [EX-7879](https://searchbroker.atlassian.net/browse/EX-7879)
* **history-queries:** disable `MyHistory` without confirmation when the `history queries` list is empty (#615) ([8b0b1d6](https://github.com/empathyco/x/commit/8b0b1d6e818557eba9482dcd149ed3882ca6c854)), closes [EX-6696](https://searchbroker.atlassian.net/browse/EX-6696)
* **history-queries:** emit click event on HistoryQuery click (#1048) ([2e7d074](https://github.com/empathyco/x/commit/2e7d07484571a9458a14fab4435b10523f6e7457)), closes [EX-7879](https://searchbroker.atlassian.net/browse/EX-7879)
* **history-queries:** expose `historyQueriesWithResults` in the alias API (#991) ([90c17f5](https://github.com/empathyco/x/commit/90c17f54a1bc1a4c613d06e64dd630f9e1efca61)), closes [EX-7476](https://searchbroker.atlassian.net/browse/EX-7476)
* **history-queries:** Hide history queries with no results (#865) ([58f155d](https://github.com/empathyco/x/commit/58f155d2eefe1676646d320c9f310ad1d28aab5e))
* **identifier-results:** add extra params in the x-module ([6afff42](https://github.com/empathyco/x/commit/6afff426081b645bb0e878c77915a4c319b847d2)), closes [EX-5066](https://searchbroker.atlassian.net/browse/EX-5066)
* **identifier-results:** add maxItemsToRender prop (#576) ([c740b8b](https://github.com/empathyco/x/commit/c740b8b8c1a66d25eb8cc2aaa84303cb186ae8ea)), closes [EX-6414](https://searchbroker.atlassian.net/browse/EX-6414)
* Improve `tailwindcss` types (#730) ([b7ab20c](https://github.com/empathyco/x/commit/b7ab20cfb0faa7f21fdf4aaaa4ae3e6d44bc6a79)), closes [EX-7041](https://searchbroker.atlassian.net/browse/EX-7041)
* improve customization and add prop classes to editable-number-range-filter (#1253) ([fda4cc6](https://github.com/empathyco/x/commit/fda4cc69be19399647ba1128ebb872b8eb36e011))
* Improve tailwindcss types. (#725) ([14dec97](https://github.com/empathyco/x/commit/14dec974174cd18e63cb5f4e9a690a9989de44bc)), closes [EX-6790](https://searchbroker.atlassian.net/browse/EX-6790)
* make `adapter` configurable in the `home` view (#750) ([0fcc5cf](https://github.com/empathyco/x/commit/0fcc5cf38995a439b3011e1b7d94e7edaa7f9ce5)), closes [EX-7073](https://searchbroker.atlassian.net/browse/EX-7073)
* make `XAPI` init method async (#1228) ([9d7d323](https://github.com/empathyco/x/commit/9d7d3230610761be23ca9efd117e7e3c4b9586b5))
* make base dropdown based components accesible (#846) ([71d4233](https://github.com/empathyco/x/commit/71d4233ad5c18fb19f205591bf8b9a0adf160884))
* make the snippet-config-extra-params component react to prop changes ([9f73735](https://github.com/empathyco/x/commit/9f737351324f2fdff044f7e6b6da8a38216b4ab9))
* migrate filters to vue 3 syntax (#1144) ([6413883](https://github.com/empathyco/x/commit/641388380620ab0d66cea627244912b6f3b2210d))
* migrate from `vue-cli` to `vite` (#1350) ([52a3b6e](https://github.com/empathyco/x/commit/52a3b6e7d94587f6934e838a2e68c99af97f7999))
* migrate modals to vue 3 syntax (#1141) ([d04b522](https://github.com/empathyco/x/commit/d04b522607787bdfe887896a26895d00fdd0d369))
* migrate panels components to vue 3 syntax (#1150) ([5ef137c](https://github.com/empathyco/x/commit/5ef137cbf84d5f68a611a5ecb51cb8454c0a7422))
* migrate results to vue 3 syntax (#1145) ([820622a](https://github.com/empathyco/x/commit/820622ab6a37d03de1e4843df2bdbb9daea57e58))
* migrate suggestions and currency components to vue 3 syntax (#1159) ([67beb82](https://github.com/empathyco/x/commit/67beb820722521e0db3cfdc9ae039e52e6d268f7))
* Minor improvements. (#1109) ([1c9dace](https://github.com/empathyco/x/commit/1c9dacea7c46eb0b27687730a8a4978d0e49b230)), closes [EX-8130](https://searchbroker.atlassian.net/browse/EX-8130)
* modify base-events-modal-close and base-events-modal-open for WCAG compliance (#946) ([1f5abdf](https://github.com/empathyco/x/commit/1f5abdf36c6eec18b73f13a78be4c7616016d6fd)), closes [EX-7669](https://searchbroker.atlassian.net/browse/EX-7669)
* move `Request` types to `x-types` package ([7cc85c1](https://github.com/empathyco/x/commit/7cc85c1d371b604b3188d8cc2076eab5fc9460e4)), closes [EX-6066](https://searchbroker.atlassian.net/browse/EX-6066)
* move `response` types to `@empathyco/x-types` ([77fb812](https://github.com/empathyco/x/commit/77fb812b77fe0c84462a4b5b2eb7f0439e2d8061)), closes [EX-6092](https://searchbroker.atlassian.net/browse/EX-6092)
* Move `XAPI` from `window.X` to `window.InterfaceX` (#599) ([4538778](https://github.com/empathyco/x/commit/45387783c947f859667f2786ba9013b83b952063)), closes [EX-6645](https://searchbroker.atlassian.net/browse/EX-6645)
* move related tags concatenation logic (#365) ([4e71797](https://github.com/empathyco/x/commit/4e717970198f67018a9b66ed6e47f511ecef4c62)), closes [EX-5410](https://searchbroker.atlassian.net/browse/EX-5410)
* **next-queries:** add `concatWhenNoMoreItems` prop (#705) ([ac73fb7](https://github.com/empathyco/x/commit/ac73fb7d2e66c3cb1aab0b64586d9e86495436de)), closes [EX-6841](https://searchbroker.atlassian.net/browse/EX-6841)
* **next-queries:** add `maxItemsToRender` prop to `NextQueryPreview` component (#646) ([848427c](https://github.com/empathyco/x/commit/848427cb9dae85c72549ab026b3785194ec4adbd)), closes [EX-6820](https://searchbroker.atlassian.net/browse/EX-6820)
* **next-queries:** add `origin` to `next queries preview` (#746) ([8928676](https://github.com/empathyco/x/commit/89286768a007d9b8888bfbc6db43c39b6d963380)), closes [EX-6757](https://searchbroker.atlassian.net/browse/EX-6757)
* **next-queries:** add isCurated property ([8b7b313](https://github.com/empathyco/x/commit/8b7b3132c7fa8aff095a92c84abdc150be705976)), closes [EX-5152](https://searchbroker.atlassian.net/browse/EX-5152)
* **next-queries:** add next query preview component (#631) ([1513ab1](https://github.com/empathyco/x/commit/1513ab1ef0cbcf42d72f483d99815eba76b5eaad)), closes [EX-6646](https://searchbroker.atlassian.net/browse/EX-6646)
* **next-queries:** add next query preview logic (#611) ([fc611fa](https://github.com/empathyco/x/commit/fc611faa39e63e5f916cd19928e9ab0755f8dc7f)), closes [EX-6119](https://searchbroker.atlassian.net/browse/EX-6119)
* place modal under selected element (#829) ([1f46d42](https://github.com/empathyco/x/commit/1f46d428dccdf4807110afc48b5fd600b41bfeae))
* **platform-adapter:** add semantic queries to platform adapter (#1212) ([82bd567](https://github.com/empathyco/x/commit/82bd56704638b050e323d486c43ebcb8cae1d41d))
* **plugin:** move alias creation from created hook to beforeCreated ([57f98e6](https://github.com/empathyco/x/commit/57f98e6587c0c589c4b6581a5f2c1da1a45757d8)), closes [EX-4331](https://searchbroker.atlassian.net/browse/EX-4331)
* **plugin:** replace old bus implementation using the new `x-priority-bus` (#1086) ([f64f9b6](https://github.com/empathyco/x/commit/f64f9b68225c4ee422eb007784e0eec813c95228)), closes [EX-7283](https://searchbroker.atlassian.net/browse/EX-7283)
* **queries-preview:** add isAnyQueryLoadedInPreview composable (#1229) ([5c728e0](https://github.com/empathyco/x/commit/5c728e0304663c601283f1fae2c4dae297caa5ee))
* **queries-preview:** add loaded previews getter (#1227) ([ab59fa2](https://github.com/empathyco/x/commit/ab59fa2c31440e1b47108cc5c334fe0cfaafad27))
* **queries-preview:** add query preview component  (#699) ([676cda4](https://github.com/empathyco/x/commit/676cda42a3cbd37ee00e3200a89854c6c1bec3ee)), closes [EX-6845](https://searchbroker.atlassian.net/browse/EX-6845)
* **queries-preview:** add wiring and actions (#677) ([a92e350](https://github.com/empathyco/x/commit/a92e3509be65dfce17796efa6fae14a370bc875c)), closes [EX-6844](https://searchbroker.atlassian.net/browse/EX-6844)
* **queries-preview:** create `queriesPreview` module (#670) ([317d961](https://github.com/empathyco/x/commit/317d961e94b0b7454cb4d858d401c4264c74cf0e)), closes [EX-6638](https://searchbroker.atlassian.net/browse/EX-6638)
* **queries-preview:** make the QueryPreviewRequestUpdated not replaceable (#1203) ([ccccd90](https://github.com/empathyco/x/commit/ccccd908110080afd2d5ee06c828e2c2293b67ac))
* query preview components allow adding extra params to the request (#1270) ([84143a2](https://github.com/empathyco/x/commit/84143a2b1ee1b9944ddb431f701b3d27d1c20410))
* **query-preview:** Add `debounceTimeMs` to `QueryPreview` component. (#752) ([ddca375](https://github.com/empathyco/x/commit/ddca375201056d374515b7426df1fac3a1ecf6c1)), closes [EX-7049](https://searchbroker.atlassian.net/browse/EX-7049)
* **query-preview:** add `origin` to `QueryPreview` component (#737) ([9c235bc](https://github.com/empathyco/x/commit/9c235bc9457cc959fa2a386b8dce114ff3bf6df7)), closes [EX-7077](https://searchbroker.atlassian.net/browse/EX-7077)
* **query-preview:** add query preview list component to orchestrate requests (#1084) ([dda5cd7](https://github.com/empathyco/x/commit/dda5cd7c0fa4c91ecdc837a6bfb3493a5db883bd)), closes [EX-7541](https://searchbroker.atlassian.net/browse/EX-7541)
* **query-preview:** use deep equal to compare request (#1291) ([cf3c3e7](https://github.com/empathyco/x/commit/cf3c3e7c738d8b2281183c42f00048b3bff918ea))
* **recommendations:** add `updateRecommendation` mutation (#891) ([0e9ceec](https://github.com/empathyco/x/commit/0e9ceec145458a55ccbe4abf8e7b49f64d1717ae))
* **recommendations:** emit `RecommendationsChanged` (#922) ([11119c3](https://github.com/empathyco/x/commit/11119c353bb26ac5dc3fdd774a513b68a1098771))
* **related-tags:** add `isCurated` property to related tags ([e063f45](https://github.com/empathyco/x/commit/e063f4560573bcb1bf32fbe49753f2fe6b235cc7)), closes [EX-4940](https://searchbroker.atlassian.net/browse/EX-4940)
* remove `x-suggestion` class from `BaseSuggestion` component (#1077) ([31f48e9](https://github.com/empathyco/x/commit/31f48e91ca06348d9122ad301f765b48c2fc963f)), closes [EX-8006](https://searchbroker.atlassian.net/browse/EX-8006)
* remove duplicates from image placeholder/fallback classes (#1032) ([2c5390c](https://github.com/empathyco/x/commit/2c5390c0e5cf2d4bc0b843422d2e99415b6e58ff)), closes [EX-7836](https://searchbroker.atlassian.net/browse/EX-7836)
* remove old adapter package and use the new one (#568) ([1632a59](https://github.com/empathyco/x/commit/1632a594b6905e6403c82b2189300eefd45b3691)), closes [EX-6286](https://searchbroker.atlassian.net/browse/EX-6286)
* Remove vue filters (#635) ([5026e84](https://github.com/empathyco/x/commit/5026e84b7dec3a283af8fdd2f68f84b49d332911)), closes [EX-6508](https://searchbroker.atlassian.net/browse/EX-6508)
* rename `search-types` to `x-types` (#928) ([1ac0008](https://github.com/empathyco/x/commit/1ac00084a4f46f453741c6b04a7c18e88c637cee))
* rename `x-grid` class to `x-grid-list` (#1015) ([dbb5d50](https://github.com/empathyco/x/commit/dbb5d502dd9c1e69c18d137edc8be2e13bceaeb2)), closes [EX-7481](https://searchbroker.atlassian.net/browse/EX-7481)
* Rename lifecycle hook events (#939) ([e626b89](https://github.com/empathyco/x/commit/e626b899849b6742e0bce57d86a8ff89718817bf)), closes [EX-7580](https://searchbroker.atlassian.net/browse/EX-7580)
* **result:** add `variants` support (#644) ([d5db09e](https://github.com/empathyco/x/commit/d5db09e9be92d0df65329680ee286959030ccecc)), closes [EX-6760](https://searchbroker.atlassian.net/browse/EX-6760)
* **result:** set configuration for base-result-link to ignore tagging of click (#1211) ([3319bf8](https://github.com/empathyco/x/commit/3319bf81d2042fcc32eadffa4dfa1bf1b4afb2a4))
* **scroll:** add scroll data state to the alias API ([7f5642c](https://github.com/empathyco/x/commit/7f5642cf5e60fe96a22c8fe9897c9ba73cbede55)), closes [EX-5249](https://searchbroker.atlassian.net/browse/EX-5249)
* **scroll:** add top offset when automatically scrolling to main-scroll-item (#1277) ([42dc680](https://github.com/empathyco/x/commit/42dc680e3ee3af4ccda6454d967da0750d2bba7e))
* **scroll:** capture listeners in MainScrollItem component (#942) ([2719a3d](https://github.com/empathyco/x/commit/2719a3dd6c1408f9413ecbee4ebf3c46bf24eea2))
* **scroll:** remove animations on pending element to scroll ([7a33653](https://github.com/empathyco/x/commit/7a336531c4fedb2c38133a5464f9b7e9736cef68)), closes [EX-5025](https://searchbroker.atlassian.net/browse/EX-5025)
* **search-box:** add `SearchInputPlaceholder` component (#771) ([a2e73e3](https://github.com/empathyco/x/commit/a2e73e3895c5454898fbc7ddc6d2202e03448fff)), closes [EX-7178](https://searchbroker.atlassian.net/browse/EX-7178)
* **search-box:** add input status handling(#903) ([c74b8fb](https://github.com/empathyco/x/commit/c74b8fbc9734541774c535792466333b78197146)), closes [EX-6474](https://searchbroker.atlassian.net/browse/EX-6474)
* **search-box:** focus search input after clicking clear search button ([d28994c](https://github.com/empathyco/x/commit/d28994c1995834a1adb19798060051089200d7f7)), closes [EX-2242](https://searchbroker.atlassian.net/browse/EX-2242)
* **search-input:** prevent `<` or `>` input (#433) ([afc865f](https://github.com/empathyco/x/commit/afc865f2e13d775e5ee4a602536dfd2ee8b474b8)), closes [EX-7035](https://searchbroker.atlassian.net/browse/EX-7035)
* **search:** add `updateResult` mutation (#706) ([809e346](https://github.com/empathyco/x/commit/809e34694e5a54bd72e92272aa69a9123bef94c4)), closes [EX-6894](https://searchbroker.atlassian.net/browse/EX-6894)
* **search:** add fallback disclaimer component (#1122) ([206db77](https://github.com/empathyco/x/commit/206db772b80cfe8a4cab23db19842ea8bd909733)), closes [EX-8080](https://searchbroker.atlassian.net/browse/EX-8080)
* **search:** add sort picker list component (#1155) ([03beec8](https://github.com/empathyco/x/commit/03beec816b07d6532d01b97034110a354d52024c))
* **search:** change `saveOriginWire` wire from `SelectedRelatedTagsChanged` to `UserPickedARelatedTag`  (#254) ([86072b0](https://github.com/empathyco/x/commit/86072b0805a3dc61b75c0a5760cf2c70e125be34)), closes [EX-5078](https://searchbroker.atlassian.net/browse/EX-5078)
* **search:** extract `fetchAndSaveResponse` `onSuccess` callback to its own `saveSearchResponse` action (#461) ([d24560f](https://github.com/empathyco/x/commit/d24560f3a091e84bc1e43cfae5c380c0262cc3b0)), closes [EX-5982](https://searchbroker.atlassian.net/browse/EX-5982)
* **search:** make `banners`, `promoteds` , `redirections`, `spellcheck` and `partialResults` optionals in `SearchResponse`  ([2d205c3](https://github.com/empathyco/x/commit/2d205c3141f69e05624dfb91987ebf14aee5fc34)), closes [EX-5976](https://searchbroker.atlassian.net/browse/EX-5976)
* **semantic-queries:** add maxItemsToRequest config (#1224) ([a124636](https://github.com/empathyco/x/commit/a124636d60170cc3f54a9d8a1e10351926f97aba))
* **semantic-queries:** add semantic queries module and component (#1213) ([f1dc4a7](https://github.com/empathyco/x/commit/f1dc4a7e10e57d69bda37925fbb1113fc778b5c1))
* **semantic-queries:** add SemanticQuery component (#1226) ([09ed3b4](https://github.com/empathyco/x/commit/09ed3b4ad9c01cc116d29a1b618c6dae48e14829))
* show next result image on hover (#863) ([8fd02cc](https://github.com/empathyco/x/commit/8fd02cc8f9913dfa0e06af83251db4577656099e)), closes [EX-5970](https://searchbroker.atlassian.net/browse/EX-5970)
* **sliced-filters:** add dynamic prop to show more/less buttons (#1146) ([08de5f8](https://github.com/empathyco/x/commit/08de5f827d4ce6b33f04c60655628dabeb19a3bd))
* standardise all events links in component docs section (#1265) ([ff90da2](https://github.com/empathyco/x/commit/ff90da215d5c16b01f226a85d8656d10817521d0))
* **storage-service:** Rename `StorageService` to `BrowserStorageService` ([6bf38fb](https://github.com/empathyco/x/commit/6bf38fb7d14323c84c949e21eaa9c692fb0014d7)), closes [EX-5073](https://searchbroker.atlassian.net/browse/EX-5073)
* **tabs-panel:** add base tabs panel component (#871) ([ebd5feb](https://github.com/empathyco/x/commit/ebd5feb4006315236ae62f8de03d6a986d9ced10)), closes [EX-6142](https://searchbroker.atlassian.net/browse/EX-6142)
* **tagging:** `track` query ([594c656](https://github.com/empathyco/x/commit/594c65649cbf08f586dc9912b367ea39d9da2fa6)), closes [EX-4989](https://searchbroker.atlassian.net/browse/EX-4989)
* **tagging:** add feature hardcoded values ([ee6db3a](https://github.com/empathyco/x/commit/ee6db3a360228528a109fedc732bd552ad5d5a61)), closes [EX-5003](https://searchbroker.atlassian.net/browse/EX-5003)
* **tagging:** add new `SearchTaggingReceived` event for tracking the query ([d58b697](https://github.com/empathyco/x/commit/d58b69730915ccd6fb2b0656ff7280450275b5be)), closes [EX-5170](https://searchbroker.atlassian.net/browse/EX-5170)
* **tagging:** add new type values to ResultFeature and FeatureLocation (#1209) ([a48dc72](https://github.com/empathyco/x/commit/a48dc720b10d7e8ad59445f684cee3fc18d9bb8d))
* **tagging:** Include 'location' parameter to track result events. (#273) ([69bab4b](https://github.com/empathyco/x/commit/69bab4b81f85725f3fc0a9bdc3177db09dd46a40)), closes [EX-5163](https://searchbroker.atlassian.net/browse/EX-5163) [EX-5163](https://searchbroker.atlassian.net/browse/EX-5163)
* **tagging:** make `tagging` and `queryTagging` optional (#797) ([0e49156](https://github.com/empathyco/x/commit/0e49156308d4e77d667a2191697101674cdbf213)), closes [EX-7231](https://searchbroker.atlassian.net/browse/EX-7231)
* **tagging:** move `origin` from `request.getter` to `fetchAndSave.action` ([b0bb40d](https://github.com/empathyco/x/commit/b0bb40de5e2ae7f65e2e2df032a1da9a51f0cb4d)), closes [EX-5079](https://searchbroker.atlassian.net/browse/EX-5079)
* **tagging:** track banner clicks (#822) ([504d6bf](https://github.com/empathyco/x/commit/504d6bf29ca86ece7b8116cb32a676f05624468d))
* **tagging:** track displayClick (#1222) ([e9a569e](https://github.com/empathyco/x/commit/e9a569e2b4d7b25b39aae9cad90dbd7da7203b3c))
* **tagging:** track displayClick properties in result & tagging request (#1225) ([53a209e](https://github.com/empathyco/x/commit/53a209e5c9719a8ba0cff21f5d8d52b0dfe70c6d))
* **tagging:** track pending query ([e6c8fd4](https://github.com/empathyco/x/commit/e6c8fd401b28b2e931ebf78697f218f53134cc5a)), closes [EX-4963](https://searchbroker.atlassian.net/browse/EX-4963)
* **tagging:** track result click events ([81f009b](https://github.com/empathyco/x/commit/81f009b0a6264c44436082e457bcb4a12daf5d19)), closes [EX-3527](https://searchbroker.atlassian.net/browse/EX-3527)
* **tagging:** track the 'UserClickedResultAddToCart'event in tagging ([873d345](https://github.com/empathyco/x/commit/873d345d67199a64fe9f10c70944b4f74f290405)), closes [EX-3529](https://searchbroker.atlassian.net/browse/EX-3529)
* **test:** refactor base tests to cypress component testing ([dc7a924](https://github.com/empathyco/x/commit/dc7a924b612411470742d222bcc6531fa656ce13)), closes [EX-4928](https://searchbroker.atlassian.net/browse/EX-4928)
* update polyfills plugin to work with chunks ([54c1842](https://github.com/empathyco/x/commit/54c18420011e5e452bd8b48d640cbd067d0ce921)), closes [EX-5278](https://searchbroker.atlassian.net/browse/EX-5278)
* update typescript ([73edca6](https://github.com/empathyco/x/commit/73edca61c1cea39d82a7ab94bc18c8bff94c138c)), closes [EX-5367](https://searchbroker.atlassian.net/browse/EX-5367)
* **url:** set `origin` when navigating ([02aa766](https://github.com/empathyco/x/commit/02aa7661a15c3718f4809d094a01b0f684a1f55d)), closes [EX-3541](https://searchbroker.atlassian.net/browse/EX-3541)
* Use Banner position (= row) to sort grid (#802) ([28836a7](https://github.com/empathyco/x/commit/28836a71b91f210f425098f41ab71136a1b7b34c)), closes [EX-7292](https://searchbroker.atlassian.net/browse/EX-7292)
* utils for the mutation of states with config (#1313) ([97dfb3e](https://github.com/empathyco/x/commit/97dfb3e2d37f6ec037f55ccc3279b9427d90d1c5))
* **utils:** log request errors by default (#458) ([872c0b9](https://github.com/empathyco/x/commit/872c0b9e64112388c641434c2e0cb81ea92d9c20)), closes [EX-5981](https://searchbroker.atlassian.net/browse/EX-5981)
* **utils:** now `origin` only requires the `feature` ([087d646](https://github.com/empathyco/x/commit/087d646a2b97f945e9c4f81112925a6783d66f41)), closes [EX-5077](https://searchbroker.atlassian.net/browse/EX-5077)
* wai-aria for BaseEventButton based components (#816) ([3dfd29e](https://github.com/empathyco/x/commit/3dfd29e8f8cc57c5caeeda609ccd4903434bd74a)), closes [EX-7204](https://searchbroker.atlassian.net/browse/EX-7204)
* **wiring:** add force and cancel support to debounce and throttle wire operators. Update rxjs to v7. ([1fe2f29](https://github.com/empathyco/x/commit/1fe2f298589b1aa44798f3911379fe11905a43a9)), closes [EX-5123](https://searchbroker.atlassian.net/browse/EX-5123)
* **x-plugin:** add full `history queries` list to `alias API` ([e0e0430](https://github.com/empathyco/x/commit/e0e04301b6158dfc379d495e92c04ec5ef35c4ab)), closes [EX-6610](https://searchbroker.atlassian.net/browse/EX-6610)
* **x-plugin:** Add function as possible value of `domElement` in InstallXOptions.(#836) ([99a96ef](https://github.com/empathyco/x/commit/99a96ef2303f27b656835253203bc73758a337ae))
* **x-plugin:** add results to `Alias API` (#545) ([9993ab6](https://github.com/empathyco/x/commit/9993ab6c31f0b532a9cc12eea2f3fb18dd6fd856)), closes [EX-6324](https://searchbroker.atlassian.net/browse/EX-6324)
* **x-plugin:** Add selected sort (#274) ([b4c0d14](https://github.com/empathyco/x/commit/b4c0d140ca5eba8de189068fef5dd2a6249c1207)), closes [EX-5165](https://searchbroker.atlassian.net/browse/EX-5165)


### Bug Fixes

* `BaseResultImage` not showing the right size on load (#1176) ([c7ebf54](https://github.com/empathyco/x/commit/c7ebf54f03e23bdf8cd1a64e1e008369ca1a643d))
* `pointer-events` affecting scrolling in sliding panel in `SingleColumnLayout` aside (#614) ([1463bc1](https://github.com/empathyco/x/commit/1463bc1d5dd1fbd9c279077d7240329b853f82be)), closes [EX-6595](https://searchbroker.atlassian.net/browse/EX-6595)
* **animations:** make content-visibility CSS property and createCollapseAnimationMixin work together (#839) ([50d5c87](https://github.com/empathyco/x/commit/50d5c8744e5a8d2c8db5aed33e71bd8a39a76cf3))
* **base-currency:** format preference goes prop to be injected by default ([29d5e8d](https://github.com/empathyco/x/commit/29d5e8d576019504ef642af6119c764292f44c51)), closes [EX-5649](https://searchbroker.atlassian.net/browse/EX-5649)
* **base-modal:** add prop to allow the modal to move the focus to an element within it on open (#748) ([0954926](https://github.com/empathyco/x/commit/0954926d7e95ab53e3a8fe263265b63f1a5f20d7))
* blur related tag when deselected (#1199) ([e3c3efa](https://github.com/empathyco/x/commit/e3c3efa204c047d537f6cf92b0342327409ff3aa))
* **build:** Fix build side effects to include css. ([f79d7b9](https://github.com/empathyco/x/commit/f79d7b9e738485e14ac8f88b343a97d8f55c51e6)), closes [EX-5396](https://searchbroker.atlassian.net/browse/EX-5396)
* **build:** supports being built on Windows based machines ([6e760fa](https://github.com/empathyco/x/commit/6e760fab8d39162897574abab95884cadd6252b8))
* **build:** use the default `vue-cli` `webpack` configuration in `rollup-plugin-vue` (#961) ([f9a9238](https://github.com/empathyco/x/commit/f9a9238cf4a05a6a35129336f318c9440cb6732d)), closes [EX-7706](https://searchbroker.atlassian.net/browse/EX-7706)
* **components:**  now properly checks if a  has content (#612) ([ad2f6dc](https://github.com/empathyco/x/commit/ad2f6dc522d9da59dde2e2c5f90510c0f93380ab)), closes [EX-6681](https://searchbroker.atlassian.net/browse/EX-6681)
* **components:** `SlidingPanel` can now disable the resetting scroll … (#286) ([788eb18](https://github.com/empathyco/x/commit/788eb18bf0e066d932484143d0412497f3dada6e)), closes [EX-5197](https://searchbroker.atlassian.net/browse/EX-5197)
* **components:** Add option to extend transitions with listeners and attributes (#600) ([16d5262](https://github.com/empathyco/x/commit/16d5262ab2213d53c736e89774089313755abeff)), closes [EX-6457](https://searchbroker.atlassian.net/browse/EX-6457)
* **components:** Export missing layout components ([15986f5](https://github.com/empathyco/x/commit/15986f56b8b78b49abe70936c0bd2ba6d85a6bbb)), closes [EX-5160](https://searchbroker.atlassian.net/browse/EX-5160)
* **components:** Fix BaseGrid auto columns CSS. (#308) ([77563f0](https://github.com/empathyco/x/commit/77563f0eb71d806fb2cefb88b750c4852918b8c0)), closes [EX-5295](https://searchbroker.atlassian.net/browse/EX-5295)
* **components:** Fix infinite scroll not working in Android Chrome. (#277) ([19c3d77](https://github.com/empathyco/x/commit/19c3d77f124a1bbc099bae0e5dbb80fb30a132a1)), closes [EX-5181](https://searchbroker.atlassian.net/browse/EX-5181)
* **components:** Fix InfiniteScroll get root element inside Shadow DOM. (#874) ([340293f](https://github.com/empathyco/x/commit/340293ffc1946c69018fcfa67a069f443110763d))
* **components:** Fix open issue when focused on body. Fix `SearchInputPlaceholder` styles. (#1078) ([25aa285](https://github.com/empathyco/x/commit/25aa2851daf713512c42ef394707a9f1fc41fe4b)), closes [EX-8011](https://searchbroker.atlassian.net/browse/EX-8011)
* **components:** Fix the error on console in `BaseResultImage` with `CrossFade` Animation. (#688) ([3bcf6e1](https://github.com/empathyco/x/commit/3bcf6e120918b4257f38ddb5078adfe39a7c8a3f)), closes [EX-6924](https://searchbroker.atlassian.net/browse/EX-6924)
* **components:** image flickering on re-rendering (#945) ([3b1b558](https://github.com/empathyco/x/commit/3b1b55857ac1c5169a771c465fa32fb4313ab63c)), closes [EX-7610](https://searchbroker.atlassian.net/browse/EX-7610)
* **components:** reset`BaseResultImage` images state when `result` `prop` changes (#888) ([a783ace](https://github.com/empathyco/x/commit/a783ace74929db22b7ed087b0eb19481078a35f5))
* **components:** restore scroll on `BaseModal` (#736) ([d7b18a1](https://github.com/empathyco/x/commit/d7b18a1630f7da36ecd4c52f5b73b8c101612a86)), closes [EX-7091](https://searchbroker.atlassian.net/browse/EX-7091)
* conflict version (#673) ([fb74dd0](https://github.com/empathyco/x/commit/fb74dd0b992522a9441da1daabe5a8789426324f)), closes [EX-6896](https://searchbroker.atlassian.net/browse/EX-6896)
* **decorators:** pending `debounced` execution is cancelled when the component is destroyed ([27da789](https://github.com/empathyco/x/commit/27da789412804f3f768d07e8ffd846ea2df8553e)), closes [EX-5215](https://searchbroker.atlassian.net/browse/EX-5215)
* **deps:** remove  `only-allow` pnpm (#1097) ([b2a63d3](https://github.com/empathyco/x/commit/b2a63d308f20804d55a266189ab5d6242f88f6d8)), closes [EX-8082](https://searchbroker.atlassian.net/browse/EX-8082)
* **deps:** update dependency @vueuse/core to v10 (#1219) ([3761f17](https://github.com/empathyco/x/commit/3761f17226e1cba9b13a971e43ddb928d5f2f412))
* **design-system:** fix deprecated typography and picture components (#1090) ([4f1bdb7](https://github.com/empathyco/x/commit/4f1bdb7d69a49e51d39dd2a7f8050b0fce3ef96e)), closes [EX-8053](https://searchbroker.atlassian.net/browse/EX-8053)
* **design-system:** Fix grid styles to stretch cells. ([3292229](https://github.com/empathyco/x/commit/32922290173cc87fe5c82934b9a9e01dc27b3c23)), closes [EX-5239](https://searchbroker.atlassian.net/browse/EX-5239)
* **design-system:** Fix Sliding Panel styles. ([bcf2092](https://github.com/empathyco/x/commit/bcf20925c3baf7847792b7b77b07178d62a27e7e)), closes [EX-5234](https://searchbroker.atlassian.net/browse/EX-5234)
* **design-system:** Fix some style issues and add two missing utilities ([c4ae728](https://github.com/empathyco/x/commit/c4ae728d78b36ee566ca283626e36bf9b6aed07f)), closes [EX-5270](https://searchbroker.atlassian.net/browse/EX-5270)
* **edocs-live-examples:** Live example was not rendered ([5aa2653](https://github.com/empathyco/x/commit/5aa2653054686a3a6b8ada0478f171518d7733c2))
* exports for experience controls (#1312) ([3f02cea](https://github.com/empathyco/x/commit/3f02cea34463b2fe13b539f348c4f42af1f2dc71))
* **extra-params:** prevent callbacks option from the snippet config to be taken as extra params ([2940d2c](https://github.com/empathyco/x/commit/2940d2c7163904a193c459892792b2153de7d079)), closes [EX-5104](https://searchbroker.atlassian.net/browse/EX-5104)
* **facets:** fix `SingleSelectModifier` handling for selecting hierar… (#643) ([d9a18e0](https://github.com/empathyco/x/commit/d9a18e06c5241c5b6db9b93ba67c1d9018360160)), closes [EX-6810](https://searchbroker.atlassian.net/browse/EX-6810)
* **filters:** Editable number range filter should be unique (#1243) ([ec8b788](https://github.com/empathyco/x/commit/ec8b78829d16df0db50cfa35e0bdf5ba64529d26))
* fix base rating component (#1256) ([b1616ca](https://github.com/empathyco/x/commit/b1616cac0310535bf1354c5e084ba0267fc1e01e))
* Fix multiple issues. ([2f5515e](https://github.com/empathyco/x/commit/2f5515e5bcaca67f085ff3eef4fb52698041292c)), closes [EX-5179](https://searchbroker.atlassian.net/browse/EX-5179)
* **history-queries:** legacy history queries stored in the browser without selected filters (#1333) ([96608f8](https://github.com/empathyco/x/commit/96608f87a0b6c3e6c76b7a919cd085d3c2d6c133))
* **history-queries:** map selected filters correctly when coming from Query Preview (#1325) ([61fdfd1](https://github.com/empathyco/x/commit/61fdfd1f4af0183952084abfd8a72ecdd76ee6ee))
* identation error in search-box.md ([614407e](https://github.com/empathyco/x/commit/614407e17a4f198e9c8ad11ca324a00ee7275fa6))
* **identifier-results:** Fix default plugin config. (#296) ([68d4b93](https://github.com/empathyco/x/commit/68d4b93f3f8d439814a11055ac657c0bce5accfd)), closes [EX-5247](https://searchbroker.atlassian.net/browse/EX-5247) [EX-5247](https://searchbroker.atlassian.net/browse/EX-5247)
* include tokens in deprecated theme css file (#1202) ([298163e](https://github.com/empathyco/x/commit/298163e722022efe5af59aa9fb08eb245584ffe1))
* make `appear` attribute configurable on animations that have it set to `true` by default (#862) ([7e2cd52](https://github.com/empathyco/x/commit/7e2cd52933385fcee4a7944fd474d2314ac3291d)), closes [EX-5970](https://searchbroker.atlassian.net/browse/EX-5970)
* Make `Home` grid next queries use grid data rather than state data. (#687) ([e340ed0](https://github.com/empathyco/x/commit/e340ed0c4fc4d70a0912c38296812c2fcc0c4e23)), closes [EX-6955](https://searchbroker.atlassian.net/browse/EX-6955)
* make promoted and banner position optional (#817) ([a2a8d5d](https://github.com/empathyco/x/commit/a2a8d5dcc03451e046d00f87f3545dfd46c050c5)), closes [EX-7333](https://searchbroker.atlassian.net/browse/EX-7333)
* **modal:** set focusOnOpen for the main-modal to false (#1074) ([655e8eb](https://github.com/empathyco/x/commit/655e8eb6bc5bedab6b79ab2a7c7d6110f9d27437)), closes [EX-7710](https://searchbroker.atlassian.net/browse/EX-7710)
* move the display-results-provider to fix semantics sliding panel (#1317) ([018d2c5](https://github.com/empathyco/x/commit/018d2c59620deda073dfbe12c04cafe8b5ecd349))
* **platform-adapter:** change semantics url path (#1230) ([b8210b5](https://github.com/empathyco/x/commit/b8210b59960474a3ad86ffe1a9ee6bc35567ea6e))
* prevent flickering animation on query preview list second load ([e7141a3](https://github.com/empathyco/x/commit/e7141a3941284896bd9a341b8a81bfdfa07515c5))
* prevent node-ipc vulnerability ([fc8b83c](https://github.com/empathyco/x/commit/fc8b83ce73bdbd7148ce99ad3a95d7a7658bd8ba))
* **related-tags:** clear selected related tags when user changes extra params ([b2d9b94](https://github.com/empathyco/x/commit/b2d9b94053aebbbda41659dbc3e4602931fd1bb5)), closes [EX-5188](https://searchbroker.atlassian.net/browse/EX-5188)
* **related-tags:** related tags are now kept when navigating back ([db9f875](https://github.com/empathyco/x/commit/db9f87560000bca05ad3fe06fc449e170c3b9d08)), closes [EX-6131](https://searchbroker.atlassian.net/browse/EX-6131)
* **related-tags:** use `query` instead of `tag` as `key` to ensure unique values (#792) ([53e86bd](https://github.com/empathyco/x/commit/53e86bd43137a9e4cd389f58e0efce8bcf63632c)), closes [EX-7236](https://searchbroker.atlassian.net/browse/EX-7236)
* Remove `@empathyco/x-platform-adapter` dependency from library code. (#575) ([104c7e1](https://github.com/empathyco/x/commit/104c7e10855a67b2adfa68d42d82431f9194ee15)), closes [EX-6437](https://searchbroker.atlassian.net/browse/EX-6437)
* remove `resize-observer-browser` types from tsconfig (#833) ([ce46b2c](https://github.com/empathyco/x/commit/ce46b2cefba5b727679c81862542e367a903b4b0)), closes [EX-7373](https://searchbroker.atlassian.net/browse/EX-7373)
* remove warning when the event is not defined (#918) ([7f70e25](https://github.com/empathyco/x/commit/7f70e257bae41ba34f72c1c580c79862448faea9)), closes [EX-7617](https://searchbroker.atlassian.net/browse/EX-7617)
* restore sliding panel state after a search (#1259) ([c61f3ed](https://github.com/empathyco/x/commit/c61f3edaeb0138d759b583901fad89651bdfaefb))
* **search:** batch state reset calls after a search.request parameter changes (#283) ([492e856](https://github.com/empathyco/x/commit/492e8566913428426459ada29ca4963730cfcd7c)), closes [EX-5057](https://searchbroker.atlassian.net/browse/EX-5057)
* **search:** export `SortPickerList` (#1157) ([eaf877d](https://github.com/empathyco/x/commit/eaf877db49b7c6578ce4daf707d91c711621eae2))
* **search:** ignore page from url when going to a different query (#1244) ([311c5f8](https://github.com/empathyco/x/commit/311c5f871c279a7cb2dc03daf382ac14da4b23a6))
* **search:** next page is now requested if it has less than the page size results. (#284) ([f574792](https://github.com/empathyco/x/commit/f5747923f60f81564ebf124d95cae8a5d92400d4)), closes [EX-5194](https://searchbroker.atlassian.net/browse/EX-5194)
* **search:** Redirection didn't cancel when a related tag was clicked (#1255) ([b9ff0dc](https://github.com/empathyco/x/commit/b9ff0dce2d41c040f8d3cc8a49f28cf5caa5a558))
* **search:** reset `query`, `page` and `sort` on clear query (#1045) ([5dc0603](https://github.com/empathyco/x/commit/5dc060304980f5c373cd1aa8aebd4d3932723a35)), closes [EX-7663](https://searchbroker.atlassian.net/browse/EX-7663)
* **search:** rows and start parameters calculations moved from getter to action to avoid multiple requests ([84752ba](https://github.com/empathyco/x/commit/84752ba3eb1ab728b6adf5cc62ea31646f42b959)), closes [EX-5047](https://searchbroker.atlassian.net/browse/EX-5047)
* set query in facets module from selecting a query preview (#1318) ([5868a24](https://github.com/empathyco/x/commit/5868a24e73017bd4173fe0e842bf4de853f758bb))
* **tagging:** now removing the session clears the session from the storage ([9328aad](https://github.com/empathyco/x/commit/9328aadca920825bdaddeb565ee47ef0430f25fd)), closes [EX-5074](https://searchbroker.atlassian.net/browse/EX-5074)
* **tests:** unable to add breakpoints in vue components (#460) ([5d58b9b](https://github.com/empathyco/x/commit/5d58b9b637ad47606651db2415502cf082d5a15b)), closes [EX-5325](https://searchbroker.atlassian.net/browse/EX-5325)
* type empathize events and replace UserPressedEnter with UserPressedEnterKey ([98055c4](https://github.com/empathyco/x/commit/98055c44e165b06013e63c9829fd363f5e50c87a))
* **url:** a `query` is required to store params in the `URL` ([b105da3](https://github.com/empathyco/x/commit/b105da33b35aaa1e3796790d0ec88c74caf856e5)), closes [EX-6134](https://searchbroker.atlassian.net/browse/EX-6134)
* **url:** default `extra params` are now properly restored ([5540929](https://github.com/empathyco/x/commit/554092985a394e1d2b6087b1129282993da7e8c6)), closes [EX-5203](https://searchbroker.atlassian.net/browse/EX-5203)
* use `cypress run` for headless testing (#1357) ([bc88050](https://github.com/empathyco/x/commit/bc88050a6c525e65d8b0e2d1adacf5d823df9137))
* wait for the extra params to make the initial requests (#754) ([468a61b](https://github.com/empathyco/x/commit/468a61b69e11b3917a33d44bd415a5ea14c5c409)), closes [EX-6977](https://searchbroker.atlassian.net/browse/EX-6977)
* watch `props.result.images` directly (#1204) ([4ac9190](https://github.com/empathyco/x/commit/4ac9190754deb34ddd3eed7dc1913230e18a3040))
* **x-plugin:** improve ResultFeature type values (#1344) ([c4c9f6e](https://github.com/empathyco/x/commit/c4c9f6e69d9f9f2a68619d6f10e918c649b42894))


### Styling

* update prettier and format code (#1026) ([a18cc17](https://github.com/empathyco/x/commit/a18cc172b6638962d53192905cd466f12bccacac)), closes [EX-7877](https://searchbroker.atlassian.net/browse/EX-7877)


### Build System

* Delete unused `Jenkinsfile`. (#1075) ([fb9a15b](https://github.com/empathyco/x/commit/fb9a15b80686293b3bd14c8129ed045d8a6c99f2))
* **dependencies:** bump `@bahmutov/cypress-esbuild-preprocessor` from `2.1.5` to `2.2.0` (#1082) ([106c2d1](https://github.com/empathyco/x/commit/106c2d1eba6e1d3b03ac75a04bdec3e961579fef))
* **dependencies:** fix Vue & Vuex versions (#686) ([177e851](https://github.com/empathyco/x/commit/177e8511f4458fa13c627210cdfbbf6d42a85b17)), closes [EX-6918](https://searchbroker.atlassian.net/browse/EX-6918)
* **dependencies:** update `typescript` to `4.9.4` and its dependencies to their latest version (#993) ([500ab57](https://github.com/empathyco/x/commit/500ab57e4729f5c4dcefaa31ed4a8497ddd349b9)), closes [EX-7288](https://searchbroker.atlassian.net/browse/EX-7288)
* **deps:** update `vue` to version `2.7` (#971) ([09fb0fe](https://github.com/empathyco/x/commit/09fb0fe5dbef020565571a4fafc89d2aac544c8e)), closes [EX-7730](https://searchbroker.atlassian.net/browse/EX-7730)
* **deps:** update dependencies ([491f9c5](https://github.com/empathyco/x/commit/491f9c5a27cf5eaa4dc3f31c97ea514bb8f3515b))
* **deps:** update dependencies (#1004) ([7343506](https://github.com/empathyco/x/commit/73435063e97648ed5bb87600bb7cfbb5eb64b70c))
* **deps:** update dependencies (#1024) ([e99425f](https://github.com/empathyco/x/commit/e99425fc315526afe40b1fd536bcfde1fc1af08a))
* **deps:** update dependencies (#908) ([840da52](https://github.com/empathyco/x/commit/840da52dec32e04cf2b402cca2646b49c839e6e8))
* **deps:** update deps (#1046) ([b6957df](https://github.com/empathyco/x/commit/b6957df9d88c0d94c2543047991a63afadd707ff))
* **deps:** update deps (#1062) ([59f29b9](https://github.com/empathyco/x/commit/59f29b9c5861f790a65b061eec628eb35d066b68))
* **deps:** update eslint-plugin dependencies (#447) ([51d60f0](https://github.com/empathyco/x/commit/51d60f0e11fa9667a784bbdb10ba1f39159b382f)), closes [EX-5383](https://searchbroker.atlassian.net/browse/EX-5383)
* **deps:** Upgrade Cypress and Vue Cli plugins versions. (#399) ([630d6b0](https://github.com/empathyco/x/commit/630d6b0d767a3484140ecd252e2be10817e0900d)), closes [EX-5417](https://searchbroker.atlassian.net/browse/EX-5417)
* Fix colors.js dependency issue ([2ffcc22](https://github.com/empathyco/x/commit/2ffcc222f5666d7866c8d7cd3a0eec7c0bb1f938)), closes [EX-5293](https://searchbroker.atlassian.net/browse/EX-5293)
* Load PostCSS plugins from rollup build (#272) ([aaed2f3](https://github.com/empathyco/x/commit/aaed2f328b0b7252853922703283c77bcd1221d0)), closes [EX-5162](https://searchbroker.atlassian.net/browse/EX-5162)
* remove `polyfills` support ([a06fcf3](https://github.com/empathyco/x/commit/a06fcf333b06a4d26c32304127f02125d101a0fd)), closes [EX-3559](https://searchbroker.atlassian.net/browse/EX-3559)
* Support SSR with createInjectorSSR for styles. (#674) ([85473c3](https://github.com/empathyco/x/commit/85473c31f5aa755890bef4d20f787ba1453b8843)), closes [EX-6892](https://searchbroker.atlassian.net/browse/EX-6892)
* sync duplicated dependencies (#567) ([912e968](https://github.com/empathyco/x/commit/912e9687851594871b3296a5fb26129327939d96)), closes [EX-6412](https://searchbroker.atlassian.net/browse/EX-6412)
* update jest dependencies ([f3fee15](https://github.com/empathyco/x/commit/f3fee157d724292f5cbb7166908d48ef2fb4fe8c)), closes [EX-5027](https://searchbroker.atlassian.net/browse/EX-5027)


### Others

* **deps:** update node to 18 (#1196) ([e0e6b35](https://github.com/empathyco/x/commit/e0e6b35eefb3ef83f22e341f662475b0e6066e94))
* **deps:** update node to v18 (#1175) ([14e64e1](https://github.com/empathyco/x/commit/14e64e11fdf7f3d27d59baf56b027857df9e61e7))


### Continuous Integration

* export webpack config from `x-archetype-utils` (#760) ([0d7bfa2](https://github.com/empathyco/x/commit/0d7bfa2a63b5aaa3b220a0338fcefdaedc888f32)), closes [EX-7222](https://searchbroker.atlassian.net/browse/EX-7222)
* make Cypress cache depend on package. Make eslint cache restore last version if no exact match. ([2498972](https://github.com/empathyco/x/commit/24989726d8e5c6c3450b344fbbc623a3f7246b53)), closes [EX-7721](https://searchbroker.atlassian.net/browse/EX-7721)
* migrate from `npm` & `lerna bootstrap` to `pnpm` (#1047) ([aaaba4f](https://github.com/empathyco/x/commit/aaaba4f8a5498c16e17ea6daf9c18a1f49918f70)), closes [EX-7891](https://searchbroker.atlassian.net/browse/EX-7891)
* parallelize steps (#1174) ([3013595](https://github.com/empathyco/x/commit/3013595857c8dac33f36b2c0d08e747b0735c6a0))
* refactor `lint` command to benefit from `nx parallelisation` (#1051) ([1af1503](https://github.com/empathyco/x/commit/1af1503ff118d6232fdbb27e203037a89b1b52e0)), closes [EX-7926](https://searchbroker.atlassian.net/browse/EX-7926)
* release alpha version on every push to main branch ([f86e0b3](https://github.com/empathyco/x/commit/f86e0b3ad14e7a9bd6d659219fe12f6d94ebdb94)), closes [EX-5263](https://searchbroker.atlassian.net/browse/EX-5263)
* silent jest and eslint warnings (#749) ([1413677](https://github.com/empathyco/x/commit/14136776e6a616e21ecd4585a071cdee1569d1cb))
* update `runners` version (#740) ([38f246c](https://github.com/empathyco/x/commit/38f246c306dac40c4afbcdea08336052981ca9b8))
* update rollup and plugins version ([d240f3d](https://github.com/empathyco/x/commit/d240f3de8bc3e226d0bd8ac2d9bd4282cc660b86)), closes [EX-5342](https://searchbroker.atlassian.net/browse/EX-5342)
* use cypress GitHub action (#1198) ([d432a9b](https://github.com/empathyco/x/commit/d432a9b515a2e42ff8feef9a8dd57565a81633e9))
* use matrix steps and jest projects (#919) ([dec53f5](https://github.com/empathyco/x/commit/dec53f5da572a4a5f3c8519222c1ed94ed981967))


### Testing

*  E2E tests maintenance (#371) [[EX-5618](https://searchbroker.atlassian.net/browse/EX-5618)] ([e12ca33](https://github.com/empathyco/x/commit/e12ca335235c654f5e1e9ae608950bf527954448))
* **e2e:** add `extra-params` scenarios ([4275c28](https://github.com/empathyco/x/commit/4275c2811ea7b0eaaf588fa4d96a7ae3cf4c43c7)), closes [EX-5377](https://searchbroker.atlassian.net/browse/EX-5377)
* **e2e:** fix `tagging` using the `mockedAdapter` and replacing `fetch` for `sendBeacon`  ([cf06d2f](https://github.com/empathyco/x/commit/cf06d2f7e9aff3987bc14fa46cd65eace402e612)), closes [EX-5374](https://searchbroker.atlassian.net/browse/EX-5374)
* **e2e:** Fix E2E tests in Firefox ([6d25577](https://github.com/empathyco/x/commit/6d25577ad383e6e82a3072eb22809872dc0dc865)), closes [EX-5525](https://searchbroker.atlassian.net/browse/EX-5525)
* **e2e:** fix tagging tests (#270) ([ff2ecba](https://github.com/empathyco/x/commit/ff2ecbac79fd3c16d72a05c133dbe0b60de606f7)), closes [EX-5161](https://searchbroker.atlassian.net/browse/EX-5161)
* **e2e:** make `HistoryQueries` test wait for no results (#906) ([82cc3dd](https://github.com/empathyco/x/commit/82cc3ddc0f1339fbff6c04e2eff7dfbf24598672)), closes [EX-7591](https://searchbroker.atlassian.net/browse/EX-7591)
* **e2e:** make `tagging` tests wait for redirection before assertion ([f98cd25](https://github.com/empathyco/x/commit/f98cd254084f60893b1eb723d4081bf0c0f44166)), closes [EX-5273](https://searchbroker.atlassian.net/browse/EX-5273)
* **e2e:** make url tests intercept tracking and wait for each request ([393dbea](https://github.com/empathyco/x/commit/393dbea71648b010a4f3d197c180c91741c6054b)), closes [EX-5127](https://searchbroker.atlassian.net/browse/EX-5127)
* **e2e:** Reduce command timeout and number of retries. ([5e1521f](https://github.com/empathyco/x/commit/5e1521f53aad1e4bfc8f60c7e705422ab2af052c)), closes [EX-5015](https://searchbroker.atlassian.net/browse/EX-5015)
* **e2e:** reorder mocked responses ([8cab691](https://github.com/empathyco/x/commit/8cab691b553af31d9b5bc80130e16886877f1b60)), closes [EX-4923](https://searchbroker.atlassian.net/browse/EX-4923)
* **e2e:** search modal re-opens properly after being closed (#613) ([43282ab](https://github.com/empathyco/x/commit/43282ab1d0ab54af7794c88c89aa8e62326d73d8)), closes [EX-6708](https://searchbroker.atlassian.net/browse/EX-6708)
* **e2e:** update `cypress` to version `12.1.0` and replace `cypress-cucumber-preprocessor` with `@badeball/cypress-cucumber-preprocessor` (#747) ([2adb2cd](https://github.com/empathyco/x/commit/2adb2cd03591c37934fb385b120822ef271c359f))
* fix exclude-filters e2e test (#588) ([51ecc52](https://github.com/empathyco/x/commit/51ecc5234b665a2320a760d485bf6da74648f902)), closes [EX-6590](https://searchbroker.atlassian.net/browse/EX-6590)
* fix failing tests (#1241) ([41a1641](https://github.com/empathyco/x/commit/41a1641c591a4387891f359719e3c030339cc40c))
* **next-queries:** next queries preview e2e tests (#759) ([adccbf4](https://github.com/empathyco/x/commit/adccbf4a111ac65915b017aca799ac523347ddc1)), closes [EX-6848](https://searchbroker.atlassian.net/browse/EX-6848)
* Restructure files for non global step def (#382) ([d212692](https://github.com/empathyco/x/commit/d21269273e87e58312fde996fd9be3e5883958b4)), closes [EX-5739](https://searchbroker.atlassian.net/browse/EX-5739) [EX-5739](https://searchbroker.atlassian.net/browse/EX-5739) [EX-5739](https://searchbroker.atlassian.net/browse/EX-5739)
* review skipped tests (#1201) ([8c46a38](https://github.com/empathyco/x/commit/8c46a382dd37f2bf67849d8537c0faa668b430e2))


* (feat) Implement config utils in the modules with config (#1321) ([393d758](https://github.com/empathyco/x/commit/393d7588d19e01d7b012b8a6b92f01babb080f3e))
*  feat(design-system): Re-do aspect ratio logic with modern `aspect-ratio` property ([7fae9dc](https://github.com/empathyco/x/commit/7fae9dcab71ec8a945f70aa706cce1cb57b4ddd8)), closes [EX-6463](https://searchbroker.atlassian.net/browse/EX-6463)


### Code Refactoring

* change to the top of the wiring the ParamsLoadedFromUrl event. ([26634c8](https://github.com/empathyco/x/commit/26634c8010bc4d2e795caceefc622c6329fad72c)), closes [EX-5327](https://searchbroker.atlassian.net/browse/EX-5327)
* **components:** migrate `AutoProgressBar` to `Composition API` (#1087) ([30cfa06](https://github.com/empathyco/x/commit/30cfa06ea5894412ab61db44b876c0645d17913e)), closes [EX-8049](https://searchbroker.atlassian.net/browse/EX-8049)
* move `NonPrimitive`, `Primitive` and `AnyFunction` types from `x-components` to `x-utils` ([7efe460](https://github.com/empathyco/x/commit/7efe4605303492e2de6f42d844f1c3244e0bcef1)), closes [EX-5792](https://searchbroker.atlassian.net/browse/EX-5792)
* move `object` utils from `x-components` to `x-utils` ([512b350](https://github.com/empathyco/x/commit/512b350da4a3dd73ddbd78a7b2965a1e07735a8e)), closes [EX-5793](https://searchbroker.atlassian.net/browse/EX-5793)
* Move aside to its own component in Home view. (#581) ([5b40994](https://github.com/empathyco/x/commit/5b40994af47c268ed10f06624ac1fdc634523a6d)), closes [EX-6525](https://searchbroker.atlassian.net/browse/EX-6525)
* move DeepPartial type from x-components to x-utils ([a26f0c5](https://github.com/empathyco/x/commit/a26f0c54317f17144b4262c60b0a0dc086883eb9)), closes [EX-5835](https://searchbroker.atlassian.net/browse/EX-5835)
* move flie design-system.md to design-system-deprecated (#1319) ([dcea015](https://github.com/empathyco/x/commit/dcea015abb708916e1057dc47d187f09d352b7db))
* **plugin:** Rename `inputStatus` to `searchBoxStatus` in Alias API. (#913) ([5cb837e](https://github.com/empathyco/x/commit/5cb837ed57db3fb5543a7f8e82d9beea0088cdd9)), closes [EX-7597](https://searchbroker.atlassian.net/browse/EX-7597)
* Simplify suggestions list slots. (#893) ([fc4ccb9](https://github.com/empathyco/x/commit/fc4ccb97a91b4c2ff7dfd0d7aed9747d7841b4ed)), closes [EX-7469](https://searchbroker.atlassian.net/browse/EX-7469)
* use `setQuery` util in the x modules (#1322) ([9749462](https://github.com/empathyco/x/commit/9749462a08308a121cda61a74209789dabad7b46))


### Documentation

* activating ready live-examples ([953e6c2](https://github.com/empathyco/x/commit/953e6c2ead73cd464fbb861bcc917134eac478a1)), closes [EX-5705](https://searchbroker.atlassian.net/browse/EX-5705)
* add `queriesPreview` to archetype integration (#735) ([57c719a](https://github.com/empathyco/x/commit/57c719a55208e149c9382483df02ac84cac33259)), closes [EX-6613](https://searchbroker.atlassian.net/browse/EX-6613)
* add guide for integrating X Interface into an existing website ([9e14a52](https://github.com/empathyco/x/commit/9e14a52389c77deede822643e50b34e5bbf78ddf)), closes [EX-5143](https://searchbroker.atlassian.net/browse/EX-5143)
* add local storage info and data purposes ([c1b0b05](https://github.com/empathyco/x/commit/c1b0b05cd9260227cb0689283ff27f34a2b01e51)), closes [EX-4123](https://searchbroker.atlassian.net/browse/EX-4123)
* Add module type to integration script docs (#592) ([907bda8](https://github.com/empathyco/x/commit/907bda8b4d825c93461089691f284c1758624a89))
* add new static docs. ([8a40986](https://github.com/empathyco/x/commit/8a409865fea2cd67e0c2daa5d4464f553ff33a2b)), closes [EX-5033](https://searchbroker.atlassian.net/browse/EX-5033)
* assets migration (#995) ([04678f1](https://github.com/empathyco/x/commit/04678f104a9e9383af7284d349f26e6c0f5454df))
* bring functional docs from eDocs project (#630) ([27e6dd6](https://github.com/empathyco/x/commit/27e6dd646084983c37fc52894dc95544253405d5)), closes [EX-6237](https://searchbroker.atlassian.net/browse/EX-6237)
* change h1 to be h2 ([a7e16c6](https://github.com/empathyco/x/commit/a7e16c616fe2593eccf93799f9a46c688857b35b)), closes [EX-5064](https://searchbroker.atlassian.net/browse/EX-5064)
* clarify how to subscribe to any `XEvent` (#645) ([d57941a](https://github.com/empathyco/x/commit/d57941a52d23f56cb7c04ed49b816a252473243f)), closes [EX-6816](https://searchbroker.atlassian.net/browse/EX-6816)
* **components:** fix column picker vue examples (#1293) ([fa0e817](https://github.com/empathyco/x/commit/fa0e817402261a5e7bddc9af6438ef0b3d1c7448))
* correcting `video-reference` id (#1038) ([bc46163](https://github.com/empathyco/x/commit/bc461638d10ecc9160d3c58bd9c7bfdc26d5df1e))
* fix `@empathyco/x-components import path in examples (#1353) ([071f12d](https://github.com/empathyco/x/commit/071f12dd96285a02f56c9ddc52c8fe6b802cefae))
* fix broken link in x-components readme (#561) ([7e3f551](https://github.com/empathyco/x/commit/7e3f551866709299e0f7d2d9e282c890dc2faa21))
* fix links and minor typos ([e0197d5](https://github.com/empathyco/x/commit/e0197d5bff978048aed39dff5878d60682b7aa9f)), closes [EX-6125](https://searchbroker.atlassian.net/browse/EX-6125)
* fix links and update repository information and development setup for `x-components` (#394) ([64d2118](https://github.com/empathyco/x/commit/64d2118f95673048df7e1a791ec3ae26da316ec9))
* fix multiple broken links ([226a2e5](https://github.com/empathyco/x/commit/226a2e54a4ed8832c7c47d26254e85c301913d98)), closes [EX-5035](https://searchbroker.atlassian.net/browse/EX-5035)
* fix typo in UrlHandler docs (#959) ([75e4bbe](https://github.com/empathyco/x/commit/75e4bbe47d4298fccb5d26f6145ac3d203d64b2e))
* **functional:** add my history ui and related docs (#685) ([3a9ac8a](https://github.com/empathyco/x/commit/3a9ac8a769d64196b31f05872fb92ec26dc635ad))
* **functional:** titles refactor and change image source (#790) ([cc177a5](https://github.com/empathyco/x/commit/cc177a5bad6fab363d40140e699e11e0ec6bc53c))
* **integration:** add close api function (#1096) ([2602e90](https://github.com/empathyco/x/commit/2602e90cf05eea95707d15ea0dac2a319fee6604))
* **integration:** add information about sessionId duration (#1139) ([ef879fc](https://github.com/empathyco/x/commit/ef879fc4df6673cadd5a72d9e62d98f644c4e39f))
* **integration:** how to track add2cart event (#1349) ([65509fd](https://github.com/empathyco/x/commit/65509fdfcbd89ce823bd2a36898c3bbf21b7b3ce))
* **integration:** update integration documentation for query preview with filters (#1336) ([b6d6b70](https://github.com/empathyco/x/commit/b6d6b70a6dff5fa22beac9980026e837aded8f8a))
* **recommendations:** updated recommendations ui doc (#1249) ([432118a](https://github.com/empathyco/x/commit/432118a2d42e0e0964e2d0e1c0e08b1f5e06bb7b))
* **related-tags:** added curation options (#1095) ([ab458c7](https://github.com/empathyco/x/commit/ab458c767fc508f4c1cfd4362589a408a09cfbc9))
* Remove docusaurus headers ([6252165](https://github.com/empathyco/x/commit/62521658374eb5c78112314502606e2d82113a95)), closes [EX-5081](https://searchbroker.atlassian.net/browse/EX-5081)
* remove jsdoc [@links](https://github.com/links) from generated documentation (#1261) ([9082fb2](https://github.com/empathyco/x/commit/9082fb2a9d2be89252cc58931d8b3035849a3123))
* review build search UI docs ([fc72ad7](https://github.com/empathyco/x/commit/fc72ad78fbff0deaa2f1a417c8e7f005ea2c8470))
* **static-docs:** added redirections in static docs metadata (#1341) ([8c1d27f](https://github.com/empathyco/x/commit/8c1d27fdef0ff5b95a274d0693c98495799436bb))
* **titles:** adjusting page, seo, and sidebar titles (#1166) ([510ebc3](https://github.com/empathyco/x/commit/510ebc33eecc667dbecc7e091a8bdfb99b8e71e7))
* update archetype integration and x-adapter docs (#628) ([247899e](https://github.com/empathyco/x/commit/247899e39d4f415f59b8ec1b7376fc72530028c2)), closes [EX-6728](https://searchbroker.atlassian.net/browse/EX-6728)
* Update documentation to differentiate integration from development ([fc8d9fa](https://github.com/empathyco/x/commit/fc8d9faa57faafee90c0f4da159b6040294c099c)), closes [EX-5608](https://searchbroker.atlassian.net/browse/EX-5608)
* update functional docs callout formatting (#671) ([5f1de74](https://github.com/empathyco/x/commit/5f1de74c2e86adb638d692781483cac1ccf70a71))
* use new docs video reference component (#923) ([c1f2bff](https://github.com/empathyco/x/commit/c1f2bffa684c10149c97b4d746fecbe4519fa126))



## [4.0.2-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-components@4.0.1...@empathyco/x-components@4.0.2-alpha.0) (2023-11-29)

**Note:** Version bump only for package @empathyco/x-components





## [4.0.1](https://github.com/empathyco/x/compare/@empathyco/x-components@4.0.1-alpha.0...@empathyco/x-components@4.0.1) (2023-11-24)

**Note:** Version bump only for package @empathyco/x-components





## [4.0.1-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-components@4.0.0-alpha.1...@empathyco/x-components@4.0.1-alpha.0) (2023-11-22)

**Note:** Version bump only for package @empathyco/x-components





## [4.0.0](https://github.com/empathyco/x/compare/@empathyco/x-components@4.0.0-alpha.1...@empathyco/x-components@4.0.0) (2023-11-21)

**Note:** Version bump only for package @empathyco/x-components





## [4.0.0-alpha.1](https://github.com/empathyco/x/compare/@empathyco/x-components@4.0.0-alpha.0...@empathyco/x-components@4.0.0-alpha.1) (2023-11-20)


### Bug Fixes

* use `cypress run` for headless testing (#1357) ([bc88050](https://github.com/empathyco/x/commit/bc88050a6c525e65d8b0e2d1adacf5d823df9137))



## [4.0.0-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-components@3.1.0-alpha.3...@empathyco/x-components@4.0.0-alpha.0) (2023-11-16)


### ⚠ BREAKING CHANGES

* **components:** remove deprecated origins from (#1344)
* **facets:** The '__unknown-facet__' value for a facetId is deprecated: it has been replaced by the UNKNOWN_FACET_KEY constant, whose value is '__unknown__'.

Co-authored-by: Guillermo Cacheda <cachedacodes@gmail.com>

### Features

* **components:** remove deprecated origins (#1355) ([3d7c981](https://github.com/empathyco/x/commit/3d7c981380bd8af30724780f7810808d563db471))
* **facets:** Unify __unknown__ and __unknown-facet__ in a constant (#1351) ([30585f2](https://github.com/empathyco/x/commit/30585f2d57653aa33c68f748ff10f93202f1887e))



## [3.1.0-alpha.3](https://github.com/empathyco/x/compare/@empathyco/x-components@3.1.0-alpha.2...@empathyco/x-components@3.1.0-alpha.3) (2023-11-13)


### Features

* migrate from `vue-cli` to `vite` (#1350) ([52a3b6e](https://github.com/empathyco/x/commit/52a3b6e7d94587f6934e838a2e68c99af97f7999))



## [3.1.0-alpha.2](https://github.com/empathyco/x/compare/@empathyco/x-components@3.1.0-alpha.1...@empathyco/x-components@3.1.0-alpha.2) (2023-11-13)


### Documentation

* **integration:** how to track add2cart event (#1349) ([65509fd](https://github.com/empathyco/x/commit/65509fdfcbd89ce823bd2a36898c3bbf21b7b3ce))



## [3.1.0-alpha.1](https://github.com/empathyco/x/compare/@empathyco/x-components@3.1.0-alpha.0...@empathyco/x-components@3.1.0-alpha.1) (2023-11-10)


### Documentation

* fix `@empathyco/x-components import path in examples (#1353) ([071f12d](https://github.com/empathyco/x/commit/071f12dd96285a02f56c9ddc52c8fe6b802cefae))



## [3.1.0-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.1-alpha.4...@empathyco/x-components@3.1.0-alpha.0) (2023-11-06)


### Features

* **extra-params:** allow currency to be an extra param as default ([319851d](https://github.com/empathyco/x/commit/319851da07f04a79aae128081c9c45cd7ae1b1e9))



## [3.0.1-alpha.4](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.1-alpha.3...@empathyco/x-components@3.0.1-alpha.4) (2023-10-31)


### Bug Fixes

* **x-plugin:** improve ResultFeature type values (#1344) ([c4c9f6e](https://github.com/empathyco/x/commit/c4c9f6e69d9f9f2a68619d6f10e918c649b42894))



## [3.0.1-alpha.3](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.1-alpha.2...@empathyco/x-components@3.0.1-alpha.3) (2023-10-30)


### Bug Fixes

* identation error in search-box.md ([614407e](https://github.com/empathyco/x/commit/614407e17a4f198e9c8ad11ca324a00ee7275fa6))



## [3.0.1-alpha.2](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.1-alpha.1...@empathyco/x-components@3.0.1-alpha.2) (2023-10-27)


### Documentation

* **static-docs:** added redirections in static docs metadata (#1341) ([8c1d27f](https://github.com/empathyco/x/commit/8c1d27fdef0ff5b95a274d0693c98495799436bb))



## [3.0.1-alpha.1](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.1-alpha.0...@empathyco/x-components@3.0.1-alpha.1) (2023-10-26)


### Bug Fixes

* **history-queries:** map selected filters correctly when coming from Query Preview (#1325) ([61fdfd1](https://github.com/empathyco/x/commit/61fdfd1f4af0183952084abfd8a72ecdd76ee6ee))



## [3.0.1-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.425...@empathyco/x-components@3.0.1-alpha.0) (2023-10-24)

**Note:** Version bump only for package @empathyco/x-components





# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.0](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.424...@empathyco/x-components@3.0.0) (2023-10-23)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.425](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.424...@empathyco/x-components@3.0.0-alpha.425) (2023-10-23)


### Documentation

* **integration:** update integration documentation for query preview with filters [(#1336)](https://github.com/empathyco/x/pull/1336) ([b6d6b70](https://github.com/empathyco/x/commit/b6d6b70a6dff5fa22beac9980026e837aded8f8a))



## [3.0.0-alpha.424](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.423...@empathyco/x-components@3.0.0-alpha.424) (2023-10-23)

### Bug Fixes

- **history-queries:** legacy history queries stored in the browser without selected filters [(#1333)](https://github.com/empathyco/x/pull/1333)

## [3.0.0-alpha.423](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.422...@empathyco/x-components@3.0.0-alpha.423) (2023-10-19)

### Code Refactoring

- use `setQuery` util in the x modules (#1322)

## [3.0.0-alpha.422](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.421...@empathyco/x-components@3.0.0-alpha.422) (2023-10-12)

### Features

- Implement config utils in the modules with config
  [(#1321)](https://github.com/empathyco/x/pull/1321)

### ⚠ BREAKING CHANGES

- setPageSize search module mutation has been replaced by the `setConfig` mutation.
  `setTaggingConfig` tagging module mutation and `setFacetsConfig` facets module mutation have been
  replaced by the `mergeConfig` mutation.

## [3.0.0-alpha.421](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.420...@empathyco/x-components@3.0.0-alpha.421) (2023-10-11)

### Features

- **history-queries:** filters in history queries
  [(#1315)](https://github.com/empathyco/x/pull/1315)

## [3.0.0-alpha.420](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.419...@empathyco/x-components@3.0.0-alpha.420) (2023-10-11)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.419](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.418...@empathyco/x-components@3.0.0-alpha.419) (2023-10-10)

### Features

- **experience-controls:** Create experience controls module tests
  [(#1303)](https://github.com/empathyco/x/pull/1303)

### Bug Fixes

- move the display-results-provider to fix semantics sliding panel
  [(#1317)](https://github.com/empathyco/x/pull/1317)
- set query in facets module from selecting query preview
  [(#1318)](https://github.com/empathyco/x/pull/1318)

### Code Refactoring

- move file `design-system.md` to design-system-deprecated
  [(#1319)](https://github.com/empathyco/x/pull/1319)

## [3.0.0-alpha.418](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.417...@empathyco/x-components@3.0.0-alpha.418) (2023-10-09)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.417](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.416...@empathyco/x-components@3.0.0-alpha.417) (2023-10-05)

### Features

- utils for the mutation of states with config [(#1313)](https://github.com/empathyco/x/pull/1313)

## [3.0.0-alpha.416](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.415...@empathyco/x-components@3.0.0-alpha.416) (2023-10-05)

### Bug Fixes

- exports for experience controls [(#1312)](https://github.com/empathyco/x/pull/1312)

## [3.0.0-alpha.415](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.414...@empathyco/x-components@3.0.0-alpha.415) (2023-10-04)

### Features

- **experience-controls:** experience controls module and adapter
  [(#1307)](https://github.com/empathyco/x/pull/1307)

## [3.0.0-alpha.414](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.413...@empathyco/x-components@3.0.0-alpha.414) (2023-09-22)

### Features

- **queries-preview:** filter query preview [(#1296)](https://github.com/empathyco/x/pull/1296)

### Documentation

- **components:** fix column picker vue examples [(#1293)](https://github.com/empathyco/x/pull/1293)

## [3.0.0-alpha.413](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.412...@empathyco/x-components@3.0.0-alpha.413) (2023-09-20)

### Features

- **queries-preview:** add filters to the query preview request
  [(#1292)](https://github.com/empathyco/x/pull/1292)
- **queries-preview:** use deep equal to compare request
  [(#1291)](https://github.com/empathyco/x/pull/1291)

## [3.0.0-alpha.412](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.411...@empathyco/x-components@3.0.0-alpha.412) (2023-09-18)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.411](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.410...@empathyco/x-components@3.0.0-alpha.411) (2023-09-18)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.410](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.409...@empathyco/x-components@3.0.0-alpha.410) (2023-09-15)

### ⚠ BREAKING CHANGES

- **queries-preview:** the `QueryPreviewList` component `queries` prop has changed name to
  `queriesPreviewInfo` and the type is an array of `QueryPreviewInfo` as instead of an array of
  strings. The QueryPreview component `query` prop has changed name to `queryPreviewInfo` and the
  type is `QueryPreviewInfo` instead of `string`. `QueryPreviewInfo` type is now exported from the
  module.

### Features

- **queries-preview:** query preview components allow adding extra params to the request
  [(#1270)](https://github.com/empathyco/x/pull/1270)

## [3.0.0-alpha.409](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.408...@empathyco/x-components@3.0.0-alpha.409) (2023-09-15)

### Features

- **scroll:** add top offset when automatically scrolling to main-scroll-item
  [(#1277)](https://github.com/empathyco/x/pull/1277)

## [3.0.0-alpha.408](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.407...@empathyco/x-components@3.0.0-alpha.408) (2023-09-12)

### Bug Fixes

- prevent flickering animation on query preview list second load

## [3.0.0-alpha.407](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.406...@empathyco/x-components@3.0.0-alpha.407) (2023-09-07)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.406](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.405...@empathyco/x-components@3.0.0-alpha.406) (2023-08-25)

### Features

- standardise all events links in component docs section
  [(#1265)](https://github.com/empathyco/x/pull/1265)

## [3.0.0-alpha.405](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.404...@empathyco/x-components@3.0.0-alpha.405) (2023-08-25)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.404](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.403...@empathyco/x-components@3.0.0-alpha.404) (2023-08-23)

### Documentation

- remove jsdoc [@links](https://github.com/links) from generated documentation
  [(#1261)](https://github.com/empathyco/x/pull/1261)

## [3.0.0-alpha.403](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.402...@empathyco/x-components@3.0.0-alpha.403) (2023-08-21)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.402](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.401...@empathyco/x-components@3.0.0-alpha.402) (2023-08-17)

### Bug Fixes

- **components:** restore sliding panel state after search
  [(#1259)](https://github.com/empathyco/x/pull/1259)

## [3.0.0-alpha.401](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.400...@empathyco/x-components@3.0.0-alpha.401) (2023-08-16)

### Documentation

- **recommendations:** updated recommendations ui doc
  [(#1249)](https://github.com/empathyco/x/pull/1249)

## [3.0.0-alpha.400](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.399...@empathyco/x-components@3.0.0-alpha.400) (2023-08-02)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.399](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.398...@empathyco/x-components@3.0.0-alpha.399) (2023-07-31)

### Bug Fixes

- fix base rating component [(#1256)](https://github.com/empathyco/x/pull/1256)

## [3.0.0-alpha.398](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.397...@empathyco/x-components@3.0.0-alpha.398) (2023-07-27)

### Bug Fixes

- **search:** Redirection didn't cancel when related tag was clicked
  [(#1255)](https://github.com/empathyco/x/pull/1255)

## [3.0.0-alpha.397](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.396...@empathyco/x-components@3.0.0-alpha.397) (2023-07-27)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.396](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.395...@empathyco/x-components@3.0.0-alpha.396) (2023-07-26)

### Features

- **facets:** improve customization and add prop classes to editable-number-range-filter
  [(#1253)](https://github.com/empathyco/x/pull/1253)

## [3.0.0-alpha.395](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.394...@empathyco/x-components@3.0.0-alpha.395) (2023-07-25)

### Bug Fixes

- **filters:** Editable number range filter should be unique
  [(#1243)](https://github.com/empathyco/x/pull/1243)

## [3.0.0-alpha.394](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.393...@empathyco/x-components@3.0.0-alpha.394) (2023-07-24)

### Features

- **extra-params:** make the snippet-config-extra-params component react to prop changes

## [3.0.0-alpha.393](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.392...@empathyco/x-components@3.0.0-alpha.393) (2023-07-13)

### ⚠ BREAKING CHANGES

- the property 'querySuggestions' in 'x-plugin' now returns the query suggestions that should be
  displayed based on the module's config. new property called 'fullQuerySuggestions' returns all the
  query suggestions in the module

### Features

- add alias for the query suggestions that should be displayed
  [(#1247)](https://github.com/empathyco/x/pull/1247)

## [3.0.0-alpha.392](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.391...@empathyco/x-components@3.0.0-alpha.392) (2023-07-11)

### Bug Fixes

- **search:** ignore page from url when going to different query
  [(#1244)](https://github.com/empathyco/x/pull/1244)

## [3.0.0-alpha.391](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.390...@empathyco/x-components@3.0.0-alpha.391) (2023-06-27)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.390](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.389...@empathyco/x-components@3.0.0-alpha.390) (2023-06-27)

### Testing

- fix failing tests [(#1241)](https://github.com/empathyco/x/pull/1241)

## [3.0.0-alpha.389](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.388...@empathyco/x-components@3.0.0-alpha.389) (2023-06-15)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.388](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.387...@empathyco/x-components@3.0.0-alpha.388) (2023-06-14)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.387](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.386...@empathyco/x-components@3.0.0-alpha.387) (2023-06-14)

### Features

- **queries-preview:** add isAnyQueryLoadedInPreview composable
  [(#1229)](https://github.com/empathyco/x/pull/1229)
- **tagging:** track displayClick properties in result & tagging request
  [(#1225)](https://github.com/empathyco/x/pull/1225)

## [3.0.0-alpha.386](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.385...@empathyco/x-components@3.0.0-alpha.386) (2023-06-12)

### Features

- **queries-preview:** add loaded previews getter
  [(#1227)](https://github.com/empathyco/x/pull/1227)
- **semantic-queries:** add SemanticQuery component
  [(#1226)](https://github.com/empathyco/x/pull/1226)

## [3.0.0-alpha.385](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.384...@empathyco/x-components@3.0.0-alpha.385) (2023-06-09)

### Features

- make `XAPI` init method async [(#1228)](https://github.com/empathyco/x/pull/1228)

## [3.0.0-alpha.384](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.383...@empathyco/x-components@3.0.0-alpha.384) (2023-06-08)

### Testing

- review skipped tests [(#1201)](https://github.com/empathyco/x/pull/1201)

## [3.0.0-alpha.383](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.382...@empathyco/x-components@3.0.0-alpha.383) (2023-06-08)

### Bug Fixes

- **deps:** update dependency @vueuse/core to v10
  [(#1219)](https://github.com/empathyco/x/pull/1219)
- **platform-adapter:** change semantics url path
  [(#1230)](https://github.com/empathyco/x/pull/1230)

## [3.0.0-alpha.382](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.381...@empathyco/x-components@3.0.0-alpha.382) (2023-06-07)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.381](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.380...@empathyco/x-components@3.0.0-alpha.381) (2023-06-06)

### Features

- **semantic-queries:** add maxItemsToRequest config
  [(#1224)](https://github.com/empathyco/x/pull/1224)
- **tagging:** track displayClick [(#1222)](https://github.com/empathyco/x/pull/1222)

## [3.0.0-alpha.380](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.379...@empathyco/x-components@3.0.0-alpha.380) (2023-05-31)

### Features

- **component:** set configuration for base-result-link to ignore tagging of click
  [(#1211)](https://github.com/empathyco/x/pull/1211)

## [3.0.0-alpha.379](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.378...@empathyco/x-components@3.0.0-alpha.379) (2023-05-30)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.378](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.377...@empathyco/x-components@3.0.0-alpha.378) (2023-05-30)

### Features

- **semantic-queries:** add semantic queries module and component
  [(#1213)](https://github.com/empathyco/x/pull/1213)

## [3.0.0-alpha.377](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.376...@empathyco/x-components@3.0.0-alpha.377) (2023-05-30)

### Features

- **platform-adapter:** add semantic queries to platform adapter
  [(#1212)](https://github.com/empathyco/x/pull/1212)

## [3.0.0-alpha.376](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.375...@empathyco/x-components@3.0.0-alpha.376) (2023-05-30)

### Features

- **queries-preview:** make the QueryPreviewRequestUpdated not replaceable
  [(#1203)](https://github.com/empathyco/x/pull/1203)

## [3.0.0-alpha.375](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.374...@empathyco/x-components@3.0.0-alpha.375) (2023-05-24)

### Features

- **tagging:** add new type values to ResultFeature and FeatureLocation
  [(#1209)](https://github.com/empathyco/x/pull/1209)

## [3.0.0-alpha.374](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.373...@empathyco/x-components@3.0.0-alpha.374) (2023-05-24)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.373](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.372...@empathyco/x-components@3.0.0-alpha.373) (2023-05-24)

### Bug Fixes

- watch `props.result.images` directly [(#1204)](https://github.com/empathyco/x/pull/1204)

## [3.0.0-alpha.372](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.371...@empathyco/x-components@3.0.0-alpha.372) (2023-05-22)

### Bug Fixes

- include tokens in deprecated theme css file [(#1202)](https://github.com/empathyco/x/pull/1202)

## [3.0.0-alpha.371](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.370...@empathyco/x-components@3.0.0-alpha.371) (2023-05-18)

### Bug Fixes

- blur related tag when deselected [(#1199)](https://github.com/empathyco/x/pull/1199)

## [3.0.0-alpha.370](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.369...@empathyco/x-components@3.0.0-alpha.370) (2023-05-16)

### Continuous Integration

- use cypress GitHub action [(#1198)](https://github.com/empathyco/x/pull/1198)

## [3.0.0-alpha.369](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.368...@empathyco/x-components@3.0.0-alpha.369) (2023-05-15)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.368](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.367...@empathyco/x-components@3.0.0-alpha.368) (2023-05-11)

### ⚠ BREAKING CHANGES

- **deps:** minimum node version required is 18.

### Others

- **deps:** update node to 18 [(#1196)](https://github.com/empathyco/x/pull/1196)

## [3.0.0-alpha.367](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.366...@empathyco/x-components@3.0.0-alpha.367) (2023-05-11)

### ⚠ BREAKING CHANGES

- **deps:** minimum version required is node v18

### Features

- migrate suggestions and currency components to vue 3 syntax
  [(#1159)](https://github.com/empathyco/x/pull/1159)

### Bug Fixes

- `BaseResultImage` not showing the right size on load
  [(#1176)](https://github.com/empathyco/x/pull/1176)

### Others

- **deps:** update node to v18 [(#1175)](https://github.com/empathyco/x/pull/1175)

### Continuous Integration

- parallelize steps [(#1174)](https://github.com/empathyco/x/pull/1174)

## [3.0.0-alpha.366](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.365...@empathyco/x-components@3.0.0-alpha.366) (2023-05-04)

### Features

- migrate results to vue 3 syntax [(#1145)](https://github.com/empathyco/x/pull/1145)

## [3.0.0-alpha.365](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.364...@empathyco/x-components@3.0.0-alpha.365) (2023-05-03)

### Features

- migrate filters to vue 3 syntax [(#1144)](https://github.com/empathyco/x/pull/1144)
- migrate panels components to vue 3 syntax [(#1150)](https://github.com/empathyco/x/pull/1150)

## [3.0.0-alpha.364](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.363...@empathyco/x-components@3.0.0-alpha.364) (2023-05-03)

### Features

- migrate modals to vue 3 syntax [(#1141)](https://github.com/empathyco/x/pull/1141)

## [3.0.0-alpha.363](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.362...@empathyco/x-components@3.0.0-alpha.363) (2023-05-03)

### Features

- Adapt Result mapping according to new API standard
  [(#1039)](https://github.com/empathyco/x/pull/1039)

## [3.0.0-alpha.362](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.361...@empathyco/x-components@3.0.0-alpha.362) (2023-05-02)

### Features

- **search:** add dynamic title prop to promoted and banner component
  [(#1168)](https://github.com/empathyco/x/pull/1168)

### Documentation

- **titles:** adjusting page, seo, and sidebar titles
  [(#1166)](https://github.com/empathyco/x/pull/1166)

## [3.0.0-alpha.361](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.360...@empathyco/x-components@3.0.0-alpha.361) (2023-04-26)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.360](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.359...@empathyco/x-components@3.0.0-alpha.360) (2023-04-24)

### ⚠ BREAKING CHANGES

- **design-system:** The `x-components` design system has been deprecated. The exported theme is no
  longer available. If you need support for the old design system you should import
  `@empathyco/x-components/design-system/deprecated-full-theme.css`.
- **design-system:** `x-grid-list` and `x-grid-list__item` classes have been removed from `BaseGrid`
  component.
- **design-system:** `x-grid-list--cols-{columns}` has been renamed to `x-base-grid--cols-{columns}`
- **design-system:** `x-list` class has been removed from the following components:

  `BaseModal`, `BaseSuggetions`, `BaseTabsPanel`, `Facets`, `FiltersList`, `FiltersSearch`,
  `IdentifierResults`, `MyHistory`, `PartialResultList`, `ResultVariantSelector`, `Recommendations`,
  `RelatedTags`, `SlidingPanel`, `SelectedFiltersList`.

- **design-system:** `FixedHeaderAndAsidesLayout` `MultiColumnMaxWidthLayout` and
  `SingleColumnLayout` have been deprecated.
- **design-system:** `BaseModal` default opacity has changed from `0.7` to `0.3`.
- **design-system:** `x-list__item` class has been removed from `BaseTabsPanel` component.
- **design-system:** `x-message` class has been removed from `Redirection` component.

### Features

- **design-system:** deprecate old DS [(#1138)](https://github.com/empathyco/x/pull/1138)

## [3.0.0-alpha.359](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.358...@empathyco/x-components@3.0.0-alpha.359) (2023-04-24)

### Bug Fixes

- **search:** export `SortPickerList` [(#1157)](https://github.com/empathyco/x/pull/1157)

## [3.0.0-alpha.358](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.357...@empathyco/x-components@3.0.0-alpha.358) (2023-04-24)

### Features

- **search:** add sort picker list component [(#1155)](https://github.com/empathyco/x/pull/1155)

## [3.0.0-alpha.357](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.356...@empathyco/x-components@3.0.0-alpha.357) (2023-04-20)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.356](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.355...@empathyco/x-components@3.0.0-alpha.356) (2023-04-20)

### Features

- export sticky modifier [(#1151)](https://github.com/empathyco/x/pull/1151)

## [3.0.0-alpha.355](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.354...@empathyco/x-components@3.0.0-alpha.355) (2023-04-19)

### ⚠ BREAKING CHANGES

- **design-system:** Old `design-system` `progress-bar` styles are now located in the
  `deprecated-full-theme.css` file.
- **design-system:** Renamed `x-progress-bar__line` class to `x-progress-bar-fill`.

### Features

- **design-system:** add XDS progress bar component
  [(#1149)](https://github.com/empathyco/x/pull/1149)

## [3.0.0-alpha.354](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.353...@empathyco/x-components@3.0.0-alpha.354) (2023-04-19)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.353](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.352...@empathyco/x-components@3.0.0-alpha.353) (2023-04-19)

### Features

- **search:** add fallback disclaimer component [(#1122)](https://github.com/empathyco/x/pull/1122)
- **facets:** add dynamic prop to show more/less buttons in sliced-filters
  [(#1146)](https://github.com/empathyco/x/pull/1146)

## [3.0.0-alpha.352](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.351...@empathyco/x-components@3.0.0-alpha.352) (2023-04-18)

### Documentation

- **integration:** add information about sessionId duration
  [(#1139)](https://github.com/empathyco/x/pull/1139)

## [3.0.0-alpha.351](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.350...@empathyco/x-components@3.0.0-alpha.351) (2023-04-17)

### Features

- add `filterItemClass` prop to `HierarchicalFilter`
  [(#1135)](https://github.com/empathyco/x/pull/1135)

## [3.0.0-alpha.350](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.349...@empathyco/x-components@3.0.0-alpha.350) (2023-04-17)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.349](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.348...@empathyco/x-components@3.0.0-alpha.349) (2023-04-13)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.348](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.347...@empathyco/x-components@3.0.0-alpha.348) (2023-04-13)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.347](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.346...@empathyco/x-components@3.0.0-alpha.347) (2023-04-12)

### Features

- **design-system:** deprecate old DS filters [(#1121)](https://github.com/empathyco/x/pull/1121)

## [3.0.0-alpha.346](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.345...@empathyco/x-components@3.0.0-alpha.346) (2023-04-12)

### Features

- **facets:** implement strategy to decide what filters are sent in the request
  [(#1124)](https://github.com/empathyco/x/pull/1124)

## [3.0.0-alpha.345](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.344...@empathyco/x-components@3.0.0-alpha.345) (2023-04-10)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.344](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.343...@empathyco/x-components@3.0.0-alpha.344) (2023-04-10)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.343](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.342...@empathyco/x-components@3.0.0-alpha.343) (2023-03-31)

### Features

- add sticky filters [(#1113)](https://github.com/empathyco/x/pull/1113)

## [3.0.0-alpha.342](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.341...@empathyco/x-components@3.0.0-alpha.342) (2023-03-30)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.341](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.340...@empathyco/x-components@3.0.0-alpha.341) (2023-03-30)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.340](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.339...@empathyco/x-components@3.0.0-alpha.340) (2023-03-29)

### Features

- Minor improvements. [(#1109)](https://github.com/empathyco/x/pull/1109)

## [3.0.0-alpha.339](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.338...@empathyco/x-components@3.0.0-alpha.339) (2023-03-27)

### ⚠ BREAKING CHANGES

- `base-column-picker-list` structure changes. It now wraps the buttons in div instead of using ul
  and li. Additionally, the class for the selected option has been changed to `x-selected`.

### Features

- adapt `base-column-picker-list` to use the XDS component of button group
  [(#1115)](https://github.com/empathyco/x/pull/1115)

## [3.0.0-alpha.338](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.337...@empathyco/x-components@3.0.0-alpha.338) (2023-03-23)

### Features

- **components:** add `columns` prop in `BaseVariableColumnGrid`
  [(#1112)](https://github.com/empathyco/x/pull/1112)

## [3.0.0-alpha.337](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.336...@empathyco/x-components@3.0.0-alpha.337) (2023-03-22)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.336](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.335...@empathyco/x-components@3.0.0-alpha.336) (2023-03-20)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.335](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.334...@empathyco/x-components@3.0.0-alpha.335) (2023-03-16)

### ⚠ BREAKING CHANGES

- **design-system:** Old `design-system` `Tag` styles are now located in the
  `deprecated-full-theme.css` file.
- **design-system:** Old `x-tag--is-curated` and `x-tag--is-selected` classes are no longer used by
  `RelatedTag` component.

### Features

- **design-system:** deprecate old DS `Tag` component
  [(#1103)](https://github.com/empathyco/x/pull/1103)

## [3.0.0-alpha.334](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.333...@empathyco/x-components@3.0.0-alpha.334) (2023-03-16)

### Features

- **plugin:** replace old bus implementation using the new `x-priority-bus`
  [(#1086)](https://github.com/empathyco/x/pull/1086)

## [3.0.0-alpha.333](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.332...@empathyco/x-components@3.0.0-alpha.333) (2023-03-15)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.332](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.331...@empathyco/x-components@3.0.0-alpha.332) (2023-03-14)

### Features

- **design-system:** add XDS badge component [(#1100)](https://github.com/empathyco/x/pull/1100)

## [3.0.0-alpha.331](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.330...@empathyco/x-components@3.0.0-alpha.331) (2023-03-14)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.330](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.329...@empathyco/x-components@3.0.0-alpha.330) (2023-03-09)

### Code Refactoring

- **components:** migrate `AutoProgressBar` to `Composition API`
  [(#1087)](https://github.com/empathyco/x/pull/1087)

## [3.0.0-alpha.329](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.328...@empathyco/x-components@3.0.0-alpha.329) (2023-03-09)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.328](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.327...@empathyco/x-components@3.0.0-alpha.328) (2023-03-07)

### Bug Fixes

- **edocs-live-examples:** Live example was not rendered

## [3.0.0-alpha.327](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.326...@empathyco/x-components@3.0.0-alpha.327) (2023-03-07)

### Bug Fixes

- **deps:** remove `only-allow` pnpm [(#1097)](https://github.com/empathyco/x/pull/1097)

### Documentation

- **related-tags:** added curation options [(#1095)](https://github.com/empathyco/x/pull/1095)

## [3.0.0-alpha.326](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.325...@empathyco/x-components@3.0.0-alpha.326) (2023-03-06)

### Documentation

- **integration:** add close api function [(#1096)](https://github.com/empathyco/x/pull/1096)

## [3.0.0-alpha.325](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.324...@empathyco/x-components@3.0.0-alpha.325) (2023-03-02)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.324](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.323...@empathyco/x-components@3.0.0-alpha.324) (2023-03-02)

### Features

- **queries-preview:** add query preview list component to orchestrate requests
  [(#1084)](https://github.com/empathyco/x/pull/1084)

## [3.0.0-alpha.323](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.322...@empathyco/x-components@3.0.0-alpha.323) (2023-03-01)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.322](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.321...@empathyco/x-components@3.0.0-alpha.322) (2023-03-01)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.321](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.320...@empathyco/x-components@3.0.0-alpha.321) (2023-03-01)

### Features

- Add close event to BaseXAPI [(#1091)](https://github.com/empathyco/x/pull/1091)

### Bug Fixes

- **design-system:** fix deprecated typography and picture components
  [(#1090)](https://github.com/empathyco/x/pull/1090)

## [3.0.0-alpha.320](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.319...@empathyco/x-components@3.0.0-alpha.320) (2023-02-28)

### Bug Fixes

- **components:** Fix open issue when focused on body. Fix `SearchInputPlaceholder` styles.
  [(#1078)](https://github.com/empathyco/x/pull/1078)

## [3.0.0-alpha.319](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.318...@empathyco/x-components@3.0.0-alpha.319) (2023-02-27)

### Features

- **banner:** add support without title and no clickable
  [(#1069)](https://github.com/empathyco/x/pull/1069)

## [3.0.0-alpha.318](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.317...@empathyco/x-components@3.0.0-alpha.318) (2023-02-21)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.317](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.316...@empathyco/x-components@3.0.0-alpha.317) (2023-02-17)

### Build System

- **dependencies:** bump `@bahmutov/cypress-esbuild-preprocessor` from `2.1.5` to `2.2.0`
  [(#1082)](https://github.com/empathyco/x/pull/1082)

## [3.0.0-alpha.316](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.315...@empathyco/x-components@3.0.0-alpha.316) (2023-02-16)

### Features

- remove `x-suggestion` class from `BaseSuggestion` component
  [(#1077)](https://github.com/empathyco/x/pull/1077)

## [3.0.0-alpha.315](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.314...@empathyco/x-components@3.0.0-alpha.315) (2023-02-15)

### Features

- **design-system:** Add `Input Group` component to the X Design System.
  [(#1066)](https://github.com/empathyco/x/pull/1066)

## [3.0.0-alpha.314](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.313...@empathyco/x-components@3.0.0-alpha.314) (2023-02-15)

### Features

- **design-system:** Add layout `layout-stack` util.
  [(#1076)](https://github.com/empathyco/x/pull/1076)

## [3.0.0-alpha.313](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.312...@empathyco/x-components@3.0.0-alpha.313) (2023-02-14)

### ⚠ BREAKING CHANGES

- **design-system:** design system scroll styles are deprecated. To continue using them import from
  deprecated-full-theme.css

### Features

- **design-system:** deprecate old x-scroll styles
  [(#1073)](https://github.com/empathyco/x/pull/1073)

### Bug Fixes

- **modal:** set focusOnOpen for the main-modal to false
  [(#1074)](https://github.com/empathyco/x/pull/1074)

## [3.0.0-alpha.312](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.311...@empathyco/x-components@3.0.0-alpha.312) (2023-02-14)

### Build System

- Delete unused `Jenkinsfile`. [(#1075)](https://github.com/empathyco/x/pull/1075)

## [3.0.0-alpha.311](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.310...@empathyco/x-components@3.0.0-alpha.311) (2023-02-10)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.310](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.309...@empathyco/x-components@3.0.0-alpha.310) (2023-02-08)

### Bug Fixes

- **search:** reset `query`, `page` and `sort` on clear query
  [(#1045)](https://github.com/empathyco/x/pull/1045)

### Continuous Integration

- refactor `lint` command to benefit from `nx parallelisation`
  [(#1051)](https://github.com/empathyco/x/pull/1051)

## [3.0.0-alpha.309](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.308...@empathyco/x-components@3.0.0-alpha.309) (2023-02-07)

### Continuous Integration

- migrate from `npm` & `lerna bootstrap` to `pnpm`
  [(#1047)](https://github.com/empathyco/x/pull/1047)

## [3.0.0-alpha.308](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.307...@empathyco/x-components@3.0.0-alpha.308) (2023-02-06)

### ⚠ BREAKING CHANGES

- **design-system:** Old design-system `Icon` styles are now located in the
  `deprecated-full-theme.css` file. Removed `checkbox-card`, `nq1`, `nq2`, `nq3`, and `nq4 icons`.

### Features

- **design-system:** add `icon` to XDS [(#1053)](https://github.com/empathyco/x/pull/1053)

## [3.0.0-alpha.307](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.306...@empathyco/x-components@3.0.0-alpha.307) (2023-02-03)

### Build System

- **deps:** update deps [(#1062)](https://github.com/empathyco/x/pull/1062)

## [3.0.0-alpha.306](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.305...@empathyco/x-components@3.0.0-alpha.306) (2023-02-01)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.305](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.304...@empathyco/x-components@3.0.0-alpha.305) (2023-01-30)

### Features

- **history-queries:** emit click event on HistoryQuery click
  [(#1048)](https://github.com/empathyco/x/pull/1048)

## [3.0.0-alpha.304](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.303...@empathyco/x-components@3.0.0-alpha.304) (2023-01-30)

### Features

- **history-queries:** bind formatTime callback to MyHistory suggestion slot
  [(#1049)](https://github.com/empathyco/x/pull/1049)

## [3.0.0-alpha.303](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.302...@empathyco/x-components@3.0.0-alpha.303) (2023-01-27)

### Build System

- **deps:** update deps [(#1046)](https://github.com/empathyco/x/pull/1046)

## [3.0.0-alpha.302](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.301...@empathyco/x-components@3.0.0-alpha.302) (2023-01-26)

### ⚠ BREAKING CHANGES

- **components:** class `x-picture__image` renamed to `x-picture-image`, deprecate classes
  `x-picture__image--placeholder` and `x-picture__image--fallback`

### Features

- **components:** deprecate x-picture\_\_image and placeholder/fallback styles
  [(#1036)](https://github.com/empathyco/x/pull/1036)

## [3.0.0-alpha.301](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.300...@empathyco/x-components@3.0.0-alpha.301) (2023-01-25)

### Documentation

- correcting `video-reference` id [(#1038)](https://github.com/empathyco/x/pull/1038)

## [3.0.0-alpha.300](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.299...@empathyco/x-components@3.0.0-alpha.300) (2023-01-25)

### Build System

- **dependencies:** update `typescript` to `4.9.4` and its dependencies to their latest version
  [(#993)](https://github.com/empathyco/x/pull/993)

## [3.0.0-alpha.299](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.298...@empathyco/x-components@3.0.0-alpha.299) (2023-01-24)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.298](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.297...@empathyco/x-components@3.0.0-alpha.298) (2023-01-24)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.297](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.296...@empathyco/x-components@3.0.0-alpha.297) (2023-01-24)

### Features

- add `prettier-plugin-tailwindcss` [(#1033)](https://github.com/empathyco/x/pull/1033)

## [3.0.0-alpha.296](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.295...@empathyco/x-components@3.0.0-alpha.296) (2023-01-24)

### Features

- remove duplicates from image placeholder/fallback classes
  [(#1032)](https://github.com/empathyco/x/pull/1032)

## [3.0.0-alpha.295](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.294...@empathyco/x-components@3.0.0-alpha.295) (2023-01-24)

### ⚠ BREAKING CHANGES

- **components:** Renamed `SlidingPanel` css classes `x-sliding-panel--at-start` and
  `x-sliding-panel--at-end` to `x-sliding-panel-at-start` and `x-sliding-panel-at-end` respectively.
- **components:** Renamed `SlidingPanel` buttons css classes `x-sliding-panel__button-left` and
  `x-sliding-panel__button-right` to `x-sliding-panel-button-left` and
  `x-sliding-panel-button-right` respectively.
- **components:** Old design-system `SlidingPanel` styles (including the updated button classes) are
  now located in the `deprecated-full-theme.css` file.

### Features

- **components:** use XDS `sliding panel` [(#1028)](https://github.com/empathyco/x/pull/1028)

## [3.0.0-alpha.294](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.293...@empathyco/x-components@3.0.0-alpha.294) (2023-01-23)

### ⚠ BREAKING CHANGES

- **design-system:** `picture` and some `result` styles related are now deprecated. To continue
  using them import from `deprecated-full-theme.css`.
- Rename `x-result-picture__image` to `x-result-picture-image`.

### Features

- **design-system:** add `product-image` `XDS` component
  [(#1025)](https://github.com/empathyco/x/pull/1025)

## [3.0.0-alpha.293](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.292...@empathyco/x-components@3.0.0-alpha.293) (2023-01-23)

### Styling

- update prettier and format code [(#1026)](https://github.com/empathyco/x/pull/1026)

## [3.0.0-alpha.292](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.291...@empathyco/x-components@3.0.0-alpha.292) (2023-01-23)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.291](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.290...@empathyco/x-components@3.0.0-alpha.291) (2023-01-20)

### Build System

- **deps:** update dependencies [(#1024)](https://github.com/empathyco/x/pull/1024)

## [3.0.0-alpha.290](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.289...@empathyco/x-components@3.0.0-alpha.290) (2023-01-20)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.289](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.288...@empathyco/x-components@3.0.0-alpha.289) (2023-01-19)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.288](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.287...@empathyco/x-components@3.0.0-alpha.288) (2023-01-18)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.287](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.286...@empathyco/x-components@3.0.0-alpha.287) (2023-01-18)

### Features

- **components:** add `contentClass` to `modals` [(#1009)](https://github.com/empathyco/x/pull/1009)

## [3.0.0-alpha.286](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.285...@empathyco/x-components@3.0.0-alpha.286) (2023-01-18)

### ⚠ BREAKING CHANGES

- **history-queries:** Renamed `removeHistoryQueryClass` prop to `removeButtonClass`.

### Features

- **history-queries:** add dynamic classes to the history query suggestion
  [(#1014)](https://github.com/empathyco/x/pull/1014)

## [3.0.0-alpha.285](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.284...@empathyco/x-components@3.0.0-alpha.285) (2023-01-17)

### ⚠ BREAKING CHANGES

- Rename `x-grid` class to `x-grid-list`.
- Rename `x-grid__item` class to `x-grid-list__item`.
- Rename `x-grid--cols-{cols}` class to `x-grid-list--cols-{cols}`.

### Features

- rename `x-grid` class to `x-grid-list` [(#1015)](https://github.com/empathyco/x/pull/1015)

## [3.0.0-alpha.284](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.283...@empathyco/x-components@3.0.0-alpha.284) (2023-01-17)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.283](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.282...@empathyco/x-components@3.0.0-alpha.283) (2023-01-17)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.282](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.281...@empathyco/x-components@3.0.0-alpha.282) (2023-01-17)

### Features

- add dynamic classes to the suggestion item inside the `base-suggestions`
  [(#1008)](https://github.com/empathyco/x/pull/1008)

## [3.0.0-alpha.281](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.280...@empathyco/x-components@3.0.0-alpha.281) (2023-01-16)

### Features

- **history-queries:** add dynamic classes to the remove history query button
  [(#1007)](https://github.com/empathyco/x/pull/1007)

## [3.0.0-alpha.280](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.279...@empathyco/x-components@3.0.0-alpha.280) (2023-01-13)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.279](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.278...@empathyco/x-components@3.0.0-alpha.279) (2023-01-13)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.278](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.277...@empathyco/x-components@3.0.0-alpha.278) (2023-01-13)

### Build System

- **deps:** update dependencies [(#1004)](https://github.com/empathyco/x/pull/1004)

## [3.0.0-alpha.277](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.276...@empathyco/x-components@3.0.0-alpha.277) (2023-01-12)

### Documentation

- assets migration [(#995)](https://github.com/empathyco/x/pull/995)

## [3.0.0-alpha.276](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.275...@empathyco/x-components@3.0.0-alpha.276) (2023-01-11)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.275](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.274...@empathyco/x-components@3.0.0-alpha.275) (2023-01-10)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.274](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.273...@empathyco/x-components@3.0.0-alpha.274) (2023-01-09)

### Features

- **history-queries:** expose `historyQueriesWithResults` in the alias API
  [(#991)](https://github.com/empathyco/x/pull/991)

## [3.0.0-alpha.273](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.272...@empathyco/x-components@3.0.0-alpha.273) (2023-01-09)

### ⚠ BREAKING CHANGES

- **design-system:** suggestion and suggestion group styles are now deprecated. To continue using
  them import from `deprecated-full-theme.css`.

### Features

- **design-system:** deprecate old suggestion and suggestion group styles
  [(#975)](https://github.com/empathyco/x/pull/975)

## [3.0.0-alpha.272](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.271...@empathyco/x-components@3.0.0-alpha.272) (2023-01-09)

### Features

- **design-system:** deprecate old typography styles
  [(#973)](https://github.com/empathyco/x/pull/973)

## [3.0.0-alpha.271](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.270...@empathyco/x-components@3.0.0-alpha.271) (2023-01-06)

### Build System

- **deps:** update dependencies

## [3.0.0-alpha.270](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.269...@empathyco/x-components@3.0.0-alpha.270) (2023-01-04)

### Features

- rename `search-types` to `x-types` [(#928)](https://github.com/empathyco/x/pull/928)

## [3.0.0-alpha.269](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.268...@empathyco/x-components@3.0.0-alpha.269) (2023-01-04)

### Features

- add view to test base-result-link accessibility [(#972)](https://github.com/empathyco/x/pull/972)

## [3.0.0-alpha.268](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.267...@empathyco/x-components@3.0.0-alpha.268) (2023-01-03)

### Build System

- **deps:** update `vue` to version `2.7` [(#971)](https://github.com/empathyco/x/pull/971)

## [3.0.0-alpha.267](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.266...@empathyco/x-components@3.0.0-alpha.267) (2023-01-03)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.266](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.265...@empathyco/x-components@3.0.0-alpha.266) (2023-01-02)

### Continuous Integration

- make Cypress cache depend on package. Make eslint cache restore last version if no exact match.

## [3.0.0-alpha.265](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.264...@empathyco/x-components@3.0.0-alpha.265) (2022-12-30)

### Testing

- **e2e:** update `cypress` to version `12.1.0` and replace `cypress-cucumber-preprocessor` with
  `@badeball/cypress-cucumber-preprocessor` [(#747)](https://github.com/empathyco/x/pull/747)

## [3.0.0-alpha.264](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.263...@empathyco/x-components@3.0.0-alpha.264) (2022-12-30)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.263](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.262...@empathyco/x-components@3.0.0-alpha.263) (2022-12-30)

### Features

- **design-system:** Add suggestion group component
  [(#943)](https://github.com/empathyco/x/pull/943)

## [3.0.0-alpha.262](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.261...@empathyco/x-components@3.0.0-alpha.262) (2022-12-29)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.261](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.260...@empathyco/x-components@3.0.0-alpha.261) (2022-12-29)

### Bug Fixes

- **build:** use the default `vue-cli` `webpack` configuration in `rollup-plugin-vue`
  [(#961)](https://github.com/empathyco/x/pull/961)

## [3.0.0-alpha.260](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.259...@empathyco/x-components@3.0.0-alpha.260) (2022-12-26)

### Documentation

- fix typo in UrlHandler docs [(#959)](https://github.com/empathyco/x/pull/959)

## [3.0.0-alpha.259](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.258...@empathyco/x-components@3.0.0-alpha.259) (2022-12-26)

### Features

- modify base-events-modal-close and base-events-modal-open for WCAG compliance
  [(#946)](https://github.com/empathyco/x/pull/946)

## [3.0.0-alpha.258](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.257...@empathyco/x-components@3.0.0-alpha.258) (2022-12-26)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.257](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.256...@empathyco/x-components@3.0.0-alpha.257) (2022-12-23)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.256](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.255...@empathyco/x-components@3.0.0-alpha.256) (2022-12-22)

### Bug Fixes

- **components:** image flickering on re-rendering [(#945)](https://github.com/empathyco/x/pull/945)

## [3.0.0-alpha.255](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.254...@empathyco/x-components@3.0.0-alpha.255) (2022-12-22)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.254](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.253...@empathyco/x-components@3.0.0-alpha.254) (2022-12-20)

### ⚠ BREAKING CHANGES

- Rename `NextQueryPreviewMounted` to `NextQueryPreviewMountedHook` and `QueryPreviewRemoved` to
  `QueryPreviewUnmountedHook`

### Features

- Rename lifecycle hook events [(#939)](https://github.com/empathyco/x/pull/939)
- **scroll:** capture listeners in MainScrollItem component
  [(#942)](https://github.com/empathyco/x/pull/942)

## [3.0.0-alpha.253](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.252...@empathyco/x-components@3.0.0-alpha.253) (2022-12-19)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.252](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.251...@empathyco/x-components@3.0.0-alpha.252) (2022-12-16)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.251](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.250...@empathyco/x-components@3.0.0-alpha.251) (2022-12-15)

### Documentation

- use new docs video reference component [(#923)](https://github.com/empathyco/x/pull/923)

## [3.0.0-alpha.250](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.249...@empathyco/x-components@3.0.0-alpha.250) (2022-12-15)

### Continuous Integration

- use matrix steps and jest projects [(#919)](https://github.com/empathyco/x/pull/919)

## [3.0.0-alpha.249](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.248...@empathyco/x-components@3.0.0-alpha.249) (2022-12-14)

### Features

- **recommendations:** emit `RecommendationsChanged`
  [(#922)](https://github.com/empathyco/x/pull/922)

## [3.0.0-alpha.248](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.247...@empathyco/x-components@3.0.0-alpha.248) (2022-12-12)

### Bug Fixes

- remove warning when the event is not defined [(#918)](https://github.com/empathyco/x/pull/918)

## [3.0.0-alpha.247](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.246...@empathyco/x-components@3.0.0-alpha.247) (2022-12-09)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.246](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.245...@empathyco/x-components@3.0.0-alpha.246) (2022-12-09)

### Build System

- **deps:** update dependencies [(#908)](https://github.com/empathyco/x/pull/908)

### Code Refactoring

- **plugin:** Rename `inputStatus` to `searchBoxStatus` in Alias API.
  [(#913)](https://github.com/empathyco/x/pull/913)

## [3.0.0-alpha.245](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.244...@empathyco/x-components@3.0.0-alpha.245) (2022-12-09)

### Features

- **search-box:** add input status handling[(#903)](https://github.com/empathyco/x/pull/903)

## [3.0.0-alpha.244](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.243...@empathyco/x-components@3.0.0-alpha.244) (2022-12-08)

### ⚠ BREAKING CHANGES

- Removes `queryHTML` slot scope prop from `BaseSuggestion`, `PopularSearch` `QuerySuggestion` and
  `HistoryQuery`. Use the new `Highlight` component instead.

### Features

- **components:** Use `Highlight` component inside suggestion
  components.[(#894)](https://github.com/empathyco/x/pull/894)

## [3.0.0-alpha.243](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.242...@empathyco/x-components@3.0.0-alpha.243) (2022-12-08)

### Testing

- **e2e:** make `HistoryQueries` test wait for no results
  [(#906)](https://github.com/empathyco/x/pull/906)

## [3.0.0-alpha.242](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.241...@empathyco/x-components@3.0.0-alpha.242) (2022-12-07)

### ⚠ BREAKING CHANGES

- the event `SearchResponseProvided` was renamed to `SearchResponseChanged`

### Code Refactoring

- Simplify suggestions list slots. [(#893)](https://github.com/empathyco/x/pull/893)

## [3.0.0-alpha.241](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.240...@empathyco/x-components@3.0.0-alpha.241) (2022-12-06)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.240](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.239...@empathyco/x-components@3.0.0-alpha.240) (2022-12-02)

### Features

- **history-queries:** Hide history queries with no results
  [(#865)](https://github.com/empathyco/x/pull/865)

## [3.0.0-alpha.239](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.238...@empathyco/x-components@3.0.0-alpha.239) (2022-12-01)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.238](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.237...@empathyco/x-components@3.0.0-alpha.238) (2022-12-01)

### Features

- **components:** add `getTargetElement` util to retrieve the `event.target`
  [(#870)](https://github.com/empathyco/x/pull/870)

### Bug Fixes

- **components:** reset`BaseResultImage` images state when `result` `prop` changes
  [(#888)](https://github.com/empathyco/x/pull/888)

## [3.0.0-alpha.237](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.236...@empathyco/x-components@3.0.0-alpha.237) (2022-12-01)

### Features

- **recommendations:** add `updateRecommendation` mutation
  [(#891)](https://github.com/empathyco/x/pull/891)

## [3.0.0-alpha.236](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.235...@empathyco/x-components@3.0.0-alpha.236) (2022-11-29)

### Features

- **tabs-panel:** add base tabs panel component [(#871)](https://github.com/empathyco/x/pull/871)

## [3.0.0-alpha.235](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.234...@empathyco/x-components@3.0.0-alpha.235) (2022-11-29)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.234](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.233...@empathyco/x-components@3.0.0-alpha.234) (2022-11-29)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.233](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.232...@empathyco/x-components@3.0.0-alpha.233) (2022-11-28)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.232](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.231...@empathyco/x-components@3.0.0-alpha.232) (2022-11-28)

### Features

- add `Highlight` component [(#872)](https://github.com/empathyco/x/pull/872)

## [3.0.0-alpha.231](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.230...@empathyco/x-components@3.0.0-alpha.231) (2022-11-28)

### ⚠ BREAKING CHANGES

- **components:** Renamed prop `animation` of `BaseResultImage` to `loadAnimation`.

### Features

- show next result image on hover [(#863)](https://github.com/empathyco/x/pull/863)

### Bug Fixes

- **components:** Fix InfiniteScroll get root element inside Shadow DOM.
  [(#874)](https://github.com/empathyco/x/pull/874)

## [3.0.0-alpha.230](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.229...@empathyco/x-components@3.0.0-alpha.230) (2022-11-24)

### Features

- Emit SearchResponseProvided event from Search Module
  [(#864)](https://github.com/empathyco/x/pull/864)

## [3.0.0-alpha.229](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.228...@empathyco/x-components@3.0.0-alpha.229) (2022-11-22)

### Features

- **components:** make base dropdown based components accessible
  [(#846)](https://github.com/empathyco/x/pull/846)

### Bug Fixes

- make `appear` attribute configurable on animations that have it set to `true` by default
  [(#862)](https://github.com/empathyco/x/pull/862)

## [3.0.0-alpha.228](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.227...@empathyco/x-components@3.0.0-alpha.228) (2022-11-17)

### Features

- adding e-docs portal live preview

## [3.0.0-alpha.227](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.226...@empathyco/x-components@3.0.0-alpha.227) (2022-11-15)

### Features

- **design-system:** add `suggestion` component to the XDS
  [(#838)](https://github.com/empathyco/x/pull/838)
- history-queries-switch wai aria adjustments [(#847)](https://github.com/empathyco/x/pull/847)

## [3.0.0-alpha.226](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.225...@empathyco/x-components@3.0.0-alpha.226) (2022-11-14)

### Features

- Change suggestion components to bind $attrs to base suggestions
  [(#831)](https://github.com/empathyco/x/pull/831)

## [3.0.0-alpha.225](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.224...@empathyco/x-components@3.0.0-alpha.225) (2022-11-11)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.224](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.223...@empathyco/x-components@3.0.0-alpha.224) (2022-11-11)

### Bug Fixes

- **animations:** make content-visibility CSS property and createCollapseAnimationMixin work
  together [(#839)](https://github.com/empathyco/x/pull/839)

## [3.0.0-alpha.223](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.222...@empathyco/x-components@3.0.0-alpha.223) (2022-11-10)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.222](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.221...@empathyco/x-components@3.0.0-alpha.222) (2022-11-10)

### Features

- **x-plugin:** Add function as possible value of `domElement` in
  InstallXOptions.[(#836)](https://github.com/empathyco/x/pull/836)

## [3.0.0-alpha.221](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.220...@empathyco/x-components@3.0.0-alpha.221) (2022-11-10)

### Features

- place modal under selected element [(#829)](https://github.com/empathyco/x/pull/829)

## [3.0.0-alpha.220](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.219...@empathyco/x-components@3.0.0-alpha.220) (2022-11-09)

### Features

- **empathize:** show Empathize only when it has content
  [(#820)](https://github.com/empathyco/x/pull/820)

## [3.0.0-alpha.219](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.218...@empathyco/x-components@3.0.0-alpha.219) (2022-11-09)

### Features

- **tagging:** track banner clicks [(#822)](https://github.com/empathyco/x/pull/822)

## [3.0.0-alpha.218](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.217...@empathyco/x-components@3.0.0-alpha.218) (2022-11-09)

### ⚠ BREAKING CHANGES

- **design-system:** the old design system button styles are now located in the
  `deprecated-full-theme.css`, if setup is not using the new design system, it must import this
  file.

### Features

- **design-system:** deprecate old design system button styles
  [(#830)](https://github.com/empathyco/x/pull/830)

## [3.0.0-alpha.217](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.216...@empathyco/x-components@3.0.0-alpha.217) (2022-11-08)

### Bug Fixes

- remove `resize-observer-browser` types from tsconfig
  [(#833)](https://github.com/empathyco/x/pull/833)

## [3.0.0-alpha.216](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.215...@empathyco/x-components@3.0.0-alpha.216) (2022-11-08)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.215](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.214...@empathyco/x-components@3.0.0-alpha.215) (2022-11-04)

### Features

- wai-aria for BaseEventButton based components [(#816)](https://github.com/empathyco/x/pull/816)

## [3.0.0-alpha.214](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.213...@empathyco/x-components@3.0.0-alpha.214) (2022-11-03)

### Features

- **design-system:** add tailwind showcase component
  [(#778)](https://github.com/empathyco/x/pull/778)

## [3.0.0-alpha.213](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.212...@empathyco/x-components@3.0.0-alpha.213) (2022-11-03)

### Features

- Use Banner position (= row) to sort grid [(#802)](https://github.com/empathyco/x/pull/802)

## [3.0.0-alpha.212](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.211...@empathyco/x-components@3.0.0-alpha.212) (2022-11-03)

### ⚠ BREAKING CHANGES

- **components:** `facets` are now optional in `Suggestion`.

### Features

- **components:** add filters to base-suggestions [(#758)](https://github.com/empathyco/x/pull/758)

## [3.0.0-alpha.211](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.210...@empathyco/x-components@3.0.0-alpha.211) (2022-11-02)

### Features

- **components:** insert promoteds in the grid using position
  [(#801)](https://github.com/empathyco/x/pull/801)

### Bug Fixes

- make promoted and banner position optional [(#817)](https://github.com/empathyco/x/pull/817)

## [3.0.0-alpha.210](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.209...@empathyco/x-components@3.0.0-alpha.210) (2022-11-02)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.209](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.208...@empathyco/x-components@3.0.0-alpha.209) (2022-11-02)

### Features

- **components:** Emit ColumnsNumberRendered event on BaseGrid
  [(#806)](https://github.com/empathyco/x/pull/806)

## [3.0.0-alpha.208](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.207...@empathyco/x-components@3.0.0-alpha.208) (2022-11-02)

### Features

- apply dynamic css mixin to sliding panel and column picker list buttons
  [(#815)](https://github.com/empathyco/x/pull/815)

## [3.0.0-alpha.207](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.206...@empathyco/x-components@3.0.0-alpha.207) (2022-11-02)

### Bug Fixes

- type empathize events and replace UserPressedEnter with UserPressedEnterKey

## [3.0.0-alpha.206](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.205...@empathyco/x-components@3.0.0-alpha.206) (2022-10-31)

### Features

- add `dynamic-props` mixin [(#798)](https://github.com/empathyco/x/pull/798)

## [3.0.0-alpha.205](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.204...@empathyco/x-components@3.0.0-alpha.205) (2022-10-31)

### Features

- add position on Banner and Promoted models [(#800)](https://github.com/empathyco/x/pull/800)

## [3.0.0-alpha.204](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.203...@empathyco/x-components@3.0.0-alpha.204) (2022-10-27)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.203](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.202...@empathyco/x-components@3.0.0-alpha.203) (2022-10-26)

### Features

- **design-system:** add zoom effect [(#799)](https://github.com/empathyco/x/pull/799)

## [3.0.0-alpha.202](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.201...@empathyco/x-components@3.0.0-alpha.202) (2022-10-24)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.201](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.200...@empathyco/x-components@3.0.0-alpha.201) (2022-10-21)

### ⚠ BREAKING CHANGES

- **tagging:** `tagging` property of `Taggable` and `queryTagging` property of `SearchResponse` are
  optional.

### Features

- **tagging:** make `tagging` and `queryTagging` optional
  [(#797)](https://github.com/empathyco/x/pull/797)

## [3.0.0-alpha.200](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.199...@empathyco/x-components@3.0.0-alpha.200) (2022-10-21)

### Continuous Integration

- export webpack config from `x-archetype-utils` [(#760)](https://github.com/empathyco/x/pull/760)

## [3.0.0-alpha.199](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.198...@empathyco/x-components@3.0.0-alpha.199) (2022-10-20)

### Documentation

- **functional:** titles refactor and change image source
  [(#790)](https://github.com/empathyco/x/pull/790)

## [3.0.0-alpha.198](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.197...@empathyco/x-components@3.0.0-alpha.198) (2022-10-20)

### Bug Fixes

- **related-tags:** use `query` instead of `tag` as `key` to ensure unique values
  [(#792)](https://github.com/empathyco/x/pull/792)

## [3.0.0-alpha.197](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.196...@empathyco/x-components@3.0.0-alpha.197) (2022-10-19)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.196](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.195...@empathyco/x-components@3.0.0-alpha.196) (2022-10-19)

### Features

- **search-box:** add `SearchInputPlaceholder` component
  [(#771)](https://github.com/empathyco/x/pull/771)

## [3.0.0-alpha.195](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.194...@empathyco/x-components@3.0.0-alpha.195) (2022-10-19)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.194](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.193...@empathyco/x-components@3.0.0-alpha.194) (2022-10-18)

### Features

- **components:** Add new origins to the `animateClipPath` animation factory.
  [(#777)](https://github.com/empathyco/x/pull/777)

## [3.0.0-alpha.193](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.192...@empathyco/x-components@3.0.0-alpha.193) (2022-10-17)

### Testing

- **next-queries:** next queries preview e2e tests [(#759)](https://github.com/empathyco/x/pull/759)

## [3.0.0-alpha.192](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.191...@empathyco/x-components@3.0.0-alpha.192) (2022-10-14)

### Continuous Integration

- update `runners` version [(#740)](https://github.com/empathyco/x/pull/740)

## [3.0.0-alpha.191](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.190...@empathyco/x-components@3.0.0-alpha.191) (2022-10-13)

### Features

- Add directional origins for translate animations [(#773)](https://github.com/empathyco/x/pull/773)
- Add search input hover events [(#772)](https://github.com/empathyco/x/pull/772)

## [3.0.0-alpha.190](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.189...@empathyco/x-components@3.0.0-alpha.190) (2022-10-12)

### Features

- hidde overflow-y in the sliding panel [(#768)](https://github.com/empathyco/x/pull/768)

## [3.0.0-alpha.189](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.188...@empathyco/x-components@3.0.0-alpha.189) (2022-10-06)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.188](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.187...@empathyco/x-components@3.0.0-alpha.188) (2022-10-05)

### Bug Fixes

- wait for the extra params to make the initial requests
  [(#754)](https://github.com/empathyco/x/pull/754)

## [3.0.0-alpha.187](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.186...@empathyco/x-components@3.0.0-alpha.187) (2022-10-05)

### Features

- **queries-preview:** Add `debounceTimeMs` to `QueryPreview` component.
  [(#752)](https://github.com/empathyco/x/pull/752)

## [3.0.0-alpha.186](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.185...@empathyco/x-components@3.0.0-alpha.186) (2022-10-03)

### Features

- make `adapter` configurable in the `home` view [(#750)](https://github.com/empathyco/x/pull/750)

## [3.0.0-alpha.185](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.184...@empathyco/x-components@3.0.0-alpha.185) (2022-09-30)

### Bug Fixes

- **base-modal:** add prop to allow the modal to move the focus to an element within it on open

## [3.0.0-alpha.184](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.183...@empathyco/x-components@3.0.0-alpha.184) (2022-09-30)

### Continuous Integration

- silent jest and eslint warnings [(#749)](https://github.com/empathyco/x/pull/749)

## [3.0.0-alpha.183](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.182...@empathyco/x-components@3.0.0-alpha.183) (2022-09-29)

### Features

- **next-queries:** add `origin` to `next queries preview`
  [(#746)](https://github.com/empathyco/x/pull/746)

## [3.0.0-alpha.182](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.181...@empathyco/x-components@3.0.0-alpha.182) (2022-09-27)

### Bug Fixes

- **components:** restore scroll on `BaseModal` [(#736)](https://github.com/empathyco/x/pull/736)

### Documentation

- add `queriesPreview` to archetype integration [(#735)](https://github.com/empathyco/x/pull/735)

## [3.0.0-alpha.181](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.180...@empathyco/x-components@3.0.0-alpha.181) (2022-09-27)

### Features

- **queries-preview:** add `origin` to `QueryPreview` component
  [(#737)](https://github.com/empathyco/x/pull/737)

## [3.0.0-alpha.180](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.179...@empathyco/x-components@3.0.0-alpha.180) (2022-09-27)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.179](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.178...@empathyco/x-components@3.0.0-alpha.179) (2022-09-27)

### Features

- add `vue devtools` plugin to ease `XEvents` and `wiring` visualization
  [(#215)](https://github.com/empathyco/x/pull/215)

## [3.0.0-alpha.178](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.177...@empathyco/x-components@3.0.0-alpha.178) (2022-09-21)

### Features

- Improve `tailwindcss` types [(#730)](https://github.com/empathyco/x/pull/730)

## [3.0.0-alpha.177](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.176...@empathyco/x-components@3.0.0-alpha.177) (2022-09-21)

### Features

- **search-input:** prevent `<` or `>` input [(#433)](https://github.com/empathyco/x/pull/433)

## [3.0.0-alpha.176](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.175...@empathyco/x-components@3.0.0-alpha.176) (2022-09-20)

### Features

- Improve tailwindcss types. [(#725)](https://github.com/empathyco/x/pull/725)

## [3.0.0-alpha.175](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.174...@empathyco/x-components@3.0.0-alpha.175) (2022-09-20)

### Features

- **facets:** remove filters on new query [(#717)](https://github.com/empathyco/x/pull/717)

## [3.0.0-alpha.174](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.173...@empathyco/x-components@3.0.0-alpha.174) (2022-09-19)

### Features

- **design-system:** generate old design system tokens with tailwind values
  [(#675)](https://github.com/empathyco/x/pull/675)

## [3.0.0-alpha.173](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.172...@empathyco/x-components@3.0.0-alpha.173) (2022-09-16)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.172](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.171...@empathyco/x-components@3.0.0-alpha.172) (2022-09-13)

### Features

- **next-queries:** add `concatWhenNoMoreItems` prop
  [(#705)](https://github.com/empathyco/x/pull/705)

## [3.0.0-alpha.171](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.170...@empathyco/x-components@3.0.0-alpha.171) (2022-09-13)

### Features

- add `uiLang` parameter [(#714)](https://github.com/empathyco/x/pull/714)

## [3.0.0-alpha.170](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.169...@empathyco/x-components@3.0.0-alpha.170) (2022-09-09)

### Features

- **components:** add disable animation mixin [(#703)](https://github.com/empathyco/x/pull/703)
- disable `@typescript-eslint/no-extra-parens` rule
  [(#715)](https://github.com/empathyco/x/pull/715)

## [3.0.0-alpha.169](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.168...@empathyco/x-components@3.0.0-alpha.169) (2022-09-08)

### Features

- **search:** add `updateResult` mutation [(#706)](https://github.com/empathyco/x/pull/706)

## [3.0.0-alpha.168](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.167...@empathyco/x-components@3.0.0-alpha.168) (2022-09-07)

### Bug Fixes

- **components:** Fix the error on console in `BaseResultImage` with `CrossFade` Animation.
  [(#688)](https://github.com/empathyco/x/pull/688)

## [3.0.0-alpha.167](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.166...@empathyco/x-components@3.0.0-alpha.167) (2022-09-06)

### Features

- **queries-preview:** add query preview component [(#699)](https://github.com/empathyco/x/pull/699)

## [3.0.0-alpha.166](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.165...@empathyco/x-components@3.0.0-alpha.166) (2022-09-02)

### Bug Fixes

- Make `Home` grid next queries use grid data rather than state data.
  [(#687)](https://github.com/empathyco/x/pull/687)

## [3.0.0-alpha.165](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.164...@empathyco/x-components@3.0.0-alpha.165) (2022-08-31)

### Build System

- **dependencies:** fix Vue & Vuex versions [(#686)](https://github.com/empathyco/x/pull/686)

## [3.0.0-alpha.164](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.163...@empathyco/x-components@3.0.0-alpha.164) (2022-08-30)

### Features

- **queries-preview:** add wiring and actions [(#677)](https://github.com/empathyco/x/pull/677)

## [3.0.0-alpha.163](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.162...@empathyco/x-components@3.0.0-alpha.163) (2022-08-29)

### Documentation

- **functional:** add my history ui and related docs
  [(#685)](https://github.com/empathyco/x/pull/685)

## [3.0.0-alpha.162](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.161...@empathyco/x-components@3.0.0-alpha.162) (2022-08-29)

### Build System

- Support SSR with createInjectorSSR for styles. [(#674)](https://github.com/empathyco/x/pull/674)

## [3.0.0-alpha.161](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.160...@empathyco/x-components@3.0.0-alpha.161) (2022-08-26)

### Features

- **components:** variants auto selection [(#679)](https://github.com/empathyco/x/pull/679)

## [3.0.0-alpha.160](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.159...@empathyco/x-components@3.0.0-alpha.160) (2022-08-25)

### Features

- **components:** merge variant with the result [(#667)](https://github.com/empathyco/x/pull/667)

## [3.0.0-alpha.159](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.158...@empathyco/x-components@3.0.0-alpha.159) (2022-08-24)

### Documentation

- update functional docs callout formatting [(#671)](https://github.com/empathyco/x/pull/671)

## [3.0.0-alpha.158](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.156...@empathyco/x-components@3.0.0-alpha.158) (2022-08-24)

### Features

- **adapter:** disable cancel http client [(#658)](https://github.com/empathyco/x/pull/658)
- **queries-preview:** create `queriesPreview` module
  [(#670)](https://github.com/empathyco/x/pull/670)

### Bug Fixes

- conflict version [(#673)](https://github.com/empathyco/x/pull/673)

## [3.0.0-alpha.157](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.156...@empathyco/x-components@3.0.0-alpha.157) (2022-08-24)

### Features

- **queries-preview:** create `queriesPreview` module
  [(#670)](https://github.com/empathyco/x/pull/670)

## [3.0.0-alpha.156](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.155...@empathyco/x-components@3.0.0-alpha.156) (2022-08-19)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.155](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.154...@empathyco/x-components@3.0.0-alpha.155) (2022-08-18)

### Features

- **design-system:** add `tailwindcss` to `x-components` and configure it to use `x-tailwindcss`
  [(#655)](https://github.com/empathyco/x/pull/655)

## [3.0.0-alpha.154](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.153...@empathyco/x-components@3.0.0-alpha.154) (2022-08-12)

### Features

- add `queriesPreview` option to snippet config [(#654)](https://github.com/empathyco/x/pull/654)

## [3.0.0-alpha.153](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.152...@empathyco/x-components@3.0.0-alpha.153) (2022-08-10)

### Features

- **next-queries:** add `maxItemsToRender` prop to `NextQueryPreview` component
  [(#646)](https://github.com/empathyco/x/pull/646)

## [3.0.0-alpha.152](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.151...@empathyco/x-components@3.0.0-alpha.152) (2022-08-10)

### ⚠ BREAKING CHANGES

- **result:** `Result` model properties are optional, except `id`, `modelName` and `tagging`.

### Features

- **result:** add `variants` support [(#644)](https://github.com/empathyco/x/pull/644)

## [3.0.0-alpha.151](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.150...@empathyco/x-components@3.0.0-alpha.151) (2022-08-09)

### Documentation

- clarify how to subscribe to any `XEvent` [(#645)](https://github.com/empathyco/x/pull/645)

## [3.0.0-alpha.150](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.149...@empathyco/x-components@3.0.0-alpha.150) (2022-08-08)

### Features

- **components:** make `BaseIdModalOpen` rendering configurable
  [(#637)](https://github.com/empathyco/x/pull/637)

## [3.0.0-alpha.149](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.148...@empathyco/x-components@3.0.0-alpha.149) (2022-08-08)

### Bug Fixes

- **facets:** fix `SingleSelectModifier` handling for selecting hierar…
  [(#643)](https://github.com/empathyco/x/pull/643)

## [3.0.0-alpha.148](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.147...@empathyco/x-components@3.0.0-alpha.148) (2022-08-04)

### Features

- **next-queries:** add next query preview component
  [(#631)](https://github.com/empathyco/x/pull/631)

## [3.0.0-alpha.147](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.146...@empathyco/x-components@3.0.0-alpha.147) (2022-08-03)

### ⚠ BREAKING CHANGES

- **facets:** Removed the `setFilter`mutation from `facets` X-Module. Use `mutateFilter` instead.
- **facets:** Modified the `HierarchicalFilter.children` Model type. Now it is an
  `Array<HierarchicalFilter>` instead of an array of ids.

### Features

- **facets:** Move filters flattening from `x-adapter-platform` to `x-components`.
  [(#626)](https://github.com/empathyco/x/pull/626)

## [3.0.0-alpha.146](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.145...@empathyco/x-components@3.0.0-alpha.146) (2022-08-03)

### Documentation

- bring functional docs from eDocs project [(#630)](https://github.com/empathyco/x/pull/630)

## [3.0.0-alpha.145](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.144...@empathyco/x-components@3.0.0-alpha.145) (2022-08-01)

### Documentation

- update archetype integration and x-adapter docs [(#628)](https://github.com/empathyco/x/pull/628)

## [3.0.0-alpha.144](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.143...@empathyco/x-components@3.0.0-alpha.144) (2022-08-01)

### ⚠ BREAKING CHANGES

- `--x-number-aspect-ratio-picture` is now inverted. Previously value of 2 meant that it was twice
  taller than wider. Now it means twice wider than taller.

- feat(design-system): Re-do aspect ratio logic with modern `aspect-ratio` property

## [3.0.0-alpha.143](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.142...@empathyco/x-components@3.0.0-alpha.143) (2022-08-01)

### Features

- **components:** make `BaseIdModalClose` rendering configurable
  [(#627)](https://github.com/empathyco/x/pull/627)

## [3.0.0-alpha.142](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.141...@empathyco/x-components@3.0.0-alpha.142) (2022-07-29)

### Features

- Remove vue filters [(#635)](https://github.com/empathyco/x/pull/635)

## [3.0.0-alpha.141](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.140...@empathyco/x-components@3.0.0-alpha.141) (2022-07-28)

### Features

- **next-queries:** add next query preview logic [(#611)](https://github.com/empathyco/x/pull/611)

## [3.0.0-alpha.140](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.139...@empathyco/x-components@3.0.0-alpha.140) (2022-07-26)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.139](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.138...@empathyco/x-components@3.0.0-alpha.139) (2022-07-22)

### Features

- **history-queries:** disable `MyHistory` without confirmation when the `history queries` list is
  empty [(#615)](https://github.com/empathyco/x/pull/615)

## [3.0.0-alpha.138](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.137...@empathyco/x-components@3.0.0-alpha.138) (2022-07-22)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.137](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.136...@empathyco/x-components@3.0.0-alpha.137) (2022-07-21)

### Features

- **components:** add `MainModal`, `OpenMainModal` and `CloseMainModal`
  [(#609)](https://github.com/empathyco/x/pull/609)

## [3.0.0-alpha.136](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.135...@empathyco/x-components@3.0.0-alpha.136) (2022-07-21)

### Bug Fixes

- `pointer-events` affecting scrolling in sliding panel in `SingleColumnLayout` aside
  [(#614)](https://github.com/empathyco/x/pull/614)

## [3.0.0-alpha.135](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.134...@empathyco/x-components@3.0.0-alpha.135) (2022-07-21)

### Testing

- **e2e:** search modal re-opens properly after being closed
  [(#613)](https://github.com/empathyco/x/pull/613)

## [3.0.0-alpha.134](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.133...@empathyco/x-components@3.0.0-alpha.134) (2022-07-20)

### Bug Fixes

- **components:** now properly checks if it has content
  [(#612)](https://github.com/empathyco/x/pull/612)

## [3.0.0-alpha.133](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.132...@empathyco/x-components@3.0.0-alpha.133) (2022-07-15)

### Bug Fixes

- **components:** Add option to extend transitions with listeners and attributes
  [(#600)](https://github.com/empathyco/x/pull/600)

## [3.0.0-alpha.132](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.131...@empathyco/x-components@3.0.0-alpha.132) (2022-07-14)

### Features

- **history-queries:** add `UserClickedDismissDisableHistoryQueries` event

## [3.0.0-alpha.131](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.130...@empathyco/x-components@3.0.0-alpha.131) (2022-07-13)

### Features

- **history-queries:** add `HistoryQueriesSwitch` component
  [(#593)](https://github.com/empathyco/x/pull/593)

## [3.0.0-alpha.130](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.129...@empathyco/x-components@3.0.0-alpha.130) (2022-07-12)

### Features

- Move `XAPI` from `window.X` to `window.InterfaceX`
  [(#599)](https://github.com/empathyco/x/pull/599)

## [3.0.0-alpha.129](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.128...@empathyco/x-components@3.0.0-alpha.129) (2022-07-11)

### Features

- **history-queries:** bind `formatTime` to `suggestion-content` slot
  [(#598)](https://github.com/empathyco/x/pull/598)

## [3.0.0-alpha.128](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.127...@empathyco/x-components@3.0.0-alpha.128) (2022-07-11)

### Documentation

- Add module type to integration script docs [(#592)](https://github.com/empathyco/x/pull/592)

## [3.0.0-alpha.127](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.126...@empathyco/x-components@3.0.0-alpha.127) (2022-07-11)

### Features

- **components:** add new slot `extra-aside` to `SingleColumnLayout` and
  `FixedHeaderAndAsidesLayout` [(#591)](https://github.com/empathyco/x/pull/591)

## [3.0.0-alpha.126](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.125...@empathyco/x-components@3.0.0-alpha.126) (2022-07-07)

### Features

- **x-plugin:** add full `history queries` list to `alias API`

## [3.0.0-alpha.125](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.124...@empathyco/x-components@3.0.0-alpha.125) (2022-07-07)

### Features

- add settings icon [(#589)](https://github.com/empathyco/x/pull/589)

## [3.0.0-alpha.124](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.123...@empathyco/x-components@3.0.0-alpha.124) (2022-07-06)

### Features

- add 'my_history' as feature location [(#587)](https://github.com/empathyco/x/pull/587)
- **components:** add `BaseSwitch` component [(#586)](https://github.com/empathyco/x/pull/586)

### Testing

- fix exclude-filters e2e test [(#588)](https://github.com/empathyco/x/pull/588)

## [3.0.0-alpha.123](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.122...@empathyco/x-components@3.0.0-alpha.123) (2022-07-04)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.122](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.121...@empathyco/x-components@3.0.0-alpha.122) (2022-06-30)

### Code Refactoring

- Move aside to its own component in Home view. [(#581)](https://github.com/empathyco/x/pull/581)

## [3.0.0-alpha.121](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.120...@empathyco/x-components@3.0.0-alpha.121) (2022-06-29)

### Features

- **components:** add grid-4-col and update light-bulb icons
  [(#579)](https://github.com/empathyco/x/pull/579)

## [3.0.0-alpha.120](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.119...@empathyco/x-components@3.0.0-alpha.120) (2022-06-27)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.119](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.118...@empathyco/x-components@3.0.0-alpha.119) (2022-06-24)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.118](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.117...@empathyco/x-components@3.0.0-alpha.118) (2022-06-23)

### Features

- **identifier-results:** add maxItemsToRender prop
  [(#576)](https://github.com/empathyco/x/pull/576)

## [3.0.0-alpha.117](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.116...@empathyco/x-components@3.0.0-alpha.117) (2022-06-23)

### Features

- **components:** add radio button icons [(#574)](https://github.com/empathyco/x/pull/574)

### Bug Fixes

- Remove `@empathyco/x-platform-adapter` dependency from library code.
  [(#575)](https://github.com/empathyco/x/pull/575)

## [3.0.0-alpha.116](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.115...@empathyco/x-components@3.0.0-alpha.116) (2022-06-22)

### Features

- **facets:** Add slot by Facet ModelName. [(#572)](https://github.com/empathyco/x/pull/572)

## [3.0.0-alpha.115](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.114...@empathyco/x-components@3.0.0-alpha.115) (2022-06-21)

### Features

- remove old adapter package and use the new one [(#568)](https://github.com/empathyco/x/pull/568)

## [3.0.0-alpha.114](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.113...@empathyco/x-components@3.0.0-alpha.114) (2022-06-21)

### Build System

- sync duplicated dependencies [(#567)](https://github.com/empathyco/x/pull/567)

## [3.0.0-alpha.113](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.112...@empathyco/x-components@3.0.0-alpha.113) (2022-06-20)

### Features

- **adapter:** use the `x-adapter-platform` [(#565)](https://github.com/empathyco/x/pull/565)

## [3.0.0-alpha.112](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.111...@empathyco/x-components@3.0.0-alpha.112) (2022-06-17)

### Documentation

- fix broken link in x-components readme [(#561)](https://github.com/empathyco/x/pull/561)

## [3.0.0-alpha.111](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.110...@empathyco/x-components@3.0.0-alpha.111) (2022-06-16)

### Features

- **x-plugin:** add results to `Alias API` [(#545)](https://github.com/empathyco/x/pull/545)

## [3.0.0-alpha.110](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.109...@empathyco/x-components@3.0.0-alpha.110) (2022-06-16)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.109](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.108...@empathyco/x-components@3.0.0-alpha.109) (2022-06-13)

### Documentation

- add local storage info and data purposes

## [3.0.0-alpha.108](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.107...@empathyco/x-components@3.0.0-alpha.108) (2022-06-09)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.107](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.106...@empathyco/x-components@3.0.0-alpha.107) (2022-06-09)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.106](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.105...@empathyco/x-components@3.0.0-alpha.106) (2022-06-09)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.105](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.104...@empathyco/x-components@3.0.0-alpha.105) (2022-06-08)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.104](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.103...@empathyco/x-components@3.0.0-alpha.104) (2022-06-07)

### Features

- fix rest of warnings for accessibility

## [3.0.0-alpha.103](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.102...@empathyco/x-components@3.0.0-alpha.103) (2022-05-25)

### Documentation

- fix links and minor typos

## [3.0.0-alpha.102](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.101...@empathyco/x-components@3.0.0-alpha.102) (2022-05-19)

### Features

- **facets:** add `PreselectedFilters` component

## [3.0.0-alpha.101](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.100...@empathyco/x-components@3.0.0-alpha.101) (2022-05-18)

### Bug Fixes

- **related-tags:** related tags are now kept when navigating back

## [3.0.0-alpha.100](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.99...@empathyco/x-components@3.0.0-alpha.100) (2022-05-17)

### Bug Fixes

- **build:** supports being built on Windows based machines

## [3.0.0-alpha.99](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.98...@empathyco/x-components@3.0.0-alpha.99) (2022-05-17)

### Bug Fixes

- **url:** `query` is required to store params in the `URL`

## [3.0.0-alpha.98](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.97...@empathyco/x-components@3.0.0-alpha.98) (2022-05-13)

### Features

- fix form label warnings

## [3.0.0-alpha.97](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.96...@empathyco/x-components@3.0.0-alpha.97) (2022-05-13)

### Features

- move `response` types to `@empathyco/x-types`

## [3.0.0-alpha.96](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.95...@empathyco/x-components@3.0.0-alpha.96) (2022-05-13)

### ⚠ BREAKING CHANGES

- **facets:** Renamed method `registerFilterModifier` in `FilterEntityFactory` to
  `registerModifierByFacetId`.
- **facets:** Changed `modifiers` parameter of `registerFilterModifier` in `FilterEntityFactory`
  from single array in favour of rest parameters.

### Features

- **facets:** add `registerModifierByFilterModelName`

## [3.0.0-alpha.95](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.94...@empathyco/x-components@3.0.0-alpha.95) (2022-05-11)

### ⚠ BREAKING CHANGES

- Request types moved to `x-types` package. Change the imports from `x-adapter` to `x-type`.
- Removed `TaggingInfo` type. Use `TaggingRequest` from `@empathyco/x-types` instead.

### Features

- move `Request` types to `x-types` package

## [3.0.0-alpha.94](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.93...@empathyco/x-components@3.0.0-alpha.94) (2022-05-09)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.93](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.92...@empathyco/x-components@3.0.0-alpha.93) (2022-05-06)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.92](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.91...@empathyco/x-components@3.0.0-alpha.92) (2022-05-05)

### Features

- **facets:** expose `clickEvents` as `prop` in filters components using `RenderlessFilter`

## [3.0.0-alpha.91](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.90...@empathyco/x-components@3.0.0-alpha.91) (2022-05-04)

### Features

- add `alt-text` accessibility

## [3.0.0-alpha.90](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.89...@empathyco/x-components@3.0.0-alpha.90) (2022-05-03)

### Features

- **history-queries:** add `MyHistory` component

## [3.0.0-alpha.89](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.88...@empathyco/x-components@3.0.0-alpha.89) (2022-04-29)

### Build System

- **deps:** update eslint-plugin dependencies [(#447)](https://github.com/empathyco/x/pull/447)

## [3.0.0-alpha.88](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.87...@empathyco/x-components@3.0.0-alpha.88) (2022-04-29)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.86](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.85...@empathyco/x-components@3.0.0-alpha.86) (2022-04-19)

### Features

- **eslint:** add `vuejs-accessibility` plugin [(#427)](https://github.com/empathyco/x/pull/427)

## [3.0.0-alpha.85](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.84...@empathyco/x-components@3.0.0-alpha.85) (2022-04-14)

### Features

- extract SessionService to x-utils package

## [3.0.0-alpha.84](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.83...@empathyco/x-components@3.0.0-alpha.84) (2022-04-07)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.83](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.82...@empathyco/x-components@3.0.0-alpha.83) (2022-04-07)

### Code Refactoring

- move DeepPartial type from x-components to x-utils

### Documentation

- activating ready live-examples

## [3.0.0-alpha.82](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.81...@empathyco/x-components@3.0.0-alpha.82) (2022-04-05)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.81](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.80...@empathyco/x-components@3.0.0-alpha.81) (2022-04-05)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.80](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.79...@empathyco/x-components@3.0.0-alpha.80) (2022-04-04)

### Testing

- Restructure files for non global step def [(#382)](https://github.com/empathyco/x/pull/382)

## [3.0.0-alpha.79](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.78...@empathyco/x-components@3.0.0-alpha.79) (2022-04-04)

### Build System

- **deps:** Upgrade Cypress and Vue Cli plugins versions.
  [(#399)](https://github.com/empathyco/x/pull/399)

## [3.0.0-alpha.78](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.77...@empathyco/x-components@3.0.0-alpha.78) (2022-04-04)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.77](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.76...@empathyco/x-components@3.0.0-alpha.77) (2022-04-01)

### Code Refactoring

- move `object` utils from `x-components` to `x-utils`

## [3.0.0-alpha.76](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.75...@empathyco/x-components@3.0.0-alpha.76) (2022-04-01)

### Code Refactoring

- move `NonPrimitive`, `Primitive` and `AnyFunction` types from `x-components` to `x-utils`

### Documentation

- fix links and update repository information and development setup for `x-components`
  [(#394)](https://github.com/empathyco/x/pull/394)

## [3.0.0-alpha.75](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.74...@empathyco/x-components@3.0.0-alpha.75) (2022-03-31)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.74](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.73...@empathyco/x-components@3.0.0-alpha.74) (2022-03-31)

### Bug Fixes

- **base-currency:** format preference goes prop to be injected by default

## [3.0.0-alpha.73](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.72...@empathyco/x-components@3.0.0-alpha.73) (2022-03-24)

### Features

- **history-queries:** add toggle to enable/disable the history queries

## [3.0.0-alpha.72](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.71...@empathyco/x-components@3.0.0-alpha.72) (2022-03-23)

### Documentation

- Update documentation to differentiate integration from development

## [3.0.0-alpha.71](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.70...@empathyco/x-components@3.0.0-alpha.71) (2022-03-23)

### Testing

- E2E tests maintenance [(#371)](https://github.com/empathyco/x/pull/371)

## [3.0.0-alpha.70](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.69...@empathyco/x-components@3.0.0-alpha.70) (2022-03-21)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.69](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.68...@empathyco/x-components@3.0.0-alpha.69) (2022-03-18)

### Features

- **history-queries:** add `my-history` component

## [3.0.0-alpha.68](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.67...@empathyco/x-components@3.0.0-alpha.68) (2022-03-16)

### Bug Fixes

- prevent node-ipc vulnerability

## [3.0.0-alpha.67](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.66...@empathyco/x-components@3.0.0-alpha.67) (2022-03-11)

### ⚠ BREAKING CHANGES

- Remove `selected` and `previous` logic from related tags.
- Remove `EmpathyRequestRelatedTagsQueryMapper`.

### Features

- move related tags concatenation logic [(#365)](https://github.com/empathyco/x/pull/365)

## [3.0.0-alpha.66](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.65...@empathyco/x-components@3.0.0-alpha.66) (2022-03-09)

### Testing

- **e2e:** Fix E2E tests in Firefox

## [3.0.0-alpha.65](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.64...@empathyco/x-components@3.0.0-alpha.65) (2022-03-08)

### Features

- update typescript

## [3.0.0-alpha.64](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.63...@empathyco/x-components@3.0.0-alpha.64) (2022-03-03)

### Features

- Add `setSnippetConfig` function to the `X` API

## [3.0.0-alpha.63](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.62...@empathyco/x-components@3.0.0-alpha.63) (2022-03-01)

### Build System

- remove `polyfills` support

## [3.0.0-alpha.62](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.61...@empathyco/x-components@3.0.0-alpha.62) (2022-02-28)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.61](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.60...@empathyco/x-components@3.0.0-alpha.61) (2022-02-24)

### Testing

- **e2e:** add `extra-params` scenarios

## [3.0.0-alpha.60](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.59...@empathyco/x-components@3.0.0-alpha.60) (2022-02-24)

### Features

- **facets:** add facets mixin to share logic between components

### Testing

- **e2e:** fix `tagging` using the `mockedAdapter` and replacing `fetch` for `sendBeacon`

## [3.0.0-alpha.59](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.58...@empathyco/x-components@3.0.0-alpha.59) (2022-02-17)

### Features

- **design-system:** add `curated` modifier to the `suggestion`

## [3.0.0-alpha.58](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.57...@empathyco/x-components@3.0.0-alpha.58) (2022-02-16)

### Features

- **scroll:** add scroll data state to the alias API

## [3.0.0-alpha.57](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.56...@empathyco/x-components@3.0.0-alpha.57) (2022-02-16)

### Bug Fixes

- **build:** Fix build side effects to include css.

## [3.0.0-alpha.56](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.55...@empathyco/x-components@3.0.0-alpha.56) (2022-02-15)

### Bug Fixes

- **decorators:** pending `debounced` execution is cancelled when the component is destroyed

## [3.0.0-alpha.55](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.54...@empathyco/x-components@3.0.0-alpha.55) (2022-02-10)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.54](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.53...@empathyco/x-components@3.0.0-alpha.54) (2022-02-09)

### ⚠ BREAKING CHANGES

- **components:** Removed `CollapseFromTop` Animation. Use `animateScale()` instead.
- **components:** Removed `TranslateFromLeft` and `TranslateFromRight` components. Use
  `animateTranslate('left')` and `animateTranslate('right')` instead.

### Features

- **components:** created abstract factory for animations

## [3.0.0-alpha.53](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.52...@empathyco/x-components@3.0.0-alpha.53) (2022-02-08)

### Continuous Integration

- update rollup and plugins version

## [3.0.0-alpha.52](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.51...@empathyco/x-components@3.0.0-alpha.52) (2022-02-07)

### Documentation

- fix multiple broken links

## [3.0.0-alpha.51](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.50...@empathyco/x-components@3.0.0-alpha.51) (2022-02-04)

### Code Refactoring

- change to the top of the wiring the ParamsLoadedFromUrl event.

## [3.0.0-alpha.50](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.49...@empathyco/x-components@3.0.0-alpha.50) (2022-02-04)

### Features

- **design-system:** change curated tag toke values to reuse default ones.

## [3.0.0-alpha.49](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.48...@empathyco/x-components@3.0.0-alpha.49) (2022-02-03)

### Continuous Integration

- release alpha version on every push to main branch

## [3.0.0-alpha.48](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.47...@empathyco/x-components@3.0.0-alpha.48) (2022-02-02)

### ⚠ BREAKING CHANGES

- **facets:** Remove `BaseFilter` component. Use `RenderlessFilter`instead.

### Features

- **design-system:** add curated tags [(#311)](https://github.com/empathyco/x/pull/311)
- **extra-params:** add option to add more extra params using prop in `SnippetConfigExtraParams`
  component
- **facets:** change `NumberRangeFilter` component to use `RenderlessFilter` instead of `BaseFilter`
- update polyfills plugin to work with chunks

## [3.0.0-alpha.47](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.46...@empathyco/x-components@3.0.0-alpha.47) (2022-02-01)

### Features

- **components:** Add `payload` and `metadata` to the `SnippetCallbackExecuted` event payload
- **components:** Allow `BaseResultAddToCart` to use external listeners.
- track PDP add to cart [(#306)](https://github.com/empathyco/x/pull/306)

## [3.0.0-alpha.46](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.45...@empathyco/x-components@3.0.0-alpha.46) (2022-01-24)

### Bug Fixes

- **components:** Fix BaseGrid auto columns CSS. [(#308)](https://github.com/empathyco/x/pull/308)

### Build System

- Fix colors.js dependency issue

## [3.0.0-alpha.45](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.44...@empathyco/x-components@3.0.0-alpha.45) (2022-01-20)

### Features

- **design-system:** allow suggestions to be tags

### Bug Fixes

- **url:** default `extra params` are now properly restored

### Testing

- **e2e:** make `tagging` tests wait for redirection before assertion

## [3.0.0-alpha.44](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.43...@empathyco/x-components@3.0.0-alpha.44) (2022-01-14)

### ⚠ BREAKING CHANGES

- **components:** `SlidingPanel` buttons do not have the round variant set by default.

### Features

- **components:** add `buttonClass` prop in `SlidingPanel`
- **components:** add Result Rating component

### Bug Fixes

- **design-system:** Fix some style issues and add two missing utilities
- **identifier-results:** Fix default plugin config.
  [(#296)](https://github.com/empathyco/x/pull/296)
-

## [3.0.0-alpha.43](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.42...@empathyco/x-components@3.0.0-alpha.43) (2022-01-06)

### Features

- **components:** Add icons for Arrows UP DOWN LEFT and RIGHT.
  [(#295)](https://github.com/empathyco/x/pull/295)

## [3.0.0-alpha.42](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.41...@empathyco/x-components@3.0.0-alpha.42) (2022-01-05)

### Features

- **design-system:** Add more utility classes.
- **design-system:** Add `Grid2RowsIcon` component

### Bug Fixes

- **design-system:** Fix grid styles to stretch cells.
- **design-system:** Fix Sliding Panel styles.

## [3.0.0-alpha.41](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.40...@empathyco/x-components@3.0.0-alpha.41) (2022-01-03)

### Features

- **next-queries:** add isCurated property

## [3.0.0-alpha.40](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.39...@empathyco/x-components@3.0.0-alpha.40) (2021-12-29)

### Features

- **tagging:** add new `SearchTaggingReceived` event for tracking the query

### Bug Fixes

- **components:** `SlidingPanel` can now disable the resetting scroll …
  [(#286)](https://github.com/empathyco/x/pull/286)
- **related-tags:** clear selected related tags when user changes extra params
- **search:** batch state reset calls after search.request parameter changes
  [(#283)](https://github.com/empathyco/x/pull/283)
- **search:** next page is now requested if it has less than the page size results.
  [(#284)](https://github.com/empathyco/x/pull/284)

## [3.0.0-alpha.39](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.38...@empathyco/x-components@3.0.0-alpha.39) (2021-12-22)

### Features

- **design-system:** Add bottom variant to `x-shadow` utility in the Design System

### Bug Fixes

- Fix multiple issues.

## [3.0.0-alpha.38](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.37...@empathyco/x-components@3.0.0-alpha.38) (2021-12-22)

### Features

- **design-system:** Add new color tokens. [(#275)](https://github.com/empathyco/x/pull/275)
- **test:** refactor base tests to cypress component testing
- **x-plugin:** Add selected sort [(#274)](https://github.com/empathyco/x/pull/274)

### Bug Fixes

- **components:** Fix infinite scroll not working in Android Chrome.
  [(#277)](https://github.com/empathyco/x/pull/277)
- **search:** rows and start parameters calculations moved from getter to action to avoid multiple
  requests

## [3.0.0-alpha.37](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.36...@empathyco/x-components@3.0.0-alpha.37) (2021-12-15)

### Features

- **scroll:** remove animations on pending element to scroll
- **tagging:** Include 'location' parameter to track result events.
  [(#273)](https://github.com/empathyco/x/pull/273)
-

## [3.0.0-alpha.36](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.35...@empathyco/x-components@3.0.0-alpha.36) (2021-12-15)

### Build System

- Load PostCSS plugins from rollup build [(#272)](https://github.com/empathyco/x/pull/272)

### Testing

- **e2e:** fix tagging tests [(#270)](https://github.com/empathyco/x/pull/270)

## [3.0.0-alpha.35](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.34...@empathyco/x-components@3.0.0-alpha.35) (2021-12-14)

### Features

- **components:** fix 'BaseRating' component styles
  [(#264)](https://github.com/empathyco/x/pull/264)
- **plugin:** move alias creation from created hook to beforeCreated
- **tagging:** track pending query
- **tagging:** track result click events
- **tagging:** track the 'UserClickedResultAddToCart' event in tagging
- **wiring:** add force and cancel support to debounce and throttle wire operators. Update rxjs to

### Bug Fixes

- **components:** Export missing layout components
- **extra-params:** prevent callbacks option from the snippet config to be taken as extra params

### Testing

- **e2e:** make url tests intercept tracking and wait for each request

### Documentation

- add guide for integrating X Interface into an existing website
- change h1 to be h2

## [3.0.0-alpha.34](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.33...@empathyco/x-components@3.0.0-alpha.34) (2021-12-03)

### Features

- **search-box:** focus search input after clicking clear search button
- **tagging:** move `origin` from `request.getter` to `fetchAndSave.action`
- **url:** set `origin` when navigating

### Documentation

- Remove docusaurus headers

## [3.0.0-alpha.33](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.32...@empathyco/x-components@3.0.0-alpha.33) (2021-11-30)

### Features

- **related-tags:** add `isCurated` property to related tags
- **search:** change `saveOriginWire` wire from `SelectedRelatedTagsChanged` to
  `UserPickedARelatedTag` [(#254)](https://github.com/empathyco/x/pull/254)
- **utils:** now `origin` only requires the `feature`

## [3.0.0-alpha.32](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.31...@empathyco/x-components@3.0.0-alpha.32) (2021-11-29)

### ⚠ BREAKING CHANGES

- **storage-service:** `StorageService` has been renamed to `BrowserStorageService`.

### Features

- **components:** Add `GlobalXBus `component
- **components:** add `SnippetCallbacks` component
- **storage-service:** Rename `StorageService` to `BrowserStorageService`

### Bug Fixes

- **tagging:** now removing the session clears the session from the storage

### Build System

- update jest dependencies

## [3.0.0-alpha.31](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.30...@empathyco/x-components@3.0.0-alpha.31) (2021-11-25)

### Features

- **design-system:** add identifier result in suggestion component
- **identifier-results:** add extra params in the x-module
- **tagging:** `track` query
- **tagging:** add feature hardcoded values

### Testing

- **e2e:** Reduce command timeout and number of retries.
- **e2e:** reorder mocked responses

### Documentation

- add new static docs.

## [3.0.0-alpha.30](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.29...@empathyco/x-components@3.0.0-alpha.30) (2021-11-22)

### Features

- **components:** add `LocationProvider` component
- **components:** replace `BaseEventButton` for a html button
- **identifier-results:** add query origin in the identifier results search
- remove x installer from router hooks
- **scroll:** add `MainScroll` and `MainScrollItem`
- **scroll:** add empty `XModule`
- **scroll:** ignore first visible element when it is also the first one observed
- **scroll:** move scroll related components to the `Scroll` `XModule`
- **search:** add `SearchTaggingChanged` emitter and save coming `queryTagging` from the search
  response
- **tagging:** add `SessionService`
- update `Tagging` model
- **x-plugin:** Make XPluginMixin to add the component `location` to metadata.

### Bug Fixes

- **identifier-results:** provide resultClickExtraEvents so BaseResultLink emits them when clicked

### Testing

- **e2e:** add typing to e2e stubs
- **e2e:** complete filter tests scenarios
- **e2e:** fix invalid identifier results data test selector
- **e2e:** remove sliding panel test wait
- **search:** redefine old search tests

## [3.0.0-alpha.29](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.28...@empathyco/x-components@3.0.0-alpha.29) (2021-11-09)

### Features

- **url:** set sort values and read them from the url

## [3.0.0-alpha.28](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.27...@empathyco/x-components@3.0.0-alpha.28) (2021-11-03)

### Features

- **components:** add new fixed header and aside layout
- **design-system:** Add Design System Message and Progress Bar components
- **extra-params:** Add support to `UrlHandler` for handling `extra-params`
- **search:** add Redirection and AutoProgressBar components
- update x-components browserslist
- **x-plugin:** Update Alias API with `noResults`, `redirections` and `partialResults`

### Bug Fixes

- **facets:** now service uses only the first filter entity to update the facets.
- **url:** Fix URL clear query issue
- **x-plugin:** fix no results message flash on load

### Code Refactoring

- **design-system:** Refactor Design System View

### Testing

- **e2e:** fix sort intercepted request

## [3.0.0-alpha.27](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.26...@empathyco/x-components@3.0.0-alpha.27) (2021-10-25)

### ⚠ BREAKING CHANGES

- Slots that are created using properties like the `modelName` or the `id` of different objects, now
  are named using the kebab-case version of those values. This affects the following components:
  `BaseGrid`, `Facets` and `SelectedFiltersList`. Examples: `<template #Result="{ ... }">` now is
  `<template #result="{ ... }">` `<template #NextQueriesGroup="{ ... }">` now is
  `<template #next-queries-group="{ ... }">` `<template #hierarchical_category="{ ... }">` now is
  `<template #hierarchical-category="{ ... }">`

### Features

- change all dynamic slots to kebab-case
- **components:** move `maxItemsToRender` prop to `BaseSuggestions`. Add `maxItemsToRender` prop to
  `Recommendations`.
- **plugin:** minimise initial duplicated requests using debounce
- **url:** refactor module logic moving some logic to UrlHandler Component
- **url:** syncronize url and state with the facets and remove query from facets module
- **url:** syncronize url and state with the page

### Code Refactoring

- **url:** change `updateUrl` action to be class

### Testing

- **e2e:** use main layout in mocked tests

### Styling

- add pre-commit hooks to run eslint and prettier

### Documentation

- fix components documentation export
- Fix components documentation markdown

## [3.0.0-alpha.26](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.25...@empathyco/x-components@3.0.0-alpha.26) (2021-09-23)

### Features

- **design-system:** add tokens for non matching part of suggestion
- **url:** set the related tags from the url in the store and viceversa
- **url:** syncronize url and state with the page

### Code Refactoring

- **facets:** fix facets performance issues

### Styling

- format with prettier and avoid fixing code while linting

## [3.0.0-alpha.25](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.24...@empathyco/x-components@3.0.0-alpha.25) (2021-09-22)

### Features

- **components:** Add `TranslateFromLeft` and `CrossFade` animations.
- **url:** syncronize url and state with the query

### Code Refactoring

- use `NamedModel` generic parameter to better type models

## [3.0.0-alpha.24](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.23...@empathyco/x-components@3.0.0-alpha.24) (2021-09-20)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.23](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.22...@empathyco/x-components@3.0.0-alpha.23) (2021-09-20)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.22](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.21...@empathyco/x-components@3.0.0-alpha.22) (2021-09-17)

### Features

- **design-system:** add utilities
- **url:** Add an action to save from url to the store.
- **url:** add new URL Manager component

### Testing

- **partial-results:** mock adapter for partial results e2e tests

## [3.0.0-alpha.21](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.20...@empathyco/x-components@3.0.0-alpha.21) (2021-09-15)

### Features

- **design-system:** add `Shadow` component
- **e2e:** mock adapter for query suggestions tests
- export store utils

### Bug Fixes

- **design-system:** fix typo. Increase `gap` and `padding` tokens up to 10. Add class for list item
  flex none

## [3.0.0-alpha.20](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.19...@empathyco/x-components@3.0.0-alpha.20) (2021-09-15)

### Features

- **no-suggestions:** Remove `no-suggestions` module.
- **search:** save `Redirection`'s entities

## [3.0.0-alpha.19](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.18...@empathyco/x-components@3.0.0-alpha.19) (2021-09-13)

### Bug Fixes

- Fix recommendations `setParams` wire. Export `LIST_ITEMS_KEY`.

## [3.0.0-alpha.18](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.17...@empathyco/x-components@3.0.0-alpha.18) (2021-09-10)

### ⚠ BREAKING CHANGES

- **facets:** Rename `Filters` component to `FiltersList`.
- **facets:** Remove `MultiSelectFilters` component. Filters are multi-select by default. Apply the
  `SingleSelectModifier` using the `FilterEntityFactory` to make the desired `Facet` single select.
- **facets:** Refactor `HierarchicalFilter.children` field. Now, this field is list of the
  `Filter.ids` of the children filter. All `HierarchicalFilter`s are flattened in the
  `Facet.filters` list.
- **facets:** Remove `facets` prop in the `Facets` component to provide `Facets` to the state. Use
  the `FacetsProvider` component instead.
- **facets:** Remove `UserChangedSelectedFilters` event from `Facets` component. Use
  `FacetsProvider` component instead.
- **facets:** Remove `UserClickedClearFacetFilters` event. `UserClickedClearAllFilters` is emitted
  instead. Its payload is now list of `Facet.id`s.
- **facets:** Rename `UserClickedFacetAllFilter` event to `UserClickedAllFilter`. Its payload is now
  list of `Facet.id`s.
- **facets:** Remove `BackendFacetsChanged` event. Use `FacetsChanged` event instead.
- **facets:** Remove `BackendFacetsProvided` event. Use `FacetsGroupProvided` instead.
- **facets:** Remove `FrontendFacetsChanged` event. Use `FacetsGroupProvided` instead.
- **facets:** Remove `FacetMultiSelectChanged` event. `Filter`s are multi-select by default. Apply
  the `SingleSelectModifier` using the `FilterEntityFactory` to make the desired `Facet` single
  select.
- **facets:** Change `UserModifiedEditableNumberRangeFilter` payload. Now it is the
  `EditableNumberRangeFilter` filter with the new range value.

### Features

- **animations:** add new `TranslateFromRight` animation
- **design-system:** add `SingleColumnLayout` component.
- **design-system:** add lists background colors to Design System
- **facets-next:** move HierarchicalFilter component to new `facets-next` x-module
- **facets:** remove old `facets` X Module and replace by `facets-next`.
- **mixin:** add origin injection in the mixin and the bus
- **next-queries:** add `NextQueriesList` component.
- **search:** add origin to the request
- **spellcheck:** add spellchecked query to Alias API
- **url:** add `url` x-module config. [(#129)](https://github.com/empathyco/x/pull/129)
- **url:** add new events
- **url:** add url module state, urlParams getter and its emitter

### Bug Fixes

- **design-system:** fix issues with components height and layout
- **popular-searches:** fix popular searches and query suggestions canceling requests.

### Testing

- **e2e:** mock adapter for identifier results

## [3.0.0-alpha.17](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.16...@empathyco/x-components@3.0.0-alpha.17) (2021-08-26)

### Features

- **facets-next:** add all remaining components to Facets Next X-Module
- **next-queries:** add extra params in the request
- **popular-searches:** add extra params
- **query-suggestions:** add new extra params in the request
- **recommendations:** recommendations extra params and state reset on change.
- **related-tags:** add new extra params in the request
- **search:** add extra params to search module

### Testing

- **e2e:** mock search-box e2e tests

## [3.0.0-alpha.16](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.15...@empathyco/x-components@3.0.0-alpha.16) (2021-08-24)

### Features

- **extra-params:** add new renderless extra params component
- **extra-params:** add new snippet extra params component
- **facets-next:** add `AllFilter`, `BaseFilter` and `EditableNumberRangeFilter` components to
  `facets-next` x-module.
- **facets-next:** add `Facets` component to `facets-next` x-module
- **facets-next:** add `FacetsProvider` component
- **facets-next:** add `SimpleFilter`, `HierarchicalFilter`, `NumberRangeFilter`, `RenderlessFilter`
  and `Filters` components to the `facets-next` x-module.

### Testing

- **facets-next:** add missing service tests

## [3.0.0-alpha.15](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.14...@empathyco/x-components@3.0.0-alpha.15) (2021-08-20)

### Features

- **extra-params:** add `ExtraParams` component
- **extra-params:** add module
- **facets-next:** add facets to the state and facets getter
- modify search function in XAPI to open X
- **facets-next:** Add `FacetsService`
- **facets-next:** add wiring. add new `wireService` and `wireServiceWithoutPayload` wires
  factories.
- **url:** add new empty module

### Testing

- **e2e:** mock adapter on popular searches requests
- **e2e:** move stubs creation within the test itself and rewrite mocking features

## [3.0.0-alpha.14](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.13...@empathyco/x-components@3.0.0-alpha.14) (2021-08-11)

### ⚠ BREAKING CHANGES

- **components:** Remove `hideIntegerDecimals` from `currency-formatter` util, `base-currency`
  component.
- **facets-next:** Rename `EmpathyFilterMapper` to `EmpathyFacetFilterMapper`. Response filter
  mappers now map the API value in the `id` filters property. `EmpathyHierarchicalFacetMapper` now
  flattens and stores all the filters in the `filter` property. `EmpathyHierarchicalFacetMapper` now
  only maps filters ids in `HierarchicalFilter` children. Bump up `@empathyco/x-types` major version
  in `@empathyco/x-adapter`.

### Features

- **components:** add option to hide decimals if the number to format is an integer in
  `currencyFormatter` `format` option.
- **facets-next:** add entity filter modifiers
- **facets-next:** add support for the new search types in search adapter

### Testing

- **e2e:** mock adapter on next queries requests
- **e2e:** mock all the e2e requests of Next Queries

## [3.0.0-alpha.13](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.12...@empathyco/x-components@3.0.0-alpha.13) (2021-08-05)

### Build System

- upgrade x-translations dependencies

## [3.0.0-alpha.12](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.11...@empathyco/x-components@3.0.0-alpha.12) (2021-08-05)

### Features

- **facets-next:** add `EditableNumberRangeFilterEntity`
- **facets-next:** add `HierarchicalFilterEntity`
- **facets-next:** add `RawFilterEntity`

## [3.0.0-alpha.11](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.10...@empathyco/x-components@3.0.0-alpha.11) (2021-08-03)

### Features

- **facets-next:** add `SimpleFilterEntity`

### Bug Fixes

- **animations:** disable leaving elements listening to click events

### Build System

- Update TypeScript to 4.3.5.Update TSLib to 2.3.5.

## [3.0.0-alpha.10](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.9...@empathyco/x-components@3.0.0-alpha.10) (2021-07-29)

### Features

- **facets-next:** add module

### Build System

- use 2 different versions of search-types

## [3.0.0-alpha.9](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.8...@empathyco/x-components@3.0.0-alpha.9) (2021-07-29)

### Bug Fixes

- **banners:** fix repeated banners and promoted on page load
- **directives:** change `infinite-scroll` threshold to avoid decimals bug in `Chrome`

## [3.0.0-alpha.8](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.7...@empathyco/x-components@3.0.0-alpha.8) (2021-07-28)

### Bug Fixes

- **promoted:** fix name export of PromotedsList component

## [3.0.0-alpha.7](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.5...@empathyco/x-components@3.0.0-alpha.7) (2021-07-27)

### Features

- **search:** add `BannersList` and `PromotedsList` components

### Bug Fixes

- **design-system:** Fix padding in Input Group Line variant

### Code Refactoring

- **design-system:** rename `tokens` to use `style-dictionary`

### Testing

- **e2e:** stub 'adapter.getTopRecommendations` calls

## [3.0.0-alpha.6](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.5...@empathyco/x-components@3.0.0-alpha.6) (2021-07-20)

**Note:** Version bump only for package @empathyco/x-components

## [3.0.0-alpha.5](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.4...@empathyco/x-components@3.0.0-alpha.5) (2021-07-20)

### Continuous Integration

- Fix publishing in x-components. Normalize build scripts.

## [3.0.0-alpha.4](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.3...@empathyco/x-components@3.0.0-alpha.4) (2021-07-15)

### Testing

- **component:** configure Cypress component testing

## [3.0.0-alpha.3](https://github.com/empathyco/x/compare/@empathyco/x-components@3.0.0-alpha.2...@empathyco/x-components@3.0.0-alpha.3) (2021-07-14)

### Features

- **design-system:** add scroll-to-top slot in Layout
- **search:** add `Promoted` component
- **search:** add Banner component

### Bug Fixes

- **components:** make column picker & grid components listen to only `ColumnsNumberProvided` event
  to fix incorrect columns number on re-mounts
- **directives:** `InfiniteScroll` now works properly in Safari and with html or body as containers
- **search:** clean sort value after accept new query

### Documentation

- **query-suggestions:** adapt examples to edocs guidelines
- **related-tags:** adapt to eDocs guidelines

### Testing

- enable e2e test and fix tests

## 3.0.0-alpha.2 (2021-06-30)

### Features

- **facets:** add `click:show-more` & `click:show-less` events to the `SlicedFilters` component.

### Bug Fixes

- **components:** `StaggeringTransitionGroup` elements now are positioned correctly in scroll
  containers

## 3.0.0-alpha.1 (2021-06-30)

### Features

- **components:** Add `@XEmit` decorator
- **device:** Add `device` module
- **device:** add `DeviceDetector` component
- **x-installer:** make `SnippetConfig` object available for all components
- **x-plugin:** Remove `XConfig`

### Bug Fixes

- **design-system:** solve `Safari` `gap` issues

### Testing

- **e2e:** add test for spellcheck component

### Documentation

- **search-box:** update props and bindings table style and avoid warning block auto-formatting

### Styling

- format entire project

## 3.0.0-alpha.0 (2021-06-22)

### ⚠ BREAKING CHANGES

- **design-system:** Design system styles have now to be imported from
  `@empathy/x-components/design-system` instead of `@empathy/x-components/css`

### Features

- **components:** add new `BaseIdPanelToggleButton` and `BaseIdPanelToggle` components

### Testing

- **e2e:** add identifier results tests

### Code Refactoring

- **design-system:** rename `styles` folder to `design-system`

## 2.1.0-alpha.1 (2021-06-16)

### Features

- **components:** change the render conditions in the `Layout` component
- **design-system:** add `x-button--ghost-start` and `x-button--ghost-end` modifiers to
  `x-button--ghost` variant
- **design-system:** add `x-dropdown` size variants
- **design-system:** add more values to the `x-list` variants
- **design-system:** fix the issue with the `x-tag` and `x-filter` in the selected filters
- **empathize:** add `isOpen` to store state and expose through the Alias API
- **facets:** add `isSelected` binding to the `AllFilter` component slot

### Bug Fixes

- **components:** emit initial default value in the `ColumnPicker` mixin
- **design-system:** fix the stroke and the text decoration in the typography
- **facets:** `isNewQuery` utility was returning false when only one query was empty
- **facets:** new label slot inside the `Hierarchical Filter` children
- **utils:** add missing exports to barrel

### Documentation

- **search-box:** remove values column in props generated table in component doc

### Testing

- **e2e:** add partial results tests

## 2.1.0-alpha.0 (2021-06-14)

### Features

- **components:** add `AnimateWidth` animation component
- **design-system:** add `SlidingPanel` default CSS and tokens
- **design-system:** add `x-scroll` component and tokens
- **design-system:** add Design System classes for the picture image fallback and placeholder
- **design-system:** add Design System icons
- **design-system:** add Direction Border and Padding List variants
- **design-system:** add icons to the Design System view
- **design-system:** add Layout component and Design System Layout component
- **design-system:** add list design tokens
- **design-system:** add new typography variants
- **design-system:** add option list tokens
- **design-system:** add `x-grid` Design System tokens
- **design-system:** add `x-result` Design System tokens
- **design-system:** improve `x-icon` token
- **design-system:** add `x-row` and `x-row-item` tokens
- **design-system:** add `x-picture` Design System tokens
- **facets:** add `SortedFilters` component
- **components:** change `NoElement` component to be not functional
- **components:** add `BaseResultPlaceholderImage` and `BaseResultFallbackImage`

### Bug Fixes

- **components:** fix `SlidingPanel` buttons were blocking clicks while invisible
- **facets:** fix issue with hierarchical filters with no children
- **search:** fix infinite scroll issues when filtering

### Testing

- **e2e:** adapt `empathize` tests to cucumber
- **e2e:** update Cypress to 7.4.0

### Continuous Integration

- **CI:** update package-lock

### Build System

- **dependencies:** update `search-adapter` version

### Documentation

- **search-box:** update `SearcInput` component documentation
- **search-box:** update `ClearSearchInput` documentation
- **search-box:** update `SearchButton` documentation
- **build:** avoid creating Methods section in components documentation

### Code Refactoring

- **components:** refactor `CollapseFromTop` animation to use only transformations

## 2.0.0 (2021-06-03)

### Features

- **design-system:** add `x-sliding-panel` tokens
- **design-system:** add design system icons
- **design-system:** add `x-list`and variants tokens
- **design-system:** add `x-option-list` and variants tokens
- **design-system:** add `x-row` and `x-row-item` tokens
- **design-system:** add `x-picture` tokens
- **facets:** add `SortedFilters` component
- **no-element:** change `NoElement` component to be not functional

### Bug Fixes

- **search:** fix infinite scroll issues when filtering

### Testing

- **e2e:** adapt `empathize` tests to cucumber
- **e2e:** update Cypress to 7.4.0

### Build System

- **dependencies:** update `search-adapter` version

### Documentation

- **search:** update search input component documentation
- **components:** avoid creating Methods section in components documentation

## 2.0.0-alpha.13 (2021-05-28)

### Features

- **design-system:** add `input-group` variants
- **design-system:** add `justified` variant to `x-filter` component
- **design-system:** add `x-button` css class in the necessary elements
- **design-system:** add `x-filter` tokens and CSS
- **design-system:** add `x-suggestion` design tokens
- **design-system:** add `x-tag` variants tokens and CSS styles
- **design-system:** add default `x-facet` tokens and CSS and `x-icon` variants
- **design-system:** add dropdown design tokens
- **design-system:** add input default tokens and CSS
- **design-system:** add input variants tokens and CSS
- **design-system:** add tags default tokens and CSS
- **design-system:** add the `.x-input` class to the XComponents where necessary
- **design-system:** add x-facet variants tokens and CSS styles
- **design-system:** add x-tag css class in the necessary elements
- **design-system:** refactor styles folder structure
- **design-system:** add `hierarchical` variant to `x-filter`
- **facets:** add support for optional hierarchical filter children prop
- **search:** add infinite scroll to `ResultsList` component
- **search:** Add `page` and `pageSize` properties with its mutations.
- **search:** update search getter in order to use the new page and pageSize properties of the
  module

### Bug Fixes

- **components:** fix `transform` transition in `FadeAndSlide` animation component
- **design-tokens:** fix editable tokens not being displayed in view correctly

### Build System

- **design-system:** add the Rollup configuration to build the CSS files of the Design System

### Documentation

- **components:** improve the way to show slot bindings data in the components documentation

### Testing

- remove old tests

## 2.0.0-alpha.12 (2021-05-06)

### Features

- **components:** add an overlay layer to `BaseModal` component listening to click events outside
  the modal to close it
- **recommendations:** add scopedSlot `layout` to `Recommendations` component

### Bug Fixes

- **components:** fix `FadeAndSlide` and `StaggeredFadeAndSlide` animations

### Testing

- **e2e:** Add multiselect-filters test

## 2.0.0-alpha.10 (2021-05-03)

### Features

- **contributing-guide:** Add contributing guide
- **design-system:** add base tokens
- **design-system:** add Button variations tokens and CSS
- **design-system:** add default button design tokens and styles
- **design-system:** add Design System view as showcase
- **directives:** add `InfiniteScroll` directive
- **directives:** add barrel file in `directives` folder and export them in `src`
- **facets:** add `RenderlessFilter` component
- **facets:** change `BaseFilter` to `RenderlessFilter` in `HierarchicalFilter` component
- **facets:** make `SimpleFilter` component use `RenderlessFilter`, exposing the option of changing
  the default button.
- **facets:** use the new decorators `inject` and `provide` in the filters components
- **x-installer:** add option to install asynchronous Vue plugins

### Bug Fixes

- **tests:** enable new scenario in `querySuggestions` and fix `isInQuerySuggestions` method

### Build System

- **dependencies:** update `search-adapter` and `search-types` versions
- **package.json:** update fixed dependencies (package-lock.json) and fix eslint version to minor

### Testing

- **e2e:** add different possible combinations for filters-search components
- **e2e:** add new sort tests
- **e2e:** e2e test for exclude-filters-with-no-results component

### Documentation

- **tests** add tests docs in contributing documentation about factory functions and components
  wrappers
- **xcomponents:** add documentation about events emitted by components

## 2.0.0-alpha.9 (2021-04-13)

### Bug Fixes

- **facets:** Emit the `SelectedFiltersChanged` event when the user deselects the last filter

## 2.0.0-alpha.8 (2021-04-13)

### Bug Fixes

- **facets:** Avoid emitting the `SelectedFiltersChanged` event when facets change for the second
  time.

## 2.0.0-alpha.7 (2021-04-07)

### Features

- **components:** add `BaseColumnPickerList` component
- **components:** add `BaseVariableColumnGrid` component
- **components:** add `BaseIdScroll` component
- **components:** add `BaseMainScroll` component
- **decorators:** add `@XProvide` and `@XInject` decorators
- **facets:** add `ExcludeFiltersWithNoResults` component
- **facets:** add `EditableNumberRangeFilter` component
- **facets:** add new events, wiring, and action to keep backend filters selected state
- **facets:** add the option to init the `frontendFacets` via prop in the `Facets` component
- **facets:** add wiring and store logic in facets module to support `EditableNumberRangeFilter`
- **grid:** add `BaseColumnPickerDropdown` component
- **history-queries:** modify history-queries to accept new config and show all the elements in
  store.
- **scroll:** add new `BaseScrollToTop` component
- **scroll:** add new `BaseScroll` component
- **search:** add `PartialResultsList` component
- **search:** add `SortDropdown` component
- **search:** add new `PartialQueryButton` component
- **search:** add new `SortList` component
- **search:** add store logic & wiring to support sorting results
- **tagging:** add basic tagging x-module
- **x-plugin:** add `initialXModules` to `XPluginOptions` to register `XModules` manually when
  installing the plugin

### Code Refactoring

- **animations:** rename animations to fit BEM
- **decorators:** tidy decorators splitting the bus decorators from the state decorators
- **facets:** move filter components inside the facets module

### Testing

- **e2e:** fix e2e `SlidingPanel` tests
- **e2e:** add tests scenarios for sort dropdown and list
- **e2e:** column pickers tests refinement
- **e2e:** fix relative imports paths
- **e2e:** fix setting related tags max items to render in sliding panel view
- **e2e:** add test for `BaseFiltersSearch`
- **e2e:** add test for `BaseColumnPickerList` and dropdown
- **e2e:** add tests for `SlidingPanel` component

## 2.0.0-alpha.6 (2021-03-16)

### ⚠ BREAKING CHANGES

- **facets:** Filters which have selected property now extends from BooleanFilter

### Features

- **facets:** update search-types and search-adapter to allow EditableNumberRangeFilters
- **search:** add `ResultsList` component
- **search:** add `Spellcheck` component
- **search:** add `SpellcheckButton` component
- **search:** add `totalResults` property to the search module state and to the alias API

### Bug Fixes

- **components:** `EventsModalOpen`, `IdModalOpen` components can now contain HTML elements inside.
  Disable page scroll when modals are open. Close modals when either clicked out of them or focus is
  lost

### Testing

- **e2e:** add tests for `BaseKeyboardNavigation` component
- **e2e:** add tests for `BaseResultImage` component

### Build System

- **dependencies:** update `@vue-cli` dependencies to 4.5.x

### Code Refactoring

- add `scoped` attribute to `<style>` to components that were missing it

## 2.0.0-alpha.5 (2021-03-08)

### Build System

- fix publish directory

## 2.0.0-alpha.4 (2021-03-08)

### Features

- **animations:** added z-index within staggered animations styles
- **base-components:** add `base-id-modal`, `base-id-modal-open` and `base-id-moda-close` components
- **base-grid:** add base-grid component
- **components:** add `BaseDropdown` component.
- **components:** add mixing `CollapseWidth` component export
- **facets:** add new filter to deselect the filters if the query has changed
- **facets:** facets split in backend and frontend facets
- **filters:** renders selected filters from state and exposes slots to customize it
- **search:** remove search results getter and replace the access to them with the State decorator
- **search-module:** Add banners an promoteds in store.

### Bug Fixes

- **history-queries:** replace last query, if the last word of it is refined in the new query

### Performance Improvements

- **e2e:** avoid opening new browser instances to speed up e2e tests

### Code Refactoring

- **e2e:** homogenise and standardise common-steps and test cases
- **x-plugin:** extract `XComponentAliasAPI` logic to separate file and improve aliases generation

### Testing

- **e2e:** add next-queries e2e tests
- **e2e:** add test for base event modal
- **e2e:** related tags e2e tests

### Build System

- improve process deleting the temporally directories

## 2.0.0-alpha.3 (2021-02-12)

### ⚠ BREAKING CHANGES

- **currency-formatter:** remove `CurrencyOptions` from `XConfig` and its default value from
  `DEFAULT_X_CONFIG`, remove `ConfigCurrencyChanged` event from `XEventsTypes` and remove `currency`
  property from `SnippetConfig`.
- **exports:** Rename some wires due to collisions between other exported members (i.e.
  actions/getters): `facets` -> `setFacets` to `setFacetsWire`, `toggleSimpleFilter` to
  `toggleSimpleFilterWire`, `toggleHierarchicalFilter` to `toggleHierarchicalFilterWire`,
  `toggleNumberRangerFilter` to `toggleNumberRangerFilterWire`, `clearFacetsSelectedFilters` to
  `clearFacetsSelectedFiltersWire`, `clearFacetSelectedFilters` to `clearFacetSelectedFiltersWire`
  and `clearSelectedFilters` to `clearSelectedFiltersWire`. `history-queries` ->
  `loadHistoryQueriesFromBrowserStorage` to `loadHistoryQueriesFromBrowserStorageWire`.
  `next-queries` -> `fetchAndSaveNextQueries` to `fetchAndSaveNextQueriesWire` and
  `setQueryFromLastHistoryQuery` to `setQueryFromLastHistoryQueryWire`. `query-suggestions` ->
  `fetchAndSaveSuggestions` to `fetchAndSaveSuggestionsWire` and `cancelFetchAndSaveSuggestions` to
  `cancelFetchAndSaveSuggestionsWire`. `related-tags` -> `fetchAndSaveRelatedTags` to
  `fetchAndSaveRelatedTagsWire`, `cancelFetchAndSaveRelatedTags` to
  `cancelFetchAndSaveRelatedTagsWire` and `toggleRelatedTag` to `toggleRelatedTagWire`. `search` ->
  `fetchAndSaveSearchResponse` to `fetchAndSaveSearchResponseWire` and
  `cancelFetchAndSaveSearchResponse` to `cancelFetchAndSaveSearchResponseWire`.

Rename exports of `getters` named `request` to `moduleName` + `Request` due to collisions between
modules. Rename `ClearFilters` class to `ClearSelectedFilters`.

### Features

- **e2e test for recommendations components:** e2e test for recommendations component
- **e2e testing for query-suggestions component:** e2e testing for query-suggestions component
- **facets:** add an option to set the state facets via prop
- **facets:** add renderableFacets prop to Facets component to filter rendered facets
- **facets:** support receiving facets containing selected filters in `Facets.vue`
- **related tags:** added related tags config to set maximum number of items to render

### Styling

- **getters:** rename getters name adding .getter at the end

### Code Refactoring

- **currency-formatter:** extract currency format logic from `base-currency.vue` to
  `currency-formatter` utility
- **exports:** add missing actions and getters exports

### Testing

- **default-tests:** Disabled some of old E2E tests
- **history queries:** e2e test history queries

## 2.0.0-alpha.2 (2021-01-20)

### Bug Fixes

- **facets:** add missing `SelectedFilters` component export

## 2.0.0-alpha.1 (2021-01-19)

### ⚠ BREAKING CHANGES

- **base-components:** `BaseModalContainer` has been split into 2 new components: `BaseEventsModal`,
  which acts like the old component, but with the `eventToEmitOnClose` prop renamed to
  `bodyClickEvent`. `BaseModal` now acts as dumb modal that receives its open state via props.
  `BaseCloseButton` has been renamed to `BaseEventsCloseButton` `BaseOpenButton` has been renamed to
  `BaseEventsOpenButton` Events have been renamed: `UserOpenedX` -> `UserClickedOpenX`,
  `UserClosedX` -> `UserClickedCloseX`

### Features

- **animations:** add `CollapseWidth` animation
- **base-components:** add `BaseRating` component
- **base-components:** add `BaseRatingFilterLabel` component
- **base-components:** add `BaseModal` and `BaseEventsModal` components
- **base-components:** add `BasePriceFilterLabel` component
- **facets:** add `selectedFilters` binding for each slot and facet in `Facets` component
- **facets:** add `clearSelectedFilters` wire in `UserAcceptedAQuery` event
- **facets:** add `SelectedFilters` component which renders the selected filters

### Bug Fixes

- **plugin:** fix types to allow overriding parts of the store

### Code Refactoring

- **animations:** extract mixin from `CollapseHeight` and `CollapseWidth` animations
- **components/filters:** reorganize components/filters directory

### Testing

- **e2e:** implement search-box test scenarios
- **e2e:** update cypress version
- **e2e:** refine search-box tests

## 2.0.0-alpha.0 (2020-12-29)

### ⚠ BREAKING CHANGES

- rename actions in several modules: Popular searches `getSuggestions` → `fetchSuggestions`. Query
  suggestions: `getAndSaveSuggestions` → `fetchAndSaveSuggestions`, `getSuggestions` →
  `fetchSuggestions`.

### Features

- **actions:** generalize request actions
- **actions:** use `cancellable-promise` in every request action
- **animations:** add `CollapseHeight` component
- **base-components:** add `BaseFilters` component
- **base-components:** add `BaseNumberRangeFilter` component
- **base-components:** add `BaseCurrency` component
- **base-components:** add `BaseFiltersSearch` component
- **base-components:** add `BaseHeaderTogglePanel` component
- **base-components:** add `BaseSlicedFilters` component
- **base-components:** add `BaseHierarchicalFilter` component
- **base-components:** add `BaseTogglePanel` component
- **facets:** add `ClearAll` selected filters component
- **eslint:** update `@empathy/eslint-plugin-x` to `1.2.1` and fix some files
- **facets:** add `MultiSelectFilters` component.
- **facets:** add `SelectedFiltersChanged` emitter
- **facets:** add `toggleSimpleFilter` action
- **facets:** all filter button which deselects its filters
- **facets:** add `toggleHierarchicalFilter` action
- **facets:** add new events for clear filters
- **facets:** extract `BaseFilter` component from `BaseHierarchicalFilter` and `BaseSimpleFilter`
  components
- **facets:** add `Facets` component
- **facets:** keep selection state of the current filters
- **facets:** update facets module with new search-types
- **facets:** add `filtersMap` getter and `selectedFilters` getter refactor
- **search:** add `SelectedFiltersChanged` wiring
- **store:** add `status` to every store module
- **utils:** add callback for cancellable promises

### Bug Fixes

- **base-components:** make `BaseTogglePanel` component render `div` to solve react-wrapper
  integration issues.
- **index.html:** added link to polyfill.io to load polyfills necessary for running the project in
  IE
- **jenkinsfile:** Updated Docker image version
- **runbooks-integration:** fix the bug on the sidebar paths doesn't match the real paths
- **search-input:** fix debounced query not cancelled on clear query issue

### Documentation

- **docusaurus:** automated sidebar generation & docusaurus markdown headers.

### Testing

- **e2e:** fix Keyboard Navigation & Base Modal Container e2e tests
- **e2e:** fix some e2e tests adding checks as guards

### Styling

- **base-components:** reformat `BaseFilter` code and add style for selected filters

### Code Refactoring

- **base-components:** rename from figure to picture
- **base-components:** added default content to some simple components and default style

### 1.1.2 (2020-12-03)

### Bug Fixes

- **build:** replace style injector with ES5 version

### 1.1.1 (2020-12-03)

### Bug Fixes

- **build:** output es5 code for Vue components

## 1.1.0 (2020-10-20)

### Features

- **animations:** add staggering-transition-group component
- **api-extractor:** refactor api-extractor doc generation
- **build:** add rollup polyfills wrapper plugin
- **cancellable-promise:** add cancellable-promise utility
- **empathize:** keep Empathize open when focus inside
- **eslint:** update eslint-plugin-x to 1.2.0 version which includes 2.1.2 prettier version
- **facets-empty-module:** create empty module for facets
- **facets-module:** create wire which emits commit to set the facets in the state
- **getters-query-suggestions:** create getters for query suggestions to use property
  hideIfEqualsQuery
- **popular-searches:** add hide popular searches that have already been searched in session
- **search:** add basic search x-module
- **search-input:** add property autofocus
- **sliding-panel:** add SlidingPanel component
- **x-installer:** add XInstaller utility

### Bug Fixes

- **clean-search-input:** add emitter for the `UserClearedQuery` event. Allow `UserIsTypingAQuery`
  to be always emitted.
- **history-queries:** fixed toggle related tag action to clean the previous related tags
- **identifier-results:** fix the request action to save the results if the query is empty

### Documentation

- **build:** document how to debug the build process
- **xcomponents:** move xcomponents documentation to independent file. Added header to each file

### Testing

- **e2e:** create multiple test environment templates
- **e2e:** define basic use cases
- **result-image:** e2e tests for the component

## 1.0.0 (2020-07-30)

### Features

- **base-suggestions:** add index to slot bindings for suggestions
- **config:** refactor XPluginOptions and XModule configurations
- **decorator:** add support for multiple and dynamic events to XOn decorator
- **decorators:** add filtering support to XOn decorator
- **emitters:** add `isDifferent` optional option to emitters for checking if the observed value has
  really changed
- **empathize:** add empathize component
- **getters-proxy:** add cache to the getters proxy
- **identifier-results:** add IdentifierResult component
- **identifier-results:** add mutations and actions to the module
- **identifier-results:** create identifier results module with getters
- **identifier-results:** identifierResults component and module wiring
- **linter:** add x eslint plugin
- **next-queries:** add maxItemsToRender prop
- **wiring:** add option to pass function with the store as payload for the wireDispatch factory
  methods.
- **wiring:** refactor namespaced wiring
- **wiring:** refactor namespaced wiring
- **x-plugin:** add alias API
- **currency-filter:** add currency filter and formatter
- **base-result-previous-price:** add base result previous price component
- **related-tags:** add e2e testing for the related tags
- **spatial-navigation:** ability to move between any component and the keyboard-navigation
  component
- **animations:** fade and slide animation component
- **base-modal-container:** add base-modal-container component
- **base-result-current-price:** create base result current price component
- **base-result-image:** add the base result image with lazy loading also fallback and placeholder
- **base-result-link:** refactor BaseResultLink component to receive origin and events by injection
- **base-suggestion:** allow string in matching part to retain accent marks
- **bus:** make metadata parameter optional
- **clear-search-input:** add clear-search-input button
- **close-button:** add close-button component
- **compile-message:** add compileMessage filter and register it globally
- **conventional-commits:** add conventional-commits and commitizen npm packages
- **cypress:** add @cypress/webpack-preprocessor to support TypeScript
- **cypress:** add custom command for cypress
- **cypress:** disable video recording in Cypress e2e tests
- **cypress:** inject XComponents to the global window object when Cypress is running
- **docs:** docusaurus integration
- **empathize:** create empty Empathize module
- **empathize:** keyboardNavigation component which deals with arrow keys pressed inside it
- **eslint:** configure ESLint by subfolder and cypress rules
- **event-button:** add metadata target property to emitted events
- **event-metadata:** add metadata parameter
- **eventbutton:** add EventButton reusable component
- **global-config:** add global configuration XConfig
- **history-queries:** add actions
- **history-queries:** add ClearHistoryQueries Component
- **history-queries:** add delete-history-query component
- **history-queries:** add DeleteHistoryQuery component
- **history-queries:** add history queries emitters
- **history-queries:** add history queries getters
- **history-queries:** add history queries module wiring.
- **history-queries:** add history queries store for its x-module
- **history-queries:** add history queries x-module skeleton
- **history-queries:** add history-queries module to app & its e2e testing
- **history-queries:** add HistoryQueries component
- **history-queries:** add load history queries action
- **history-queries:** add module events
- **history-queries:** trim query before storing it
- **immediate-store-emitters:** add immediate option for store emitters configuration
- **keyboard-navigation:** add SpatialNavigation service to use in keyboard navigation component
- **next-queries:** add config for the next queries module
- **next-queries:** add events types for the next queries module
- **next-queries:** add Next Queries Component
- **next-queries:** add next-queries x-module
- **next-queries:** add NextQueriesChanged emitter to next queries emitters
- **next-queries:** add NextQueriesChanged emitter to next queries emitters
- **next-queries:** add the NextQuery component
- **no-suggestions:** append no-suggestions component
- **no-suggestions:** append store, configuration, wiring and skeleton no-suggestions x-module
- **open-button:** add open-button component
- **popular-searches:** add config to popular-searches x-module
- **popular-searches:** add popular-searches x-module
- **popular-searches:** append popular searches x-modules events
- **popular-searches:** append PopularSearch component
- **prettier:** add prettier-organize-imports plugin
- **pure-suggestion:** add base suggestion to reuse in every suggestion type
- **query-suggestions:** add query suggestions events
- **query-suggestions:** add query-suggestion component
- **query-suggestions:** add query-suggestions component
- **query-suggestions-actions:** refactor actions to an independent files and add test
- **query-suggestions-getters:** refactor getters in separated files and testing
- **query-suggestions-wiring:** add query suggestions wiring
- **recommendations:** create recommendations x-module
- **recommendations:** recommendations actions, getters & mutations
- **recommendations:** recommendations component and its test
- **recommendations:** recommendations wiring, emitters and events
- **related-tags:** add empty related tags module
- **related-tags:** add mutations and getters for the related tags module. Add testing for getters
- **related-tags:** add related tags actions and testing
- **related-tags:** add related tags state
- **related-tags:** add wiring and emitters for the related tags
- **related-tags:** add related-tags component
- **related-tags:** add the selected related tags to the request
- **result-add-to-cart:** add BaseResultAddToCart component
- **result-link:** create BaseResultLink component and events associated with it
- **sanitize:** add sanitize function to encode characters in string
- **search-box:** add event UserClearedQuery to be emitted when search-box is cleared in any way
- **search-box:** add instant search to SearchInput component
- **search-box-config:** add default config for search-box x-module
- **search-box-module-events:** add new events of search-box module
- **search-box-wiring:** add wires in search-box wiring
- **search-button:** add search-button component
- **search-input:** add search input component
- **search-types:** include the search-types.api.json file to generate the package documentation
- **standard-version:** append ci type into standard version configuration
- **suggestions:** add suggestions generic component
- **term-suggestions-config:** add term-suggestions config
- **test-utils:** add utility functions to make easier testing with jest
- **ts-doc:** add support to tsdoc and jsdoc eslint plugins
- **ts-es-lint:** add support to TypeScript ES-lint through new plugin
- **utils:** add array and normalize shared utility functions
- **utils:** add debounce util
- **vue-styleguidist:** add vue styleguidist to document components
- **wires-factory:** add implementation to NamespacedWireFactory.wireCommit with function payload
- **wiring:** add WirePayloadParams type and modified NamespacedWireFactory
- **wiring:** allow wiring operators to access store to retrieve data
- **wiring-operators:** add filterWhitelistedModules & filterBlacklistedModules operators
- **x-api:** append X API and installX middleware function to install X
- **x-component.utils:** add `getXComponentXModuleName` util function
- **x-plugin:** add logic to save component configurations to store
- **xon-decorator:** add XOn decorator to handle the subscription/unsubscription of an XEvent
- **xplugin-search-adapter:** extract adapter to XPlugin and add subscription to
  adapterConfigChanged
- **wiring:** add `createWireFromFunction` wire factory function. Add `filter`,
  `filterTruthyPayload`, `filterFalsyPayload`, `debounce` & `throttle` wire operator functions
- **bus:** remove circular dependency from `BaseXBus` and Vue components. Make bus emit only from
  root component.
- **build:** add rollup build
- **decorators:** add type safe `State` and `Getter` decorators for accessing state and getters in
  class components
- **term-suggestions:** add term-suggestions x-module skeleton
- **search-box:** add search-box x-module skeleton
- **typing:** remove unnecessary `XStoreTree` type
- **x-module:** add `withModule` function to create `XModule` scoped wires
- **x-module:** remove `Emitters` and `Wiring` generic types from `XModule`
- **store:** add Store and StoreEmitters to the X-Module
- **wiring:** add wiring system
- **wiring-factory:** add wiring factory methods
- **project:** create project with basic shared utils

### Bug Fixes

- **wire-operators:** handle race events for the debounce wire operator
- **spatial-navigation:** filter out focusable elements if they can't be focused
- **build:** make build fail if api-extractor has errors
- **components:** fix vue components exports
- **cypress:** fix Cypress webpack/preprocessor config to avoid .ts transpilation file issues
- **debounce:** remove wireDebounce to avoid side effects
- **history-queries:** fix class selector in history queries' e2e test
- **history-queries:** fix history queries removing queries when replacing last stored query
- **jenkins:** add test command for Jenkins CI
- **jest:** fix testMatch option to look into src instead all project
- **next-queries:** avoid clearing next-queries when the query is empty
- **query-suggestion:** use getter of normalizedQuery to use as query in the component
- **query-suggestions:** fix missing css class, slots docs, slot naming to kebab case and binds
- **request-getters:** avoid constructing request when the query is empty or has spaces
- **rxjs:** fix rxjs imports to support rollup commonjs plugin
- **storage-service:** add dummy local storage service for node environment
- **tests-fix:** fix tests making them wait until Vue updates reactive dependencies
- **types:** fix store generic type constraint for Mutations and Actions
- **vue-styleguidist:** create props template to overwrite the default styleguidist template
- **vue-styleguidist:** create vue-docgen slots template to overwrite the default one. Close tags
  within the documentation between backslashes.
- **x-plugin:** make immediate emitters async
- **x-plugin.mixin:** refactor $x to get root XComponent inside bus emit

### Continuous Integration

- **package.json:** configure E2E tests command for CI Jenkins integration

### Documentation

- **docs:** add static md file to be copied to docs folder on build proccess
- **slots:** fix slot and binding documentations for vue styleguidist
- **docs:** update the folders structure to create the static-docs and live examples
- **api-extractor:** add API Extractor to generate the documentation
- **api-extractor:** add missing api extractor marks
- **docgen.config:** fix the naming of the md files generated from components
- **history-queries:** fix remove-history-query doc link

### Testing

- **keyboard-navigation:** e2e testing for keyboard-navigation
- **base-modal-container:** add e2e test to base-modal-container component
- **e2e-popular-searches-tests:** add e2e test for popular-searches
- **next-queries:** add e2e test for next queries
- **no-suggestions:** add e2e tests
- **x-plugin:** fix tests to use the installNewXPlugin helper

### Code Refactoring

- **base-components:** refactor open and close button components so they're reusable
- **tests:** update vue-utils-test version and fix test
- **base-components:** remove pure folder and refactor base components names
- **bem-css-classes:** refactor css classes following BEM
- **bus:** replaced `Subject` with `ReplaySubject`
- **extractstate & extractgetters types:** refactor ExtractState and ExtractGetters types
- **history-queries:** move history queries to the root utils folder
- **history-queries:** refactor removeFromHistory action to accept `HistoryQuery` instead of an
  string
- **history-queries:** rename DeleteHistoryQuery to use keyword `remove`
- **next-queries:** move actions to an independent folder
- **next-queries:** move getters to an independent folder
- **next-queries:** refactor the next-queries x-module that was already created
- **popular-searches:** extract getters from module
- **popular-searches:** extract module actions to an independent files
- **popular-searches:** refactor slot and state names, update docs and refactor variable in test
- **query-suggestions:** rename term-suggestions to query-suggestions
- **search-input:** refactor to use XOn decorator instead of creating manually subscription
- **x-plugin:** extract getters Proxy creation from XPlugin
- **x-plugin:** remove global messages object in favour of individual messages
- **x-plugin:** remove x-plugin singleton and improve testability
- **xevents:** refactor XEvents into their respective module
- **rxjs:** remove rxjs-compat and amend the imports

### Build System

- **dependencies:** set minimum supported versions of Vue and Vuex dependencies
- **browserslist:** add browserslist configuration
- **dependencies:** update `@empathy` dependencies
- **dependencies:** update dependencies to match with the rest of the projects
