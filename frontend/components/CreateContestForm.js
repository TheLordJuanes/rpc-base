import React from 'react';
import { Button, Row, Col, Form, Table } from "react-bootstrap"

class CreateContestForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rows: []
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        let contestName1 = document.getElementById('contestName');
        let minMembers1 = document.getElementById('minCompetitors');
        let maxMembers1 = document.getElementById('maxCompetitors');
        let InscStartDate1 = document.getElementById('InscStartDate');
        let InscStartTime1 = document.getElementById('InscStartTime');
        let InscEndDate1 = document.getElementById('InscEndDate');
        let InscEndTime1 = document.getElementById('InscEndTime');
        let ContStartDate1 = document.getElementById('ContStartDate');
        let ContStartTime1 = document.getElementById('ContStartTime');
        let ContEndDate1 = document.getElementById('ContEndDate');
        let ContEndTime1 = document.getElementById('ContEndTime');
        let tempData = {
            contestName: contestName1.value,
            minCompetitor: minMembers1.value,
            maxCompetitor: maxMembers1.value,
            InscStartDate: InscStartDate1.value,
            InscStartTime: InscStartTime1.value,
            InscEndDate: InscEndDate1.value,
            InscEndTime: InscEndTime1.value,
            ContStartDate: ContStartDate1.value,
            ContStartTime: ContStartTime1.value,
            ContEndDate: ContEndDate1.value,
            ContEndTime: ContEndTime1.value,
            venues: this.state.rows
        }
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tempData)
            }
            let response = await fetch('http://localhost:8080/createContest', config)
            let json = await response.json();
            if (json.flag) {
                alert('Contest successfully created!')
                window.location.href = "http://localhost:3000/contests";
            } else {
                let msg = document.getElementById("message")
                msg.innerHTML = json.msg;
                msg.className = json.class;
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = () => {
        let contestName = document.getElementById('contestName');
        let InscStartDate = document.getElementById('InscStartDate');
        let InscStartTime = document.getElementById('InscStartTime');
        let InscEndDate = document.getElementById('InscEndDate');
        let InscEndTime = document.getElementById('InscEndTime');
        let ContStartDate = document.getElementById('ContStartDate');
        let ContStartTime = document.getElementById('ContStartTime');
        let ContEndDate = document.getElementById('ContEndDate');
        let ContEndTime = document.getElementById('ContEndTime');
        let button = document.getElementById('create-contest-btn');
        let minCompetitors = document.getElementById('minCompetitors');
        let maxCompetitors = document.getElementById('maxCompetitors');
        InscEndDate.setAttribute('min', InscStartDate.value);
        maxCompetitors.setAttribute('min', minCompetitors.value);
        if (maxCompetitors.value < minCompetitors.value)
            maxCompetitors.value = null;
        if (minCompetitors.value < 1)
            minCompetitors.value = null;
        if (InscEndDate.value == InscStartDate.value)
            InscEndTime.setAttribute('min', InscStartTime.value);
        if (InscStartDate.value > InscEndDate.value)
            InscEndDate.value = null;
        if (InscStartTime.value >= InscEndTime.value && InscEndDate.value == InscStartDate.value) {
            InscEndTime.value = null;
        }
        ContStartDate.setAttribute('min', InscEndDate.value);
        if (ContStartDate.value < InscEndDate.value)
            ContStartDate.value = null;
        if (ContStartTime.value < InscEndTime.value && InscEndDate.value == ContStartDate.value) {
            ContStartTime.value = null;
        }
        ContEndDate.setAttribute('min', ContStartDate.value);
        if (ContEndDate.value == ContStartDate.value)
            ContEndTime.setAttribute('min', ContStartTime.value);
        if (ContStartDate.value > ContEndDate.value)
            ContEndDate.value = null;
        if (ContStartTime.value >= ContEndTime.value && ContEndDate.value == ContStartDate.value)
            ContEndTime.value = null;
        if (this.state.rows.length > 0 && contestName.value !== "" && InscStartDate.value !== "" && InscStartTime.value !== "" && InscEndDate.value !== "" && InscEndTime.value !== "" && ContStartDate.value !== "" && ContStartTime.value !== "" && ContEndDate.value !== "" && ContEndTime.value !== "") {
            button.disabled = false
        }
        this.setState({ rows: this.state.rows });
    }

    addVenue = () => {
        let contestName = document.getElementById('contestName');
        let InscStartDate = document.getElementById('InscStartDate');
        let InscStartTime = document.getElementById('InscStartTime');
        let InscEndDate = document.getElementById('InscEndDate');
        let InscEndTime = document.getElementById('InscEndTime');
        let ContStartDate = document.getElementById('ContStartDate');
        let ContStartTime = document.getElementById('ContStartTime');
        let ContEndDate = document.getElementById('ContEndDate');
        let ContEndTime = document.getElementById('ContEndTime');
        let button = document.getElementById('create-contest-btn');
        let venuesTF = document.getElementById('venuesTF');
        let venuesList = document.getElementById('venuesList');
        let selectedVenuesList = document.getElementById('selectedVenuesList');
        if (venuesList.options.namedItem(venuesTF.value)) {
            venuesList.options.namedItem(venuesTF.value).remove();
            let tempRow = this.state.rows
            tempRow.push(venuesTF.value)
            this.setState({ rows: tempRow });
            selectedVenuesList.value = this.state.rows
        }
        venuesTF.value = null;
        if (this.state.rows.length > 0 && contestName.value != "" && InscStartDate.value != "" && InscStartTime.value != "" && InscEndDate.value != "" && InscEndTime.value != "" && ContStartDate.value != "" && ContStartTime.value != "" && ContEndDate.value != "" && ContEndTime.value != "")
            button.disabled = false
    }

    cancel = () => {
        let isExecuted = confirm("Are you sure? You'll lose the entered data.")
        if (isExecuted) {
            window.location.href = "http://localhost:3000/contests";
        }
    }

    deleteRow(index) {
        let venuesList = document.getElementById('venuesList');
        let button = document.getElementById('create-contest-btn');
        let selectedVenuesList = document.getElementById('selectedVenuesList');
        let option = document.createElement('option');
        let tempRow = this.state.rows
        let tempValue = tempRow[index];

        //Delete row from table
        tempRow.splice(index, 1)
        this.setState({ rows: tempRow });
        if (this.state.rows.length == 0) {
            button.disabled = true
        }
        selectedVenuesList.value = this.state.rows

        //Re-add venue to datalist
        option.value = tempValue;
        option.id = tempValue;
        option.name = tempValue;
        option.key = tempValue;
        venuesList.appendChild(option);
    }

    render() {
        return (
            <main>
                <h1 className="display-2" style={{ fontWeight: "bold", textAlign: "center" }}>Contest creation</h1>
                <span id="message"></span>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="form-group">
                        <Form.Label className="form-title" htmlFor="contestName">Contest name</Form.Label>
                        <Form.Control type="text" className="form-control" id="contestName" name="contestName" placeholder="Name" onChange={this.handleChange} required />
                    </Form.Group>
                    <br />
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label style={{ fontWeight: "bold" }} htmlFor="minCompetitors">Minimum number of members per team</Form.Label>
                                <Form.Control type="number" onChange={this.handleChange} className="form-control" id="minCompetitors" name="minCompetitor" min="1"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label style={{ fontWeight: "bold" }} htmlFor="maxCompetitors">Maximum number of members per team</Form.Label>
                                <Form.Control type="number" onChange={this.handleChange} className="form-control" id="maxCompetitors" name="maxCompetitor"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Label className="form-title" >Inscriptions start:</Form.Label>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="InscStartDate">Date</Form.Label>
                                <Form.Control onChange={this.handleChange} type="date" min={this.props.today} className="form-control" id="InscStartDate" name="InscStartDate" required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="InscStartTime">Time</Form.Label>
                                <Form.Control onChange={this.handleChange} type="time" className="form-control" id="InscStartTime" name="InscStartTime" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Label className="form-title" >Inscriptions end:</Form.Label>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="InscEndDate">Date</Form.Label>
                                <Form.Control onChange={this.handleChange} type="date" className="form-control" id="InscEndDate" name="InscEndDate" required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="InscEndTime">Time</Form.Label>
                                <Form.Control onChange={this.handleChange} type="time" className="form-control" id="InscEndTime" name="InscEndTime" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Label className="form-title" >Contest start:</Form.Label>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="ContStartDate">Date</Form.Label>
                                <Form.Control onChange={this.handleChange} type="date" className="form-control" id="ContStartDate" name="ContStartDate" required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="ContStartTime">Time</Form.Label>
                                <Form.Control onChange={this.handleChange} type="time" className="form-control" id="ContStartTime" name="ContStartTime" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Label className="form-title" >Contest end:</Form.Label>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="ContEndDate">Date</Form.Label>
                                <Form.Control onChange={this.handleChange} type="date" className="form-control" name="ContEndDate" id="ContEndDate" required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="ContEndTime">Time</Form.Label>
                                <Form.Control onChange={this.handleChange} type="time" className="form-control" name="ContEndTime" id="ContEndTime" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label htmlFor="venues" className="form-title">Venues selection</Form.Label>
                        <Col>
                            <Form.Label >Type a venue name to add it to the list</Form.Label>
                            <Form.Control list="venuesList" id="venuesTF" />
                            <datalist id="venuesList">
                                {this.props.venues.map(e => (
                                    <option key={e.nombre_institucion} value={e.nombre_institucion} id={e.nombre_institucion}>{e.nombre_institucion}</option>
                                ))}
                            </datalist>
                            <Button className="btn-style2" id="add-venue-btn" onClick={this.addVenue}>Add to List</Button>
                        </Col>
                        <Col>
                            <Table className="table table-hover table-striped text-center" id="venuesTable" name="venuesTable" responsive>
                                <thead>
                                    <tr>
                                        <th>
                                            Venues
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="selectedVenues" name="selectedVenues">
                                    {this.state.rows.map((venue, index) => (
                                        <tr style={{ cursor: "pointer" }}>
                                            <td onClick={() => this.deleteRow(index)}>
                                                {venue}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Form.Control type="hidden" name="selectedVenuesList" id="selectedVenuesList" />
                        </Col>
                    </Row>
                    <Button className="btn-style2" type="submit" id="create-contest-btn" disabled={true}>Create contest</Button>
                    <Button className="btn-style3" id="cancel-btn" onClick={this.cancel}>Cancel</Button>
                </Form>
            </main>
        )
    }
}

export default CreateContestForm;