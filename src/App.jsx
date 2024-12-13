import React from 'react'
import Mainlayout from './layout/mainlayout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Jobpage from './pages/Jobpage'
import Notfound from './pages/Notfound'
import Jobpagesingle,{jobloader} from './pages/Jobpagesingle'
import Addpage from './pages/addpage'
import { Navigate } from 'react-router-dom'

import Editjob from './pages/Editjob'

const App = () => {
  

  const addnew =async (newJob)=>{
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'

      },
      body:JSON.stringify(newJob)

    })
    return;
  }
  
  // delete job
  const deletejob=async (jobid)=>{
    const res = await fetch(`/api/jobs/${jobid}`,{
      method:'DELETE',})
      return;
      
     

  };
  

  //update 
  const updateJob =async (job)=>{
    const res = await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'

      },
      body:JSON.stringify(job)

    })
    return;

  }
  



  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<Mainlayout/>}>
        <Route  index element={<Homepage/>}/>
        <Route  path="/jobs" element={<Jobpage/>}/>
        <Route  path="/jobs/:id" element={<Jobpagesingle deljob={deletejob} />} loader={jobloader}/>
        <Route  path="/edit-job/:id" element={<Editjob updateJobSubmit={updateJob}/>} loader={jobloader}/>
        
        
        <Route  path="/add-job" element={<Addpage adding={addnew} />   }  />
        
       
        <Route  path="*" element={<Notfound/>}/>
      </Route>
  
       
      
    )
  )  
  
  return (
    <RouterProvider router = {router}/>
    
    
  )
}

export default App;
