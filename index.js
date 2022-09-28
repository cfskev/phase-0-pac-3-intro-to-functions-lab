

function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}



function sayHiToHeadphonedRoommate(string) {

    const lowerCase = "I can't hear you!";
    const upperCase = "YES INDEED!";
    const normalAnswer = "I would love to!";

    if (string.toLowerCase() === string){
        return lowerCase;
    }
    else if (string.toUpperCase() === string){
        return upperCase;
    }
    else if ("Let\'s have dinner together!" === string){
        return normalAnswer;
    }
}



