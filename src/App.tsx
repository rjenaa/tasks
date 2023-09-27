import React from "react";
import "./App.css";
import PSV from "../src/PSV.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. Hello World.
            </header>
            <h1>This is header text.</h1>
            <img src={PSV} alt="Best Club in the World." />
            <div>
                PSV will win the league this year because:
                <ol>
                    <li>They brought back Lozano.</li>
                    <li>Tillman and Pepi off the bench.</li>
                    <li>Best forwards in the league.</li>
                </ol>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="rectangle"></div>
                        </Col>
                        <Col>
                            <div className="rectangle"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    {" "}
                    Log Hello World{" "}
                </Button>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.Ray Escobar
            </p>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
