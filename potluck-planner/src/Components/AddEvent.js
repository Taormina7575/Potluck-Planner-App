import {React, useState} from "react";
import {v4 as uuid} from 'uuid'

		const activeUser = {
			id: uuid(),
			username: 'Marius',
			password: 'hello',
		}
	
		const initialValues = {
			organizer_id: 0,
			event_name: "asdsda",
			description: "asdasd",
			date: new Date(),
			time: "1:00PM"
		};

const AddEvent = props =>{
	const [state, setState] = useState(initialValues);
	
	const handleChange = e => {
		const {name, value} = e.target;
		setState({
            ...state,
            [name]: value,
        })
	};

	const createEvent = event => {
		event.preventDefault();
		console.log(state)
		const newEvent = {
			organizer_id: activeUser.id,
			event_name: state.event_name,
			description:state.description,
			date: state.date,
			time: state.time
		};
		console.log(newEvent)
		setState(initialValues)
	};


		// console.log(this.props);
		// console.log(this.state);
		return (
			<div className="addEventPage">
				<h1>Plan Your Next Event</h1>
				<div className="eventsPage">
					<form onSubmit={createEvent} className="eventAdd">
						<label className="event_name">Event Name</label>
						<input
							onChange={handleChange}
							name="event_name"
							id="event_name"
							placeholder="Enter Event Name"
							value={state.event_name}
							type="text"
							className="addElement"
							required
						/>
						<label htmlFor="description">Description</label>
						<input
							onChange={handleChange}
							name="description"
							id="description"
							placeholder="Enter Description"
							value={state.description}
							type="text"
							className="addElement"
							required
						/>
						<label htmlFor="date">Date</label>
						<input
							onChange={handleChange}
							name="date"
							id="date"
							placeholder="Enter date"
							value={state.date}
							type="date"
							className="addElement"
							required
						/>
						<label htmlFor="time">Time</label>
						<input
							onChange={handleChange}
							name="time"
							id="time"
							placeholder="Enter time"
							value={state.time}
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