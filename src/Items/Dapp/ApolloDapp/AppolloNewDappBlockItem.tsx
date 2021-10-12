import React, {FC, ReactElement} from 'react';
import { DappI } from '..';
import { AthenaButton } from '../../../Components/Buttons';
import { DesktopSizes } from '../../../Theme';
import { Colors } from '../../../Theme';
import {generate} from "shortid";

export type AppolloNewDappBlockItemProps = {
    style? : React.CSSProperties,
    key? : React.Key
}

export const AppolloNewDappBlockItem : FC<AppolloNewDappBlockItemProps>  = ({
    style
}) =>{

    return (

        <div 
        key={`new-item-${generate()}`}
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
            gridTemplateRows : "1fr"
        }}>
            <AthenaButton primaryColor={Colors.mainTheme} secondaryColor="white"
            label="Create dapp +"
            style={{
                height : "100%",
                width : "100%"
            }}/>
    </div>

    )

}