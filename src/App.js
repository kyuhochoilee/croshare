import Home from "./components/Home";
import Account from "./components/account/Account";
import FriendFeed from "./components/friend feed/FriendFeed";
import Pattern from "./components/Pattern";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendPostSelected from "./components/friend feed/FriendPostSelected";

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
          <Route path="/friendpost" element={<FriendPostSelected />} />
          <Route path="/pattern" element={<Pattern />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
