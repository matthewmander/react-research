export const LOAD_INITIAL_DATA = 'load-initial-data';
export const SELECT_FEATURE = 'select-feature';
export const SHOW_SELECTED = 'show-selected';
export const LOAD_FROM_STORED_STATE = 'load-from-local-store';
export const RESET_STATE = 'reset-state';

export function loadInitialData(){
    return {
        type: LOAD_INITIAL_DATA
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

export function resetState(){
    return {
        type: RESET_STATE
    }
}