export interface Store {
  home: Home;
  router: any;
}
export interface Home {
  category: string;
  sliders: string[];
}
export interface Lessons {
  list: any[];
  hasMore: boolean;
  offset: number;
  limit: number;
  loading: boolean;
}
export interface Home {
  category: string;
  sliders: string[];
  lessons: Lessons;
}
