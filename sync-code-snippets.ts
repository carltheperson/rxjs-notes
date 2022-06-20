import glob from "glob";
import util from "util";
import { readFileSync, writeFileSync } from "fs";

/*
Put this in README:

<!--code-snipet-start-->
```ts
replace me
```
<!--code-snipet-end-->

*/

function replaceBetween(
  string: string,
  replacement: string,
  start: string,
  end: string
) {
  return string.replace(
    string.substring(
      string.indexOf(start) + start.length + 7,
      string.lastIndexOf(end) - 5
    ),
    replacement
  );
}

util
  .promisify(glob)("notes/*/README.md")
  .then((files) => {
    for (const file of files) {
      const content = readFileSync(file).toString();
      const snippet = readFileSync(
        file.replace("README.md", "example.ts")
      ).toString();
      const newContent = replaceBetween(
        content,
        snippet,
        "<!--code-snipet-start-->",
        "<!--code-snipet-end-->"
      );
      writeFileSync(file, newContent);
    }
  });
