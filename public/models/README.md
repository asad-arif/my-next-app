# 3D Models

This directory contains 3D models for the configurators.

## Required Files

### Chair Configurator
- `chair.gltf` - The main chair 3D model
- `chair.bin` - Binary data for the chair model (if applicable)

## How to Add Models

1. Place your `.gltf` or `.glb` files in this directory
2. Update the model paths in the respective component files
3. Ensure models are optimized for web use (low poly count, compressed textures)

## Model Guidelines

- Use GLTF format for better compatibility
- Keep file sizes under 10MB for optimal loading
- Include proper UV mapping for texture application
- Test models in different browsers and devices
