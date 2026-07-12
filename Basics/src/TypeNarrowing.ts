// check trutheness check 

function demo (msg : string){
    if(msg){
        console.log(`mess is this : ${msg}`)
    }
    console.log('hello my mess is this ... ');
}

class t1 {
        service(){
            return 'serving t1'
        }
}

class t2 {
    service (){
        return `serving t2`
    }
}

function service(boy : t1 | t2){
    if(boy  instanceof t1){
        return boy.service()
    }
}

type order = {
    type : string
    apple : number
}

// function isOrder(obj : any) : obj is order{
//     return(
//         typeof obj === "object" &&
//         obj !== null &&
//         typeof obj.type === "string"&&
//     )
// }

