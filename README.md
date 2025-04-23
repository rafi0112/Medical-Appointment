# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# React Project Setup Guide

This guide will help you set up a React project with all necessary dependencies for the components shown in your code.

## Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn
- Git (optional)

## Project Setup

### 1. Create React App
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
```
### 2. Install React Router
```
npm install react-router-dom
```
### 3. React Toastify (for notifications)
```
npm install react-toastify
```

### 4. SweetAlert2 (for beautiful alerts)
```
npm install sweetalert2 react-sweetalert2
```
### 5. React Visibility Sensor (for scroll animations)
```
npm install react-visibility-sensor
```

### 6.React Tabs (for tabbed interfaces)
```
npm install react-tabs
```

### 7.React Icons (for icon library)
```
npm install react-icons
```

### 8. React CountUp (for number animations)
```
npm install react-countup
```
### 9. Recharts (for data visualization)
```
npm install recharts
```
### 10. Tailwind CSS (vite)
```
npm install tailwindcss @tailwindcss/vite
```
  #### Configure @tailwindcss/vite plugin to your Vite configuration.
  ```
  import { defineConfig } from 'vite'
  import tailwindcss from '@tailwindcss/vite'
  export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
  })
  ```
  #### Add an @import to your CSS file that imports Tailwind CSS.
  ```
  @import "tailwindcss";
  ```
### Run 
```
npm run dev
```
### Build
```
npm run build
```
