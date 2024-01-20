import { router } from "./trpc";
import { gourmetRouter } from "./trpc/gourmet";

export const appRouter = router({
  ...gourmetRouter,
});

export type AppRouter = typeof appRouter;
