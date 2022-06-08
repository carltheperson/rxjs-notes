import { Subject } from "rxjs";

export const exampleSubject$ = new Subject<string>();

exampleSubject$.subscribe((val) => console.log("Subscriber 1 got", val));
exampleSubject$.subscribe((val) => console.log("Subscriber 2 got", val));

exampleSubject$.next("a");
exampleSubject$.next("b");
exampleSubject$.next("c");

exampleSubject$.subscribe((val) => console.log("Subscriber 3 got", val));

exampleSubject$.next("d");
