import { useTheme } from "../Context/ThemeContext";


export default function Theme (){

    const {theme , toggleTheme} = useTheme();

    return (
    <div
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
      }}
    >
      <h1>{theme}</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}