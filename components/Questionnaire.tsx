"use client";

import { useState, useTransition } from "react";
import { createClient } from "@/utils/supabase/client";
import { staticRecommendation } from "@/app/actions/staticRecommendation";

// Define the Question type
interface Question {
    question_id: number;
    question_text: string;
    option_text: string[];
    category?: string;
}

// Define props type
interface QuestionnaireProps {
    questions: Question[];
    userId: string;
}


const Questionnaire = ({ questions, userId }: QuestionnaireProps) => {
  // State for current page and selected options
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [isPending, startTransition] = useTransition();

  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Get the questions for the current page
  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  // Handle option selection
  const handleOptionChange = (questionIndex: number, optionIndex: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex + 1; // Options numbered from 1
    setSelectedOptions(newSelectedOptions);
  };

  // Navigate to the previous page
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Navigate to the next page
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Submit responses to the staticresponses table
  const handleSubmit = async () => {
    const allAnswered = selectedOptions.every((opt) => opt !== null);
    if (!allAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const supabase = createClient();
    const questionIds = questions.map((q) => q.question_id);
    const selectedOpts = selectedOptions;

    const { data, error } = await supabase.from("staticresponses").insert({
        user_id: userId,
        question_ids: questionIds,
        selected_options: selectedOpts,
        timestamp: new Date().toISOString(),
        });

        if (error) {
        console.error("Error submitting responses:", error);
        alert("Failed to submit responses. Please try again.");
        return;
    }

    console.log("Responses submitted successfully:", data);

    startTransition( async () => {
      // 1. Save responses to staticresponses
    //   const { data, error } = await supabase.from("staticresponses").insert({
    //     user_id: userId,
    //     question_ids: questionIds,
    //     selected_options: selectedOpts,
    //     timestamp: new Date().toISOString(),
    //   });

    //   if (error) {
    //     console.error("Error submitting responses:", error);
    //     alert("Failed to submit responses. Please try again.");
    //     return;
    //   }

    //   console.log("Responses submitted successfully:", data);

      // 2. Calculate recommendations and redirect
      try {
        await staticRecommendation(userId);
        // Note: redirect happens server-side, so this alert won't show unless there's an error
        // alert("Responses submitted and recommendations calculated!");
      } catch (error) {
        console.error("Error calculating recommendations:", error);
        alert("Failed to calculate recommendations. Please try again.");
      }
    });
    // const { data, error } = await supabase.from("staticresponses").insert({
    //   user_id: userId,
    //   question_ids: questionIds,
    //   selected_options: selectedOpts,
    //   timestamp: new Date().toISOString(),
    // });

    // await submitStaticQ(userId);

    // if (error) {
    //   console.error("Error submitting responses:", error);
    //   alert("Failed to submit responses. Please try again.");
    // } else {
    //   console.log("Responses submitted successfully:", data);
    //   alert("Responses submitted successfully!");
    // }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Static Questionnaire</h1>
            {currentQuestions.map((question, index) => {
                const globalIndex = currentPage * questionsPerPage + index;
                const questionNumber = globalIndex + 1;
                return (
                <div key={question.question_id} className="mb-6">
                    <p className="font-semibold mb-2">
                        {questionNumber}. {question.question_text}
                    </p>
                    <div className="space-y-2">
                        {question.option_text.map((option, optIndex) => (
                            <label key={optIndex} className="flex items-center">
                                <input
                                    type="radio"
                                    name={`question-${globalIndex}`}
                                    value={optIndex + 1}
                                    checked={selectedOptions[globalIndex] === optIndex + 1}
                                    onChange={() => handleOptionChange(globalIndex, optIndex)}
                                    className="mr-2"
                                    disabled={isPending}
                                />
                                {/* {optIndex + 1}. {option} */}
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
                );
            })}
            <div className="mt-4 text-center">
                <p className="text-gray-600">
                    {currentPage + 1}/{totalPages}
                </p>
            </div>
            <div className="flex justify-center gap-4">
                {currentPage > 0 && (
                <button
                    onClick={handlePrevious}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    disabled={isPending}
                >
                    Previous
                </button>
                )}
                {currentPage < totalPages - 1 ? (
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    disabled={isPending}
                >
                    Next
                </button>
                ) : (
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    disabled={isPending}
                >
                    {/* Submit*/}
                    {isPending ? "Submitting..." : "Submit"}
                </button>
                )}
            </div>
        </div>
    </div>
  );
};

export default Questionnaire;