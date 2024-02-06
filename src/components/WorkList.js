import SectionHeader from "./SectionHeader"
import WorkCard from "./WorkCard"

export default function WorkList() {
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

    return (
        <div className="works" id="works">
            <SectionHeader
                title="Our works"
                subtitle="That’s the main thing people are controlled by! Thoughts- their perception of themselves!"
            />

            <div className="row">
                {works.map((work, index) => (
                    <WorkCard
                        key={index}
                        imageUrl={work.imageUrl}
                        title={work.title}
                        subtitle={work.subtitle}
                        viewLink={work.viewLink}
                        order={index}
                        flag={true}
                    />
                ))}
            </div>
        </div>
    )
}