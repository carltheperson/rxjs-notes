import { distinct, Observable } from "rxjs";

const sourceObservable = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("a");
  subscriber.next("c");
  subscriber.next("b");
  subscriber.next("d");
  subscriber.next("a");
});

const distinctObservable = sourceObservable.pipe(distinct());

distinctObservable.subscribe((value) => {
  console.log(value);
});
