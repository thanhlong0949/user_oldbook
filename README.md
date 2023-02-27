# Next-js Core

## Install dependencies

1. Install Node version 16
2. Install npm
3. Install dependencies
   `npm install`

## Local Develop

1. Cope file `.env.development` to `.env.development.local`
2. Edit `.env.development.local` file to fit environment
3. `npm run dev`

## Run production

1. Build using `npm run build`
2. Run production `npm run start`

## Run production with Docker

1. Build your container: `docker-compose build`
2. Run your container: `docker-compose up`

## Documentation

2. Formik Docs `https://formik.org/docs/overview`
3. React-query Docs `https://react-query.tanstack.com/overview`
4. Ant Design Docs `https://ant.design/components/overview/`
5. Sass Docs `https://sass-lang.com/documentation`
6. Axios Docs `https://axios-http.com/docs/intro`
7. React Docs `https://reactjs.org/docs/getting-started.html`
8. Next.js Docs `https://nextjs.org/docs`
9. Moment.js Docs `https://momentjs.com/docs/`
10. Lodash Docs `https://lodash.com/docs/`
11. Redux Docs `https://redux.js.org/introduction/getting-started`
12. Yup Docs `https://github.com/jquense/yup`
13. React i18next Docs `https://react.i18next.com/`
14. Redux toolkit Docs `https://redux-toolkit.js.org/usage/usage-guide`

# Plugins

1. Prettier `https://plugins.jetbrains.com/plugin/10456-prettier`
2. i18n support `https://plugins.jetbrains.com/plugin/12981-i18n-support`

# Team

- `@nguyenhung`

## Development rules

1. Never use branch master for anything
2. Only work on branch you in charge of
3. Always merge develop to your branch before commit
4. Run `npm run pre-commit` to check if your code have any problem before commit
5. Must clean code before create merge request

## TODO

1. Create code style schemas
2. Build a login page
