let str: any = "Aman";

let length : number = (str as string ).length


type Book = {
    name : string
}

let bookString = '{"name" : "Aman"}';
let bookObject = JSON.parse(bookString) as Book 

