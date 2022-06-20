# `repeat`

> Returns an Observable that will resubscribe to the source stream when the source stream completes.

> Repeats all values emitted on the source. It's like retry, but for non error cases.

<br/>

![diagram](diagram.png)

<!--code-snipet-start-->
```ts
import { Observable, repeat } from "rxjs";

const source = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("b");
  subscriber.complete();
});

const repeated = source.pipe(repeat(3));

repeated.subscribe((value) => {
  console.log(value);
});

/*
a
b
a
b
a
b
*/

```
<!--code-snipet-end-->


### Links

- [RxJS docs](https://rxjs.dev/api/index/function/repeat)
- [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/utility/repeat)