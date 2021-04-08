# love.sound

<b><i>
This module is responsible for decoding sound files. It can't play the sounds, see love.audio for that.
</b></i>

## Functions

| Name                                                            | Description                                                                 | Notes |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------|-------|
| [newDecoder](https://love2d.org/wiki/love.sound.newDecoder)     | Attempts to find a decoder for the encoded sound data in the specified file |       |
| [newSoundData](https://love2d.org/wiki/love.sound.newSoundData) | Creates a new SoundData                                                     |       |

## Types

### Decoder

<b><i>
An object which can gradually decode a sound file.
</b></i>

See also:
- [Object](api/love?id=Object)
- [love.sound.newDecoder](https://love2d.org/wiki/love.sound.newDecoder)

| Name                                                               | Description                                        | Notes |
|--------------------------------------------------------------------|----------------------------------------------------|-------|
| [clone](https://love2d.org/wiki/Decoder:clone)                     | Create new copy of existing Decoder                |       |
| [getChannelCount](https://love2d.org/wiki/Decoder:getChannelCount) | Returns the number of channels in the stream       |       |
| [getBitDepth](https://love2d.org/wiki/Decoder:getBitDepth)         | Returns the number of bits per sample              |       |
| [getSampleRate](https://love2d.org/wiki/Decoder:getSampleRate)     | Returns the sample rate of the Decoder             |       |
| [getDuration](https://love2d.org/wiki/Decoder:getDuration)         | Gets the duration of the sound file                |       |
| [decode](https://love2d.org/wiki/Decoder:decode)                   | Decodes a chunk of audio data to a SoundData       |       |
| [seek](https://love2d.org/wiki/Decoder:seek)                       | Sets the currently playing position of the Decoder |       |

### SoundData

<b><i>
Contains raw audio samples.
You can not play SoundData back directly. You must wrap a Source object around it.
</b></i>

See also:
- [Object](api/love?id=Object)
- [Data](api/data)
- [love.sounds.newSoundData](https://love2d.org/wiki/love.sound.newSoundData)

| Name                                                                 | Description                                                 | Notes |
|----------------------------------------------------------------------|-------------------------------------------------------------|-------|
| [clone](https://love2d.org/wiki/SoundData:clone)                     | Creates a new copy of the existing SoundData                |       |
| [getBitDepth](https://love2d.org/wiki/SoundData:getBitDepth)         | Returns the number of bits per sample                       |       |
| [getChannelCount](https://love2d.org/wiki/SoundData:getChannelCount) | Returns the number of channels in the SoundData             |       |
| [getDuration](https://love2d.org/wiki/SoundData:getDuration)         | Gets the duration of the sound data                         |       |
| [getSampleCount](https://love2d.org/wiki/SoundData:getSampleCount)   | Returns the sample count of the SoundData                   |       |
| [getSampleRate](https://love2d.org/wiki/SoundData:getSampleRate)     | Returns the sample rate of the SoundData                    |       |
| [setSample](https://love2d.org/wiki/SoundData:setSample)             | Sets the sample at the specified position                   |       |
| [getSample](https://love2d.org/wiki/SoundData:getSample)             | Gets the value of the samplepoint at the specified position |       |
