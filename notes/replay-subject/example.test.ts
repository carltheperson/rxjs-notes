import { TestScheduler } from "rxjs/testing";
import { exampleSubject } from "./example";

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe("Replay subject", () => {
  test("Replays events synchronously", () => {
    testScheduler.run(({ expectObservable }) => {
      expectObservable(exampleSubject).toBe("(a-b-c)");
    });
  });
});
