import React from "react";
import Header from "./components/header";
import { FirstBlock } from "./components/firstBlock";
import { TitleWrapper } from "./components/HeaderWrapper";
import GlobalFonts from "./fonts/fonts";
import { Footer } from "./components/footer";
import { SecondBlock } from "./components/secondBlock";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      <TitleWrapper>ut aliquip ex ea commodo consequat</TitleWrapper>
      <FirstBlock />
      <TitleWrapper>Lorem ipsum dolor sit amet</TitleWrapper>
      Каресель
      <TitleWrapper>ut aliquip ex ea commodo consequat</TitleWrapper>
      <SecondBlock />
      <Footer />
    </div>
  );
}

export default App;
