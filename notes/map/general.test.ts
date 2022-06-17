import { map } from "rxjs";
import { TestScheduler } from "rxjs/testing";

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe("map", () => {
  test("values are mapped in same frame", () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const observable = cold("a--b----c");
      const expected = "       1--2----3";
      const mapped = observable.pipe(
        map((char) => " abc".indexOf(char).toString())
      );
      expectObservable(mapped).toBe(expected);
    });
  });
});
