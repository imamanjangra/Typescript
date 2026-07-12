type Order = {
    price : number;
    item : string
}

function makeOrder(order : {item : string ; price : number}){
    console.log(order);
}

function myOrder(order : Order){
    console.log(order)
}

// type person = {
//     name : string;
//     rollno : number;
//     mobileNo : number;
// }

interface person  {
    name : string;
    rollno : number;
    mobileNo : number;
}

class record implements person{
    name = "Aman";
    rollno = 2;
    mobileNo = 946789098
}

type student = "stu1" | "stu2";// this is not possible in class implements we can only do two things first with type with exat imfor of interface only

interface stu {
    result : "pass" | "fail";
}
class info implements stu{
    result : "pass" | "fail" = "pass";
}

type p1 = "Aman" | "tarun";

function goodPerson(p : p1){
    console.log(p);
}


type power1 = {speed : number}

type power2 = {timetravel : string}

type AllinOne = power1 & power2;

const superman : AllinOne = {
    speed : 9,
    timetravel : "9ts"
}

type user = {
    username : string;
    bio ?: string
}

const u1: user = {
    username : "Aman"
}

const u2 : user = {
    username : "tarun",
    bio : "hello gys welcome to my yt "
}

