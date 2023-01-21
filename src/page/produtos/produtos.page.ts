import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Produtos } from 'src/app/model/produto/produto.module';
import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  listaProdutos: Produtos[] = [];

  readonly API = "http://localhost:3000/lista/";

  constructor(private DataBase: DatabaseService,
    private alertCtrl: AlertController,
    private actionSheet: ActionSheetController,
    private utilidades: UtilityService,
    private http: HttpClient ) { }



  ngOnInit() {
    this.DataBase.getItem().subscribe(results => this.listaProdutos = results);
  }

   //Método para trazer um unico item
   getOneItem(id: number){
    return this.http.get<Produtos>(this.API + id);
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };



  

}
