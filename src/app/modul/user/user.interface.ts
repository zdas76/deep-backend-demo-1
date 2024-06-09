export type TUser = {
  id: string;
  password: string;
  needsPasswordCheck: boolean;
  role: "admin" | "student" | "faculty";
  status: "in-progrees" | "blocked";
  isDeleted: boolean;
};
