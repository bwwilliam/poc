import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { FormElementComponent } from './formelement.component';
import { FormComponent } from './form.component';
import { WidgetChooserComponent } from './widgetchooser.component';
import {
  ArrayWidgetComponent,
  ObjectWidgetComponent,
  CheckboxWidgetComponent,
  FileWidgetComponent,
  IntegerWidgetComponent,
  TextAreaWidgetComponent,
  RadioWidgetComponent,
  RangeWidgetComponent,
  SelectWidgetComponent,
  StringWidgetComponent
} from './defaultwidgets/index';
import {
  DefaultWidgetComponent
} from './defaultwidget.component';

@NgModule({
  imports : [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FormElementComponent,
    FormComponent,
    WidgetChooserComponent,
    DefaultWidgetComponent,
    ArrayWidgetComponent,
    ObjectWidgetComponent,
    CheckboxWidgetComponent,
    FileWidgetComponent,
    IntegerWidgetComponent,
    TextAreaWidgetComponent,
    RadioWidgetComponent,
    RangeWidgetComponent,
    SelectWidgetComponent,
    StringWidgetComponent,
  ],
  entryComponents: [
    FormElementComponent,
    FormComponent,
    WidgetChooserComponent,
    ArrayWidgetComponent,
    ObjectWidgetComponent,
    CheckboxWidgetComponent,
    FileWidgetComponent,
    IntegerWidgetComponent,
    TextAreaWidgetComponent,
    RadioWidgetComponent,
    RangeWidgetComponent,
    SelectWidgetComponent,
    StringWidgetComponent,
  ],
  exports: [
    FormComponent,
    FormElementComponent,
    WidgetChooserComponent,
    ArrayWidgetComponent,
    ObjectWidgetComponent,
    CheckboxWidgetComponent,
    FileWidgetComponent,
    IntegerWidgetComponent,
    TextAreaWidgetComponent,
    RadioWidgetComponent,
    RangeWidgetComponent,
    SelectWidgetComponent,
    StringWidgetComponent
  ]
})
export class SchemaFormModule {}
