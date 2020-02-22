# File Ext [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/file-ext/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/file-ext)

Extract the file extension from a path.

[![NPM Badge](https://nodei.co/npm/file-ext.png)](https://npmjs.com/package/file-ext)

## Install

```sh
npm install file-ext
```

## Usage

```js
const fileExt = require("file-ext");

fileExt("a/b.txt");
//=> 'txt'
```

## API

### fileExt(filename)

#### filename

Type: `string`

The filename to extract the extension from.
