import "./App.css";
import "./Custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Import Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="container custom-container">
     <Header />
      <hr />
     <Main />
    </div>
  );
}

export default App;
