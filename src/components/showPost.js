import React, { Component } from 'react';
import {connect} from 'react-redux';

class ShowPost extends Component {
  handleDelete = (id) =>{
    this.props.deletePost(id);
    this.props.history.push('/');
  }
  render(){
    let post = this.props.post;
    return(
      <div>
        <div className="border border-2 my-3 p-2 shadow rounded">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button className="btn btn-danger clear-fix" onClick={this.handleDelete.bind(this, post.id)}>DELETE</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) =>{
  let id = ownProps.match.params.id;
  return {
    post: state.posts.find( post => post.id === id )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    deletePost: (id)=> {dispatch({type: 'DELETE', id: id})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)
