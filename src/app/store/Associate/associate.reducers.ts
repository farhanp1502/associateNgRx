import { createReducer, on } from "@ngrx/store";
import { associtestate } from "./associate.state";
import { addassociatesuccess, loadassociatefail, loadassociatesuccess } from "./associate.action";
// import { state } from "@angular/animations";
// import { Action } from "rxjs/internal/scheduler/Action";

const _associatereducer = createReducer(associtestate,
    on(loadassociatesuccess,(state,action)=>{
        return {

            ...state,
            list:[...action.list],
            errormessage:''
        }
    }),
    on(loadassociatefail,(state,action)=>{
        return {

            ...state,
            list:[],
            errormessage:action.errormessage
        }
    }),
    on(addassociatesuccess,(state,action)=>{
        const _maxid = Math.max(...state.list.map(o=>o.id));
        const _newdata = { ...action.inputdata};
        _newdata.id = _maxid+1;
        return {

            ...state,
            list:[...state.list,_newdata],
            errormessage:''
        }
    })
    )

export function AssociateReducer(state:any,action:any){
return _associatereducer(state,action);
}
