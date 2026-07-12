function wrapInArray<T>(item : T) : T[]{
    return [item]
}

wrapInArray("Aman")

wrapInArray(43)

wrapInArray({name : "Aman"})

function fname<A, B>(a :A , b: B) : [A , B] {
    return[a , b]
}

fname("Aman" , "jangra");

//----------------------

interface Box<T>{
    content : T
}

const numBox : Box<number> = {content : 2}

