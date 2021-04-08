# love.system

<b><i>
Provides access to information about the user's console.
</b></i>

## Functions

| Name                                                                       | Description                                         | Notes                                                                                    |
|----------------------------------------------------------------------------|-----------------------------------------------------|------------------------------------------------------------------------------------------|
| [getOS](https://love2d.org/wiki/love.system.getOS)                         | Gets the current operating system                   |                                                                                          |
| [getProcessorCount](https://love2d.org/wiki/love.system.getProcessorCount) | Gets the amount of logical processor in the system  |                                                                                          |
| [getPowerInfo](https://love2d.org/wiki/love.system.getPowerInfo)           | Gets information about the system's power supply    |                                                                                          |
| getNetworkInfo                                                             | Gets information about the systen's internet status |                                                                                          |
| getLanguage                                                                | Gets the current set language on the console        |                                                                                          |
| getRegion                                                                  | Gets the current set region on the console          |                                                                                          |
| getModel                                                                   | Gets the current console model                      | Examples include N3DSXL, 3DS, Mariko and Erista                                          |
| getUsername                                                                | Gets the current username on the console (or app)   | On Switch, this is determined per-app due to the way games launch with multiple accounts |
| getVersion                                                                 | Gets the current system firmware version            |                                                                                          |