import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holiday = "🎄" | "❤️" | "🎃" | "🦃" | "🎆";

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<holiday>("🎄");

    function changeByYear(): void {
        setCurrentHoliday(
            currentHoliday === "❤️" ? "🎆"
            : currentHoliday === "🎆" ? "🎃"
            : currentHoliday === "🎃" ? "🦃"
            : currentHoliday === "🦃" ? "🎄"
            : "❤️",
        );
    }

    function changeByAlphabet(): void {
        setCurrentHoliday(
            currentHoliday === "🎄" ? "🎆"
            : currentHoliday === "🎆" ? "🎃"
            : currentHoliday === "🎃" ? "🦃"
            : currentHoliday === "🦃" ? "❤️"
            : "🎄",
        );
    }

    return (
        <div>
            <Button onClick={changeByAlphabet}>Cycle by Alphabet</Button>
            <Button onClick={changeByYear}>Cycle by Year</Button>
            <div>Holiday: {currentHoliday}</div>
        </div>
    );
}
