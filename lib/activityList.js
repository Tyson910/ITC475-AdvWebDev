function activityList(city) {
  const maldivesList = [{
    activity: 'Beach',
    id: 'mdv0'
  }, {
    activity: 'Sailing',
    id: 'mdv1'
  }, {
    activity: 'Musuems',
    id: 'mdv2'
  }, {
    activity: 'Hiking',
    id: 'mdv3'
  }, {
    activity: 'Boating',
    id: 'mdv4'
  }];
  const MxList = [{
    activity: 'Beach',
    id: 'mx0'
  }, {
    activity: 'Boating',
    id: 'mx1'
  }, {
    activity: 'Parks and Recreation',
    id: 'mx2'
  }, {
    activity: 'Snorkeling',
    id: 'mx3'
  }];
  const veniceList = [{
    activity: 'Museums',
    id: 'v0'
  }, {
    activity: 'Theatre',
    id: 'v1'
  }, {
    activity: 'Parks and Recreation',
    id: 'v2'
  }, {
    activity: 'City Tours',
    id: 'v3'
  }];
  const NZList = [{
    activity: 'Museums',
    id: 'nz0'
  }, {
    activity: 'Sports',
    id: 'nz1'
  }, {
    activity: 'Cycling',
    id: 'nz2'
  }, {
    activity: 'City Tours',
    id: 'nz3'
  }, {
    activity: 'Boating',
    id: 'nz4'
  }];

  if (city == 'Maldives') {
    return maldivesList;
  } else if (city == 'Cancun') {
    return MxList;
  } else if (city == 'Venice') {
    return veniceList;
  } else if (city == 'New Zealand') {
    return NZList;
  }
}

export default activityList;