import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';

function App()
{
	return (
		<div>
			<NavBar />
			<Container>
				<Alert variant='danger'>
					Danger, Will Robinson!
				</Alert>
				<Button>
					Test
				</Button>
			</Container>
		</div>
	)
}

export default App;