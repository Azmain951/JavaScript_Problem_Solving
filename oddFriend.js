function oddFriend(friends) {
    let oddFriendName = '';
    if (friends.length == 0) {
        return 'Please Enter atleast one friend name';
    }
    for (const friend of friends) {
        if (friend.length % 2 != 0) {
            oddFriendName = friend;
            return oddFriendName;
        }
        else {
            continue;
        }
    }
}

friendName = ['Abir', 'Nahida', 'Rafi', 'Tahrima', 'Raton', 'Naosin', 'Tareq', 'Tanin', 'Rahad'];
console.log(oddFriend(friendName));