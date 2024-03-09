This is a [PlayCraft](https://develop--friendly-liger-e2f2a2.netlify.app/) project bootstrapped with [`Vite`](https://vitejs.dev/).

## Getting Started

First, install `pnpm` package manager that we are using:
```bash
npm install -g pnpm
```
Then, you need to update the dependencies:

```bash
pnpm i
```

And run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code & Git conventions

### Branches

First, you need to set the type of work was done in current branch and the ID number of the task after `/` divider. It might be on of the next:
  - **feature**
  - **task**
  - **bug**
  - **test**
  - **docs**

Then, after divider `-`, you should describe what actually was done in this branch.

Example:
  - `task/01-first_section`

### Commits

You should messaging commits in the next pattern:
 - branch name
 - divider `:`
 - what actually was done in this commit

 Example:
  - `task/01-first_section: first section markup created`

## Libraries

This project based on next libraries:
 - [React](https://reactjs.org/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [TailwindCSS]([https://sass-lang.com/](https://tailwindcss.com/))

## React

To learn React, check out the [React documentation](https://react.dev/).

### Project Structure

We are using Vite template of Project Structure with some changes to make development experience better. All markup files should be created in `.tsx` format and non-markup files in `.ts` format.

#### Top-level folders

 - `public`
 - `src`
 ---`api`
 ---`assets`
 ---`components`
 ---`content`
 ---`context`
 ---`hooks`
 ---`pages`
 ---`styles`
 
### Functional Components

We use functional components pattern in this project. [Docs](https://beta.reactjs.org/learn/describing-the-ui)

### Hooks

We using hooks to provide some additional functionality to components, such as state. [Docs](https://react.dev/reference/react)

## Other Useful links

### Code Style
- [Javascript Best Practices by airbnb](https://github.com/airbnb/javascript)
- [React.js Best Practices by airbnb](https://github.com/airbnb/javascript/tree/master/react)

### Styles Management

- [TailwindCSS DOCS]([https://sass-lang.com/](https://tailwindcss.com/))
- [TailwindCSS Vite Support](https://tailwindcss.com/docs/guides/vite)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
