import { Observable, scan } from "rxjs";

const observable = new Observable<number>((subscriber) => {
  /*            */ subscriber.next(1);
  setTimeout(() => subscriber.next(1), 100);
  setTimeout(() => subscriber.next(1), 200);
  setTimeout(() => subscriber.next(7), 300);
});

const scannedObservable = observable.pipe(
  scan((total, value) => total + value, 0)
);

scannedObservable.subscribe((value) => {
  console.log(value);
});

/*
1
2
3
10
*/
