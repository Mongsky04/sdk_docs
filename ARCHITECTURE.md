# Project Structure - Clean Architecture

## Directory Structure

```
src/
├── assets/              # Static assets (images, icons, SVGs)
├── constants/           # Constants and configuration
├── features/            # Feature-based modules
│   ├── overview/        # Overview feature
│   │   ├── components/  # Overview-specific components
│   │   └── Overview.jsx # Overview page
│   └── shared/          # Shared across features
│       ├── components/  # Shared components (Footer, Navigation)
│       └── ui/          # Shared UI components (CodeBlock, Tables)
├── layouts/             # Layout components (Header, Sidebar, MainContent)
├── App.jsx              # Root application component
└── main.jsx             # Application entry point
```

## Architecture Principles

### 1. Feature-Based Organization

- Each feature has its own folder under `features/`
- Feature-specific components stay within the feature folder
- Promotes modularity and easier maintenance

### 2. Shared Resources

- `features/shared/components/` - Reusable business components
- `features/shared/ui/` - Pure UI components (no business logic)
- Prevents code duplication

### 3. Layouts

- Top-level layout components (Header, Sidebar, etc.)
- Orchestrate the overall application structure
- Independent from feature-specific logic

### 4. Clean Imports

- Each folder has an `index.js` for clean exports
- Use named exports for better tree-shaking
- Absolute imports from feature level

## Example Usage

```jsx
// Clean import from layouts
import { Header, Sidebar } from "./layouts";

// Clean import from features
import Overview from "./features/overview/Overview";
import { Footer, FooterNavigation } from "./features/shared/components";
import { CodeBlock } from "./features/shared/ui";
```

## Benefits

1. **Scalability** - Easy to add new features without affecting others
2. **Maintainability** - Clear separation of concerns
3. **Reusability** - Shared components are centralized
4. **Testability** - Each feature can be tested independently
5. **Team Collaboration** - Different teams can work on different features

## Adding New Features

1. Create new folder under `features/`
2. Add feature-specific components
3. Create `index.js` for exports
4. Update routing in `layouts/MainContent.jsx`
