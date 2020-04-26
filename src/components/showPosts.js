import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class showPosts extends Component {
  handleDelete = (id) =>{
    this.props.deletePost(id)
  }
  render(){
    let postsList = this.props.posts.map((post)=>{
      return (
        <div className="border border-2 my-3 p-2 shadow rounded" key={post.id}>
          <NavLink exact to={'/posts/' + post.id} className="text-primary"><h2>{post.title}</h2></NavLink>
          <p>{post.body.length > 70 ? post.body.slice(0, 70) + '...' : post.body}</p>
          <button className="btn btn-danger clear-fix" onClick={this.handleDelete.bind(this, post.id)}>DELETE</button>
        </div>
      )
    });
    return(
      <div>
        <h1>Posts</h1>
        {postsList.length ? postsList : <div>there is no posts</div>}
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    deletePost: (id)=> {dispatch({type: 'DELETE', id: id})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(showPosts)
