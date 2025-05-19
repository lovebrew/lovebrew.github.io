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
| `love._console`        | The name of the console                       | `3DS`, `Switch`, or `Wii u` |
| `love._potion_version` | The version of LÖVE Potion                    | e.g. `3.0.0`                |
| `love._os`             | The running "Operating System" of the console | `Horizon`/`Cafe`            |

## Extended System Functions

| Name                         | Description                                                         | Returns                            |
| ---------------------------- | ------------------------------------------------------------------- | ---------------------------------- |
| `love.system.getNetworkInfo` | Returns whether or not the system has an active internet connection | `string` status, `number` strength |
| `love.system.getFriendInfo`  | Returns the information of the user running LÖVE Potion             | `{ name: string, code: string }`   |
| `love.system.getPlayCoins`   | Returns the number of Play Coins on the Nintendo 3DS system         | `integer` coins                     |
| `love.system.setPlayCoins`   | Sets the number of Play Coins on the Nintendo 3DS system            | `nil`                              |

## Hashing Functions (Wii U)

LÖVE itself does not have a big endian implementation for the hashing functions in the data module. Your hashing results will vary due to no proper big endian implementations.

## ImageData (3DS)

:::info

If you’re not familiar with ImageData, please view the [LÖVE Wiki](https://love2d.org/wiki/ImageData)

:::

The main difference between LÖVE and LÖVE Potion when it comes to ImageData is the `rawdata` parameter for the constructor. When it is supplied, the data must be tiled (e.g. with data from a `tex3ds` generated texture). This will throw an error otherwise.
