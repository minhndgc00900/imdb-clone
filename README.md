# 👨🏽‍💻 Imdb Clone Web
Imdb Clone Web

## 📌 Features
This project is updated with:

- [React 18x](https://reactjs.org)
- React Query
- Redux
- Styled-component
- Eslint

## 🧐 Getting Started

1. Check if your [Node.js](https://nodejs.org/) version is >= 12.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your app on `public/manifest.json`.
5. Create an env setting `cp .env-example .env`.
6. You can use `npm` or `yarn` for  package manager, eg:
- NPM
  - Run `npm install` to install the dependencies.
  - Run `npm start` for development.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/index.ts`. The page auto-updates as you edit the file.

## 🔧 Environment Variables

By default all environment variables loaded through `.env` are only available in the Node.js environment, meaning they won't be exposed to the browser.

In order to expose a variable to the browser you have to prefix the variable with `REACT_APP_.`
