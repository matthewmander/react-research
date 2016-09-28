export const ADD_DUMMY_FEATURE = 'add-dummy-feature';
export const ADD_DUMMY_PRODUCT = 'add-dummy-product';
export const SELECT_FEATURE = 'select-feature';
export const SHOW_SELECTED = 'show-selected';
export const LOAD_FROM_STORED_STATE = 'load-from-local-store';
export const RESET_STATE = 'reset-state';
export const SET_CURRENT_PAGE = 'set-current-page';
export const SET_FORENAME ='set-forename';
export const SET_SURNAME = 'set-surname';
export const SET_GRAPH_DATA_1 = 'set-graph-data-1';
export const SET_GRAPH_DATA_2 = 'set-graph-data-2';

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

export function onForenameChange(text){
    return {
        type: SET_FORENAME,
        forename: text
    }
}

export function onSurnameChange(text){
    return {
        type: SET_SURNAME,
        text: text
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

export function setGraphData1(){
    return {
        type: SET_GRAPH_DATA_1
    }
}

export function setGraphData2(){
    return {
        type: SET_GRAPH_DATA_2
    }
}

