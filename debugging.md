## Overview

The LÖVE framework has a special file, `conf.lua`. There is [more information about this here](https://love2d.org/wiki/Config_Files). However, the specific item to configure is the `console` flag. Set this to `true` and the next time LÖVE Potion runs it will wait for an incoming TCP connection. Once this is established, any `print` calls will be redirected to the client.

Some of the ways to establish the connection to your console include:

1. telnet
2. netcat
3. TCP socket script¹
4. ncat

In any of these cases, you must connect to the IP address of your console at port `8000`. There is no timeout duration, so the LÖVE Potion will pause execution of your code until a connection is made.

¹Scripts

<!-- tabs:start -->

#### **python**

```py
import socket
import sys

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0)
s.connect((sys.argv[1], 8000))

while True:
  data = s.recv(1024)
  if len(data):
    print(data.decode ("utf-8"), end="")
```

<!-- tabs:end -->
