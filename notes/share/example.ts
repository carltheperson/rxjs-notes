import { Observable, share } from "rxjs";

const source = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next("a " + Math.random().toFixed(3));
    subscriber.next("b " + Math.random().toFixed(3));
    subscriber.next("c " + Math.random().toFixed(3));
  }, 5);
  return () => {
    console.log("Subscriber has unsubscribed from source");
  };
});

const shared = source.pipe(share());

const subscription1 = shared.subscribe((value) => {
  console.log("Subscriber 1:", value);
});

const subscription2 = shared.subscribe((value) => {
  console.log("Subscriber 2:", value);
});

setTimeout(() => {
  subscription1.unsubscribe();
  subscription2.unsubscribe();
}, 20);

/*
Subscriber 1: a 0.199
Subscriber 2: a 0.199
Subscriber 1: b 0.872
Subscriber 2: b 0.872
Subscriber 1: c 0.587
Subscriber 2: c 0.587
Subscriber has unsubscribed from source
*/
