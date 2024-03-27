## Przegląd

Framework LÖVE korzysta ze specjalnego pliku, `conf.lua`, do konfiguracji. Więcej informacji na jego temat znajdziesz [tutaj](https://love2d.org/wiki/Config_Files). Ważnym elementem konfiguracji z punktu debugowania jest flaga `console`. Po ustawieniu jej wartości na `true` LÖVE Potion będzie oczekiwać na połączenie TCP. Po ustaleniu takiego połączenia, wszelkie wywołania funkcji `print` przekierowane będą do klienta.

Przykładowymi sposobami na połączenie się z konsolą są:

1. telnet
2. netcat
3. Skrypt korzystający z socketów TCP¹
4. ncat

W każdym z tych przypadków musisz ustalić połączenie z adresem IP swojej konsoli na porcie `8000`. Czas oczekiwania na połączenie jest nieograniczony, więc LÖVE Potion wstrzyma wykonanie twojego kodu dopóki połączenie nie zostanie nawiązane.

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
