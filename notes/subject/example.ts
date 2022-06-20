import { Subject } from "rxjs";

const subject = new Subject<string>();

subject.subscribe((val) => console.log("Subscriber 1 got", val));

subject.next("a");
subject.next("b");

subject.subscribe((val) => console.log("Subscriber 2 got", val));

subject.next("c");
