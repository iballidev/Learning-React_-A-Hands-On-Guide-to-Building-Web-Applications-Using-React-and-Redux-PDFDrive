var destination = document.getElementById("container");

/**Creating a component Display */
var Display = React.createClass({
  render: function () {
    return (
      <div>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
      </div>
    );
  },
});

/**Creating a component Label */
var Label = React.createClass({
  render: function () {
    return (
      <div>
        <Display {...this.props} />
      </div>
    );
  },
});

/**Creating a component Shirt */
var Shirt = React.createClass({
  render: function () {
    var shirtStyle = {
      border: "1px solid black",
      maxWidth: 200,
      marginBottom: 20,
      padding: 10
    }
    return (
      <div style={shirtStyle}>
        <Label {...this.props} />
      </div>
    );
  },
});

ReactDOM.render(
  <div>
    <Shirt color="steelblue" num="3.14" size="medium" />
    <Shirt color="blueblack" num="4.10" size="extra large" />
  </div>,
  destination
);
