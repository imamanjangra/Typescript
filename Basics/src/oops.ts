// class user {
//     name : string;
//     age : number

//     // constructor(name : string , age : number){
//     //     this.name = name
//     //     this.age = age
//     // }
//     constructor(name : string ){
//         this.name = name
       
//     }
// }

// const u1 = new user("Aman" , 18)

// u1.age = 2;

// ------------------------------------------------------

class user {
    public name : string = "Aman"

    private pass : number = 233

    reveal(){
        return this.pass
    }

  
}



const c = new user()

// c.reveal()

//--------------

class shop {
    protected shopName = "Aman ke shop"
}


class branch extends shop {
    getname (){
        return this.shopName
    }
}

// new branch().getname()


//-----------------------------------

class walet {
    #balance = 100

    getBalance (){
        return this.#balance
    }
}

const w = new walet()

//-------------------

class data {
    readonly info : number = 2323

    constructor(info : number){
        this.info = info
    }
}

//------------------------

class userInfo {
    private _id = 2

    get id(){
        return this._id
    }

    set id(value : number){
        if(value > 3) throw new Error("tu nhe")
            this._id = value
    }
}


const u = new userInfo()

//---------------------

class d1 {
    static shopName = "Aman"

    constructor (public name : string){}

}

console.log(d1.shopName);

//------------------------

abstract class drink {
    abstract make () : void
}


class mydrink extends drink{
    make(){
        console.log();
    }
}               