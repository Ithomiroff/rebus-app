type Questions = {
  id: number;
  count: number;
  label: string;
  badge: QuestionBadge;
};

type QuestionBadge = 'marketing' | 'logists' | 'call' | null | 'all' | 'hidden';


type FilterVariant = {
  id: number;
  count: number;
  label: string;
  type: QuestionBadge;
};


export type {
  Questions,
  QuestionBadge,
  FilterVariant,
};