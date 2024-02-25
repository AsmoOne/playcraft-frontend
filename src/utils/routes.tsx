import { About } from "../pages/About";
import { Commands } from "../pages/Commands";
import { Empty } from "../pages/Empty";
import { Landing } from "../pages/Landing";
import { Rules } from "../pages/Rules";

import { Path } from "./enums";

export const routes = [
  { path: Path.Home, element: <Landing /> },
  { path: Path.Rules, element: <Rules /> },
  { path: Path.Commands, element: <Commands /> },
  { path: Path.About, element: <About /> },
  { path: Path.NotFound, element: <Empty /> },
];

export const titles = {
  [Path.Home]: 'Глобальне оновлення',
  [Path.Rules]: 'Правила',
  [Path.Commands]: 'Команди',
  [Path.About]: 'Про нас',
}
