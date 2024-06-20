/** @format */

import { createClient } from "@supabase/supabase-js";

/** @format */
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
