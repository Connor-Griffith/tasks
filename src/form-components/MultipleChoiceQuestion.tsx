import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selected}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelected(e.target.value);
                }}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <p>{selected === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
