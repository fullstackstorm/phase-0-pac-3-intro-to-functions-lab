function shout(string){
    string = string.toUpperCase();
    return string;
}

function whisper(string){
    string = string.toLowerCase();
    return string;
}

function logShout(string){
    string = string.toUpperCase();
    console.log(string);
}

function logWhisper(string){
    string = string.toLowerCase();
    console.log(string);
}

function sayHiToHeadphonedRoommate(string){
    let retVal;
    if(string === string.toLowerCase()){
        retVal = "I can't hear you!";
    }
    if(string === string.toUpperCase()){
        retVal = "YES INDEED!";
    }
    if(string === "Let's have dinner together!"){
        retVal = "I would love to!"
    }
    return retVal;
}