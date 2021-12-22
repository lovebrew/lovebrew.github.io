# love.keyboard

<b><i>
Provides an interface to the system's software keyboard
</b></i>

!> The software keyboard will block all operations until the user has finished their input (usually by hitting Done or Enter).

## Functions

| Name                                                               | Description                                                         |
|--------------------------------------------------------------------|---------------------------------------------------------------------|
| [setTextInput](https://love2d.org/wiki/love.keyboard.setTextInput) | Enables [the software keyboard](compatibility?id=software-keyboard) |

Several arguments are possible with the console variant. The type can be changed, whether it is a password fielded input, numpad only, hint string, and max length. When the text is finally input, the system calls `love.textinput` with the string as its argument.

```lua
function love.gamepadpressed(joystick, button)
    if button == "x" then
        -- standard QWERTY
        love.keyboard.setTextInput()
    elseif button == "a" then
        -- passcode numpad
        love.keyboard.setTextInput({type = "numpad", password = true})
    elseif button == "b" then
        -- custom hint text
        love.keyboard.setTextInput({hint = "Enter your birthday"})
    end
end

function love.textinput(text)
    print(text)
end
```
