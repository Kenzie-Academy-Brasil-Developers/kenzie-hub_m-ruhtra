import { z } from "zod";

const editTechFormSchema = z.object(
  {
    status: z.string().min(1, "O status é obrigatório."),
  }
);

export { editTechFormSchema };
