export interface NavbarLink {
  to: string;
  label: string;
}

export interface AppPage {
  element: React.ReactNode;
  navbarLink: NavbarLink;
}

export type AllergenTag = 'VE' | 'VG' | 'GF' | 'SA';

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  favourite?: boolean;
  hasPhoto?: boolean;
  allergens?: AllergenTag[];
}

export interface MenuCategory {
  name: string;
  price?: string;
  description?: string;
  items: MenuItem[];
}