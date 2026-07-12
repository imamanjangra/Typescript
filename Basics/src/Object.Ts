const student = {
    name : "AMan",
    rollno : 84,
}
// first way to create object 

let stu : {
    name : string;
    rollno : number
}

stu = {
    name : "AMan",
    rollno : 83
}

// with type 

type person = {
    name : string;
    age : number
}

const personData : person = {
    name : "Aman",
    age : 4
}
// --------------------------
type brew = {brewTime : number}

const coffee = {brewTime : 5 , location : "panipat"};

const chaiBrew : brew = coffee
//-----------------

type User = {
    username : string;
    password : string
}

const u1 : User = {
    username : "Aman",
    password : "23"
}
// ----------------------------------
type Item = {name : string ; total : number};

type Address = {street : string ; pin : string}

type Order ={
    id : string;
    item : Item[];
    address : Address
}


//-----------------------------------

type p1 = {
    name : string;
    age : number;
    isAvalable : boolean
}

const updateP1 = (updates : Partial<p1>) => {// create optional 
    console.log("data updating");
}

updateP1({name : "trun cheeta "});
// ---------------
type items = {
    name ?: string;
    total ?: number
}

const placOrder = (order : Required<items>) => {// create all required 
    console.log(order);
}

placOrder({
    name : "Aman",
    total : 3
})

// --------------------

