import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
