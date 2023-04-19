import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
