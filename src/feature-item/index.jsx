import React from 'react';

export default function FeatureItem({id,text,selected, onFeatureSelected}) {
  var selectedText = selected ? 'selected' :'not';
  return (
    <li>
    {/*<span>{text} - {id} - {selectedText}</span>*/}
    <input type='checkbox' checked={selected} onClick={onFeatureSelected.bind(this,id)}/>
    <span onClick={onFeatureSelected.bind(this,id)}>{text}</span>
    
    <button onClick={onFeatureSelected.bind(this,id)}>
      Select
    </button>
    </li>
  );
}
