import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { marked } from 'marked'

import WorkList from './WorkList'

export default function SingleProject({projects}) {
    let { projectId } = useParams()
    const projectData = projects[projectId]

    const overlayColor = 'rgba(0, 0, 0, 0.5)'

    const folderName = projectData.title
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
                    <h1 className='text-uppercase fw-bold font-1 p-5'>{projectData.title}</h1>
                </div>
            </div>

            {/* Blog Content */}
            <div className='container'>
                <div className="row mt-5 pt-5">
                    <div className="col-md-8">
                        <h1 className='text-theme font-5'>{projectData.title}</h1>
                        <div className="font-4">Tag <span className="badge bg-info text-dark mb-5">{projectData.tag}</span></div>
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
                        <h1 className='text-theme font-5'>Related Posts</h1>
                        <div className='row'>
                            <WorkList projects={projects} flag={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
