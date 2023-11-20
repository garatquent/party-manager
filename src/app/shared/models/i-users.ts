export interface IUsers {
    name:string;
    firstname:string;
    email:string;
    status:string;
}

export interface IContact {
    name:string;
    firstname:string;
    age?:number;
    address:IAddress;
    phone:string;
    mail:string;
    status:string;
    infos?:string;
}

interface IAddress {
    street:string;
    town:string;
}