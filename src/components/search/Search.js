import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux'

import RepoBlockItem from '../RepoBlockItem';
import ErrorResult from './ErrorResult';
import ModeChanger from '../ModeChanger';

class Search extends Component {

  render() {
    let errorPage, modeChanger;
    let classMode;
    if(!this.props.list.length) {
      errorPage = <ErrorResult />;
      modeChanger = null;
    } else {
      modeChanger = <ModeChanger />;
      errorPage = null;
    }
    
    let loader ='';
    if(this.props.isFetching) {
      loader = <i className="fas fa-circle-notch fa-spin preloader"></i>;
    } else {
      loader = '';
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
            <SearchForm />
          </div>
          {modeChanger}
        </div>
        <section className="content">
          {loader}       
          {errorPage}
          <div className={classMode}>
            {this.props.list.map((item, index) => 
              <RepoBlockItem  key={index} item={item}/>
            )}
          </div>
        </section>
      </main>
    );
  }
}
export default connect(
  state => ({
    isFetching: state.isFetching,
    list: state.repList,
   
    modeDisplay: state.modeDisplay,
  }),
  dispatch => ({
    
  })    
)(Search);

