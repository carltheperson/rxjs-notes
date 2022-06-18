import { concatMap, Observable } from "rxjs";

const sourceObservable = new Observable<string>((subscriber) => {
  setTimeout(() => subscriber.next("a"), 0);
  setTimeout(() => subscriber.next("b"), 200);
  setTimeout(() => subscriber.next("c"), 400);
});

const concatMappedObservable = sourceObservable.pipe(
  concatMap(
    (letter) =>
      new Observable((subscriber) => {
        setTimeout(() => subscriber.next(letter + "1"), 0);
        setTimeout(() => subscriber.next(letter + "2"), 300);
        setTimeout(() => subscriber.complete(), 400);
      })
  )
);

concatMappedObservable.subscribe((value) => {
  console.log(value);
});

/*
a1
a2
b1
b2
c1
c2
*/
