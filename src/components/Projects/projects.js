import React, {Component} from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './projects.css';

class Projects extends Component {
    render() {
        return(
            <div className="projects-wrapper">
                <div className="projects-title"><h1>Personal Projects</h1></div>
                <CardDeck style={{margin: '2rem 5rem 2rem 5rem'}}>
                    <div class="col-sm-6 col-lg-3 py-2">
                        <Card className="card" style={{minWidth: '200px'}}>
                            <a href = "/Projects/TrainGame">
                                <Card.Img variant="top" src="../train_numbers.jpg" style={{height: '150px'}} />
                                <Card.Body>
                                    <Card.Title>Train Game</Card.Title>
                                    <Card.Text style={{height: '80px'}}>
                                    A program that takes four digits and uses different operations to make ten.
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </div>
                    <div class="col-sm-6 col-lg-3 py-2">
                        <Card className="card" style={{minWidth: '200px'}}>
                            <a href = "/Projects/UrlShort" >
                                <Card.Img variant="top" src="../shorten.jpg" style={{height: '150px'}} />
                                <Card.Body>
                                    <Card.Title>URL Shortener</Card.Title>
                                    <Card.Text style={{height: '80px', padding: '30px 0'}}>
                                    Enter a URL to shorten it.
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </div>
                    <div class="col-sm-6 col-lg-3 py-2">
                        <Card className="card" style={{minWidth: '200px'}}>
                            <a href = "/Projects/AlexaSpotify" >
                                <Card.Img variant="top" src="../spotify-alexa.png" style={{height: '150px'}} />
                                <Card.Body>
                                    <Card.Title>Alexa Spotify</Card.Title>
                                    <Card.Text style={{height: '80px'}}>
                                    Use Alexa to play the most recently added songs to a playlist on Spotify.
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </div>
                    <div class="col-sm-6 col-lg-3 py-2">
                        <Card className="card" style={{minWidth: '200px'}}>
                            <a href = "/Projects/Arbitrage" >
                                <Card.Img variant="top" src="../arbitrage.jpg" style={{height: '150px'}} />
                                <Card.Body>
                                    <Card.Title>Arbitrage Betting</Card.Title>
                                    <Card.Text style={{height: '80px'}}>
                                    A program that aggregates betting odds from different sites to find profitable arbitrage bets.
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </div>
                    <div class="col-sm-6 col-lg-3 py-2">
                        <Card className="card" style={{minWidth: '200px'}}>
                            <a href = "/Projects/Noise" >
                                <Card.Img variant="top" src="../angry.png" style={{height: '150px'}}/>
                                <Card.Body>
                                    <Card.Title>Noisy Detector</Card.Title>
                                    <Card.Text style={{height: '80px', padding: '20px 0'}}>
                                    Uses the microphone to detect when you are being too loud.
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </div>
                </CardDeck>
            </div>
        )
    }
}

export default Projects;