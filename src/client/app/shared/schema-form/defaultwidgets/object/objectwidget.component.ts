import { Component } from '@angular/core';

import { ObjectLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-form-object',
  template: `<fieldset *ngFor="let fieldset of formProperty.schema.fieldsets">
	<legend *ngIf="fieldset.title">{{fieldset.title}}</legend>
	<div *ngFor="let fieldId of fieldset.fields">
		<sf-form-element [formProperty]="formProperty.getProperty(fieldId)"></sf-form-element>
	</div>
</fieldset>`
})
export class ObjectWidgetComponent extends ObjectLayoutWidget { }
