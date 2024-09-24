import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [firstDice, setFirstDice] = useState<number>(2);
    const [secondDice, setSecondDice] = useState<number>(3);

    function changeFirst(): void {
        setFirstDice(d6());
    }
    function changeSecond(): void {
        setSecondDice(d6());
    }
    return (
        <span>
            <Button onClick={changeFirst}>Roll Left</Button>
            <span data-testid="left-die">{firstDice}</span>
            <Button onClick={changeSecond}>Roll Right</Button>
            <span data-testid="right-die">{secondDice}</span>

            {firstDice === secondDice && firstDice === 1 ?
                <div>Lose</div>
            : firstDice === secondDice && firstDice !== 1 ?
                <div>Win</div>
            :   <div>Roll Agian</div>}
        </span>
    );
}
