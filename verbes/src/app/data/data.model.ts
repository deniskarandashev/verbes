export interface Verb {
    verb: string,
    translation: string,
    group: VerbGroup,
    forms: VerbForms,
    isCorrect?: VerbFormsAnswered,
    formsSpecific?: VerbFormsSpecific,
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

export interface VerbFormsAnswered {
    je?: boolean,
    tu?: boolean,
    il?: boolean,
    nous?: boolean,
    vous?: boolean,
    ils?: boolean
}

export interface VerbFormsSpecific {
    je?: string,
    tu?: string,
    il?: string,
    nous?: string,
    vous?: string,
    ils?: string
}

export type VerbFormsType = 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils'

export enum VerbGroup {
    gr1 = '1', gr2 = '2', gr3 = '3'
}