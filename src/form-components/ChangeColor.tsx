import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS: string[] = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [selectColor, setSelectColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectColor(event.target.value);
    }
    return (
        <div>
            {
                //<h3>Change Color</h3>
            }
            <div>
                <Form.Group controlId="ColorOptions">
                    <Form.Label>Change Color</Form.Label>
                    {COLORS.map((option: string, index) => (
                        <div key={index}>
                            <Form.Check
                                inline
                                type="radio"
                                value={option}
                                checked={selectColor === option}
                                onChange={updateColor}
                            />
                            <Form.Label
                                style={{
                                    backgroundColor: option
                                }}
                            >
                                {option}
                            </Form.Label>
                        </div>
                    ))}
                </Form.Group>
            </div>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: selectColor }}
            >
                Your choice is {selectColor}
            </div>
        </div>
    );
}
