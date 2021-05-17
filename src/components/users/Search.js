import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
    state = {
        text: "",
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        hasUsers: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === "") {
            this.props.setAlert("Please enter something", "light");
        }
        this.props.searchUsers(this.state.text);
        this.setState({ text: "" });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { hasUsers, clearUsers } = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-block btn-dark"
                    />
                </form>
                {hasUsers && (
                    <button
                        className="btn btn-grey btn-block"
                        onClick={clearUsers}
                    >
                        Clear
                    </button>
                )}
            </div>
        );
    }
}

export default Search;
