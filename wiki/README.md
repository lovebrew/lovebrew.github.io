## Welcome ♥

LÖVE Potion is a homebrew game framework for Nintendo 3DS and Nintendo Switch.

If you are new and unfamiliar with LÖVE and/or Lua, I genuinely recommend clicking the "How to LÖVE" link on the sidebar first.

Once you understand how LÖVE works, check out the [compatability](compatability) section to see what's different in LÖVE Potion. You may also view the current API reference on the sidebar.

![](files/lovepotion.png)

## Hello World
This is the full source for 'hello world' in LÖVE Potion.

```lua
function love.draw()
    love.graphics.print('Hello World!', 200, 120)
end

-- we need to quit the app when a button is pressed
function love.gamepadpressed(joystick, button)
    love.event.quit()
end
```
