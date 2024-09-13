import { Component, inject, OnInit } from '@angular/core';
import { DataService } from './data/data.service';
import { Verb, VerbForms, VerbFormsType } from './data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected dataService = inject(DataService);
  protected prenoms: VerbFormsType[] = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  protected verbs!: Verb[]

  mode: string = 'questions';

  ngOnInit(): void {
      this.verbs = this.dataService.getData();
  }

  onEnter($event: any, verb: Verb, prenom: string) {
    const el = document.getElementById(verb.verb + '_' + prenom)
    if (el) {
      if (verb.forms[prenom as VerbFormsType].includes($event?.target?.value)) {
        el.style.color = 'green';
        el.style.fontWeight = 'bold';
      } else {
        el.style.color = 'red';
        el.style.fontWeight = 'bold';
      }
    }
  }
}
