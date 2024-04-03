import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
      <div className="fixed inset-x-0 bottom-0">  
        <Navigation />
      </div>
    </>
  );
}

export default App;
