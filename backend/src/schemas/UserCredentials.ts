import { object, string, InferType } from "yup";

export const userCredentialsSchema = object({
  email: string().email().required(),
});

export type UserCredentials = InferType<typeof userCredentialsSchema>;
