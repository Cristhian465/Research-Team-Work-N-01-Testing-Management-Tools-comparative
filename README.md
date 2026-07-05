# Research Team Work N° 01: Testing Management Tools comparative

This repository contains our team's research and demonstration code comparing three popular CI/CD and Testing Management Tools:
- **GitHub Actions**
- **GitLab CI/CD**
- **Jenkins**

## Contents
- `ARTICLE.md`: The full Dev.to article containing our research, comparison, and conclusions.
- `index.js`: A simple Node.js Express server to serve as a test subject.
- `index.test.js`: Automated tests using Jest and Supertest.
- `.github/workflows/ci.yml`: A fully functional GitHub Actions CI pipeline that automatically tests the code on push and pull requests.

## How to run locally
1. Run `npm install` to install dependencies.
2. Run `npm test` to execute the Jest tests.
3. Run `node index.js` to start the server locally.
