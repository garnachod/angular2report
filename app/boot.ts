import { bootstrap } from 'angular2/platform/browser';
import { UserReportComponent } from './report/user-report.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { GlobalColor } from './report/services/global-color.service';

bootstrap(UserReportComponent, [HTTP_PROVIDERS, GlobalColor]);
