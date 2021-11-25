import Home from "./components/Home";
import Articles from "./components/Articles";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pages">
      <div className="home-page">
        <Home />
      </div>

      <div className="article-page">
        <Articles />
      </div>

      <div className="boost-page">
        <Boost />
      </div>

      <footer className="footer-page">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
