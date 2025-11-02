---
slug: /
hide_title: true
title: Welcome
---

## Welcome

LÖVE Potion lets you create homebrew games and apps for the Nintendo 3DS, Switch, and Wii U using the familiar LÖVE2D framework. It supports LÖVE 12.0 and keeps most of its core features, with only minor platform differences noted in the [_Compatibility_](/docs/compatibility/general.md) page.

Get started in minutes and see your ideas come to life on your console!

### Plug & Play

Building from source isn't necessary - just grab a release and you're ready to run your first project!

1. [Download the latest release](https://github.com/lovebrew/lovepotion/releases/latest) for your console onto the SD card.
2. Create a `game` directory containing `main.lua` next to the binary.
3. Launch LÖVE Potion!

More details about running LÖVE Potion can be found on the next page.

### Hello World

This is the full source for "Hello World!" in LÖVE Potion.

```lua title='main.lua'
function love.draw(screen)
    local width, height = love.graphics.getDimensions(screen)
    love.graphics.print("Hello World!", width / 2, height / 2)
end

function love.gamepadpressed(joystick, button)
    love.event.quit()
end
```
