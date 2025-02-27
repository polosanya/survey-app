# Survey Application

[DEMO LINK](https://survey-app-xi.vercel.app/)

A modern, configurable survey application built with Next.js, Redux, and TypeScript.

## Features

- 🚀 Multiple survey configurations
- 📝 Dynamic question rendering
- 🔄 State persistence with Redux
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
