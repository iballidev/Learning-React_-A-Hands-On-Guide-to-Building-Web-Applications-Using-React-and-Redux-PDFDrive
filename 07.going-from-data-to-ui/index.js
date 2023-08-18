var Circle = React.createClass({
  render: function () {
    var circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 100,
      height: 100,
    };

    return <div style={circleStyle}></div>;
  },
});

var theCircle = <Circle bgColor="#F9C240" />; // declaring JSX outside of ReactDom.render()

ReactDOM.render(
  <div>
    {/* <Circle bgColor="#F9C240" /> */}
    {theCircle}
  </div>,

  document.querySelector("#container")
);
