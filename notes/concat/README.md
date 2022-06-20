# `concat`

> Subscribe to observables in order as previous completes.

<br/>

![diagram](diagram.png)

<!--code-snipet-start-->
```ts
import { concat, Observable } from "rxjs";

const observable1 = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("a"));
  setTimeout(() => subscriber.next("b"), 100);
  setTimeout(() => subscriber.complete(), 200);
});

const observable2 = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("c"));
  setTimeout(() => subscriber.next("d"), 100);
  setTimeout(() => subscriber.complete(), 200);
});

const observable3 = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("e"));
  setTimeout(() => subscriber.next("f"), 100);
  setTimeout(() => subscriber.complete(), 200);
});

const concatted = concat(observable1, observable2, observable3);

concatted.subscribe((value) => {
  console.log(value);
});

/*
a
b
c
b
d
e
f
*/

```
<!--code-snipet-end-->

### Related

- [`concatAll`](../concatAll/)
- [`concatMap`](../concatMap//)


### Links

- [RxJS docs](https://rxjs.dev/api/index/function/concat)
- [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/combination/concat)