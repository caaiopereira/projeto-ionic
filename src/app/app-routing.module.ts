import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('../page/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('../page/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'carrinho/:id',
    loadChildren: () => import('../page/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'info/:id',
    loadChildren: () => import('../page/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'form/:id',
    loadChildren: () => import('../page/atualizar/atualizar.module').then( m => m.AtualizarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../page/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
