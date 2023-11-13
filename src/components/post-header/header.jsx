import { useContext } from "react";
import { CardHeader, CardImg } from "react-bootstrap";
import UserContext from "../../context/user/UserContext";
export const PostHeader = () => {
  const { username } = useContext(UserContext).currentUser;

  return (
    <CardHeader>
      <CardImg
        src="https://discourse.disneyheroesgame.com/uploads/default/original/3X/e/8/e8b4cd21287dfa781e1cd50caac05b8bd4baf4e1.png"
        className="post-avatar rounded-3"
        style={{ width: "80px" }}
      ></CardImg>
      <strong>{username}</strong>
    </CardHeader>
  );
};