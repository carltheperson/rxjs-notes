import glob from "glob";
import util from "util";
import { exec } from "child_process";
import { unlink } from "fs";

util
  .promisify(glob)("*/*-src.txt")
  .then((files) => {
    for (const file of files) {
      const diagramName = file.replace("-src.txt", ".png");
      exec(`yarn swirly ${file} ${diagramName} --scale 200 -f`);
    }
  });
