# love.graphics

<b><i>
The primary responsibility for the love.graphics module is the drawing of lines, shapes, text, Images and other Drawable objects onto the screen.

Its secondary responsibilities include loading external files (including Images and Fonts) into memory, creating specialized objects (such as ParticleSystems or Canvases) and managing screen geometry.

LÖVE's coordinate system is rooted in the upper-left corner of the screen, which is at location (0, 0).

The x axis is horizontal: larger values are further to the right. The y axis is vertical: larger values are further towards the bottom.

It is worth noting that the location (0, 0) aligns with the upper-left corner of the pixel as well, meaning that for some functions you may encounter off-by-one problems in the render output when drawing 1 pixel wide lines.
You can try aligning the coordinate system with the center of pixels rather than their upper-left corner. Do this by passing `x + 0.5` and `y + 0.5` or using love.graphics.translate().
</b></i>

## Functions

| Name                                                                                 | Description                                                                                                        | Notes                                                                     |
|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [arc](https://love2d.org/wiki/love.graphics.arc)                                     | Draws an arc                                                                                                       |                                                                           |
| [applyTransform](https://love2d.org/wiki/love.graphics.applyTransform)               | Applies the given Transform object to the current coordinate transformation                                        |                                                                           |
| [circle](https://love2d.org/wiki/love.graphics.circle)                               | Draws a circle                                                                                                     |                                                                           |
| [clear](https://love2d.org/wiki/love.graphics.clear)                                 | Clears the screen or active Canvas to the specified color                                                          |                                                                           |
| [draw](https://love2d.org/wiki/love.graphics.draw)                                   | Draws objects on screen                                                                                            |                                                                           |
| [ellipse](https://love2d.org/wiki/love.graphics.ellipse)                             | Draws an ellipse                                                                                                   |                                                                           |
| getActiveScreen                                                                      | Gets the currently rendering screen                                                                                |                                                                           |
| [getBackgroundColor](https://love2d.org/wiki/love.graphics.getBackgroundColor)       | Gets the current background color                                                                                  |                                                                           |
| getBlendFactor                                                                       | Gets the current blend factor [0 - 1]                                                                              | Only available on Nintendo 3DS                                            |
| [getColor](https://love2d.org/wiki/love.graphics.getColor)                           | Gets the current color                                                                                             |                                                                           |
| [getDefaultFilter](https://love2d.org/wiki/love.graphics.getDefaultFilter)           | Returns the default scaling filters used with Images, Canvases, and Fonts                                          |                                                                           |
| [getDimensions](https://love2d.org/wiki/love.graphics.getDimensions)                 | Gets the width and height of the window                                                                            | On 3DS, you may pass "top" or "bottom" to get a specific screen's size    |
| [getFont](https://love2d.org/wiki/love.graphics.getFont)                             | Gets the currently set Font object                                                                                 |                                                                           |
| [getHeight](https://love2d.org/wiki/love.graphics.getHeight)                         | Gets the height in pixels of the window                                                                            |                                                                           |
| [getLineWidth](https://love2d.org/wiki/love.graphics.getLineWidth)                   | Gets the current line width                                                                                        |                                                                           |
| [getPointSize](https://love2d.org/wiki/love.graphics.getPointSize)                   | Gets the current point size                                                                                        |                                                                           |
| [getStereoscopicDepth](https://love2d.org/wiki/love.graphics.getStereoscopicDepth)   | Gets the current 3D slider value on 3DS (0 ~ 1), useful for "3D rendering"                                         | This will throw an error on Switch as it is not supported on there        |
| [getRendererInfo](https://love2d.org/wiki/love.graphics.getRendererInfo)             | Gets information about the system's video card and drivers                                                         |                                                                           |
| [getScissor](https://love2d.org/wiki/love.graphics.getScissor)                       | Gets the current scissor box                                                                                       |                                                                           |
| getScreens                                                                           | Get the names of the renderable screens                                                                            |                                                                           |
| [getWidth](https://love2d.org/wiki/love.graphics.getWidth)                           | Gets the width in pixels of the window                                                                             | On 3DS, you may pass "top" or "bottom" to get a specific screen's width   |
| [instersectScissor](https://love2d.org/wiki/love.graphics.instersectScissor)         | Sets the scissor to the rectangle created by the intersection of the specified rectangle with the existing scissor |                                                                           |
| [inverseTransformPoint](https://love2d.org/wiki/love.graphics.inverseTransformPoint) | Converts the given 2D position from screen-space into global coordinates                                           |                                                                           |
| [line](https://love2d.org/wiki/love.graphics.line)                                   | Draws lines between points                                                                                         |                                                                           |
| [newCanvas](https://love2d.org/wiki/love.graphics.newCanvas)                         | Creates a new Canvas                                                                                               |                                                                           |
| [newFont](https://love2d.org/wiki/love.graphics.newFont)                             | Creates a new Font                                                                                                 | 3DS: convert fonts to bcfnt; Switch: only TrueType right now              |
| [newImage](https://love2d.org/wiki/love.graphics.newImage)                           | Creates a new Image                                                                                                | 3DS: convert images to t3x; Switch: png and jpg are supported             |
| [newText](https://love2d.org/wiki/love.graphics.newText)                             | Creates a new drawable Text object                                                                                 |                                                                           |
| [newQuad](https://love2d.org/wiki/love.graphics.newQuad)                             | Creates a new Quad                                                                                                 |                                                                           |
| [origin](https://love2d.org/wiki/love.graphics.origin)                               | Resets the current coordinate transformation                                                                       |                                                                           |
| [polygon](https://love2d.org/wiki/love.graphics.polygon)                             | Draw a polygon                                                                                                     |                                                                           |
| [pop](https://love2d.org/wiki/love.graphics.pop)                                     | Pops the current coordinate transformation from the transformation stack                                           |                                                                           |
| [points](https://love2d.org/wiki/love.graphics.points)                               | Draws one or more points                                                                                           | Not implemented on 3DS yet                                                |
| [present](https://love2d.org/wiki/love.graphics.present)                             | Displays the results of drawing operations on the screen                                                           |                                                                           |
| [print](https://love2d.org/wiki/love.graphics.print)                                 | Draws text on screen. If no Font is set, one will be created and set (once) if needed                              |                                                                           |
| [printf](https://love2d.org/wiki/love.graphics.printf)                               | Draws formatted text, with word wrap and alignment                                                                 | LÖVE and Switch both do by character wrapping, 3DS does by word           |
| [push](https://love2d.org/wiki/love.graphics.push)                                   | Copies and pushes the current coordinate transformation to the transformation stack                                |                                                                           |
| [rectangle](https://love2d.org/wiki/love.graphics.rectangle)                         | Draws a rectangle                                                                                                  |                                                                           |
| [replaceTransform](https://love2d.org/wiki/love.graphics.replaceTransform)           | Replaces the current coordinate transformation with the given Transform object                                     |                                                                           |
| [reset](https://love2d.org/wiki/love.graphics.reset)                                 | Resets the current graphics settings                                                                               |                                                                           |
| [rotate](https://love2d.org/wiki/love.graphics.rotate)                               | Rotates the coordinate system in two dimensions                                                                    |                                                                           |
| [scale](https://love2d.org/wiki/love.graphics.scale)                                 | Scales the coordinate system in two dimensions                                                                     |                                                                           |
| [shear](https://love2d.org/wiki/love.graphics.shear)                                 | Shears the coordinate system                                                                                       |                                                                           |
| setActiveScreen                                                                      | Sets the current screen to be rendered                                                                             | Used internally, do not call this                                         |
| [setBackgroundColor](https://love2d.org/wiki/love.graphics.setBackgroundColor)       | Sets the background color                                                                                          |                                                                           |
| setBlendFactor                                                                       | Sets the blend factor [0 - 1]; Nintendo 3DS Only                                                                   | num >= 0 enables colorized tinting for images and 0 disables it           |
| [setCanvas](https://love2d.org/wiki/love.graphics.setCanvas)                         | Captures drawing operations to a Canvas                                                                            |                                                                           |
| [setColor](https://love2d.org/wiki/love.graphics.setColor)                           | Sets the color used for drawing                                                                                    | On 3DS, only the alpha component will affect textures due to a limitation |
| [setDefaultFilter](https://love2d.org/wiki/love.graphics.setDefaultFilter)           | Sets the default scaling filters used with Images, Canvases, and Fonts                                             |                                                                           |
| [setLineWidth](https://love2d.org/wiki/love.graphics.setLineWidth)                   | Sets the line width                                                                                                |                                                                           |
| [setNewFont](https://love2d.org/wiki/love.graphics.setNewFont)                       | Creates and sets a new Font                                                                                        |                                                                           |
| [setPointSize](https://love2d.org/wiki/love.graphics.setPointSize)                   | Sets the point size                                                                                                |                                                                           |
| [setFont](https://love2d.org/wiki/love.graphics.setFont)                             | Set an already-loaded Font as the current font                                                                     |                                                                           |
| [setScissor](https://love2d.org/wiki/love.graphics.setScissor)                       | Sets or disables scissor                                                                                           |                                                                           |
| [transformPoint](https://love2d.org/wiki/love.graphics.transformPoint)               | Converts the given 2D position from global coordinates into screen-space                                           |                                                                           |
| [translate](https://love2d.org/wiki/love.graphics.translate)                         | Translates the coordinate system in two dimensions                                                                 |                                                                           |

## Types

### Texture

<b><i>
Superclass for drawable objects which represent a texture.<br>
All Textures can be drawn with Quads. This is an abstract type that can't be created directly.
</b></i>

See also:
- [Object](api/love?id=Object)

| Name                                                             | Description                               | Notes |
|------------------------------------------------------------------|-------------------------------------------|-------|
| [getTextureType](https://love2d.org/wiki/Texture:getTextureType) | Gets the type of the Texture              |       |
| [getWidth](https://love2d.org/wiki/Texture:getWidth)             | Gets the width of the Texture             |       |
| [getHeight](https://love2d.org/wiki/Texture:getHeight)           | Gets the height of the Texture            |       |
| [getDimensions](https://love2d.org/wiki/Texture:getDimensions)   | Gets the width and height of the Texture  |       |
| [setFilter](https://love2d.org/wiki/Texture:setFilter)           | Sets the filter mode of the Texture       |       |
| [getFilter](https://love2d.org/wiki/Texture:getFilter)           | Gets the filter mode of the Texture       |       |
| [setWrap](https://love2d.org/wiki/Texture:setWrap)               | Sets the wrapping properties of a Texture |       |
| [getWrap](https://love2d.org/wiki/Texture:getWrap)               | Gets the wrapping properties of a Texture |       |

### Canvas

<b><i>
A Canvas is used for off-screen rendering.<br>
Think of it as an invisible screen that you can draw to, but that will not be visible until you draw it to the actual visible screen.<br>
It is also known as "render to texture".<br>

By drawing things that do not change position often (such as background items) to the Canvas, and then drawing the entire Canvas instead of each item, you can reduce the number of draw operations performed each frame
</b></i>

See also:
- [Texture](#texture)
- [Object](api/love?id=Object)
- [love.graphics.newCanvas](https://love2d.org/wiki/love.graphics.newCanvas)

| Name                                                | Description                         | Notes |
|-----------------------------------------------------|-------------------------------------|-------|
| [renderTo](https://love2d.org/wiki/Canvas:renderTo) | Render to a Canvas using a function |       |

### Image

<b><i>
Drawable image type.
</b></i>

!> Images on 3DS will need to be converted to a `*.t3x` format prior to use. See [compatibility](compatibility?id=drawing) for more information.

See also:
- [Texture](#texture)
- [Object](api/love?id=Object)
- [love.graphics.newImage](https://love2d.org/wiki/love.graphics.newImage)
### Quad

<b><i>
A quadrilateral (a polygon with four sides and four corners) with Texture coordinate information.<br>
Quads can be used to select part of a texture to draw. In this way, one large texture atlas can be loaded, and then split up into sub-images.
</b></i>

See also:
- [Object](api/love?id=Object)
- [love.graphics.newQuad](https://love2d.org/wiki/love.graphics.newQuad)

| Name                                                                      | Description                                                                    | Notes |
|---------------------------------------------------------------------------|--------------------------------------------------------------------------------|-------|
| [getTextureDimensions](https://love2d.org/wiki/Quad:getTextureDimensions) | Gets reference texture dimensions initially specified in love.graphics.newQuad |       |
| [getViewport](https://love2d.org/wiki/Quad:getViewport)                   | Gets the current viewport of this Quad                                         |       |
| [setViewport](https://love2d.org/wiki/Quad:setViewport)                   | Sets the texture coordinates according to a viewport                           |       |

!> On Nintendo 3DS, Text and Font objects (via `love.graphics.print`) have a limit of 512 characters that can be printed at one time. This is due to the tight limitations on the console. System fonts also do not carry the tab character (`\t`) and will render as a `[?]` glyph.

### Font

<b><i>
Defines the shape of characters that can be drawn onto the screen.
</b></i>

!> Fonts on 3DS will need to be converted to a `*.bcfnt` format prior to use. See [compatibility](compatibility?id=system-font-loading) for more information.

See also:
- [Object](api/love?id=Object)
- [love.graphics.newFont](https://love2d.org/wiki/love.graphics.newFont)

| Name                                                | Description                           | Notes |
|-----------------------------------------------------|---------------------------------------|-------|
| [getHeight](https://love2d.org/wiki/Font:getHeight) | Gets the height of the Font in pixels |       |
| [getWidth](https://love2d.org/wiki/Font:getWidth)   | Gets the width of the given text      |       |

### Text

<b></i>
Drawable text.
</b></i>

See also:
- [Object](api/love?id=Object)
- [love.graphics.newText](https://love2d.org/wiki/love.graphics.newText)

| Name                                                        | Description                                                                           | Notes                                                                          |
|-------------------------------------------------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [add](https://love2d.org/wiki/Text:add)                     | Adds additional colored text to the Text object at the specified position             |                                                                                |
| [addf](https://love2d.org/wiki/Text:addf)                   | Adds additional formatted / colored text to the Text object at the specified position | On 3DS, text can be added, but it does not allow multiple wrap and align modes |
| [clear](https://love2d.org/wiki/Text:clear)                 | Clears the contents of the Text object                                                |                                                                                |
| [getDimensions](https://love2d.org/wiki/Text:getDimensions) | Gets the width and height of the text                                                 |                                                                                |
| [getFont](https://love2d.org/wiki/Text:getFont)             | Gets the Font used with the Text object                                               |                                                                                |
| [getHeight](https://love2d.org/wiki/Text:getHeight)         | Gets the height of the text                                                           |                                                                                |
| [getWidth](https://love2d.org/wiki/Text:getWidth)           | Gets the width of the text                                                            |                                                                                |
| [set](https://love2d.org/wiki/Text:set)                     | Replaces the contents of the Text object with a new string                            |                                                                                |
| [setf](https://love2d.org/wiki/Text:setf)                   | Replaces the contents of the Text object with a new formatted string                  |                                                                                |
| [setFont](https://love2d.org/wiki/Text:setFont)             | Replaces the Font used with the text                                                  |                                                                                |
