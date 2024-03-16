export interface DropdownOption {
  name: string;
  path: string;
}

export interface DropdownSection {
  name: string;
  options: DropdownOption[];
}
