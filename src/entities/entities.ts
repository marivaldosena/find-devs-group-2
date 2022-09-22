export interface ICategory {
  id: number;
  name: string;
}

export interface IState {
  id: number;
  value: string;
}

export interface IStack {
  id: number;
  label: string;
}

export interface IDeveloper {
  id: number;
  photo: string;
  name: string;
  category: string;
  stack: string;
  state: string,
  description: string;
}
