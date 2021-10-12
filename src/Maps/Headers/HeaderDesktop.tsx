import React, {FC, ReactElement} from 'react';
import { LogoA } from '../../Glitter';
import {HeaderLayoutDesktop} from "../../Layouts";
import { ArchimedesNav } from '../../Components/Navs';
import { AbleAccountToggle } from '../../Components/AccountToggles';
import { PersonFill } from 'react-bootstrap-icons';
import { Colors } from '../../Theme';

export type HeaderDesktopProps = {}

export const HeaderDesktop : FC<HeaderDesktopProps>  = () =>{

    console.log("In header desktop");

    return (

        <HeaderLayoutDesktop>
            <HeaderLayoutDesktop.Brand>
                <div style={{
                    height : "100%",
                    display : "grid",
                    alignItems : "center",
                    alignContent : 'center',
                    justifyItems : "left",
                    justifyContent : "left"
                }}>
                    <LogoA size={"30px"} main="oc" post="/p"/>
                </div>
            </HeaderLayoutDesktop.Brand>
            <HeaderLayoutDesktop.Nav>
                <div style={{
                    height : "100%",
                    width : "100%",
                    alignItems : "center",
                    alignContent : "center",
                    display : "grid"
                }}>
                    <ArchimedesNav nodeStyle={{
                        fontSize : "24px"
                    }}
                    
                    itemNames={[
                        "market", "white paper", "docs"
                    ]} />
                </div>
            </HeaderLayoutDesktop.Nav>
            <HeaderLayoutDesktop.Account>
                <div style={{
                    height : "100%",
                    width : "100%",
                    display : "grid",
                    alignItems : "center",
                    alignContent : "center",
                    justifyContent : "right",
                    justifyItems : "right"
                }}>
                    <AbleAccountToggle>
                        <AbleAccountToggle.ToggleIcon>
                            <PersonFill size="100%" color={Colors.mainTheme}/>
                        </AbleAccountToggle.ToggleIcon>
                    </AbleAccountToggle>
                </div>
            </HeaderLayoutDesktop.Account>
        </HeaderLayoutDesktop>

    )

}