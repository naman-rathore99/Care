import { z } from "zod";

export const userFormValdiation = z.object({
    username: z.string()
        .min(2, "username must be at least of 2 charactor ")
        .max(50, "username must be at least of 2 charactor "),
    email: z.string().email("invalid Email"),
    phone: z.string().refine((phone) => /^\+?[1-9]\d{1,14}$/.test(phone), 'invalid phone number ')
})

