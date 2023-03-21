import { createClient } from '@supabase/supabase-js'

import { PROJECT_API_KEY_SUPABASE, PROJECT_URL_SUPABASE } from '../config'

export const supabase = createClient(PROJECT_URL_SUPABASE, PROJECT_API_KEY_SUPABASE)
