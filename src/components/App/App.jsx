import  {Profile}  from 'components/Profile/Profile';
import user from 'social-profile/user';
import {Statistics} from 'components/Statistics/Statistics';
import data from 'statistics/data';
import {FriendList} from 'components/FriendList/FriendList';
import friends from 'friend-list/friends'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';
import transactions from 'transaction-history/transactions'
import { GlobalStyle } from 'components/GlobalStyled/GlobalStyled'


export default function App () {
  return (
    <>
      <GlobalStyle />
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics  title="Upload stats" stats={data}/>
      <Statistics stats={data}/>
      
      <FriendList friends={friends}/>

      <TransactionHistory items={transactions}/>
    </> 
  );
};


