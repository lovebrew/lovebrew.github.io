## `POST` Texture Convert

```
http://bundle.lovebrew.org/convert/t3x
```

This endpoint will accept any number of PNG or JPEG files, converting them to the t3x format. Files must be supplied as `multipart/form-data`. The resulting response is `application/json` containing a JSON array of objects with the filepaths and base64-encoded data.

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

This endpoint will accept any number of TrueType or OpenType font files, converting them to the bcfnt format. Files must be supplied as `multipart/form-data`. The resulting response is `application/json` containing a JSON array of objects with the filepaths and base64-encoded data.

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

This endpoint will accept a query parameter string for metadata (see below) and icon files. Icon files must be supplied as `multipart/form-data`, named as `icon-ctr`, `icon-nx` and `icon-cafe` for Nintendo 3DS, Switch and Wii U respectively. The resulting response is `application/json` containing a JSON object the target names and base64-encoded data.

| Parameter   | Notes                           | Default          |
| ----------- | ------------------------------- | ---------------- |
| title       | Application Title               | `Untitled`       |
| description | Application Description         | `No description` |
| version     | Application Version             | `0.0.0`          |
| author      | Application Author              | `Unknown`        |
| targets     | Targets to build for (required) |                  |

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
