export interface NavbarLink {
  to: string;
  label: string;
}

export interface AppPage {
  element: React.ReactNode;
  navbarLink: NavbarLink;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  favourite?: boolean
}