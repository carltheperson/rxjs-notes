import { debounceTime, Observable } from "rxjs";

const sourceObservable = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("a"), 10);
  setTimeout(() => subscriber.next("b"), 20);
  setTimeout(() => subscriber.next("c"), 30);
  setTimeout(() => subscriber.next("d"), 40);
  setTimeout(() => subscriber.next("e"), 80);
  setTimeout(() => subscriber.next("f"), 110);
  setTimeout(() => subscriber.next("g"), 120);
});

const debouncedObservable = sourceObservable.pipe(debounceTime(20));

const time = new Date().getTime();
debouncedObservable.subscribe((value) => {
  console.log(value, new Date().getTime() - time);
});

/*
d 63
e 103
g 142
*/
