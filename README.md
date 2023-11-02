## Welcome ♥

LÖVE Potion is a homebrew game framework for Nintendo 3DS and Nintendo Switch.

If you are new and unfamiliar with LÖVE and/or Lua, I genuinely recommend clicking the "How to LÖVE" link on the sidebar first.

Once you understand how LÖVE works, check out the [compatibility](compatibility) section to see what's different in LÖVE Potion. There is also a quick link to the LÖVE Wiki for the API documentation, as the API is nearly fully compatible with LÖVE.

![](files/lovepotion.png)

## Hello World

This is the full source for 'Hello World!' in LÖVE Potion.

```lua
function love.draw(screen)
    local width, height = love.graphics.getDimensions(screen)
    love.graphics.print('Hello World!', width / 2, height / 2)
end

-- we need to quit the app when a button is pressed
function love.gamepadpressed(joystick, button)
    love.event.quit()
end
```
