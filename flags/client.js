import { createUseFlags } from "@happykit/flags/client";
import { createUseFlagBag } from "@happykit/flags/context";
import { config } from "./config";

export const useFlags = createUseFlags(config);
export const useFlagBag = createUseFlagBag();
