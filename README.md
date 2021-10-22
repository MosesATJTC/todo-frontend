# Boilerplate Next + TypeScript

## Features

- **Next JS** - an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.
- **TypeScript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
- **Imporve SEO** - Using Next.js will improve your SEO result a lot.
- **Babel** - The compiler for next generation JavaScript.
- **ESLint** - ESLint statically analyzes your code to quickly find problems
- **Jest** - Javascript testing framework , created by developers who created React.
- **React Testing Library** - Simple and complete React DOM testing utilities that encourage good testing practices.
- **Sentry** - Sentry is Open-source error tracking that helps developers to monitor, fix crashes in real time.
- **next-i18next** - An internationalization-framework which helps you to add language translation support to your app.
- **Incorporated BaseWeb** - Base is a design system comprised of modern, responsive, living components. Base Web is the React implementation of Base.
- **Incorporated Formik** - Formik is the world's most popular open source form library for React and React Native.
- **Storybook** - An open source tool for developing UI components in isolation for React.
- **Deployment** - Continous deployment over Vercel platform from the creators of Next.js. Vercel is a cloud platform for static sites, hybrid apps, and Serverless Functions.

## Development server

Run `npm run dev` for a dev server. Navigate to http://localhost:8080/. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the dist/ directory.

## Sentry

Setup sentry for the real time application monitoring. Setup the sentry by providing these entries manually inside the configuration.

- ` public.sentryDSN``String ` - API key for [Sentry](https://docs.sentry.io/)
- ` public.sentryENV``String ` - Environment for [Sentry](https://docs.sentry.io/)

## Storybook

Added [Storybook](https://storybook.js.org/docs/react/get-started/introduction) run `npm run storybook` to check component in isolation on `http://localhost:6006/`.

## Linting

Added Linting using eslint Run `npm run lint` to run linting

## Unit test

Added Unit testing using Jest, Enzyme Run `npm run test` to run test cases.
