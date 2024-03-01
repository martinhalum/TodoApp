export type UserData = {
  id?: string;
  email: string;
  password: string;
};

export type UserStoreState = {
  user: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  createUser: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  initialize: () => Promise<void>;
};
