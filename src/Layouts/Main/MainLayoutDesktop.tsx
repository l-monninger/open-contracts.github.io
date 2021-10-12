import React, {FC, ReactElement} from 'react';
import { DesktopSizes } from '../../Theme';
import { generateNamedMember, getComponentMembers } from 'rgfm';

const Members = ["Header", "Content", "Footer"]

export type MainLayoutDesktopProps = {}

const MainLayoutDesktop : FC<MainLayoutDesktopProps>  & {
    Header : FC,
    Content : FC, 
    Footer : FC
} = ({
    children
}) =>{

    const {
        Header,
        Content,
        Footer
    } = getComponentMembers(Members, children);

    return (

        <div style={{
            height : "100vh",
            width : "100vw",
            display : "grid",
            justifyContent : "center",
            justifyItems : "center"
        }}>
            <div style={{
                width : DesktopSizes.Main.contentWidth,
                height : "100vh",
                display : "grid",
                gridTemplateColumns : "1fr",
                gridTemplateRows : "4fr 16fr 1fr",
            }}>
                <div style={{
                    height : "100%",
                    width : "100%"
                }}>
                    {Header}
                </div>
                <div style={{
                    height : "100%",
                    width : "100%",
                    overflowY : "scroll",
                    overflowX : "auto"
                }}> 
                    {Content}
                </div>
                <div style={{
                    height : "100%",
                    width : "100%"
                }}>
                    {Footer}
                </div>
            </div>
        </div>

    )

}

MainLayoutDesktop.Header = generateNamedMember('Header');
MainLayoutDesktop.Content = generateNamedMember("Content");
MainLayoutDesktop.Footer = generateNamedMember("Footer");

export {MainLayoutDesktop}