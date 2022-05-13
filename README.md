# Boilerplate Next.js + Sanity Studio Monorepo

This is an opinionated starter monorepo for a Next.js web frontend and self-hosted Sanity Studio CMS. Provided free of charge by [Day Job Studios Inc.](https://dayjob.work/) in the hopes it saves you an afternoon.

Contributions and questions are welcome :-]

## Apps and Packages

- `web`: [Next.js](https://nextjs.org/) app
- `cms`: [Sanity Content Studio](https://www.sanity.io/studio/) self-hosted CMS
- `eslint-config-custom`: [eslint](https://eslint.org/) configurations (including `eslint-config-next` and `eslint-config-prettier`)
- `prettier`: [prettier](https://prettier.io/) configuration used throughout the monorepo
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `commitlint`: [Commitlint](https://commitlint.js.org/) lints commit messages to a standard convention

Each subpackage is for the most part written in [TypeScript](https://www.typescriptlang.org/).

## Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting
- [Stylelint](https://stylelint.io/) for CSS linting (with predefined rules)
- [Tailwind CSS](https://tailwindcss.com/) famously mis-(used/understood) CSS framework (with predefined rules)
- [Lodash](https://lodash.com/) famously mis-(used/understood) JS utility library

## Setup

This project uses [pnpm](https://pnpm.io/) for dependency management, be sure to install it before getting up and running. Also, remember to do a search-and-replace for all instances of `replace-me` with project-specific details.

While it's not required, this codebase caters to [Visual Studio Code](https://code.visualstudio.com/).

To install all the project's dependencies, run the following command:

```sh
pnpm i
```

### Build

To build all apps and packages, run the following command:

```sh
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```sh
pnpm run dev
```
