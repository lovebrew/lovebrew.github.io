?> Oto lista najczęściej zadawanych pytańna temat LÖVE Potion.

### Czy mogę uruchomić na tym swoją grę napisaną w LÖVE?

Uruchomienie swojej gry bez żadnych zmian jest możliwe, ale zaleca się używać LÖVE Potion do tworzenia nowych gier od zera.<br>
Zajrzyj do sekcji [Kompatybilność](/translations/pl-pl/compatibility) oraz dokumentacji API, by dowiedzieć się co może wymagać zmian.

### Mogę pomóc?

Tak, sprawdź sekcję [Kompilacja](/translations/pl-pl/building) by dowiedzieć się więcej.

### LÖVE Potion brakuje 'tej' lub 'tamtej' funkcjonalności z LÖVE, potrzebuję jej!

Świetnie, że mówisz! Otwórz proszę wątek na GitHub, to pomoże mi zapamiętać i śledzić postępy co do Twojej prośby. Chętnie zaimplementuję brakującą funkcjonalność, jeśli tylko jest ona możliwa do wykonania.

### Wyskoczył mi błąd Lua! Aplikacja zcrashowała! Co mam zrobić?

!> Uwaga: nie wspieramy używania CFW innych niż Atmosphère.

Jeśli to błąd w programowaniu, dołącz do społeczności LÖVE Potion na Discord i poproś o pomoc!<br>
Jeśli napotkasz inny błąd, taki jak wyjątek arm11 (3DS) lub fatal (Switch), utwórz proszę wątek na GitHub z odpowiednimi plikami.<br>

logi arm11:
- sdmc:/luma/dumps/arm11

wyjątki fatal:
- sdmc:/atmosphere/crash_reports

### Super! Wyślę swoją grę do Nintendo i wyprodukują mi kartridż a potem-

Hola hola, LÖVE Potion jest tylko do pisania Homebrew. Nie wypuścisz na tym prawdziwej gry konsolowej. Nie wiem, skontaktuj się z Nintendo jeśli taki jest twój cel.

### Mogę uruchomić na tym Mari0?!

Wiesz, gdyby ktoś dawał mi grosika za każdym razem kiedy słyszę to pytanie odkąd LÖVE Potion istnieje, byłaby z tego niezła suma. A co do pytania: nie. Jeszcze nie.

### Dlaczego tak długo zajęło opracowanie debugowania gier?

To pytanie może i nie jest jeszcze często zadawane, ale będzie. Najprościej rzecz ujmując, przez ten cały czas LÖVE Potion nie miało żadnych porządnych sposobów na debugowanie z wyjątkiem loggera w kompilacjach deweloperskich. Ten z kolei wypisywał tekst do pliku na karcie SD. Problem nie leży nawet w *prędkości* tego rozwiązania, a raczej w tym, że żywotność karty SD jest mocno skracana przez wielokrotne zapisy do pliku, szczególnie jeśli logowanie jest w czymś jak `love.update`.
