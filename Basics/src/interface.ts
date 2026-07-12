interface user {
    name : string
    id : number
}

const u1:user = {
    name : "Aman",
    id : 3
}
//-------------------------

interface disCalc{
    (price : number): number
}


const apply50 : disCalc = (p) => p*0.5

//------------------------------

interface testmachine{
    start() : void;
    stop() : void
}

const machine : testmachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

//-----------------------------


interface User {
    name : string
}

interface User {
    age : number
}

const u: User = {
    name : "Aman",
    age : 3
}// auto merge both interface data of same interface 

//------------------------------

interface A {
    a : string
}

interface B {
    b : string
}

interface c extends A , B {}