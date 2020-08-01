import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HightlightDirective } from './directives/hightlight/hightlight.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HightlightDirective,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HightlightDirective,
  ],
})
export class SharedModule {}
