import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController} from '@ionic/angular';
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
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(){
    this.routeId = this.activatedRoute.snapshot.params['id'];

    if(this.routeId){
      //Tras o item do banco de dados
      this.DataBase.getOneItem(this.routeId).subscribe(caixa => {this.produto = caixa});
    }
  }


}
