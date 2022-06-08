import { TestScheduler } from "rxjs/testing";
import { exampleObservable$ } from "./example";

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe("Observable", () => {
  test("Observable emits synchronously as expected", () => {
    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;
      const expected = "(a-b-c)";
      expectObservable(exampleObservable$).toBe(expected);
    });
  });

  test("Observable emits asynchronously as expected", (done) => {
    const values = ["a", "b", "c", "d"];
    let i = 0;
    exampleObservable$.subscribe((value) => {
      expect(value).toBe(values[i]);
      i++;
    });
    setTimeout(() => expect(i).toBe(values.length - 1), 995);
    setTimeout(() => {
      expect(i).toBe(values.length);
      done();
    }, 1000);
  });
});
