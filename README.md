# Chess Atlas ♟️

## About the Project

Chess Atlas is an immersive 3D chess experience designed to bring a new dimension to the traditional game of chess. Instead of limiting players to a conventional chessboard, the project transforms each match into an experience shaped by distinctive environments, individual opponents, and interactive gameplay.

The project combines chess strategy with 3D environment design, animation, and game development to create an experience where the atmosphere surrounding a match is just as thoughtfully designed as the game itself.

Players can explore different locations, encounter opponents with their own personalities and playing styles, and develop their chess skills through guided gameplay.

## 💡 Inspiration

Chess is a game built around strategy, patience, and anticipating what happens several moves ahead. However, many digital chess experiences focus primarily on the board itself, leaving relatively little room for environmental storytelling or a sense of progression.

I wanted to explore what chess could look like if it were treated as more than a board game.

That idea became Chess Atlas: an attempt to combine the strategic depth of traditional chess with the atmosphere and exploration found in immersive video games.

I was particularly interested in creating environments that gave each match its own identity. Rather than simply changing the appearance of the board, I wanted different locations to feel like distinct places within a larger world. The opponents also contribute to that experience, with individual personalities, dialogue, and playing styles that make each encounter feel different.

Ultimately, Chess Atlas became an opportunity to experiment with the intersection of software engineering, interactive design, 3D graphics, and game development while building something around a familiar game.

## ✨ Features

### 🌍 A Collection of Immersive Environments

Chess Atlas features multiple handcrafted 3D environments, each designed to establish a different atmosphere for gameplay. Locations such as the Jade Temple and Observatory provide distinct visual settings, incorporating environmental details, materials, lighting, and decorative elements.

Each environment is designed to make moving between matches feel like entering a different part of the Chess Atlas world.

### ♟️ Opponents With Distinct Personalities

Rather than presenting players with anonymous computer opponents, Chess Atlas introduces a roster of individual characters. Each opponent has their own name, personality, introductory dialogue, and post-game reactions.

Their different chess-playing styles and difficulty levels also create a progression system in which players can gradually challenge themselves against increasingly demanding opponents.

### 🧠 Stockfish-Powered Chess Gameplay

The project integrates Stockfish, a powerful chess engine, to provide computer-controlled gameplay and strategic decision-making.

Integrating the engine into the application required coordinating the chess engine with the frontend, handling its loading process, and ensuring that gameplay could communicate with the engine correctly.

### 📚 Interactive Chess Learning

Chess Atlas includes guided chess lessons that help players understand moves, recognize strategic opportunities, and practice fundamental concepts.

The goal is to make the experience useful for both players who are developing their chess skills and those who simply want to enjoy a more interactive way to play.

### 🎨 Detailed Visual Design and Animations

The experience incorporates 3D models, custom materials, lighting, environmental effects, transitions, and animations.

These elements work together to create a cohesive visual experience rather than treating the chessboard as an isolated component.

### 🏆 Progression and Gameplay Customization

Players can work through different opponents and configure gameplay preferences. This adds a sense of progression while allowing the experience to accommodate different playing preferences.

## 🧩 Challenges & Technical Problem-Solving

Developing Chess Atlas involved more than implementing chess rules and designing a user interface. Some of the most interesting challenges came from bringing together multiple systems that needed to work reliably within the same application.

### 1. Integrating a Chess Engine

One of the more challenging aspects was integrating Stockfish into the existing application. The engine required its own JavaScript and WebAssembly assets, which introduced additional considerations around module imports, asset paths, and loading behavior.

Troubleshooting engine initialization helped me better understand how browser-based applications handle external engine resources and how build tools such as Vite resolve imported assets.

### 2. Managing Complex 3D Environments

Creating multiple environments introduced challenges involving scene preparation, materials, textures, lighting, and rendering.

Some environments also required substantial preparation before they could be displayed. This made loading performance an important consideration, particularly when switching between locations.

I worked on investigating environment-loading bottlenecks and resolving errors in the scene-generation code so that environment-specific features could initialize correctly.

### 3. Debugging Interconnected Systems

Because the project combines several technologies, an issue in one part of the application could affect seemingly unrelated functionality.

For example, missing imports and configuration references in shared scene-rendering code caused errors in multiple environments. Debugging these issues required tracing errors through the application rather than treating each environment as an entirely separate problem.

### 4. Balancing Visual Quality and Performance

An immersive visual experience requires detailed environments, textures, animations, and lighting. However, these elements also introduce performance and loading considerations.

One of the ongoing engineering considerations was finding a balance between maintaining the visual quality of each environment and ensuring that the application remained responsive.

### 5. Preparing the Project for Production

Moving from a development environment to a publicly accessible application introduces another set of challenges.

The project uses Vite and relies on several external assets and dependencies. Preparing it for deployment involves checking production builds, verifying asset paths, and ensuring that resources such as Stockfish load correctly after deployment.

## 🛠️ Technology Stack

- **React** — Component-based application interface.
- **TypeScript** — Typed application logic.
- **Three.js** — 3D rendering and scene creation.
- **React Three Fiber** — Integration of Three.js with React.
- **Vite** — Development server and production build tooling.
- **Stockfish** — Chess engine integration.
- **GSAP** — Animations and transitions.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/chess-atlas.git
cd chess-atlas
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

The production build is generated in the `dist/` directory.

## 🌐 Deployment

Chess Atlas is designed to be deployable through Vercel.

Recommended configuration:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

## 🤖 AI Usage Policy

AI tools were used as development assistance throughout the project.

Their use included:
- Troubleshooting development and runtime errors.
- Assisting with debugging and investigating implementation issues.
- Reviewing targeted code changes and helping resolve technical problems.

Google Search was used to brainstorm and explore ideas for the project.

AI tools served as supporting resources during development. Technical decisions, project direction, and the evaluation of changes remained part of the development process. AI-generated suggestions were not treated as automatically correct and required review in the context of the existing codebase.

## Screenshots 

Kept in the screenshot folder

## 👩‍💻 Author

**Eva J Patel**

- GitHub: [@evapatel123](https://github.com/evapatel123)
- Portfolio: [Personal Portfolio](https://github.com/evapatel123)

---

*Chess Atlas — Every move opens a new possibility.*
