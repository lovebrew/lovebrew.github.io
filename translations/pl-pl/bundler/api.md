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

## Error Messages

| Error                      | Description                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| TARGET_NOT_VALID           | A specified build target is invalid.                                                                                                           |
| COMMAND_ARGUMENT_NOT_FOUND | (internal) A command's argument was not found.                                                                                                 |
| COMMAND_FAILED             | (internal) A command failed.                                                                                                                   |
| COMMAND_EXE_NOT_FOUND      | (internal) A command's executable binary was not found.                                                                                        |
| DESCRIPTION_TOO_LONG       | The metadata description was too long. This can cause issues when building.                                                                    |
| INVALID_FILE_TYPE          | A file was supplied, but in the wrong format.                                                                                                  |
| WIDTH_TOO_LARGE            | A texture for t3x conversion has too large of a width (> 1024px)                                                                               |
| HEIGHT_TOO_LARGE           | A texture for t3x conversion has too large of a height (> 1024px)                                                                              |
| ICON_TOO_LARGE             | The metadata icon dimensions were incorrect. See [the configuration page](http://localhost:3000/#/bundler/index?id=custom-metadata-amp-icons). |
| NO_FILE_UPLOADED           | Files were not uploaded when they were expected.                                                                                               |
| NO_PARAMETERS_SUPPLIED     | URL query parameters were not supplied.                                                                                                        |
| EMPTY_FILE                 | A file that was submitted was empty.                                                                                                           |
