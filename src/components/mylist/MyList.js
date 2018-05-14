import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoBlockItem from '../RepoBlockItem';
import EpmtyList from './EpmtyList'
import ModeChanger from '../ModeChanger';

class MyList extends Component {
 
  render() { 
    let modeChanger, emptyList;
    let classMode;
    if(!this.props.list.length) {
      emptyList = <EpmtyList />
      modeChanger = null;
    } else {
      modeChanger = <ModeChanger />;
      emptyList = null;
    }
    if (this.props.modeDisplay === "list") {
      classMode = 'repos-list';
    } else if (this.props.modeDisplay === "block") {
      classMode = 'repos-block';
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
          <div className={classMode}>
            {this.props.list.map((item, index) => 
              <RepoBlockItem  key={index} item={item}/>
            )}
          </div>
        </section>
      </main>
     )
  }
}


export default connect(
  state => ({
    list: state.myList,

    modeDisplay: state.modeDisplay,
  }),
  dispatch => ({
   
  })    
)(MyList);

