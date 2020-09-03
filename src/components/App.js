import React from "react";
import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendsList } from "./friendsList/FriendsList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";

import user from "../assets/user.json";
import statistics from "../assets/statistical-data.json";
import friends from "../assets/friends.json";
import transactions from "../assets/transactions.json";

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics statistics={statistics} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
