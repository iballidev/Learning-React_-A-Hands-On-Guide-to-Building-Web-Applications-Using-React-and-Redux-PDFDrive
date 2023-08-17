var destination = document.getElementById("container");

/**Creating a component for Letter */
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


/**Creating a component for Number */
var Number = React.createClass({
  render: function () {
    var numberStyle = {
      padding: 10,
      margin: 10,
      backgroundColor:  this.props.bgcolor, //using props for inline styling
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: "32",
      textAlign: "center",
    };

    return <div style={numberStyle}>{this.props.children}</div>;
  },
});




ReactDOM.render(
  <div>
    <Letter>A</Letter>
    <Letter>E</Letter>
    <Letter>I</Letter>
    <Letter>O</Letter>
    <Letter>U</Letter>

    {/* Numbers for each item using props for inline styling */}
    <Number bgcolor="#58B3FF">1</Number>
    <Number bgcolor="#AE99FF">2</Number>
    <Number bgcolor="#FF605F">3</Number>
  </div>,
  destination
);
