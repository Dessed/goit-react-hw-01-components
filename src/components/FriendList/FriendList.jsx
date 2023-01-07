import {FriendListItem} from './FriendListItem'
import friends from 'friend-list/friends'
console.log(friends);
export const FriendList =  ({ friends }) => {
    return (
        <section>
        {friends.map(friend =>
            <div key={friend.id}>
                <ul>
                    <FriendListItem 
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    />
                </ul>
            </div>)}
        </section>
        
    )
}

