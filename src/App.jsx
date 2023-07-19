import './App.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Router from './Router/Router';
import pdfIcon from "./assests/images/pdfIcon.png";

function App() {
  const [data,setData] = useState([]);


  useEffect(()=>{

    axios.get("http://localhost/student/get_document.php")
    .then((data)=>{
      setData(data.data.data);
    })
    

  },[]);

  

  const openFile = (ele) =>{
    window.open(`http://localhost/student/documents/${ele.original_name}`);
  }

  console.log(data);
  return (
    <>

      <div className="p-10 grid grid-cols-4">
        {
         data &&  data?.map((ele)=>{
            return <>
            <div className='cursor-pointer'>

                <img src={pdfIcon} alt="" onClick={()=>openFile(ele)} srcset=""  className='h-[10vh] w-[10vw]'/>
                <p>{ele?.temp_name}</p>

            </div>
            </>
          })
        }
      </div>
      <Router/>
    </>
  );
}

export default App;
