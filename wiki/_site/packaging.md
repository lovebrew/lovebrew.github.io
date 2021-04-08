?> Please read everything carefully. Follow all necessary links and read those thoroughly. They contain important information.

## Prerequisite

Follow the instructions for [setting up a development environment](building?id=getting-started).

## Methods

?> On Nintendo Switch, please use Atmosphère's title takeover functionality. This allows for your game to use all the system memory allowed along with the Software Keyboard. For Nintendo 3DS, please use the regular Homebrew Menu. I do not support the building a cia or "installable" nsp file.

### Foreword

When you run LÖVE Potion by itself, it will first try to locate a game within its own *RomFS*, a read-only filesystem. If you did not build your game with the provided templates for standalone usage (useful for custom metadata), it will default to using the 'Game Folder'. If it fails to locate that, it will show the 'No Game' screen.

Make sure you keep your LÖVE Potion projects in an easy-to-remember directory. Do **_not_** put any of the LÖVE Potion data, your games **_or_** other binaries within the `devkitPro` folder. Keep it on your Desktop or even on cloud storage, like Dropbox.

### Environment Setup

Grab the [latest *.elf binary](https://github.com/TurtleP/LovePotion/releases) and place it under your home directory inside the `.lovepotion` folder under your HOME directory (`~/.lovepotion`). Each elf file must be named specifically. If using the 3DS version, name the elf file `3ds.elf`, and for Switch, `switch.elf`

### LÖVEBrew Application

!> Make sure you have python3 installed before you proceed! The application does **not** work on python2.

Clone the [repository for `lovebrew`](https://github.com/TurtleP/lovebrew). Please read the readme as well for proper installation and usage instructions.

One the application is installed, run `lovebrew --init` in your project directory. Your directory structure should look something like the following:

```
├── SuperGame
│   ├── conf.lua
│   └── main.lua
└── lovebrew.toml
```

#### Custom Icons

On Nintendo 3DS, create a 48x48 png image. For the Nintendo Switch version, the image must be 256x256 pixels and saved as a jpg.

#### Custom Metadata

Edit the `lovebrew.toml` file in the directory. Read the comments for specific details on each item. Once done, run `lovebrew`.

Copy the newly built *SuperGame.(nro/3dsx)* to the micro SD card under `/switch` (or `/3ds`) and it will show up as an entry once you open the Homebrew Menu.

### LÖVE Executable

!> This method does not apply to the Nintendo 3DS version.

Please refer to 'creata a `love` file' [at the official LÖVE wiki](https://love2d.org/wiki/Game_Distribution#Create_a_.love-file).

Once the LÖVE binary is created, [download the file association zip](files/config.zip ':ignore'). Copy the `lovepotion.cfg` file to your Switch micro SD card under `/nx-hbmenu/config/fileassoc`. The `LovePotion` folder can be placed under `/switch`. The only thing missing is the latest copy of LÖVE Potion, so download the [latest *.nro binary](https://github.com/TurtleP/LovePotion/releases) and place it in the `LovePotion` folder.

All that's left is to copy the new *SuperGame.love* file to the `/switch` folder on your micro SD card and open the Homebrew Menu. It will now show up as an entry that you can run.

### 'Game' Folder

?> This is meant for developing your game. Use one of the prior methods when you are finished. If you want a custom game icon and title/author, package it using the lovebrew application.

The quickest way to debug is through the `game` folder. Just download the [latest *.nro or *.3dsx binary](https://github.com/TurtleP/LovePotion/releases) and put it under `/switch/LovePotion` (or `/3ds/LovePotion`). Create the `LovePotion` directory if it doesn't exist.

Create a directory inside of `/switch/LovePotion` (or `/3ds/LovePotion`) called `game` and then copy all your source files into it. Open the Homebrew Menu and run the LÖVE Potion entry and it will run your game!
