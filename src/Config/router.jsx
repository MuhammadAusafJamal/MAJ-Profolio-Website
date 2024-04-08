import { BrowserRouter , Route , Routes } from "react-router-dom";


function Router(){
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            {/* <Route path="/home" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/> */}
        </Routes>
    </BrowserRouter>
}

export default Router;