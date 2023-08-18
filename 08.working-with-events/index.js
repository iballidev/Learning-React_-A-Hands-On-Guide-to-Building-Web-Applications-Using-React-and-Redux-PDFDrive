var destination = document.querySelector("#container");

var Counter = React.createClass({
  render: function () {
    var textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
    };

    return <div style={textStyle}>{this.props.display}</div>;
  },
});

var CounterParent = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
    };
  },
  increase: function (e) {
    var currentCount = this.state.count;

    if (e.shiftKey) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }
    this.setState({
      // count: this.state.count + 1,
      count: currentCount,
    });
  },
  decrease: function () {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  },

  render: function () {
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center",
    };

    var buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px",
    };

    return (
      <div style={backgroundStyle}>
        <Counter display={this.state.count} />
        <button style={buttonStyle} onClick={this.increase}>
          +
        </button>
        <button style={buttonStyle} onClick={this.decrease}>
          -
        </button>
      </div>
    );
  },
});

ReactDOM.render(
  <div>
    <CounterParent />
  </div>,
  destination
);
