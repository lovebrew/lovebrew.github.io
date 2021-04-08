# love.joystick

<b><i>
Provides an interface to connected joysticks.
</b></i>

?> The 3DS console itself counts as a single joystick.

## Functions

| Name                                                                       | Description                            | Notes       |
|----------------------------------------------------------------------------|----------------------------------------|-------------|
| [getJoystickCount](https://love2d.org/wiki/love.joystick.getJoystickCount) | Gets the number of connected joysticks |             |
| [getJoysticks](https://love2d.org/wiki/love.joystick.getJoysticks)         | Gets a list of connected Joysticks     |             |
| split                                                                      | Splits a joycon pair into two          | Switch only |
| merge                                                                      | Merges two separate joycon into one    | Switch only |

## Types

### Gamepad

<b><i>
Represents a physical joystick.
Also known as a `joystick` in LÖVE's terminology.
</b></i>

See also:
- [Object](api/love?id=Object)

| Name                                                                          | Description                                                                  | Notes |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------|-------|
| [getAxes](https://love2d.org/wiki/Joystick:getAxes)                           | Gets the direction of each axis                                              |       |
| [getAxis](https://love2d.org/wiki/Joystick:getAxis)                           | Gets the direction of an axis                                                |       |
| [getButtonCount](https://love2d.org/wiki/Joystick:getButtonCount)             | Gets the number of buttons on the joystick                                   |       |
| [getGamepadAxis](https://love2d.org/wiki/Joystick:getGamepadAxis)             | Gets the direction of a virtual gamepad axis                                 |       |
| [getID](https://love2d.org/wiki/Joystick:getID)                               | Gets the joystick's unique identifier                                        |       |
| [getName](https://love2d.org/wiki/Joystick:getName)                           | Gets the name of the joystick                                                |       |
| [getVibration](https://love2d.org/wiki/Joystick:getVibration)                 | Gets the current vibration motor strengths on a Joystick with rumble support |       |
| [isConnected](https://love2d.org/wiki/Joystick:isConnected)                   | Gets whether the Joystick is connected                                       |       |
| [isDown](https://love2d.org/wiki/Joystick:isDown)                             | Checks if a button on the Joystick is pressed                                |       |
| [isGamepad](https://love2d.org/wiki/Joystick:isGamepad)                       | Gets whether the Joystick is recognized as a gamepad                         |       |
| [isGamepadDown](https://love2d.org/wiki/Joystick:isGamepadDown)               | Checks if a virtual gamepad button on the Joystick is pressed                |       |
| [isVibrationSupported](https://love2d.org/wiki/Joystick:isVibrationSupported) | Gets whether the Joystick supports vibration                                 |       |
| [setVibration](https://love2d.org/wiki/Joystick:setVibration)                 | Sets the vibration motor speeds on a Joystick with rumble support            |       |