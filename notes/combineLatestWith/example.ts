import { combineLatestWith, Observable } from "rxjs";

const observable1 = new Observable((subscriber) => {
  subscriber.next("a");
  setTimeout(() => subscriber.next("b"), 400);
  setTimeout(() => subscriber.next("c"), 600);
  setTimeout(() => subscriber.complete(), 800);
});

const observable2 = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("d"), 200);
  setTimeout(() => subscriber.next("e"), 800);
  setTimeout(() => subscriber.complete(), 1000);
});

const combinedObservable = observable1.pipe(combineLatestWith(observable2));

observable1.subscribe({
  next: (value) => console.log("o1:  ", value),
  complete: () => console.log("o1:  ", "Done"),
});

observable2.subscribe({
  next: (value) => console.log("o2:  ", value),
  complete: () => console.log("o2:  ", "Done"),
});

combinedObservable.subscribe({
  next: (value) => console.log("comb:", value),
  complete: () => console.log("comb:", "Done"),
});
