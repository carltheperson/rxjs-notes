import glob from "glob";
import util from "util";
import { exec } from "child_process";

util
  .promisify(glob)("*/marble-source.txt")
  .then((files) => {
    for (const file of files) {
      exec(
        `yarn swirly ${file} ${file.replace(
          "marble-source.txt",
          "marble-diagram.png"
        )} --scale 200`
      );
    }
  });
