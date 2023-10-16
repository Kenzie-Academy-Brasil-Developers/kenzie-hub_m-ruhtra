import { z } from "zod";

const loginFormSchema = z.object(
  {
    email: z.string().min(1, "O e-mail é obritatório."),
    password: z.string().min(1, "A senha é obritatória."),
  }
);

export { loginFormSchema };
