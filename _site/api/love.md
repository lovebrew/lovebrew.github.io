# love

## Functions

| Name       | Description                                               |
|------------|-----------------------------------------------------------|
| getVersion | Returns the version of LÖVE the app is compatible against |

<br>

## Constants

| Name              | Description                                                        |
|-------------------|--------------------------------------------------------------------|
| _os               | Returns the OS this is running, "Horizon"                          |
| _version          | Returns the version of LÖVE the app is compatible against          |
| _potion_version   | Returns the version of LÖVE Potion                                 |
| _console_name     | Returns the console the app is running on, "3DS" or "Switch"       |
| _version_major    | Returns the major version of LÖVE the app is compatible against    |
| _version_minor    | Returns the minor version of LÖVE the app is compatible against    |
| _version_revision | Returns the revision version of LÖVE the app is compatible against |
| _version_codename | Returns the codename of LÖVE the app is compatible against         |

<br>

## Callbacks

| Name            | Args                                   | Description                                               |
|-----------------|----------------------------------------|-----------------------------------------------------------|
| load            | `args`                                 | Called on app load                                        |
| update          | `dt`                                   | Called once per frame, usually 1/60                       |
| draw            | `screen`¹                              | Called once per frame, used to render to the screen       |
| focus           | `focused`                              | Called when the app is suspended or unsuspended           |
| gamepadpressed  | `joystick`, `button`                   | Called when the system receives button input              |
| gamepadreleased | `joystick`, `button`                   | Called when the system stops receiving button input       |
| gamepadaxis     | `joystick`, `axis`, `button`           | Called when the system receives stick controller input    |
| touchpressed    | `id`, `x`, `y`, `dx`, `dy`, `pressure` | Called when the system receives touch screen input        |
| touchreleased   | `id`, `x`, `y`, `dx`, `dy`, `pressure` | Called when the system stops receiving touch screen input |
| touchmoved      | `id`, `x`, `y`, `dx`, `dy`, `pressure` | Called when touch screen input moves                      |
| textinput       | `text`                                 | Called after the software keyboard finished being used    |
| errhand         | `message`                              | Called when the app receives a Lua error                  |
| errorhandler    | `message`                              | Called when the app receives a Lua error                  |
| threaderror     | `Thread`, `message`                    | Called when a `Thread` object runs into an error          |
| quit            |                                        | Called when the game is about to quit                     |

<br>

## Third-party Modules

- [socket](https://love2d.org/wiki/socket)
- [utf8](https://love2d.org/wiki/utf8)

## Types

### Object

**_The superclass of all LÖVE types_**

### Functions

| Name                                              | Description                                     |
|---------------------------------------------------|-------------------------------------------------|
| [release](https://love2d.org/wiki/Object:release) | Immediately destroys the object's Lua reference |
| [type](https://love2d.org/wiki/Object:type)       | Gets the type of the object as a string         |
| [typeof](https://love2d.org/wiki/Object:typeof)   | Checks whether an object is of a certain type   |

<br>

### [Variant](https://love2d.org/wiki/Variant)

<br>

¹Nintendo 3DS only. It is set to either `left`, `right`, or `bottom`.

For more detailed information, please see the official [LÖVE Wiki](https://love2d.org/wiki/love#Callbacks)