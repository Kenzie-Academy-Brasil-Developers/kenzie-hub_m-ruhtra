import { z } from "zod";

const registerFormSchema = z
  .object(
    {
      name: z.string().min(1, "O nome é obrigatório."),
      email: z.string().email("Forneça um email válido.").min(1, "O email é obrigatório."),
      password: z
        .string()
        .min(8, "Necessário pelo menos 8 caracteres.")
        .regex(/[a-z]+/, "Necessário pelo menos uma letra minúscula.")
        .regex(/[A-Z]+/, "Necessário pelo menos uma letra maiúscula.")
        .regex(/[0-9]+/, "Necessário pelo menos um número."),
      confirmPassword: z.string().min(1, "Confirmar a senha é obrigatório."),
      bio: z.string().min(1, "A bio é obrigatória."),
      contact: z.string().min(1, "O contato é obrigatório."),
      course_module: z.string().min(1, "O módulo é obrigatório."),
    }
  )
  .refine(({ password, confirmPassword }) => password === confirmPassword,
    {
      message: "As senhas não correspondem.",
      path: ["confirmPassword"],
    }
  );

export { registerFormSchema };
