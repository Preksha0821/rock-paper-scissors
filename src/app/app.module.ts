import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './services/app.service';
import { ButtonComponent } from './components/button/button.component';
import {GameStoreModule} from './state/game-store.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GameStoreModule
  ],
  providers: [AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
