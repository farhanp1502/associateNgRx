import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AssociateService } from "src/app/service/associate.service";
import { addassociate, addassociatesuccess, loadassociate, loadassociatefail, loadassociatesuccess } from "./associate.action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { showalert } from "../common/app.actions";

@Injectable()
export class Associateeffects {
    constructor(private action$:Actions,private service:AssociateService){}

    _loadassociate = createEffect(()=>
    this.action$.pipe(
        ofType(loadassociate),
        switchMap(()=>{
          return  this.service.Getall().pipe(
                switchMap((data)=>{
                    return of(loadassociatesuccess({list:data}),
                    showalert({ message: 'loaded Successfully', resulttype: 'pass' })) 
                }),
                catchError((_error)=> of(showalert({message:'failed load associate',resulttype:'fail'})))
            )
        }
            )
    ))
    _addassociate = createEffect(()=>
    this.action$.pipe(
        ofType(addassociate),
        switchMap((action)=>{
          return  this.service.create(action.inputdata).pipe(
                switchMap(()=>{
                    return of(addassociatesuccess({ inputdata: action.inputdata }),
                        showalert({ message: 'Created Successfully', resulttype: 'pass' })
                    ); 
                }),
                catchError((_error)=> of(showalert({message:'failed to create associate',resulttype:'fail'})))
            )
        }
            )
    ))

}