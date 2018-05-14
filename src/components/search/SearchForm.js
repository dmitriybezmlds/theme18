import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { connect } from 'react-redux'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     
    }
  }
  
  handleChangeType = (event, index, value) => 
  this.props.onChangeType(value);
  handleChangeLang = (event, index, value) => 
  this.props.onChangeLang(value);
  handleChangeText = event => 
  this.props.onChangeText(event.target.value);

  searchRequest() {
    this.props.onChangeFetching();
    if(this.props.searchType && this.props.searchText && this.props.searchLang && !this.props.isFetching) {
      
      fetch(`https://api.github.com/search/${this.props.searchType}?q=${this.props.searchText}+language:${this.props.searchLang}&sort=stars&order=desc`)
        .then((response) => response.json())
        .then( (data) => {
          let dataResponse = [];
          for (let d = 0; d < data.items.length; d++) {
            dataResponse.push({ 
              id: data.items[d].id,
              url: data.items[d].html_url,
              name: data.items[d].full_name,
              language: data.items[d].language,
              text: data.items[d].description,
              request: this.props.searchText,
              stars: data.items[d].watchers,
              inMyList: false,
            })
          }
          // проверка наличия репозиториев в моем листе
          if (this.props.myList.length) {
            dataResponse.forEach(element => {
              this.props.myList.forEach(elem => {
                if (element.id === elem.id) {
                  element.inMyList = true;
                }
              });
            });
          }
          this.props.onSearchRequest(dataResponse);
        })
        .catch( alert );
      }
  }
  render() {
    
    return (
      <div className="search-block">
        <SelectField
          floatingLabelText="Type"
          value={this.props.searchType}
          onChange={this.handleChangeType}
        >
          <MenuItem value="repositories" primaryText="Repositories" />
          <MenuItem value="commits" primaryText="Commits" />
          <MenuItem value="code" primaryText="Issues" />
          <MenuItem value="users" primaryText="Users" />
          <MenuItem value="topics" primaryText="Topics" />
        </SelectField>
        <SelectField
          floatingLabelText="Language"
          value={this.props.searchLang}
          onChange={this.handleChangeLang}
        >
          <MenuItem value="javascript" primaryText="JavaScript" />
          <MenuItem value="css" primaryText="CSS" />
          <MenuItem value="html" primaryText="HTML" />
          <MenuItem value="php" primaryText="PHP" />
          <MenuItem value="c++" primaryText="C++" />
          <MenuItem value="python" primaryText="Python" />
          <MenuItem value="c#" primaryText="C#" />
          <MenuItem value="java" primaryText="Java" />
          <MenuItem value="go" primaryText="GO" />
          <MenuItem value="haskel" primaryText="Haskel" />
        </SelectField>
        <TextField
          hintText="Enter text.."
          floatingLabelText="Request text"
          onChange={this.handleChangeText}
          value={this.props.searchText}
        />
        <RaisedButton onClick={this.searchRequest.bind(this)} className="btn btn__search" backgroundColor="#0366D6" label="Search" labelColor="#fff" />
      </div>
    );
  }
}

export default connect(
  state => ({  
    searchType: state.searchType,
    searchLang: state.searchLang,
    searchText: state.searchText,
    repList: state.repList,
    myList: state.myList,
    isFetching: state.isFetching,
  }),
  dispatch => ({
    onChangeFetching: () => {
      dispatch({ type: 'CHANGE_FETCHING'})
    },
    onChangeType: (type) => {
      dispatch({ type: 'CHANGE_SEARCH_TYPE', searchType: type })
    },
    onChangeText: (text) => {
      dispatch({ type: 'CHANGE_SEARCH_TEXT', searchText: text })
    },
    onChangeLang: (lang) => {
      dispatch({ type: 'CHANGE_SEARCH_LANG', searchLang: lang })
    },
    onSearchRequest: (response) => {
      dispatch({ type: 'NEW_RESPONSE', repList: response })
    }
  })    
)(SearchForm);

