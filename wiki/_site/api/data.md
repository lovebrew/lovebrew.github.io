# love.data

<b><i>
Provides functionality for creating and transforming data.
</b></i>

## Functions

| Name                                                             | Description                                                                                                                               |
|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [newByteData](https://love2d.org/wiki/love.data.newByteData)     | Creates a new ByteData object by copying the contents of the specified string or existing ByteData object                                 |
| [compress](https://love2d.org/wiki/love.data.compress)           | Compresses a string or data using a specific compression algorithm                                                                        |
| [decompress](https://love2d.org/wiki/love.data.decompress)       | Decompresses a CompressedData or previously compressed string or Data object                                                              |
| [decode](https://love2d.org/wiki/love.data.decode)               | Decode Data or a string from any of the EncodeFormats to Data or string                                                                   |
| [encode](https://love2d.org/wiki/love.data.encode)               | Encode Data or a string to a Data or string in one of the EncodeFormats                                                                   |
| [hash](https://love2d.org/wiki/love.data.hash)                   | Compute the message digest of a string using a specified hash algorithm                                                                   |
| [newDataView](https://love2d.org/wiki/love.data.newDataView)     | Creates a new Data referencing a subsection of an existing Data object                                                                    |
| [pack](https://love2d.org/wiki/love.data.pack)                   | Packs (serializes) simple Lua values. This function behaves the same as Lua 5.3's string.pack                                             |
| [unpack](https://love2d.org/wiki/love.data.unpack)               | Unpacks (deserializes) a byte-string or Data into simple Lua values. This function behaves the same as Lua 5.3's string.unpack            |
| [getPackedSize](https://love2d.org/wiki/love.data.getPackedSize) | Gets the size in bytes that a given format used with love.data.pack will use. This function behaves the same as Lua 5.3's string.packsize |


<br>

## Types

### Data

**_The superclass of all data. Cannot be instantiated normally._**

| Name       | Description                                       |
|------------|---------------------------------------------------|
| clone      | Creates and returns a new copy of the Data object |
| getPointer | Gets a pointer to the Data                        |
| getSize    | Gets the Data's size in bytes                     |
| getString  | Gets the full Data as a string                    |

<b><i>
These functions are also the same for ByteData and DataView objects.
</b></i>

See also:
- [love.data.newDataView](https://love2d.org/wiki/love.data.newDataView)
- [love.data.newByteData](https://love2d.org/wiki/love.data.newByteData)