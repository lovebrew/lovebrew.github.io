## Metody

?> Na Nintendo Switch proszę używać funkcjonalności przejęcia tytułu Atmosphère. to pozwala twojej grze używać całej dozwolonej pamięci operacyjnej oraz Klawiatury Systemowej. Na Nintendo 3DS, prosze używać Homebrew Menu. Budowanie plików CIA lub "instalowalnych" NSP nie jest wspierane.

### Złączony plik binarny

Możesz spakować swoją grę wewnątrz pliku wykonywalnego LÖVE Potion dla ułatwienia dystrybucji. To podejście jest polecane gdy już zakończysz prace nad grą i chcesz pokazać ją znajomym! Po więcej informacji zapraszam na [stronę bundlera](/bundler/index.md).

### Plik wykonywalny LÖVE

!> Ta metoda nie działa na wersji Wii U.

Proszę o zapoznanie się z 'create a `love` file' [na oficjalnej LÖVE wiki](https://love2d.org/wiki/Game_Distribution#Create_a_.love-file).

Gdy utworzysz archiwum .love, pobierz odpowiedni zip dla [Switcha](files/switch-config.zip ":ignore") lub[3ds](files/3ds-config.zip ":ignore").
Skopiuj plik `lovepotion.cfg` na swoją kartę micro SD Switch do `/nx-hbmenu/config/fileassoc` lub `hbmenu/config/fileassoc`. Folder `lovepotion` może zostać umieszczony w ścieżce `/switch`. Ostatnią brakującą rzeczą jest najnowsza kopia LÖVE Potion, więc pobierz [najnowszy plik \*.nro](https://github.com/TurtleP/LovePotion/releases) i wstaw go do folderu `lovepotion`.

Teraz tylko musisz skopiować nowy plik _SuperGame.love_ do folderu `/switch` lub `/3ds` na swojej karcie pamięci i otworzyć Homebrew Menu. Gra pokaże się jako ikona do uruchomienia.

### 'Game' Folder

?> Ta metoda jest przydatna w trakcie tworzenia gier. Używaj poprzednich metod gdy już skończysz. Jeśli chcesz niestandardowej ikony i tytułu/autora, spakuj swoją grę używając lovebrew bundler'a.

!> W tej chwili Wii U wspiera **tylko** CFW Aroma, wsparcie dla innych nie jest w planach.

Najszybszym sposobem na uruchomienie i debugowanie gry jest folder `game`. Po prostu [pobierz najnowszy plik wykonywalny](https://github.com/TurtleP/LovePotion/releases) dla swojej konsoli i wstaw go do odpowiedniego kataolgu:

- `/switch/lovepotion`
- `/3ds/lovepotion`
- `vol/external01/wiiu/apps/lovepotion`

Stwórz folder o nazwie `game` w tymże katalogu. Będzie to miejsce na wszystkie twoje pliki źródłowe i zasoby. Pamiętaj jednak, że na Nintendo 3DS musisz przekonwertować tekstury i czcionki na konkretny format. W tym celu możesz użyć `tex3ds` oraz `mkbcfnt` by zrobić to ręcznie lub przeciągnąć i upuścić te pliki na stronie bundlera. Gdy już wszystko będzie zrobione, otwórz Homebrew Menu i uruchom program LÖVE Potion, który załaduje i uruchomi twoją grę!
