import React, {FC, ReactElement} from 'react';
import { Colors, DesktopSizes } from '../../Theme';
import {File} from "react-bootstrap-icons";

export type LogoAProps = {
    main? : string,
    post? : string,
    size? : React.CSSProperties["height"]
}

export const LogoA : FC<LogoAProps>  = ({
    main = "opencontracts.io",
    post,
    size = "30px",
}) =>{

    return (

        <div style={{
            color : Colors.mainTheme,
            fontSize : size
        }}>
            <File size={size}/>&ensp;<span style={{
                color : Colors.mainTheme
            }}>{main}</span><span style={{
                color: Colors.tertiaryTextColor
            }}>{post}</span>
        </div>
    )

}