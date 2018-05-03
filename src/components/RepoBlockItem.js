import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

class RepoBlockItem extends Component { 
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
    if(this.props.item.inMyList) {
      button = <RaisedButton 
        data-id={this.props.item.id} 
        onClick={this.removeRepFromMyList.bind(this)} 
        className="btn btn__remove" 
        backgroundColor="#EB5757" 
        label="Remove from list" 
        labelColor="#fff" 
        />;
    } else {
      button = <RaisedButton 
        data-id={this.props.item.id} 
        onClick={this.addRepInMyList.bind(this)} 
        className="btn btn__add" 
        backgroundColor="#0366D6" 
        label="Add to List" 
        labelColor="#fff" 
        />
    }
    return ( 
      <div data-id={this.props.item.id} className="repo-block">
        <div>
          <div className="repo-block__top">
            <div className="repo-block__lang">{this.props.item.language}</div>
            <div className="repo-block__stars">
              <i className="material-icons icon-star">star</i>{this.props.item.stars}
            </div>
          </div>
          <div className="repo-block__info">
            <a href={this.props.item.url} className="repo__name">{this.props.item.name}</a>
            <div className="repo__text">{this.props.item.text}</div>
            <div className="repo__langs">
              <div className="repo__type">{this.props.item.language}</div>
              <div className="repo__type">{this.props.item.request}</div>
            </div>
          </div>
        </div>
        {button}
        
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
 )(RepoBlockItem);

