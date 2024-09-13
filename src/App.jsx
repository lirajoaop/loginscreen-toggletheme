import ReactSwitch from "react-switch";
import { Form } from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      className="w-screen h-screen flex justify-center items-center flex-col bg-[#f3ebf6] dark:bg-[#13111b]"
      id="theme"
    >
      <Form />
      <br />
      <br />
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </div>
  );
}

export default App;
