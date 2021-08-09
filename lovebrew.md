!> If you haven't set up the required tools, please do so by [following the building section](building?id=getting-started)!

### Environment Setup

Download the [latest release of LÖVE Potion](https://github.com/lovebrew/LovePotion/releases) for your console and save it somewhere that will be memorable. Inside the zip are two files, but only focus on the one with the *.elf extension. Depending on the console, rename it to `3DS.elf` or `Switch.elf` and then copy the file to your configuration directory:

* Windows: `%appdata%\lovebrew`
* Linux/macOS: `~/.config/lovebrew`

Next, download the [latest release of LÖVEBrew](https://github.com/lovebrew/lovebrew/releases) for your platform. Copy this to the prior mentioned directory. Windows users will need to add this directory to their `PATH` environment variable.

If you are able to run `lovebrew` in the command line, it will prompt you with a first-time message.

### Directory Structure

A typical directory structure when using LÖVEBrew looks like the following:

```
SuperProject
├── SuperGame
│   ├── conf.lua
│   └── main.lua
└── lovebrew.toml
```

`SuperProject` is the top-level folder name of what the project will be called. `SuperGame` is the directory to hold all of the game assets that will be used during the build process. The `lovebrew.toml` file is created by running `lovebrew init` inside the `SuperProject` directory. There are several settings that can be changed, but the more important ones are detailed below.

### Custom Metadata & Icons

The `lovebrew.toml` file can be opened in any text editor, including Notepad on Windows (even if Windows prompts what to open the file with, you can still use Notepad). There are comments for each item, so please read them carefully. Any `string` values may contain spaces.

If a custom icon is desired, please note that for Nintendo 3DS, you must create a 48x48 `*.png` image. For the Nintendo Switch version, the image must be 256x256 pixels and saved as a `*.jpg`. If the icon for the Switch has issues, you may need to turn off the `progressive` flag when saving. Some programs, like GIMP are able to do this. When a custom icon is not provided, LÖVEBrew will use a default icon.

### Building Your Project

Once done, run `lovebrew build`.

On Nintendo 3DS, this will convert assets as necessary.

Copy the newly built *SuperGame.(nro/3dsx)* to the micro SD card under `/switch` (or `/3ds`) in its own named directory, *SuperProject* or whatever the name of the resulting binary is. It will show up as an entry once you open the Homebrew Menu.
