import React from 'react';

export default function FeatureItem({id,text,selected, onFeatureSelected}) {
  var selectedText = selected ? 'selected' :'not';
  return (
    
    <div>
    <input type='checkbox' checked={selected} onClick={onFeatureSelected.bind(this,id)}/>
    <span onClick={onFeatureSelected.bind(this,id)}>{text}</span>
    
    <button onClick={onFeatureSelected.bind(this,id)}>
      Select
    </button>
    </div>
  );
}
