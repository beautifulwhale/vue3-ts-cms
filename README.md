# vue3-ts-cms

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

#项目结构
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   └── base.css
│   │   └── image
│   │       ├── login-bg.svg
│   │       └── logo.svg
│   ├── base-ui
│   │   ├── bread-crumb
│   │   │   ├── my-breadCrumb.vue
│   │   │   └── type.ts
│   │   ├── form
│   │   │   └── src
│   │   │       ├── my-form.vue
│   │   │       └── type.ts
│   │   ├── my-card
│   │   │   └── my-card.vue
│   │   ├── my-chart
│   │   │   ├── index.ts
│   │   │   ├── map
│   │   │   │   └── china.json
│   │   │   └── src
│   │   │       └── my-chart.vue
│   │   └── table
│   │       └── my-table.vue
│   ├── components
│   │   ├── nav-head
│   │   │   ├── nav-head.vue
│   │   │   └── user-info.vue
│   │   ├── nav-menu
│   │   │   └── nav-menu.vue
│   │   ├── page-chart
│   │   │   ├── src
│   │   │   │   ├── bar-chart.vue
│   │   │   │   ├── line-chart.vue
│   │   │   │   ├── map-chart.vue
│   │   │   │   ├── pie-chart.vue
│   │   │   │   └── rose-chart.vue
│   │   │   ├── type.ts
│   │   │   └── utils
│   │   │       ├── convertData.ts
│   │   │       └── coordinateData.ts
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-content.vue
│   │   ├── page-modal
│   │   │   └── page-modal.vue
│   │   └── page-search
│   │       ├── index.ts
│   │       └── src
│   │           └── page-search.vue
│   ├── global
│   │   ├── index.ts
│   │   ├── register-element.ts
│   │   └── register-properties.ts
│   ├── hooks
│   │   ├── use-chart.ts
│   │   ├── use-page-search.ts
│   │   ├── usePermissions.ts
│   │   └── userPageModal.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── dashboard.ts
│   │       │   └── overview
│   │       │       └── overview.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── category.ts
│   │       │   └── goods
│   │       │       └── goods.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── chat.ts
│   │       │   └── list
│   │       │       └── list.ts
│   │       └── system
│   │           ├── department
│   │           │   └── department.ts
│   │           ├── menu
│   │           │   └── menu.ts
│   │           ├── role
│   │           │   └── role.ts
│   │           └── user
│   │               └── user.ts
│   ├── service
│   │   ├── analysis
│   │   │   ├── dashboard.ts
│   │   │   └── type.ts
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── type.ts
│   │   ├── request
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   └── system
│   │       ├── system.ts
│   │       └── type.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── analysis
│   │   │   ├── dashboard.ts
│   │   │   └── type.ts
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── type.ts
│   │   ├── rootType.ts
│   │   └── system
│   │       ├── system.ts
│   │       └── type.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── format-time.ts
│   │   └── map-menu-routes.ts
│   └── views
│       ├── Login
│       │   ├── Login.vue
│       │   ├── config
│       │   │   └── acount-config.ts
│       │   └── cpns
│       │       ├── account-login.vue
│       │       └── phone-login.vue
│       ├── main
│       │   ├── Main.vue
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   └── dashboard.vue
│       │   │   └── overview
│       │   │       └── overview.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   └── category.vue
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   └── goods-content.ts
│       │   │       └── goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── chat.vue
│       │   │   └── list
│       │   │       └── list.vue
│       │   └── system
│       │       ├── department
│       │       │   └── department.vue
│       │       ├── menu
│       │       │   ├── config
│       │       │   │   └── conten-config.ts
│       │       │   └── menu.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── content-config.ts
│       │       │   │   ├── modal-config.ts
│       │       │   │   └── search-config.ts
│       │       │   └── role.vue
│       │       └── user
│       │           ├── config
│       │           │   ├── content-config.ts
│       │           │   ├── modal-config.ts
│       │           │   └── search-config.ts
│       │           └── user.vue
│       └── not-found
│           └── not-found.vue
├── tsconfig.json
└── vue.config.js
