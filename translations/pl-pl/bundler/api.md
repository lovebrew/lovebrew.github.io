## `POST` Texture Convert

```
http://bundle.lovebrew.org/convert/t3x
```

Ten endpoint przyjmie dowolną liczbę plików PNG lub JPEG i przekonwertuje je do formatu t3x. Pliki należy przekazać w postaci `multipart/form-data`. Ciało odpowiedzi typu `application/json` zawiera tablicę obiektów z ścieżkami plików i samymi plikami enkodowanymi w base64.

<!-- tabs:start -->

#### **Request**

```bash
curl --location 'http://bundle.lovebrew.org/convert/t3x' --form 'background.png=@"/background.png"'
```

#### **Response**

```json
[
    {
        "filepath": "background.png",
        "data": // base64-encoded blob
    }
]
```

<!-- tabs:end -->

## `POST` Font Convert

```
http://bundle.lovebrew.org/convert/bcfnt
```

Ten endpoint przyjmie dowolną liczbę plików czcionek TrueType lub OpenType i przekonwertuje je do formatu bcfnt. Pliki należy przekazać w postaci `multipart/form-data`. Ciało odpowiedzi typu `application/json` zawiera tablicę obiektów z ścieżkami plików i samymi plikami enkodowanymi w base64.

<!-- tabs:start -->

#### **Request**

```bash
curl --location 'http://bundle.lovebrew.org/convert/bcfnt' --form 'font.ttf=@"/font.ttf"'
```

#### **Response**

```json
[
    {
        "filepath": "font.ttf",
        "data": // base64-encoded blob
    }
]
```

<!-- tabs:end -->

## `POST` Compile Metadata

```
http://bundle.lovebrew.org/compile
```

Ten endpoint przyjmuje _querystring_ z metadanymi (patrz poniżej) oraz pliki ikon. Ikony należy przekazać jako `multipart/form-data`, nazwane odpowiednio `icon-ctr`, `icon-nx` i `icon-cafe` dla Nintendo 3DS, Switch oraz Wii U. Ciało odpowiedzi typu `application/json` zawiera obiekt JSON z nazwami konsol docelowych i plikami enkodowanymi w base64.

| Parametr    | Uwagi                           | Domyślnie        |
| ----------- | ------------------------------- | ---------------- |
| title       | Tytuł Aplikacji                 | `Untitled`       |
| description | Opis Aplikacji                  | `No description` |
| version     | Wersja Aplikacji                | `0.0.0`          |
| author      | Autor Aplikacji                 | `Unknown`        |
| targets     | Konsole docelowe (wymagane)     |                  |

<!-- tabs:start -->

#### **Request**

```bash
curl --location 'http://bundle.lovebrew.org/compile?:title&:description&:version&:author&:targets' \
     --form 'icon-nx.jpg=@"/icon-nx.jpg"'
```

#### **Response**

```json
{
    "hac": // base64-encoded blob
}
```

<!-- tabs:end -->

## Komunikaty Błędów

| Błąd                       | Opis                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| TARGET_NOT_VALID           | Konsola docelowa jest niewłaściwa.                                                                              |
| COMMAND_ARGUMENT_NOT_FOUND | (Błąd wewnętrzny) Nie znaleziono argumentu polecenia.                                                           |
| COMMAND_FAILED             | (Błąd wewnętrzny) Polecenie zakończyło się błędem.                                                              |
| COMMAND_EXE_NOT_FOUND      | (Błąd wewnętrzny) Plik wykonywalny polecenia nie został odnaleziony.                                            |
| DESCRIPTION_TOO_LONG       | Opis w metadanych był zbyt długi. Może to spowodować błędy przy budowaniu.                                      |
| INVALID_FILE_TYPE          | Przesłano plik, ale w złym formacie.                                                                            |
| WIDTH_TOO_LARGE            | Tekstura przesłana do konwersji jest zbyt szeroka (> 1024px)                                                    |
| HEIGHT_TOO_LARGE           | Tekstura przesłana do konwersji jest zbyt wysoka (> 1024px)                                                     |
| ICON_TOO_LARGE             | Wymiary ikon w metadanych były niewłaściwe. Sprawdź [stronę o konfiguracji](/translations/pl-pl/bundler/index?id=custom-metadata-amp-icons). |
| NO_FILE_UPLOADED           | Oczekiwane pliki nie zostały przesłane.                                                                         |
| NO_PARAMETERS_SUPPLIED     | Brakujące parametry zapytania w URL.                                                                            |
| EMPTY_FILE                 | Przesłany plik był pusty.                                                                                       |
