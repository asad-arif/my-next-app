# Component Structure Guide

This document outlines the organized component structure for the 3D Portfolio application.

## 📁 Directory Structure

```
src/
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.jsx
│   │   ├── ConfiguratorsGrid.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── index.js        # Barrel exports
│   ├── ui/                 # Reusable UI components
│   │   ├── Navigation.jsx
│   │   └── index.js        # Barrel exports
│   └── configurators/      # 3D configurator components
│       └── chair/
│           ├── Chair.jsx
│           ├── Experience.jsx
│           └── Configurator.jsx
├── lib/
│   ├── animations/         # Animation utilities
│   │   └── variants.js
│   ├── scroll.js           # Scroll utilities
│   └── index.js            # Barrel exports
├── stores/                 # State management
│   └── chairStore.js
└── app/
    ├── page.js            # Main homepage
    └── configurators/     # Configurator routes
        └── chair/
            ├── page.js
            └── chair-configurator.css
```

## 🧩 Component Categories

### 1. **Sections** (`src/components/sections/`)
Large page sections that make up the main content areas:

- **Hero.jsx** - Landing section with title and CTA buttons
- **ConfiguratorsGrid.jsx** - Grid of available configurators
- **About.jsx** - About section with skills and description
- **Testimonials.jsx** - Client testimonials carousel
- **Contact.jsx** - Contact form section
- **Footer.jsx** - Site footer with social links

### 2. **UI Components** (`src/components/ui/`)
Reusable UI elements:

- **Navigation.jsx** - Main navigation with mobile menu

### 3. **Configurator Components** (`src/components/configurators/`)
3D configurator specific components:

- **chair/** - Chair configurator components
  - **Chair.jsx** - 3D model component
  - **Experience.jsx** - 3D scene setup
  - **Configurator.jsx** - UI controls

## 🎨 Animation System

### Animation Variants (`src/lib/animations/variants.js`)
Centralized animation configurations:

```javascript
// Usage in components
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

<motion.div
  initial="initial"
  animate="animate"
  variants={fadeInUp}
>
  Content
</motion.div>
```

### Available Variants:
- `fadeInUp` - Fade in from bottom
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `staggerContainer` - Stagger children animations
- `staggerItem` - Individual stagger item
- `scaleOnHover` - Scale on hover
- `rotateOnHover` - Rotate on hover

## 🔧 Utility Functions

### Scroll Utilities (`src/lib/scroll.js`)
```javascript
import { scrollToSection, useScrollDetection } from '@/lib/scroll';

// Scroll to section
scrollToSection('about');

// Detect scroll state
const isScrolled = useScrollDetection();
```

## 📦 Barrel Exports

Index files provide clean imports:

```javascript
// Instead of multiple imports
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';

// Use barrel exports
import { Navigation } from '@/components/ui';
import { Hero, About, Contact } from '@/components/sections';
```

## 🎯 Benefits of This Structure

### 1. **Maintainability**
- Clear separation of concerns
- Easy to locate and modify components
- Consistent naming conventions

### 2. **Reusability**
- UI components can be reused across pages
- Animation variants are centralized
- Utility functions are easily accessible

### 3. **Scalability**
- Easy to add new sections or configurators
- Clear patterns for new components
- Organized by functionality

### 4. **Developer Experience**
- Clean imports with barrel exports
- Consistent component patterns
- Well-documented structure

## 🚀 Adding New Components

### Adding a New Section:
1. Create component in `src/components/sections/`
2. Add export to `src/components/sections/index.js`
3. Import and use in `src/app/page.js`

### Adding a New UI Component:
1. Create component in `src/components/ui/`
2. Add export to `src/components/ui/index.js`
3. Import where needed

### Adding a New Configurator:
1. Create folder in `src/components/configurators/`
2. Follow existing patterns (Chair configurator)
3. Create route in `src/app/configurators/`

## 📝 Best Practices

1. **Component Naming**: Use PascalCase for component files
2. **Props**: Define clear prop interfaces
3. **Styling**: Use Tailwind classes consistently
4. **Animations**: Use centralized variants
5. **State**: Use Zustand for complex state management
6. **Exports**: Use barrel exports for clean imports

This structure provides a solid foundation for building and maintaining the 3D Portfolio application.
