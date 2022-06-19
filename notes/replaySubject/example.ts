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
