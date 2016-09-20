export const ADD_DUMMY_FEATURE = 'add-dummy-feature';
export const ADD_DUMMY_PRODUCT = 'add-dummy-product';
export const SELECT_FEATURE = 'select-feature';
export const SHOW_SELECTED = 'show-selected';
export const LOAD_FROM_STORED_STATE = 'load-from-local-store';
export const RESET_STATE = 'reset-state';
export const SET_CURRENT_PAGE = 'set-current-page';
export const SET_FORENAME ='set-forename';

export function addDummyFeature(){
    return {
        type: ADD_DUMMY_FEATURE
    }
}

export function addDummyProduct(){
    return {
        type: ADD_DUMMY_PRODUCT
    }
}

export function onFeatureSelected(id){
    return {
        type: SELECT_FEATURE,
        id: id
    }
}

export function onShowSelected(){
    return {
        type: SHOW_SELECTED
    }
}

export function loadFromLocalStore(newState){
    return {
        type: LOAD_FROM_STORED_STATE,
        newState: newState
    }
}

export function onForenameChange(forename){
    return {
        type: SET_FORENAME,
        forename: forename
    }
}

export function setCurrentPage(page){
    return {
        type: SET_CURRENT_PAGE,
        page: page
    }
}
export function resetState(){
    return {
        type: RESET_STATE
    }
}