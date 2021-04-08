# love.math

<b><i>
Provides system-independent mathematical functions.
</b></i>

## Functions

| Name                                                                       | Description                                                    | Notes |
|----------------------------------------------------------------------------|----------------------------------------------------------------|-------|
| [isConvex](https://love2d.org/wiki/love.math.isConvex)                     | Checks whether a polygon is convex                             |       |
| [newRandomGenerator](https://love2d.org/wiki/love.math.newRandomGenerator) | Creates a new RandomGenerator object                           |       |
| [newTransform](https://love2d.org/wiki/love.math.newTransform)             | Creates a new Transform object                                 |       |
| [gammaToLinear](https://love2d.org/wiki/love.math.gammaToLinear)           | Converts a color from gamma-space (sRGB) to linear-space (RGB) |       |
| [linearToGamma](https://love2d.org/wiki/love.math.linearToGamma)           | Converts a color from linear-space (RGB) to gamma-space (sRGB) |       |
| [triangulate](https://love2d.org/wiki/love.math.triangulate)               | Decomposes a simple polygon into triangles                     |       |
| [colorToBytes](https://love2d.org/wiki/love.math.colorToBytes)             | Converts a color from 0 ~ 1 to 0 ~ 255 range                   |       |
| [colorFromBytes](https://love2d.org/wiki/love.math.colorFromBytes)         | Converts a color from 0 ~ 255 to 0 ~ 1 range                   |       |
| [random](https://love2d.org/wiki/love.math.random)                         | Get uniformly distributed pseudo-random number                 |       |
| [randomNormal](https://love2d.org/wiki/love.math.randomNormal)             | Get a normally distributed pseudo random number                |       |
| [getRandomState](https://love2d.org/wiki/love.math.getRandomState)         | Gets the current state of the random number generator          |       |
| [getRandomSeed](https://love2d.org/wiki/love.math.getRandomSeed)           | Gets the seed of the random number generator                   |       |
| [setRandomSeed](https://love2d.org/wiki/love.math.setRandomSeed)           | Sets the seed of the random number generator                   |       |
| [setRandomState](https://love2d.org/wiki/love.math.setRandomState)         | Sets the current state of the random number generator          |       |

## Types

### RandomGenerator

<b><i>
A random number generation object which has its own random state.
</b></i>

See also:
- [Object](api/love?id=Object)
- [love.math.newRandomGenerator](https://love2d.org/wiki/love.math.newRandomGenerator)

| Name                                                                 | Description                                                       | Notes |
|----------------------------------------------------------------------|-------------------------------------------------------------------|-------|
| [getSeed](https://love2d.org/wiki/RandomGenerator:getSeed)           | Gets the seed of the random number generator                      |       |
| [getState](https://love2d.org/wiki/RandomGenerator:getState)         | Gets the current state of the random number generator             |       |
| [randomNormal](https://love2d.org/wiki/RandomGenerator:randomNormal) | Get a normally distributed pseudo random number                   |       |
| [setSeed](https://love2d.org/wiki/RandomGenerator:setSeed)           | Sets the seed of the random number generator                      |       |
| [setState](https://love2d.org/wiki/RandomGenerator:setState)         | Sets the current state of the random number generator             |       |
| [random](https://love2d.org/wiki/RandomGenerator:random)             | Generates a pseudo-random number in a platform independent manner |       |

### Transform

<b><i>
Object containing a coordinate system transformation.<br>
The love.graphics module has several functions and function variants which accept Transform objects.
</b></i>

See also:
- [Object](api/love?id=Object)
- [love.math.newTransform](https://love2d.org/wiki/love.math.newTransform)

| Name                                                                             | Description                                                                           | Notes |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|-------|
| [clone](https://love2d.org/wiki/Transform:clone)                                 | Creates a new copy of this Transform                                                  |       |
| [inverse](https://love2d.org/wiki/Transform:inverse)                             | Creates a new Transform containing the inverse of this Transform                      |       |
| [apply](https://love2d.org/wiki/Transform:apply)                                 | Applies the given other Transform object to this one                                  |       |
| [isAffine2DTransform](https://love2d.org/wiki/Transform:isAffine2DTransform)     | Checks whether the Transform is an affine transformation                              |       |
| [translate](https://love2d.org/wiki/Transform:translate)                         | Applies a translation to the Transform's coordinate system                            |       |
| [rotate](https://love2d.org/wiki/Transform:rotate)                               | Applies a rotation to the Transform's coordinate system                               |       |
| [scale](https://love2d.org/wiki/Transform:scale)                                 | Scales the Transform's coordinate system                                              |       |
| [shear](https://love2d.org/wiki/Transform:shear)                                 | Applies a shear factor (skew) to the Transform's coordinate system                    |       |
| [reset](https://love2d.org/wiki/Transform:reset)                                 | Resets the Transform to an identity state                                             |       |
| [setTransformation](https://love2d.org/wiki/Transform:setTransformation)         | Resets the Transform to the specified transformation parameters                       |       |
| [setMatrix](https://love2d.org/wiki/Transform:setMatrix)                         | Directly sets the Transform's internal transformation matrix                          |       |
| [getMatrix](https://love2d.org/wiki/Transform:getMatrix)                         | Gets the internal transformation matrix stored by this Transform                      |       |
| [transformPoint](https://love2d.org/wiki/Transform:transformPoint)               | Applies the Transform object's transformation to the given 2D position                |       |
| [inverseTransformPoint](https://love2d.org/wiki/Transform:inverseTransformPoint) | Applies the reverse of the Transform object's transformation to the given 2D position |       |