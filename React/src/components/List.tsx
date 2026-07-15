import type {params} from "../types.tsx"
import { Card } from "./Card.tsx";

interface listProps {
    items : params[]
}
export  function List({items} : listProps) {
    return(
        <div>
            {
                items.map((params) => {
                    return(

                        <Card
                        key={params.id}
                        name = {params.name}
                        price = {params.price}
                        />
                    )
                })
            }
        </div>
    )
};
