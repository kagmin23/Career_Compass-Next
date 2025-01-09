export interface Login {
  email: string;
  password: string;
  role: "user" | "admin";
}

export interface Register {
  id: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
