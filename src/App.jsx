import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/postList-store";

function App() {
  const [selectedTab, setSelectTab] = useState("Create Post");

  return (
    <PostListProvider>
    <div className="comp-cont">
      <SideBar selectedTab={selectedTab} setSelectTab={setSelectTab}></SideBar>
      <div className="sub-cont">
        <Header></Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}

        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
