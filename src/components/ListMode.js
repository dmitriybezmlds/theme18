import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoListItem from './RepoListItem';

class ListMode extends Component {
  
  render() { 

    return ( 
     
      <div className="repos-list">
        {this.props.list.map((item, index) => 
          <RepoListItem key={index} item={item}/>
        )}
      </div>
          
     )
  }
}


export default connect(
  state => ({
   
  }),
  dispatch => ({
    
  })    
)(ListMode);
