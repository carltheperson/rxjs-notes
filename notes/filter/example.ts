import { filter, Observable, partition } from "rxjs";

const sourceObservable = new Observable<number>((subscriber) => {
  setTimeout(() => subscriber.next(1), 100);
  setTimeout(() => subscriber.next(2), 200);
  setTimeout(() => subscriber.next(3), 300);
  setTimeout(() => subscriber.next(4), 400);
  setTimeout(() => subscriber.next(5), 500);
  setTimeout(() => subscriber.next(6), 600);
});

const filteredObservable = sourceObservable.pipe(filter((num) => num % 2 == 1));

filteredObservable.subscribe((value) => {
  console.log(value);
});

/*
1
3
5
 */
