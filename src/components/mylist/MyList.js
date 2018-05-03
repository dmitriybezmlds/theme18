import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlockMode from '../BlockMode';
import ListMode from '../ListMode';
import EpmtyList from './EpmtyList'
import ModeChanger from '../ModeChanger';

class MyList extends Component {
 
  render() { 
    let blockMode, listMode, modeChanger, emptyList;
    if(!this.props.myList.length) {
      emptyList = <EpmtyList />
      modeChanger = null;
    } else {
      modeChanger = <ModeChanger />;
      emptyList = null;
    }
    
    if (this.props.modeDisplay === 'block') {
      blockMode = <BlockMode list={this.props.myList}/>;
      listMode = '';
    } else {
      listMode = <ListMode list={this.props.myList}/>;
      blockMode = '';
    }
   
    return ( 
      <main className="main">
        <div className="top-block">
          <div className="top-block__header">
            <h2 className="top-block__page-name">My List</h2>
          </div>
          {modeChanger}
        </div>
        <section className="content" >
          {emptyList}
          {blockMode}
          {listMode}
        </section>
      </main>
     )
  }
}


export default connect(
  state => ({
    myList: state.myList,
    modeDisplay: state.modeDisplay,
  }),
  dispatch => ({
   
  })    
)(MyList);

