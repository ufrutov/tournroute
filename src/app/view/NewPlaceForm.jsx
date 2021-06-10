import React from "react";
import DataManager from "../util/DataManager";

class NewPlaceInput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			city: null,
			list: [],
			done: false,
			error: false
		};

		this.hangleFileChange = this.hangleFileChange.bind(this);
		this.submitNewPlaces = this.submitNewPlaces.bind(this);
	}

	hangleFileChange(e) {
		const fileReader = new FileReader();
		try {
			fileReader.readAsText(e.target.files[0], "UTF-8");
			fileReader.onload = e => {
				const data = JSON.parse(e.target.result);

				const list = Object.keys(data).map((i) => {
					let output = {};
					// Lower case entry keys
					Object.keys(data[i]).forEach((key) => {
						output[key.toLowerCase()] = data[i][key];
					});

					return output;
				});

				this.setState({ list: list, error: false });
			};
		} catch(e) {
			console.error('[E] Error on JSON file upload', e);
		}
	}

	submitNewPlaces() {
		if( this.state.city !== "city" &&
				this.state.list.length > 0 ) {
			this.setState({ error: false }, () => {
				const data = this.state.list.map((p) => {
					p.city = this.state.city;
					return p;
				});
				DataManager.addObjects('places', data)
					.then(() => {
						this.setState({ done: true });
					})
					.catch((e) => {
						console.error('[E] Error proccessing new places data:', e);
						this.setState({ error: true });
					});
			});
		} else {
			this.setState({ error: true });
		}
	}

	render(countries, cities) {
		return (
			<div className="modal show fade" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
				style={{ display: "block", backgroundColor: "rgba(0,0,0,0.2)" }}>
				<div className="modal-dialog modal-lg modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">New place config</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"
								onClick={() => {
									this.props.onClose();
								}}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form className="px-4">
								<div className="form-group">
									<label htmlFor="name">City</label>
									<select className="form-control" id="city" name="city" required
										onChange={(e) => {
											this.setState({ city: e.target.value, error: false });
										}}>
										<option value="city">Select city from list</option>
										{this.props.cities.map((c) => <option value={c.id} key={c.id}>{c.name}</option>)}
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="input" className="d-flex w-100 justify-content-between">
										<span>JSON file input</span>
										{this.state.list.length > 0 && <span>{this.state.list.length} new places</span>}
									</label>
									<input type="file" className="form-control-file is-invalid" id="input"
										onChange={this.hangleFileChange} required />
								</div>
							</form>
							{this.state.error && <p className="mt-4 invalid-feedback text-center">Unable to submit form</p>}
						</div>
						<div className="modal-footer">
							<div className="d-flex align-items-center w-100">
								<button type="button" className="btn btn-secondary" data-dismiss="modal"
									onClick={() => {
										this.props.onClose();
									}}>Close</button>

								{this.state.done && <p className="my-0 text-center flex-fill">Uploaded {this.state.list.length} places</p>}
								{!this.state.done &&
									<button
										type="button"
										className="btn btn-primary flex-fill ml-3"
										onClick={this.submitNewPlaces} >
										Save new places</button>}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewPlaceInput;