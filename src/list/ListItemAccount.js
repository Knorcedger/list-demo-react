import React from 'react';

const ListItemAccount = ({
  account
}) => {
  return <li>{account.nickname} - {account.balance}</li>
};

export default ListItemAccount;
