import {createSelector} from 'reselect'

const getFeatures = (state) => state.features.get('features');
const getShowSelectedFilter = (state) => state.features.get('showselectedfeatures');

export const getVisibleFeatures = createSelector(
    [getFeatures, getShowSelectedFilter],
    (features, showselectedfeatures) =>{
        return showselectedfeatures 
        ? features.filter(f=> f.selected === true)
        : features;
    }   
)