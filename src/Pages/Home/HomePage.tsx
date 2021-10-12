import React, {FC, ReactElement} from 'react';
import { MarketBenchDesktop } from '../../Benches';
import { LogoA } from '../../Glitter';
import { isDapp } from '../../Items';
import { MainLayoutDesktop } from '../../Layouts';
import { HeaderDesktop } from '../../Maps/Headers/HeaderDesktop';
import { useItemStore } from '../../Sytems/ItemProvider';
import { Colors, DesktopSizes } from '../../Theme';

export type HomePageProps = {}

export const HomePage : FC<HomePageProps>  = () =>{

    const {
        items
    } = useItemStore();

    const dappItems = Object.values(items).filter((item)=>{
        return isDapp(item);
    })

    return (

        <MainLayoutDesktop>
            <MainLayoutDesktop.Header>
                <HeaderDesktop/>
            </MainLayoutDesktop.Header>
            <MainLayoutDesktop.Content>
                <MarketBenchDesktop items={dappItems}/>
            </MainLayoutDesktop.Content>
            <MainLayoutDesktop.Footer>
                <div style={{
                    width : "100%",
                    height : "100%",
                    display : "grid",
                    borderTop: `1px solid ${Colors.mainTheme}`,
                    gridTemplateColumns : "1fr 2fr 1fr",
                    padding : DesktopSizes.Padding.standard,
                    alignContent : 'center',
                    alignItems : "center"
                }}>
                    <div style={{
                        fontSize : "10px",
                        textAlign : "left"
                    }}>2021 &copy; <a href="">opencontracts.io</a></div>
                    <div>

                    </div>
                    <div style={{
                        textAlign : "right"
                    }}>
                        <span style={{
                            fontSize : "10px",
                            color : Colors.tertiaryTextColor,
                            textDecoration : "underline"
                        }}>contact</span>
                    </div>
                </div>
            </MainLayoutDesktop.Footer>
        </MainLayoutDesktop>
    )

}