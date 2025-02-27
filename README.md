# Survey Application

[DEMO LINK](https://survey-app-xi.vercel.app/)

A modern, configurable survey application built with Next.js, Redux, and TypeScript.
It supports multiple extensible and scalable survey configurations with various step types, conditional navigation and collecting user answers.

## Features

- 🚀 Multiple survey configurations
- 📝 Dynamic question rendering
- 🔄 State persistence with Redux
- 🗺️ Conditional Navigation
- 🌐 Responsive design
- 📊 Survey results summary

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: SCSS Modules
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: Next.js App Router

## Project Structure

```bash
src/
├── app/                  # Next.js app router
│   ├── [surveyId]/       # Dynamic survey routes
│   └── page.tsx          # Home page
├── components/           # Reusable components
├── config/               # Configuration files
│   └── surveys/          # Survey configurations
├── hooks/                # Custom hooks
├── store/                # Redux store
├── steps/                # Survey step components
├── types/                # TypeScript types
```
## Getting Started

Clone the repository:

```bash
git clone https://github.com/polosanya/survey-app.git
cd survey-app
```

Install dependencies:

```bash
npm install  # or yarn install
```

Run the development server:

```bash
npm run dev  # or yarn dev
```

Open http://localhost:3000 in your browser.
