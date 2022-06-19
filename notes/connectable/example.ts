import { connectable, Observable } from "rxjs";

const source = new Observable((subscriber) => {
  subscriber.next("a " + Math.random().toFixed(3));
  subscriber.next("b " + Math.random().toFixed(3));
  subscriber.next("c " + Math.random().toFixed(3));
});

const connectableObservable = connectable(source);

connectableObservable.subscribe((value) => {
  console.log("Subscriber 1:", value);
});

connectableObservable.subscribe((value) => {
  console.log("Subscriber 2:", value);
});

connectableObservable.connect();

/*
Subscriber 1: a 0.777
Subscriber 2: a 0.777
Subscriber 1: b 0.480
Subscriber 2: b 0.480
Subscriber 1: c 0.381
Subscriber 2: c 0.381
*/
