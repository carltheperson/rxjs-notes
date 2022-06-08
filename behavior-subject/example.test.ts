import { BehaviorSubject } from "rxjs";
import { TestScheduler } from "rxjs/testing";
import { exampleSubject$ } from "./example";

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe("Behavior subject", () => {
  test("Behavior subject emits initial value immediately", () => {
    const newBehaviorSubject = new BehaviorSubject("a");
    let value = null;
    newBehaviorSubject.subscribe((val) => (value = val));
    expect(value).toBe("a");
  });
  test("Behavior subject is 'hot' (new subscribers get latest value only)", () => {
    testScheduler.run(({ expectObservable }) => {
      expectObservable(exampleSubject$).toBe("c");
    });
  });
});
