# Reef UI Kit

Reef's UI library of components, assets, and helpers.

The project includes:
- A development environment for isolated component testing.
- An example view showcasing all components and their usage.

---

## 🛠️ Setup

```bash
yarn install
```

> ⚠️ Make sure you're using **Yarn 4**. If not, run:
```bash
corepack enable
corepack prepare yarn@4.9.2 --activate
```

---

## 🚀 Development

```bash
yarn dev
```

---

## 🏗️ Build

```bash
yarn build
```

> ℹ️ `yarn build` requires dependencies to be installed first. Run `yarn install` beforehand.

---

## 🌐 Build showcase page

```bash
yarn showcase
```

---

## 📦 Yarn 4 & Native ESM support

From this release:

- The project uses **native ES modules** (`"type": "module"` in `package.json`).
- `vite.config.ts` is exported via `export default`.
- The plugin `vite-plugin-checker` is still used for TypeScript checks (ESLint runtime checks are disabled).
- ESLint 9 support has been added with updated configuration.

> After cloning the repository, always run:
```bash
yarn install
```

---

## 🧹 Lint & Formatting

### Run lint checks:
```bash
yarn lint
```

### Automatically fix errors:
```bash
yarn lint:fix
```

> The `.eslintignore` file is no longer supported. File exclusions should be defined using the `ignores` property in `eslint.config.js`.

---

## 🧪 React duplication (in local development)

When `@reef-chain/ui-kit` is used as a local dependency in another project, it may cause conflicts due to duplicate copies of React. To fix:

1. In the main project:
   ```bash
   cd node_modules/react
   yarn link
   ```

2. In the UI Kit folder:
   ```bash
   cd node_modules/@reef-chain/ui-kit
   yarn link react
   ```

These steps may need to be repeated when managing dependencies.

---

## 🧾 Versioning

A push to the `master` branch will:

- Deploy the showcase site,
- Publish the package to the npm registry,
- Tag the commit with the new version.

Refer to the conventional commit message guide to trigger version updates.

---

## ✅ Main Versions

| Tool         | Version         |
|--------------|-----------------|
| Node.js      | >= 20.19.0      |
| Yarn         | 4.9.2           |
| TypeScript   | ^5.8.3          |
| ESLint       | ^9.28.0         |
| Vite         | ^6.3.5          |
