/**
 * Extract the file extension from a path.
 * @param filename The filename to extract the extension from.
 * @example
 * ```
 * const fileExt = require("file-ext");
 *
 * fileExt("a/b.txt");
 * //=> 'txt'
 * ```
*/
declare function fileExt(filename: string): string | undefined

export = fileExt
