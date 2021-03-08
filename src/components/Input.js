import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

const Input = ({ trackIP }) => {
    const [Address, setAddress] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!Address) {
            alert("Please enter Ip Address");
            console.log(Address);
            return;
        }
        trackIP(Address);
        setAddress("");
    };
    return (
        <Container
            className="justify-content-center themed-container d-flex flex-column"
            fluid="md"
        >
            <Form className="ip-form form-group" onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Search for any IP address or domain"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Input;
