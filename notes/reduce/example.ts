import { Observable, reduce } from "rxjs";

const source = new Observable<number>((subscriber) => {
  setTimeout(() => subscriber.next(1));
  setTimeout(() => subscriber.next(1), 100);
  setTimeout(() => subscriber.next(1), 200);
  setTimeout(() => subscriber.next(7), 300);
  setTimeout(() => subscriber.complete(), 400);
});

const reduced = source.pipe(reduce((total, value) => total + value, 0));

reduced.subscribe((value) => {
  console.log(value);
});

/*
10
*/
