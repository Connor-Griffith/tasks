import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<number>(0);

    const useAttempts = () => {
        setAttempts((newAttempt) => newAttempt - 1);
    };

    const gainAttempts = () => {
        setAttempts((newAttempt) => newAttempt + reqAttempts);
    };

    return (
        <div>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setReqAttempts(parseInt(e.target.value));
                    }}
                />
            </Form.Group>
            <Button onClick={useAttempts} disabled={attempts === 0}>
                Use Attempt
            </Button>
            <Button onClick={gainAttempts}>Gain Attempt</Button>
            <div>Remaining Attempts: {attempts}</div>
        </div>
    );
}
