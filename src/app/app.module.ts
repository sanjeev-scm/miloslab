import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleList } from './components/people-list/people-list.component';
import { PersonDetail } from './components/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleList,
    PersonDetail,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
