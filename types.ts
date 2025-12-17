
export interface VocabularyItem {
  id: string;
  english: string;
  portuguese: string;
  extra?: string; // e.g., past tense
  extraPortuguese?: string;
}

export interface Phrase {
  id: string;
  english: string;
  portuguese: string;
}

export interface Exercise {
  id: string;
  sentence: string; // The correct sentence
  translation: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
}

export interface Lesson {
  id: number;
  title: string;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  exercises: {
    dialogue: DialogueLine[];
    sentenceOrdering: Exercise[];
  };
}

export enum TabType {
  Vocabulary = 'Vocabulary',
  Phrases = 'Phrases',
  Exercises = 'Exercises'
}
