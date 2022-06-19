import { Observable, withLatestFrom } from "rxjs";

const source1 = new Observable((subscriber) => {
  subscriber.next("a");
  setTimeout(() => subscriber.next("b"), 400);
  setTimeout(() => subscriber.next("c"), 600);
  setTimeout(() => subscriber.complete(), 800);
});

const source2 = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("d"), 200);
  setTimeout(() => subscriber.next("e"), 900);
  setTimeout(() => subscriber.complete(), 1000);
});

const combinedObservable = source1.pipe(withLatestFrom(source2));

source1.subscribe({
  next: (value) => console.log("o1:  ", value),
  complete: () => console.log("o1:  ", "Done"),
});

source2.subscribe({
  next: (value) => console.log("o2:  ", value),
  complete: () => console.log("o2:  ", "Done"),
});

combinedObservable.subscribe({
  next: (value) => console.log("comb:", value),
  complete: () => console.log("comb:", "Done"),
});
