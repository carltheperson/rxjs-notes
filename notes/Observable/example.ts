import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("c");
  setTimeout(() => {
    subscriber.next("d");
  }, 1000);
});

observable.subscribe((value) => {
  console.log("Got value", value);
});

/*
Got value a
Got value b
Got value c
Got value d
*/
