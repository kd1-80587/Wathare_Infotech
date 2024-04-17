import "./App.css";
import axios from "axios";
import * as React from "react";

export const getApiCall = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

function App() {
  const [timeLineData, setTimeLineData] = React.useState([]);
  const [startTime, setStartTime] = React.useState('');
  const [endTime, setEndTime] = React.useState('');
  const zeros = [];
  const once = [];
  const noData = [];

  const getTimeLineData = async () => {
    const res = await getApiCall(`http://localhost:9000?startTime=${startTime}&endTime=${endTime}`);
    setTimeLineData(res.data.data);
  };


  const startTimeChange = (e) => {
    setStartTime(e.target.value)
  }

  const endTimeChange = (e) => {
    setEndTime(e.target.value)
  }

  const submitData = () =>{
    getTimeLineData();
  }

  return (
    <div className="App">
      <div style={{marginTop: '10px'}}>
       <label>
        Start Time : <input type="time" name="startTime" onChange={startTimeChange} />
       </label>&nbsp;
       <label>
        End Time : <input type="time" name="endTime" onChange={endTimeChange} />
       </label>
       <br></br>
       <button type="submit" onClick={submitData} style={{marginTop:'10px'}}>Get TimeLine Data</button>
       </div>
      <h3>Cycle Status</h3>
      <div style={{ display: "inline-flex", width: '100%', overflow: 'auto', marginTop:'10px', marginTop: '10px' }}>
        {timeLineData.map((data) => {
          typeof(data.machine_status) !== 'undefined'? (data.machine_status == 0 ? zeros.push(data) : once.push(data)): noData.push(data);
          return (
            <div>
              <div style={{ borderBottom: "1px solid black" }}>
                {typeof(data.machine_status) !== 'undefined' ? data.machine_status == 1 ? (
                  <div className="vg"></div>
                ) : (
                  <div className="vy"></div>
                ):  <div className="vr"></div>}
              </div>
              <div>{new Date(data.ts).toTimeString().split(" ")[0]}</div>
            </div>
          );
        })}
      </div>
      <div>
        <table>
          <tr>
            <th>No Of 0</th>
            <th>No Of 1</th>
          </tr>
          <tr>
            <td>{zeros?.length}</td>
            <td>{once?.length}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
