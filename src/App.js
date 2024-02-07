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
import ScrollUp from "./components/ScrollUp"
import SectionHeader from "./components/SectionHeader"

function App() {
    const companyName = "Unique Event Solution"

    const projects = [
        {
            title: 'Birthday party of Abid',
            tag: 'Birthday',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "January 1, 2024",
            images: [
                "em2.jpg",
                "em2.jpg",
                "em3.jpg",
            ],
        },
        {
            title: 'Marriage of Rashi and Aldrin',
            tag: 'Marriage',
            description: "The best day in the world",
            postedOn: "Month xx, 20xx",
            images: [
                "kaifeng.jpeg",
            ],
        }, {
            title: 'Valentines day party',
            tag: 'Other',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "February 14, 2024",
            images: [
                "em3.jpg",
                "em2.jpg",
            ],
        },
        {
            title: 'Birthday party of Abid',
            tag: 'Birthday',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "January 1, 2024",
            images: [
                "em2.jpg",
                "em2.jpg",
                "em3.jpg",
            ],
        },
        {
            title: 'Marriage of Rashi and Aldrin',
            tag: 'Marriage',
            description: "The best day in the world",
            postedOn: "Month xx, 20xx",
            images: [
                "kaifeng.jpeg",
            ],
        }, {
            title: 'Valentines day party',
            tag: 'Other',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "February 14, 2024",
            images: [
                "em3.jpg",
                "em2.jpg",
            ],
        },{
            title: 'Birthday party of Abid',
            tag: 'Birthday',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "January 1, 2024",
            images: [
                "em2.jpg",
                "em2.jpg",
                "em3.jpg",
            ],
        },
        {
            title: 'Marriage of Rashi and Aldrin',
            tag: 'Marriage',
            description: "The best day in the world",
            postedOn: "Month xx, 20xx",
            images: [
                "kaifeng.jpeg",
            ],
        }, {
            title: 'Valentines day party',
            tag: 'Other',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "February 14, 2024",
            images: [
                "em3.jpg",
                "em2.jpg",
            ],
        },{
            title: 'Birthday party of Abid',
            tag: 'Birthday',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "January 1, 2024",
            images: [
                "em2.jpg",
                "em2.jpg",
                "em3.jpg",
            ],
        },
        {
            title: 'Marriage of Rashi and Aldrin',
            tag: 'Marriage',
            description: "The best day in the world",
            postedOn: "Month xx, 20xx",
            images: [
                "kaifeng.jpeg",
            ],
        }, {
            title: 'Valentines day party',
            tag: 'Other',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "February 14, 2024",
            images: [
                "em3.jpg",
                "em2.jpg",
            ],
        },{
            title: 'Birthday party of Abid',
            tag: 'Birthday',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "January 1, 2024",
            images: [
                "em2.jpg",
                "em2.jpg",
                "em3.jpg",
            ],
        },
        {
            title: 'Marriage of Rashi and Aldrin',
            tag: 'Marriage',
            description: "The best day in the world",
            postedOn: "Month xx, 20xx",
            images: [
                "kaifeng.jpeg",
            ],
        }, {
            title: 'Valentines day party',
            tag: 'Other',
            description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
            postedOn: "February 14, 2024",
            images: [
                "em3.jpg",
                "em2.jpg",
            ],
        },
    ]

    return (
        <div className="App" id="intro">
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Navbar companyName={companyName} />
                            <Intro url="https://media1.popsugar-assets.com/files/thumbor/xY3BdKypxx5-xtLazUhzPoO3S7M/0x0:3085x3085/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/12/07/019/n/1922153/6cad0ab66391218092c254.74357738_/i/jenna-ortega-beauty-looks.jpg" companyName={companyName} />

                            <div className="container">
                                <IconList />
                                <div className="works" id="works">
                                    <SectionHeader
                                        title="Our works"
                                        subtitle="That’s the main thing people are controlled by! Thoughts- their perception of themselves!"
                                    />
                                    <WorkList projects={projects} projectsPerPage={6} flag={true}/>
                                </div>
                                <ReviewList />
                                <TeamList />
                            </div>

                            <Footer />
                            <ScrollUp />
                        </>
                    } />

                    <Route path="/project/:projectId" element={
                        <>
                            <Navbar companyName={companyName} />
                            <SingleProject projects={projects} />
                            <Footer />
                            <ScrollUp />
                        </>
                    } />

                    <Route path="/reviews" element={
                        <>
                            <Navbar companyName={companyName} />
                            <ReviewPage projects={projects} />
                            <Footer />
                            <ScrollUp />
                        </>
                    } />

                    <Route path="/packages" element={
                        <>
                            <Navbar companyName={companyName} />
                            <PackageList />
                            <Footer />
                            <ScrollUp />
                        </>
                    } />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
