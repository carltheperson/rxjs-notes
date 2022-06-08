import { exampleSubject$ } from "./example";

describe("Subject", () => {
  test("Subject emits synchronously as expected", () => {
    const array: string[] = [];
    exampleSubject$.subscribe((val) => array.push(val));
    exampleSubject$.next("a");
    exampleSubject$.next("b");
    exampleSubject$.next("c");
    expect(array).toEqual(["a", "b", "c"]);
  });
});
