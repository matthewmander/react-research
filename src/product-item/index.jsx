import React from 'react';

export default function ProductItem({text, id}) {
  return (
    <span key='{id}'>{text} - {id}</span>
  );
}
