var destination = document.getElementById("container");

/**Creating a component */
var Buttonify  = React.createClass({
  render: function () {
    return <button>{this.props.behaviour}</button>;
  },
});

ReactDOM.render(
  <div>
    <Buttonify  behaviour="Submit" />
    <Buttonify  behaviour="Click me" />
  </div>,
  destination
);
