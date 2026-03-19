export default function SubscribersPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Subscribers</h1>
      <div className="border border-dashed border-muted rounded-md py-12 text-center bg-muted/25">
        <h2 className="text-lg font-semibold mb-2">No Subscribers Added</h2>
        <p className="text-muted-foreground mb-5">
          Import or add subscribers to grow your audience.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-background rounded-md px-4 py-2 font-medium hover:bg-primary/90 transition"
        >
          Add Subscribers
        </a>
      </div>
    </section>
  );
}