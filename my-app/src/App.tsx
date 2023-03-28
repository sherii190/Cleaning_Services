import Bootstrap from "./components/bootsrap";
import "./App.css"
import { Route, Routes } from "react-router-dom";

function App() {
    
    return (
        <>
            <Routes>
                <Route path="/Home" element={<Bootstrap/>}>
                </Route>
            </Routes>
            
        </>
    )
        
        
}
export default App;