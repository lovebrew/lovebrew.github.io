!> If you haven't set up the required tools, please do so by [following the building section](building?id=getting-started)!

### Environment Setup

Download the [latest **stable** release of LÖVE Potion](https://github.com/lovebrew/LovePotion/releases)¹ for your console and save it somewhere that will be memorable. Inside the zip are two files, but only focus on the one **without** the \*.elf extension. Specifically, you will want:

- Nintendo 3DS: LOVEPotion.3dsx
- Nintendo Switch: LOVEPotion.nro
- Nintendo Wii U: LOVEPotion.wuhb²

Next, download the [latest release of LÖVEBrew](https://github.com/lovebrew/lovebrew/releases) for your platform. Copy this to:

- Windows: `%appdata%\lovebrew`
- Linux/macOS: `~/.config/lovebrew`

Windows users will need to add their directory to their `PATH` environment variable.

The only other dependency, besides requiring tex3ds is [downloading hbupdater](https://github.com/TurtleP/hbupdater). Ideally you should put this in the appdata directory for lovebrew (see the prior paths) to be certain of where it is.

If you are able to run `lovebrew` in the command line, it will prompt you with a first-time message. This, however, does not guarantee that the application will run properly. Make sure you have all dependencies taken care of before trying to build your game.

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

In order for LÖVEBrew to work, you need to have tex3ds installed. If they are installed, you may need to add them to the PATH.

#### Linux

Install the `devkit-env` package from devkitpro-pacman (if it isn't already). This package does not automatically work with shells other than bash. Should you be using something such as fish or zsh, you will have to find a way to source `devkit-env.sh` which is under `/etc/profile.d`.

#### Windows

Open the msys2 terminal and run `nano ~/.bashrc`, adding the following lines at the bottom:

```
export DEVKITPRO=/opt/devkitpro
export PATH=${DEVKITPRO}/tools/bin:$PATH
```

Once this is done, save it via `CTRL+O` and hitting enter to save the filename.

#### Building

Once done, run `lovebrew build`.

On Nintendo 3DS, this will convert assets as necessary.

Copy the newly built _SuperGame.(nro/3dsx)_ to the micro SD card under `/switch` (or `/3ds`) in its own named directory, _SuperProject_ or whatever the name of the resulting binary is. It will show up as an entry once you open the Homebrew Menu.

---

¹You can also use pre-releases, but please be sure to read their release notes.
²Wii U is currently not supported on the lovebrew builder, but will be at some point. When it is, further instructions will be provided.
