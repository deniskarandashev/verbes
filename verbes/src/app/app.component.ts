import { Component, ElementRef, inject, OnInit, QueryList, ViewChildren } from '@angular/core';
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

  @ViewChildren('inputElement') inputs!: QueryList<ElementRef>;
  @ViewChildren('row') rows!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.verbs = this.dataService.getData();
  }

  answer(verb: Verb, prenom: string) {
    return verb.forms[prenom  + 'Scecific' as VerbFormsType] ?? verb.forms[prenom as VerbFormsType][0]
  }

  markRowAsMistaken(row: HTMLDivElement, verb: Verb,prenom: string, i: number) {
    row.style.backgroundColor = row.style.backgroundColor === 'red' ? '' : 'red'  
  }

  onEnter($event: any, verb: Verb, prenom: string, i: number, j: number) {
    const el = document.getElementById(verb.verb + '_' + prenom)
    if (el) {
      if (verb.forms[prenom as VerbFormsType].includes($event?.target?.value)) {
        el.style.color = 'green';
        el.style.fontWeight = 'bold';

        const currentIndex = i * this.prenoms.length + j;
        const nextInput = this.inputs.get(currentIndex + 1);
        if (nextInput) {
          nextInput.nativeElement.focus();
        }

        $event.preventDefault();
      } else {
        el.style.color = 'red';
        el.style.fontWeight = 'bold';
      }
    }
  }

  onCheckBox(e: any, verb: Verb, card: HTMLDivElement, checkbox: HTMLDivElement): void {
    e.stopPropagation()
    if (e.target.checked) {
      card.style.backgroundColor = 'lightgrey';
      this.verbs = [...this.verbs.filter(v => v.verb !== verb.verb), verb]
    } else {
      card.style.backgroundColor = 'unset';
      this.verbs = [verb, ...this.verbs.filter(v => v.verb !== verb.verb)]
    }
    
  }
}
