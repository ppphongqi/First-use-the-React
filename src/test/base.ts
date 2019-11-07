let isDone: boolean = true;
let createdByBoolean: boolean = Boolean(1);
let myName: string = 'pty';
let myAge: number = 21 ; 
let sentense : string = `Hello , my name is ${myName},
 I'll be ${myAge + 1 } years old next month`;

//${}用来在模板字符串中嵌入表达式

//空值

//void 表示没有任何返回值的函数
function alertName():void {
    alert('My name is pty');
}

let unusable: undefined = undefined ; 

//任意值

let myFavoriteNumber: number = 7;
myFavoriteNumber = 8;

//any类型,允许被赋值为任意类型
let myFavoriteNumber1: any = 7;
myFavoriteNumber1 = 'pty';
//任意直上访问任何属性都是允许的：
let anyThing:any  = 'hello';
console.log(anyThing.myFirstName)
console.log(anyThing.setName());
console.log(anyThing.Myname());
//声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。


//联合类型

let myUnionNumber : string | number  = 'seven';
myUnionNumber = 7 ;

function getLength(something: string | number) : string{
    return something.toString();
}