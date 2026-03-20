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
  price: string;
  favourite?: boolean;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}