const test = require("ava")
const fileExtension = require(".")

test("main", (t) => {
	t.is(fileExtension("a.txt"), "txt")
	t.is(fileExtension("a/b.txt"), "txt")
	t.is(fileExtension("a"), undefined)
})
