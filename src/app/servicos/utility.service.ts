import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    //Ferramente do carregando!
    private loading: LoadingController,
    
    //Ferramenta do toast *(Menssagem)
    private toast: ToastController
    ) { }

    //Metodo do loading
    async carregando(message: string, duration: number){
      const load = this.loading.create({
        mode: 'ios',
        message,
        duration
      });

      (await load).present();
    }

    //Método do toast
    async toastando(message: string, position: "top" | "middle" | "bottom", duration: number, color: string){
      const toastei = this.toast.create({
        message,
        position,
        duration,
        color
      });
      (await toastei).present();
      //location.reload();

      setTimeout(this.refresh, 2000);
    }

  //metodo do reload
  refresh(){
    location.reload();
  }
}
