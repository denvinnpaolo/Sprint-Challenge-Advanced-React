import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function UserCard(props){
    console.log(props)
    return(
      <div className="card">
      <Card className="cardsearch">
      <Card.Content>
        <h1>{props.person.name}</h1>
        <p>Country: {props.person.country}</p>
      </Card.Content>
      <Card.Content>
        <a>
            <p>
                <Icon name='find' />
                Searches: {props.person.searches}
            </p>
        </a>
      </Card.Content>
    </Card>
    </div>
    )
}

export default UserCard;