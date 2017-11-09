import React, { Component } from "react";
import Search from "./../Search/Search.js";
import Results from "./../Results/Results.js";
import API from "../../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    };

    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        this.searchGiphy("puppies");
    }

    searchGiphy = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGiphy(this.state.search);
    };

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <Results results={this.state.results} />
                <Search
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default SearchResultContainer;















// const Map 
// <div className="row">
//     <h3>My Google Maps Demo</h3>
//     <div id="map" style={{ height: 400 + 'px', width: 100 + '%' }}></div>
//     {function initMap() {
//         var uluru = { lat: -25.363, lng: 131.044 };
//         var map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 4, center: uluru
//         });
//         var marker = new google.maps.Marker({
//             position: uluru, map: map
//         });
//     }}