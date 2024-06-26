import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
