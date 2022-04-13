# About
This project is something personal and I believe it is ready for production, feel free to use it and make your PR or open a new issue. All contributing are welcome.

# Features
- [x] [**NextJS**](https://nextjs.org/): Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
- [X] [**Redux Toolkit**](https://redux-toolkit.js.org/): The official, opinionated, batteries-included toolset for efficient Redux development
- [X] [**Cypress**](https://www.cypress.io/): The web has evolved. Finally, testing has too. Fast, easy and reliable testing for anything that runs in a browser.
- [X] [**Mui**](https://mui.com/): MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
- [X] [**styled-components**](https://styled-components.com/): Visual primitives for the component age.
Use the best bits of ES6 and CSS to style your apps without stress
- [X] [**next-i18next**](https://github.com/isaachinman/next-i18next): The easiest way to translate your NextJs apps. 
- [X] [**Docker(Dev)**](https://www.docker.com/): Accelerate how you build, share, and run modern applications.
- [X] [**ReactJS**](https://reactjs.org/): A JavaScript library for building user interfaces
- [X] [**SWC**](https://swc.rs/): SWC is an extensible Rust-based platform for the next generation of fast developer tools.

# Install
```
$ git clone https://github.com/RuiGuilherme/nextjs-boilerplate.git
$ cd nextjs-boilerplate

$ yarn 
or
$ npm install

$ yarn dev
or
$ npm run dev
```

#### Docker (Dev)
`$ docker-compose -f "docker-compose.yml" up -d --build`

For production: [with-docker/Dockerfile](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)

The example app is running at: localhost:3000

# Test (Cypress)
`$ yarn cypress:open` or `$ npm run cypress:open`

# Lint and prettier
ESLint: `$ yarn lint` or `$ npm run lint`

prettier: `$ yarn prettier` or `$ npm run prettier`

# Tree
```
├── components
│   ├── Counter.js
│   ├── Footer.js
│   └── Profile.js
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   └── 2 - components
│   │       ├── counter.spec.js
│   │       └── profile.spec.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       └── commands.js
├── cypress.json
├── docker-compose.yml
├── Dockerfile
├── jsconfig.json
├── libraries
├── next.config.js
├── next-i18next.config.js
├── package.json
├── package-lock.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   └── user.js
├── public
│   ├── favicon.ico
│   ├── locales
│   │   ├── en
│   │   │   └── common.json
│   │   ├── es
│   │   │   └── common.json
│   │   └── pt
│   │       └── common.json
│   └── vercel.svg
├── README.md
├── redux
│   ├── slices
│   │   ├── counterSlice.js
│   │   └── userSlice.js
│   └── store.js
├── styles
│   ├── global.css
│   ├── Home.module.css
│   └── theme
│       └── theme.js
└── utils
```

# Author
Rui Guilherme - [Github](https://github.com/RuiGuilherme) | [Linkedin](https://www.linkedin.com/in/rui-guilherme/) | [Gitlab](https://gitlab.com/RuiGuilherme)
