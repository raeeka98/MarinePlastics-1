import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LocationBar from './LocationBar';

import { locationSort, locationFind, debrisFind, userFind, orgFind } from '../_helpers/SortHelper';
import { getTotalPounds } from '../_helpers/ChartHelpers';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rawData: [],
      searchResult: [],
      filter: 'beach',
      loaded: false,
      error: false
    };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    this.url = '/surveys';
  }

  // gets the entries from the server, saves them in the state
  loadCommentsFromServer() {
    axios.get(this.url)
      .then(res => {
        console.log(res.data);
        res.data.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        // sorts data into locations 
        const sorted = locationSort(res.data);
        this.setState({
          data: sorted,
          rawData: res.data,
          searchResult: sorted,
          loaded: true
        });
      })
      .catch(err => {
        console.log(err.message);
        this.setState({
          loaded: true,
          error: true
        });
      })
  }

  handleSearchTypeChange(e) {
    this.setState({ filter: e.target.value });
    this.handleSearch(document.getElementById("searchBar").value, e.target.value);
  }

  handleSearchChange(e) {
    this.handleSearch(e.target.value, this.state.filter);
  }


  filterFunctions = {
    beach: locationFind,
    debris: debrisFind,
    user: userFind,
    org: orgFind
  }

  handleSearch(value, filter) {
    let result = this.state.data;
    if (value.length > 0) {
      if (this.filterFunctions.hasOwnProperty(filter)) {
        result = this.filterFunctions[filter](this.state.data, value);
      }
    }
    this.setState({ searchResult: result });
  }

  handleAccordionClick = (e) => {
    let accordionWrapper = e.target.parentElement;
    let accordionContent = e.target.nextSibling;
    if (e.target.classList.contains('uk-text-muted')) {
      accordionWrapper = e.target.parentElement.parentElement;
      accordionContent = e.target.parentElement.nextSibling;
    }

    if (accordionWrapper.classList.contains('uk-open')) {
      accordionWrapper.classList.remove('uk-open');
      accordionContent.style.display = 'none';
    } else {
      accordionWrapper.classList.add('uk-open');
      accordionContent.style.display = 'block';
    }
  }

  showEntries = (locationNodes) => {
    let errStr = "Something went wrong!"
    let { loaded, error } = this.state;
    if (loaded && !error) {
      return locationNodes.length < 1 ? <div>No Entries</div> : locationNodes
    }
    return (
      <span className={error ? "err" : "loader"}>
        <span>{error ? errStr : ""}</span>
        <span></span><span></span>
      </span>
    );
  }

  // once the component is on the page, checks the server for comments
  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {

    // returns HTML for every entry in the sorted array of locations
    let locationNodes = this.state.searchResult.map((location, i) => {
      let path = location.name ? location.name.replace(/\s/g, '') : 'ERR';
      let entryString = location.entries.length > 1 ? 'Entries' : 'Entry';
      let entryNodes = location.entries.map((entry, i) => {
        // console.log(entry);
        return (
          <li key={`entry-${i}`}>
            <Link className="uk-link-muted" to={{ pathname: `/entry/${entry._id}` }}>
              {entry.date}
            </Link>
          </li>
        );
      });
      return <LocationBar
        key={i}
        handleAccordionClick={this.handleAccordionClick}
        location={location}
        entryNodes={entryNodes}
        path={path}
        entryString={entryString}
      />
    });

    let totalWeight = getTotalPounds(this.state.rawData);

    return (
      <div>
        <div className="uk-width-2-3 uk-align-center uk-margin-top">
          <form className="uk-grid uk-grid-small uk-margin-small-bottom">
            <div className="uk-width-2-3">
              <input
                className="uk-input uk-form-large"
                id="searchBar"
                type="search"
                onChange={this.handleSearchChange}
                placeholder="Search..."
              />
            </div>
            <div className="uk-width-1-3">
              <select className="uk-select uk-form-large" id='type' onChange={this.handleSearchTypeChange}>
                <option value="beach">By Beach</option>
                <option value="debris">By Debris</option>
                <option value="user">By Team Leader</option>
                <option value="org">By Organization</option>
              </select>
            </div>
          </form>
          <div id="locations" className="uk-background-muted uk-padding uk-height-large" style={locationNodes.length > 1 ? { overflowY: 'scroll' } : null}>
            {this.showEntries(locationNodes)}
          </div>
          <div className="uk-section uk-section-primary uk-margin-top">
            <div className="uk-container">
              <h2 className="uk-text-center uk-heading">{totalWeight} pounds of marine debris picked up so far!</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;