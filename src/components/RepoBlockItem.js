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
    let classMode;
    let buttonBlock, buttonList, block;
    if(this.props.item.inMyList) {
      buttonBlock = <RaisedButton 
        data-id={this.props.item.id} 
        onClick={this.removeRepFromMyList.bind(this)} 
        className="btn btn__remove" 
        backgroundColor="#EB5757" 
        label="Remove from list" 
        labelColor="#fff" 
        />;
      buttonList = <div data-id={this.props.item.id} className="add-btn" onClick={this.removeRepFromMyList.bind(this)} >
        <div className="add-btn__check"></div>
        </div>;
    } else {
      buttonBlock = <RaisedButton 
        data-id={this.props.item.id} 
        onClick={this.addRepInMyList.bind(this)} 
        className="btn btn__add" 
        backgroundColor="#0366D6" 
        label="Add to List" 
        labelColor="#fff" 
        />;
      buttonList = <div 
        data-id={this.props.item.id} 
        className="add-btn" 
        onClick={this.addRepInMyList.bind(this)} >
        </div>;  
    }
    if (this.props.modeDisplay === "list") {
      classMode = '';
      block = 
      <div className="repo">
        <div className="repo__left">
          {buttonList}
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
       
    </div>;
    } else if (this.props.modeDisplay === "block") {
      classMode = 'repository-item ';
      block = 
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
      {buttonBlock}
      
    </div> 
    }
    return ( 
      <div className={classMode}>
        {block}       
      </div>
      
      )
   }
 }
  
export default connect(
  state => ({
    repList: state.repList,
    myList: state.myList,
    modeDisplay: state.modeDisplay,
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

