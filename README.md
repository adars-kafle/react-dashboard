### Project Overview

This project is a simple supplier management system built with React, TypeScript, and Material-UI. It allows you to manage suppliers, products, and orders. It is integrated with a backend API built with FastAPI and Postgres for storing data.

### Features

- **Authentication**: Login and signup. (cookies are used for authentication)
- **Supplier Management**: Add, edit, and delete suppliers.

### Directory Structure

```
react-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Authentication/
│   │   │   ├── LoginPage.tsx
│   │   │   └── SignupPage.tsx
│   │   ├── ErrorBoundary/
│   │   │   └── index.tsx
│   │   ├── LazyComponents/
│   │   │   └── index.tsx
│   │   ├── Layouts/
│   │   │   └── DashboardLayout/
│   │   │       ├── components/
│   │   │       │   ├── CustomAppBar.tsx
│   │   │       │   ├── CustomDrawer.tsx
│   │   │       │   └── MenuItems.tsx
│   │   │       ├── index.tsx
│   │   │       └── styles.ts
│   │   ├── Loading/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── ProtectedRoute.tsx
│   ├── config/
│   │   ├── api.ts
│   │   └── routes.ts
│   ├── constants/
│   │   ├── errorMessages.ts
│   │   ├── keys.ts
│   │   ├── modules.ts
│   │   ├── regex.ts
│   │   └── widths.ts
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useSupplier.ts
│   │   └── useSupplierModal.ts
│   ├── interfaces/
│   │   ├── auth.ts
│   │   ├── modules.ts
│   │   ├── routes.ts
│   │   ├── supplier.ts
│   │   └── ui.ts
│   ├── pages/
│   │   ├── Dashboard/
│   │   │   ├── index.tsx
│   │   │   └── styles.tsx
│   │   ├── NotFound/
│   │   │   └── index.tsx
│   │   └── Suppliers/
│   │       ├── components/
│   │       │   ├── SupplierHeader.tsx
│   │       │   ├── SupplierModal.tsx
│   │       │   ├── SupplierTable.tsx
│   │       │   └── supplierTableStyles.ts
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── routes/
│   │   └── Routes.tsx
│   ├── schemas/
│   │   ├── authSchema.ts
│   │   └── supplierSchema.ts
│   ├── services/
│   │   ├── api.ts
│   │   ├── authServices.ts
│   │   └── supplierServices.ts
│   ├── theme/
│   │   └── theme.ts
│   ├── utils/
│   │   ├── devLogger.ts
│   │   ├── errorHandlers.ts
│   │   ├── json.ts
│   │   ├── lazyLoad.ts
│   │   ├── storage.ts
│   │   └── toaster.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Installation Procedure:

1. Clone the repository:

```
git clone git@github.com:adars-kafle/react-dashboard.git
```

2. Navigate to project direcotry:

```
cd react-dashboard
```

3. Install dependencies:

```
npm install
```

4. Create a `.env` file in the root directory and add the following:

```
# API URL
VITE_API_URL=http://localhost:8000/api

# Node Environment
VITE_APP_ENV=development
```

5. Run the development server:

```
npm run dev
```

### Technology Stack

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Material-UI: A popular React UI framework for building modern and responsive web applications.
- React Query: A data fetching library for React.
- Axios: A popular HTTP client for making API requests.
- React Hook Form: A library for building forms in React.
- Zod: A TypeScript-first schema validation library (for schema validation).
- React Toastify: A library for displaying toast notifications.

### Additional Notes

- The project uses a custom error boundary component for handling errors.

- Lazy loading is implemented for some components to improve performance.

- The application includes a responsive dashboard layout with a sidebar and app bar.

- API calls are centralized in the services directory, using Axios for HTTP requests.

- Form validation is handled using Zod schemas.

- The project includes custom hooks for managing suppliers and authentication state.

- The project uses React Query for data fetching and caching.

- The project uses React Context for managing authentication state.

- The project includes custom hooks for managing suppliers and authentication state.
