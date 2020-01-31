import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {MatInputModule, MatSortModule, MatTableModule, MatIconModule, MatFormFieldModule} from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
 
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './service/user.service';
import {CommonService} from './service/common.service';
import { LoginComponent } from './login/login.component';
import {LoginService} from './loginservice/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { AddBankAccountComponent } from './add-bank-account/add-bank-account.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BudgetComponent } from './budget/budget.component';
import { TransactionComponent } from './transaction/transaction.component';
import { JoinourteamComponent } from './joinourteam/joinourteam.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FaqComponent } from './faq/faq.component';
import { SecurityComponent } from './security/security.component';
import { TermsComponent } from './terms/terms.component';
import { PartnersComponent } from './partners/partners.component';
import { PressComponent } from './press/press.component';
import { CreditscoreComponent } from './creditscore/creditscore.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    SubheaderComponent,
    AddBankAccountComponent,
    ContactComponent,
    AboutusComponent,
    BlogComponent,
    HowitworksComponent,
    PiechartComponent,
    BudgetComponent,
    TransactionComponent,
    SecurityComponent,
    JoinourteamComponent,
    PrivacyComponent,
    FaqComponent,
    TermsComponent,
    PartnersComponent,
    PressComponent,
    CreditscoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    //FlexLayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatAutocompleteModule
  ],
  providers: [UserService,LoginService, DashboardComponent, CommonService],
  bootstrap: [AppComponent],
})
export class AppModule { }
