![CI](https://github.com/chubberlisk/website/workflows/CI/badge.svg)

<p align="center">
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
</p>

## Contents

- [About the project](#about-the-project)
  - [Built with](#built-with)
  - [Deployed using](#deployed-using)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## About the project

This is the personal website for Wen Ting Wang. Originally, it served as an informal CV and portfolio but currently a rebuild is underway for the second time.

For the repository of the previous version of the website: https://github.com/chubberlisk/chubberlisk.github.io.

For the previous version of the website: <a href="https://chubberlisk.github.io">https://chubberlisk.github.io</a>.

### Built with

- [NextJS](https://nextjs.org/)
- [Cypress](https://www.cypress.io/)

### Deployed using

- [Vercel](https://vercel.com/)

## Getting started

To get a local copy up and running follow these simple steps.

### Prerequisites

- [NodeJS](https://nodejs.org/en/)
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

## Usage

### Running the application

To run the application for local development:

```sh
yarn dev
```

Then visit [http://localhost:3000](http://localhost:3000).

### Running the tests

To run just the end-to-end tests using [Cypress](https://www.cypress.io/):

```sh
yarn test:e2e
```

To interactively run the end-to-end tests:

```sh
yarn test:e2e:interactive
```

### Running the formatter

To run formatting using [Prettier](https://prettier.io/):

```sh
yarn format
```

### Running the linter

To run linting using [ESLint](https://eslint.org/):

```sh
yarn lint
```

## License

Distributed under the MIT License. See [LICENSE](/LICENSE) for more information.
