export interface NavbarLink {
  to: string;
  label: string;
}

export interface AppPage {
  element: React.ReactNode;
  navbarLink: NavbarLink;
}

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  favourite?: boolean;
  hasPhoto?: boolean;
}

export interface MenuCategory {
  name: string;
  price?: string;
  description?: string;
  items: MenuItem[];
}