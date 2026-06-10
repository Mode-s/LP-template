import type { ImageMetadata } from 'astro';

export type Sns = { label: string; href: string; icon: string };

export type Headerdata = {
  logo: { src: string; href: string; alt: string };
  nav: { label: string; href: string }[];
}

export type AboutData = {
  title: string;
  lead?: string;
  body: string;
  image?: ImageMetadata;
};

export type MenuItem = { image: ImageMetadata; name: string; price?: string; description?: string };
export type MenuData = {
  title: string;
  items: MenuItem[];
};