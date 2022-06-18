import glob from "glob";
import util from "util";
import { exec } from "child_process";

function createDiagramFromSource(sourceFile: string) {
  const diagramName = sourceFile.replace("-src.txt", ".png");
  exec(`yarn swirly ${sourceFile} ${diagramName} --scale 200 -f`);
}

const specificFile = process.argv[2];
if (specificFile) {
  createDiagramFromSource(specificFile);
} else {
  util
    .promisify(glob)("notes/*/*-src.txt")
    .then((files) => {
      for (const file of files) {
        createDiagramFromSource(file);
      }
    });
}
