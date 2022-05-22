import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { ServicesS1Component } from './services-s1/services-s1.component';
import { ServicesS2Component } from './services-s2/services-s2.component';
import { ServicesS3Component } from './services-s3/services-s3.component';
import { ServicesS4Component } from './services-s4/services-s4.component';
import { ServicesS5Component } from './services-s5/services-s5.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServicesS1Component,
    ServicesS2Component,
    ServicesS3Component,
    ServicesS4Component,
    ServicesS5Component
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
