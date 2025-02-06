import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CareerDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = await createClient();
  const { data: career } = await supabase
    .from("careers")
    .select()
    .eq("career_id", id)
    .single();

  if (!career) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link href="/main">
          <Button variant="outline">← Back to Careers</Button>
        </Link>
      </div>
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{career.title}</h1>
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Why Choose This Career?</h2>
          <p className="text-muted-foreground">{career.why}</p>
        </div>
        <div className="prose prose-sm max-w-none">
          <h2 className="text-xl font-semibold mb-4">Detailed Roadmap</h2>
          <div className="whitespace-pre-wrap">{career.description}</div>
        </div>
      </div>
    </div>
  );
}