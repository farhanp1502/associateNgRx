import { associateallmodel } from "../model/associate.model";

export const associtestate:associateallmodel ={
    list:[],
    errormessage:'',
    associateobj:{
        id: 0,
        name: "",
        email: "",
        phone: '',
        type: "CUSTOMER",
        address: "",
        associategroup: "level1",
        status: false
    }
}