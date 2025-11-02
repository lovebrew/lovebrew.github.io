# Filesystem

## Exploring the SD Card

:::warning

    Modifying or deleting important files that live on the SD Card can lead to problems.

:::

LÖVE Potion allows you to access files directly from the SD card using [`love.filesystem.mountFullPath`](https://love2d.org/wiki/love.filesystem.mountFullPath). This function gives you read (and sometimes write) access to external folders, enabling you to load assets, save data, or browse content outside your game's sandbox.

```lua
-- for Wii U, the path is /vol/external01
local success = love.filesystem.mountFullPath("sdmc:/", "sdmc", "read", true)
if not success then print("Failed to mount SD card!") end
```

## Gotchas

LÖVE uses physfs as the internal filesystem handler, which is great for abstracting system-dependant filesystem operations. The only caveat is that Horizon (3DS and Switch) and Cafe (Wii U) OSes do not allow the same file to be opened more than once without being **closed** first. For example, consider the following:

```lua title='main.lua'
local save_file = love.filesystem.openFile("save.dat", "w") -- create file
save_file:write("lmao testing")

local error = nil

save_file, error = love.filesystem.openFile("save.dat", "r") -- open to read what we want
save_file:read() -- save_file would be nil, so operating on a nil value

print(error) -- might be i/o error or that the OS was busy
```

To resolve this issue, you must either call `File:close()` or set the file object to `nil` before re-opening the file. This should not affect methods like love.filesystem.read/write/append, however since these do not push Lua objects to the stack and will automatically close the File when done doing their operations.
