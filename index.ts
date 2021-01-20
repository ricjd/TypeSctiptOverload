class BaseClass {
  simpleFuunction (myString: string): void {
    console.log(`hello ${myString}`);
  }
}

class ExtendedClass1 extends BaseClass {
  myExtendedFunctions = {
    overloadFunction: (someArg: string): void => {
      console.log(`overloadFunction: ${someArg}`);
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
  aClass.myExtendedFunctions.overloadFunction({someArg: 'hello'}); 
}
