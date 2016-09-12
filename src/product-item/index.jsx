import React from 'react';

export default function ProductItem({text, id}) {
  return (
    <li>{text} - {id}</li>
  );
}
