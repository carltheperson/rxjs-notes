import { BehaviorSubject } from "rxjs";

export const exampleSubject$ = new BehaviorSubject("a");

console.log("Initial value", exampleSubject$.value);

exampleSubject$.subscribe((val) => {
  console.log("Got value", val);
});

exampleSubject$.next("b");
exampleSubject$.next("c");
