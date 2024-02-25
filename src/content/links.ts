import { Path } from "../utils/enums";

export const links: any = {
  'Інформація': {
    rules: {
      title: 'Правила',
      url: Path.Rules,
    },
    teams: {
      title: 'Команди',
      url: Path.Commands,
    },
    complaints: {
      title: 'Скарги',
      url: Path.Complaints,
    },
    faq: {
      title: 'FAQ',
      url: Path.FAQ,
    },
    about: {
      title: 'Про нас',
      url: Path.About,
    },
    history: {
      title: 'Історія проекту',
      url: Path.History,
    },
    log: {
      title: 'Лог покарань',
      url: Path.PenaltyLog,
    },
    legends: {
      title: 'Легенди серверу',
      url: Path.Legends,
    },
    referal: {
      title: 'Реферальна програма',
      url: Path.ReferalProgram,
    },
    screenshots: {
      title: 'Скріншоти',
      url: Path.Screenshots,
    }
  },
  'Магазин': {
    donate: {
      title: 'Донат',
      url: Path.Donate,
    },
    premium: {
      title: 'Преміум',
      url: Path.Premium,
    },
    chests: {
      title: 'Скрині',
      url: Path.ChestShop,
    },
    pcm: {
      title: 'PCM',
      url: Path.PCM,
    },
  },
  'Мапа': {
    map: {
      title: 'Мапа сайту',
      url: Path.Map,
    },
  }
}
