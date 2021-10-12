export interface DappI {
    __isDapp__ : true
    name : string,
    hash : string,
    description : string,
    sourceCode : string,
    iconUrl : string,
    creator : string,
    publishDate : Date
}

export const isDapp = (obj : any) : obj is DappI => {

    return obj.__isDapp__;

}