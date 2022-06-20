# `combineLatestWith`

> Create an observable that combines the latest values from all passed observables and the source into arrays and emits them.

<br/>

![diagram](diagram.png)

<!--code-snipet-start-->
```ts
import { combineLatestWith, Observable } from "rxjs";

const observable1 = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("a"));
  setTimeout(() => subscriber.next("b"), 400);
  setTimeout(() => subscriber.next("c"), 600);
  setTimeout(() => subscriber.complete(), 800);
});

const observable2 = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("d"), 200);
  setTimeout(() => subscriber.next("e"), 800);
  setTimeout(() => subscriber.complete(), 1000);
});

const combined = observable1.pipe(combineLatestWith(observable2));

observable1.subscribe({
  next: (value) => console.log("o1:  ", value),
  complete: () => console.log("o1:  ", "Done"),
});

observable2.subscribe({
  next: (value) => console.log("o2:  ", value),
  complete: () => console.log("o2:  ", "Done"),
});

combined.subscribe({
  next: (value) => console.log("comb:", value),
  complete: () => console.log("comb:", "Done"),
});

/*
o1:   a
o2:   d
comb: [ 'a', 'd' ]
o1:   b
comb: [ 'b', 'd' ]
o1:   c
comb: [ 'c', 'd' ]
o1:   Done
o2:   e
comb: [ 'c', 'e' ]
o2:   Done
comb: Done
*/

```
<!--code-snipet-end-->

### Related

- [`withLatestFrom`](../withLatestFrom)


### Links

- [RxJS docs](https://rxjs.dev/api/index/function/combineLatestWith)
- [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/combination/combinelatest)