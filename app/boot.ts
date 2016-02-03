import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import { GlobalColor } from './report/services/global-color.service';

bootstrap(AppComponent, [HTTP_PROVIDERS, GlobalColor]);
