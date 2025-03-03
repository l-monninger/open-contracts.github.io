import React, {FC, ReactElement} from 'react';
import { generateNamedMember, getComponentMembers } from 'rgfm';

const Members = ["Brand", "Nav", "Account"] as const;

export type HeaderLayoutDesktopProps = {}

const HeaderLayoutDesktop : FC<HeaderLayoutDesktopProps> & {
    Brand : FC,
    Nav : FC,
    Account : FC
} = ({
    children
}) =>{

    const {
        Brand,
        Nav,
        Account
    } = getComponentMembers(Members, children);

    return (

        <div style={{
            height : "100%",
            width : "100%",
            display : "grid",
            gridTemplateColumns : "1fr 2fr 1fr",
            justifyContent : "center",
            justifyItems : "center"
        }}>
            <div style={{
                height : "100%",
                width : "100%"
            }}>
                {Brand}
            </div>
            <div style={{
                height : "100%",
                width : "100%"
            }}>
                {Nav}
            </div>
            <div style={{
                height : "100%",
                width : "100%"
            }}>
                {Account}
            </div>
        </div>

    )

}

HeaderLayoutDesktop.Brand = generateNamedMember('Brand');
HeaderLayoutDesktop.Nav = generateNamedMember("Nav");
HeaderLayoutDesktop.Account = generateNamedMember("Account");

export {HeaderLayoutDesktop};