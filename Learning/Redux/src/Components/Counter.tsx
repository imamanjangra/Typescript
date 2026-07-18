import { decrement, increment, incrementByAmount, reset } from "../Features/Counter/CounterSlice";
import { toggleTheme } from "../Features/Theme/ThemeSlice";
import { useAppDispatch, useAppSelector } from "../Hooks/counterHook";


export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const theme = useAppSelector((state) => state.mode.theme)
    const dispatch = useAppDispatch();


    function Toggle(){
        if(theme === "Light"){
            dispatch(toggleTheme("Dark"))
        }
        else{
            dispatch(toggleTheme("Light"))
        }
    }
     return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>Redux Counter</h1>

      <h2>{count}</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <button onClick={() => dispatch(reset())}>
          Reset
        </button>

        <button
          onClick={() =>
            dispatch(incrementByAmount(10))
          }
        >
          +10
        </button>


      </div>

      <button 
       style={{
        background:
          theme === "Light"
            ? "white"
            : "#222",

        color:
          theme === "Light"
            ? "black"
            : "white",

        height: "100vh",
        width : "100vh"
      }}
      onClick={() => Toggle()}
        >
            Toggle Theme</button>
    </div>
  );
};
