import { 
  NEW_RESPONSE, 
  ADD_REP_IN_MYLIST, 
  REMOVE_REP_FROM_MYLIST, 
  CHANGE_MODE_DISPLAY,
  CHANGE_SEARCH_LANG,
  CHANGE_SEARCH_TEXT,
  CHANGE_SEARCH_TYPE, 
  CHANGE_STATUS_IN_LIST,
  CHANGE_FETCHING,
} from '../actions/actions';

const initialState = {
  repList: [
    
  ],
  myList: [
    
  ],
  modeDisplay: 'block',
  searchType: '',
  searchLang: '',
  searchText: '',
  isFetching: false,
};

export default function githubApp(state = initialState, action) {
  switch (action.type) {
    case NEW_RESPONSE:
      return Object.assign({}, state, {
        repList: action.repList,
        isFetching: false,
      });
    case CHANGE_FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ADD_REP_IN_MYLIST:
      return Object.assign({}, state, {
        myList: [
          ...state.myList,{
            id: action.newRepository.id,
            url: action.newRepository.url,
            name: action.newRepository.name,
            language: action.newRepository.language,
            text: action.newRepository.text,
            request: action.newRepository.request,
            stars: action.newRepository.stars,
            inMyList: true,
          }
        ],
        
      });
    case REMOVE_REP_FROM_MYLIST:
      return Object.assign({}, state, {
        myList: state.myList.filter((rep) => {
          return rep.id !== action.repId;
        })
      });
    case CHANGE_MODE_DISPLAY:
      return Object.assign({}, state, {
        modeDisplay: action.mode,
      });
    case CHANGE_SEARCH_LANG:
      return Object.assign({}, state, {
        searchLang: action.searchLang,
      });
    case CHANGE_SEARCH_TEXT:
      return Object.assign({}, state, {
        searchText: action.searchText,
      });
    case CHANGE_SEARCH_TYPE:
      return Object.assign({}, state, {
        searchType: action.searchType,
      });
    case CHANGE_STATUS_IN_LIST:
      return Object.assign({}, state, {
        repList: state.repList.map((elem) => {
          if(elem.id === action.repId) {
            return Object.assign({}, elem, {
              inMyList: !elem.inMyList
            })
          } else {
            return elem;
          }
        })
      });
    default:
      return state;
  }
}
