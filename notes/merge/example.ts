import { merge, Observable } from "rxjs";

const source1 = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("a"));
  setTimeout(() => subscriber.next("b"), 400);
  setTimeout(() => subscriber.next("c"), 600);
  setTimeout(() => subscriber.complete(), 800);
});

const source2 = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("d"), 200);
  setTimeout(() => subscriber.next("e"), 800);
  setTimeout(() => subscriber.complete(), 1000);
});

const merged = merge(source1, source2);

source1.subscribe({
  next: (value) => console.log("o1:  ", value),
  complete: () => console.log("o1:  ", "Done"),
});

source2.subscribe({
  next: (value) => console.log("o2:  ", value),
  complete: () => console.log("o2:  ", "Done"),
});

merged.subscribe({
  next: (value) => console.log("comb:", value),
  complete: () => console.log("comb:", "Done"),
});

/*
o1:   a
comb: a
o2:   d
comb: d
o1:   b
comb: b
o1:   c
comb: c
o1:   Done
o2:   e
comb: e
o2:   Done
comb: Done
*/
