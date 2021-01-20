# TypeSctiptOverload
Playground for Typescript and overloading functions, especially in classes

## Problem 1
How to have a class initiliazed without typescript knowing which extended class is being used, and set up overloads/typings so it doesn't error

```
> npm run build

> typesctiptoverload@1.0.0 build /Users/rickknowler/development/TypeSctiptOverload
> ./node_modules/typescript/bin/tsc

index.ts:26:27 - error TS2345: Argument of type '{ someArg: string; }' is not assignable to parameter of type '{ someArg: string; } & string'.
  Type '{ someArg: string; }' is not assignable to type 'string'.

26   aClass.overloadFunction({someArg: 'hello'});
                             ~~~~~~~~~~~~~~~~~~


Found 1 error.

npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! typesctiptoverload@1.0.0 build: `./node_modules/typescript/bin/tsc`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the typesctiptoverload@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/rickknowler/.npm/_logs/2021-01-20T01_34_45_819Z-debug.log
```
