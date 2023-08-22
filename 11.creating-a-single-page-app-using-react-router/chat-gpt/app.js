// app.js
const { BrowserRouter, Route, Link } = ReactRouterDOM;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
