import React, { useState } from "react";
import { Button } from "react-bootstrap";
interface holidays {
    current: string;
    alphabet: string;
    year: string;
}

export function CycleHoliday(): JSX.Element {
    const holidayAlphabet: Record<string, string> = {
        "🎁": "🎃",
        "🎃": "🇺🇸",
        "🇺🇸": "🦃",
        "🦃": "🤴",
        "🤴": "🎁"
    };
    const holidayYear: Record<string, string> = {
        "🎁": "🤴",
        "🎃": "🦃",
        "🇺🇸": "🎃",
        "🦃": "🎁",
        "🤴": "🇺🇸"
    };
    function byAlphabet(): void {
        setHoliday(holidayAlphabet[holiday]);
    }
    function byYear(): void {
        setHoliday(holidayYear[holiday]);
    }
    const [holiday, setHoliday] = useState<string>("🎁");

    return (
        <div>
            <Button onClick={byAlphabet}>Advance by Alphabet</Button>
            <Button onClick={byYear}>Advance by Year</Button>
            <div>
                <span data-testid="Holiday">Holiday: {holiday}</span>
            </div>
        </div>
    );
}
