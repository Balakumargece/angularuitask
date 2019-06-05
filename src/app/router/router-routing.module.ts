import { NgModule,Injector } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../dashboard/home/home.component';

import { SettingsComponent } from '../dashboard/settings/settings.component';
import { PriceTableComponent } from '../dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from '../dashboard/component/panels/panels.component';
import { WizardComponent } from '../dashboard/component/wizard/wizard.component';
import { RootComponent } from '../dashboard/root/root.component';
import { LoginComponent } from '../page/login/login.component';
import { LockComponent } from '../page/lock/lock.component';
import { RegisterComponent } from '../page/register/register.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FigurecardComponent } from '../shared/figurecard/figurecard.component';
import { ImagecardComponent } from '../shared/imagecard/imagecard.component';
import { MsgIconBtnComponent } from '../shared/msgiconbtn/msgiconbtn.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

import { AuthGuard } from '../guards';
import { NewContentComponent } from '../dashboard/new-content/new-content.component';
import { ViewContentComponent } from '../dashboard/view-content/view-content.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard/newcontent',
  //   pathMatch: 'full',
  // },
  { path: '', component: LoginComponent },
  { path: 'lock', component: LockComponent },
  { path: 'register', component: RegisterComponent },
  {
    // canActivate:[AuthGuard],

    path: 'dashboard', component: RootComponent, children: [
      { path: '', component: HomeComponent},



      { path: 'newcontent', component: NewContentComponent,canActivate: [AuthGuard] },
      { path: 'viewcontent', component: ViewContentComponent },

      { path: 'settings', component: SettingsComponent },
      { path: 'components/price-table', component: PriceTableComponent },
      { path: 'components/panels', component: PanelsComponent },
      { path: 'components/wizard', component: WizardComponent },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule {

}
export const routingComponets = [
  HomeComponent,
  SettingsComponent,
  PriceTableComponent,
  PanelsComponent,
  WizardComponent,
  RootComponent,
  LoginComponent,
  LockComponent,
  RegisterComponent,
  SidebarComponent,
  NavbarComponent,
  FigurecardComponent,
  ImagecardComponent,
  MsgIconBtnComponent,
  HeaderComponent,
  FooterComponent,
  NewContentComponent,
  ViewContentComponent,


]
