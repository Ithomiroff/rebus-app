import { FilterVariant, Questions } from "./types";

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
  }
];

const LIST_MOCK: Questions[] = [
  {
    id: 1,
    label: 'Когда доставят заказ?',
    count: 368,
    badge: null,
  },
  {
    id: 2,
    label: 'Почему не начислены бонусы в день рождения?',
    count: 240,
    badge: 'marketing',
  },
  {
    id: 3,
    label: 'Прошу отменить заказ',
    count: 200,
    badge: 'logists',
  },
  {
    id: 4,
    label: 'Есть ли в наличии матрасы моего размера?',
    count: 143,
    badge: null,
  },
  {
    id: 5,
    label: 'Когда будет доставлен матрас?',
    count: 115,
    badge: 'call',
  },
  {
    id: 6,
    label: 'Прошла оплата моего заказа?',
    count: 110,
    badge: 'call',
  },
  {
    id: 7,
    label: 'Как мне списать бонусы для моего заказа?',
    count: 98,
    badge: null,
  },
  {
    id: 8,
    label: 'Не проходит оплата!',
    count: 81,
    badge: 'marketing',
  },

];

export {
  LIST_MOCK,
  FILTER_VARIANTS,
};