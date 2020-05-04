import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import storage from "local-storage-fallback";

import "./App.css";
import "./components/Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Container } from "react-bootstrap";

// import Logo from "./images/logo.png";
// import MenuBar from "./images/menuicon.png";
// import DarkModeIcon from "./images/darkmodeicon.png";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import loader from "./images/Loader.mp4";

const TheTeam = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/TheTeam")), 3000)
    )
);
const OurWorks = lazy(() => import("./Pages/OurWorks"));
const Confirmation = lazy(() => import("./Pages/Confirmation"));
const Subscription = lazy(() => import("./Pages/Subscription"));
const Form = lazy(() => import("./Pages/Form"));
const Apply = lazy(() => import("./Pages/Apply"));
const Merch = lazy(() => import("./Pages/Merch"));

const loading = (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      backgroundColor: "#fff",
    }}
  >
    <video
      src={loader}
      autoPlay
      muted
      loop
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    />
  </div>
);

const TheTeamSusp = () => (
  <Suspense fallback={loading}>
    <TheTeam />
  </Suspense>
);
const OurWorksSusp = (
  <Suspense fallback={loading}>
    <OurWorks />
  </Suspense>
);
const ConfirmationSusp = (
  <Suspense fallback={loading}>
    <Confirmation />
  </Suspense>
);
const SubscriptionSusp = (
  <Suspense fallback={loading}>
    <Subscription />
  </Suspense>
);
const FormSusp = (
  <Suspense fallback={loading}>
    <Form />
  </Suspense>
);
const ApplySusp = (
  <Suspense fallback={loading}>
    <Apply />
  </Suspense>
);
const MerchSusp = (
  <Suspense fallback={loading}>
    <Merch />
  </Suspense>
);

const GlobalStyle = createGlobalStyle`

body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#111" : "#EEE"};
  color: ${(props) => (props.theme.mode === "dark" ? "#FFF" : "#343434")};
}
.cover{
  color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#076847")};
}
.blackText{
  color: ${(props) => (props.theme.mode === "dark" ? "#FFF" : "#343434")};
}
.whitebg{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#000" : "#FFF"};
}
.whitebgNav{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#191919" : "#FFF"};
}
.greybg{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#191919" : "#F3F3F3"};
}
.heroheroL{
  display: ${(props) => (props.theme.mode === "dark" ? "none" : "block")};
}
.heroheroD{
  display: ${(props) => (props.theme.mode === "dark" ? "block" : "none")};
}
.a-get-started-testimonies img{
  border: ${(props) =>
    props.theme.mode === "dark" ? "7px solid #343434" : "7px solid #fff"};
}
.toggleButton{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#343434" : "#000"};   
  color: ${(props) => (props.theme.mode === "dark" ? "#000" : "#343434")};   
}
.toggleMode{
  opacity: ${(props) => (props.theme.mode === "dark" ? ".5" : "1")};     
}
.inputShadow{    
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#f00" : "#fff"};
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "2px 4px 8px #000;"
      : "2px 4px 8px #ddd;"};     
}
.card{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#191919 !important" : "#fff !important"};
}
.a-banner-heroImgL{
  display: ${(props) => (props.theme.mode === "dark" ? "none" : "block")}
}
.a-banner-heroImgD{
  display: ${(props) => (props.theme.mode === "dark" ? "block" : "none")}
}
`;
function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <div className="cover">
            <NavBar
              onClick={() =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            />
            <Switch>
              <Route path="/Subscription" component={SubscriptionSusp} />

              <Route path="/Confirmation" component={ConfirmationSusp} />

              <Route path="/OurWorks" component={OurWorksSusp} />

              <Route path="/TheTeam" component={TheTeamSusp} />

              <Route path="/Merch" component={MerchSusp} />

              <Route path="/Form:service" component={FormSusp} />

              <Route path="/Apply" component={ApplySusp} />

              {/* <Route component={ErrorPage} /> */}

              <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
            <GlobalStyle />
          </div>
        </>
      </ThemeProvider>
    </Router>
  );
}
