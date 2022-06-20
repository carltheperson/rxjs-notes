import { BehaviorSubject } from "rxjs";

export const subject = new BehaviorSubject("a");

console.log("Initial value", subject.value);

subject.subscribe((val) => {
  console.log("Got value", val);
});

subject.next("b");
subject.next("c");

/*
Initial value a
Got value a
Got value b
Got value c
*/
