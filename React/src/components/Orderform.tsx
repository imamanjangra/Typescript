import React, { useState } from "react";


interface OrderformProps {
    onSubmit(order : {name : string ; cups : number}) : void
}

export default function Orderform({onSubmit} : OrderformProps) {
    const [name , setName] = useState<string>("Aman");
    const [cups , setCups] = useState<number>(2);

    function handleSubmit(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        onSubmit({name , cups})
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>

        <input 
        value={name} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />

     <label>cups</label>

        <input 
        type="number"
        value={cups} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)}
        />

        <button type="submit">
            click me !
        </button>
    </form>
    )
};
