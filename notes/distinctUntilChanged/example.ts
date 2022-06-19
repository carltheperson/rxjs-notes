import { distinctUntilChanged, Observable } from "rxjs";

const source = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("b");
  subscriber.next("c");
  subscriber.next("d");
  subscriber.next("d");
});

const distinctedUntilChanged = source.pipe(distinctUntilChanged());

distinctedUntilChanged.subscribe((value) => {
  console.log(value);
});

/*
a
b
a
b
c
d
*/
