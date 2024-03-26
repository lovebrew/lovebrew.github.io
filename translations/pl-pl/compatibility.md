!> LÖVE Potion jest w trakcie rozwoju, więc niektórych rzeczy może brakować. Jeśli chcesz poprosić o dodanie jakiejś funkcjonalności, otwórz wątek na [repozytorium GitHub](https://github.com/TurtleP/LovePotion).

## Rysowanie

W odwołaniu `love.draw` przekazywany jest parametr `screen`. Nie ma on zastosowania na konsoli Switch.
Na przykład, jesli chcesz rysować tylko na _jednym_ ekranie. Po prostu użyj wartości zmiennej `screen` w wyrażeniu warunkowym:

```lua
function love.draw(screen)
    if screen ~= "bottom" then
        -- rysowanie tylko na górnym ekranie
    end
end
```

Zmienna `screen` przyjmuje następujące wartości w zależności od konsoli:

- Nintendo 3DS: `left` , `right` oraz `bottom` .
- Nintendo Switch: `default`
- Nintendo Wii U: `tv` oraz `gamepad`

Dodatkowo, tekstury (takie jak pliki `png` lub `jpg`) muszą zostać przekonwertowane na odpowiednie formaty zanim zostaną użyte na Nintendo 3DS.

## Głębia Stereoskopowa 3D

!> Głębia stereoskopowa to funkcjonalność ekskluzywna konsoli Nintendo 3DS. Na systemach z rodziny Nintendo 2DS funkcja zawsze zwróci zero. Jeśli chcesz przetestować głębię 3D, spróbuj poprosić kogoś z konsolą 3DS o pomoc.

Nintendo 3DS ma stereoskopowy efekt 3D -- pozwala to na używanie efektów 3D na górnym ekranie bez potrzeby noszenia okularów 3D. Aby kontrolować tą funkcjonalność, użyj funkcji `love.graphics.getDepth()`. Pozwoli ona odczytać wartość suwaka 3D, w skali od zera do jeden. Przykład zastosowania tej funkcji jest następujacy:

```lua
local str, font = "Hello World", nil
local textDepth = 6
function love.load()
    font = love.graphics.getFont()
end

function love.draw(screen)
    if screen == "bottom" then
        return
    end

    local sysDepth = -love.graphics.getDepth()

    if screen == "right" then
        sysDepth = -sysDepth
    end

    local left = math.floor(0.5 * (400 - font:getWidth(str)))
    love.graphics.print("Hello World", left - sysDepth * textDepth, 120)
end
```

Definiujemy miejsce głównej współrzędnej `x` jako `left`. To będzie nasz punkt odniesienia. W tym przypadku: sam środek ekranu. Następnie od tej wartości odejmowana jest wartość głębi pomnożona przez stałą `z`.

## Ładowanie czcionek systemowych

Można załadować czcionkę systemową używając jednej z następujących nazw zamiast ścieżki do pliku w `love.graphics.newFont`:

### Nintendo 3DS oraz Wii U

| Nazwa     | Uwagi                                         |
| --------- | --------------------------------------------- |
| standard  | Czcionka dla regionów JPN, USA, EUR, oraz AUS |
| chinese   | Chińska czcionka                              |
| korean    | Koreańska czcionka                            |
| taiwanese | Tajwańska czcionka                            |

### Nintendo Switch

| Nazwa                       | Uwagi                                         |
| --------------------------- | --------------------------------------------- |
| standard                    | Czcionka dla regionów JPN, USA, EUR, oraz AUS |
| chinese simplified          | Uproszczona Chińska czcionka                  |
| chinese traditional         | Tradycyjna Chińska czcionka                   |
| extended chinese simplified | Rozszerzona Uproszczona Chińska czcionka      |
| korean                      | Koreańska czcionka                            |
| nintendo extended           | Czcionka Nintendo Extended Symbols            |

Należy pamiętać, że użycie własnych, niestandardowych czcionek TrueType lub OpenType na Nintendo 3DS wymaga ich przekonwertowania do formatu `bcnft`. Można tego dokonać podczas pakowania gry z użyciem [strony bundlera](/translations/pl-pl/packaging.md). 

Czcionka standardowa na Nintendo 3DS zawiera dane glifów różnych symboli, takich jak ikona Play Coin. Za to na konsoli Nintendo Switch, te znaki trzymane są w czcionce Nintendo Extended Symbols. Oto prosty przykład:

```lua
local utf8 = require("utf8")

-- wyciągnij enkodowaną wartość utf8 ikony Play Coin
local glyph = utf8.char("0xE075")

function love.load()
    -- jeśli jesteśmy na Switch, ustaw czcionkę extended jako używaną
    if love._console == "Switch" then
        love.graphics.setNewFont("nintendo extended", 14)
    end
end

function love.draw(screen)
    -- To wyświetli się tylko na górnym ekranie 3DS
    -- Na Switch wyświetli się normalnie
    if (screen and screen ~= "top") then
        return
    end

    love.graphics.print(glyph)
end
```

## ImageData na 3DS

?> Jeśli nie wiesz czym jest ImageData lub jak z niej korzystać, odwiedź [LÖVE Wiki](https://love2d.org/wiki/ImageData)

Główną różnicą pomiędzy LÖVE and LÖVE Potion jeśli chodzi o ImageData jest parametr `rawdata` w konstruktorze. Jeśli jest używany, dane muszą być specjalnie kafelkowane (np. dane z tekstury \*.t3x). W przeciwnym wypadku funkcja wyrzuci błąd.

## Rozszerzone Funkcje Systemowe

Ponieważ konsole Nintendo korzystające z LÖVE Potion różnią się nieco od typowego środowiska LÖVE, dodano następujące funkcje do modułu `system`:

- `love.system.getNetworkInfo()`
  - Zwraca informację na temat tego, czy system ma połączenie z internetem.
- `love.system.getFriendInfo()`
  - Zwraca nazwę użytkownika uruchamiającego LÖVE Potion (lub twoją grę) oraz Friend Code (3DS oraz Switch)
- `love.system.getPreferredLocales()` (LÖVE 12)
  - Zwraca aktualnie ustawiony język systemowy jako ciąg znaków

Funkcje te są szczególnie przydatne do implementacji interfejsu użytkownika, rozgrywki sieciowej lub lokalizacji!

## Stałe Specyficzne dla Konsol

Wszystkie wersje LÖVE Potion mają następujące stałe wartości:

- `love._console`⁵
  - Zwraca nazwę konsoli, "3DS", "Switch", lub "Wii U"
- `love._potion_version`
  - Zwraca wersję LÖVE Potion
- `love._os`
  - Zwraca nazwę Systemu Operacyjnego konsoli, "Horizon" (3DS, Switch) lub "Cafe" (Wii U)

## Klawiatura Ekranowa

Wywołanie [`love.keyboard.setTextInput`](https://love2d.org/wiki/love.keyboard.setTextInput) uruchamia aplet Systemowej Klawiatury Ekranowej. Zamiast prostokąta, przekaż w parametrze tablicę opcji:

| Pole       | Typ     | Uwagi                                         |
| ---------- | ------- | --------------------------------------------- |
| type       | string  | `basic`, `numpad`, oraz `standard`<sup>1</sup>|
| isPassword | boolean | Ukrywa tekst po wpisaniu (np. hasło)          |
| hint       | string  | Podpowiedź do wyświetlenia na polu tekstowym  |

<sup>1</sup> Tylko na Nintendo Switch

Podobnie do LÖVE, po zatwierdzeniu tekstu przez użytkownika zostaje on przekazany do odwołania [`love.textinput`](https://love2d.org/wiki/love.textinput). Więc, jeżeli wpisałeś "Hello World!", wartością argumentu `text` będzie ciąg znaków "Hello World!".

## Stałe Kontrolera

?> Aby zobaczyć listę nazw przycisków, odwiedź [oficjalną LÖVE wiki](https://love2d.org/wiki/GamepadButton).

### Nintendo 3DS

![](files/3DSControllerMap.png)

### Nintendo Switch

![](files/SwitchControllerMap.png)
