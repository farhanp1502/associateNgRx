import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AssociateModel, associateallmodel } from "../model/associate.model";

const getassociatestate = createFeatureSelector<associateallmodel>('associatered');

export const getassociatelist = createSelector(getassociatestate,(state)=>{
    return state.list;
})