## Jak zacząć

Typowa struktura katalogów projektu wygląda następująco:

```
SuperProject
├── SuperGame
│   ├── conf.lua
│   └── main.lua
└── lovebrew.toml
```

`SuperProject` jest nazwą folderu nadrzędnego całego projektu. `SuperGame` jest katalogiem zawierającym wszystkie zasoby gry używane w procesie pakowania. Plik `lovebrew.toml` należy utworzyć klikając prawym przyciskiem myszy w katalogu `SuperProject` i tworząc nowy plik tekstowy. Wzorzec zawartości pliku konfiguracyjnego znajdziesz [tutaj](../../files/lovebrew.toml ":ignore"). Znajdziesz tam kilka ustawień, które możesz zmienić, ale najważniejsze z nich opisano poniżej.

### Metadane i Ikony

Plik `lovebrew.toml` otworzysz dowolnym edytorem tekstu, włącznie z Notatnikiem systemu Windows (jeśli Windows zapyta o to, jakim programem otworzyć plik, możesz wybrać Notatnik). Do każdego z ustawień są komentarze, proszę zapoznaj się z nimi uważnie. Wszelkie wartości typu `string` mogą zawierać spacje.

Jeśli potrzebujesz niestandardowej ikony, pamiętaj że na Nintendo 3DS musisz stworzyć obraz PNG o wymiarach 48x48 pikseli. Dla Nintendo Switch obraz musi mieć rozmiar 256x256 pikseli i być zapisany w formacie JPG. Jeśli masz problemy z ikoną dla Switcha, spróbuj wyłaczyć flagę `progressive` przy zapisie obrazu. Niektóre programy, np. GIMP, potrafią to zrobić. Ikony dla Wii U to obrazy PNG o wymiarach 128x128 pikseli. Jeśli nie podano nazwy ikony (lub jej nie znaleziono), LÖVEBrew użyje ikony domyślnej.

### Budowanie Projektu

Korzystając z ulubionej przeglądarki przejdź na stronę [aplikacji bundlera](http://bundle.lovebrew.org). Spakuj swój projekt, czyli całą zawartość folderu `SuperProject` i przeciągnij tak utworzony plik zip w okno przeglądarki. Aplikacja poprosi cię o potwierdzenie przesłania; klknij "tak" by rozpocząć proces budowania.

Jeśli wszystko pójdzie dobrze, strona spakuje twoją grę do formatów wyszczególnionych w pliku `lovebrew.toml` i pobierze plik zip zawierający pliki wykonywalne w tych formatach. Archiwum zawierać też będzie plik `debug.log` służący do debugowania samego procesu pakowania, gdyby coś poszło nie tak. Jeśli Twojego projektu nie udało się zbudować, a komunikat z kodem błędu pojawi się na górze strony, proszę zapamiętaj go lub zapisz. Te kody błędu powinny być wystarczająco jasne by wskazać źródło Twojego problemu, ale jeśli nie są, proszę zgłoś problem w wątku na GitHub.

### Plik Konfiguracyjny

?> Jeśli nie znasz specyfikacji formatu TOML, [przeczytaj ten artykuł](https://toml.io/en/) zawierający oficjalną dokumentację

### Sekcja **[metadata]**

Ta sekcja definiuje metadane twojej gry.

| Klucz       | Typ Wartości | Domyślnie                           | Uwagi                       |
| ----------- | ------------ | ----------------------------------- | --------------------------- |
| title       | string       | `"SuperGame"`                       | Tytuł gry                   |
| author      | string       | `SuperAuthor`                       | Autor gry                   |
| description | string       | `"SuperDescription"`                | Opis gry                    |
| version     | string       | `"0.1.0"`                           | Wersja gry                  |
| icons       | table        | `{ ctr = "", hac = "", cafe = "" }` | Ścieżki ikon w pliku zip¹   |

¹Sprawdź [tę sekcję](lovebrew?id=custom-metadata-amp-icons) by uzyskać więcej informacji. Ścieżki ikon są w odniesieniu do nadrzędnej warstwy pliku zip.

Ikony można też zdefiniować w `[metadata.icons]`:

```toml
[metadata.icons]
ctr  = "icon48.png"
hac  = "icon.jpeg"
cafe = "icon128.png"
```

### Sekcja **[build]**

Ta sekcja definiuje jak aplikacja powinna zbudować Twoją grę.

| Klucz    | Typ Wartości | Domyślnie                | Uwagi                                                         |
| -------- | ------------ | ------------------------ | ------------------------------------------------------------- |
| targets  | array        | `["ctr", "hac", "cafe"]` | Konsola/konsole docelowe, dla których gra ma zostać zbudowana |
| source   | string       | `"game"`                 | Nazwa katalogu z kodem gry                                    |
| packaged | boolean      | `false`                  | Czy zasoby gry mają zostać spakowane do pliku wykonywalnego¹  |

¹Jeśli ta opcja ustawiona jest na `false`, aplikacja bundlera zwróci zasoby gry dla każdej żądanej konsoli docelowej z osobna, przekonwertowane lub nie.
