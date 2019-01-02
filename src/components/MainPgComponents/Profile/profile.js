// this will be a quick profile card that will have username, avitar
//collections with a badge logging # of collections on the button labeled 
//"collections" besides this button it on the card thre will be a "+" for adding
//additional collections to your profile. This card will be beside to the
//right of the graphing display of the collections (using plot.ly.javascript)
import React from 'react';
import Avatar from './Card/avatar'
import ProfileOverview from './Card/profileOverview'
import UserCollections from './Card/userCollections'

function Profile() {
  return (
    <div>
      <ProfileOverview />
      <Avatar />
      <UserCollections />
    </div>
  )
}

export default Profile