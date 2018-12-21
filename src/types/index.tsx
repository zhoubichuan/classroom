export interface Store {
  home: Home;
  router: any;
  session: Session;
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

export interface Session {
  error: any;
  success: any;
  user: any;
}
