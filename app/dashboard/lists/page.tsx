export default function ListsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Lists</h1>
      <div className="border border-dashed border-muted rounded-md py-12 text-center bg-muted/25">
        <h2 className="text-lg font-semibold mb-2">You haven't created any lists yet.</h2>
        <p className="text-muted-foreground mb-5">
          Organize your contacts for targeted campaigns.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-background rounded-md px-4 py-2 font-medium hover:bg-primary/90 transition"
        >
          New List
        </a>
      </div>
    </section>
  );
}