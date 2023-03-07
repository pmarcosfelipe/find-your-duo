import "./styles/main.css";

import logoImg from "./assets/logo-nlw.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img alt="Logo Image" src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Your{" "}
        <span className="bg-gradient text-transparent bg-clip-text">duo</span>{" "}
        is here
      </h1>
    </div>
  );
}

export default App;
