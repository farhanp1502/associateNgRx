import { createAction, props } from "@ngrx/store";
import { AssociateModel } from "../model/associate.model";

export const LOAD_ASSOCIATE = '[load page] load associate';
export const LOAD_ASSOCIATE_SUCCESS = '[load page] load associate success' ;
export const LOAD_ASSOCIATE_FAIL = '[load page] load associate fail';
export const ADD_ASSOCIATE = '[load page] add associate';
export const ADD_ASSOCIATE_SUCCESS = '[load page] add associate success' ;

export const loadassociate = createAction(LOAD_ASSOCIATE)
export const loadassociatesuccess = createAction(LOAD_ASSOCIATE_SUCCESS,props<{list:AssociateModel[]}>())
export const loadassociatefail = createAction(LOAD_ASSOCIATE_FAIL,props<{errormessage:string}>())
export const addassociate = createAction(LOAD_ASSOCIATE,props<{inputdata:AssociateModel}>())
export const addassociatesuccess = createAction(LOAD_ASSOCIATE_SUCCESS,props<{inputdata:AssociateModel}>())