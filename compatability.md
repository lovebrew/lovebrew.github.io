!> LÖVE Potion is a work in progress, so things may be missing. Please open an issue on the [GitHub Repository](https://github.com/TurtleP/LovePotion) if there's a feature you'd like to request.

## Drawing

!> Prior to the full, stable release of 2.0.0, the strings were simply `top` and `bottom` . This was changed due to 3D depth functionality changes with the final release.

On a Nintendo 3DS, this was a big hurdle. The initial codebase would rely on a call to `love.graphics.setScreen(screen)` . Now this is no longer the case. As of version 2.0.0, the `love.draw` callback has a `screen` parameter. This does not affect the Nintendo Switch version.

For example, if you wish to draw to only *one* screen. You would simply check against the `screen` value that was passed in:

``` lua
function love.draw(screen)
    if screen ~= "bottom" then
        -- render top screen
    end
end
```

Currently the `screen` parameter can be one of three strings: `left` , `right` , and `bottom` . The first two correspond with the screens on the top, so that one could use the 3D depth functionality.

Additionally, textures (such as png or jpg files) must be converted to the t3x format on Nintendo 3DS using `tex3ds`. It is provided with devkitpro-pacman, see [Setting up a Development Environment](https://turtlep.github.io/LovePotion/wiki/#/packaging?id=prerequisite) for more details.

## System Font Loading

One can load a system font using the follwing names in place of the path parameter for `love.graphics.newFont` :

### Nintendo 3DS

| Name      | Notes                               |
|-----------|-------------------------------------|
| standard  | JPN, USA, EUR, and AUS regions font |
| chinese   | Chinese font                        |
| korean    | Korean font                         |
| taiwanese | Taiwanese font                      |

### Nintendo Switch

| Name                        | Notes                               |
|-----------------------------|-------------------------------------|
| standard                    | JPN, USA, EUR, and AUS regions font |
| chinese simplified          | Simplified Chinese font             |
| chinese traditional         | Traditional Chinese font            |
| extended chinese simplified | Extended Simplified Chinese font    |
| korean                      | Korean font                         |
| nintendo extended           | Nintendo Extended Symbols font      |

It is important to note that for custom fonts you must convert your TrueType or OpenType font to bfnt using `mkbcfnt`. It is provided with devkitpro-pacman, see [Setting up a Development Environment](https://turtlep.github.io/LovePotion/wiki/#/packaging?id=prerequisite) for more details. The Standard font on Nintendo 3DS holds the glyph data for various symbols, like the Play Coin icon. However, these glyphs are stored in the Nintendo Extended Symbols font on Nintendo Switch. Here is a basic example:

``` lua
local utf8 = require("utf8")

-- get the encoded utf8 of the Play Coin icon
local glyph = utf8.char("0xE075")

function love.load()
    -- if we're on Switch, set extended as our current font
    if love._console_name == "Switch" then
        love.graphics.setNewFont("nintendo extended", 14)
    end
end

function love.draw(screen)
    -- this will only render on the top
    -- screen for 3DS and will render on Switch regardless
    if (screen and screen ~= "top") then
        return
    end

    love.graphics.print(glyph)
end
```

## Extended System Functions

Since the Nintendo 3DS and Nintendo Switch are a bit different than your traditional LOVE environment, the following `system` module functions were added:

* `love.system.getNetworkStatus()`
    - Returns whether or not the system has an internet connection
* `love.system.getUsername()`
    - Returns the name of the user running LÖVE Potion (or your game)
* `love.system.getLanguage()`
    - Returns the current System Language as a string

These are especially useful for either UI, netplay, or even multi-language support!

## Console-Only Constants

Both the 3DS and Switch versions of LÖVE Potion have the following constants:

* `love._console_name`
    - Returns the name of the console, "3DS" or "Switch"
* `love._potion_version`
    - Returns the version of LÖVE Potion

## Software Keyboard

Calling `love.keyboard.setTextInput` brings up the System Software Keyboard applet. Pass a table to configure it:

| Config     | Notes                                   |
|------------|-----------------------------------------|
| type       | basic, numpad, and standard<sup>1</sup> |
| isPassword | makes the text hidden after entry       |
| hint       | Text to prompt for on the input         |

<sup>1</sup> Nintendo Switch only

## Gamepad Constants

?> LÖVE Potion only uses the `love.gamepad*` callbacks for input handling (with the joycon or the 3DS system itself). For a list of button names, please see [the official LÖVE wiki](https://love2d.org/wiki/GamepadButton).

### Nintendo 3DS

![](files/3DSControllerMap.png)

### Nintendo Switch

![](files/SwitchControllerMap.png)

## Miscellaneous

### Nintendo 3DS

!> Stereoscopic depth is not available Nintendo 2DS family systems and will always return zero. If you wish to test 3D depth, consider finding someone who has a 3DS system to help out.

The Nintendo 3DS has stereoscopic 3D--it allows for the use of 3D effects on its top screen without 3D glasses. To control this, use `love.graphics.getStereoscopicDepth()`. This will return the 3D slider's current value, which is in the range of zero to one. One way for this to work is through this example:

``` lua
local str, font = "Hello World", nil
local textDepth = 6
function love.load()
    font = love.graphics.getFont()
end

function love.draw(screen)
    if screen == "bottom" then
        return
    end

    local sysDepth = -love.graphics.getStereoscopicDepth()

    if screen == "right" then
        sysDepth = -sysDepth
    end

    local left = math.floor(0.5 * (400 - font:getWidth(str)))
    love.graphics.print("Hello World", left - sysDepth * textDepth, 120)
end
```

## Debugging Your Game

?> Wondering why this section got updated? [Check out the FAQ](faq?id=why-did-it-take-so-long-for-game-debugging)!

Debugging LÖVE Potion games has always been a big pain. We couldn't use the toolchain provided console, especially on Nintendo Switch due to complications. However, users can now use `nxlink` on Switch and even the 3DS's gdb debugger for output of `print` . Simply enable the console flag inside of your [ `conf.lua` ](https://love2d.org/wiki/Config_Files)!

### Nintendo 3DS

This is a little more involved and advanced, but developers will be required to follow [setting up a development environment](building?id=getting-started). Once devkitpro-pacman is installed, install the 3DS gdb components:

<!-- tabs:start -->

#### **Windows (msys2)**

``` bash
pacman -S devkitARM-gdb
```

#### **Unix-like (Linux, macOS)**

``` bash
sudo (dkp-)pacman -S devkitARM-gdb
```

Once this is installed, go to the hbmenu. Run the rosalina menu combo (default `L + R + Down + Select` ) and enter "debugger options" and then press `a` on "Enable Debugger". Take note of the IP and port that is assigned to the debugger! Press `b` to go back and select "Force-debug next application at launch". Select LÖVE Potion, then in your terminal, type `/opt/devkitpro/devkitARM/bin/arm-none-eabi-gdb` and hit enter. Next, `target remote ip:port` , where the IP and port are from the debugger's information from before. Debugging will begin and any `print` calls ran will output to this terminal's window.

### Nintendo Switch

Since `nxlink` comes with the `switch-tools` package, all that's required is to load the netsender in hbmenu by pressing `y` and in the terminal running `nxlink -s path/to/nro` . The Switch will receive the nro and immediately run it once it's fully downloaded. Any `print` calls ran will output to this terminal's window.
