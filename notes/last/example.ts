import { last, Observable } from "rxjs";

const source = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("c");
  subscriber.next("d");
  subscriber.next("e");
  subscriber.complete();
});

const lasted = source.pipe(last());

lasted.subscribe((value) => {
  console.log(value);
});

/*
e
*/
