function person(name : string , age : number){
    console.log(name + age);
}

person("Aman" , 3) // if try to write wrong value then it show error and not add into wrong data type

//------------------------------------

function user():number {// what data function is return at the end after process 
    return 5
}

// ----------------------------------

function makeOrder(order : string){
    if(!order) return null
    return order
}

function data(): void {
    console.log("no outhput is come from function ");
}

// -------------------------

function d1(value ?: string){
    console.log(value);
}

function d2(type : string = "Aman"){
    console.log(type);
}

// ---------------------

function createUser(order : {
    name : string;
    email : string
}){
    console.log();
}

