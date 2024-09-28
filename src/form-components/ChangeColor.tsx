import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    const colors = [
        { id: "red" },
        { id: "blue" },
        { id: "green" },
        { id: "purple" },
        { id: "orange" },
        { id: "yellow" },
        { id: "white" },
        { id: "black" },
    ];
    return (
        <div>
            {colors.map((colorList) => (
                <Form.Check
                    inline
                    key={colorList.id}
                    type="radio"
                    name="Colors"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(e.target.value);
                    }}
                    id={"color-check-${colorList.id}"}
                    label={
                        <span
                            style={{
                                backgroundColor:
                                    color === colorList.id ?
                                        colorList.id
                                    :   "transparent",
                                color:
                                    (
                                        color === colorList.id &&
                                        colorList.id === "black"
                                    ) ?
                                        "white"
                                    :   "black",
                                padding: "1px 1px",
                            }}
                        >
                            {colorList.id}
                        </span>
                    }
                    value={colorList.id}
                    checked={color === colorList.id}
                />
            ))}
            <div>
                You have picked the color{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                        color: color === "black" ? "white" : "black",
                        padding: "1px 1px",
                    }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
