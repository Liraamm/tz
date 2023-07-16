import React, { useEffect } from "react";
import { usePostContext } from "../contexts/MainContext";

const PostsList = () => {
  const { posts, getPost } = usePostContext();
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      {" "}
      <Typography sx={{ my: 3 }} variant="h3" component="h3">
        Posts
      </Typography>
      <Grid sx={{ my: 3 }} container spacing={2}>
        {contacts.length > 0 ? (
          contacts.map((item) => <ContactItem item={item} key={item.id} />)
        ) : (
          <Container>
            <CircularProgress />
          </Container>
        )}
      </Grid>
    </div>
  );
};

export default PostsList;
