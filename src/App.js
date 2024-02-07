import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Footer from "./components/Footer"
import IconList from "./components/IconList"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import ReviewList from "./components/ReviewList"
import ReviewPage from "./components/ReviewPage"
import SingleProject from "./components/SingleProject"
import TeamList from "./components/TeamList"
import WorkList from "./components/WorkList"
import PackageList from "./components/PackageList"

function App() {
    const companyName = "Unique Event Solution"

    return (
        <div className="App" id="intro">
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Navbar companyName={companyName}/>
                            <Intro url="https://media1.popsugar-assets.com/files/thumbor/xY3BdKypxx5-xtLazUhzPoO3S7M/0x0:3085x3085/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/12/07/019/n/1922153/6cad0ab66391218092c254.74357738_/i/jenna-ortega-beauty-looks.jpg" companyName={companyName} />

                            <div className="container">
                                <IconList/>
                                <WorkList/>
                                <ReviewList/>
                                <TeamList/>
                            </div>

                            <Footer />
                        </>
                    } />

                    <Route path="/project/:projectId" element={
                        <>
                            <Navbar companyName={companyName}/>
                            <SingleProject/>
                            <Footer/>
                        </>
                    } />
                    
                    <Route path="/reviews" element={
                        <>
                            <Navbar companyName={companyName}/>
                            <ReviewPage/>
                            <Footer/>
                        </>
                    } />

                    <Route path="/packages" element={
                        <>
                            <Navbar companyName={companyName}/>
                            <PackageList/>
                            <Footer/>
                        </>
                    } />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
