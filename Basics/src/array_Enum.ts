
// array 
const data : string[] = ["Aman" , "tarun" ];

const num : number[] = [3 , 4];

const rating:Array<number> = [3.4 ,4.3];
//-----------------------------
type info = {
    name : string;
    price : number
}

const menu : info[] = [
    {name : "Aman" , price : 3},
    {name : "tarun" , price : 2}
]
//----------------------------
const cities : readonly string[] = ["delhi" , "jaipur"]// we can not add values 

const table : number[][] = [
    [1 , 2 , 3],
    [5 , 6 , 6]
]

//----------------------------tuple

let tuple : [string , number];

tuple = ["Aman" , 3]
// tuple = [3 ,  "Aman"] // give error 


//-----------------

let userinfo : [string , number , boolean?];

userinfo = ["Aman" , 100 ]

//--------------------

const location : readonly [number , number] = [28 , 29]

const items : [name : string , price : number] = ["cheeta" , 8];

// ----------------------------Enum

enum userOption {
    small,
    medium,
    large
}

const size = userOption.large

//-----------------

enum status {
    pending  = 100,
    served ,// 101
    cancelled //102
}// auto inc value of each by one 1


enum infotypes {
    user = "Aman",
    pass = "234rm"
}

function makeType(type : infotypes){
    console.log(type);
}

makeType(infotypes.pass)


//---------------------

enum random {
    id = 1,
    name = "Aman"
}

const enum fix {
    low = 1,
    medium = 2,
    high = 3
}

const f = fix.high

//-----------------

