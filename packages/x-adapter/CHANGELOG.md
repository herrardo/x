# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [9.0.0](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.6...@empathyco/x-adapter@9.0.0) (2023-12-01)


### ⚠ BREAKING CHANGES

* **deps:** minimum node version required is 18.
* **deps:** minimum version required is node v18

EMP-274
* MutableSchema now receives a Source and a Target object instead of a Schema
* $replace, $extends and $override function types now reflect the allowed operations more correctly.
* `getSafePropertyChain` moved to `@empathyco/x-utils` package.

### Features

* **adapter:** disable cancel http client (#658) ([3b5b86d](https://github.com/empathyco/x/commit/3b5b86d4725edefa084181a704df716a389eecbc)), closes [EX-6875](https://searchbroker.atlassian.net/browse/EX-6875)
* add `endpointAdapterFactory` (#378) ([25221ab](https://github.com/empathyco/x/commit/25221ab2ed407f7a7f86054da3a09d64b79d891b)), closes [EX-5388](https://searchbroker.atlassian.net/browse/EX-5388)
* add basic types ([b1217e2](https://github.com/empathyco/x/commit/b1217e2a6f9fa6307a477e44ee8a96d5f8897ea3)), closes [EX-5387](https://searchbroker.atlassian.net/browse/EX-5387)
* add support for `object` params in `httpClients` ([c51760b](https://github.com/empathyco/x/commit/c51760b07b2dac2e83f13964aac614d8fe6e8e8b)), closes [EX-6293](https://searchbroker.atlassian.net/browse/EX-6293)
* Add suppport to interpolate deep paramteres in the endpoint. (#523) ([b01f9e9](https://github.com/empathyco/x/commit/b01f9e94fdbe1cd2b001d77469afc8dd102eb796)), closes [EX-6295](https://searchbroker.atlassian.net/browse/EX-6295)
* default implementation ([3df8522](https://github.com/empathyco/x/commit/3df85225375f20c9c2808bdd4d885b3c7a62db6a)), closes [EX-5983](https://searchbroker.atlassian.net/browse/EX-5983)
* disable `@typescript-eslint/no-extra-parens` rule (#715) ([3718017](https://github.com/empathyco/x/commit/3718017c5528156f931bc8b1f2d208cdb50781ed)), closes [EX-6996](https://searchbroker.atlassian.net/browse/EX-6996)
* Do not flatten body params in fetch http client. (#624) ([375c37f](https://github.com/empathyco/x/commit/375c37f6263cbbb1e88c71d8d6e29e01080c4079))
* **http-clients:** Add `beaconHttpClient` (#420) ([667958f](https://github.com/empathyco/x/commit/667958f667bf0e4612604d98c5dcf3091b6edeeb)), closes [EX-5842](https://searchbroker.atlassian.net/browse/EX-5842)
* **http-clients:** add `fetchHttpClient`  ([8040281](https://github.com/empathyco/x/commit/8040281c827f5f631260715007eb26194d6b7f10)), closes [EX-5840](https://searchbroker.atlassian.net/browse/EX-5840)
* make empty string point to live env ([1d20789](https://github.com/empathyco/x/commit/1d2078941a616bfa7bd8a0e7119f21fd11e511d9))
* **mappers:** add `combineMappers` util. ([ac41058](https://github.com/empathyco/x/commit/ac410581514bd6c2ae13150036fb0879a14512e1)), closes [EX-6294](https://searchbroker.atlassian.net/browse/EX-6294)
* **mappers:** Add `schemaMapperFactory` (#411) ([075b718](https://github.com/empathyco/x/commit/075b718372bccb4088edb29989ac8015758959b1)), closes [EX-5419](https://searchbroker.atlassian.net/browse/EX-5419)
* **mappers:** allow passing raw values to `subSchema.$context` using functions ([b79f84e](https://github.com/empathyco/x/commit/b79f84e5fdf66d4c84df97c1098206314cbf68ae)), closes [EX-6217](https://searchbroker.atlassian.net/browse/EX-6217)
* remove old adapter package and use the new one (#568) ([1632a59](https://github.com/empathyco/x/commit/1632a594b6905e6403c82b2189300eefd45b3691)), closes [EX-6286](https://searchbroker.atlassian.net/browse/EX-6286)
* **schemas:** add `createMutableSchema` utility ([6b505b9](https://github.com/empathyco/x/commit/6b505b9a92e2c9f56c9a2053ea8e1a4f03f9966e)), closes [EX-5435](https://searchbroker.atlassian.net/browse/EX-5435)
* **schemas:** add Schema types (#388) ([a58e5c3](https://github.com/empathyco/x/commit/a58e5c31c75f78371029457c8c2af8b7e212a484)), closes [EX-5433](https://searchbroker.atlassian.net/browse/EX-5433)
* split adapter interface into  `EndpointAdapter` and `ExtendableEndpointAdapter` ([2e8e287](https://github.com/empathyco/x/commit/2e8e287d00f3fe3c2ef6f02d4cc6a843d84d683b)), closes [EX-6121](https://searchbroker.atlassian.net/browse/EX-6121)
* **utils:** add `interpolate` function ([90cad72](https://github.com/empathyco/x/commit/90cad720f6705ce9d2cf933f07a982c21fe80102)), closes [EX-5395](https://searchbroker.atlassian.net/browse/EX-5395)
* **x-adapter:** Add `sendParamsInBody` option to `RequestOptions` (#577) ([9d04e6e](https://github.com/empathyco/x/commit/9d04e6eb7ceed81aeca4215db6e8302f0ab3705a)), closes [EX-6450](https://searchbroker.atlassian.net/browse/EX-6450)
* **x-adapter:** clean empty params (#716) ([eeb4399](https://github.com/empathyco/x/commit/eeb4399c59b44691d31efbf49ad028dda1123229)), closes [EX-6959](https://searchbroker.atlassian.net/browse/EX-6959)


### Bug Fixes

* **deps:** remove  `only-allow` pnpm (#1097) ([b2a63d3](https://github.com/empathyco/x/commit/b2a63d308f20804d55a266189ab5d6242f88f6d8)), closes [EX-8082](https://searchbroker.atlassian.net/browse/EX-8082)
* mutable schema types (#960) ([8015921](https://github.com/empathyco/x/commit/8015921daf2c9e5ee3a6fce2c1f57458aeb278dd)), closes [EX-7702](https://searchbroker.atlassian.net/browse/EX-7702)
* Remove `@empathyco/x-platform-adapter` dependency from library code. (#575) ([104c7e1](https://github.com/empathyco/x/commit/104c7e10855a67b2adfa68d42d82431f9194ee15)), closes [EX-6437](https://searchbroker.atlassian.net/browse/EX-6437)


### Code Refactoring

* add types to `getSafePropertyChain` and move it to `@empatyco/x-utils` (#940) ([5118210](https://github.com/empathyco/x/commit/511821063b8b08751c15f00f233e7b611a74b2cc)), closes [EX-7647](https://searchbroker.atlassian.net/browse/EX-7647)
* reestructure folders organisation ([ec25168](https://github.com/empathyco/x/commit/ec25168327e4a136fe25a226a24c1dd47f721d3a)), closes [EX-6298](https://searchbroker.atlassian.net/browse/EX-6298)
* remove undefined from return type of mapper factory ([e088967](https://github.com/empathyco/x/commit/e0889672b850c481578c4ddd42b74474802088b0)), closes [EX-5926](https://searchbroker.atlassian.net/browse/EX-5926)


### Documentation

*  add `license` and improve `readme` (#968) ([d6513fb](https://github.com/empathyco/x/commit/d6513fb77d6467e7490f9951c2111870b4770058)), closes [EX-6046](https://searchbroker.atlassian.net/browse/EX-6046)
* add mutable schemas examples (#967) ([e5e2bd9](https://github.com/empathyco/x/commit/e5e2bd92082de2256cd5a6e8b7cff029bdd65585)), closes [EX-6046](https://searchbroker.atlassian.net/browse/EX-6046)
* create Readme for x-adapter (#921) ([55fc422](https://github.com/empathyco/x/commit/55fc4223ab41e407892e68bf3fe4af7fba5f527a))


### Build System

* change `config` ([37be26e](https://github.com/empathyco/x/commit/37be26e83dbf3a200fb3fe23f4fc7221a83ca7e8)), closes [EX-5874](https://searchbroker.atlassian.net/browse/EX-5874)
* **dependencies:** update `typescript` to `4.9.4` and its dependencies to their latest version (#993) ([500ab57](https://github.com/empathyco/x/commit/500ab57e4729f5c4dcefaa31ed4a8497ddd349b9)), closes [EX-7288](https://searchbroker.atlassian.net/browse/EX-7288)
* **deps:** update `vue` to version `2.7` (#971) ([09fb0fe](https://github.com/empathyco/x/commit/09fb0fe5dbef020565571a4fafc89d2aac544c8e)), closes [EX-7730](https://searchbroker.atlassian.net/browse/EX-7730)
* **deps:** update dependencies ([491f9c5](https://github.com/empathyco/x/commit/491f9c5a27cf5eaa4dc3f31c97ea514bb8f3515b))
* **deps:** update eslint-plugin dependencies (#447) ([51d60f0](https://github.com/empathyco/x/commit/51d60f0e11fa9667a784bbdb10ba1f39159b382f)), closes [EX-5383](https://searchbroker.atlassian.net/browse/EX-5383)


### Continuous Integration

* migrate from `npm` & `lerna bootstrap` to `pnpm` (#1047) ([aaaba4f](https://github.com/empathyco/x/commit/aaaba4f8a5498c16e17ea6daf9c18a1f49918f70)), closes [EX-7891](https://searchbroker.atlassian.net/browse/EX-7891)
* parallelize steps (#1174) ([3013595](https://github.com/empathyco/x/commit/3013595857c8dac33f36b2c0d08e747b0735c6a0))
* refactor `lint` command to benefit from `nx parallelisation` (#1051) ([1af1503](https://github.com/empathyco/x/commit/1af1503ff118d6232fdbb27e203037a89b1b52e0)), closes [EX-7926](https://searchbroker.atlassian.net/browse/EX-7926)
* restore build workflow (#1194) ([076ee49](https://github.com/empathyco/x/commit/076ee492388ba000ebdfa49d9f4356562c8bef19))
* update `runners` version (#740) ([38f246c](https://github.com/empathyco/x/commit/38f246c306dac40c4afbcdea08336052981ca9b8))
* use matrix steps and jest projects (#919) ([dec53f5](https://github.com/empathyco/x/commit/dec53f5da572a4a5f3c8519222c1ed94ed981967))


### Others

* **deps:** update node to 18 (#1196) ([e0e6b35](https://github.com/empathyco/x/commit/e0e6b35eefb3ef83f22e341f662475b0e6066e94))
* **deps:** update node to v18 (#1175) ([14e64e1](https://github.com/empathyco/x/commit/14e64e11fdf7f3d27d59baf56b027857df9e61e7))



## [8.0.3-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.2...@empathyco/x-adapter@8.0.3-alpha.0) (2023-11-29)

**Note:** Version bump only for package @empathyco/x-adapter





## [8.0.2](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.2-alpha.0...@empathyco/x-adapter@8.0.2) (2023-11-24)

**Note:** Version bump only for package @empathyco/x-adapter





## [8.0.2-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.1-alpha.0...@empathyco/x-adapter@8.0.2-alpha.0) (2023-11-22)

**Note:** Version bump only for package @empathyco/x-adapter





## [8.0.1](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.1-alpha.0...@empathyco/x-adapter@8.0.1) (2023-11-21)

**Note:** Version bump only for package @empathyco/x-adapter





## [8.0.1-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.34...@empathyco/x-adapter@8.0.1-alpha.0) (2023-10-24)

**Note:** Version bump only for package @empathyco/x-adapter





# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [8.0.0](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.34...@empathyco/x-adapter@8.0.0) (2023-10-23)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.34](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.33...@empathyco/x-adapter@8.0.0-alpha.34) (2023-09-18)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.33](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.32...@empathyco/x-adapter@8.0.0-alpha.33) (2023-08-02)

### Features

- make empty string point to live env

## [8.0.0-alpha.32](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.31...@empathyco/x-adapter@8.0.0-alpha.32) (2023-06-27)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.31](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.30...@empathyco/x-adapter@8.0.0-alpha.31) (2023-06-07)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.30](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.29...@empathyco/x-adapter@8.0.0-alpha.30) (2023-06-06)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.29](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.28...@empathyco/x-adapter@8.0.0-alpha.29) (2023-05-11)

### ⚠ BREAKING CHANGES

- **deps:** minimum node version required is 18.
- **deps:** minimum version required is node v18

### Continuous Integration

- parallelize steps [(#1174)](https://github.com/empathyco/x/pull/1174)
- restore build workflow [(#1194)](https://github.com/empathyco/x/pull/1194)

### Others

- **deps:** update node to 18 [(#1196)](https://github.com/empathyco/x/pull/1196)
- **deps:** update node to v18 [(#1175)](https://github.com/empathyco/x/pull/1175)

## [8.0.0-alpha.28](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.27...@empathyco/x-adapter@8.0.0-alpha.28) (2023-05-03)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.27](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.26...@empathyco/x-adapter@8.0.0-alpha.27) (2023-04-12)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.26](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.25...@empathyco/x-adapter@8.0.0-alpha.26) (2023-03-07)

### Bug Fixes

- **deps:** remove `only-allow` pnpm [(#1097)](https://github.com/empathyco/x/pull/1097)

## [8.0.0-alpha.25](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.24...@empathyco/x-adapter@8.0.0-alpha.25) (2023-02-08)

### Continuous Integration

- refactor `lint` command to benefit from `nx parallelisation` [(#1051)](https://github.com/empathyco/x/pull/1051)

## [8.0.0-alpha.24](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.23...@empathyco/x-adapter@8.0.0-alpha.24) (2023-02-07)

### Continuous Integration

- migrate from `npm` & `lerna bootstrap` to `pnpm` [(#1047)](https://github.com/empathyco/x/pull/1047)

## [8.0.0-alpha.23](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.22...@empathyco/x-adapter@8.0.0-alpha.23) (2023-01-25)

### Build System

- **dependencies:** update `typescript` to `4.9.4` and its dependencies to their latest version
  [(#993)](https://github.com/empathyco/x/pull/993)

## [8.0.0-alpha.22](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.21...@empathyco/x-adapter@8.0.0-alpha.22) (2023-01-23)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.21](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.20...@empathyco/x-adapter@8.0.0-alpha.21) (2023-01-20)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.20](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.19...@empathyco/x-adapter@8.0.0-alpha.20) (2023-01-18)

### Documentation

- add `license` and improve `readme` [(#968)](https://github.com/empathyco/x/pull/968)

## [8.0.0-alpha.19](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.18...@empathyco/x-adapter@8.0.0-alpha.19) (2023-01-10)

### Documentation

- add mutable schemas examples [(#967)](https://github.com/empathyco/x/pull/967)

## [8.0.0-alpha.18](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.17...@empathyco/x-adapter@8.0.0-alpha.18) (2023-01-06)

### Build System

- **deps:** update dependencies

## [8.0.0-alpha.17](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.16...@empathyco/x-adapter@8.0.0-alpha.17) (2023-01-03)

### Build System

- **deps:** update `vue` to version `2.7` [(#971)](https://github.com/empathyco/x/pull/971)

## [8.0.0-alpha.16](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.15...@empathyco/x-adapter@8.0.0-alpha.16) (2022-12-30)

### Documentation

- create Readme for x-adapter [(#921)](https://github.com/empathyco/x/pull/921)

## [8.0.0-alpha.15](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.14...@empathyco/x-adapter@8.0.0-alpha.15) (2022-12-29)

### ⚠ BREAKING CHANGES

- MutableSchema now receives a Source and a Target object instead of a Schema
- $replace, $extends and $override function types now reflect the allowed operations more correctly.

### Bug Fixes

- mutable schema types [(#960)](https://github.com/empathyco/x/pull/960)

## [8.0.0-alpha.14](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.13...@empathyco/x-adapter@8.0.0-alpha.14) (2022-12-19)

### ⚠ BREAKING CHANGES

- `getSafePropertyChain` moved to `@empathyco/x-utils` package.

### Code Refactoring

- add types to `getSafePropertyChain` and move it to `@empatyco/x-utils` [(#940)](https://github.com/empathyco/x/pull/940)

## [8.0.0-alpha.13](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.12...@empathyco/x-adapter@8.0.0-alpha.13) (2022-12-16)

### Continuous Integration

- use matrix steps and jest projects [(#919)](https://github.com/empathyco/x/pull/919)

## [8.0.0-alpha.12](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.11...@empathyco/x-adapter@8.0.0-alpha.12) (2022-11-28)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.11](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.10...@empathyco/x-adapter@8.0.0-alpha.11) (2022-10-14)

### Continuous Integration

- update `runners` version [(#740)](https://github.com/empathyco/x/pull/740)

## [8.0.0-alpha.10](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.9...@empathyco/x-adapter@8.0.0-alpha.10) (2022-09-27)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.9](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.8...@empathyco/x-adapter@8.0.0-alpha.9) (2022-09-16)

### Features

- **x-adapter:** clean empty params [(#716)](https://github.com/empathyco/x/pull/716)

## [8.0.0-alpha.8](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.7...@empathyco/x-adapter@8.0.0-alpha.8) (2022-09-13)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.7](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.6...@empathyco/x-adapter@8.0.0-alpha.7) (2022-09-09)

### Features

- disable `@typescript-eslint/no-extra-parens` rule [(#715)](https://github.com/empathyco/x/pull/715)

## [8.0.0-alpha.6](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.5...@empathyco/x-adapter@8.0.0-alpha.6) (2022-08-24)

### Features

- **adapter:** disable cancel http client [(#658)](https://github.com/empathyco/x/pull/658)

## [8.0.0-alpha.5](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.4...@empathyco/x-adapter@8.0.0-alpha.5) (2022-08-19)

**Note:** Version bump only for package @empathyco/x-adapter

## [8.0.0-alpha.4](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.3...@empathyco/x-adapter@8.0.0-alpha.4) (2022-07-26)

### Features

- Do not flatten body params in fetch http client. [(#624)](https://github.com/empathyco/x/pull/624)

## [8.0.0-alpha.3](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.2...@empathyco/x-adapter@8.0.0-alpha.3) (2022-06-24)

### Features

- **x-adapter:** Add `sendParamsInBody` option to `RequestOptions` [(#577)](https://github.com/empathyco/x/pull/577)

## [8.0.0-alpha.2](https://github.com/empathyco/x/compare/@empathyco/x-adapter@8.0.0-alpha.1...@empathyco/x-adapter@8.0.0-alpha.2) (2022-06-23)

### Bug Fixes

- Remove `@empathyco/x-platform-adapter` dependency from library code. [(#575)](https://github.com/empathyco/x/pull/575)

## [8.0.0-alpha.1](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.33...@empathyco/x-adapter@8.0.0-alpha.1) (2022-06-21)

### Features

- remove old adapter package and use the new one [(#568)](https://github.com/empathyco/x/pull/568)

## [8.0.0-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-adapter-next@0.1.1-alpha.0...@empathyco/x-adapter-next@0.2.0-alpha.0) (2022-03-16)

### Features

- add basic types
- **utils:** add `interpolate` function
- add `endpointAdapterFactory` [(#378)](https://github.com/empathyco/x/pull/378)
- **schemas:** add Schema types [(#388)](https://github.com/empathyco/x/pull/388)
- **mappers:** Add `schemaMapperFactory` [(#411)](https://github.com/empathyco/x/pull/411)
- **http-clients:** add `fetchHttpClient`
- **http-clients:** Add `beaconHttpClient` [(#420)](https://github.com/empathyco/x/pull/420)
- **schemas:** add `createMutableSchema` utility
- default implementation
- split adapter interface into `EndpointAdapter` and `ExtendableEndpointAdapter`
- **mappers:** allow passing raw values to `subSchema.$context` using functions
- add support for `object` params in `httpClients`
- **mappers:** add `combineMappers` util.
-

### Build System

- change `config`
- **deps:** update eslint-plugin dependencies [(#447)](https://github.com/empathyco/x/pull/447)
- Add suppport to interpolate deep paramteres in the endpoint. [(#523)](https://github.com/empathyco/x/pull/523)

### Code Refactoring

- restructure folders organisation

## [7.0.0-alpha.33](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.32...@empathyco/x-adapter@7.0.0-alpha.33) (2022-06-16)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.32](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.31...@empathyco/x-adapter@7.0.0-alpha.32) (2022-06-09)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.31](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.30...@empathyco/x-adapter@7.0.0-alpha.31) (2022-06-08)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.30](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.29...@empathyco/x-adapter@7.0.0-alpha.30) (2022-05-13)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.29](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.28...@empathyco/x-adapter@7.0.0-alpha.29) (2022-05-11)

### ⚠ BREAKING CHANGES

- Request types moved to `x-types` package. Change the imports from `x-adapter` to `x-type`.
- Removed `TaggingInfo` type. Use `TaggingRequest` from `@empathyco/x-types` instead.

### Features

- move `Request` types to `x-types` package

## [7.0.0-alpha.28](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.27...@empathyco/x-adapter@7.0.0-alpha.28) (2022-05-06)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.27](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.26...@empathyco/x-adapter@7.0.0-alpha.27) (2022-04-29)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.26](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.25...@empathyco/x-adapter@7.0.0-alpha.26) (2022-04-29)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.24](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.23...@empathyco/x-adapter@7.0.0-alpha.24) (2022-04-14)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.23](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.22...@empathyco/x-adapter@7.0.0-alpha.23) (2022-04-07)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.22](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.21...@empathyco/x-adapter@7.0.0-alpha.22) (2022-04-07)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.21](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.20...@empathyco/x-adapter@7.0.0-alpha.21) (2022-04-05)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.20](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.19...@empathyco/x-adapter@7.0.0-alpha.20) (2022-04-05)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.19](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.18...@empathyco/x-adapter@7.0.0-alpha.19) (2022-04-04)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.18](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.17...@empathyco/x-adapter@7.0.0-alpha.18) (2022-04-01)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.17](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.16...@empathyco/x-adapter@7.0.0-alpha.17) (2022-04-01)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.16](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.15...@empathyco/x-adapter@7.0.0-alpha.16) (2022-03-31)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.15](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.14...@empathyco/x-adapter@7.0.0-alpha.15) (2022-03-11)

### ⚠ BREAKING CHANGES

- Remove `selected` and `previous` logic from related tags.
- Remove `EmpathyRequestRelatedTagsQueryMapper`.

### Features

- move related tags concatenation logic [(#365)](https://github.com/empathyco/x/pull/365)

## [7.0.0-alpha.14](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.13...@empathyco/x-adapter@7.0.0-alpha.14) (2022-03-08)

### Features

- update typescript

## [7.0.0-alpha.13](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.12...@empathyco/x-adapter@7.0.0-alpha.13) (2022-02-28)

## [7.0.0-alpha.12](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.11...@empathyco/x-adapter@7.0.0-alpha.12) (2022-02-17)

## [7.0.0-alpha.11](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.10...@empathyco/x-adapter@7.0.0-alpha.11) (2022-02-10)

### Features

- **search-adapter:** detect adblockers and use fetch instead of beacon for tracking

## [7.0.0-alpha.10](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.9...@empathyco/x-adapter@7.0.0-alpha.10) (2022-02-08)

### Build System

- Fix colors.js dependency issue

## [7.0.0-alpha.9](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.8...@empathyco/x-adapter@7.0.0-alpha.9) (2021-12-29)

### Features

- **next-queries:** add `isCurated` property to `NextQuery` model

## [7.0.0-alpha.8](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.7...@empathyco/x-adapter@7.0.0-alpha.8) (2021-11-30)

### Features

- **related-tags:** add `isCurated` property to related tags

## [7.0.0-alpha.7](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.6...@empathyco/x-adapter@7.0.0-alpha.7) (2021-11-29)

### ⚠ BREAKING CHANGES

- **storage-service:** `StorageService` has been renamed to `BrowserStorageService`.

### Features

- **storage-service:** Rename `StorageService` to `BrowserStorageService`

### Build System

- update jest dependencies

## [7.0.0-alpha.6](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.5...@empathyco/x-adapter@7.0.0-alpha.6) (2021-11-22)

### Features

- update `Tagging` model

## [7.0.0-alpha.5](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.4...@empathyco/x-adapter@7.0.0-alpha.5) (2021-10-25)

### Features

- **plugin:** minimise initial duplicated requests using a debounce
- **related-tags:** change the request mapper logic

### Styling

- add pre-commit hooks to run eslint and prettier

## [7.0.0-alpha.4](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.3...@empathyco/x-adapter@7.0.0-alpha.4) (2021-09-22)

**Note:** Version bump only for package @empathyco/x-adapter

## [7.0.0-alpha.3](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.2...@empathyco/x-adapter@7.0.0-alpha.3) (2021-09-15)

### Features

- **search:** save `Redirection`'s entities

## [7.0.0-alpha.2](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.1...@empathyco/x-adapter@7.0.0-alpha.2) (2021-09-10)

### Features

- **adapter:** Add new Extra Params interface to all the current Requests interfaces
- **search:** add origin to the request

## [7.0.0-alpha.1](https://github.com/empathyco/x/compare/@empathyco/x-adapter@7.0.0-alpha.0...@empathyco/x-adapter@7.0.0-alpha.1) (2021-08-24)

### Features

- **request:** update search request type to include the new extra params

## [7.0.0-alpha.0](https://github.com/empathyco/x/compare/@empathyco/x-adapter@6.2.0-alpha.8...@empathyco/x-adapter@7.0.0-alpha.0) (2021-08-11)

### ⚠ BREAKING CHANGES

- **facets-next:** Rename `EmpathyFilterMapper` to `EmpathyFacetFilterMapper`. Response filter
  mappers now map the API value in the `id` filters property. `EmpathyHierarchicalFacetMapper` now
  flattens and stores all the filters in the `filter` property. `EmpathyHierarchicalFacetMapper` now
  only maps filters ids in `HierarchicalFilter` children. Bump up `@empathyco/x-types` major version
  in `@empathyco/x-adapter`.

### Features

- **facets-next:** add support for the new search types in search adapter

## [6.2.0-alpha.8](https://github.com/empathyco/x/compare/@empathyco/x-adapter@6.2.0-alpha.7...@empathyco/x-adapter@6.2.0-alpha.8) (2021-08-05)

**Note:** Version bump only for package @empathyco/x-adapter

## [6.2.0-alpha.7](https://github.com/empathyco/x/compare/@empathyco/x-adapter@6.2.0-alpha.6...@empathyco/x-adapter@6.2.0-alpha.7) (2021-08-05)

**Note:** Version bump only for package @empathyco/x-adapter

## [6.2.0-alpha.6](https://github.com/empathyco/x/compare/@empathyco/x-adapter@6.2.0-alpha.5...@empathyco/x-adapter@6.2.0-alpha.6) (2021-08-03)

### Build System

- Update TypeScript to 4.3.5.Update TSLib to 2.3.5.

## [6.2.0-alpha.5](https://github.com/empathyco/x/compare/@empathyco/x-adapter@6.2.0-alpha.4...@empathyco/x-adapter@6.2.0-alpha.5) (2021-07-29)

### Build System

- use 2 different versions of search-types

## [6.2.0-alpha.4](https://github.com/empathyco/x/compare/@empathyco/x-adapter@6.2.0-alpha.3...@empathyco/x-adapter@6.2.0-alpha.4) (2021-07-28)

**Note:** Version bump only for package @empathyco/x-adapter

## [6.2.0-alpha.3](https://github.com/empathyco/x/compare/@empathyco/x-adapter@6.2.0-alpha.1...@empathyco/x-adapter@6.2.0-alpha.3) (2021-07-27)

**Note:** Version bump only for package @empathyco/x-adapter

## [6.2.0-alpha.2](https://github.com/empathyco/x/compare/@empathyco/x-adapter@6.2.0-alpha.1...@empathyco/x-adapter@6.2.0-alpha.2) (2021-07-20)

**Note:** Version bump only for package @empathyco/x-adapter

## [6.2.0-alpha.1](https://github.com/empathyco/x/compare/@empathyco/x-adapter@6.2.0-alpha.0...@empathyco/x-adapter@6.2.0-alpha.1) (2021-07-20)

### Continuous Integration

- Fix publishing in x-components. Normalize build scripts. [(#46)](https://github.com/empathyco/x/pull/46)

## 6.2.0-alpha.0 (2021-07-14)

### Features

- prepare `search-adapter` for the mono-repo
- update `search-adapter` package information [(#33)](https://github.com/empathyco/x/pull/33)

## 6.1.0 (2020/06/03)

- Add support for optional `children` property in `HierarchicalFilters`.
- Update `@empathy/search-types` to version `9.0.0`.

## 6.0.0 (2020/04/16)

- Add new template config inside the `FacetConfig` model.
- Update `@empathy/search-types` to version `8.0.0-alpha.1` and `@empathy/jest-utils` to
- version `1.3.0`.
- Add new facet mapper `EmpathyBooleanFilterMapper` which maps `selected`, `value`,
- `totalResults` properties removed from `EmpathyFilterMapper`.
- Add `EmpathyBooleanFilterMapper` mapper to `DEPENDENCIES.ResponseMappers.simpleFilter`,
- `DEPENDENCIES.ResponseMappers.hierarchicalFilter`,
- `DEPENDENCIES.ResponseMappers.numberRangeFilter` dependencies.
- Modified `EmpathyRequestFiltersSolrSyntaxMapper` to accept `BooleanFilter` and
- `EditableNumberRangeFilter`.
- Renamed `EmpathyNumberRangeFilter` `value` map to `range`.
- Modified `facets` from `SearchResponse` to make it optional.
- Update `SearchRequest` interface removing the unused `SortDirection` parameter.
- Add `EmpathyRequestSortMapper` mapper.

## 5.0.0 (2020/01/07)

- Add new facet mappers `EmpathyFacetMapper`, `EmpathySimpleFacetMapper`,
- `EmpathyHierarchicalFacetMapper`, and `EmpathyNumberRangeFacetMapper`.
- Add new filter mappers `EmpathyFilterMapper`, `EmpathySimpleFilterMapper`,
- `EmpathyHierarchicalFilterMapper`, and `EmpathyNumberRangeFilterMapper`.
- Replace facet mappers in `DEPENDENCIES.ResponseMappers.facets` with the new ones.
- Remove `DEPENDENCIES.ResponseMappers.filter` dependency.
- Add `DEPENDENCIES.ResponseMappers.simpleFilter`,
- `DEPENDENCIES.ResponseMappers.hierarchicalFilter`,
- `DEPENDENCIES.ResponseMappers.numberRangeFilter` with the new filter mappers.
- Remove `filterDeepness` and `facetName` from `FilterValueMapperParams` interface. Now the
- facet name can be got from the `filter` as `facetId` property.
- Add `FacetModelName` and `FilterModelName` types.
- Replace `filterModelName` prop by `modelName` in the `FacetConfig` interface. Now it has
- the `FacetModelName` type.

## 4.1.0 2020/09/21

- Allow passing headers through the request
- Add `sortDirection` optional parameter to `EmpathySearchRequest` and `SearchRequest`
- Add api-extractor and improve build

## 4.0.0 2020/07/30

- Update `@empathy/get-safe-property-chain`, `@empathy/logger`, `@empathy/storage-service`,
- `@empathybroker/deep-merge` dependencies.
- Change StorageService's localStorage access lazy.
- Add ESM build
- Change next query mapper facets to be an array instead of an object.
- Add optional `addConfigChangedListener` and `removeConfigChangedListener` methods to
- subscribe and unsubscribe to config changes.
- Change default search endpoint from
- `api{env}.empathybroker.com/search/v1/query/{instance}/search` to
- `api{env}.empathybroker.com/search/v1/query/{instance}/searchX`
- Update `@empathy/search-types` to version `5.0.0` and mappers accordingly

## 3.2.2 (2020/06/18)

- Check `rawFilter.value` in `EmpathyRangeFilterMapper` to avoid error

## 3.2.1 (2020/04/14)

- Fix `empathy-facet-mapper` not mapping dynamic filters children property.

## 3.2.0 (2020/03/09)

- Remove warnings about tagging events on production

## 3.1.0 (2020/02/04)

- Add `isWishlisted` field mapping to `mapResult`'s
- Externalized in `empathy-search-request.mapper` the logic of appending related tags to the
- query to a new mapper
- Now `empathy-queryable-request.mapper` uses `empathy-request-related-tags-query.mapper` to
- generate the new query with related tags
- Added new request param mapper `empathy-request-related-tags-query.mapper` which
- concatenates related tags with the query
- Now `QueryableRequest` request type allows optionally related tags
- Add the `rawResponse` to `beforeResponseTransformed`'s hook context

## 3.0.1

- Update `@empathy/get-safe-property-chain`, `@empathy/logger`, `@empathy/search-types` and
- `@empathybroker/deep-merge` to use minor version
- Set a fixed `@empathybroker/eb-tslint` version

## 3.0.0

- Add new entity `showTagging` used for tracking when te response of a feature has been
- displayed to the user.
- Remove first filter auto-selection from `empathy-suggestion-facets.mapper`
- Add `checkout` to `TrackingResultConfig` interface
- Removed `preselected` property
- Added discovery wall features: `getClicksRecommendations`, `getQueriesRecommendations`,
- `getSectionRecommendations`, `getUserRecommendations`

## 2.1.0

- Cache API responses with a configurable TTL per feature and invalidation

## 2.0.0

- Remove `needsParentFilter` and `entityDetected` properties

## 1.1.0

- Fixed hierarchical filters not mapping parent selected property correctly
- Removed `toLowerCase` transformation from `rawResult.name` in `empathy-result.mapper`
- `RecommendationsRequest` now also extends `Partial<QueryableRequest>`
- `EmpathyFilterMapper` now maps selected state to ancestors if it is true.
- Now the filters selected state only relies on the previous filter selected state, not on
- the API response.
- Set `entityDetected` filters property to false, before removing it in a future PR.

## 1.0.2

- Made raw filters selected property optional

## 1.0.1

- Fixed feature-requestor not mapping falsy values

## 1.0.0

- First search adapter version
