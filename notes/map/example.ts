import { map, Observable } from "rxjs";

const source = new Observable<string>((subscriber) => {
  setTimeout(() => subscriber.next("a"));
  setTimeout(() => subscriber.next("b"), 100);
  setTimeout(() => subscriber.next("c"), 200);
});

const mapped = source.pipe(map((value) => value.toUpperCase()));

mapped.subscribe((value) => {
  console.log(value);
});

/*
A
B
C
*/
