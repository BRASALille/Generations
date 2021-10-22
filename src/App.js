import React from 'react';

import GTree from './GTree.js';
import Edit from './Edit.js';

const defTree = {
  name: '?',
  children: [
    {
      name: 'Leogado',
      children: [
        {
          name: 'Dedinho',
          children: [
            {
              name: 'Andreis',
            },
            {
              name: 'Agostini',
            },
          ],
        },
        {
          name: 'Rabelo',
          children: [
            {
              name: '?',
            },
          ],
        },
      ],
    },
  ],
};

export default function App(){
  const [tree, setTree] = React.useState(defTree);
  return(
    <div style={{ width: '100vw', height: '100vh' }}>
      <Edit />
      <GTree tree={tree}/>
    </div>
  )
}
