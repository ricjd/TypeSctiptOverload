class BaseClass {
  simpleFuunction (myString: string): void {
    console.log(`hello ${myString}`);
  }
}

class ExtendedClass1 extends BaseClass {
  overloadFunction (someArg: string): void {
    console.log(`overloadFunction: ${someArg}`);
  }
}

class ExtendedClass2 extends BaseClass {
  overloadFunction (options: {someArg: string}): void {
    console.log(`overloadFunction: ${options.someArg}`);
  }
}

const classes = {
  extendedclass1: ExtendedClass1,
  extendedclass2: ExtendedClass2
}

function doAClass(className: 'extendedclass1' | 'extendedclass2') {
  const aClass = new classes[className];
  aClass.overloadFunction({someArg: 'hello'}); 
}
