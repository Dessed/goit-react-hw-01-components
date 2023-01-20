import { Section, Title, StatList, StatItem, StatLabel, Statpercentage } from 'components/Statistics/Statistics.styled';

export function Statistics ({ title, stats, id }) {
    return (
        <Section>  
            {title ? <Title>{title}</Title> : ''} 

            <StatList>
                {stats.map(stat => 
                <StatItem key={stat.id}>  
                    <StatLabel>{stat.label}</StatLabel>
                    <Statpercentage>{stat.percentage}%</Statpercentage>
                </StatItem>)}
            </StatList>
        </Section>
    )
}


    
   


  
