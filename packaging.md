## Methods

?> On Nintendo Switch, please use Atmosphère's title takeover functionality. This allows for your game to use all the system memory allowed along with the Software Keyboard. For Nintendo 3DS, please use the regular Homebrew Menu. I do not support the building a cia or "installable" nsp file.

!> Currently the Wii U version **only** supports Aroma custom firmware, no support will be provided for others.

### Fused Binary

You can bundle your game into the LÖVE Potion executable for your console for ease of distribution. This is recommended for when you are done developing you game and want to show it off to your friends! For more information, visit [the bundler page](/bundler/index.md)

### LÖVE Executable

!> This method does not apply to the Wii U version.

Please refer to 'create a `love` file' [at the official LÖVE wiki](https://love2d.org/wiki/Game_Distribution#Create_a_.love-file).

Once the LÖVE binary is created, download the file association zip for [switch](files/switch-config.zip ":ignore") or [3ds](files/3ds-config.zip ":ignore"). Copy the `lovepotion.cfg` file to your Switch micro SD card under `/nx-hbmenu/config/fileassoc` or `hbmenu/config/fileassoc`. The `lovepotion` folder can be placed under `/switch`. The only thing missing is the latest copy of LÖVE Potion, so download the [latest \*.nro binary](https://github.com/TurtleP/LovePotion/releases) and place it in the `lovepotion` folder.

All that's left is to copy the new _SuperGame.love_ file to the `/switch` or `/3ds` folder on your micro SD card and open the Homebrew Menu. It will now show up as an entry that you can run.

### 'Game' Folder

?> This is meant for developing your game. Use one of the prior methods when you are finished. If you want a custom game icon and title/author, package it using the lovebrew bundler site.

The quickest way to debug is through the `game` folder. Just [download the latest release binary](https://github.com/TurtleP/LovePotion/releases) for your console and put it under the proper directory:

- `/switch/lovepotion`
- `/3ds/lovepotion`
- `vol/external01/wiiu/apps/lovepotion`

Create a directory inside of the previous mentioned location called `game`. This will contain all of your source files. Do note, however, that on Nintendo 3DS, you are required to convert textures and fonts to special formats. To do this, you can use `tex3ds` and `mkbcfnt` to do these by hand. When everything is done, open the Homebrew Menu and run the LÖVE Potion entry and it will run your game!
