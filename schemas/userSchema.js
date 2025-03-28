const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(5, {message: "Must be at least 5 characters"}).max(15, {message: "Must be at most 15 characters"}),
  username: z.string().min(5, {message: "Must be at least 5 characters"}).max(15, {message: "Must be at most 15 characters"}).regex(/^[a-zA-Z0-9_]+$/, {message: "Username must contain only letters, numbers, and underscores"}),
  password: z.string().min(8, {message: "Must be at least 8 characters"}).max(20, { message: "Must be at most 20 characters" }),
});

module.exports = userSchema;