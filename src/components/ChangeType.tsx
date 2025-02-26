import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipVisibility(): void {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Change Type</Button>
            {questionType === "short_answer_question" && (
                <div> Short Answer </div>
            )}
            {questionType === "multiple_choice_question" && (
                <div> Multiple Choice </div>
            )}
        </div>
    );
}
