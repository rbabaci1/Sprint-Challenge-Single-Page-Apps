import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CharacterCard({ character }) {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={character.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <h1>{character.name}</h1>
          </CardTitle>
          <CardSubtitle>
            <span>Status: </span>
            <p>{character.status}</p>
          </CardSubtitle>
          <CardSubtitle>
            <span>Gender: </span>
            <p>{character.gender}</p>
          </CardSubtitle>
          <CardSubtitle>
            <span>Number of episodes: </span>
            <p>{character.episode.length}</p>
          </CardSubtitle>

          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
}
