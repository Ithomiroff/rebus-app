import { FilterVariant, Mark, Questions, SelectOption } from "./types";

const FILTER_VARIANTS: FilterVariant[] = [
  {
    id: 0,
    count: 833,
    label: 'Все вопросы',
    type: 'all',
  },
  {
    id: 1,
    count: 790,
    label: 'Без метки',
    type: null,
  },
  {
    id: 2,
    count: 109,
    label: 'Маркетинг',
    type: 'marketing',
  },
  {
    id: 3,
    count: 30,
    label: 'Логисты',
    type: 'logists',
  },
  {
    id: 4,
    count: 3,
    label: 'Колл-центр',
    type: 'call',
  },
  {
    id: 4,
    count: 11,
    label: 'Скрытые',
    type: 'hidden',
  }
];

const LIST_MOCK: Questions[] = [
  {
    id: 1,
    label: 'Когда доставят заказ?',
    count: 368,
    badge: null,
    marks: []
  },
  {
    id: 2,
    label: 'Почему не начислены бонусы в день рождения?',
    count: 240,
    badge: 'marketing',
    isHidden: true,
    marks: ['marketing']
  },
  {
    id: 3,
    label: 'Прошу отменить заказ',
    count: 200,
    badge: 'logists',
    marks: ['logists']
  },
  {
    id: 4,
    label: 'Есть ли в наличии матрасы моего размера?',
    count: 143,
    badge: null,
    marks: []
  },
  {
    id: 5,
    label: 'Когда будет доставлен матрас?',
    count: 115,
    badge: 'call',
    marks: ['call']
  },
  {
    id: 6,
    label: 'Прошла оплата моего заказа?',
    count: 110,
    badge: 'call',
    isHidden: true,
    marks: ['call']
  },
  {
    id: 7,
    label: 'Как мне списать бонусы для моего заказа?',
    count: 98,
    badge: null,
    marks: []
  },
  {
    id: 8,
    label: 'Не проходит оплата!',
    count: 81,
    badge: 'marketing',
    marks: ['marketing']
  },

];

const MARKS: SelectOption[] = [
  {
    value: 'logists',
    label: 'Логисты'
  },
  {
    value: 'marketing',
    label: 'Маркетинг'
  },
  {
    value: 'call',
    label: 'Колл-центр'
  }

];

export {
  MARKS,
  LIST_MOCK,
  FILTER_VARIANTS,
};