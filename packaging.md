## Methods

?> On Nintendo Switch, please use Atmosphère's title takeover functionality. This allows for your game to use all the system memory allowed along with the Software Keyboard. For Nintendo 3DS, please use the regular Homebrew Menu. I do not support the building a cia or "installable" nsp file.

!> Currently the Wii U version **only** supports Aroma custom firmware, no support will be provided for others.

### 'Game' Folder

?> This is meant for developing your game. Use one of the other methods when you are finished. If you want a custom game icon and title/author, package it using the LÖVEBrew Bundler Web App.

The quickest way to debug is through the `game` folder. Just [download the latest release binary](https://github.com/TurtleP/LovePotion/releases) for your console and put it under the proper directory:

- `/switch/lovepotion`
- `/3ds/lovepotion`
- `vol/external01/wiiu/apps/lovepotion`

Create a directory inside of the previous mentioned location called `game`. This will contain all of your source files. Do note, however, that on Nintendo 3DS, you are required to convert textures and fonts to special formats. To do this, you can use `tex3ds` and `mkbcfnt` to do these by hand or drag'n'drop them to [the bundler](https://bundle.lovebrew.org) for an automatic conversion. When everything is done, open the Homebrew Menu and run the LÖVE Potion entry and it will run your game!

### Create a .love-file

!> There are currently issues with this method on the 3DS. Please use other methods until the problem is resolved.

!> This method does not apply to the Wii U version.

Please refer to 'create a `love` file' [at the official LÖVE wiki](https://love2d.org/wiki/Game_Distribution#Create_a_.love-file).

Once the .love-file is created, download the file association zip for [switch](files/switch-config.zip ":ignore") or [3ds](files/3ds-config.zip ":ignore"). Copy the `lovepotion.cfg` file to your micro SD card under `/nx-hbmenu/config/fileassoc` or `hbmenu/config/fileassoc`. The `lovepotion` folder can be placed under `/switch` on Switch or under `/3ds` on 3DS. The only thing missing is the latest copy of LÖVE Potion, so download the [latest \*.nro/\*.3dsx binary](https://github.com/TurtleP/LovePotion/releases) and place it in the `lovepotion` folder.

All that's left is to copy the new _SuperGame.love_ file to the `/switch` or `/3ds` folder on your micro SD card and open the Homebrew Menu. It will now show up as an entry that you can run.

### Fused Binary

You can bundle your game into the LÖVE Potion executable for your console for ease of distribution. This is recommended for when you are done developing you game and want to show it off to your friends! 

#### Manual method

It is possible to append a .love-file containing your game to the LÖVE Potion executable, thus creating a **fused game**. 
1. Create the .love-file as described [in the section above](#create-a-love-file)
2. Download the [latest LÖVE Potion binary](https://github.com/TurtleP/LovePotion/releases) for your desired platform 
3. Navigate to the directory containing both your game and the LÖVE Potion binary and run one of the following commands:

<!-- tabs:start -->

#### **Windows (cmd)**

```batch
:: 3DS
copy /b lovepotion.3dsx+SuperGame.love SuperFused.3dsx

:: Switch
copy /b lovepotion.nro+SuperGame.love SuperFused.nro

:: Wii U
copy /b lovepotion.wuhb+SuperGame.love SuperFused.wuhb

```

#### **Windows (Powershell)**

```powershell
# 3DS
Get-Content lovepotion.3dsx,SuperGame.love -Encoding Byte | Set-Content SuperGame.3dsx -Encoding Byte

# Switch
Get-Content lovepotion.nro,SuperGame.love -Encoding Byte | Set-Content SuperGame.nro -Encoding Byte

# Wii U
Get-Content lovepotion.wuhb,SuperGame.love -Encoding Byte | Set-Content SuperGame.wuhb -Encoding Byte

```

#### **Unix-like (Linux, macOS)**

```bash
# 3DS
cat lovepotion.3dsx SuperGame.love > SuperGame.3dsx

# Switch
cat lovepotion.nro SuperGame.love > SuperGame.nro

# Wii U
cat lovepotion.wuhb SuperGame.love > SuperGame.wuhb

```

<!-- tabs:end -->

#### Bundler

The above can be done automatically using the [LÖVEBrew Bundler Web App](https://bundle.lovebrew.org), while also allowing for custom metadata and icon.

For more information, visit [the bundler Wiki page](/bundler/index.md).