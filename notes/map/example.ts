import { map, Observable } from "rxjs";

const observable = new Observable<string>((subscriber) => {
  subscriber.next("a");
  setTimeout(() => subscriber.next("b"), 100);
  setTimeout(() => subscriber.next("c"), 200);
});

const mappedObservable = observable.pipe(map((value) => value.toUpperCase()));

mappedObservable.subscribe((value) => {
  console.log(value);
});
