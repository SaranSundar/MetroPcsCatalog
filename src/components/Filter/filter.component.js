import React from "react";

export const AnimalFilterConfig = {
    "Animal": ["Dog", "Cat", "Rabbit"],
    "Size": ["Small", "Medium", "Large"],
    "Gender": ["Male", "Female"],
};

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckboxInput = this.handleCheckboxInput.bind(this);
    }

    handleCheckboxInput(e) {
        this.setState({ [e.target.name]: e.target.checked });
    }

    render() {
        const columns = Object.keys(3);
        return [
            <div className="filter-body" key="0">
                {
                    columns.map((c) => (
                        <div className="filter-column" key={c}>
                            {
                                AnimalFilterConfig.map((i, k) => (
                                    <React.Fragment key={i}>
                                        { k == 0 && <span className="filter-header">{c}</span> }
                                        <div className="filter-item">
                                            <input type="checkbox" id={i} name={i} onChange={this.handleCheckboxInput}></input>
                                            <label htmlFor={i}>{i}</label>
                                        </div>
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    ))
                }
            </div>,
            <pre key="1">Filter Output: {JSON.stringify(this.state)}</pre>
        ];
    }
}

export { Filter };