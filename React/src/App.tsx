import "./App.css";
import { Card } from "./components/Card.tsx";
import { Counter } from "./components/Counter.tsx";
import type { params } from "./types.tsx";
import { List } from "./components/List.tsx";
import Orderform from "./components/Orderform.tsx";

const menu: params[] = [
  { id: 1, name: "Aman", price: 39 },
  { id: 2, name: "tarun", price: 21 },
];
function App() {
  return (
    <>
      <div>
        <Card name="headphone" price={3000} />

        <Counter />
      </div>

      <div>
        <List items={menu} />
      </div>

      <div>
        <Orderform 
            onSubmit={(Order) => {
              console.log("placed" , Order.name , Order.cups);
            }}
        />
      </div>
    </>
  );
}

export default App;
