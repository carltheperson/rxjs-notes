# Learning RxJS from source

### Step 1: Learning the functionality well

Select "subjects" to learn (operators, classes, etc). For each:

- Code up a good example
- Write tests for the example
- Draw a custom marble diagram
- Write source-code notes

<!-- <img src="./notes/concat/diagram.png" height="250px" /> -->

Subjects:

- Classes:
	- [x] [`Observable`](./notes/observable/)
	- [x] [`Subject`](./notes/subject/)
	- [x] [`BehaviorSubject`](./notes/behavior-subject/)
	- [x] [`ReplaySubject`](./notes/replay-subject/)

- Combination operators:
	- [x] [`combineLatestWith`](./notes/combine-latest-with/)
	- [x] [`withLatestFrom`](./notes/with-latest-from/)
	- [x] [`merge`](./notes/merge/)
	- [x] [`concat`](./notes/concat/)
	- [x] [`concatAll`](./notes/concat-all/)
	- [x] [`switchAll`](./notes/switch-all/)

- Transformation operators:
	- [x] [`map`](./notes/map)
	- [x] [`scan`](./notes/scan)
	- [x] [`reduce`](./notes/reduce/)
	- [x] [`mergeMap`](./notes/mergeMap/)
	- [x] [`concatMap`](./notes/concatMap/)
	- [x] [`switchMap`](./notes/switch-map/)
	- [x] [`partition`](./notes/partition/)

- Filtering operators:
	- [x] [`filter`](./notes/filter)
	- [x] [`take`](./notes/take)
	- [x] [`debounceTime`](./notes/debounceTime/)
	- [x] [`throttleTime`](./notes/throttleTime/)
	- [x] [`last`](./notes/last)
	- [ ] distinct

- Creation functions:
 	- [ ] of

- Not sure yet:
	- [ ] share
	- [ ] sample