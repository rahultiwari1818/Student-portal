import axios from 'axios';
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';

export default function UploadFile() {
    const [selectedFile,setSelectedFile] = useState(null);
    const fileInput = useRef(null);


    const changeSelectedFile =(e)=>{
        const file = e.target.files[0];
        setSelectedFile(file);
      }
    
      const uploadDocument = (e)=>{
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("document",selectedFile);
        formData.append("description","");
    
        axios.post("http://localhost/student/add_document.php",formData)
        .then(({data})=>{
          console.log("msg",data);
          toast.success(data.message);
          fileInput.current.value="";
        })
        .catch((err)=>{
            toast.error(err);
        })
        
      }

  return (
    <div className='flex justify-center items-center p-5'>
        <div>
            <form action="" method="post" encType='multipart/form-data' onSubmit={uploadDocument} >
              <input type="file" name="document" id="" ref={fileInput}  onChange={changeSelectedFile} className='rounded-full p-5 '/>

              <input type="submit" value="upload" className='px-4 py-2 bg-blue-500 rounded cursor-pointer'/>
            </form>
        </div>
    </div>
  )
}
