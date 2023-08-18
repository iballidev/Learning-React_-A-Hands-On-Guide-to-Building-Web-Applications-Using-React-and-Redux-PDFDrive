var destination = document.getElementById("container");

/**Creating a component Square */
var Square = React.createClass({
  render: function () {
    var squareStyle = {
      height: 150,
      // backgroundColor: "#FF6663",
      backgroundColor: this.props.color,
    };
    return <div style={squareStyle}></div>;
  },
});

/**Creating a component Label */
var Label = React.createClass({
  render: function () {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0,
    };
    // return <div style={labelStyle}>#FF6663</div>;
    return <div style={labelStyle}>{this.props.color}</div>;
  },
});

/**Creating a component Card */
var Card = React.createClass({
  render: function () {
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)",
    };
    return (
      <div style={cardStyle}>
        <Square color={this.props.color} />
        <Label color={this.props.color} />
      </div>
    );
  },
});

ReactDOM.render(
  <div>
    <Card color="#FF6663" />
    <Card color="#AA6663" />
    <Card color="#CCCCCC" />
  </div>,
  destination
);
