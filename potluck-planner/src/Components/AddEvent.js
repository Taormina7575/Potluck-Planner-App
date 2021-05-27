import {React, useState} from "react";
import {v4 as uuid} from 'uuid'
import "./AddEvent.css"

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
			time: "1:00PM",
			location: 'PSP',
		};

		const initialFoods = []

const AddEvent = props =>{
	const [state, setState] = useState(initialValues);
	const [foodState, setFoodState] = useState(initialFoods);
	const [curFoodState, setCurFoodState] = useState('');

	const foodSubmit = e => {
		e.preventDefault()
		setFoodState(
			[
				...foodState,
				curFoodState
			]
		)
		setCurFoodState('')

	}

	const foodChange = e => {
		setCurFoodState(e.target.value)
	}

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
			time: state.time,
			location: state.location,
			foods: foodState,
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
						<label className="inputLabel">Event Name</label>
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
						<label className="inputLabel">Description</label>
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
						<label className="inputLabel">Location</label>
						<input
							onChange={handleChange}
							name="location"
							id="location"
							placeholder="Enter Location Name"
							value={state.location}
							type="text"
							className="addElement"
							required
						/>
						<label className="inputLabel">Date</label>
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
						<label className="inputLabel">Time</label>
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


					<div>
					<form className="eventAddFood" onSubmit={foodSubmit}>
					<label className="inputLabelFood">Food Items</label>
						<input
							name="food"
							onChange={foodChange}
							id="food"
							value={curFoodState}
							placeholder="enter food items"
							type="text"
							className="addElement"
							/>
						<button className="createButton">Submit Food Item</button>
					</form>
					<div>
						{
							foodState.map((curFood) => {
								return (
								<p>{curFood}</p> )
							})
						}
					</div>
					</div>

				</div>
			</div>
		);
	}





export default AddEvent