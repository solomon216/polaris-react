# Unreleased changes

Use [the changelog guidelines](https://git.io/polaris-changelog-guidelines) to format new entries. 💜

---

### Enhancements

### Bug fixes

### Documentation

### Development workflow

- Replaced our home-grown playground with Storybook (still acccessed through `yarn dev`) ([#768](https://github.com/Shopify/polaris-react/pull/768))
- Removed our usage of babel-node for build scripts - use plain node instead ([#836](https://github.com/Shopify/polaris-react/pull/836))

### Dependency upgrades

### Code quality

- Upgraded the `Banner`, `Card`, and `Modal` components from legacy context API to use createContext ([#786](https://github.com/Shopify/polaris-react/pull/786))
- Refactored `Frame` and its subcomponents to use the `createContext` API instead of legacy context ([#803](https://github.com/Shopify/polaris-react/pull/803))
