var destination = document.getElementById("container");

/**Creating a component */
var Letter = React.createClass({
  render: function () {
    var letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: "#ffde00",
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: "32",
      textAlign: "center",
    };

    return <div style={letterStyle}>{this.props.children}</div>;
  },
});

ReactDOM.render(
  <div>
    <Letter>A</Letter>
    <Letter>E</Letter>
    <Letter>I</Letter>
    <Letter>O</Letter>
    <Letter>U</Letter>
  </div>,
  destination
);
