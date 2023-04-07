export interface MinutesSpaceType {
  error: null;
  list: Minutes[];
}

export interface Minutes {
  id: number;
  title: string;
  contents: string;
}

export interface MinutesDetailType {
  error: {
    code: number;
    reason: string;
  };
  list: {
    contents: string;
    id: number;
    title: string;
  }[];
}

export interface MinutesType {
  id: number;
  title: string;
  contents: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPostMinute {
  title: string;
  contents: string;
}
