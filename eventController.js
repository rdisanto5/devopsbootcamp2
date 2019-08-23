exports.events=function(){

let eventObj1 = {"eventID":001,
            "eventName": "DevOps Bootcamp 1",
            "location":"Atlanta",
            "date":"08-21-2019"
}

let eventObj2 = {"eventID":002,
            "eventName": "DevOps Bootcamp 2",
            "location":"Chicago",
            "date":"08-22-2019"
}

let eventObj3 = {"eventID":003,
            "eventName": "DevOps Bootcamp 3",
            "location":"New York",
            "date":"08-23-2019"
}

let eventList = [eventObj1, eventObj2, eventObj3];

return eventList;
}


exports.version = function(){

let version = "1.0.0"

return version;
}