
function activityList (city){

    const maldivesList = [
        {activity: 'Beach', id:'mdv0', isPicked:false},
        {activity: 'Sailing', id:'mdv1', isPicked:false},
        {activity: 'Musuems', id:'mdv2', isPicked:false},
        {activity: 'Hiking', id:'mdv3', isPicked:false},
        {activity: 'Boating', id:'mdv4', isPicked:false}
        ]
    
        const MxList = [
        {activity: 'Beach', id:'mx0', isPicked:false},
        {activity: 'Boating', id:'mx1', isPicked:false},
        {activity: 'Parks and Recreation', id:'mx2', isPicked:false},
        {activity: 'Snorkeling', id:'mx3', isPicked:false}
        ]
    
        const veniceList = [
        {activity: 'Museums', id:'v0', isPicked:false},
        {activity: 'Theatre', id:'v1', isPicked:false},
        {activity: 'Parks and Recreation', id:'v2', isPicked:false},
        {activity: 'City Tours', id:'v3', isPicked:false}
        ]
    
        const NZList = [
        {activity: 'Museums', id:'nz0', isPicked:false},
        {activity: 'Sports', id:'nz1', isPicked:false},
        {activity: 'Cycling', id:'nz2', isPicked:false},
        {activity: 'City Tours', id:'nz3', isPicked:false},
        {activity: 'Boating', id:'nz4', isPicked:false}
        ]

    if (city === 'Maldives'){
       return maldivesList;
    }

    else if (city === 'Mexico'){
        return MxList;
    }

    else if (city==='Venice'){
        return veniceList;
    }
    else if (city ==='New Zealand'){
        return NZList;
    }

}
  
export default activityList;