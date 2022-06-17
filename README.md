# Learning RxJS from source

### Step 1: Learning the functionality well

Select "subjects" to learn (operators, classes, etc). For each:

- Code up a good example
- Write tests for the example
- Draw a custom marble diagram
- Write source-code notes

Subjects:

- Classes:
	- [x] [`Observable`](./notes/observable/)
	- [x] [`Subject`](./notes/subject/)
	- [x] [`BehaviorSubject`](./notes/behavior-subject/)
	- [x] [`ReplaySubject`](./notes/replay-subject/)

- Combination operators:
	- [x] [`combineLatestWith`](./notes/combine-latest-with/)
	- [x] [`withLatestFrom`](./notes/with-latest-from/)
	- [x] [`merge`](./notes/merge)
	- [ ] concat

- Transformation operators:
	- [x] [`map`](./notes/map)
	- [ ] scan
	- [ ] reduce
	- [ ] switchMap
	- [ ] concatMap
	- [ ] mergeMap
	- [ ] partition

- Filtering operators:
	- [ ] filter
	- [ ] take
	- [ ] throttle
	- [ ] debounce

- Creation functions:
 	- [ ] of

- Not sure yet:
	- [ ] last
	- [ ] share
