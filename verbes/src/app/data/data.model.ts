export interface Verb {
    verb: string,
    translation: string,
    group: VerbGroup,
    forms: VerbForms,
    hidden?: boolean
}

export interface VerbForms {
    je: string[],
    tu: string[],
    il: string[],
    nous: string[],
    vous: string[],
    ils: string[]
}

export type VerbFormsType = 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils'

export enum VerbGroup {
    gr1, gr2, gr3
}