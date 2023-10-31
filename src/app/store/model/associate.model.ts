export interface AssociateModel{
    id:number;
    name:string;
    email:string;
    phone:string;
    type:string;
    address:string;
    associategroup:string;
    status:boolean;
}
export interface associateallmodel{
    list:AssociateModel[];
    associateobj:AssociateModel;
    errormessage:string;
}