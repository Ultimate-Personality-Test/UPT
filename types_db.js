var types_db = {
    "GOT": { //Game of Thrones
        1: ["ISFP", "9w1", "sp/so", "962", "ESI", "", "FEVL", "MP"], //Jon Snow
        2: ["ENTP", "7w6", "sx/so", "731", "ILE", "SLUEI", "LVEF", "SM"], //Tyrion Lannister
        3: ["ENFJ", "1w2", "sx/so", "146", "ESI", "RCOAN", "EVLF", "MC"], //Daenerys Targaryen
        4: ["ESFJ", "3w4", "sp/so", "361", "SEI", "RCOAI", "FELV", "PM"], //Sansa Stark
        5: ["ISTP", "8w7", "sx/sp", "684", "SLE", "RLOEI", "FLVE", "CM"], //Arya Stark
        6: ["ESTP", "3w2", "sx/so", "397", "ESE", "SCUEN", "FLEV", "CM"], //Jamie Lannister
        7: ["INFP", "6w5", "sp/so", "694", "EII", "", "", "PM"], //Samwell Tarly
        8: ["ISFJ", "6w5", "sx/so", "629", "ESI", "", "", "PM"], //Jorah Mormont
        9: ["ESFP", "6w7", "sp/so", "641", "SEE", "", "", "CM"], //Theon Greyjoy
        10: ["INTJ", "3w4", "sp/sx", "351", "LIE", "", "VLFE", "P"], //Petyr Baelish "Littlefinger"
        11: ["ISFP", "2w1", "sp/so", "692", "", "RCOAN", "FEVL", "P"], //Davos Seaworth
        12: ["ISTJ", "1w9", "sp/so", "162", "ESI", "", "LFVE", "P"], //Eddard "Ned" Stark
        13: ["INFP", "9w1", "sp/so", "954", "", "", "", "M"], //Brandon Stark
        14: ["ISTJ", "1w9", "sp/so", "163", "LSI", "", "", "MP"], //Brinne of Tarth
        15: ["ISTP", "8w9", "sp/sx", "864", "SLI", "", "", "MC"], //Sandor Clegane "The Hound"
        16: ["INFJ", "5w6", "so/sp", "592", "LII", "", "LEVF", "P"], //Lord Varys "The Spider"
        17: ["ISFJ", "9w1", "so/sp", "926", "ESI", "", "", "PC"], //Catelyn Stark (née Tully)
        18: ["ENTJ", "8w9", "sp/so", "863", "LSI", "SCOEI", "VFEL", "MC"], //Tywin Lannister
        19: ["ENFJ", "3w2", "so/sx", "379", "ESE", "SCOAI", "VEFL", "SM"], //Margery Tyrell
        20: ["ESTJ", "1w9", "so/sx", "163", "ESI", "", "", "CS"], //Robb Stark
        21: ["ESTP", "7w8", "sp/so", "739", "SEE", "", "", "SC"], //Bronn
        22: ["ISTJ", "1w9", "sp/so", "163", "LSI", "RCOEN", "", "MC"], //Stannis Baratheon
        23: ["ESFP", "3w4", "sx/sp", "387", "SEE", "", "", "C"], //Joffrey Baratheon
        24: ["INFJ", "1w2", "sx/sp", "154", "EIE", "", "VELF", "MP"], //Melisandre "The Red Woman"
        25: ["ENTJ", "8w7", "so/sx", "837", "SLE", "", "", "C"], //Olenna Tyrell "Queen of Thorns"
        26: ["ESTP", "8w7", "sx/so", "873", "SEE", "", "", "CS"], //Ygritte
        27: ["ESTJ", "3w4", "sp/sx", "368", "SEE", "", "VLFE", "C"], //Cersei Lannister
        28: ["ESFP", "3w4", "sx/so", "387", "", "", "", "C"], //Shae
        29: ["ESFP", "7w8", "sx/so", "783", "SEE", "", "", "SC"], //Oberyn Martell "The Red Viper"
        30: ["ESTJ", "8w9", "so/sx", "837", "", "", "", "CP"] //Yara Greyjoy
    },
    "HP": { //Harry Potter
        1: ["ESFP", "6w7", "so/sx", "639", "SEI", "SLUAN", "EFVL", "S"], //Ron Weasley
        2: ["ISFP", "9w8", "sp/sx", "964", "SLI", "RLUAN", "FEVL", "PC"], //Harry Potter
        3: ["ESTJ", "1w2", "so/sp", "163", "LSE", "SCOEI", "LVFE", "C"], //Hermione Granger
        4: ["ISFP", "2w1", "so/sx", "269", "SEI", "RCUAN", "", "PS"], //Rubeus Hagrid
        5: ["INFJ", "1w9", "sp/so", "125", "EII", "RCOAI", "LVEF", "PC"], //Albus Dumbledore
        6: ["ISTJ", "1w2", "sp/so", "153", "LSI", "RCOAI", "", "MC"], //Minerva McGonagall
        7: ["INTJ", "6w5", "sp/sx", "641", "LSI", "RLOEI", "LVFE", "MC"], //Severus Snape
        8: ["ISFJ", "6w7", "so/sx", "692", "SEE", "", "", "PS"], //Ginny Weasley
        9: ["INFP", "9w1", "sx/sp", "945", "IEI", "RCUAI", "ELVF", "P"], //Luna Lovegood
        10: ["ESTJ", "3w4", "so/sp", "361", "EIE", "SLOEN", "VLFE", "C"], //Draco Malfoy
        11: ["ESFJ", "2w1", "so/sx", "216", "ESI", "", "", "P"], //Molly Weasley
        12: ["ENTJ", "8w7", "sp/sx", "385", "SLE", "SCOEI", "VFLE", "C"], //Voldemort
        13: ["ISFJ", "9w1", "so/sp", "926", "ESI", "SLUAI", "", "SM"], //Cho Chang
        14: ["ESFJ", "3w2", "sx/so", "371", "ESE", "", "", "SP"], //Fleur Delacour
        15: ["ISTP", "9w8", "so/sp", "", "SLI", "", "", "P"], //Viktor Krum
        16: ["ISFJ", "6w5", "", "", "", "", "", "PC"], //Filius Flitwick
        17: ["ESFJ", "3w2", "so/sx", "296", "ESE", "", "", "SP"], //Horace Slughorn
        18: ["ENTP", "7w6", "so/sx", "792", "ILE", "SLUEI", "", "S"], //George Weasley
        19: ["ESTJ", "6w5", "sp/so", "683", "SLE", "", "", "CM"], //Alastor "Mad-Eye" Moody
        20: ["INFJ", "9w1", "sp/so", "952", "EII", "RCOAI", "ELFV", "MP"], //Remus Lupin
        21: ["INTP", "5w6", "sp/so", "592", "ILE", "SCUEI", "VFLE", "PS"], //Arthur Weasley
        22: ["ESTJ", "6w5", "sp/sx", "", "", "", "", "C"], //Cornelius Fudge
        23: ["ESTJ", "1w2", "so/sp", "136", "LSI", "SCOEN", "", "C"], //Dolores Umbridge
        24: ["ESFJ", "1w2", "sp/so", "162", "ESI", "", "", "CM"], //Petunia Dursley
        25: ["ISFP", "4w5", "so/sx", "", "SEE", "", "", "M"], //Moaning Myrtle
        26: ["ENTP", "3w2", "so/sp", "", "IEE", "", "", "S"], //Rita Skeeter
        27: ["INFP", "6w5", "so/sp", "629", "ESI", "", "", "MP"], //Dobby
        28: ["ESFP", "7w8", "sx/so", "783", "SEE", "SCOEI", "", "CS"], //Bellatrix Lestrange
        29: ["ENFP", "7w6", "so/sp", "748", "IEE", "", "", "C"], //Nymphadora Tonks
        30: ["ESTP", "7w8", "sx/so", "783", "ILE", "SLUEN", "", "SC"] //Sirius Black
    },
    "TO": { //The Office
        1: ["ENFP", "7w6", "sx/so", "729", "EIE", "SLUAI", "EVLF", "S"], //Michael Scott
        2: ["ESTJ", "6w5", "sx/sp", "613", "LSI", "SLOEN", "LFVE", "C"], //Dwight Schrute
        3: ["ENTP", "9w8", "sp/so", "972", "IEE", "SCUAI", "FLEV", "PS"], //Jim Halpert
        4: ["ISFJ", "9w1", "sp/so", "962", "SEI", "RCOAN", "FEVL", "P"], //Pam Beesly
        5: ["ESTP", "3w4", "sx/so", "378", "SLE", "", "FLVE", "MP"], //Ryan Howard
        6: ["ESFP", "3w4", "so/sx", "379", "SEE", "", "EVFL", "SC"], //Andy Bernard
        7: ["ENTJ", "3w4", "so/sp", "387", "LIE", "", "", "C"], //Jan Levinson
        8: ["ISTP", "8w9", "sp/sx", "953", "SLI", "RCOEN", "", "CP"], //Stanley Hudson
        9: ["ISFP", "7w6", "sx/sp", "792", "SEI", "", "", "P"], //Kevin Malone
        10: ["ESTP", "7w8", "sx/sp", "782", "SLE", "", "", "S"], //Meredith Palmer
        11: ["ISTJ", "1w9", "sp/sx", "163", "ESI", "", "LVFE", "M"], //Angela Martin
        12: ["ISFJ", "2w1", "sp/so", "216", "IEI", "", "", "PM"], //Phyllis Lapin
        13: ["ESFP", "3w2", "so/sx", "379", "SEE", "SLUEN", "EFLV", "S"], //Kelly Kapoor
        14: ["ENFP", "6w7", "so/sp", "692", "IEE", "", "", "P"], //Erin Hannon
        15: ["ENTJ", "5w6", "sx/sp", "584", "LIE", "SCUEI", "VFLE", "MC"] //Robert California
    }, 
    "F": { //Friends
        1: ["ESFP", "3w4", "sx/so", "368", "ESE", "SLUEN", "FVEL", "S"], //Rachel Green
        2: ["ESTJ", "1w2", "so/sx", "136", "ESE", "SLOAN", "VFEL", "C"], //Monica Geller
        3: ["ENFP", "7w8", "sx/so", "749", "IEE", "SCUAI", "EVFL", "S"], //Pheobe Buffay
        4: ["ESFP", "7w6", "sx/so", "793", "ESE", "SCUAN", "FELV", "S"], //Joey Tribbiani
        5: ["ENTP", "6w7", "so/sp", "639", "ILE", "SLUAI", "LEVF", "MS"], //Chandler Bing
        6: ["ISTJ", "6w5", "sp/sx", "614", "LII", "RLOEI", "LVEF", "MC"] //Ross Geller
    },
    "WW": { //The West Wing
        1: ["ENTJ", "3w2", "so/sp", "583", "", "", "", "CS"], //Jed Bartlet
        2: ["ISTJ", "1w9", "sp/so", "", "", "", "", ""], //Leo McGarry
        3: ["ENTP", "8w7", "sx/so", "836", "SLE", "", "", "P"], //Josh Lyman
        4: ["INTJ", "5w4", "so/sp", "164", "", "", "", ""], //Toby Ziegler
        5: ["ENFP", "2w3", "so/sp", "127", "", "", "", ""], //Sam Seaborn
        6: ["ENFJ", "3w2", "so/sp", "317", "", "", "", ""], //CJ Cregg
        7: ["ISTJ", "9w1", "", "", "", "", "", ""], //Chrlie Young
        8: ["ESFJ", "6w7", "sp/so", "926", "", "", "", ""], //Donna Moss
        9: ["ENFJ", "8w9", "sp/so", "", "", "", "", ""], //Abbey Bartlet
        10: ["", "", "", "", "", "", "", ""] //Joey Lucas
    },
    "L": { //LOST
        1: ["ISTJ", "9w8", "sp/so", "953", "SLI", "", "", "MC"], //Sayid Jarrah
        2: ["ISFP", "9w1", "sp/so", "694", "", "", "", "M"], //Claire Littleton
        3: ["ESTJ", "1w2", "so/sp", "126", "LSE", "", "", "CM"], //Jack Shephard
        4: ["ISFP", "9w1", "sp/so", "972", "SEI", "", "", "SP"], //Hugo "Hurley" Reyes
        5: ["ESFP", "7w6", "sx/so", "748", "", "", "", "CS"], //Shannon Rutherford
        6: ["ESTP", "8w7", "sp/sx", "784", "SEE", "VFLE", "", "MS"], //James "Sawyer" Ford
        7: ["INTJ", "5w6", "sp/sx", "584", "LII", "", "", "MC"], //Benjamin Linus
        8: ["ISTJ", "1w9", "sp/sx", "613", "", "", "", "MC"], //Jin Kwon
        9: ["ISFJ", "6w7", "sp/sx", "648", "", "", "", "M"], //Michael Dawson
        10: ["INFP", "9w1", "sx/sp", "694", "EII", "", "", "MP"], //Desmond Hume
        11: ["ISFJ", "2w1", "so/sp", "269", "", "", "", "MP"], //Sun Kwon
        12: ["ISFP", "6w7", "sp/sx", "649", "", "", "", "M"], //Kate Austen
        13: ["ISFP", "6w7", "so/sx", "694", "IEI", "", "", "SM"], //Charlie Pace
        14: ["INFJ", "4w5", "sp/so", "459", "IEI", "", "", "M"], //John Locke
        15: ["INFJ", "1w9", "sp/so", "152", "", "", "", "MP"] //Juliet Burke
    },
    "TW": { //The Wire
        1: ["ISTJ", "1w9", "", "", "LSE", "", "", "P"], //Cedric Daniels
        2: ["ENTP", "8w7", "sx/so", "874", "ILE", "SCUEN", "VLFE", "SC"], //Jimmy McNulty
        3: ["ISTP", "8w7", "", "863", "", "", "", ""], //Kima Greggs
        4: ["INTP", "5w6", "sx/sp", "541", "ILI", "RCUEI", "LVEF", "P"], //Lester Freamon
        5: ["ESTP", "7w6", "", "792", "IEE", "", "", ""], //Bunk Moreland
        6: ["ESTP", "7w8", "", "", "", "", "", ""], //Thomas Herk Hauk
        7: ["ESFJ", "3w2", "", "", "", "", "", ""], //Ellis Carver
        8: ["ENFP", "7w6", "", "", "IEE", "", "", ""], //Bubbles
        9: ["ESTJ", "8w7", "", "", "", "", "", "C"], //William Rawls
        10: ["INFJ", "5w6", "", "", "", "", "", "MS"], //Roland "Prez" Pryzbylewski
        11: ["ESTJ", "3w2", "", "", "", "", "", ""], //Rhonda Pearlman
        12: ["ISFP", "6w5", "sx/sp", "682", "SEE", "", "", "PS"], //Omar Little
        13: ["ESTJ", "3w4", "", "", "", "", "", ""], //Ervin Burrell
        14: ["ESTJ", "8w9", "so/sp", "", "SEE", "", "", ""], //Bodie Broadus
        15: ["ENTJ", "3w2", "sp/sx", "358", "LIE", "RCOEI", "LVFE", "MC"], //Stringer Bell
        16: ["ENTJ", "3w2", "", "316", "EIE", "", "", ""], //Tommy Carcetti
        17: ["ESTP", "6w7", "", "684", "SEE", "", "", ""], //Avon Barksdale
        18: ["ISTP", "6w5", "", "", "SLI", "", "", ""], //Chris Partlow
        19: ["ENTJ", "3w2", "", "", "", "", "", ""], //Norman Wilson
        20: ["ISTP", "6w5", "", "684", "SLE", "", "", ""], //Michael Lee
        21: ["ENTP", "3w4", "", "", "", "", "", ""], //Maurice Levy
        22: ["ISFJ", "2w1", "", "", "", "", "", ""], //Beatrice "Beadie" Russell
        23: ["ISFP", "4w3", "sx/sp", "", "", "", "", ""], //Dennis Cutty Wise
        24: ["ISFP", "4w3", "", "469", "EII", "", "", "M"], //D'Angelo Barksdale
        25: ["ESTP", "8w9", "sp/sx", "873", "SLE", "", "", "S"], //Clay Davis
        26: ["", "", "", "", "", "", "", ""], //Clarence Royce
        27: ["ISTJ", "6w7", "", "", "", "", "", ""], //Spiros Vondas
        28: ["ESTJ", "6w5", "", "", "", "", "", ""], //Frank Sobotka
        29: ["ESFP", "7w6", "so/sx", "782", "", "", "", "S"], //Ziggy Sobotka
        30: ["ISTP", "6w7", "", "", "", "", "", ""] //Nick Sobotka
    },
    "ALA": { //Avatar: The Last Airbender
        1: ["ENFP", "9w1", "so/sx", "972", "IEE", "SCUAI", "EVFL", "S"], //Aang
        2: ["INFP", "4w3", "sp/sx", "461", "ESI", "RLOEN", "EFVL", "MC"], //Zuko
        3: ["ESFJ", "2w1", "so/sp", "216", "ESI", "SCOAN", "EVFL", "PC"], //Katara
        4: ["ISTP", "8w7", "sp/sx", "873", "SLE", "SCUEN", "FVLE", "CP"], //Toph Beifong
        5: ["ESTJ", "6w7", "so/sp", "631", "LSE", "SLOEN", "LFVE", "CS"], //Sokka
        6: ["ENTJ", "8w7", "so/sp", "386", "SLE", "SLOEN", "VLFE", "C"], //Azula
        7: ["ENFJ", "9w1", "sx/so", "927", "ESE", "SCUAI", "FEVL", "PS"], //Iroh
        8: ["ESTJ", "8w7", "sp/sx", "836", "SLE", "SCOEN", "VFLE", "C"], //Ozai
        9: ["ESFP", "7w6", "so/sx", "749", "ESE", "SCUAN", "EFVL", "S"], //Ty Lee
        10: ["ESTJ", "6w5", "", "613", "", "SCOAN", "", "PC"] //Hakoda
    },
    "DS9": { //Star Trek: Deep Space Nine
        1: ["ENTP", "7w8", "sx/so", "731", "ILE", "", "", "S"], //Jadzia Dax
        2: ["ISTJ", "1w2", "sp/sx", "163", "LSI", "", "", "CM"], //Odo
        3: ["ISTJ", "6w5", "sp/sx", "863", "LSI", "", "", "CM"], //Worf
        4: ["ESTJ", "6w5", "so/sp", "638", "ILE", "", "", "SM"], //Nog
        5: ["ESTP", "3w2", "sp/sx", "378", "EIE", "", "", "S"], //Quark
        6: ["ENFJ", "1w9", "sp/so", "164", "EII", "", "", "M"], //Benjamin Sisko
        7: ["ENTP", "5w4", "sp/so", "538", "ILE", "", "", "M"], //Elim Garak
        8: ["ISFP", "8w7", "sp/sx", "864", "SEE", "", "", "C"], //Kira Nerys
        9: ["ENFP", "2w3", "so/sp", "271", "IEE", "", "", "S"], //Julian Bashir
        10: ["ENTJ", "8w7", "sp/so", "835", "SLE", "", "", "CP"], //Gul Dukat
        11: ["INTP", "6w5", "sp/so", "692", "SEI", "", "", "P"], //Rom
        12: ["ISTP", "9w8", "sp/so", "953", "ILI", "", "", "MP"], //Miles O'Brien
        13: ["ENFP", "9w1", "so/sx", "972", "IEE", "", "", "P"], //Jake Sisko
        14: ["ESFJ", "3w2", "so/sp", "316", "LSE", "", "", "C"], //Kai Winn Adami
        15: ["ESTP", "8w9", "sx/sp", "", "", "", "", "CS"] //Kasidy Yates
    },
    "PP": { //Pride and Prejudice
        1: ["INTJ", "1w9", "sp/so", "154", "LII", "", "", "MC"], //Fitzwilliam Darcy
        2: ["ENFP", "7w6", "so/sx", "714", "ESE", "", "", "S"], //Elizabeth Bennet
        3: ["ISTJ", "1w2", "", "136", "SLI", "", "", "M"], //Mr. Collins
        4: ["ESTP", "7w8", "so/sp", "", "SEE", "", "", "CS"], //George Wickham
        5: ["ESFJ", "9w1", "so/sx", "927", "SEI", "", "", "SP"], //Charles Bingley
        6: ["ENFJ", "9w1", "so/sx", "927", "", "", "", "S"], //Georgina Darcy
        7: ["ESFP", "7w8", "sp/so", "", "", "", "", "S"], //Lydia Bennet
        8: ["ISFJ", "9w1", "sp/so", "926", "EII", "", "", "P"], //Jane Bennet
        9: ["ESFJ", "2w3", "so/sp", "", "", "", "", "SC"], //Mrs. Bennet
        10: ["ESTJ", "8w7", "sx/so", "854", "", "", "", "C"] //Catherine de Bourgh
    },
    "MCU": { //Marvel Cinematic Universe
        1: ["ENTP", "7w8", "sx/sp", "738", "LIE", "SLUEI", "VLEF", "CS"], //Tony Stark "Iron Man"
        2: ["ISFJ", "1w2", "so/sx", "126", "ESI", "RCOAN", "EVFL", "P"], //Steve Rogers "Captain America"
        3: ["ISTP", "6w5", "sx/sp", "612", "LSE", "RLUEN", "VLEF", "CM"], //Natasha Rpmanoff "Black Widow"
        4: ["INTP", "9w1", "sp/so", "954", "ILI", "RCUAI", "LFEV", "MP"], //Bruce Banner "Hulk"
        5: ["ISFP", "6w7", "sp/so", "684", "ESI", "", "", "PS"], //Carol Danvers "Captain Marvel"
        6: ["ESTP", "7w8", "sx/so", "782", "SEE", "SCOAN", "VFLE", "SC"], //Thor
        7: ["ENTJ", "8w9", "sp/so", "863", "LIE", "", "VFLE", "C"], //Nick Fury
        8: ["INTJ", "5w6", "sp/so", "531", "LII", "RCOEI", "LVFE", "MC"], //Stephen Strange "Doctor Strange"
        9: ["ISFJ", "1w9", "so/sp", "162", "ESI", "RCOAN", "", "PM"], //T'Challa Black Panther
        10: ["ISTJ", "6w5", "sp/so", "682", "SLI", "RCOAN", "", "M"], //Gamora
        11: ["INTJ", "1w9", "so/sp", "163", "LSI", "RCOEI", "LVFE", "MC"], //Thanos
        12: ["ENTJ", "8w9", "sp/so", "835", "LIE", "", "", "C"], //Peggy Carter
        13: ["INFJ", "4w3", "sx/so", "468", "EIE", "SCOEI", "VELF", "MC"], //Loki
        14: ["ISTP", "9w8", "sp/sx", "962", "SLI", "RCUEN", "FVLE", "PS"], //Clint Barton "Hawkeye" 
        15: ["ESFP", "7w6", "so/sx", "739", "ESE", "SCUAN", "EFLV", "S"] //Peter Quill "Star-Lord"
    },
    "S": { //The Simpsons
        1: ["ESFP", "9w8", "sp/sx", "972", "SEI", "SLUEN", "FEVL", "S"], //Homer Simpson
        2: ["ESTP", "7w8", "so/sx", "738", "ILE", "SCUEN", "FELV", "S"], //Bart Simpson
        3: ["ISFJ", "2w1", "so/sx", "269", "ESI", "SLOAN", "EVFL", "P"], //Marge Simpson
        4: ["INFJ", "1w2", "so/sp", "154", "EII", "RLOAI", "VELF", "M"], //Lisa Simpson
        5: ["ENFJ", "2w1", "so/sx", "296", "ESI", "", "", "M"], //Apu Nahasapeemapetilon
        6: ["INTJ", "8w9", "so/sp", "836", "SLE", "RLOEI", "", "CM"], //Montgomery Burns
        7: ["ESFJ", "2w1", "so/sx", "269", "ESE", "SLOAN", "", "SP"], //Ned Flanders
        8: ["ISFP", "6w7", "sp/sx", "261", "EII", "", "", "M"], //Milhouse Van Houten
        9: ["ISTP", "6w5", "so/sx", "649", "SLI", "", "", "MC"], //Moe Szyslak
        10: ["ESTP", "6w7", "sx/so", "684", "SLE", "", "", "CM"], //Nelson Muntz
        11: ["ESTP", "8w7", "sx/so", "873", "SLE", "", "", "CM"], //Krusty the Clown
        12: ["ESFP", "7w6", "sp/sx", "794", "ESE", "", "", "MC"], //Edna Krabappel
        13: ["ISFJ", "2w1", "sx/sp", "629", "ESI", "", "", "P"], //Waylon Smithers
        14: ["INFP", "4w5", "sp/sx", "497", "SEI", "", "", "PS"], //Barney Gumble
        15: ["ISTJ", "1w2", "sp/sx", "163", "LSI", "", "", "P"] //Seymour Skinner
    }
}; //199+2=201 //199
