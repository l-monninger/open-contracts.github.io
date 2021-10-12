import React, {FC, ReactElement, useState} from 'react';
import { Colors, DesktopSizes } from '../../../Theme';
import { DappI } from '../Dapp';

export type ApolloDappBlockItemProps = {
    dappItem : DappI
    style? : React.CSSProperties,
    key? : React.Key
}

export const ApolloDappBlockItem : FC<ApolloDappBlockItemProps>  = ({
    dappItem,
    style
}) =>{

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = ()=>{
        setHovered(true);
    }

    const handleMouseLeave = ()=>{
        setHovered(false);
    }

    return (

        <div 
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
            key={dappItem.hash}
            className="shadow-sm"
            style={{
                borderRadius : DesktopSizes.BorderRadiues.standard,
                border : `1px solid ${Colors.mainTheme}`,
                display : "grid",
                padding : DesktopSizes.Padding.whitespacePreferred,
                alignContent : "center",
                alignItems : "center",
                width : "100%",
                height : "300px",
                gridTemplateRows : "2fr 1fr 1fr",
                cursor : "pointer",
                background : hovered ? Colors.mainTheme : "inherit",
                color : hovered ? "white" : Colors.mainTheme,
                ...style
            }}>
                <div style={{
                    height : "100%",
                    width : "100%"
                }}>
                    <img height={"160px"} src={dappItem.iconUrl} style={{
                        borderRadius: DesktopSizes.BorderRadiues.standard
                    }}/>
                </div>
                <div>
                    <br/>
                    <span style={{
                         color : hovered ? "white" : Colors.mainTheme,
                    }}>{dappItem.name}</span>
                    <br/>
                    <span style={{
                        fontSize: "10px",
                        color : hovered ? "white" : Colors.tertiaryTextColor,
                    }}>by <a href="">{dappItem.creator}</a></span>
                </div>
        </div>

    )

}