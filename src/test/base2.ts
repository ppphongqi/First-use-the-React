//类
//TypeScript除了实现ES6中的类的功能外，还添加了新用法

//面向对象OOP，三大特征 ： 封装 、 继承 、 多态 。


// class Animal{
//     static isAnimal(a){
//         return a instanceof Animal ; 
//     }
// }

//static修饰符修饰的方法为静态方法，不需要实例化

//TS中类的用法
//public private 和 protected
//TS可以使用三种访问修饰符，public 、 private 、 protected


// class Animal1{
//     private name ;
//     public constructor(name){
//         this.name = name ; 
//     }
// }
// let a = new Animal1('Jack');

// class Animal {
//     protected name ;
//     public constructor(name){
//         this.name =name ;
//     }
// }
// class Cat extends Animal{
//     constructor(name){
//         super(name);
//         console.log(this.name)
//     }
// }

// class Animal {
//     public constructor(public name ){
//         this.name = name 
//     }
// }

// class Animal_I {
//     public constructor(public readonly name ) {
//         this.name = name ;
//     }
// }

// class Animal {
//     readonly name ;
//     public constructor(name){
//         this.name =name ;
//     }
// }

// let a = new Animal('jack');
// console.log(a.name);
// let b = new Animal('Tommy');
// console.log(b.name);
// b.name = 'pty';

//抽象类
//abstract用于抽象类和其中的抽象方法。

// abstract class AnimalII{
//     public name ;
//     public constructor(name){
//         this.name = name ;
//     }
//     public abstract sayHi();
// }

// class Cat extends AnimalII{
//     public eat(){
//         console.log(`${this.name} is eating.`)
//     }
//     public sayHi(){
//         console.log(`Hello this is ${this.name}`)
//     }
// }

// let cat = new Cat('Tom');

// class Animal_II {
//     name : string;
//     public constructor(name : string){
//         this.name = name 
//     }
//     public sayHi(){
//         return `My name is ${this.name}`
//     }
// }

// let c: Animal_II = new Animal_II('jack');

//实现:implements
//一般来说，一个类只能继承自另一个类，有时候不同类之间可以有一些共同的特性
//这时候就可以把特性提取成接口（interface），用implements关键字来实现，这个
//特性大大提高了面向对象的灵活性

interface Alarm{
    alert();
}

class Door{

}

class SecurityDoor extends Door implements Alarm{
    alert(){
        console.log('SecurityDoor alert');
    }
}