import { distinct, Observable } from "rxjs";

const source = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("a");
  subscriber.next("c");
  subscriber.next("b");
  subscriber.next("d");
  subscriber.next("a");
});

const distincted = source.pipe(distinct());

distincted.subscribe((value) => {
  console.log(value);
});

/*
a
b
c
d
*/
