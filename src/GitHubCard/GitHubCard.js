import React from 'react'
import Card from 'react-bootstrap/Card';
import GitHubPhoto from './Github_Photo.png' 

function GitHubCard() {
  return (
    <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={GitHubPhoto} />
        <Card.Body>
            <Card.Title>GitHubPhoto</Card.Title>
            <Card.Text>
            Hard-working and Enthusiastic about learning Technologies 
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard;