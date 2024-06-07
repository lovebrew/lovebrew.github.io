## Metody

?> Na Nintendo Switch proszę używać funkcjonalności przejęcia tytułu Atmosphère. To pozwala Twojej grze używać całej dozwolonej pamięci operacyjnej oraz Klawiatury Systemowej. Na Nintendo 3DS proszę używać Homebrew Menu. Budowanie plików CIA lub "instalowalnych" NSP nie jest wspierane.

!> W tej chwili Wii U wspiera **tylko** CFW Aroma, wsparcie dla innych nie jest w planach.

### 'Game' Folder

?> Ta metoda jest przydatna w trakcie tworzenia gier. Używaj pozostałych metod, gdy już skończysz. Jeśli chcesz niestandardowej ikony i tytułu/autora, spakuj swoją grę, używając aplikacji LÖVEBrew Bundler.

Najszybszym sposobem na uruchomienie i debugowanie gry jest folder `game`. Po prostu [pobierz najnowszy plik wykonywalny](https://github.com/TurtleP/LovePotion/releases) dla swojej konsoli i wstaw go do odpowiedniego katalogu:

- `/switch/lovepotion`
- `/3ds/lovepotion`
- `vol/external01/wiiu/apps/lovepotion`

Stwórz folder o nazwie `game` w tymże katalogu. Będzie to miejsce na wszystkie Twoje pliki źródłowe i zasoby. Pamiętaj jednak, że na Nintendo 3DS musisz przekonwertować tekstury i czcionki na konkretny format. W tym celu możesz użyć `tex3ds` oraz `mkbcfnt`, by zrobić to ręcznie lub przeciągnąć i upuścić te pliki na [stronie bundlera](https://bundle.lovebrew.org). Gdy już wszystko będzie zrobione, otwórz Homebrew Menu i uruchom program LÖVE Potion, który załaduje i uruchomi Twoją grę!

### Utwórz plik .love

!> Obecnie z tą metodą są problemy na konsoli 3DS. Proszę używać innych metod dopóki błąd nie zostanie naprawiony

!> Ta metoda nie działa na wersji Wii U.

Proszę o zapoznanie się z 'create a `love` file' [na oficjalnej LÖVE wiki](https://love2d.org/wiki/Game_Distribution#Create_a_.love-file).

Gdy utworzysz plik .love, pobierz odpowiedni zip dla [Switcha](files/switch-config.zip ":ignore") lub [3DS](files/3ds-config.zip ":ignore"). Skopiuj plik `lovepotion.cfg` na swoją kartę micro SD do `/nx-hbmenu/config/fileassoc` lub `hbmenu/config/fileassoc`. Folder `lovepotion` może zostać umieszczony w ścieżce `/switch` na Switchu lub `/3ds` na 3DS. Ostatnią brakującą rzeczą jest najnowsza kopia LÖVE Potion, więc pobierz [najnowszy plik \*.nro/\*.3dsx](https://github.com/TurtleP/LovePotion/releases) i wstaw go do folderu `lovepotion`.

Teraz tylko musisz skopiować nowy plik _SuperGame.love_ do folderu `/switch` lub `/3ds` na swojej karcie pamięci i otworzyć Homebrew Menu. Gra pokaże się jako ikona do uruchomienia.

### Złączony plik binarny

Możesz spakować swoją grę wewnątrz pliku wykonywalnego LÖVE Potion dla ułatwienia dystrybucji. To podejście jest polecane, gdy już zakończysz prace nad grą i chcesz pokazać ją znajomym!

#### Metoda ręczna

Możliwe jest dołączenie pliku .love z grą do pliku wykonywalnego LÖVE Potion, tworząc w ten sposób **złączoną grę**. 
1. Stwórz plik .love tak jak zostało to opisane [w sekcji powyżej](#create-a-love-file)
2. Pobierz najnowszy [plik wykonywalny LÖVE Potion](https://github.com/TurtleP/LovePotion/releases) dla swojej konsoli 
3. Przejdź do kataolgu zawierającego oba te pliki i wywołaj jedną z następujących komend:

<!-- tabs:start -->

#### **Windows (cmd)**

```batch
:: 3DS
copy /b lovepotion.3dsx+SuperGame.love SuperFused.3dsx

:: Switch
copy /b lovepotion.nro+SuperGame.love SuperFused.nro

:: Wii U
copy /b lovepotion.wuhb+SuperGame.love SuperFused.wuhb

```

#### **Windows (Powershell)**

```powershell
# 3DS
Get-Content lovepotion.3dsx,SuperGame.love -Encoding Byte | Set-Content SuperGame.3dsx -Encoding Byte

# Switch
Get-Content lovepotion.nro,SuperGame.love -Encoding Byte | Set-Content SuperGame.nro -Encoding Byte

# Wii U
Get-Content lovepotion.wuhb,SuperGame.love -Encoding Byte | Set-Content SuperGame.wuhb -Encoding Byte

```

#### **Unix-like (Linux, macOS)**

```bash
# 3DS
cat lovepotion.3dsx SuperGame.love > SuperGame.3dsx

# Switch
cat lovepotion.nro SuperGame.love > SuperGame.nro

# Wii U
cat lovepotion.wuhb SuperGame.love > SuperGame.wuhb

```

<!-- tabs:end -->

#### Bundler

Powyższe kroki mogą zostać zautomatyzowane przy użyciu [aplikacji webowej LÖVEBrew Bundler](https://bundle.lovebrew.org), przy okazji oferując dodatkowe możliwości, takie jak personalizowane metadane i ikona.

Więcej informacji znajdziesz na [stronie Wiki bundlera](/bundler/index.md).