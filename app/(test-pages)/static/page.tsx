import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Questionnaire from "@/components/Questionnaire";

export default async function StaticTestPage() {
  const supabase = await createClient();

  // Get the authenticated user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }
//   console.log("Authenticated user:", user.id);

  // Fetch all questions from the "questions" table, ordered by question_id
  const { data: questions, error } = await supabase
    .from("questions")
    .select("*")
    .eq('category', '10th')
    .order("question_id");

  if (error) {
    console.error("Error fetching questions:", error);
    return <div>Error loading questions</div>;
  }

  // Pass questions and user ID to the Questionnaire component
  return <Questionnaire questions={questions} userId={user.id} />;
}