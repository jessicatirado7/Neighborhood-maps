import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';

class Sidebar extends Component {
  state={
    open:false,
    query: "",
  }

  styles= {
    list: {
      width:'250px',
      padding: '0px 15px 0px'
    },
    noButllets: {
      listStyleType: 'none',
      padding: 0
    },
    fullList : {
      width:'auto'
    },
    listItem: {
      marginBotton: '15px'
    },
    listLink: {
      background:'transparent',
      border:'none',
      color:'black'
    },
    filterEntry: {
      border: '1px solid gray',
      padding:'3px',
      margin: '30px 0px 10px',
      width: '100%'
    }
  };

  updateQuery = (newQuery) => {
    this.setState({ query: newQuery});
    this.props.filterPlaces(newQuery);
  }

  render() {

    return (
      <div>
        <Drawer open={this.props.open} onClose={this.props.toggleDrawer} >
          <div style={this.styles.list}>
            <input
              style={this.styles.filterEntry}
              type="text"
              name="filter"
              aria-label="Search"
              placeholder="Search Location"
              onChange={e => this
                .updateQuery(e.target.value)}
              value={this.state.query}
            />
            <ul style={this.styles.noButllets}>
              {this.props.places && this.props.places.map(place => {
                  return (
                    <li style = {this.styles.listItem} key={place.venue.id}>
                        <button style={this.styles.listLink} key={place.venue.id}>
                          {place.venue.name}
                        </button>
                    </li>
                );
                }
              )}
            </ul>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
