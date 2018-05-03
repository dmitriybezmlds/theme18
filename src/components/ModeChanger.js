import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModeChanger extends Component { 
  
  render() { 
   let displayBlockClass, displayListClass;
    if (this.props.modeDisplay === 'block') {
      displayBlockClass = 'block-mode material-icons icon-display2';
      displayListClass = 'material-icons icon-display1';
    } else {
      displayBlockClass = 'material-icons icon-display2';
      displayListClass = 'list-mode material-icons icon-display1';
    }
    
    return ( 
      <div className="top-block__type-display">
        <i onClick={this.props.onChangeModeDisplayBlock} className={displayBlockClass}>apps</i>
        <i onClick={this.props.onChangeModeDisplayList} className={displayListClass}>menu</i>       
      </div>
     )
  }
}
 
export default connect(
  state => ({
    modeDisplay: state.modeDisplay,
  }),
  dispatch => ({
    onChangeModeDisplayBlock: () => {
      dispatch({ type: 'CHANGE_MODE_DISPLAY', mode: 'block'})
    },
    onChangeModeDisplayList: () => {
      dispatch({ type: 'CHANGE_MODE_DISPLAY', mode: 'list'})
    }
  })    
)(ModeChanger);