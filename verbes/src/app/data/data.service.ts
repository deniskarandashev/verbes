import { Injectable } from '@angular/core';
import { Verb, VerbGroup } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Verb[] {
    return this.data;
  }

// {
//     verb: '',
//     translation: '',
//     group: VerbGroup.gr3,
//     forms: {
//         je: [''],
//         tu: [''],
//         il: [''],
//         nous: [''],
//         vous: [''],
//         ils: ['']
//     }
// },

data: Verb[] = [
    {
        verb: 'avoir',
        translation: 'иметь',
        group: VerbGroup.gr3,
        forms: {
            je: ['ai'],
            tu: ['as'],
            il: ['a'],
            nous: ['avons'],
            vous: ['avez'],
            ils: ['ont']
        }
    },
    {
        verb: 'être',
        translation: 'быть',
        group: VerbGroup.gr3,
        forms: {
            je: ['suis'],
            tu: ['es'],
            il: ['est'],
            nous: ['sommes'],
            vous: ['êtes', 'etes'],
            ils: ['sont']
        }
    },
    {
        verb: 'dire',
        translation: 'говорить',
        group: VerbGroup.gr3,
        forms: {
            je: ['dis'],
            tu: ['dis'],
            il: ['dit'],
            nous: ['disons'],
            vous: ['dites'],
            ils: ['disent']
        }
    },
    {
        verb: 'connaître',
        translation: 'знать',
        group: VerbGroup.gr3,
        forms: {
            je: ['connais'],
            tu: ['connais'],
            il: ['connaît', 'connait'],
            nous: ['connaissons'],
            vous: ['connaissez'],
            ils: ['connaissent']
        }
    },
    {
        verb: 'faire',
        translation: 'делать',
        group: VerbGroup.gr3,
        forms: {
            je: ['fais'],
            tu: ['fais'],
            il: ['fait'],
            nous: ['faisons'],
            vous: ['faites'],
            ils: ['font']
        }
    },
    {
        verb: 'partir',
        translation: 'уходить',
        group: VerbGroup.gr3,
        forms: {
            je: ['pars'],
            tu: ['pars'],
            il: ['part'],
            nous: ['partons'],
            vous: ['partez'],
            ils: ['partent']
        }
    },
    {
        verb: 'ouvrir',
        translation: 'открывать',
        group: VerbGroup.gr3,
        forms: {
            je: ['ouvre'],
            tu: ['ouvres'],
            il: ['ouvre'],
            nous: ['ouvrons'],
            vous: ['ouvrez'],
            ils: ['ouvrent']
        }
    },
    {
        verb: 'aller',
        translation: 'идти',
        group: VerbGroup.gr3,
        forms: {
            je: ['vais'],
            tu: ['vas'],
            il: ['va'],
            nous: ['allons'],
            vous: ['allez'],
            ils: ['vont']
        }
    },
    {
        verb: 'venir',
        translation: 'ехать',
        group: VerbGroup.gr3,
        forms: {
            je: ['viens'],
            tu: ['viens'],
            il: ['vient'],
            nous: ['venons'],
            vous: ['venez'],
            ils: ['viennent']
        }
    },
    {
        verb: 'prendre',
        translation: 'брать',
        group: VerbGroup.gr3,
        forms: {
            je: ['prends'],
            tu: ['prends'],
            il: ['prend'],
            nous: ['prenons'],
            vous: ['prenez'],
            ils: ['prennent']
        }
    },
    {
        verb: 'vouloir',
        translation: 'хотеть',
        group: VerbGroup.gr3,
        forms: {
            je: ['veux'],
            tu: ['veux'],
            il: ['veut'],
            nous: ['voulons'],
            vous: ['voulez'],
            ils: ['veulent']
        }
    },
    {
        verb: 'savoir',
        translation: 'знать',
        group: VerbGroup.gr3,
        forms: {
            je: ['sais'],
            tu: ['sais'],
            il: ['sait'],
            nous: ['savons'],
            vous: ['savez'],
            ils: ['savent']
        }
    },
    {
        verb: 'voir',
        translation: 'видеть',
        group: VerbGroup.gr3,
        forms: {
            je: ['vois'],
            tu: ['vois'],
            il: ['voit'],
            nous: ['voyons'],
            vous: ['voyez'],
            ils: ['voient']
        }
    },
    {
        verb: 'répondre',
        translation: 'отвечать',
        group: VerbGroup.gr3,
        forms: {
            je: ['réponds', 'reponds'],
            tu: ['réponds', 'reponds'],
            il: ['répond', 'repond'],
            nous: ['répondons', 'repondons'],
            vous: ['répondez', 'repondez'],
            ils: ['répondent', 'repondent']
        }
    },
    {
        verb: 'pouvoir',
        translation: 'мочь',
        group: VerbGroup.gr3,
        forms: {
            je: ['peux'],
            tu: ['peux'],
            il: ['peut'],
            nous: ['pouvons'],
            vous: ['pouvez'],
            ils: ['peuvent']
        }
    },
    {
        verb: 'boire',
        translation: 'пить',
        group: VerbGroup.gr3,
        forms: {
            je: ['bois'],
            tu: ['bois'],
            il: ['boit'],
            nous: ['buvons'],
            vous: ['buvez'],
            ils: ['boivent']
        }
    },
    {
        verb: 'lire',
        translation: 'читать',
        group: VerbGroup.gr3,
        forms: {
            je: ['lis'],
            tu: ['lis'],
            il: ['lit'],
            nous: ['lisons'],
            vous: ['lisez'],
            ils: ['lisent']
        }
    },
    {
        verb: 'écrire',
        translation: 'писать',
        group: VerbGroup.gr3,
        forms: {
            je: ['écris', 'ecris'],
            tu: ['écris', 'ecris'],
            il: ['écrit', 'ecrit'],
            nous: ['écrivons', 'ecrivons'],
            vous: ['écrivez', 'ecrivez'],
            ils: ['écrivent', 'ecrivent']
        }
    },
    {
        verb: 'sortir',
        translation: 'выходить',
        group: VerbGroup.gr3,
        forms: {
            je: ['sors'],
            tu: ['sors'],
            il: ['sort'],
            nous: ['sortons'],
            vous: ['sortez'],
            ils: ['sortent']
        }
    },
    {
        verb: 'devoir',
        translation: 'долженствовать',
        group: VerbGroup.gr3,
        forms: {
            je: ['dois'],
            tu: ['dois'],
            il: ['doit'],
            nous: ['devons'],
            vous: ['devez'],
            ils: ['doivent']
        }
    },
    {
        verb: 'vivre',
        translation: 'жить',
        group: VerbGroup.gr3,
        forms: {
            je: ['vis'],
            tu: ['vis'],
            il: ['vit'],
            nous: ['vivons'],
            vous: ['vivez'],
            ils: ['vivent']
        }
    },

        {
        verb: 'plaire',
        translation: 'нравится',
        group: VerbGroup.gr3,
        forms: {
            je: ['plais'],
            tu: ['plais'],
            il: ['plait'],
            nous: ['plaisons'],
            vous: ['plaisez'],
            ils: ['plaisent']
        }
    },
    {
        verb: 'suivre',
        translation: 'следовать',
        group: VerbGroup.gr3,
        forms: {
            je: ['suis'],
            tu: ['suis'],
            il: ['suit'],
            nous: ['suivons'],
            vous: ['suivez'],
            ils: ['suivent']
        }
    },
    {
        verb: 'recevoir',
        translation: 'получать',
        group: VerbGroup.gr3,
        forms: {
            je: ['reçois', 'recois'],
            tu: ['reçois', 'recois'],
            il: ['reçoit', 'recoit'],
            nous: ['recevons'],
            vous: ['recevez'],
            ils: ['reçoivent', 'recoivent']
        }
    },
    {
        verb: 'courir',
        translation: 'бежать',
        group: VerbGroup.gr3,
        forms: {
            je: ['cours'],
            tu: ['cours'],
            il: ['court'],
            nous: ['courons'],
            vous: ['courez'],
            ils: ['courent']
        }
    },
    {
        verb: 'dormir',
        translation: 'спать',
        group: VerbGroup.gr3,
        forms: {
            je: ['dors'],
            tu: ['dors'],
            il: ['dort'],
            nous: ['dormons'],
            vous: ['dormez'],
            ils: ['dorment']
        }
    },
    {
        verb: 'mettre',
        translation: 'ставить',
        group: VerbGroup.gr3,
        forms: {
            je: ['mets'],
            tu: ['mets'],
            il: ['met'],
            nous: ['mettons'],
            vous: ['mettez'],
            ils: ['mettent']
        }
    },
    {
        verb: 'traduire',
        translation: 'переводить',
        group: VerbGroup.gr3,
        forms: {
            je: ['traduis'],
            tu: ['traduis'],
            il: ['traduit'],
            nous: ['traduisons'],
            vous: ['traduisez'],
            ils: ['traduisent']
        }
    },
    {
        verb: 'battre',
        translation: 'сражаться',
        group: VerbGroup.gr3,
        forms: {
            je: ['bats'],
            tu: ['bats'],
            il: ['bat'],
            nous: ['battons'],
            vous: ['battez'],
            ils: ['battent']
        }
    },
    {
        verb: 'mourir',
        translation: 'умереть',
        group: VerbGroup.gr3,
        forms: {
            je: ['meurs'],
            tu: ['meurs'],
            il: ['meurt'],
            nous: ['mourons'],
            vous: ['mourez'],
            ils: ['meurent']
        }
    },
    {
        verb: 'naître',
        translation: 'родиться',
        group: VerbGroup.gr3,
        forms: {
            je: ['nais'],
            tu: ['nais'],
            il: ['naît'],
            nous: ['naissons'],
            vous: ['naissez'],
            ils: ['naissent']
        }
    },
    {
        verb: 'rire',
        translation: 'смеяться',
        group: VerbGroup.gr3,
        forms: {
            je: ['ris'],
            tu: ['ris'],
            il: ['rit'],
            nous: ['rions'],
            vous: ['riez'],
            ils: ['rient']
        }
    },
    {
        verb: 'servir',
        translation: 'служить',
        group: VerbGroup.gr3,
        forms: {
            je: ['sers'],
            tu: ['sers'],
            il: ['sert'],
            nous: ['servons'],
            vous: ['servez'],
            ils: ['servent']
        }
    },
    {
        verb: 'croire',
        translation: 'верить',
        group: VerbGroup.gr3,
        forms: {
            je: ['crois'],
            tu: ['crois'],
            il: ['croit'],
            nous: ['croyons'],
            vous: ['croyez'],
            ils: ['croient']
        }
    },

    {
        verb: 'se plaindre',
        translation: 'жаловаться',
        group: VerbGroup.gr3,
        forms: {
            je: ['me plains'],
            tu: ['te plains'],
            il: ['se plaint'],
            nous: ['nous plaignons'],
            vous: ['vous plaignez'],
            ils: ['se plaignent']
        }
    }
]

dataFirstGroup: Verb[] = [
    {
        verb: 'écouter',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: ['écoute'],
            tu: ['écoutes'],
            il: ['écoute'],
            nous: ['écoutons'],
            vous: ['écoutez'],
            ils: ['écoutent']
        }
    },
    {
        verb: 'commencer',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: ['commence'],
            tu: ['commences'],
            il: ['commence'],
            nous: ['commençons'],
            vous: ['commencez'],
            ils: ['commencent']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
    {
        verb: '',
        translation: '',
        group: VerbGroup.gr1,
        forms: {
            je: [''],
            tu: [''],
            il: [''],
            nous: [''],
            vous: [''],
            ils: ['']
        }
    },
]
}
