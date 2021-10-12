import { DappI } from "../Items";
import {generate} from "shortid"

export const generateRandomDappItem = () : DappI=>{
    return {
        __isDapp__ : true,
        name : generate(),
        iconUrl : `https://picsum.photos/400?random=${Math.floor(Math.random() * 800)}`,
        hash: `${generate()}${generate()}${generate()}`,
        description : Array(Math.floor(Math.random() * 40) + 5).fill(null).map(()=>{
            return generate()
        }).join(),
        sourceCode : Array(Math.floor(Math.random() * 100) + 40).fill(null).map(()=>{
            return generate()
        }).join(),
        creator : generate(),
        publishDate : new Date()
    }
}

export const generateRandomDappItems = (length : number = 20) : {
    [key : string] : DappI
}=>{

    return Array(length).fill(null).reduce((map)=>{

        const newItem = generateRandomDappItem();

        return {
            ...map,
            [newItem.name] : newItem
        }

    }, {})

}