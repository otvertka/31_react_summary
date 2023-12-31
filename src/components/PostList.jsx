import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Jeka" body="React is awesome!" />
        <Post author="Yevhen" body="JS is amazing!" />
      </ul>
    </>
  );
}

export default PostList;
