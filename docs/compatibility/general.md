---
hide_title: true
pagination_label: Compatibility
---

# General

:::info

LÖVE Potion is a work in progress, so things may be missing. Please open an issue on the [GitHub repository](https://github.com/lovebrew/lovepotion) for filing bugs and feature requests.

:::

## Constants

Like LÖVE, LÖVE Potion has defined constants which are useful and can be used for determining platform-specific information.

| Variable               | Description                                   | Value                       |
| ---------------------- | --------------------------------------------- | --------------------------- |
| `love._console`        | The name of the console                       | `3ds`, `switch`, or `wii u` |
| `love._potion_version` | The version of LÖVE Potion                    | e.g. `3.0.0`                |
| `love._os`             | The running "Operating System" of the console | `Horizon`/`Cafe`            |

## Extended System Functions

| Name                         | Description                                                         | Returns                            |
| ---------------------------- | ------------------------------------------------------------------- | ---------------------------------- |
| `love.system.getNetworkInfo` | Returns whether or not the system has an active internet connection | `string` status, `number` strength |
| `love.system.getFriendInfo`  | Returns the information of the user running LÖVE Potion             | `{ name, friend code}`             |

## Filesystem Operations

LÖVE uses physfs as the internal filesystem handler, which is great for abstracting system-dependant filesystem operations. The only caveat is that Horizon (3DS and Switch) and Cafe (Wii U) OSes do not allow the same file to be opened more than once. For example, consider the following:

```lua title='main.lua'
local save_file = love.filesystem.openFile("save.dat", "w") -- create file
save_file:write("lmao testing")

local error = nil

save_file, error = love.filesystem.openFile("save.dat", "r") -- open to read what we want
save_file:read() -- save_file would be nil, so operating on a nil value

print(error) -- might be i/o error or that the OS was busy
```

To resolve this issue, you must either call `File:close()` or set the file object to `nil` before re-opening the file. This should not affect methods like love.filesystem.read/write/append, however since these do not push Lua objects to the stack and will automatically close the File when done doing their operations.

## Hashing Functions (Wii U)

LÖVE itself does not have a big endian implementation for the hashing functions in the data module. Your hashing results will vary due to no proper big endian implementations.

## ImageData (3DS)

:::info

If you’re not familiar with ImageData, please view the [LÖVE Wiki](https://love2d.org/wiki/ImageData)

:::

The main difference between LÖVE and LÖVE Potion when it comes to ImageData is the `rawdata` parameter for the constructor. When it is supplied, the data must be tiled (e.g. with data from a `tex3ds` generated texture). This will throw an error otherwise.
