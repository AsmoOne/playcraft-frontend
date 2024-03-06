import { About } from "../pages/About";
import { Commands } from "../pages/Commands";
import { FAQ } from "../pages/FAQ";
import { Landing } from "../pages/Landing";
import { Rules } from "../pages/Rules";
import { Start } from "../pages/Start";
import { Premium } from "../pages/Premium";
import { Legends } from "../pages/Legends";
import { Screenshots } from "../pages/Screenshots";

import { Path } from "./enums";
import { Personal } from "../pages/Personal";

export const routes = [
  { path: Path.Home, element: <Landing /> },
  { path: Path.Start, element: <Start /> },
  { path: Path.Rules, element: <Rules /> },
  { path: Path.Commands, element: <Commands /> },
  { path: Path.About, element: <About /> },
  { path: Path.FAQ, element: <FAQ /> },
  { path: Path.Premium, element: <Premium /> },
  { path: Path.Legends, element: <Legends /> },
  { path: Path.Screenshots, element: <Screenshots /> },
  { path: Path.Personal, element: <Personal /> },
];

export const titles = {
  [Path.Home]: 'Глобальне оновлення',
  [Path.Start]: 'Як почати грати?',
  [Path.Rules]: 'Правила',
  [Path.Commands]: 'Команди',
  [Path.About]: 'Про нас',
  [Path.FAQ]: 'FAQ',
  [Path.Premium]: 'Преміум',
  [Path.Legends]: 'Легенди серверу',
  [Path.Screenshots]: 'Кращі роботи',
  [Path.Personal]: 'Особистий кабінет',
}

export const links = [
  {
    id: 1,
    name: 'Інформація',
    dropdownItems: [
      {
        id: 1,
        name: 'Правила',
        path: Path.Rules,
      },
      {
        id: 2,
        name: 'Команди',
        path: Path.Commands,
      },
      {
        id: 3,
        name: 'Скарги',
        path: Path.Complaints,
      },
      {
        id: 4,
        name: 'FAQ',
        path: Path.FAQ,
      },
      {
        id: 5,
        name: 'Про нас',
        path: Path.About,
      },
      {
        id: 6,
        name: 'Історія проекту',
        path: Path.History,
      },
      {
        id: 7,
        name: 'Лог покарань',
        path: Path.PenaltyLog,
      },
      {
        id: 8,
        name: 'Легенди серверу',
        path: Path.Legends,
      },
      {
        id: 9,
        name: 'Реферальна програма',
        path: Path.ReferalProgram,
      },
      {
        id: 10,
        name: 'Скріншоти',
        path: Path.Screenshots,
      },
    ]
  },
  {
    id: 2,
    name: 'Магазин',
    dropdownItems: [
      {
        id: 1,
        name: 'Донат',
        path: Path.Donate,
      },
      {
        id: 2,
        name: 'Преміум',
        path: Path.Premium,
      },
      {
        id: 3,
        name: 'Скрині',
        path: Path.ChestShop,
      },
      {
        id: 4,
        name: 'РСМ',
        path: Path.PCM,
      }
    ]
  },
  {
    id: 3,
    name: 'Мапа',
    dropdownItems: [
      {
        id: 1,
        name: 'Мапа',
        path: Path.Map,
      }
    ]
  },
];
