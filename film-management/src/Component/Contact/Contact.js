import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext.js";
import { Container,Button,Icon,TextInput, Select,Textarea,Row,Col,} from "react-materialize";
import './Contact.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <Container>
      <Row>
        <Col>
          <h3 style={
                {color: theme.color}}>Contact us</h3>
          <form onSubmit={handleSubmit}
          >
            <TextInput 
              l={12}
              m={12}
              s={12}
              id="Text Input-38"
              label="Your Name"
            />
            <TextInput 
              l={12}
              m={12}
              s={12}
              id="Text Input-39"
              label="Your Phone"
            />
            <TextInput
              l={12}
              m={12}
              s={12}
              email
              id="Text Input-41"
              label="Email"
              validate
            />
            <Select 
                l={12}
                m={12}
                s={12}
              id="Select-46"
              multiple={false}
              onChange={function noRefCheck() {}}
              value=""
            >
              <option disabled value="">
                Choose your favorite movie
              </option>

              <option value="1">Romantic</option>

              <option value="2">Horror</option>

              <option value="3">Action</option>

              <option value="4">Science Fiction</option>
            </Select>
            <Textarea
              l={12}
              s={12}
              icon={<Icon style={
                {color: theme.color}}>mode_edit</Icon>}
              id="Textarea-28"
              label="Your content"
            />
            <br></br>
            <Button style={{
               backgroundColor: theme.backgroundColor,
               color: theme.color
            }}
              l={12}
              s={12}>
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
