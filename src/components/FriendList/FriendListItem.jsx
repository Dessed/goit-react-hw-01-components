import { CardItem, StatusUser, ImgUser, UserName } from 'components/FriendList/FriendList.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
            <CardItem>
                <StatusUser eventType={isOnline}>{isOnline}</StatusUser>
                <ImgUser src={avatar} alt="User avatar" width="48" />
                <UserName>{name}</UserName>
            </CardItem>   
            )}
        
    

    
    