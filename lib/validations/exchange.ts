import { z } from "zod"


export const createExchangeApiSchema = z.object({
  exchange: z.string(),
  api: z.string(),
  secret: z.string(),
  passphrase: z.string().optional(),
  description: z.string().optional(),
})

export type CreateExchangeApiSchema = z.infer<typeof createExchangeApiSchema>


