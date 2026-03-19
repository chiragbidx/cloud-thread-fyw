export default function CampaignsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Email Campaigns</h1>
      <div className="border border-dashed border-muted rounded-md py-12 text-center bg-muted/25">
        <h2 className="text-lg font-semibold mb-2">No Campaigns Yet</h2>
        <p className="text-muted-foreground mb-5">Start by creating your first email campaign.</p>
        <a
          href="/dashboard/campaigns/new"
          className="inline-block bg-primary text-background rounded-md px-4 py-2 font-medium hover:bg-primary/90 transition"
        >
          New Campaign
        </a>
      </div>
    </section>
  );
}