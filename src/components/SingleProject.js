import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { marked } from 'marked'

import WorkCard from './WorkCard'

export default function SingleProject() {
    let { projectId } = useParams()

    const works = [
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link1',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link2',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link3',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link4',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link5',
        },
        {
            imageUrl: 'https://64.media.tumblr.com/34277777b4c886320bfc76a30675d921/tumblr_inline_o5adfjLAPd1safd2x_1280.jpg',
            title: 'Project Title 1',
            subtitle: 'Project subtitle or brief info 1',
            viewLink: 'link6',
        },
    ];

    const projectData = {
        name: "Birthday party of Abid",
        description: "<h3>What is event management?</h3>Event management can be defined as an art of delivery any live experience it may be a wedding, festival, corporate event, private party, sporting event, birthday party, conference or meeting.<br><br>An event manager should have creative and technical skills which are essential for the creation of the required environment.<br><br>According to the Wikipedia, event management is “the application of project management to the creation and development of large-scale events. It involves studying the brand, identifying the target audience, devising the event concept, planning the logistics, and coordinating the technical aspects before actually launching the event”…which is very accurate.<br><br>Here are 10 basic principles of event management.",
        postedOn: "January 1, 2024",
        images: [
            "em1.jpg",
            "em2.jpg",
            "em3.jpg",
        ]
    }

    const overlayColor = 'rgba(0, 0, 0, 0.5)'

    const folderName = projectData.name
    const encodedFolderName = encodeURIComponent(folderName)
    const PROJECT_IMAGE_DIR = `/image/projects/${encodedFolderName}`

    const coverStyle = {
        backgroundImage: `url(${PROJECT_IMAGE_DIR}/${projectData.images[0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
    }

    const overlay = {
        background: overlayColor
    }

    const getMarkdownText = () => {
        const rawMarkup = marked(projectData.description)
        return { __html: rawMarkup }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid">
            <div className="text-white text-center p-5 overlay-bg" style={coverStyle}>
                <div className="overlay-shade" style={overlay}>
                    <h1 className='text-uppercase fw-bold font-1 p-5'>{projectData.name}</h1>
                </div>
            </div>

            {/* Blog Content */}
            <div className='container'>
                <div className="row mt-5 pt-5">
                    <div className="col-md-8">
                        <h2 className='text-theme mb-5'>{projectData.name}</h2>
                        <div className="font-1 text-justify" dangerouslySetInnerHTML={getMarkdownText()} />
                        <p><strong className='text-theme'>Posted on:</strong> {projectData.postedOn}</p>

                        {/* Image Gallery */}
                        <div id="carouselWorkIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                {projectData.images.map((_, index) => (
                                    <button key={index} type="button" data-bs-target="#carouselWorkIndicators" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-current={index === 0 ? 'true' : ''} aria-label={`Slide ${index + 1}`}></button>
                                ))}
                            </div>
                            <div className="carousel-inner">
                                {projectData.images.map((image, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img src={`${PROJECT_IMAGE_DIR}/${image}`} className="d-block w-100" alt={`Slide ${index}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselWorkIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselWorkIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-md-4 mt-5 mt-md-0">
                        <h3 className='text-theme'>Related Posts</h3>
                        <div className='row'>
                            {works.map((work, index) => (
                                <WorkCard
                                    key={index}
                                    imageUrl={work.imageUrl}
                                    title={work.title}
                                    subtitle={work.subtitle}
                                    viewLink={work.viewLink}
                                    order={index}
                                    flag={false}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
