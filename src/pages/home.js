import React, { Component } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Post from '../components/Post';
import Profile from '../components/Profile';

export class Home extends Component {
  state = {
    posts: null,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    let recentPostsMarkup = this.state.posts ? (
      this.state.posts.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <Grid container spacing={10}>
          <Grid item sm={8} xs={12}>
            {recentPostsMarkup}
          </Grid>
          <Grid item sm={4} xs={12}>
            <Profile />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
