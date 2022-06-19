import { Observable, pairwise } from "rxjs";

const source = new Observable((subscriber) => {
  subscriber.next("a");
  subscriber.next("b");
  subscriber.next("c");
  subscriber.next("d");
  subscriber.next("e");
});

const pairwised = source.pipe(pairwise());

pairwised.subscribe((value) => {
  console.log(value);
});

/*
[ 'a', 'b' ]
[ 'b', 'c' ]
[ 'c', 'd' ]
[ 'd', 'e' ]
*/
