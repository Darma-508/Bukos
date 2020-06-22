import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'home',
      	loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
      	path: 'user',
      	loadChildren: () => import('../user/user.module').then(m => m.UserPageModule)
      },
      {
      	path: '',
      	redirectTo: '/tablinks/home',
      	pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
