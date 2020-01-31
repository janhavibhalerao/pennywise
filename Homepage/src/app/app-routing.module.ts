import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBankAccountComponent } from './add-bank-account/add-bank-account.component';
import {ContactComponent} from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import {BudgetComponent} from './budget/budget.component';
import {TransactionComponent} from './transaction/transaction.component'
import { JoinourteamComponent } from './joinourteam/joinourteam.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FaqComponent } from './faq/faq.component';
import { SecurityComponent } from './security/security.component';
import { TermsComponent } from './terms/terms.component';
import { PartnersComponent } from './partners/partners.component';
import { PressComponent } from './press/press.component';
import { CreditscoreComponent } from './creditscore/creditscore.component';

const routes: Routes = [

  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'addAccount', component: AddBankAccountComponent},
  {path:'contact',component:ContactComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'blog', component:BlogComponent},
  {path:'howitworks', component:HowitworksComponent},
  {path:'budget',component:BudgetComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'joinourteam', component:JoinourteamComponent},
  {path:'privacy', component:PrivacyComponent},
  {path:'faq', component:FaqComponent},
  {path:'security', component:SecurityComponent},
  {path:'terms', component:TermsComponent},
  {path:'partners', component:PartnersComponent},
  {path:'press', component:PressComponent},
  {path:'creditscore', component:CreditscoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
