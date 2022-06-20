# `filter`

> Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.

<br/>

![diagram](diagram.png)

<!--code-snipet-start-->
```ts
import { filter, Observable, partition } from "rxjs";

const source = new Observable<number>((subscriber) => {
  setTimeout(() => subscriber.next(1), 100);
  setTimeout(() => subscriber.next(2), 200);
  setTimeout(() => subscriber.next(3), 300);
  setTimeout(() => subscriber.next(4), 400);
  setTimeout(() => subscriber.next(5), 500);
  setTimeout(() => subscriber.next(6), 600);
});

const filtered = source.pipe(filter((num) => num % 2 == 1));

filtered.subscribe((value) => {
  console.log(value);
});

/*
1
3
5
 */

```
<!--code-snipet-end-->

### Related

- [`partition`](../partition/)


### Links

- [RxJS docs](https://rxjs.dev/api/index/function/filter)
- [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter)