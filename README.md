## Introduction

A lightweight and efficient file uploading utility for modern web applications. This package provides an easy-to-use interface for handling file uploads, managing upload states, and integrating with your backend services.

## Features

**Lightweight:** Zero or minimal dependencies to keep your bundle size small.<br/> **Customizable:** Flexible configuration for API endpoints, headers, and callbacks.

## Prerequisites

- Node.js 14+ (or compatible)

## Installation

You can install the package via npm or yarn:

```bash
# Using npm
npm install @tahir-asadli/uploader

# Using yarn
yarn add @tahir-asadli/uploader
```

## Quick Start

### Basic Usage

#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="csrf-token-value">
  <title>Document</title>
</head>
<body>
  <form action="/upload" enctype="multipart/form-data" method="post">
    <input type="file" id="file" multiple="" name="file[]">
    <input type="submit">
  </form>
</body>
</html>
```

#### JavaScript
```js
import Uploader from '@tahir-asadli/uploader';

const requestHeaders = {};

let csrfTokenMeta = document.querySelector("meta[name=\"csrf-token\"]");

if (csrfTokenMeta != undefined) {
  requestHeaders['X-CSRF-TOKEN'] = csrfTokenMeta.getAttribute("content");
}

const mediaConfig = {

  fileInputId: 'file',
  url: '/upload',
  headers: requestHeaders,
  started: function (fileList) {
    console.log('Upload started!');
  },
  progress: function (fileId, progress) {
    console.log(`Uploading... ${progress}%`, fileId);
  },
  completed: function (fileId) {
    console.log(`File uploaded! ${fileId}`);
  },
  error: function (fileId, error) {
    console.error(`${error} ${fileId}`);
  },
}

new Uploader(mediaConfig);

```

## API Reference

`
new Uploader(options)
`

| Option | Type | Description |
|--------|------|-------------|
|`fileInputId`|`string`|HTML input ID|
|`endpoint`|`string`|The URL where files will be sent (Required).|
|`headers`|`object`|Custom HTTP headers (e.g., Auth tokens).|
|`started`|`function`|Callback function|
|`progress`|`function`|Callback function|
|`completed`|`function`|Callback function|
|`error`|`function`|Callback function|

## Contributing

Contributions and suggestions are welcome. Open an issue or submit a PR.

## License

MIT

