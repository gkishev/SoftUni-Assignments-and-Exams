function password(data) {

    let pattern = /(.+)>(?<group1>[0-9]{3})\|(?<group2>[a-z]{3})\|(?<group3>[A-Z]{3})\|(?<group4>[^><]{3})<\1/
    let correctPasswrods = [];
    let decriptedPassword

    let count = Number(data.shift());

    for(let i = 0; i < count; i++) {
        let currentPass = data[i];
        if(!pattern.test(currentPass)) {
            console.log("Try another password!")
        } else {
            let match = pattern.exec(currentPass);
            let firstGr = match.groups.group1;
            let secondtGr = match.groups.group2;
            let thirdGr = match.groups.group3;
            let forthGr = match.groups.group4;
            let rigthPassword = firstGr + secondtGr + thirdGr + forthGr;
            console.log(`Password: ${rigthPassword}`);
        }
    }

}

password(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
;