import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  myModel = {
    'publicliability': {
      'questionId1': 'IAG'
    }
  };

  mySchema = {
    'type': 'object',
    'properties': {
      'publicliability': {
        'type': 'object',
        'properties': {
          'questionId1': {
            'type': 'string',
            'minLength': 2,
            'maxLength': 32,
            'description': 'Whats your company name'
          },
          'questionId2': {
            'type': 'string',
            'widget': 'select',
            'oneOf': [{
              'enum': ['1'],
              'description': '1'
            }, {
              'enum': ['2'],
              'description': '2'
            }, {
              'enum': ['3'],
              'description': '3'
            }],
            'description': 'How many employees do you have?',
            'default': '1'
          },
          'questionId4': {
            'type': 'string',
            'widget': 'radio',
            'oneOf': [{
              'enum': ['Yes'],
              'description': 'Yes'
            }, {
              'enum': ['No'],
              'description': 'No'
            }
            ],
            'default': 'No',
            'description': 'Have ever made any claims?'
          },
          'claims': {
            'type': 'array',
            'description': 'Add new claims',
            'visibleIf': {
              '/publicliability/questionId4': ['Yes']
            },
            'items': {
              'type': 'object',
              'properties': {
                'claimsummary': {
                  'type': 'string',
                  'description': 'Claim Summary',
                  'minLength': 2,
                  'maxLength': 30
                }
              }
            }
          }
        }
      }
    }
  };
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
      names => this.names = names,
      error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
