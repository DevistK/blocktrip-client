import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      await axios.get("/api").then((res) => {
        setData(res.data.project);
      });
    };
    callApi();
  }, []);

  return data ? (
    <div>
      <h1>Data 테스트</h1>
      <ul>
        <li>프로젝트 명 : {data.projectName}</li>
        <li>프로젝트 버전 : {data.version}</li>
      </ul>
    </div>
  ) : (
    <div>error</div>
  );
}

export default App;
