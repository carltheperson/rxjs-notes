# `scan`

> Useful for encapsulating and managing state. Applies an accumulator (or "reducer function") to each value from the source after an initial state is established -- either via a seed value (second argument), or from the first value from the source.

> It's like `reduce`, but emits the current accumulation state after each update

<br/>

![diagram](diagram.png)

<!--code-snipet-start-->
```ts
import { Observable, scan } from "rxjs";

const source = new Observable<number>((subscriber) => {
  setTimeout(() => subscriber.next(1));
  setTimeout(() => subscriber.next(1), 100);
  setTimeout(() => subscriber.next(1), 200);
  setTimeout(() => subscriber.next(7), 300);
});

const scanned = source.pipe(scan((total, value) => total + value, 0));

scanned.subscribe((value) => {
  console.log(value);
});

/*
1
2
3
10
*/

```
<!--code-snipet-end-->

### Related

- [`reduce`](../reduce/)

### Links

- [RxJS docs](https://rxjs.dev/api/index/function/scan)
- [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/transformation/reduce)