import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './token.service';
import { ButtonComponent } from './button/button.component';
// import { NotfoundComponent } from './notfound/notfound.component';

/*
const routes: Routes = [
    {path: "", redirectTo: "button", pathMatch: "full"},
    {path: "button", component: ButtonComponent},
    {path: "**", component: NotfoundComponent}
];
*/
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
    // NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // RouterModule.forRoot(routes),
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
