import { labeledStatement } from "@babel/types";

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

//对象的类型 -- 接口

interface Person{
    name : string;
    age  : number; 
}

let tom  : Person = {
    name :'tom',
    age  : 21 
}

//可选属性

interface People{
    name : string,
    age? : number,
}

let pty: People = {
    name : 'pty',
    age : 21 
}

//任意属性

interface People2 {
    name : string;
    age?: number;
    [propname:string] : any ;
}


interface People3{

      readonly id : number;
             name : string;
             age? : number;
[ptopaName:string]: any;

}

let zjt : People3 = {

    id : 1611027,
    name : 'zjt',
    age : 20,
    store: 'get so many girlfriend'

};

//数组类型的定义方法
//[类型 + 方括号]来表示数组

let fibonacci: number[] = [1,1,2,3,5];
// fibonacci.push('8');

let fibonacci2: Array<number> = [1,1,2,3,5];

interface  NumberArray{

    [index:number] : number

}

let fabonacci3 : NumberArray = [1 ,1,2,3,5];

function sum(){
    let args: {
        [index:number] : number ;
        length:number;
        callee:Function;
    } = arguments ;
}

let list : any[] = ['6',6 , {6 : 'hello', 'what' : { 4: 'world'}}] ;

function Mysum(x:number , y:number): number{
    return x + y ;
}

let mySum = function (x : number , y : number): number{
    return x + y 
}


let mySum1 : (x:number , y:number) => number = function(x:number ,y:number){
    return x + y ; 
}

interface SearchFunc {
    (source:string , substring : string) : boolean;
}

let mySearch : SearchFunc ; 
mySearch = function(sourse:string , substring:string){
    return sourse.search(substring) !== 1 ; 
}

function buildName (firstName : string , lastName ?: string ):string {
    // if(lastName){
    //     return firstName + '' + lastName;
    // }else{
    //     return firstName
    // }
    return lastName ? firstName + '' + lastName :  firstName
}

let tomcat = buildName('tom','pty');

//可选参数必须在必需参数之后

function buildName1 (firstName : string , lastName : string = 'pty'){
    return firstName + '' + lastName;
}

//剩余参数

function push(array: any [] , ...items:any[]){
    items.forEach(function(item : any){
        array.push(item)
    })
}

let a :any[] = [] ; 
push(a , 1, {'hello':''} , {'11':'world'} ,'')

// function reverse(x : number | string ) :number | string {
//     if(typeof x === 'number'){
//         return Number(x.toString().split("").reverse().join(''))
//     }else if(typeof x === 'string'){
//         return x.split('').reverse().join('');
//     }
// }

// function doReverse(x : string | number) : string | number{
//     if(typeof x === 'number'){
//         return Number(x.toString().split('').reverse().join('') )
//     }else if( typeof x === 'string'){
//         return x.split('').reverse().join('');
//     }
// }

function reverse(x:string) : string;
function reverse(x:number) : number;
function reverse(x:number | string) : number | string{
    if(typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''))
    }else if (typeof x === 'string'){
        return x.split('').reverse().join('');
    }
}

//三斜线指令 描述模块之间的依赖关系
//书写一个全局变量的声明文件
//依赖一个全局变量的声明文件

//内置对象
//根据标准在全局作用域（global）上存在的对象
let b:Boolean = new Boolean(1);
let e:Error = new Error('Error occurred!');
let d:Date = new Date();
let r:RegExp = /[a-z]/;
//DOM和DOM的内置对象
//Document HTMLElement Event NodeList

let body : HTMLElement = document.body;
let allDiv : NodeList = document.querySelectorAll('div');
document.addEventListener('click',function(e:MouseEvent){
    //Do Something
})

type YouName = string;
type NameOrResolver = () => string

function getYouName(n:NameOrResolver) : YouName{
    if (typeof n === 'string'){
        return n
    }else{
        return n()
    }
};

type EventNames = 'click'| 'scroll'| 'mousemove';
function  handleEvent(ele:Element , event:EventNames){
    //do Something
}

handleEvent(document.getElementById('hello') , 'scroll');
handleEvent(document.getElementById('world') , 'click');


let tomm :[string , number ] = ['tomm',25];

let tommy :[string, number] ;

tommy[0] = 'tommy';

tommy[1] = 25;

tommy[0].slice(1);

tommy[1].toFixed(2);

enum Days {Sun , Mon , Tue , Wed , Thu , Fri , Sat }

enum Color { Red , Green , Blue = 'blue'.length }
//枚举项有两种类型，常数项和计算所得项

const enum Directionss{
    Up,
    Lift,
    Right,
    Down
}

let directionss = [Directionss.Down]

//declare定义的类型只会用于编译时的检查，编译结果中会被删除；
