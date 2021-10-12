import React, {FC, ReactElement, useState} from 'react';
import { generateNamedMember, getComponentMembers } from 'rgfm';
import { ApolloDappBlockItem, DappI } from '../../Items';
import { MainBenchLayout } from '../../Layouts/Benches';
import { Colors, DesktopSizes } from '../../Theme';
import { Stars } from 'react-bootstrap-icons';
import { ArendtSearchBar } from '../../Components/Searchbars';
import { AppolloNewDappBlockItem } from '../../Items/Dapp/ApolloDapp/AppolloNewDappBlockItem';

const Members = ["Header", "Items"];

export type MarketBenchDesktopProps = {
    items : DappI[]
}

export const MarketBenchDesktop : FC<MarketBenchDesktopProps> = ({
    children,
    items
}) =>{

    const nodes = items.map((item)=>{
        return (
            <ApolloDappBlockItem key={item.hash} dappItem={item}/>
        )
    })

    const [hovered, setHovered] = useState(false)

    return (

        <MainBenchLayout>
            <MainBenchLayout.Header>
                <div 
                style={{
                    textAlign: "left"
                }}>
                    <ArendtSearchBar
                        primaryColor={Colors.mainTheme}
                        secondaryColor={"white"}
                        tertiaryColor={Colors.tertiaryTextColor}
                    />
                    <br/>
                    <div style={{
                        display: "flex",
                        alignItems : "center"
                    }}>
                        <Stars size={24}/>&emsp;<h2>Featured dapps</h2>
                    </div>
                    <p>
                        Checkout our featured dapps or submit your own.
                    </p>
                </div>
            </MainBenchLayout.Header>
            <MainBenchLayout.Items>
                <div style={{
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr",
                    height : "100%",
                    width : "100%",
                    gap : DesktopSizes.Padding.whitespacePreferred,
                    padding : DesktopSizes.Padding.whitespacePreferred,
                    overflowY : 'scroll'
                }}>
                    <AppolloNewDappBlockItem/>
                    {nodes}
                </div>
            </MainBenchLayout.Items>
        </MainBenchLayout>

    )

}