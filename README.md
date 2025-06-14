# EdgeAi

This project is a single-page application built with React, Vite, and TypeScript. It serves as a landing page or marketing website, showcasing the features and services of EdgeAi.

## Key Features

- Responsive design
- Internationalization (i18n) support
- Theming capabilities
- Sections for Hero, Brands, Services, About Us, Pricing, and Call to Action

## Running the Project

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd pedrotect-project
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will start the development server, typically at `http://localhost:5173`.

## Available Scripts

The following scripts are available in the `package.json` file:

- **`npm run dev`**: Starts the development server using Vite.
- **`npm run build`**: Builds the project for production. This includes type checking with `tsc` and bundling with Vite.
- **`npm run lint`**: Lints the project files using ESLint.
- **`npm run preview`**: Starts a local server to preview the production build.

## Project Structure

The project follows a standard structure for React applications:

- **`public/`**: Contains static assets, including locales for i18n.
  - **`public/locales/`**: Contains JSON translation files for different languages.
- **`src/`**: Contains the main source code for the application.
  - **`src/assets/`**: Contains static assets like images and icons.
  - **`src/components/`**: Contains reusable UI components.
    - **`src/components/cards/`**: Components specifically designed for card-like layouts.
    - **`src/components/elements/`**: Basic UI elements like buttons, navigation, and footer.
    - **`src/components/sections/`**: Components representing different sections of the landing page (e.g., Hero, Services, About Us).
    - **`src/components/shared/`**: Common/shared components used across the application.
  - **`src/store/`**: Contains state management logic (e.g., Zustand store for theming).
  - **`src/utils/`**: Contains utility functions and constants.
  - **`src/App.tsx`**: The main application component where different sections are laid out.
  - **`src/main.tsx`**: The entry point of the application.
  - **`src/i18n.js`**: Configuration file for i18next.
- **`index.html`**: The main HTML file for the application.
- **`package.json`**: Lists project dependencies and scripts.
- **`vite.config.ts`**: Configuration file for Vite.
- **`tsconfig.json`**: Configuration file for TypeScript.

## Dependencies

The project uses the following main dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **i18next**: An internationalization framework for JavaScript.
  - **`i18next-browser-languagedetector`**: Detects the user's language in the browser.
  - **`i18next-http-backend`**: Loads translation files from a backend or public folder.
  - **`react-i18next`**: React bindings for i18next.
- **Zustand**: A small, fast, and scalable state management solution for React.
- **React Icons**: A library that provides a wide range of popular icons as React components.

## Internationalization (i18n)

The project uses `i18next` for internationalization.

- **Configuration**: The i18n configuration is located in `src/i18n.js`.
- **Translation Files**: Translation files are stored in JSON format in the `public/locales/` directory. Each language has its own subdirectory (e.g., `en` for English, `ar` for Arabic) containing a `translation.json` file.
- **Adding a New Language**:
    1. Create a new subdirectory for the language in `public/locales/` (e.g., `public/locales/fr/`).
    2. Add a `translation.json` file in the new directory with the translated strings.
    3. Update the `lng` option in `src/i18n.js` or allow the language detector to handle it.
- **Using Translations in Components**: The `useTranslation` hook from `react-i18next` is used to access translation strings in components.

  ```typescript jsx
  import { useTranslation } from "react-i18next";

  const MyComponent = () => {
    const { t } = useTranslation();
    return <p>{t("yourStringKey")}</p>;
  };
  ```

## Theming

The project includes basic theming capabilities.

- **Theme Store**: Theme-related state is managed using Zustand in `src/store/ThemeStore.ts`.
- **Tailwind CSS**: Theming is primarily achieved by dynamically applying Tailwind CSS classes.
- **Customization**: To customize the theme, you can:
    - Modify the existing theme logic in `src/store/ThemeStore.ts`.
    - Update the Tailwind CSS configuration (`tailwind.config.js`) to extend or change the default theme (colors, fonts, etc.).
    - Adjust how theme-based classes are applied in the components.

The `Layout.tsx` component might be a good place to start looking into how the theme is applied at a high level, and `index.css` or other CSS files might contain global styles or theme-related CSS variables.
