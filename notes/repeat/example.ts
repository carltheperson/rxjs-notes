import { Observable, repeat } from "rxjs";

const source = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("b");
  subscriber.complete();
});

const repeated = source.pipe(repeat(3));

repeated.subscribe((value) => {
  console.log(value);
});

/*
a
b
a
b
a
b
*/
