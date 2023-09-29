import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz(): void {
        {
            setProgress(true);
            setAttempts(attempts - 1);
        }
    }
    function stopQuiz(): void {
        {
            setProgress(false);
        }
    }
    function addAttempts(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempts} disabled={progress}>
                Mulligan
            </Button>
            Current Attempts: {attempts}
        </div>
    );
}
