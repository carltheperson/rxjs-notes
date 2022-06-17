import { Observable, switchAll } from "rxjs";

const innerObservable1 = new Observable((subscriber) => {
  /*            */ subscriber.next("a");
  setTimeout(() => subscriber.next("b"), 100);
  setTimeout(() => subscriber.next("c"), 300);
  setTimeout(() => subscriber.next("d"), 400);
});

const innerObservable2 = new Observable((subscriber) => {
  /*            */ subscriber.next("e");
  setTimeout(() => subscriber.next("f"), 100);
  setTimeout(() => subscriber.next("g"), 400);
});

const outerObservable = new Observable<any>((subscriber) => {
  /*            */ subscriber.next(innerObservable1); // <--- We are emitting observables!
  setTimeout(() => subscriber.next(innerObservable2), 200);
});

const switchedAllObservable = outerObservable.pipe(switchAll());

switchedAllObservable.subscribe((value) => {
  console.log(value);
});

/*
a
b
e
f
g
*/
