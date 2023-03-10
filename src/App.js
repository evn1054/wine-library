import { useState, useEffect } from "react";

import "./App.css";
import "./index.css";
import "./fonts/icomoon/style.module.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { getApiResource } from "./utils/network";

import headerPath from "../src/images/header001/header001_00000.jpg";

function App() {
  const [wines, setWines] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    const winesList = res.map(({ id, image }) => {
      return { id, image };
    });
    setWines(winesList);
  };

  useEffect(() => {
    getResource();
  }, []);

  return (
    <>
      <Header path={headerPath} />
      <main className="main">
        <div className="wrapper main__wrapper">
          <Main wines={wines} />
        </div>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
