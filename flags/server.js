import { createGetFlags } from "@happykit/flags/server";
import { config } from "./config";

export const getFlags = createGetFlags(config);
