import Home from "./components/Home";
import Account from "./components/Account";
import FriendFeed from "./components/FriendFeed";
import Pattern from "./components/Pattern";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/account"
            element={
              <Account profilePic={"/quinnpfp.jpg"} username={"quinnliu"} />
            }
          />
          <Route path="/friendfeed" element={<FriendFeed />} />
          <Route path="/pattern" element={<Pattern />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
