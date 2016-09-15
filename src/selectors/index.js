import {createSelector} from 'reselect'

const getFeatures = (state) => state.get('features');
const getShowSelectedFilter = (state) => state.get('showselectedfeatures');

export const getVisibleFeatures = createSelector(
    [getFeatures, getShowSelectedFilter],
    (features, showselectedfeatures) =>{
        return showselectedfeatures 
        ? features.filter(f=> f.selected === true)
        : features;
    }   
)