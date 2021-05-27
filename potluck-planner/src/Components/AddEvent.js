import React from "react";

	
		const initialValue = {
			organizer_id: Date.now(),
			event_name: "",
			description: "",
			date: new Date(),
			time: "1:00PM"
		};

const AddEvent = props =>{
	const [state, setState] = useState(initialValues);
	

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	createEvent = event => {
		event.preventDefault();
		const newEvent = {
			organizer_id: props.activeUser.id,
			event_name: state.event_name,
			description:state.description,
			date: state.date,
			time: state.time
		};
		
	};


		// console.log(this.props);
		// console.log(this.state);
		return (
			<div className="addEventPage">
				<h1>Plan Your Next Event</h1>
				<div className="eventsPage">
					<form onSubmit={this.createEvent} className="eventAdd">
						<label className="event_name">Event Name</label>
						<input
							onChange={this.handleChange}
							name="event_name"
							id="event_name"
							placeholder="Enter Event Name"
							value={this.state.event_name}
							type="text"
							className="addElement"
							required
						/>
						<label htmlFor="description">Description</label>
						<input
							onChange={this.handleChange}
							name="description"
							id="description"
							placeholder="Enter Description"
							value={this.state.description}
							type="text"
							className="addElement"
							required
						/>
						<label htmlFor="date">Date</label>
						<input
							onChange={this.handleChange}
							name="date"
							id="date"
							placeholder="Enter date"
							value={this.state.date}
							type="date"
							className="addElement"
							required
						/>
						<label htmlFor="time">Time</label>
						<input
							onChange={this.handleChange}
							name="time"
							id="time"
							placeholder="Enter time"
							value={this.state.time}
							type="time"
							className="addElement"
							required
						/>
						<button className="createButton">Create Event</button>
					</form>
					
				</div>
			</div>
		);
	}





export default AddEvent