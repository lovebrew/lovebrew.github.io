---
hide_title: true
---

# Debugging

### Setup

Debugging is a crucial part of game development, and with LÖVE Potion, it's simple to set up.

1. Modify or Create conf.lua

   If the `game` directory does not already contain a `conf.lua` file, [create one](https://love2d.org/wiki/conf.lua). With the file created, it should look like this:

```lua
function love.conf(t)
  t.console = true
end
```

2. Connect Using a TCP Client
   - Use any TCP client tool, such as netcat (nc), or a basic TCP socket script to connect to the console's IP address.
   - There is no timeout limit, so the console will wait until a connection has been established to it.

### Example using netcat (nc)

```
nc <console_ip_address> 8000
```

### Example using python

```py title='main.py'
import socket
import sys

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0)
s.connect((sys.argv[1], 8000))

while True:
  data = s.recv(1024)
  if len(data):
    print(data.decode ("utf-8"), end="")
```

This can be ran by typing `python main.py <console_ip_address>`.

## nestcli

[nestcli](https://github.com/lovebrew/nestcli) is a command-line tool for LÖVE Potion games, designed to streamline the development process by providing a command-line interface for managing and connecting to debug targets over a network. It offers a range of features, including:

- Connecting to debug targets over a network
- Debugging LÖVE Potion crash dumps via addr2line
- Creating bundles for the bundler website
