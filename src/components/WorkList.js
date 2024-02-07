import { useState } from 'react'
import WorkCard from "./WorkCard"

export default function WorkList({ projects, projectsPerPage, flag }) {
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <div className="row">
                {currentProjects.map((project, index) => (
                    <WorkCard
                        key={index}
                        project={project}
                        order={indexOfFirstProject + index}
                        flag={flag}
                    />
                ))}
            </div>
            <nav className='d-flex align-items-center justify-content-center'>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className={`page-link ${currentPage === number ? 'bg-theme text-light' : 'text-theme'} fw-bold`}>
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
