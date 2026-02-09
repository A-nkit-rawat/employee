import { useNavigate } from "react-router-dom"
import Card from "./Card"
import GlobalState from "./GlobalState.js"

export default ()=>{
  const navigator=useNavigate();
return(
    <>
    <div className="flex justify-center mt-10">
        <Card employeeData={GlobalState.profile}></Card>
        <div>
            <button onClick={(e)=>{
                navigator("/")
            }}>Return Back</button>
        </div>
    </div>
    </>
)
}