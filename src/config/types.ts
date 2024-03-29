type Questions = {
  id: number;
  count: number;
  label: string;
  badge: QuestionBadge;
  isHidden?: boolean;
  marks: QuestionMarks[];
};

type Mark = {
  id: number;
  key: QuestionMarks;
  label: string;
};

type QuestionsFilterItem = {
  id: number;
  label: string;
  count: number;
  type: 'marks' | 'all' | null | 'hidden';
  markType?: QuestionMarks;
}

type QuestionMarks = 'marketing' | 'logists' | 'call';

type QuestionBadge = 'marketing' | 'logists' | 'call' | null | 'all' | 'hidden';


type FilterVariant = {
  id: number;
  count: number;
  label: string;
  type: QuestionBadge;
};

type SelectOption = {
  value: string;
  label: string;
};


export type {
  Questions,
  QuestionBadge,
  FilterVariant,
  QuestionMarks,
  Mark,
  SelectOption,
  QuestionsFilterItem,
};