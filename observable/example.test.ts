import { TestScheduler } from "rxjs/testing";
import { concatMap, delay, of, throttleTime } from "rxjs";
import { exampleObservable$ } from "./example";

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

it("Observable emits synchronously as expected", () => {
  testScheduler.run((helpers) => {
    const { expectObservable } = helpers;
    const expected = "(a-b-c)";
    expectObservable(exampleObservable$).toBe(expected);
  });
});

it("Observable emits asynchronously as expected", async () => {
  let values = ["a", "b", "c", "d"];
  let i = 0;
  exampleObservable$.subscribe((value) => {
    expect(value).toBe(values[i]);
    i++;
  });
  await new Promise((r) => setTimeout(r, 1000));
  expect(i).toBe(values.length);
});
