export interface User {
  id: string;
  name: string;
  password: string;
}

export const DUMMY_USER: User = {
  id: "1",
  name: "John Doe",
  password: "password",
};
