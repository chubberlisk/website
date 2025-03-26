[![CI/CD](https://github.com/chubberlisk/website/actions/workflows/on-main.yml/badge.svg)](https://github.com/chubberlisk/website/actions/workflows/main.yml)

<div align="center">
  <a href="https://github.com/chubberlisk/website">
    <img src="./public/images/icons/icon-512x512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Wen Ting Wang</h3>

  <p align="center">
    A personal website for Wen Ting Wang.
    <br />
    <br />
    <a href="https://wentingwang.co.uk">View Site</a>
    ·
    <a href="https://github.com/chubberlisk/website/issues">Report Bug</a>
  </p>
</div>

## Contents <!-- omit in toc -->

- [About the project](#about-the-project)
  - [Built with](#built-with)
  - [Deployed using](#deployed-using)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the application](#running-the-application)
  - [Running the tests](#running-the-tests)
    - [Running the unit tests](#running-the-unit-tests)
    - [Running the smoke tests](#running-the-smoke-tests)
    - [Running all the tests](#running-all-the-tests)
  - [Running the linter](#running-the-linter)
  - [Running the formatter](#running-the-formatter)
- [License](#license)

## About the project

This is the personal website for Wen Ting Wang,
see [previous version that's built using Gatsby](https://github.com/chubberlisk/chubberlisk.github.io).

### Built with

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Cypress](https://www.cypress.io/)

### Deployed using

- [Vercel](https://vercel.com/)

## Getting started

To get a local copy up and running follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/getting-started)

### Installation

1. Clone the repo

```sh
git clone git@github.com:chubberlisk/website.git
```

2. Install packages in `website` directory

```sh
yarn
```

3. Create a `.env.local` using the `.env.local.sample` and fill in the missing environment variables

```sh
cp .env.local.sample .env.local
```

## Usage

### Running the application

To run the application for local development:

```sh
yarn dev
```

Then visit [http://localhost:3000](http://localhost:3000).

### Running the tests

#### Running the unit tests

To run the unit tests that use [Jest](https://jestjs.io/)
and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/):

```sh
yarn test:unit
```

#### Running the smoke tests

To run the smoke tests using [Cypress](https://www.cypress.io/)'s headless mode:

```sh
yarn test:smoke
# or with a server as well
yarn test:smoke:with-server
```

To interactively run the smoke tests:

```sh
yarn test:smoke:interactive
# or with a server as well
yarn test:smoke:interactive:with-server
```

#### Running all the tests

To run the unit tests and smoke tests

```sh
yarn test
```

### Running the linter

To run linting using [ESLint](https://eslint.org/):

```sh
yarn lint
```

### Running the formatter

To run linting that uses [Prettier](https://prettier.io/):

```sh
yarn format
```

## License

Distributed under the MIT License. See [LICENSE](/LICENSE) for more information.
