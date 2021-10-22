import React from 'react';
import Tree from 'react-d3-tree';
import { useTheme } from '@material-ui/core/styles';


  

  export default function GTree(props){
    const theme = useTheme();
    // const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    //   <g>
    //     <circle r="10" style={{fill:theme.palette.primary.disabled}} onClick={toggleNode} />
    //     <text fill="black" strokeWidth="0" x="20" y="5">
    //       {nodeDatum.name}
    //     </text>
    //   </g>
    // );
    // renderCustomNodeElement={renderRectSvgNode}
    return(
        <Tree data={props.tree} pathFunc="step"  orientation="vertical"/>
    )
  }
  