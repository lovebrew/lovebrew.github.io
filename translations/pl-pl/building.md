?> Upewnij się, że czytasz wszystko ze zrozumieniem. Przechodź na podlinkowane strony tam, gdzie to konieczne, i czytaj dokładnie treści na nich zamieszczone; zawierają one ważne informacje.

## Jak zacząć

Aby zacząć udzielać się w projekcie, musisz zainstalować środowisko deweloperskie według [instrukcji zamieszczonych na devkitPro Wiki](https://devkitpro.org/wiki/Getting_Started). Jeśli masz już zainstalowany menedżer pakietów `pacman` (np. zawarty w msys2 lub Linux), możesz skorzystać z [tej sekcji na devkitPro Wiki](https://devkitpro.org/wiki/devkitPro_pacman#Customising_Existing_Pacman_Install).

### Zależności

Gdy już ustawisz środowisko, otwórz terminal i zsynchronizuj repozytoria pakietów:

<!-- tabs:start -->

#### **Windows (msys2)**

```bash
pacman -Syu
```

#### **Unix-like (Linux, macOS)**

```bash
sudo (dkp-)pacman -Syu
```

<!-- tabs:end -->

Po synchronizacji pakietów uruchom następujące polecenie:

<!-- tabs:start -->

#### **Windows (msys2)**

```bash
pacman -S switch-dev 3ds-dev wiiu-dev¹
```

#### **Unix-like (Linux, macOS)**

```bash
sudo (dkp-)pacman -S switch-dev 3ds-dev devkit-env wiiu-dev¹
```

<!-- tabs:end -->

¹Tylko dla LÖVE Potion 3.x

!> Następujące informacje są tylko do celów rozwoju projektu! Nie buduj LÖVE Potion bezpośrednio, jeśli nie rozumiesz programowania lub nie zamierzasz udzielać się w projekcie. W przeciwnym wypadku przyczyniasz się tylko do [fragmentacji](https://en.wikipedia.org/wiki/Market_fragmentation). Jeśli jesteś tu, by skompilować swoją grę do dalszej dystrybucji, proszę sprawdź sekcję [Dystrybucja Gier](/translations/pl-pl/packaging)

Następnie sklonuj repozytorium. Jeśli zamierzasz udzielać swój kod, [proszę utwórz swój fork i sklonuj go lokalnie](https://help.github.com/articles/fork-a-repo/). Dalej, używając terminala, przejdź do katalogu, do którego sklonowany został projekt:

```bash
cd LovePotion
```

Zainstaluj potrzebne biblioteki portlib:

<!-- tabs:start -->

#### **Windows (msys2)**

```bash
# 3DS
pacman -S --needed - < platform/ctr/pkglist.txt

# Switch
pacman -S --needed - < platform/hac/pkglist.txt

# Wii U
pacman -S --needed - < platform/cafe/pkglist.txt
```

#### **Unix-like (Linux, macOS)**

```bash
# 3DS
sudo (dkp-)pacman -S --needed - < platform/ctr/pkglist.txt

# Switch
sudo (dkp-)pacman -S --needed - < platform/hac/pkglist.txt

# 3DS
sudo (dkp-)pacman -S --needed - < platform/cafe/pkglist.txt
```

<!-- tabs:end -->

Gdy wszystko już się zainstaluje, uruchom jedno z poniższych poleceń, w zależności od wybranej konsoli:

- 3DS: /opt/devkitpro/portlibs/3ds/bin/arm-none-eabi-cmake -S . -B build
- Switch: /opt/devkitpro/portlibs/switch/bin/aarch64-none-elf-cmake -S . -B build
- Wii U: /opt/devkitpro/portlibs/wiiu/bin/powerpc-eabi-cmake -S . -B build

## Tworzenie Pull Request

### Nazewnictwo

Gdy utworzysz nowy [pull request](https://help.github.com/articles/about-pull-requests/), nazwij go w sposób łatwy do zidentyfikowania, np. `fix-filesystem-reading`. To pomoże wykryć [ewentualne defekty](https://sqa.stackexchange.com/a/20258) w przypadku scalenia go (po zatwierdzeniu) w jednym z przyszłych commitów.

### Klamry

Klamry (`{}`) powinny zawsze być pisane według [stylu Allmana](https://pbs.twimg.com/media/CXlB_kpVAAA0pDM.png) dla jednolitości. Jednakże, gdy wyrażenie jest tylko jednolinijkowe, proszę pomijać klamry całkowicie:

```cpp
if (something)
    printf("Łał!");
else if (otherThing)
    printf("Niesamowite!");
else
    printf("No cóż");

for (size_t i = 0; i < 10; i++)
    printf("Wynik licznika: %zu", i);
```

### Nazwy Zmiennych i Funkcji

- Nazwy zmiennych powinny być w camelCase.
- Nazwy klas i ich funkcje powinny być w PascalCase.
  - Przykłady: `JoystickModule` oraz `Channel`.
- Funkcje opakowujące Lua powinny zostać umieszczone w odpowiedniej przestrzeni nazw `Wrap_{type}`.
  - Te funkcje powinny również być w camelCase.

## Debugowanie Crashów

Jeśli Twoje zmiany zaczną crashować konsolę, istnieje kilka narzędzi, których możesz użyć, by znaleźć ślad błędu *(backtrace)*, a następnie jego źródło.

### brewDebug

Jednym ze sposobów jest użycie [brewDebug](https://github.com/TurtleP/brewDebug) do sprawdzenia błędu po adresach PC i LR. Narzędzie może też użyć logów z luma3ds i atmosphère w celu odnalezienia błędu po tych adresach.

Będzie ci potrzebna instalacja pakietów `devkitARM` lub `devkitA64` z menedżera devkitpro-pacman. Pakiety te zawierają specjalne programy addr2line, działające odpowiednio dla Nintendo 3DS i Nintendo Switch. Do przetworzenia logów z luma3ds będziesz również potrzebować [luma3ds exceptions parser](https://github.com/LumaTeam/luma3ds_exception_dump_parser).

Skorzystaj z dokumentacji readme na repozytorium narzędzia w celu uzyskania dalszych instrukcji.

### GDB

Istnieje specjalne narzędzie o nazwie `gdb`, umożliwiające lepszą, dogłębną analizę tych crashów. Łączy się ono zdalnie z konsolą w trakcie jej działania.

#### Nintendo 3DS

!> Musisz zainstalować `devkitARM-gdb` z menedżera paczek devkitpro-pacman.

Należy otworzyć menu Rosalina i przejść do `Debugger Options`. W tym menu włącz Debugger i zapamiętaj adres IP swojej konsoli. Następnie włącz opcję `Force-debug next application at launch`.

Po wykonaniu tych kroków zamknij menu całkowicie, a w terminalu uruchom `/opt/devkitpro/devkitARM/bin/arm-none-eabi-gdb`. To załaduje program `gdb`. Wpisz polecenie `file "ścieżka/do/ELF.elf"`, gdzie `"ścieżka/do/ELF.elf"` to ścieżka do skompilowanego pliku binarnego ELF LÖVE Potion. Dzięki temu symbole debugowania zostaną załadowane i będzie można rozeznać się w ścieżce błędu *(backtrace)*.

Wykonaj polecenie `target remote {ip}:4003`, gdzie `{ip}` to adres IP konsoli, np. `target remote 192.168.3.30:4003`. Gdy program potwierdzi połączenie, uruchom LÖVE Potion, a następnie wpisz `continue` i wciśnij enter. Gdy program napotka przerwanie błędu segmentacji, wpisz `bt` i wciśnij enter. Ślad błędu wyświetli się w terminalu, co pozwoli dalej rozeznać się w problemie.

#### Nintendo Switch

!> Musisz zainstalować `devkitA64-gdb` z menedżera paczek devkitpro-pacman.

Potrzebujesz zainstalowanego atmosphère w wersji 1.2.4 lub wyższej. Utwórz lub zmodyfikuj plik o nazwie `system_settings.ini` w katalogu `/atmosphere/config`. Dodaj następującą treść do pliku konfiguracyjnego:

```ini
[atmosphere]
enable_htc = u8!0x0
enable_standalone_gdbstub = u8!0x1
```

Aby zmiany przyniosły skutek, musisz uruchomić ponownie konsolę.

Po uruchomieniu użyj przejęcia tytułu na dowolnej grze. W terminalu uruchom `/opt/devkitpro/devkitA64/bin/aarch64-none-elf-gdb`. Musisz znać adres IP swojej konsoli. Możesz go sprawdzić, wciskając `Y` na prawym JoyConie, przez funkcjonalność NetLoader w hbmenu.

Gdy adres jest już znany, uruchom następujące polecenia w `gdb`:

1. `target extended-remote {ip}:22225`
   - np. `target extended-remote 192.168.3.30:22225`
2. `info os processes`
   - Wyświetla listę ID procesów działających na konsoli, znajdź `hbloader`
3. `attach {pid}`
   - np. `attach 136` -- ID procesu znalezione w kroku #2
4. Uruchom program LÖVE Potion na konsoli

`gdb` natychmiast się zatrzyma, gdy LÖVE Potion zostanie załadowane. Uruchom `share {ścieżka/do/pliku_elf}`. Ścieżka nie musi być do samego pliku \*.elf, wystarczy do katalogu go zawierającego. Dzięki temu symbole zostaną załadowane, co pozwoli na rozpoczęcie procesu debugowania. Teraz należy wprowadzać polecenie `continue`, dopóki nie wystąpi błąd. Więcej informacji znajdziesz w [tym artykule GitHub gist](https://gist.github.com/nolberto82/2ad4235627b56cae769872e903f7c1b9#appendix), szczególnie alternatywny ślad błędu w niższej części, bardzo przydatny.
