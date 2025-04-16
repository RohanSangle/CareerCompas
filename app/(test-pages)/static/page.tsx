import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Questionnaire from "@/components/Questionnaire";

export default async function StaticTestPage({ searchParams }: { searchParams: { category?: string } }) {
  const supabase = await createClient();

  // Get the authenticated user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }

  //start
  const categoryParam = searchParams.category;
  const SelectedCategory = categoryParam === "10" ? 10 : categoryParam === "12" ? 12 : null;

  if (!SelectedCategory) {
    return redirect("/categoryselection"); // Redirect back if no valid category
  }

  const categoryString = SelectedCategory === 10 ? "10th" : "12th";
  //end


//   console.log("Authenticated user:", user.id);

  // Fetch all questions from the "questions" table, ordered by question_id
  const { data: questions, error } = await supabase
    .from("questions")
    .select("*")
    .eq('category', categoryString)
    .order("question_id");

  if (error) {
    console.error("Error fetching questions:", error);
    return <div>Error loading questions</div>;
  }

  // Pass questions and user ID to the Questionnaire component
  return <Questionnaire questions={questions} userId={user.id} selectedCategory={SelectedCategory} />;
}