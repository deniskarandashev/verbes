import { Component, ElementRef, inject, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from './data/data.service';
import { Verb, VerbForms, VerbFormsAnswered, VerbFormsType, VerbGroup } from './data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  protected dataService = inject(DataService);
  protected prenoms: VerbFormsType[] = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  protected verbs!: Verb[]

  mode: string = 'questions_1';

  @ViewChildren('inputElement') inputs!: QueryList<ElementRef>;
  @ViewChildren('row') rows!: QueryList<ElementRef>;

  ngOnInit(): void {
    const savedVerbs = localStorage.getItem('VERBES');
    const savedMode = localStorage.getItem('MODE');
    if (savedVerbs) {
      this.verbs = JSON.parse(savedVerbs);
    } else {
      this.verbs = this.dataService.getData(VerbGroup.gr1);
    }
    if (savedMode) {
      this.mode = savedMode;
    } else {
      this.mode = 'questions_1';
    }
  }

  ngOnDestroy(): void {
    this.saveState();
  }

  answer(verb: Verb, prenom: string) {
    return verb.forms[prenom  + 'Scecific' as VerbFormsType] ?? verb.forms[prenom as VerbFormsType][0]
  }

  markRowAsMistaken(row: HTMLDivElement, verb: Verb, prenom: string, i: number) {  
    if (row.style.backgroundColor !== 'red') {
      row.style.backgroundColor = 'red';
      verb.isCorrect = verb.isCorrect ? verb.isCorrect : {}
      verb.isCorrect[prenom as VerbFormsType] = false;
    } else {
      row.style.backgroundColor = '';
      verb.isCorrect = verb.isCorrect ? verb.isCorrect : {}
      verb.isCorrect[prenom as VerbFormsType] = true;
    }
    this.saveState();
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

    this.saveState();
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
    
    this.saveState();
  }

  onRadioBtn(e: any): void {
    this.mode = e.target?.value ?? 'questions_1';
    switch(this.mode) {
      case 'questions_1':
      case 'answers_1':
        this.verbs = this.dataService.getData(VerbGroup.gr1);
        break;
      case 'questions_2':
      case 'answers_2':
        this.verbs = this.dataService.getData(VerbGroup.gr2);
        break;
      case 'questions_3':
      case 'answers_3':
        this.verbs = this.dataService.getData(VerbGroup.gr3);
        break;
    }

    this.saveState();
  }

  private saveState(): void {
    localStorage.setItem('VERBES', JSON.stringify(this.verbs));
    localStorage.setItem('MODE', this.mode);
  }
}
