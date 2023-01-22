import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Produtos } from 'src/app/model/produto/produto.module';
import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  listaProdutos: Produtos[] = [];
  routeId = null;
  produto: any = {};

  constructor(
    //Nosso serviço de banco de dados
    private DataBase: DatabaseService,
    //Serviço de utilidades 
    private utilidades: UtilityService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(){
    this.routeId = this.activatedRoute.snapshot.params['id'];

    if(this.routeId){
      //Tras o item do banco de dados
      this.DataBase.getOneItem(this.routeId).subscribe(caixa => {this.produto = caixa});
    }
  }

  //Metodo do botao excluir
  deletar(id: number){

    try{
      this.DataBase.delItem(id);  
    }catch(err){
      console.log(err);
    }finally{
      //Chama a menssagem 
      this.utilidades.toastando("Item Excluido", "bottom", 2000, "danger"); 
    }  
  } 

}
