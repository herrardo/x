# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.0](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.1...@empathyco/x-react-wrapper@5.0.0) (2023-12-01)


### ⚠ BREAKING CHANGES

* **deps:** minimum node version required is 18.
* **deps:** minimum version required is node v18

EMP-274

### Features

* disable `@typescript-eslint/no-extra-parens` rule (#715) ([3718017](https://github.com/empathyco/x/commit/3718017c5528156f931bc8b1f2d208cdb50781ed)), closes [EX-6996](https://searchbroker.atlassian.net/browse/EX-6996)
* migrate from `vue-cli` to `vite` (#1350) ([52a3b6e](https://github.com/empathyco/x/commit/52a3b6e7d94587f6934e838a2e68c99af97f7999))
* **plugin:** replace old bus implementation using the new `x-priority-bus` (#1086) ([f64f9b6](https://github.com/empathyco/x/commit/f64f9b68225c4ee422eb007784e0eec813c95228)), closes [EX-7283](https://searchbroker.atlassian.net/browse/EX-7283)
* replace `parcel` with `vite` (#739) ([7720502](https://github.com/empathyco/x/commit/7720502abfdee009506f4478ba3d71ea76051cb1))
* update typescript ([73edca6](https://github.com/empathyco/x/commit/73edca61c1cea39d82a7ab94bc18c8bff94c138c)), closes [EX-5367](https://searchbroker.atlassian.net/browse/EX-5367)


### Bug Fixes

* **deps:** remove  `only-allow` pnpm (#1097) ([b2a63d3](https://github.com/empathyco/x/commit/b2a63d308f20804d55a266189ab5d6242f88f6d8)), closes [EX-8082](https://searchbroker.atlassian.net/browse/EX-8082)


### Testing

* **e2e:** update `cypress` to version `12.1.0` and replace `cypress-cucumber-preprocessor` with `@badeball/cypress-cucumber-preprocessor` (#747) ([2adb2cd](https://github.com/empathyco/x/commit/2adb2cd03591c37934fb385b120822ef271c359f))


### Build System

* **dependencies:** fix Vue & Vuex versions (#686) ([177e851](https://github.com/empathyco/x/commit/177e8511f4458fa13c627210cdfbbf6d42a85b17)), closes [EX-6918](https://searchbroker.atlassian.net/browse/EX-6918)
* **dependencies:** update `typescript` to `4.9.4` and its dependencies to their latest version (#993) ([500ab57](https://github.com/empathyco/x/commit/500ab57e4729f5c4dcefaa31ed4a8497ddd349b9)), closes [EX-7288](https://searchbroker.atlassian.net/browse/EX-7288)
* **deps:** update `vue` to version `2.7` (#971) ([09fb0fe](https://github.com/empathyco/x/commit/09fb0fe5dbef020565571a4fafc89d2aac544c8e)), closes [EX-7730](https://searchbroker.atlassian.net/browse/EX-7730)
* **deps:** update dependencies ([491f9c5](https://github.com/empathyco/x/commit/491f9c5a27cf5eaa4dc3f31c97ea514bb8f3515b))
* **deps:** update dependencies (#1024) ([e99425f](https://github.com/empathyco/x/commit/e99425fc315526afe40b1fd536bcfde1fc1af08a))
* **deps:** Upgrade Cypress and Vue Cli plugins versions. (#399) ([630d6b0](https://github.com/empathyco/x/commit/630d6b0d767a3484140ecd252e2be10817e0900d)), closes [EX-5417](https://searchbroker.atlassian.net/browse/EX-5417)
* Fix colors.js dependency issue ([2ffcc22](https://github.com/empathyco/x/commit/2ffcc222f5666d7866c8d7cd3a0eec7c0bb1f938)), closes [EX-5293](https://searchbroker.atlassian.net/browse/EX-5293)
* update jest dependencies ([f3fee15](https://github.com/empathyco/x/commit/f3fee157d724292f5cbb7166908d48ef2fb4fe8c)), closes [EX-5027](https://searchbroker.atlassian.net/browse/EX-5027)


### Continuous Integration

* make Cypress cache depend on package. Make eslint cache restore last version if no exact match. ([2498972](https://github.com/empathyco/x/commit/24989726d8e5c6c3450b344fbbc623a3f7246b53)), closes [EX-7721](https://searchbroker.atlassian.net/browse/EX-7721)
* migrate from `npm` & `lerna bootstrap` to `pnpm` (#1047) ([aaaba4f](https://github.com/empathyco/x/commit/aaaba4f8a5498c16e17ea6daf9c18a1f49918f70)), closes [EX-7891](https://searchbroker.atlassian.net/browse/EX-7891)
* refactor `lint` command to benefit from `nx parallelisation` (#1051) ([1af1503](https://github.com/empathyco/x/commit/1af1503ff118d6232fdbb27e203037a89b1b52e0)), closes [EX-7926](https://searchbroker.atlassian.net/browse/EX-7926)
* update `runners` version (#740) ([38f246c](https://github.com/empathyco/x/commit/38f246c306dac40c4afbcdea08336052981ca9b8))
* use matrix steps and jest projects (#919) ([dec53f5](https://github.com/empathyco/x/commit/dec53f5da572a4a5f3c8519222c1ed94ed981967))


### Others

* **deps:** update node to 18 (#1196) ([e0e6b35](https://github.com/empathyco/x/commit/e0e6b35eefb3ef83f22e341f662475b0e6066e94))
* **deps:** update node to v18 (#1175) ([14e64e1](https://github.com/empathyco/x/commit/14e64e11fdf7f3d27d59baf56b027857df9e61e7))



## [4.1.2-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.1.1...@empathyco/x-react-wrapper@4.1.2-alpha.0) (2023-11-29)

**Note:** Version bump only for package @empathyco/x-react-wrapper





## [4.1.1](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.1.1-alpha.0...@empathyco/x-react-wrapper@4.1.1) (2023-11-24)

**Note:** Version bump only for package @empathyco/x-react-wrapper





## [4.1.1-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.1.0-alpha.0...@empathyco/x-react-wrapper@4.1.1-alpha.0) (2023-11-22)

**Note:** Version bump only for package @empathyco/x-react-wrapper





## [4.1.0](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.1.0-alpha.0...@empathyco/x-react-wrapper@4.1.0) (2023-11-21)

**Note:** Version bump only for package @empathyco/x-react-wrapper





## [4.1.0-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.1-alpha.0...@empathyco/x-react-wrapper@4.1.0-alpha.0) (2023-11-13)


### Features

* migrate from `vue-cli` to `vite` (#1350) ([52a3b6e](https://github.com/empathyco/x/commit/52a3b6e7d94587f6934e838a2e68c99af97f7999))



## [4.0.1-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.31...@empathyco/x-react-wrapper@4.0.1-alpha.0) (2023-10-24)

**Note:** Version bump only for package @empathyco/x-react-wrapper





# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.0](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.31...@empathyco/x-react-wrapper@4.0.0) (2023-10-23)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.31](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.30...@empathyco/x-react-wrapper@4.0.0-alpha.31) (2023-09-22)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.30](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.29...@empathyco/x-react-wrapper@4.0.0-alpha.30) (2023-06-07)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.29](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.28...@empathyco/x-react-wrapper@4.0.0-alpha.29) (2023-06-07)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.28](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.27...@empathyco/x-react-wrapper@4.0.0-alpha.28) (2023-06-06)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.27](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.26...@empathyco/x-react-wrapper@4.0.0-alpha.27) (2023-05-18)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.26](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.25...@empathyco/x-react-wrapper@4.0.0-alpha.26) (2023-05-11)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.25](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.23...@empathyco/x-react-wrapper@4.0.0-alpha.25) (2023-05-11)

### ⚠ BREAKING CHANGES

- minimum node version required is 18.

## [4.0.0-alpha.24](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.23...@empathyco/x-react-wrapper@4.0.0-alpha.24) (2023-05-03)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.23](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.22...@empathyco/x-react-wrapper@4.0.0-alpha.23) (2023-04-26)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.22](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.21...@empathyco/x-react-wrapper@4.0.0-alpha.22) (2023-04-12)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.21](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.20...@empathyco/x-react-wrapper@4.0.0-alpha.21) (2023-03-16)

### Features

- **plugin:** replace old bus implementation using the new `x-priority-bus` [(#1086)](https://github.com/empathyco/x/pull/1086)

## [4.0.0-alpha.20](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.19...@empathyco/x-react-wrapper@4.0.0-alpha.20) (2023-03-07)

### Bug Fixes

- **deps:** remove `only-allow` pnpm [(#1097)](https://github.com/empathyco/x/pull/1097)

## [4.0.0-alpha.19](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.18...@empathyco/x-react-wrapper@4.0.0-alpha.19) (2023-02-08)

### Continuous Integration

- refactor `lint` command to benefit from `nx parallelisation` [(#1051)](https://github.com/empathyco/x/pull/1051)

## [4.0.0-alpha.18](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.17...@empathyco/x-react-wrapper@4.0.0-alpha.18) (2023-02-07)

### Continuous Integration

- migrate from `npm` & `lerna bootstrap` to `pnpm` [(#1047)](https://github.com/empathyco/x/pull/1047)

## [4.0.0-alpha.17](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.16...@empathyco/x-react-wrapper@4.0.0-alpha.17) (2023-01-25)

### Build System

- **dependencies:** update `typescript` to `4.9.4` and its dependencies to their latest version
  [(#993)](https://github.com/empathyco/x/pull/993)

## [4.0.0-alpha.16](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.15...@empathyco/x-react-wrapper@4.0.0-alpha.16) (2023-01-20)

### Build System

- **deps:** update dependencies [(#1024)](https://github.com/empathyco/x/pull/1024)

## [4.0.0-alpha.15](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.14...@empathyco/x-react-wrapper@4.0.0-alpha.15) (2023-01-20)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.14](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.13...@empathyco/x-react-wrapper@4.0.0-alpha.14) (2023-01-06)

### Build System

- **deps:** update dependencies

## [4.0.0-alpha.13](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.12...@empathyco/x-react-wrapper@4.0.0-alpha.13) (2023-01-03)

### Build System

- **deps:** update `vue` to version `2.7` [(#971)](https://github.com/empathyco/x/pull/971)

## [4.0.0-alpha.12](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.11...@empathyco/x-react-wrapper@4.0.0-alpha.12) (2023-01-02)

### Continuous Integration

- make Cypress cache depend on package. Make eslint cache restore last version if no exact match.

## [4.0.0-alpha.11](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.10...@empathyco/x-react-wrapper@4.0.0-alpha.11) (2022-12-30)

### Testing

- **e2e:** update `cypress` to version `12.1.0` and replace `cypress-cucumber-preprocessor` with
  `@badeball/cypress-cucumber-preprocessor` [(#747)](https://github.com/empathyco/x/pull/747)

## [4.0.0-alpha.10](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.9...@empathyco/x-react-wrapper@4.0.0-alpha.10) (2022-12-30)

### Continuous Integration

- use matrix steps and jest projects [(#919)](https://github.com/empathyco/x/pull/919)

## [4.0.0-alpha.9](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.8...@empathyco/x-react-wrapper@4.0.0-alpha.9) (2022-10-27)

### Features

- replace `parcel` with `vite` [(#739)](https://github.com/empathyco/x/pull/739)

## [4.0.0-alpha.8](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.7...@empathyco/x-react-wrapper@4.0.0-alpha.8) (2022-10-14)

### Continuous Integration

- update `runners` version [(#740)](https://github.com/empathyco/x/pull/740)

## [4.0.0-alpha.7](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.6...@empathyco/x-react-wrapper@4.0.0-alpha.7) (2022-09-09)

### Features

- disable `@typescript-eslint/no-extra-parens` rule [(#715)](https://github.com/empathyco/x/pull/715)

## [4.0.0-alpha.6](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.5...@empathyco/x-react-wrapper@4.0.0-alpha.6) (2022-08-31)

### Build System

- **dependencies:** fix Vue & Vuex versions [(#686)](https://github.com/empathyco/x/pull/686)

## [4.0.0-alpha.5](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.4...@empathyco/x-react-wrapper@4.0.0-alpha.5) (2022-04-04)

### Build System

- **deps:** Upgrade Cypress and Vue Cli plugins versions. [(#399)](https://github.com/empathyco/x/pull/399)

## [4.0.0-alpha.4](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.3...@empathyco/x-react-wrapper@4.0.0-alpha.4) (2022-03-31)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [4.0.0-alpha.3](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.2...@empathyco/x-react-wrapper@4.0.0-alpha.3) (2022-03-08)

### Features

- update typescript

### Build System

- Fix colors.js dependency issue

## [4.0.0-alpha.2](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.1...@empathyco/x-react-wrapper@4.0.0-alpha.2) (2021-11-29)

### Build System

- update jest dependencies

## [4.0.0-alpha.1](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@4.0.0-alpha.0...@empathyco/x-react-wrapper@4.0.0-alpha.1) (2021-10-25)

### Features

- **plugin:** minimise initial duplicated requests using a debounce

### Styling

- add pre-commit hooks to run eslint and prettier

## [4.0.0-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@3.1.0-alpha.2...@empathyco/x-react-wrapper@4.0.0-alpha.0) (2021-09-22)

### ⚠ BREAKING CHANGES

- **facets:** Rename `Filters` component to `FiltersList`.
- **facets:** Remove `MultiSelectFilters` component. Filters are multi-select by default. Apply the
  `SingleSelectModifier` using the `FilterEntityFactory` to make the desired `Facet` single select.
- **facets:** Refactor `HierarchicalFilter.children` field. Now, this field is a list of the
  `Filter.ids` of the children filter. All `HierarchicalFilter`s are flattened in the
  `Facet.filters` list.
- **facets:** Remove `facets` prop in the `Facets` component to provide `Facets` to the state. Use
  the `FacetsProvider` component instead.
- **facets:** Remove `UserChangedSelectedFilters` event from `Facets` component. Use
  `FacetsProvider` component instead.
- **facets:** Remove `UserClickedClearFacetFilters` event. `UserClickedClearAllFilters` is emitted
  instead. Its payload is now a list of `Facet.id`s.
- **facets:** Rename `UserClickedFacetAllFilter` event to `UserClickedAllFilter`. Its payload is now
  a list of `Facet.id`s.
- **facets:** Remove `BackendFacetsChanged` event. Use `FacetsChanged` event instead.
- **facets:** Remove `BackendFacetsProvided` event. Use `FacetsGroupProvided` instead.
- **facets:** Remove `FrontendFacetsChanged` event. Use `FacetsGroupProvided` instead.
- **facets:** Remove `FacetMultiSelectChanged` event. `Filter`s are multi-select by default. Apply
  the `SingleSelectModifier` using the `FilterEntityFactory` to make the desired `Facet` single
  select.
- **facets:** Change `UserModifiedEditableNumberRangeFilter` payload. Now it is the
  `EditableNumberRangeFilter` filter with the new range value.

### Features

- **facets:** remove old `facets` X Module and replace by `facets-next`.

## [3.1.0-alpha.2](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@3.1.0-alpha.1...@empathyco/x-react-wrapper@3.1.0-alpha.2) (2021-08-05)

**Note:** Version bump only for package @empathyco/x-react-wrapper

## [3.1.0-alpha.1](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@3.1.0-alpha.0...@empathyco/x-react-wrapper@3.1.0-alpha.1) (2021-08-05)

### Features

- **facets-next:** add `HierarchicalFilterEntity` [(#75)](https://github.com/empathyco/x/pull/75)

### Build System

- upgrade dependencies

## [3.1.0-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@3.0.1-alpha.1...@empathyco/x-react-wrapper@3.1.0-alpha.0) (2021-08-03)

### Build System

- Update TypeScript to 4.3.5.Update TSLib to 2.3.5.

### [3.0.1-alpha.1](https://github.com/empathyco/x/compare/@empathyco/x-react-wrapper@3.0.1-alpha.0...@empathyco/x-react-wrapper@3.0.1-alpha.1) (2021-07-29)

**Note:** Version bump only for package @empathyco/x-react-wrapper

### 3.0.1-alpha.0 (2021-07-28)

**Note:** Version bump only for package @empathyco/x-react-wrapper

# React Wrapper

## [3.0.0](https://bitbucket.org/colbenson/react-wrapper/branches/compare/v3.0.0%0Dv2.0.0) (2021-02-18)

### Features

- **slots:** support using standard React components inside slots

### ⚠ BREAKING CHANGES

- **slots:** Scoped slots do not longer support primitive properties. They can only pass objects
  with named props.

## [2.0.0](https://bitbucket.org/colbenson/react-wrapper/branches/compare/v2.0.0%0Dv1.0.4) (2021-01-05)

### ⚠ BREAKING CHANGES

- **slots:** ReactWrapper slots renders a wrapper `div` with the class `react-wrapper-slot`.
- **react-wrapper:** ReactWrapper component now renders a `div` with the class `react-wrapper`.
  Inside this `div` the vue content is rendered. You can pass custom CSS classes to this div using
  the `className` prop.

### Bug Fixes

- **react-wrapper:** make react-wrapper render a wrapper div so sibling elements can be properly
  updated.
- **slots:** make react-wrapper slots render a wrapper div so children can be properly updated.

### [1.0.4](https://bitbucket.org/colbenson/react-wrapper/branches/compare/v1.0.4%0Dv1.0.3) (2020-12-03)

### Bug Fixes

- **children:** fix children unmount fails if parentElement is removed too

### [1.0.3](https://bitbucket.org/colbenson/react-wrapper/branches/compare/v1.0.3%0Dv1.0.2) (2020-11-05)

### Bug Fixes

- **slots:** add support to text content in slots

### [1.0.2](https://bitbucket.org/colbenson/react-wrapper/branches/compare/v1.0.2%0Dv1.0.1) (2020-10-29)

### Bug Fixes

- **slots:** check if VueChildrenWrapper is unmounted before unmounting React Component

### [1.0.1](https://bitbucket.org/colbenson/react-wrapper/branches/compare/v1.0.1%0Dv1.0.0) (2020-10-19)

### Bug Fixes

- **slots:** avoid creating new HTML elements for slots when the react-wrapper is re-rendered.

### Documentation

- add documentation with the usage and architecture

## 1.0.0 (2020-07-31)

### Features

- **linter:** use eslint-plugin-x
- **react-wrapper:** add events support
- **react-wrapper:** add slots support
- **react-wrapper:** add events support
- **react-wrapper:** add slots support
- **react-wrapper:** create react-wrapper with props syncing support

### Code Refactoring

- **linter:** add eslint, prettier and commitizen support
- **vue-wrapper:** remove vue-wrapper and its testing
- **vue-wrapper:** remove vue-wrapper and its testing
- **linter:** add eslint, prettier and commitizen support
