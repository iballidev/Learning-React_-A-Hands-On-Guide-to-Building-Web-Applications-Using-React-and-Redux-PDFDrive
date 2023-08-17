var destination = document.getElementById("container");

/**Creating a component */
var HelloWorld = React.createClass({
  render: function () {
    return <p>Hello, {this.props.userName}!</p>;
  },
});

ReactDOM.render(
  <div>
    <HelloWorld userName="ibro" />
    <HelloWorld userName="alli" />
  </div>,
  destination
);
