"use strict"

const getExtension = require("get-ext")
const { default: ow } = require("ow")

module.exports = (filename) => {
	ow(filename, ow.string)

	const extension = getExtension(filename)

	if (extension.length === 0) return undefined
	return extension.slice(1)
}
