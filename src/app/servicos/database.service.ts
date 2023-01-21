import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Produtos } from '../model/produto/produto.module';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  readonly API = "http://localhost:3000/lista/";

  constructor(private http: HttpClient) { }

  getItem(){
    return this.http.get<Produtos[]>(this.API);
  }

  //Método para trazer um unico item
  getOneItem(id: number){
    return this.http.get<Produtos>(this.API + id);
  }

  postItem(dados: any){
    return this.http.post(this.API, JSON.stringify(dados), this.HttpOptions).subscribe()
  }

  delItem(id: number){
    return this.http.delete(this.API + id).subscribe();
  }

  //Metodo de alteração do status
  statusItem(item: Produtos){
    return this.http.put(this.API + item.id, JSON.stringify(item), this.HttpOptions).subscribe();
  }

  //Método de atualização
  updateItem(item: Produtos, id: any){
    return this.http.put(this.API + id, JSON.stringify(item), this.HttpOptions).subscribe();
  }
}
