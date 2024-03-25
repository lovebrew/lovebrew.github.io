## Witaj ♥

LÖVE Potion jest frameworkiem do gier homebrew dla Nintendo 3DS, Nintendo Switch oraz Nintendo Wii U.

Jeśli nie masz jeszcz znajomości LÖVE i/lub Lua, szczerze polecam najpierw kliknać w link "How to LÖVE" znajdujący się w menu bocznym.

Gdy już zrozumiesz jak działa LÖVE, sprawdź sekcję [Kompatybilność](compatibility) by dowiedzieć się o różnicach między LÖVE a LÖVE Potion. W menu bocznym jest również link do LÖVE Wiki, które zawiera dokumentację API, gdyż API LÖVE Potion jest prawie w pełni kompatybilne z LÖVE.

![](../../files/lovepotion.png)

## Hello World

Oto pełny kod źródłowy dla programu 'Hello World!' w LÖVE Potion.

```lua
function love.draw(screen)
    local width, height = love.graphics.getDimensions(screen)
    love.graphics.print('Hello World!', width / 2, height / 2)
end

-- możemy wyjść z aplikacji poprzez wciśnięcie przycisku
function love.gamepadpressed(joystick, button)
    love.event.quit()
end
```
