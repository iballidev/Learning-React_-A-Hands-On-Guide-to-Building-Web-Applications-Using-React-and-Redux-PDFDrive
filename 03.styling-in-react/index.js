var destination = document.getElementById("container");

/**Creating a component */
var Buttonify = React.createClass({
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

    return <button style={letterStyle}>{this.props.behaviour}</button>;
  },
});

ReactDOM.render(
  <div>
    <Buttonify behaviour="Submit" />
    <Buttonify behaviour="Click me" />
  </div>,
  destination
);
