export interface Result {
  id: number;
  name: string;
}

export interface SearchModel {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface SelectOption {
  value: string;
  view: string;
}
