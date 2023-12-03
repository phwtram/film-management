import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext.js";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row, Button } from "react-materialize";
import { CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import './Films.css'

export default function FilmsPresentation({ films }) {
  const { theme, toggle, dark } = useContext(ThemeContext);
  console.log(films);
  return (
    <Container>
      <Row style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "-15px",
        marginRight: "-15px",
      }}>
        {films.map((film) => (
          <Col l={4} m={6} s={12}>
            <Card style={{ backgroundColor: theme.backgroundColor}}>
              <CardMedia
                component="img"
                height="450px"
                image={film.img}
                alt="ERROR"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h5"
                style={{color: 'rgb(88 131 184)', fontWeight:'bold',fontSize: "20px"}}>
                  {film.title}
                </Typography>

                <Typography variant="body2" color="text.secondary"
                style={{color: theme.color, fontWeight:'bold',fontSize: "15px"}}>
                Release date: {film.year}
                </Typography>

                <Typography variant="body2" color="text.secondary"
                style={{color: theme.color, fontWeight:'bold',fontSize: "15px"}}>
                  Nation: {film.nation}
                </Typography>
              </CardContent>

              <CardActions style ={{
                padding: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Button style={{ 
                  backgroundColor: theme.backgroundColor1,
                   }}>
                  <Link to={`detail/${film.id}`} className="customLinkColor" style={{color: theme.color1}} >Detail</Link>
                </Button>
              </CardActions>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

