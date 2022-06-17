import { Observable } from "rxjs";

export const exampleObservable$ = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("c");
  setTimeout(() => {
    subscriber.next("d");
  }, 1000);
});

exampleObservable$.subscribe((value) => {
  console.log("Got value", value);
});
