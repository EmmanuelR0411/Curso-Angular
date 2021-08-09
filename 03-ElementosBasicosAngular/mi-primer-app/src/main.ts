import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Esta es la ruta del modulo que se carga
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* Nos indica el levantamiento de un modulo (el modulo AppModule)*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
