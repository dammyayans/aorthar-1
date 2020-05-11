import React from 'react';
import { Container } from 'react-bootstrap';
import TheTeamBanner from './TheTeamBanner';
import TeamLeads from './TeamLeads';
import GetStarted from '../../components/GetStarted/GetStarted';
export default function index() {
    return ( 
        <Container fluid className="whitebg">
            <TheTeamBanner />
            <TeamLeads />
            <GetStarted />
        </Container>
    )
}
