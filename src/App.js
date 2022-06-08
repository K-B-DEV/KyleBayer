//Pages
import Home from "./Pages/Home";
import Helium from "./Pages/Helium";
//Styles
import GlobalStyles from "./components/GlobalStyles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { changeAnimationState } from "./actions/animationActions";
import { useState } from "react";
import SplashSplitPage from "./components/SplashSplitPage";

import { useDispatch, useSelector } from "react-redux";
function App() {
  const [anim, setAnim] = useState(true);
  useEffect(() => {
    const onScroll = (e) => {
      console.log(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAnimationState(true));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {/* <Route
              path="/github"
              exact
              component={() => {
                window.location.href = "https://github.com/K-B-DEV";
                window.location.target = "_blank";
                return null;
              }}
            /> */}
          </Switch>
        </BrowserRouter>
      </AnimatePresence>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: blue[50],
    },
  },
});

export default App;
