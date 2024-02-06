export default function SectionHeader({ title, subtitle }) {
    return (
        <div className="section-header text-center my-5 font-5">
            <h1 className="text-theme">{title}</h1>
            <div className="text-muted">{subtitle}</div>
        </div>
    )
}