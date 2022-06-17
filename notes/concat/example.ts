import { concat, Observable } from "rxjs";

const observable1 = new Observable((subscriber) => {
  /*            */ subscriber.next("a");
  setTimeout(() => subscriber.next("b"), 100);
  setTimeout(() => subscriber.complete(), 200);
});

const observable2 = new Observable((subscriber) => {
  /*            */ subscriber.next("c");
  setTimeout(() => subscriber.next("d"), 100);
  setTimeout(() => subscriber.complete(), 200);
});

const observable3 = new Observable((subscriber) => {
  /*            */ subscriber.next("e");
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
d
e
f
*/
