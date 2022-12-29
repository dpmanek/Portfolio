import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am <span className="purple">Deep Manek </span>
						from <span className="purple"> NJ, USA.</span>
						<br />I am pursuing my Masters in Computer Science from Stevens
						Institute of Technology
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Guitar
						</li>
						<li className="about-activity">
							<ImPointRight /> Watching Anime
						</li>
						<li className="about-activity">
							<ImPointRight /> Travelling
						</li>
					</ul>

					<p style={{ color: 'rgb(155 126 172)' }}>
						"Loyalty is a two-way street. If I’m asking for it from you, then
						you’re getting it from me!"{' '}
					</p>
					<footer className="blockquote-footer">Deep</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
