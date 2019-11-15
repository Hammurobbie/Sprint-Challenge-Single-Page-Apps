import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App(props) {
  return (
    <main>
      <Header />
      <Route
        exact
        path="/welcomepage"
        render={props => <WelcomePage {...props} />}
      />
      <Route
        path="/characters"
        render={props => <CharacterList {...props} />}
      />
    </main>
  );
}
