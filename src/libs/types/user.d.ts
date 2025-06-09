import { Equal } from "./valid";
import { users } from "../prisma";

export type User = Equal<
  users,
  {
    email: string;
    name: string;
    password: string | null;
    id: number;
    email_verified: boolean;
    signature: string | null;
    role: string;
    oauth: string | null;
    oauth_id: string | null;
  }
>;
