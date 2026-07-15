
interface cardProp{
    name : string;
    price : number;
    isspecial ?: boolean
}

export function Card({name , price , isspecial = false} : cardProp){
    return(
        <div>
            <h2>Item name  {name}</h2>
            <h3>{price}</h3>
            <h4>{isspecial && <span>yes</span>}</h4>
        </div>
    )
}