import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeQuestion(): void {
        setQuestion((prevQuestion) =>
            prevQuestion === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            <Button onClick={changeQuestion}>Change Type</Button>
            {question === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </div>
    );
}
