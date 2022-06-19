import { ReplaySubject } from "rxjs";

export const exampleSubject = new ReplaySubject();

exampleSubject.next("a");
exampleSubject.next("b");

exampleSubject.subscribe((val) => {
  console.log("Subscriber got", val);
});

exampleSubject.next("c");
