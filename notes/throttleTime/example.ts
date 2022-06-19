import { Observable, throttleTime } from "rxjs";

const sourceObservable = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("a"), 10);
  setTimeout(() => subscriber.next("b"), 20);
  setTimeout(() => subscriber.next("c"), 30);
  setTimeout(() => subscriber.next("d"), 50);
  setTimeout(() => subscriber.next("e"), 60);
  setTimeout(() => subscriber.next("f"), 100);
  setTimeout(() => subscriber.next("g"), 110);
  setTimeout(() => subscriber.next("h"), 120);
});

const throttledObservable = sourceObservable.pipe(throttleTime(30));

const time = new Date().getTime();
throttledObservable.subscribe((value) => {
  console.log(value, new Date().getTime() - time);
});
