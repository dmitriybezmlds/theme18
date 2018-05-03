export const NEW_RESPONSE = 'NEW_RESPONSE';
export const ADD_REP_IN_MYLIST = 'ADD_REP_IN_MYLIST';
export const REMOVE_REP_FROM_MYLIST = 'REMOVE_REP_FROM_MYLIST';
export const CHANGE_MODE_DISPLAY = 'CHANGE_MODE_DISPLAY';
export const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE';
export const CHANGE_SEARCH_LANG = 'CHANGE_SEARCH_LANG';
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
export const CHANGE_STATUS_IN_LIST = 'CHANGE_STATUS_IN_LIST';
export const CHANGE_FETCHING = 'CHANGE_FETCHING';

export function newResponse(newListRepos) {
  return {
    type: NEW_RESPONSE,
    newListRepos,
  };
}
export function addRepInMyLIst(repId) {
  return {
    type: ADD_REP_IN_MYLIST,
    repId,
  };
}
export function removeRepFromMyLIst(repId) {
  return {
    type: REMOVE_REP_FROM_MYLIST,
    repId,
  };
}
export function changeModeDisplay(mode) {
  return {
    type: REMOVE_REP_FROM_MYLIST,
    mode,
  };
}
export function changeSearchType(searchType) {
  return {
    type: CHANGE_SEARCH_TYPE,
    searchType,
  };
}
export function changeSearchLang(searchLang) {
  return {
    type: CHANGE_SEARCH_LANG,
    searchLang,
  };
}
export function changeSearchText(searchText) {
  return {
    type: CHANGE_SEARCH_TEXT,
    searchText,
  };
}
export function changeStatusInList(repId) {
  return {
    type: CHANGE_STATUS_IN_LIST,
    repId,
  };
}
export function changeFetching() {
  return {
    type: CHANGE_FETCHING,
  };
}