!> Currently the Wii U version **only** supports Aroma custom firmware, no support will be provided for others.

## Getting Started

A typical directory structure looks like the following:

```
SuperProject
├── SuperGame
│   ├── conf.lua
│   └── main.lua
└── lovebrew.toml
```

`SuperProject` is the top-level folder name of what the project will be called. `SuperGame` is the directory to hold all of the game assets that will be used during the build process. The `lovebrew.toml` file is created by right clicking inside the `SuperProject` directory and creating a new file. You can find the [configuration template here](files/lovebrew.toml ":ignore"). There are several settings that can be changed, but the more important ones are detailed below.

### Custom Metadata & Icons

The `lovebrew.toml` file can be opened in any text editor, including Notepad on Windows (even if Windows prompts what to open the file with, you can still use Notepad). There are comments for each item, so please read them carefully. Any `string` values may contain spaces.

If a custom icon is desired, please note that for Nintendo 3DS, you must create a 48x48 PNG image. For the Nintendo Switch version, the image must be 256x256 pixels and saved as a JPG image. If the icon for the Switch has issues, you may need to turn off the `progressive` flag when saving. Some programs, like GIMP are able to do this; Wii U icons are 128x128px PNG images. When a custom icon is not provided (or not found), LÖVEBrew will use a default icon.

### Building Your Project

Open your favorite browser and navigate to [the bundler app](http://bundle.lovebrew.org). Find your project, zip all of the contents within `SuperProject` and drag the new zip file into the browser. It should ask you to confirm the upload; click yes and it will begin the process.

The website, if all goes well, will bundle your game into the formats requested in the `lovebrew.toml` file and pack them into a resulting zip archive. This zip archive also contains a `debug.log` file for debugging purposes, should something go wrong during the build process. If your project fails to build and an error toast shows up at the top of the site, please make note of it. These errors should be clear enough to indicate your issue, but if they are not, please report an issue on GitHub.

### Configuration File

?> If you are unfamiliar with the TOML spec, [please read this](https://toml.io/en/) for its official documentation

### The **[metadata]** Section

This section defines the metadata for your game.

| Key         | Value Type | Default                             | Notes                       |
| ----------- | ---------- | ----------------------------------- | --------------------------- |
| title       | string     | `"SuperGame"`                       | Game title                  |
| author      | string     | `SuperAuthor`                       | Game author                 |
| description | string     | `"SuperDescription"`                | Game description            |
| version     | string     | `"0.1.0"`                           | Game version                |
| icons       | table      | `{ ctr = "", hac = "", cafe = "" }` | Icon paths in the zip file¹ |

¹See [this section for more details](lovebrew?id=custom-metadata-amp-icons). Icons are relative to the root of the zip file.

Icons can also be defined in `[metadata.icons]`:

```toml
[metadata.icons]
ctr  = "icon48.png"
hac  = "icon.jpeg"
cafe = "icon128.png"
```

### The **[build]** Section

This section defines how the application should build your game.

| Key      | Value Type | Default                  | Notes                                                         |
| -------- | ---------- | ------------------------ | ------------------------------------------------------------- |
| targets  | array      | `["ctr", "hac", "cafe"]` | Target console(s) to build for                                |
| source   | string     | `"game"`                 | Game source zip name                                          |
| packaged | boolean    | `false`                  | Whether to package the game assets into the final executable¹ |

¹When this is set to `false`, the bundler will return the game assets you wanted for each target, converted or not.
