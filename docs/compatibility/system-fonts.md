---
hide_title: true
---

# System Fonts

:::info

It is important to note that for custom fonts you must convert your TrueType or OpenType font to bcnft format on Nintendo 3DS. This can be done when bundling your game via [the bundler website](/bundler/overview)

:::

:::warning

Do not call `love.graphics.newFont` repeatedly in calls such as `love.draw` or `love.update` as this will fill up system memory, causing performance issues and running out of memory.

:::

The consoles come with embedded fonts for loading, referred to as _System Fonts_. In order for these to be loaded, pass the name of the font instead of a path and it will be loaded.

## Nintendo 3DS & Wii U

| Name      | Notes                               |
| --------- | ----------------------------------- |
| standard  | JPN, USA, EUR, and AUS regions font |
| chinese   | Chinese font                        |
| korean    | Korean font                         |
| taiwanese | Taiwanese font                      |

## Nintendo Switch

| Name                        | Notes                               |
| --------------------------- | ----------------------------------- |
| standard                    | JPN, USA, EUR, and AUS regions font |
| chinese simplified          | Simplified Chinese font             |
| chinese traditional         | Traditional Chinese font            |
| extended chinese simplified | Extended Simplified Chinese font    |
| korean                      | Korean font                         |
| nintendo extended           | Nintendo Extended Symbols font      |

## Special Font Glyphs

The Standard font on Nintendo 3DS holds the glyph data for various symbols, like the Play Coin icon. However, these glyphs are stored in the Nintendo Extended Symbols font on Nintendo Switch. Here is a basic example:

```lua title='main.lua'
local utf8 = require("utf8")

-- get the encoded utf8 of the Play Coin icon
local glyph = utf8.char("0xE075")

function love.load()
    -- if we're on Switch, set extended as our current font
    if love._console == "Switch" then
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
