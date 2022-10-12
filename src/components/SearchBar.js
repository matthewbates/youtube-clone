import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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

export default SearchBar;

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
