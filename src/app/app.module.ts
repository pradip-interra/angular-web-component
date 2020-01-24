import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyWebComponent } from './my-web-component/my-web-component.component';
import { createCustomElement } from '@angular/elements';  // Change-4

@NgModule({
  declarations: [
    AppComponent,
    MyWebComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [],  // Change-1
  entryComponents: [MyWebComponent]    // Change-2
})
export class AppModule {
  constructor(private injector: Injector) { }   // Change-3

  ngDoBootstrap() {  // Change-4
    const webComponent = createCustomElement(MyWebComponent, { injector: this.injector });
    customElements.define('my-web-component', webComponent);
  }
}
