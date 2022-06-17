import { Observable, reduce } from "rxjs";

const observable = new Observable<number>((subscriber) => {
  /*            */ subscriber.next(1);
  setTimeout(() => subscriber.next(1), 100);
  setTimeout(() => subscriber.next(1), 200);
  setTimeout(() => subscriber.next(7), 300);
  setTimeout(() => subscriber.complete(), 400);
});

const reducedObservable = observable.pipe(
  reduce((total, value) => total + value, 0)
);

reducedObservable.subscribe((value) => {
  console.log(value);
});

/*
10
*/
