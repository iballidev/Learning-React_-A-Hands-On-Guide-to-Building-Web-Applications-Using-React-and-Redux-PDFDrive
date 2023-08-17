var destination = document.getElementById("container");

/**Creating a component */
var HelloWorld = React.createClass({
  render: function () {
    return <p>Hello, componentized world!</p>;
  },
});

ReactDOM.render(
  <div>
    <HelloWorld />
    <HelloWorld />
  </div>,
  destination
);
