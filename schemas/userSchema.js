const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(5).max(15),
  username: z.string().min(5).max(15).regex(/^[a-zA-Z0-9_]+$/),
  password: z.string().min(8).max(20),
});

module.exports = userSchema;