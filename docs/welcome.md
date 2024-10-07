---
slug: /
hide_title: true
---

# Welcome

Welcome to LÖVE Potion, a powerful tool for creating homebrew games and applications for the Nintendo 3DS, Nintendo Switch, and Nintendo Wii U using the LÖVE framework. LÖVE Potion currently supports LÖVE 12.0 and allows you to harness the flexibility and simplicity of LÖVE (LÖVE2D) to develop engaging and dynamic software for these platforms.

While the core features of LÖVE are maintained, there are a few minor differences in the 3DS version, which are detailed in the "Compatibility" documentation. Dive into our quick start guide to see how easy it is to bring your ideas to life on your favorite Nintendo consoles!

## Hello World

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
