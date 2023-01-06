export const Cards = ({ stats }) => {
    return (
        stats.map(stat => function markup (stats) {
            <ul> 
             {/* className="stat-list">title="Upload stats" stats={data} */}
            <li className="item">
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}</span>
            </li>
        </ul> })
    )
    
}