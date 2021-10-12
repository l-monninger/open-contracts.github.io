import React, {FC, ReactElement} from 'react';
import { useState } from 'react';
import { Colors, DesktopSizes } from '../../../Theme';

export type ArchimedesNavNodeProps = {
    itemName : string,
    selected : boolean,
    onSelect : (item : string)=>void,
    size? : React.CSSProperties["height"],
    style? : React.CSSProperties,
    key? : React.Key
}

export const ArchimedesNavNode : FC<ArchimedesNavNodeProps>  = ({
    itemName,
    selected,
    onSelect,
    size,
    style
}) =>{

    const [hovered, setHovered]  = useState(false);

    const handleMouseEnter = ()=>{
        setHovered(true);
    }

    const handleMouseLeave = ()=>{
        setHovered(false);
    }

    const handleSelected = ()=>{
        onSelect(itemName);
    }

    return (

        <span 
        key={itemName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSelected}
        style={{
            color : selected ? Colors.primaryTextColor : Colors.tertiaryTextColor,
            textDecoration : hovered ? "underline" : "none",
            fontSize : size,
            cursor : "pointer",
            padding : DesktopSizes.Padding.standard,
            ...style
        }}>
            {itemName}
        </span>

    )

}