import Home from "./components/Home";
import Account from "./components/Account";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element = {<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
