import { object, string, InferType } from "yup";

export const newUserSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
});

export type NewUser = InferType<typeof newUserSchema>;
