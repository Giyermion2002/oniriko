export interface NavbarLink {
  to: string;
  label: string;
}

export interface AppPage {
  element: React.ReactNode;
  navbarLink: NavbarLink;
}