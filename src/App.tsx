import React from "react";
import "./App.css";
import { Button, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Connor Griffith
            </header>
            <h1>New Header</h1>
            <div>
                <Container>
                    <Row>
                        <Col
                            style={{
                                height: 200,
                                width: 150,
                                backgroundColor: "red",
                            }}
                        ></Col>
                        <Col
                            styl={{
                                height: 200,
                                width: 150,
                                backgroundColor: "red",
                            }}
                        ></Col>
                        <Col
                            styl={{
                                height: 200,
                                width: 150,
                                backgroundColor: "red",
                            }}
                        ></Col>
                    </Row>
                </Container>
            </div>
            <ol>
                <li>First thing</li>
                <li>Next thing</li>
                <li>Last thing</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World
            </Button>
            <img
                src="https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU.jpg"
                alt="A picture of a dog"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}

export default App;
