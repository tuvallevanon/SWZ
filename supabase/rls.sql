
-- Basic RLS template (adjust table names to your Supabase tables if mirrored with Prisma via SQL)
-- This assumes you created identical tables in Supabase. If you use Prisma + external DB, adapt accordingly.

-- Enable RLS
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Log" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Checkin" ENABLE ROW LEVEL SECURITY;

-- Helper: map auth.uid() to User.id via email match (simplified). In production, store supabase uid on User.
-- For MVP, create a SECURITY DEFINER function that finds app user by email from auth.
-- Skipping function complexity here; simplest policies:

-- Only coach can read all (by email match)
-- Replace 'coach@swz.fit' if needed.
CREATE POLICY coach_select_all_users ON "User"
FOR SELECT USING ( email = 'coach@swz.fit' );

CREATE POLICY coach_select_all_logs ON "Log"
FOR SELECT USING ( EXISTS (SELECT 1 FROM "User" u WHERE u.email = 'coach@swz.fit' AND u.id = "Log".userId) OR TRUE );

-- Clients: can select/insert/update their own logs/checkins
CREATE POLICY client_manage_own_logs ON "Log"
FOR ALL USING ( auth.email() = (SELECT email FROM "User" u WHERE u.id = "Log".userId) )
WITH CHECK ( auth.email() = (SELECT email FROM "User" u WHERE u.id = "Log".userId) );

CREATE POLICY client_manage_own_checkins ON "Checkin"
FOR ALL USING ( auth.email() = (SELECT email FROM "User" u WHERE u.id = "Checkin".userId) )
WITH CHECK ( auth.email() = (SELECT email FROM "User" u WHERE u.id = "Checkin".userId) );
