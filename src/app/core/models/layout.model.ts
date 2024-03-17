export interface DropdownOption {
  name: string;
  path: string;
}

export interface DropdownSection {
  name: string;
  options: DropdownOption[];
}

export interface Tab {
  name: string;
  identifier: string;
}
