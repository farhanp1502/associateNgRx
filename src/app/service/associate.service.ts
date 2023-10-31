import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssociateModel } from '../store/model/associate.model';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {
  baseurl='http://localhost:3000/associates'
  constructor(private http:HttpClient) { }

  Getall(){
    return this.http.get<AssociateModel[]>(this.baseurl)
  }
  Getbyid(id:number){
    return this.http.get<AssociateModel>(this.baseurl+'/'+id)
  }
  delete(id:number){
    return this.http.delete(this.baseurl+'/'+id)
  }
  update(data:AssociateModel){
    return this.http.put(this.baseurl+'/'+data.id,data)
  }
  create(data:AssociateModel){
    return this.http.post(this.baseurl,data)
  }
}
