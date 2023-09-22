export interface APIPreview {
  name: string;
  url: string;
}

export interface APIResultsPreview {
  count: number;
  next: string | null;
  previous: string | null;
  results: APIPreview[];
}
