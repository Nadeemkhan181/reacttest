import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Pagination from './Pagination';

function App() {

  const [Data, setData] = useState([])

  const [Currentpage, setCurrentpage] = useState(1)
const [Viewerperpage, setViewerperpage] = useState(20)

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(function (response) {
      // handle success
   
      console.log(response.data)
   
      setData(response.data);
   
    })
    .catch(function (error) {
      // handle error
      console.log(error);
   })
   
   }, [])

   const lastindex = Currentpage * Viewerperpage;
   const firstindex = lastindex - Viewerperpage;
   
   
   const currentviewer = Data.slice(firstindex, lastindex);
   
   const paginate = pageNumber => setCurrentpage(pageNumber);
   

  return (
    <div>
<br></br>
<br></br>
<div className="container" >
  <div className="row">
    <div className="col-md-10 col-md-offset-1">
      <div className="panel panel-default panel-table">
        <div className="panel-heading">
          <div className="row">
            <div className="col col-xs-6">
              <h3 className="panel-title">List of data</h3>
            </div>
           </div>
        </div>
        <div className="panel-body">
          <table className="table table-striped table-bordered table-list">
            <thead>
              <tr>
                <th className="hidden-xs">ID</th>
                <th>Title</th>
                <th>Url</th>
                <th>Thumbnail</th>
              </tr> 
            </thead>
            <tbody>
              {currentviewer.map((data) => (
              <tr>
              
                <td className="hidden-xs">{data.id}</td>
                <td>{data.title}</td>
                <td>{data.url}</td>
                <td><img src={data.thumbnailUrl} style={{ height : "70px" }} /></td>
              </tr>

              ))}
            </tbody>
          </table>
        </div>
        <Pagination Data={Data} dataPerPage={Viewerperpage} totaldata={Data.length} paginate={paginate} />
      </div></div></div></div>


    </div>
  );
}

export default App;
