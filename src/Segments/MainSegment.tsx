import React, {FC, ReactElement} from 'react';
import { generateRandomDappItems } from '../Demo';
import { MainRouter } from '../Router';
import { ItemProvider } from '../Sytems/ItemProvider';

export type MainSegmentProps = {}

export const MainSegment : FC<MainSegmentProps>  = () =>{

    const initItems = generateRandomDappItems(5);

    return (

        <ItemProvider initialItems={initItems}>
            <MainRouter/>
        </ItemProvider>


    )

}