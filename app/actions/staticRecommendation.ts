"use server";

import { createClient } from "@/utils/supabase/server"; // Adjust based on your Supabase setup
import { redirect } from "next/navigation";

// Function to calculate Euclidean distance between two arrays
function calculateEuclideanDistance(userScores: number[], idealScores: number[]): number {
  if (userScores.length !== idealScores.length) {
    throw new Error("Score arrays must have the same length");
  }
  const sumOfSquares = userScores.reduce((sum, score, index) => {
    return sum + Math.pow(score - idealScores[index], 2);
  }, 0);
  return Math.sqrt(sumOfSquares);
}

// Main handler for questionnaire submission
export async function staticRecommendation(userId: string) {
  const supabase = await createClient();

  // 1. Fetch the latest user response from staticresponses
  const { data: userResponse, error: responseError } = await supabase
    .from("staticresponses")
    .select("question_ids, selected_options")
    .eq("user_id", userId)
    .order("timestamp", { ascending: false })
    .limit(1)
    .single();

  if (responseError || !userResponse) {
    console.error("Error fetching user response:", responseError?.message);
    throw new Error("Could not fetch user response");
  }

  const userQuestionIds = userResponse.question_ids;
  const userScores = userResponse.selected_options;

  // 2. Fetch all career ideal scores from careeridealscores
  const { data: careerIdealScores, error: careerError } = await supabase
    .from("careeridealscores")
    .select("career_id, question_ids, ideal_scores");

  if (careerError || !careerIdealScores) {
    console.error("Error fetching career ideal scores:", careerError?.message);
    throw new Error("Could not fetch career ideal scores");
  }

  // 3. Calculate Euclidean distances for each career
  const distances: { career_id: number; distance: number }[] = careerIdealScores.map((career) => {
    // Assume question_ids are in the same order; if not, you'd need to map scores
    if (JSON.stringify(career.question_ids) !== JSON.stringify(userQuestionIds)) {
      throw new Error("Question IDs do not match between user responses and ideal scores");
    }
    const distance = calculateEuclideanDistance(userScores, career.ideal_scores);
    return { career_id: career.career_id, distance };
  });

  // 4. Calculate the average distance
  const totalDistance = distances.reduce((sum, item) => sum + item.distance, 0);
  const averageDistance = totalDistance / distances.length;

  // 5. Shortlist careers where distance <= averageDistance
  const shortlistedCareerIds = distances
    .filter((item) => item.distance <= averageDistance)
    .map((item) => item.career_id);

  // 6. Store the shortlisted careers in careerrecommendation
  const { error: insertError } = await supabase.from("careerrecommendation").insert({
    user_id: userId,
    career_ids: shortlistedCareerIds,
    timestamp: new Date().toISOString(),
  });

  if (insertError) {
    console.error("Error storing recommendations:", insertError.message);
    throw new Error("Could not store career recommendations");
  }

  // 7. Redirect to the main page
  redirect("/main");
}