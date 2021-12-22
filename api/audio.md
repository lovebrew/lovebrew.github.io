# love.audio

<b><i>
Provides of audio interface for playback/recording sound.
</b></i>

## Functions

| Name                                                      | Description                                             |
|-----------------------------------------------------------|---------------------------------------------------------|
| [getVolume](https://love2d.org/wiki/love.audio.getVolume) | Returns the master volume                               |
| [newSource](https://love2d.org/wiki/love.audio.newSource) | Creates a new Source from a file, SoundData, or Decoder |
| [pause](https://love2d.org/wiki/love.audio.pause)         | Pauses specific or all currently played Sources         |
| [play](https://love2d.org/wiki/love.audio.play)           | Plays the specified Source or multiple Sources          |
| [setVolume](https://love2d.org/wiki/love.audio.setVolume) | Sets the master volume                                  |
| [stop](https://love2d.org/wiki/love.audio.stop)           | Stops a specified playing source or all Sources         |

<br>

## Types

### Source

<b><i>
A Source represents audio you can play back. The source is internally referenced as long as it is playing.
</b></i>

See also:
* [love.audio.newSource](https://love2d.org/wiki/love.audio.newSource)
* [Object](api/love?id=Object)

| Name                                                                    | Description                                       | Notes                                                  |
|-------------------------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------|
| [clone](https://love2d.org/wiki/Source:clone)                           | Clones this Source                                |                                                        |
| [getChannelCount](https://love2d.org/wiki/Source:getChannelCount)       | Get the number of channels on the Source          |                                                        |
| [getFreeBufferCount](https://love2d.org/wiki/Source:getFreeBufferCount) | Get the number of free buffers on the Source      | Partially implemented. Needs `stream` source reporting |
| [getType](https://love2d.org/wiki/Source:getType)                       | Gets the type of the Source                       |                                                        |
| [getVolume](https://love2d.org/wiki/Source:getVolume)                   | Gets the current volume of the Source             |                                                        |
| [getVolumeLimits](https://love2d.org/wiki/Source:getVolumeLimits)       | Returns the volume limits of the Source           |                                                        |
| [isLooping](https://love2d.org/wiki/Source:isLooping)                   | Returns whether the Source will loop              |                                                        |
| [isPlaying](https://love2d.org/wiki/Source:isPlaying)                   | Returns whether the Source is playing             |                                                        |
| [pause](https://love2d.org/wiki/Source:pause)                           | Pauses the Source                                 |                                                        |
| [play](https://love2d.org/wiki/Source:play)                             | Plays the source                                  |                                                        |
| [seek](https://love2d.org/wiki/Source:seek)                             | Sets the currently playing position of the Source |                                                        |
| [setLooping](https://love2d.org/wiki/Source:setLooping)                 | Sets whether the Source should loop               |                                                        |
| [setVolume](https://love2d.org/wiki/Source:setVolume)                   | Sets the current volume of the Source             |                                                        |
| [setVolumeLimits](https://love2d.org/wiki/Source:setVolumeLimits)       | Sets the volume limits of the source              |                                                        |
| [stop](https://love2d.org/wiki/Source:stop)                             | Stops a source                                    |                                                        |

<br>
