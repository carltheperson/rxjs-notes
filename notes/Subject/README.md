# `Subject`

> A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters.

> Every Subject is an Observable and an Observer. You can subscribe to a Subject, and you can call `next` to feed values as well as `error` and `complete`.

<br/>

![diagram](diagram.png)

<!--code-snipet-start-->
```ts
import { Subject } from "rxjs";

const subject = new Subject<string>();

subject.subscribe((val) => console.log("Subscriber 1 got", val));

subject.next("a");
subject.next("b");

subject.subscribe((val) => console.log("Subscriber 2 got", val));

subject.next("c");

```
<!--code-snipet-end-->

### Related

- [`ReplaySubject`](../ReplaySubject/)
- [`BehaviorSubject`](../BehaviorSubject/)


### Links

- [RxJS docs](https://rxjs.dev/api/index/class/Subject)
- [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/subjects)