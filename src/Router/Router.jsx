import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UploadFile from '../components/UploadFile'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/uploadFile" element={<UploadFile/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
