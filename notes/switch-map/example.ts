import { Observable, switchMap } from "rxjs";

const sourceObservable = new Observable<string>((subscriber) => {
  setTimeout(() => subscriber.next("a"), 0);
  setTimeout(() => subscriber.next("b"), 400);
  setTimeout(() => subscriber.next("c"), 800);
});

const switchMappedObservable = sourceObservable.pipe(
  switchMap(
    (letter) =>
      new Observable((subscriber) => {
        setTimeout(() => subscriber.next(letter + "1"), 0);
        setTimeout(() => subscriber.next(letter + "2"), 100);
        setTimeout(() => subscriber.next(letter + "3"), 600);
      })
  )
);

switchMappedObservable.subscribe((value) => {
  console.log(value);
});

/*
a1
a2
b1
b2
c1
c2
c3
*/
