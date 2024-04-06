import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import instabuzz from '../../Assets/Projects/instabuzz.png';
import Rentpipe from '../../Assets/Projects/Rentpipe.png';
import BET from '../../Assets/Projects/BET.png';

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={BET}
							isBlog={false}
							title="BET - Budget Expense Tracker"
							description="Expense Tracking made easy.Stay on top of your spending with Expense Tracker. An online tracking tool to help you better understand your habits and make measurable change."
							ghLink="https://github.com/dpmanek/BET-Budget-Expense-Tracker"
							demoLink="https://budgetexpensetracker.netlify.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Rentpipe}
							isBlog={false}
							title="Rent Pipe"
							description="A web application that allows users to find properties that are listed for Sale or Rent in their desired locations. his web application also allows users to create their own listings if they desire to Sell or Rent their house. "
							ghLink="https://github.com/dpmanek/RentPipe"
							demoLink="https://rentpipe.netlify.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={instabuzz}
							isBlog={false}
							title="Instabuzz"
							description="Instabuzz is a platform for sharing memories and showcasing talent, mirroring Instagram's key features. Users can post single or multiple images with descriptions and locations. They can also explore, comment on, and like public posts from other users."
							ghLink="https://github.com/dpmanek/CS554-TeamMavericks-project/"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
