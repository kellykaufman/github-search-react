import SearchBar from "./components/SearchBar";
import "./App.css";
import Pagination from "@material-ui/lab/Pagination";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div style={{ display: "block", padding: 30 }}>
        <h4>Paginated results</h4>
        <Pagination count={10} />
      </div>
    </div>
  );
}

export default App;
