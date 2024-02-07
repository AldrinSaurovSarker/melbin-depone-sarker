export default function SectionHeader({ title, subtitle, margin=true }) {
    return (
        <div className={`section-header text-center ${margin ? 'my-5' : ''} font-5`}>
            <h1 className="text-theme">{title}</h1>
            <div className="text-muted">{subtitle}</div>
        </div>
    )
}