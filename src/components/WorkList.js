import { useState } from 'react';
import WorkCard from "./WorkCard";

export default function WorkList({ projects, projectsPerPage, flag }) {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
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
                    <li className="page-item">
                        <button onClick={() => paginate(1)} className={`page-link ${currentPage === 1 ? 'bg-theme text-light' : 'text-theme'} fw-bold`}>
                            First
                        </button>
                    </li>

                    <li className="page-item">
                        <button onClick={() => paginate(Math.max(1, currentPage - 1))} className={`page-link ${currentPage === 1 ? 'bg-theme text-light' : 'text-theme'} fw-bold`}>
                            &lt;&lt;
                        </button>
                    </li>

                    {pageNumbers.slice(Math.max(0, currentPage - 1), Math.min(totalPages, currentPage + 2)).map(number => (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className={`page-link ${currentPage === number ? 'bg-theme text-light' : 'text-theme'} fw-bold`}>
                                {number}
                            </button>
                        </li>
                    ))}

                    <li className="page-item">
                        <button onClick={() => paginate(Math.min(totalPages, currentPage + 1))} className={`page-link ${currentPage === totalPages ? 'bg-theme text-light' : 'text-theme'} fw-bold`}>
                            &gt;&gt;
                        </button>
                    </li>

                    <li className="page-item">
                        <button onClick={() => paginate(totalPages)} className={`page-link ${currentPage === totalPages ? 'bg-theme text-light' : 'text-theme'} fw-bold`}>
                            Last
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
