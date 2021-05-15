import React from 'react';
import SearchResultsCss from './SearchResults.css';
import TrackList from './../tracklist/tracklist.js';

class SearchResults extends React.Component {
    render() {
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList />
        </div>
    }
}

export default {SearchResults};