function activityData(location) {
  /*
      const maldivesData = [
          { id:0, activity: 'Muesems'}, 
          { id:1, activity: 'Sailing'},
          { id:2, activity: 'Beach'}, 
          { id:3, activity: 'Hiking'},
          { id:4, activity: 'Boating'}
      ]
  */
  const maldivesData = ['Beach', 'Sailing', 'Muesems', 'Hiking', 'Boating'];
  const cancunData = ['Beaches', 'Boating', 'Parks and Recreation', 'Snorkeling'];
  const veniceData = ['Museums', 'Theatre', 'Parks and Recreation', 'City Tours'];
  const NZData = ['City Tours', 'Sports', 'Cycling', 'Museums', 'Boating'];

  if (location == 'Maldives') {
    return maldivesData;
  } else if (location == 'Cancun') {
    return cancunData;
  } else if (location == 'Venice') {
    return veniceData;
  } else if (location == 'New Zealand') {
    return NZData;
  }
}

export default activityData;
/*

const stuffToDo = [
    {
        id: 'New Zealand',
        activities: ['City Tours', 'Sports', 'Cycling', 'Museums', 'Boating']
    },

    {
        id:'Maldives',
        activities: ['Muesems', 'Sailing', 'Beach', 'Hiking', 'Boating']
    },

    {
        id:'Venice',
        activities: ['Museums', 'Theatre', 'Parks and Recreation', 'City Tours']
    },

    {
        id:'Cancun',
        activities: ['Beaches', 'Boating', 'Parks and Recreation', 'Snorkeling']
    }
]
*/