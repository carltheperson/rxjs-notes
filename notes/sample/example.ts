import { Observable, sample } from "rxjs";

const source = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("a"), 100);
  setTimeout(() => subscriber.next("b"), 300);
  setTimeout(() => subscriber.next("c"), 400);
  setTimeout(() => subscriber.next("d"), 500);
});

const notifier = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("x"), 200);
  setTimeout(() => subscriber.next("x"), 500);
});

const sampled = source.pipe(sample(notifier));

sampled.subscribe((value) => {
  console.log(value);
});

/*
a
d
*/
