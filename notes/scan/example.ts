import { Observable, scan } from "rxjs";

const source = new Observable<number>((subscriber) => {
  setTimeout(() => subscriber.next(1));
  setTimeout(() => subscriber.next(1), 100);
  setTimeout(() => subscriber.next(1), 200);
  setTimeout(() => subscriber.next(7), 300);
});

const scanned = source.pipe(scan((total, value) => total + value, 0));

scanned.subscribe((value) => {
  console.log(value);
});

/*
1
2
3
10
*/
