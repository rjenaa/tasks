import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your name");
    const [isStudent, setSetStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setSetStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editmode-check"
                label="Editmode?"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ? (
                <div>
                    <div>
                        <Form.Group controlId="formEditname">
                            <Form.Label></Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </div>
                </div>
            ) : null}
            <div>
                {!editMode && isStudent && <div>{name} is a student</div>}{" "}
            </div>
            <div>
                {!editMode && !isStudent && <div>{name} is not a student</div>}{" "}
            </div>
        </div>
    );
}
