/// <reference types="vite-plugin-svgr/client" />

import TelegramIcon from '/public/assets/TelegramIcon.svg?react';
import FacebookIcon from '/public/assets/FacebookIcon.svg?react';
import DiscordIcon from '/public/assets/DiscordIcon.svg?react';
import InstagramIcon from '/public/assets/InstagramIcon.svg?react';
import YouTubeIcon from '/public/assets/YoutubeIcon.svg?react';

export const socials = [
  {
    url: 'https://t.me/playcraftua',
    title: 'Telegram',
    icon: <TelegramIcon />,
  },
  {
    url: 'https://www.facebook.com/playcraftnews',
    title: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    url: 'https://discord.com/invite/dBcwzTE',
    title: 'discord',
    icon: <DiscordIcon />,
  },
  {
    url: 'https://www.instagram.com/playcraftua/',
    title: 'Instagram',
    icon: <InstagramIcon />,
  },
  {
    url: 'https://www.youtube.com/channel/UCiLxatdBOEb2bcf7eiKxuQg',
    title: 'YouTube',
    icon: <YouTubeIcon />,
  }
];
