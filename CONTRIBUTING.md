# Contributing to Chess Atlas ♟️

Thank you for your interest in contributing to **Chess Atlas**! Contributions of all sizes are welcome, whether you're interested in improving gameplay, refining 3D environments, reporting bugs, enhancing the user interface, or improving documentation.

Chess Atlas is an immersive 3D chess experience built with React, TypeScript, Three.js, React Three Fiber, Vite, and Stockfish. This guide explains how to set up the project and get involved.

## Getting Started

Before making changes:

- Read the project's [README](README.md) to understand its purpose and features.
- Browse the existing [issues](https://github.com/evapatel123/Chess-Atlas/issues) to check whether your idea or bug has already been discussed.
- For larger changes or new features, open an issue first to discuss your proposal.
- Keep contributions focused and avoid unrelated modifications.

## Development Setup

### Prerequisites

Make sure you have installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### 1. Fork the Repository

Visit the [Chess Atlas repository](https://github.com/evapatel123/Chess-Atlas) and click **Fork** to create your own copy.

### 2. Clone Your Fork

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/Chess-Atlas.git
cd Chess-Atlas
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Making Changes

1. Create a new branch for your work.

   ```bash
   git checkout -b feature/your-feature-name
   ```

   For bug fixes, you can use:

   ```bash
   git checkout -b fix/short-description
   ```

2. Make your changes while keeping them focused on the issue or feature.
3. Follow the existing React, TypeScript, and project coding conventions.
4. Reuse existing components and utilities where appropriate.
5. Avoid unnecessary changes to unrelated files.
6. Update documentation if your changes affect existing functionality or setup instructions.

### Important Project Considerations

**Chess Engine**
- Preserve the existing Stockfish integration and engine initialization behavior.
- Check that the engine loads correctly after making changes to related files.

**3D Environments**
- Changes to shared scene, rendering, or material code may affect multiple environments.
- Check other environments that rely on the same code.

**Performance**
- Be mindful of expensive rendering operations, large assets, and unnecessary animations.
- Avoid introducing performance issues when adding visual effects or new functionality.

**User Experience**
- Keep interface changes consistent with the existing design.
- Consider responsive behavior and usability at different screen sizes.
- Avoid removing existing functionality unless it is necessary for the proposed change.

## Testing Your Changes

Before submitting a pull request, run:

```bash
npm run build
```

This checks whether the application can generate its production build.

You can also preview the production build locally:

```bash
npm run preview
```

If your changes affect gameplay, test the relevant chess interactions. If they affect a 3D environment, verify that the environment still loads and renders correctly.

The current project scripts do not define a separate automated test or lint command.

## Commit Guidelines

Use clear and descriptive commit messages that explain what your changes accomplish.

Examples:

```text
Add environment loading indicator
Fix Stockfish initialization
Improve opponent selection layout
Update project documentation
```

## Submitting a Pull Request

Once your changes are ready:

1. Push your branch to your fork.

   ```bash
   git push -u origin feature/your-feature-name
   ```

2. Open your fork on GitHub.
3. Select **Compare & pull request**.
4. Set the base repository to `evapatel123/Chess-Atlas` and the base branch to `main`.
5. Provide a clear title and description explaining your changes.

### Pull Request Description

Please include the following information:

- **Summary:** What did you change?
- **Motivation:** What issue does your change address?
- **Implementation:** How did you approach the change?
- **Testing:** What did you test, and which commands did you run?
- **Screenshots:** Include screenshots or recordings for visual changes when relevant.
- **Related issue:** Link any relevant issue.

### Pull Request Checklist

Before submitting, make sure:

- [ ] The changes are relevant to the project.
- [ ] The production build completes successfully.
- [ ] Relevant gameplay and environment functionality has been checked.
- [ ] No unrelated files or generated build output have been included.
- [ ] Documentation has been updated when necessary.
- [ ] The pull request description explains the changes and testing performed.

## Reporting Bugs

Found something that isn't working as expected?

Open an issue in the [GitHub Issues section](https://github.com/evapatel123/Chess-Atlas).

When reporting a bug, include:

- A clear title and description.
- Steps to reproduce the issue.
- What you expected to happen.
- What actually happened.
- Your browser and operating system.
- Relevant error messages or screenshots, if available.

Please do not include passwords, private keys, or other sensitive information in issue reports.

## Suggesting Features

Have an idea for improving Chess Atlas?

Feature suggestions are welcome! When opening an issue, explain:

- The problem or opportunity your idea addresses.
- The feature you would like to see.
- How it could improve the Chess Atlas experience.
- Any examples, screenshots, or references that help explain your idea.

## Community Guidelines

Please help maintain a respectful, welcoming, and constructive development environment.

- Be respectful when discussing ideas and reviewing contributions.
- Provide constructive feedback.
- Welcome contributors with different experience levels.
- Keep discussions relevant and focused on improving the project.
- Be open to suggestions and alternative approaches.

## Thank You!

Every thoughtful contribution helps Chess Atlas improve.

Whether you're reporting a bug, suggesting an idea, improving documentation, or submitting code, thank you for taking the time to help make Chess Atlas better!

**Happy coding, and enjoy exploring Chess Atlas!** ♟️
