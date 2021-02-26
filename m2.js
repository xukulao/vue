export let a=10;
export function show1(){
    console.log("show1");
}
export class User{
    print(){
        console.log("User print");
    }
}
export let user={
    name:"lucy"
}
let x1=100;
let x2=200;
export {x1,x2 as xb};