import { z } from "zod";

const createTechFormSchema = z.object(
  {
    title: z.string().min(1, "O título é obritatório."),
    status: z.string().min(1, "O status é obrigatório."),
  }
);

export { createTechFormSchema };
