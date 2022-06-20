# `Observable`

> A representation of any set of values over any amount of time. This is the most basic building block of RxJS.

<br/>

![diagram](diagram.png)

<!--code-snipet-start-->
```ts
import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("c");
  setTimeout(() => {
    subscriber.next("d");
  }, 1000);
});

observable.subscribe((value) => {
  console.log("Got value", value);
});

/*
Got value a
Got value b
Got value c
Got value d
*/

```
<!--code-snipet-end-->

### Related

- [`Subject`](../Subject/)


### Links

- [RxJS docs](https://rxjs.dev/api/index/class/Observable)