import { concatAll, Observable } from "rxjs";

const innerObservable1 = new Observable((subscriber) => {
  /*            */ subscriber.next("a");
  setTimeout(() => subscriber.next("b"), 100);
  setTimeout(() => subscriber.complete(), 200);
});

const innerObservable2 = new Observable((subscriber) => {
  /*            */ subscriber.next("c");
  setTimeout(() => subscriber.next("d"), 100);
  setTimeout(() => subscriber.complete(), 200);
});

const innerObservable3 = new Observable((subscriber) => {
  /*            */ subscriber.next("e");
  setTimeout(() => subscriber.next("f"), 100);
  setTimeout(() => subscriber.complete(), 200);
});

const outerObservable = new Observable<Observable<any>>((subscriber) => {
  subscriber.next(innerObservable1); // <--- We are emitting observables!
  subscriber.next(innerObservable2);
  subscriber.next(innerObservable3);
});

const concattedAllObservable = outerObservable.pipe(concatAll());

concattedAllObservable.subscribe((value) => {
  console.log(value);
});

/*
a
b
c
d
e
f
*/
