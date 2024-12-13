import jobs from '../jobs.json'
import Joblist from './joblist'
import { useState,useEffect }  from 'react'
import Spinner from './Spinner'
const Joblisting = ({ishome = false}) => {
    const[jobs,setjobs] =useState([]);
    const [loading,setloading]=useState(true)


    useEffect(()=>{
      const fetchjobs =async ()=>{
        const apiurl = ishome? '/api/jobs?_limit=3':'/api/jobs'
        try{const res =await  fetch(apiurl)
        const data = await res.json()
        setjobs(data)}
        catch (e){
            console.log(e)
        }
        finally{
            setloading(false)
        }
      }
      fetchjobs();
    },[])



    return (

        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {ishome? "Recent jobs":"Browse jobs"}
                    </h2>
                    
                        {loading? <Spinner loading ={loading}/>:(
                            
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {jobs.map((j) => {
                            
                               return(
                                
                              <Joblist key={j.id} jobs={j}/>)
                            
                            
                            })}
                            </div>
                            
                            
                            
                            
                            
                        )
                        }
                        

                   
                </div>
            </section>
            

        </>
    )
}

export default Joblisting
