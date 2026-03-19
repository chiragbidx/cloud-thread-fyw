import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "@/app/dashboard/client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const [user] = await db
    .select({ firstName: users.firstName })
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);

  const firstName = user?.firstName || "there";

  return (
    <section>
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Welcome to SendPilot</h1>
        <p className="mt-2 text-muted-foreground text-lg">
          Plan, launch, and track email campaigns with ease.
        </p>
        <div className="mt-6">
          <a
            href="/dashboard/campaigns/new"
            className="inline-block bg-primary text-background rounded-md px-5 py-2 font-medium shadow hover:bg-primary/90 transition text-base"
          >
            Create Your First Campaign
          </a>
        </div>
      </div>
      <Client greeting="" firstName={firstName} />
    </section>
  );
}