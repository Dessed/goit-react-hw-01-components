// import {Cards} from "./Cards"

export function Statistics ({ title, stats }) {
    return (
        <section>  
            {title ? <h2>{title}</h2> : ''} 

            <div>
                {stats.map(stat => 
                <div key={stat.id}>  
                <ul> 
                    <li className="item">
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}%</span>
                    </li>
                </ul>
                </div>)}
            </div>
        </section>
    )
}


    
   


  
