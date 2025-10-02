# 3D Configurators Guide

This guide explains how to add new 3D configurators to the application.

## Project Structure

```
src/
├── app/
│   └── configurators/
│       ├── layout.js                 # Layout for all configurators
│       └── [configurator-name]/
│           ├── page.js              # Main configurator page
│           └── [configurator-name].css  # Configurator-specific styles
├── components/
│   └── configurators/
│       └── [configurator-name]/
│           ├── [Model].jsx          # 3D model component
│           ├── Experience.jsx       # 3D scene setup
│           └── Configurator.jsx     # UI controls
├── stores/
│   └── [configurator-name]Store.js  # Zustand store for state
└── lib/
    └── three/                       # Three.js utilities
```

## Adding a New Configurator

### 1. Create the Store

Create a new Zustand store in `src/stores/[configurator-name]Store.js`:

```javascript
import { create } from 'zustand';

export const use[ConfiguratorName]Store = create((set) => ({
  // State properties
  property1: defaultValue,
  property2: defaultValue,
  
  // Available options
  options: [...],
  
  // Actions
  setProperty1: (value) => set({ property1: value }),
  setProperty2: (value) => set({ property2: value }),
  
  // Reset function
  reset: () => set({
    property1: defaultValue,
    property2: defaultValue,
  }),
}));
```

### 2. Create the 3D Model Component

Create `src/components/configurators/[configurator-name]/[Model].jsx`:

```javascript
import { useGLTF, useTexture } from "@react-three/drei";
import { use[ConfiguratorName]Store } from "@/stores/[configurator-name]Store";

function [Model](props) {
  const { nodes, materials } = useGLTF("/models/[model-name].gltf");
  const { property1, property2 } = use[ConfiguratorName]Store();

  return (
    <group {...props} dispose={null}>
      {/* Your 3D model JSX here */}
    </group>
  );
}

export default [Model];
useGLTF.preload("/models/[model-name].gltf");
```

### 3. Create the Experience Component

Create `src/components/configurators/[configurator-name]/Experience.jsx`:

```javascript
import { PresentationControls, Stage } from "@react-three/drei";
import [Model] from "./[Model]";

const Experience = () => {
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <[Model] />
        </Stage>
        {/* Add ground plane or other scene elements */}
      </PresentationControls>
    </>
  );
};

export default Experience;
```

### 4. Create the Configurator UI

Create `src/components/configurators/[configurator-name]/Configurator.jsx`:

```javascript
import { use[ConfiguratorName]Store } from "@/stores/[configurator-name]Store";

const Configurator = () => {
  const {
    property1,
    setProperty1,
    property2,
    setProperty2,
    options,
  } = use[ConfiguratorName]Store();

  return (
    <div className="configurator">
      {/* Your UI controls here */}
    </div>
  );
};

export default Configurator;
```

### 5. Create the Page

Create `src/app/configurators/[configurator-name]/page.js`:

```javascript
"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "@/components/configurators/[configurator-name]/Experience";
import Configurator from "@/components/configurators/[configurator-name]/Configurator";
import "./[configurator-name].css";

export default function [ConfiguratorName]Configurator() {
  return (
    <div className="[configurator-name]-configurator">
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213547", 10, 20]} />
        <Experience />
      </Canvas>
      <Configurator />
    </div>
  );
}
```

### 6. Add Styles

Create `src/app/configurators/[configurator-name]/[configurator-name].css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;1,400&display=swap");

.[configurator-name]-configurator {
  width: 100vw;
  height: 100vh;
  /* Add your styles here */
}

/* Reuse existing configurator styles or create new ones */
```

### 7. Add to Navigation

Update `src/app/page.js` to include your new configurator in the configurators section.

## 3D Models and Textures

### Models
- Place `.gltf` or `.glb` files in `public/models/`
- Optimize models for web use (low poly count, compressed textures)
- Test loading performance

### Textures
- Place texture files in `public/textures/[material-type]/`
- Use appropriate formats (JPG for photos, PNG for transparency)
- Ensure seamless tiling for repeated patterns

## Best Practices

1. **Performance**: Keep 3D models optimized for web
2. **State Management**: Use Zustand for clean state management
3. **Responsive Design**: Ensure configurators work on all devices
4. **Error Handling**: Add proper error boundaries and loading states
5. **Accessibility**: Include proper ARIA labels and keyboard navigation
6. **Testing**: Test in multiple browsers and devices

## Dependencies

Required packages for 3D configurators:
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for Three.js
- `three` - 3D graphics library
- `zustand` - State management

## Example: Chair Configurator

The chair configurator demonstrates:
- Material switching (leather/fabric)
- Color customization
- Component variation (leg styles)
- Real-time 3D updates
- Clean UI controls

Use this as a reference when creating new configurators.
