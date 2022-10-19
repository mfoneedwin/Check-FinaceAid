import React from "react";
import { FormProvider } from "./FormContext";
import Home from "./Home";
import "./Sass/App.scss";
import { UniversityProvider } from "./UniversityContext";
import { Routes ,Route, useLocation } from "react-router-dom";
import ScoreResult from "./ScoreResult";
import { AnimatePresence } from "framer-motion";

function App() {
  const routeLocation = useLocation();

  return (
    <UniversityProvider>
      <FormProvider>
        <div className="App">
          <header>
            <h1>Check My FinanceAid</h1>
          </header>
          <AnimatePresence exitBeforeEnter>
            <Routes location={routeLocation} key={routeLocation.key}>
              <Route path="/" element={<Home/>} exact />
              <Route path="/result" element={<ScoreResult/>} exact />
            </Routes>
          </AnimatePresence>
        </div>
      </FormProvider>
    </UniversityProvider>
  );
}

export default App;
