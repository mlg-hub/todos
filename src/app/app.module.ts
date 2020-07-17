import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponentComponent } from './components/top-component/top-component.component';
import { BtmComponentComponent } from './components/btm-component/btm-component.component';
import { LeftComponentComponent } from './components/btm-component/left-component/left-component.component';
import { RightComponentComponent } from './components/btm-component/right-component/right-component.component';
import { TodoComponentComponent } from './components/shared/todo-component/todo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponentComponent,
    BtmComponentComponent,
    LeftComponentComponent,
    RightComponentComponent,
    TodoComponentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
