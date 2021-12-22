# love.filesystem

<b><i>
Provides an interface to the user's filesystem.

This module provides access to files in specific places:

* The root folder of the .love archive (or source directory)
* The root folder of the game's save directory.
* The folder containing the game's .love archive (or source directory), but only if specific conditions are met.

Save data will always be written next to the application.<br>
If the app is not fused (compiled into a ROMFS with LÖVE Potion), it is in `{CURRENT_DIRECTORY}/save/{identity}` .
Otherwise, it will be under `{CURRENT_DIRECTORY}/save`

`{CURRENT_DIRECTORY}` is the directory containing the application (3dsx or nro)

</b></i>

?> You can also access files on the SD Card itself using the standard `io` library!

## Functions

| Name                                                                                     | Description                                                                             | Notes |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-------|
| [init](https://love2d.org/wiki/love.filesystem.init)                                     | Initializes love.filesystem, will be called internally, so should not be used explictly |       |
| [append](https://love2d.org/wiki/love.filesystem.append)                                 | Append data to an existing file                                                         |       |
| [createDirectory](https://love2d.org/wiki/love.filesystem.createDirectory)               | Creates a directory                                                                     |       |
| [getDirectoryItems](https://love2d.org/wiki/love.filesystem.getDirectoryItems)           | Returns all the files and subdirectories in the directory                               |       |
| [getIdentity](https://love2d.org/wiki/love.filesystem.getIdentity)                       | Gets the write directory name for your game                                             |       |
| [getInfo](https://love2d.org/wiki/love.filesystem.getInfo)                               | Gets information about the specified file or directory                                  |       |
| [getRealDirectory](https://love2d.org/wiki/love.filesystem.getRealDirectory)             | Gets the absolute path of the directory containing a filepath                           |       |
| [getRequirePath](https://love2d.org/wiki/love.filesystem.getRequirePath)                 | Gets the filesystem paths that will be searched when require is called                  |       |
| [getSaveDirectory](https://love2d.org/wiki/love.filesystem.getSaveDirectory)             | Gets the full path to the designated save directory                                     |       |
| [getSourceBaseDirectory](https://love2d.org/wiki/love.filesystem.getSourceBaseDirectory) | Returns the full path to the directory containing the .love file                        |       |
| [getSource](https://love2d.org/wiki/love.filesystem.getSource)                           | Returns the full path to the .love file or directory                                    |       |
| [getUserDirectory](https://love2d.org/wiki/love.filesystem.getUserDirectory)             | Returns the path of the user's directory                                                |       |
| [getWorkingDirectory](https://love2d.org/wiki/love.filesystem.getWorkingDirectory)       | Gets the current working directory                                                      |       |
| [isFused](https://love2d.org/wiki/love.filesystem.isFused)                               | Gets whether the game is in fused mode or not                                           |       |
| [lines](https://love2d.org/wiki/love.filesystem.lines)                                   | Iterate over the lines in a file                                                        |       |
| [load](https://love2d.org/wiki/love.filesystem.load)                                     | Loads a Lua file (but does not run it)                                                  |       |
| [mount](https://love2d.org/wiki/love.filesystem.mount)                                   | Mounts a zip file or folder in the game's save directory for reading                    |       |
| [newFile](https://love2d.org/wiki/love.filesystem.newFile)                               | Creates a new File object                                                               |       |
| [newFileData](https://love2d.org/wiki/love.filesystem.newFileData)                       | Creates a new FileData object from a file on disk, or from a string in memory           |       |
| [read](https://love2d.org/wiki/love.filesystem.read)                                     | Read the contents of a file                                                             |       |
| [remove](https://love2d.org/wiki/love.filesystem.remove)                                 | Removes a file (or directory)                                                           |       |
| [setIdentity](https://love2d.org/wiki/love.filesystem.setIdentity)                       | Sets the write directory for your game                                                  |       |
| [setRequirePath](https://love2d.org/wiki/love.filesystem.setRequirePath)                 | Sets the filesystem paths that will be searched when require is called                  |       |
| [setSource](https://love2d.org/wiki/love.filesystem.setSource)                           | Sets the source of the game, where the code is present; used internally                 |       |
| [unmount](https://love2d.org/wiki/love.filesystem.unmount)                               | Unmounts a zip file or folder previously mounted with love.filesystem.mount             |       |
| [write](https://love2d.org/wiki/love.filesystem.write)                                   | Write data to a file                                                                    |       |

## Types

### File

<b><i>
Represents a file on the filesystem. A function that takes a file path can also take a File
</b></i>

See also:
* [love.filesystem.newFile](https://love2d.org/wiki/love.filesystem.newFile)
* [Object](api/love?id=Object)

| Name                                                    | Description                                                     |
|---------------------------------------------------------|-----------------------------------------------------------------|
| [close](https://love2d.org/wiki/File:close)             | Closes a File                                                   |
| [flush](https://love2d.org/wiki/File:flush)             | Flushes any buffered written data in the file to disk           |
| [getBuffer](https://love2d.org/wiki/File:getBuffer)     | Gets the buffer mode of a file                                  |
| [getFilename](https://love2d.org/wiki/File:getFilename) | Gets the filename that the File object was created with         |
| [getMode](https://love2d.org/wiki/File:getMode)         | Gets the FileMode the file has been opened with                 |
| [getSize](https://love2d.org/wiki/File:getSize)         | Returns the File's size                                         |
| [isEOF](https://love2d.org/wiki/File:isEOF)             | Gets whether end-of-file has been reached                       |
| [isOpen](https://love2d.org/wiki/File:isOpen)           | Gets whether the file is open                                   |
| [lines](https://love2d.org/wiki/File:lines)             | Iterate over all the lines in a file                            |
| [open](https://love2d.org/wiki/File:open)               | Open the file for write, read or append                         |
| [read](https://love2d.org/wiki/File:read)               | Read a number of bytes from a file                              |
| [seek](https://love2d.org/wiki/File:seek)               | Seek to a position in a file                                    |
| [setBuffer](https://love2d.org/wiki/File:setBuffer)     | Sets the buffer mode for a file opened for writing or appending |
| [tell](https://love2d.org/wiki/File:tell)               | Returns the position in the file                                |
| [write](https://love2d.org/wiki/File:write)             | Write data to a file                                            |

### FileData

<b><i>
Data representing the contents of a file
</b></i>

See also:
* [love.filesystem.newFileData](https://love2d.org/wiki/love.filesystem.newFileData)
* [Data](api/data)
* [Object](api/love?id=Object)

| Name                                                          | Description                           |
|---------------------------------------------------------------|---------------------------------------|
| [clone](https://love2d.org/wiki/FileData:clone)               | Creates a new copy of the Data object |
| [getFilename](https://love2d.org/wiki/FileData:getFilename)   | Gets the filename of the FileData     |
| [getExtension](https://love2d.org/wiki/FileData:getExtension) | Gets the extension of the FileData    |
