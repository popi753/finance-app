


type overviewPageTabProps = {
    title: string;
    value: string;
}

export default function OverviewPageTab({ title, value }: overviewPageTabProps) {
    return (
        <div className='overview-page_tab'>
            <h3 className="text-4">{title}</h3>
            <p className="text-1">{value}</p>
        </div>
    )
}