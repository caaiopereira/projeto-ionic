import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private DataBase: DatabaseService,
    private utilidades: UtilityService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }


//Método do alertando 
async alertando(){
  const alert = this.alertCtrl.create({
    mode:'ios',
    header: 'Cadastro',
    inputs:[
      {
        name: 'nome',
        type: 'text',
        placeholder: 'Nome'
      },
      {
        name:'senha',
        type: 'password',
        placeholder: 'Senha'
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
          let user = {
            nome: form.nome,   
            senha: form.senha
          };
          try{
            this.DataBase.postUser(user);
          }catch(err){
            console.log(err)
          }finally{
            this.utilidades.toastando("Usuario Cadastrado", "top", 2000,"success");                           
          } 
        }
      }
    ]
  });

  (await alert).present();
}
}
