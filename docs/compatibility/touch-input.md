# Touch Input

LÖVE Potion supports touch input using the same API and callback structure as mobile versions of LÖVE. This makes it easy to develop or port games that use touch features for handheld consoles like the Nintendo 3DS, Nintendo Switch, and Nintendo Wii U.

```lua
local touches = {}

function love.touchpressed(id, x, y, dx, dy, pressure)
    touches[id] = {x = x, y = y}
end

function love.touchreleased(id, x, y, dx, dy, pressure)
    touches[id] = nil
end

function love.touchmoved(id, x, y, dx, dy, pressure)
    touches[id] = {x = x, y = y}
end

function love.draw()
    for id, touch in pairs(touches) do
        local x = touch.x * love.graphics.getWidth()
        local y = touch.y * love.graphics.getHeight()

        love.graphics.circle("fill", x, y, 20)
    end
end
```
