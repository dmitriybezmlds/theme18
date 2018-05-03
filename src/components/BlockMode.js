import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoBlockItem from './RepoBlockItem';

class BlockMode extends Component {
  
  render() { 

    return ( 
     
      <div className="repos-block">
        {this.props.list.map((item, index) => 
          <RepoBlockItem key={index} item={item}/>
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
)(BlockMode);

