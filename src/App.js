import "./styles.css";
import { usePostDataQuery } from "./services/jsonPostApi";

export default function App() {
  const { data, error, isLoading, isFetching, isSuccess } = usePostDataQuery();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {isLoading && <h3>Loading...</h3>}
      {isFetching && <h3>Fetching...</h3>}
      {error && <h3>Something went wrong...</h3>}
      {isSuccess &&
        data.map((item, i) => {
          return (
            <ul>
              <li>{item.title}</li>
            </ul>
          );
        })}
    </div>
  );
}
