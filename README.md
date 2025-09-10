# 🌦️ Weather App

> A modern, responsive weather application built with React, TypeScript, and Tailwind CSS. This project demonstrates enterprise-level component architecture and modern frontend development practices.

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen?style=for-the-badge)](https://hack-weather-app.netlify.app/)
[![Frontend Mentor](https://img.shields.io/badge/Challenge-Frontend%20Mentor-blue?style=for-the-badge)](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49)

## 📋 Table of Contents

- [🌦️ Weather App](#️-weather-app)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🚀 Getting Started](#-getting-started)
  - [🧪 Code Quality](#-code-quality)

## ✨ Features

### Core Functionality

- 🔍 **Smart Location Search** - Find weather data for any city worldwide
- 🌡️ **Current Weather Display** - Real-time temperature, conditions, and weather icons
- 📊 **Detailed Metrics** - Feels like temperature, humidity, wind speed, and precipitation
- 📅 **7-Day Forecast** - Daily weather predictions with high/low temperatures
- ⏰ **Hourly Forecast** - 24-hour temperature and condition tracking
- 📆 **Day Selector** - Browse hourly forecasts for different days

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework

### Development Tools

- **ESLint** - Code linting with modern rules
- **Prettier** - Code formatting
- **Husky** - Git hooks for code quality
- **lint-staged** - Run linters on staged files
- **Commitlint** - Conventional commit messages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Fixito/weather-app.git
cd weather-app

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
pnpm typecheck    # Run TypeScript type checking
```

## 🧪 Code Quality

### Automated Quality Checks

- **Pre-commit hooks** validate code before commits
- **Conventional commits** ensure consistent commit messages
- **Type checking** prevents runtime errors
- **Linting rules** enforce consistent code style
- **Auto-formatting** maintains code consistency

---

_This project was created as a solution to the [Frontend Mentor Weather App Challenge](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). It demonstrates modern React development practices and enterprise-level component architecture._
