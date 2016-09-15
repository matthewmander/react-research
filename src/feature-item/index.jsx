import React from 'react';

export default function FeatureItem({id,text,selected, onFeatureSelected}) {
  var selectedText = selected ? 'selected' :'not';
  var className = selected ? 'selected' : 'unselected';
  return (
    
    <div className={className}>
    {/*<input type='checkbox' checked={selected} onClick={onFeatureSelected.bind(this,id)}/>*/}
    <span onClick={onFeatureSelected.bind(this,id)}>{text}</span>
    
    </div>
  );
}
