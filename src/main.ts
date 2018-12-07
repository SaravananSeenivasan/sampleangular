import "../node_modules/core-js/client/core.min.js";
import "../node_modules/zone.js/dist/zone.js";

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);

