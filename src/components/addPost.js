import React, { Component } from 'react';
import {connect} from 'react-redux';
class AddPost extends Component {
  state = {
    id: Math.random().toString().slice(2,8),
    title: '',
    body: ''
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addpost(this.state);
    let post_id = this.state.id;
    this.setState({
      id: Math.random().toString().slice(2,8),
      title: '',
      body: ''
    });
    this.props.history.push(`/posts/${post_id}`)
  }
  render(){
    console.log(this.props);
    return(
      <div>
        <h1>ADD POST</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group m-1">
            <label>title: </label>
            <input type="text" className="form-control" required name="title" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div className="form-group m-1">
            <label>post: </label>
            <textarea type="text" className="form-control" required name="body" value={this.state.price} onChange={this.handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary d-block mx-auto my-4 px-5">ADD</button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addpost: (post)=> {dispatch({type: 'ADD', post: post})}
  }
}

export default connect(null, mapDispatchToProps)(AddPost)
