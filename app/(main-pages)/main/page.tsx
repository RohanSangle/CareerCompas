// import React from 'react'
import { createClient } from "@/utils/supabase/server";
// import { InfoIcon } from "lucide-react";
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
    // <div className="flex-1 w-full flex flex-col gap-12">
    //   <div className="w-full">
    //     <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
    //       <InfoIcon size="16" strokeWidth={2} />
    //       This is a protected page that you can only see as an authenticated
    //       user
    //     </div>
    //   </div>
    //   {/* <div className="flex flex-col gap-2 items-start">
    //     <h2 className="font-bold text-2xl mb-4">Your user details</h2>
    //     <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
    //       {JSON.stringify(user, null, 2)}
    //     </pre>
    //   </div> */}
    //   {/* <div>
    //     <h2 className="font-bold text-2xl mb-4">Next steps</h2>
    //     <FetchDataSteps />
    //   </div> */}
    // </div>
    <div className="flex-1 w-full flex flex-col gap-12 p-4 md:p-8">
      <div>
        <h1 className="text-3xl font-bold mb-8">Explore Careers</h1>
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
