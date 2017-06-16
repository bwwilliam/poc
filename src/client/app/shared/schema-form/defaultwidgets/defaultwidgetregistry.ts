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
} from './index';

import { WidgetRegistry } from '../widgetregistry';

export class DefaultWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();

    this.register('array',  ArrayWidgetComponent);
    this.register('object',  ObjectWidgetComponent);

    this.register('string', StringWidgetComponent);
    this.register('search', StringWidgetComponent);
    this.register('tel', StringWidgetComponent);
    this.register('url', StringWidgetComponent);
    this.register('email', StringWidgetComponent);
    this.register('password', StringWidgetComponent);
    this.register('color', StringWidgetComponent);
    this.register('date', StringWidgetComponent);
    this.register('date-time', StringWidgetComponent);
    this.register('time', StringWidgetComponent);

    this.register('integer', IntegerWidgetComponent);
    this.register('number', IntegerWidgetComponent);
    this.register('range', RangeWidgetComponent);

    this.register('textarea', TextAreaWidgetComponent);

    this.register('file', FileWidgetComponent);
    this.register('select', SelectWidgetComponent);
    this.register('radio', RadioWidgetComponent);
    this.register('boolean', CheckboxWidgetComponent);
    this.register('checkbox', CheckboxWidgetComponent);

    this.setDefaultWidget(StringWidgetComponent);
  }
}
