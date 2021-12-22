### Initial Setup

Download the [latest release of nëstlink](https://github.com/lovebrew/nestlink/releases/latest) to your computer for your Operating System. Extract the contents of the zip file to a memorable location, somewhere you won't forget. Now, open your terminal in the same directory that the application is in and execute the application by typing `nestlink` ¹ . It will start the server and begin listening for connections.²

However, this won't easily let you connect since there is an acceptance list for IP addresses. The server, for security reasons, will need to know what to allow to connect. If you pass in a list of IP addresses separated by a comma (`,`), it will allow these to connect.

¹Windows users may need to type `nestlink.exe` or `./nestlink.exe` .

²If the initial port (`8000`) does _not_ work for you, you may need to change this value by passing in a new port number as an argument.

### Clientside (Console) Setup

The LÖVE framework has a special file, `conf.lua` . There is [more information about this here](https://love2d.org/wiki/Config_Files). However, the specific item to configure is the `console` flag. LÖVE typically just uses a `boolean` to enable or it. The same is technically true for LÖVE Potion, although here it uses a table or string, which as Lua rules are, anything not `false` or `nil` is truthy.

If a single string is supplied, LÖVE Potion will try to use the IP address provided to connect to the remote server. The table option, however, is in the format `{string IP, number Port, boolean Debug}` . Debugging is recommended to be off at all times to reduce writing data to the µSD card. The easiest way is to only provide the IP and Port values.

All `print` calls will then be redirected to the server accordingly.

```lua
function love.conf(t)
    -- Example configuration
    t.console = {"192.168.1.20", 25545}
end
```
