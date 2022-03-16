let numberlet: number = 5;
let stringlet: string = '5';
let booleanlet: boolean = true;
let numbers: number[] = [5, 3, 6];
let numberList: Array<number> = [5];

enum Direction {
  NORTH,
  SOUTH,
  WEST,
  EAST,
}
let direction: Direction = Direction.EAST;

function addNumbers(a: number, b: number): void {
  console.log(a + b);
}
class Foo {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  printFooDetails() {
    //return 'Id='+this.id+'Name='+this.name;   //no need concatenation by using $
    return `Id=${this.id} Name=${this.name}`;
  }
}

var fooObj: Foo;
fooObj = new Foo(1, 'jyothi');
console.log(fooObj.printFooDetails());

class Employee {
  constructor() {
    console.log('Employee Constructor invoked');
  }
}
class Manager extends Employee {
  constructor() {
    super();
    console.log('Manager Constructor invoked');
  }
}
new Manager();

(function () {
  let i = 100; // var i=100;
  if (true) {
    let i = 1000; //var i=1000;
    console.log(`Inside Block : ${i}`);
  }
  console.log(`Outside Block : ${i}`);
})();
