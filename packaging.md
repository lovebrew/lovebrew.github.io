?> Please read everything carefully. Follow all necessary links and read those thoroughly. They contain important information.

## Prerequisite

Follow the instructions for [setting up a development environment](building?id=getting-started).

## Methods

?> On Nintendo Switch, please use Atmosphère's title takeover functionality. This allows for your game to use all the system memory allowed along with the Software Keyboard. For Nintendo 3DS, please use the regular Homebrew Menu. I do not support the building a cia or "installable" nsp file.

### Foreword

When you run LÖVE Potion by itself, it will first try to locate a game within its own *RomFS*, a read-only filesystem. If you did not build your game with LÖVEBrew for standalone usage (useful for custom metadata), it will default to using the 'Game Folder'. If it fails to locate that, it will show the 'No Game' screen.

Make sure you keep your LÖVE Potion projects in an easy-to-remember directory. Do **_not_** put any of the LÖVE Potion data, your games **_or_** other binaries within the `devkitPro` folder. Keep it on your Desktop or even on cloud storage, like Dropbox.

For more information about the LÖVEBrew application, please [follow this link](lovebrew)

### LÖVE Executable

!> This method does not apply to the Nintendo 3DS version.

Please refer to 'creata a `love` file' [at the official LÖVE wiki](https://love2d.org/wiki/Game_Distribution#Create_a_.love-file).

Once the LÖVE binary is created, [download the file association zip](files/config.zip ':ignore'). Copy the `lovepotion.cfg` file to your Switch micro SD card under `/nx-hbmenu/config/fileassoc`. The `LovePotion` folder can be placed under `/switch`. The only thing missing is the latest copy of LÖVE Potion, so download the [latest *.nro binary](https://github.com/TurtleP/LovePotion/releases) and place it in the `LovePotion` folder.

All that's left is to copy the new *SuperGame.love* file to the `/switch` folder on your micro SD card and open the Homebrew Menu. It will now show up as an entry that you can run.

### 'Game' Folder

?> This is meant for developing your game. Use one of the prior methods when you are finished. If you want a custom game icon and title/author, package it using the lovebrew application.

The quickest way to debug is through the `game` folder. Just download the [latest *.nro or *.3dsx binary](https://github.com/TurtleP/LovePotion/releases) and put it under `/switch/LovePotion` (or `/3ds/LovePotion`). Create the `LovePotion` directory if it doesn't exist.

Create a directory inside of `/switch/LovePotion` (or `/3ds/LovePotion`) called `game`. This will contain all of your source files. Do note, however, that on Nintendo 3DS, you are required to convert textures and fonts to special formats. To do this, you can use `tex3ds` and `mkbcfnt` to do these by hand, but it's also easiest [with the LÖVEBrew application](lovebrew) and setting the `raw` configuration item to `true`. When everything is done, open the Homebrew Menu and run the LÖVE Potion entry and it will run your game!
