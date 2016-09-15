export const LOAD_INITIAL_DATA = 'load-initial-data';
export const SELECT_FEATURE = 'select-feature';
export const SHOW_SELECTED = 'show-selected';

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