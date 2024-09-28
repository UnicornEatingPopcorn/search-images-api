import React from "react";
import { StrictMode } from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./App.css";

class App extends React.Component {
  state = {
    images: [],
    welcomeText: true,
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({
      images: response.data.results,
      welcomeText: false,
    });
  };

  render() {
    return (
      <StrictMode>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmitForm={this.onSearchSubmit} />

          {this.state.welcomeText ? (
            <div className="welcomeTextContainer">
              <p className="welcomeText">Hello there! Try to search some images following by Space key?</p>
            </div>
            ) : (<ImageList images={this.state.images} />)
          }
          </div>
      </StrictMode>
    );
  }
}

export default App;
