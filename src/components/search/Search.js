import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux'
import BlockMode from '../BlockMode';
import ListMode from '../ListMode';
import ErrorResult from './ErrorResult';
import ModeChanger from '../ModeChanger';

class Search extends Component {

  render() {
    let blockMode, listMode, errorPage, modeChanger;
    if(!this.props.repList.length) {
      errorPage = <ErrorResult />;
      modeChanger = null;
    } else {
      modeChanger = <ModeChanger />;
      errorPage = null;
    }
    
    if (this.props.modeDisplay === 'block') {
      blockMode = <BlockMode list={this.props.repList}/>;
      listMode = '';
    } else {
      listMode = <ListMode list={this.props.repList}/>;
      blockMode = '';
    }

    let loader ='';
    if(this.props.isFetching) {
      loader = <i className="fas fa-circle-notch fa-spin preloader"></i>;
    } else {
      loader = '';
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
          {blockMode}
          {listMode}
        </section>
      </main>
    );
  }
}
export default connect(
  state => ({
    isFetching: state.isFetching,
    repList: state.repList,
    modeDisplay: state.modeDisplay,
  }),
  dispatch => ({
    
  })    
)(Search);

