import FeedContext from "../../context/feed/FeedContext";
import { useContext } from "react";

export const Post = () => {
  const {showPost} = useContext(FeedContext);
  return (
    <div key={`POST-1`}>
      {showPost()}
    </div>
  );
};