import React,{useContext} from 'react'
import { UserContext } from '../Context/UserContext'

function Ex2() {
   //instance
   const context = useContext(UserContext)
   return (
     <div className="container">
         <div className="row">
             <div className="col-md-12 text-center">
                 <h3 className="dispaly-3 text-primary">Ex2</h3>
             </div>
         </div>
 
         <div className="row">
             <div className="col-md-12">
                 <h1 className="text-success">name= {context.name}</h1>
                 <h1 className="text-success">email= {context.email}</h1>
                 
 
             </div>
         </div>
     </div>
   )
}

export default Ex2
