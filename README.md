# Test Hackathon Project

مشروع تجريبي لاختبار ميزة Clean Code Evaluation في نظام Quantum Hackathon.

## Features

- Automatic ESLint code quality checking
- GitHub Actions integration
- Clean Code scoring system

## Project Structure

```
.
├── index.js          # Main file with intentional errors
├── app.js            # Secondary file with issues
├── package.json      # Dependencies
├── .eslintrc.json    # ESLint configuration
└── .github/
    └── workflows/
        └── clean-code.yml  # GitHub Actions workflow
```

## Expected Issues

This project contains intentional code issues for testing:
- Unused variables/functions (ESLint errors)
- Console statements (ESLint warnings)
- Missing semicolons (ESLint errors)

## Expected Clean Code Score

Approximately **70-80/100** based on:
- Multiple errors (-5 points each)
- Multiple warnings (-2 points each)

## How to Test

1. Push this repository to GitHub
2. Wait for GitHub Actions to complete
3. Submit the repository URL to the hackathon system
4. Check the Clean Code score in Admin/Judge dashboard

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run lint
```

This will show all ESLint issues found in the code.
