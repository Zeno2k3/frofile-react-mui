# Portfolio Website - React + TypeScript + Vite

This project is a portfolio website built using **React**, **TypeScript**, and **Vite**. It showcases various sections such as Home, About, Skills, Projects, and Contact, with a modern design and responsive layout.

## Features

- **React + TypeScript**: Ensures type safety and modern React features.
- **Material-UI**: Provides a consistent and customizable design system.
- **Vite**: Fast development and build tool.
- **Responsive Design**: Optimized for different screen sizes.
- **Reusable Components**: Modular and reusable UI components.

## Project Structure

```
client/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable React components
│   ├── assets/           # Images, icons, and other assets
│   ├── theme.ts          # Material-UI theme configuration
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   └── vite-env.d.ts     # Vite environment types
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # TypeScript configuration for the app
├── tsconfig.node.json    # TypeScript configuration for Node
├── vite.config.ts        # Vite configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- **Node.js** (>= 16.x)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

To build the project for production:
```bash
npm run build
```

The output will be in the `dist/` directory.

### Linting

Run ESLint to check for code quality:
```bash
npm run lint
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Customization

- **Theme**: Modify `src/theme.ts` to customize the Material-UI theme.
- **Components**: Add or edit components in the `src/components/` directory.

## Dependencies

### Main Dependencies

- `react`: ^19.0.0
- `@mui/material`: ^7.0.2
- `@emotion/react`: ^11.14.0
- `@emotion/styled`: ^11.14.0

### Dev Dependencies

- `vite`: ^6.3.1
- `typescript`: ~5.7.2
- `eslint`: ^9.22.0

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

**MQuân** - FullStack Developer
