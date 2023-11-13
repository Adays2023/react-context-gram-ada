import { NavHeader } from "./components/navbar";
import { Post } from "./components/post";
import "./App.css";
import UserState from "./context/user/UserState";
import FeedState from "./context/feed/FeedState";

function App() {
  return (
    <>
      <UserState>
        <NavHeader />
        <FeedState>
          <Post></Post>
        </FeedState>
      </UserState>
    </>
  );
}

export default App;
