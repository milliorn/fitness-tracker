# Changelog

## [2.7.0](https://github.com/milliorn/fitness-tracker/compare/v2.6.0...v2.7.0) (2025-12-01)


### Features

* **auth,register:** connect register form to Better Auth; disable auto sign-in ([#66](https://github.com/milliorn/fitness-tracker/issues/66)) ([fe6f030](https://github.com/milliorn/fitness-tracker/commit/fe6f0308c8fc1a1f8d75114e7cd10758e5615a0c))

## [2.6.0](https://github.com/milliorn/fitness-tracker/compare/v2.5.0...v2.6.0) (2025-12-01)


### Features

* **auth-client:** initialize Better Auth React client; add usage refs ([#64](https://github.com/milliorn/fitness-tracker/issues/64)) ([b36aec5](https://github.com/milliorn/fitness-tracker/commit/b36aec56e2a18886c933fe0f2fc69c15bf4b7493))

## [2.5.0](https://github.com/milliorn/fitness-tracker/compare/v2.4.0...v2.5.0) (2025-12-01)


### Features

* **auth,api:** enable email/password and wire Next.js auth route ([#62](https://github.com/milliorn/fitness-tracker/issues/62)) ([bd2daa7](https://github.com/milliorn/fitness-tracker/commit/bd2daa762717ca4ade44cd63565806d6024ba5ab))

## [2.4.0](https://github.com/milliorn/fitness-tracker/compare/v2.3.0...v2.4.0) (2025-11-26)


### Features

* **auth:** integrate Better Auth with better-sqlite3 via shared db module ([#60](https://github.com/milliorn/fitness-tracker/issues/60)) ([d5e0a18](https://github.com/milliorn/fitness-tracker/commit/d5e0a18b1e618b24bfff69dda6b93d63090f6bf5))

## [2.3.0](https://github.com/milliorn/fitness-tracker/compare/v2.2.0...v2.3.0) (2025-11-24)


### Features

* **auth:** scaffold Better Auth and minimal auth instance ([#58](https://github.com/milliorn/fitness-tracker/issues/58)) ([d1838a0](https://github.com/milliorn/fitness-tracker/commit/d1838a09941cbace48a5ae6b44a86baea944b720))

## [2.2.0](https://github.com/milliorn/fitness-tracker/compare/v2.1.0...v2.2.0) (2025-11-21)


### Features

* **app:** add PWA manifest and dynamic metadata ([#55](https://github.com/milliorn/fitness-tracker/issues/55)) ([969108a](https://github.com/milliorn/fitness-tracker/commit/969108af77820537e8959f8e6c2af6bfb159811f))

## [2.1.0](https://github.com/milliorn/fitness-tracker/compare/v2.0.0...v2.1.0) (2025-11-16)


### Features

* **ui:** add Home h1; tighten a11y checks in Cypress ([#51](https://github.com/milliorn/fitness-tracker/issues/51)) ([7365a58](https://github.com/milliorn/fitness-tracker/commit/7365a589b4afd6283f8191631b94cfcaf2157da1))

## [2.0.0](https://github.com/milliorn/fitness-tracker/compare/v1.5.0...v2.0.0) (2025-11-14)


### ⚠ BREAKING CHANGES

* **ui,auth:** register page CTA selector changed to `data-cy="login-cta"` (was `login-link`)

### Code Refactoring

* **ui,auth:** add AuthCta, simplify BackToHome, style Home card ([#49](https://github.com/milliorn/fitness-tracker/issues/49)) ([f25edaa](https://github.com/milliorn/fitness-tracker/commit/f25edaa2f4f7271d622f7b39faf6d5e25072e99f))

## [1.5.0](https://github.com/milliorn/fitness-tracker/compare/v1.4.0...v1.5.0) (2025-11-12)


### Features

* **auth,ui:** add AuthLayout and BackToHome ([#46](https://github.com/milliorn/fitness-tracker/issues/46)) ([2ccce48](https://github.com/milliorn/fitness-tracker/commit/2ccce485a8428dfb2d6652513dadab2b59fe2ae6))

## [1.4.0](https://github.com/milliorn/fitness-tracker/compare/v1.3.0...v1.4.0) (2025-11-11)


### Features

* **auth:** add register page; restyle layout; align back button ([#44](https://github.com/milliorn/fitness-tracker/issues/44)) ([99aa6b4](https://github.com/milliorn/fitness-tracker/commit/99aa6b467310b7df6bfad7e9243e5f4fff6d91b4))

## [1.3.0](https://github.com/milliorn/fitness-tracker/compare/v1.2.0...v1.3.0) (2025-10-29)


### Features

* **ui:** add login page and convert homepage CTAs to real links ([#32](https://github.com/milliorn/fitness-tracker/issues/32)) ([e9ea713](https://github.com/milliorn/fitness-tracker/commit/e9ea7137a115be8a7219a366202a9007fe946f28))

## [1.2.0](https://github.com/milliorn/fitness-tracker/compare/v1.1.2...v1.2.0) (2025-10-25)

### Features

- **ui:** add login page and default dark theme ([#30](https://github.com/milliorn/fitness-tracker/issues/30)) ([600e621](https://github.com/milliorn/fitness-tracker/commit/600e621edd0b273822a253a892723f23ab88b06d))

## [1.1.2](https://github.com/milliorn/fitness-tracker/compare/v1.1.1...v1.1.2) (2025-10-22)

### Performance Improvements

- **homepage:** responsive Avatar srcset/sizes with lazy decode ([#28](https://github.com/milliorn/fitness-tracker/issues/28)) ([ad5013a](https://github.com/milliorn/fitness-tracker/commit/ad5013afbe9423faf12590d691a64256cdf145af))

## [1.1.1](https://github.com/milliorn/fitness-tracker/compare/v1.1.0...v1.1.1) (2025-10-13)

### Bug Fixes

- **homepage:** add avatar border and adjust hero spacing ([#23](https://github.com/milliorn/fitness-tracker/issues/23)) ([9376f4d](https://github.com/milliorn/fitness-tracker/commit/9376f4d2bb8a54c29feb492092117f9ce4a672b6))

## [1.1.0](https://github.com/milliorn/fitness-tracker/compare/v1.0.0...v1.1.0) (2025-10-11)

### Features

- **homepage:** add MUI Avatar logo and Box layout ([#19](https://github.com/milliorn/fitness-tracker/issues/19)) ([3d4a33c](https://github.com/milliorn/fitness-tracker/commit/3d4a33cb6f608a525890e77d3502987672f3567b))

### Bug Fixes

- **build:** adopt Release Please; remove semantic-release + config ([#20](https://github.com/milliorn/fitness-tracker/issues/20)) ([068b604](https://github.com/milliorn/fitness-tracker/commit/068b604652408712c6be53b8e71f0d204b78a924))

## 1.0.0 (2025-10-09)

### Features

- **app:** integrate MUI AppRouterCacheProvider, enhance login/register UI, update README links ([#15](https://github.com/milliorn/fitness-tracker/issues/15)) ([996fc2d](https://github.com/milliorn/fitness-tracker/commit/996fc2d192be7f382a18732f579a2579f8cf8d29))
