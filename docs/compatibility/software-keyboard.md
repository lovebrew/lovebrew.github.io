---
hide_title: true
---

# Software Keyboard

## What is the Software Keyboard Applet?

The system software keyboard applet is a built-in feature on the consoles that provides an on-screen keyboard interface. This applet is used for text input in various applications and games, offering a familiar and consistent way for users to enter text using the console's hardware.

## How it Works

When you need to input text within your game or application, simply call `love.keyboard.setTextInput(true)`. The system software keyboard applet is then invoked, displaying an on-screen keyboard. Users can then type using the console's controls or touchscreen, and the text is passed back to your application through the `love.textinput` callback.

## Differences

In LÖVE Potion, the `love.keyboard.setTextInput` function differs from standard LÖVE by accepting a second argument as a table of options. These options modify the behavior of the software keyboard, rather than offsetting it. Here’s the list of options:

## Options

| Option   | Type    | Notes                                         | Default          |
| -------- | ------- | --------------------------------------------- | ---------------- |
| type     | string  | `basic`, `numpad`, and `standard`<sup>1</sup> | `basic`          |
| password | boolean | Makes text hidden after entry                 | `false`          |
| hint     | string  | Text to prompt for on input                   | `"Enter String"` |
| length   | number  | Maximum length of the input string            | `20`             |

<sup>1</sup> Nintendo Switch only

```lua title='main.lua'
-- Example usage in LÖVE Potion
love.keyboard.setTextInput(true, {
    type = "basic",
    password = false,
    hint = "Enter your username"
})
```
