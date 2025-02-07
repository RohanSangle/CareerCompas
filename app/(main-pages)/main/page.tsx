import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CareerCard from "@/components/CareerCard";

export default async function MainPage() {
    const supabase = await createClient();

      const { data: { user }} = await supabase.auth.getUser();

      if (!user) {
      return redirect("/sign-in");
    }

    const { data: careers } = await supabase
      .from('careers')
      .select('career_id, title, why');

  return (
    <div className="flex-1 w-full flex flex-col gap-12 p-4 md:p-8">
      <div>
        <h1 className="text-3xl font-bold mb-8">Recommended Careers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers?.map((career) => (
            <CareerCard
              key={career.career_id}
              id={career.career_id}
              title={career.title}
              why={career.why}
            />
          ))}
        </div>
      </div>
    </div>

  );
}
