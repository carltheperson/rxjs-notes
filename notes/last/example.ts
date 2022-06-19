import { last, Observable } from "rxjs";

const sourceObservable = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("c");
  subscriber.next("d");
  subscriber.next("e");
  subscriber.complete();
});

const lastedObservable = sourceObservable.pipe(last());

lastedObservable.subscribe((value) => {
  console.log(value);
});
