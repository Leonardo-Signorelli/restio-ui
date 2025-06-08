export interface ListProps {
  id?: string;
  options: DataCellOption[];
  displayMode?: DisplayMode;
  ref?: React.Ref<HTMLElement | null>;
  showFilter?: boolean;
  selectedIndex?: number;
  activeIndex?: string[];
  width?: number;
  onClick?: (option: DataCellOption) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}
