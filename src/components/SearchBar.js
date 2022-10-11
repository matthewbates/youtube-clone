import React, { useState, Component } from "react";

// *this is the class-based version*
export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

// *this is the function-based version*
// export default function SearchBar() {
//   const [term, setTerm] = useState("");

//   const onInputChange = (e) => {
//     setTerm(e.target.value);
//   };

//   const onFormSubmit = (e) => {
//    e.preventDefault();
// }

//   return (
//     <div className="search-bar ui segment">
//       <form className="ui form" onsubmit={onFormSubmit}>
//         <div classname="field">
//           <label>Video Search</label>
//           <input type="text" value={term} onChange={onInputChange} />
//         </div>
//       </form>
//     </div>
//   );
// }
