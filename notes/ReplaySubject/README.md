# `ReplaySubject`

> A variant of `Subject` that "replays" old values to new subscribers by emitting them when they first subscribe.

<br/>

![diagram](diagram.png)

<!--code-snipet-start-->
```ts
import { ReplaySubject } from "rxjs";

const subject = new ReplaySubject();

subject.next("a");
subject.next("b");

subject.subscribe((val) => {
  console.log("Subscriber got", val);
});

subject.next("c");

/*
Subscriber got a
Subscriber got b
Subscriber got c
*/

```
<!--code-snipet-end-->

### Related

- [`Subject`](../Subject/)
- [`BehaviorSubject`](../BehaviorSubject/)


### Links

- [RxJS docs](https://rxjs.dev/api/index/function/mergeMap)
- [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap)