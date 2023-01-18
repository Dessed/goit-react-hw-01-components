import {FriendListItem} from './FriendListItem';
import friends from 'friend-list/friends';
import { CardsList } from 'components/FriendList/FriendList.styled'

export const FriendList =  ({ friends }) => {
    return (
        <section>
        {friends.map(friend =>
            <CardsList key={friend.id}>
                <FriendListItem 
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                />
            </CardsList>
            )}
        </section>
        
    )
}

