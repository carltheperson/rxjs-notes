import { Observable, take } from "rxjs";

const sourceObservable = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("a"), 100);
  setTimeout(() => subscriber.next("b"), 200);
  setTimeout(() => subscriber.next("c"), 300);
  setTimeout(() => subscriber.next("d"), 400);
  setTimeout(() => subscriber.next("e"), 500);
});

const takenObservable = sourceObservable.pipe(take(3));

takenObservable.subscribe((value) => {
  console.log(value);
});

/*
a
b
c
*/
