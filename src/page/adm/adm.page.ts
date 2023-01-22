import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Produtos } from 'src/app/model/produto/produto.module';
import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.page.html',
  styleUrls: ['./adm.page.scss'],
})
export class AdmPage implements OnInit {

  listaProdutos: Produtos[] = [];
  readonly API = "http://localhost:3000/lista/";

  constructor(
    private DataBase: DatabaseService,
    private http: HttpClient,
    private utilidades: UtilityService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.DataBase.getItem().subscribe(results => this.listaProdutos = results);
  }

   //Método para trazer um unico item
   getOneItem(id: number){
    return this.http.get<Produtos>(this.API + id);
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

    //Método do alertando 
    async alertando(){
      const alert = this.alertCtrl.create({
        mode:'ios',
        header: 'Cadastro de Produtos',
        inputs:[
          {
            name: 'produto',
            type: 'text',
            placeholder: 'Nome'
          },
          {
            name:'quantidade',
            type: 'number',
            placeholder: 'Quantidade'
          },
          {
            name:'descricao',
            type: 'text',
            placeholder: 'Descrição'
          },
          {
            name:'preco',
            type: 'number',
            placeholder: 'Preço'
          },
          {
            name:'imagem',
            type: 'text',
            placeholder: 'Imagem'
          }
        ],
        buttons: [
  
          //Botão de cancelar
          {
            text: 'Cancelar',
            role: 'cancel'
          },
  
          //Botão de cadastrar
          {
            text: 'Cadastrar',
            handler: (form) => {
              //Objeto que irá forma nosso item da lista
              let item = {
                produto: form.produto,   
                quantidade: form.quantidade,
                descricao: form.descricao,
                preco: form.preco,
                imagem: form.imagem,
              };
              try{
                this.DataBase.postItem(item);
              }catch(err){
                console.log(err)
              }finally{
                this.utilidades.toastando("Item Cadastrado", "top", 2000,"success");                           
              } 
            }
          }
        ]
      });
  
      (await alert).present();
    }
}
