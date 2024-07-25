import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { MarkerPlanOptimizationService } from './services/marker-plan-optimization.service';
import {MarkerPlanComponent} from "./components/marker-plan/marker-plan.component";
import { DisplayMarkerPlansComponent } from './components/display-marker-plans/display-marker-plans.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MarkerPlanComponent,
    DisplayMarkerPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSpinModule,
    NzTableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    MarkerPlanOptimizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
