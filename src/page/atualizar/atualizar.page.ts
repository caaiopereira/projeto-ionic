import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.page.html',
  styleUrls: ['./atualizar.page.scss'],
})
export class AtualizarPage implements OnInit {

  routeId = null;
  produto: any = {};


  constructor(
    //Essa ferramnete server para captura a rota (caminho) que estiver ativo
    private activatedRoute: ActivatedRoute,
    private banco: DatabaseService,
    private router: Router,
    private util: UtilityService
  ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];

    if(this.routeId){
      //Tras o item do banco de dados
      this.banco.getOneItem(this.routeId).subscribe(caixa => {this.produto = caixa});
    }
  }

   //Método que chama o serviço de atualização
   update(form: any){
    this.banco.updateItem(form.value, this.routeId);
    this.router.navigate(['/carrinho']);
    this.util.toastando("Item Atualizado com sucesso", "middle", 900, "medium");
  }

}
