class BaseClass {
  simpleFuunction (myString: string): void {
    console.log(`hello ${myString}`);
  }
}

interface OverloadFunctionOptions {
  someArg: string;
}

interface OverloadFunction {
  (options: OverloadFunctionOptions): void;
  (aString: string, secondString: string): void;
}

class ExtendedClass1 extends BaseClass {
  myExtendedFunctions = {
    overloadFunction: (someArg: string, secondString: string): void => {
      console.log(`overloadFunction: ${someArg} and ${secondString}`);
    }
  }
}

class ExtendedClass2 extends BaseClass {
  myExtendedFunctions = {
    overloadFunction: (options: {someArg: string}): void => {
      console.log(`overloadFunction: ${options.someArg}`);
    }
  }
}

const classes = {
  extendedclass1: ExtendedClass1,
  extendedclass2: ExtendedClass2
}

function doAClass(className: 'extendedclass1' | 'extendedclass2') {
  const aClass = new classes[className];
  const myOverloadFunction = aClass.myExtendedFunctions.overloadFunction as OverloadFunction;
  myOverloadFunction({someArg: 'hello'});
  myOverloadFunction('hello', 'somehting');
}
