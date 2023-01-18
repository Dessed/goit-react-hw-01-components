import { Container } from 'components/GlobalStyled/Container.styled'
import { Descripion, Image, UserName, UserData } from 'components/Profile/Descripion.styled';
import { Stats, StatsList, StatsLabel, StatsQuantity } from 'components/Profile/Stats.styled'

export function Profile ({username, tag, location, avatar, stats}) {
    return (
        <Container>
        <Descripion>
        <Image
            src={avatar}
            alt="User avatar"
        />
        <UserName>{username}</UserName>
        <UserData>{tag}</UserData>
        <UserData>{location}</UserData>
        </Descripion>

        <Stats>
        <StatsList>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsList>
        <StatsList>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsList>
        <StatsList>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsList>
        </Stats>
      </Container>
    )   
}
