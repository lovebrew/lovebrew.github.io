---
hide_title: true
---

# Bundle Zip File Structure

A typical bundle zip file for LÖVE Potion follows a structured format to include necessary files for bundling a game project. Below is an example of the directory structure:

```
SuperProject
├── game
│   ├── conf.lua
│   └── main.lua
└── lovebrew.toml
```

`SuperProject` is the top-level folder name of what the project will be called. `game` is the directory to hold all of the game assets that will be used during the bundling process. The `lovebrew.toml` file is a configuration file that will tell the bundler how to handle the bundle.

### Creating the Bundle Zip File

To create a bundle zip file for your LÖVE Potion project:

1. **Organize Your Files**: Ensure all necessary game assets and source code files are placed within the `game` directory.

2. **Create `lovebrew.toml`**: Right-click inside the `SuperProject` directory (or use your preferred method) to create a new file named `lovebrew.toml`. You can use a [configuration example](/files/lovebrew.toml) to get started with defining your game's metadata and build settings.

3. **Zip the Project**: Select all files and directories within the `SuperProject` folder. Right-click and choose the option to compress or zip these files.

When finished, the resulting zip file contents should have `game` and `lovebrew.toml` at the root. For reference, please check [the example zip](/files/example.zip).
