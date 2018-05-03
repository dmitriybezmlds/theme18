import React, { Component } from 'react';
import { connect } from 'react-redux';

class RepoListItem extends Component { 
  addRepInMyList() {
    const newRepo = {
      id: this.props.item.id,
      url: this.props.item.url,
      name: this.props.item.name,
      language: this.props.item.language,
      text: this.props.item.text,
      request: this.props.item.request,
      stars: this.props.item.stars,
    }
    this.props.onAddRepInMyList(newRepo);
    this.props.onChangeStatusInList(this.props.item.id);
  }
  removeRepFromMyList() {
    this.props.onRemoveRepFromMyList(this.props.item.id);
    this.props.onChangeStatusInList(this.props.item.id);
  }
  render() { 
    let button;
    if(!this.props.item.inMyList) {
      button = <div 
      data-id={this.props.item.id} 
      className="add-btn" 
      onClick={this.addRepInMyList.bind(this)} >
      </div>;
    } else {
      button = <div data-id={this.props.item.id} className="add-btn" onClick={this.removeRepFromMyList.bind(this)} >
      <div className="add-btn__check"></div>
      </div>
      ;
    }
    return ( 
      <div className="repo">
        <div className="repo__left">
          {button}
          <div className="repo__info">
            <div className="repo__name">{this.props.item.name}</div>
            <div className="repo__text">{this.props.item.text}</div>
            <div className="repo__langs">
              <div className="repo__type">{this.props.item.language}</div>
              <div className="repo__type">{this.props.item.request}</div>
            </div>
          </div>
        </div>
        <div className="repo__right">
          <div className="repo__stars"><i className="material-icons icon-star">star</i>{this.props.item.stars}</div>
          <div className="repo__lang">{this.props.item.language}</div>
        </div> 
      </div>
      )
   }
 }
  
export default connect(
  state => ({
    repList: state.repList,
    myList: state.myList,
  }),
  dispatch => ({
    onAddRepInMyList: (newRepo) => {
      dispatch({ type: 'ADD_REP_IN_MYLIST', newRepository: newRepo})
    },
    onRemoveRepFromMyList: (repId) => {
      dispatch({ type: 'REMOVE_REP_FROM_MYLIST', repId: repId})
    },
    onChangeStatusInList: (repId) => {
      dispatch({ type: 'CHANGE_STATUS_IN_LIST', repId: repId})
    }
  })    
 )(RepoListItem);

