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
        17: ["ESTP", "6w7", "", "682", "SEE", "", "", ""], //Avon Barksdale
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
    },
    "T7S": { //That 70's Show
        1: ["INTP", "6w7", "sp/so", "693", "EII", "RLOAI", "LEFV", "P"], //Eric Forman
        2: ["ESTJ", "3w2", "so/sx", "317", "ESE", "SLOEN", "FVEL", "CS"], //Jackie Burkhart
        3: ["ESFP", "7w6", "so/sx", "729", "SEE", "", "EFVL", "S"], //Michael Kelso
        4: ["ISTP", "9w8", "sp/sx", "974", "SLI", "", "VLEF", "P"], //Steven Hyde
        5: ["ESTP", "9w8", "so/sx", "962", "SLE", "", "", "PC"], //Donna Pinciotti
        6: ["ENFP", "7w6", "sx/so", "738", "IEE", "", "", "S"], //Fez
        7: ["ESFJ", "2w1", "so/sx", "216", "SEI", "", "", "SC"], //Kitty Foreman
        8: ["ESTJ", "8w9", "sp/sx", "863", "LSI", "", "", "C"], //Red Foreman
        9: ["ESFP", "7w6", "so/sx", "794", "", "", "", "S"], //Midge Pinciotti
        10: ["ENFP", "6w7", "so/sp", "792", "SEE", "", "", "S"] //Bob Pinciotti
    },
    "DA": { //Downton Abbey
        1: ["ISFJ", "2w1", "so/sx", "215", "", "", "", "S"], //Robert Crawley, Lord Grantham
        2: ["INFP", "9w8", "so/sx", "947", "EII", "", "", "SM"], //Lady Sybil Crawley
        3: ["ISFP", "4w3", "sp/sx", "469", "ESI", "", "", "MS"], //Lady Edith Crawley
        4: ["ISTJ", "1w2", "sp/so", "152", "LSI", "", "", "C"], //Charlie Carson
        5: ["INFJ", "5w6", "sp/sx", "592", "", "", "", "M"], //John Bates
        6: ["ENTJ", "3w4", "so/sp", "361", "LIE", "RCUEN", "VLEF", "C"], //Lady Mary Crawley
        7: ["INTJ", "4w5", "sp/so", "", "", "", "", ""], //Sarah O'Brien
        8: ["ESFJ", "9w1", "so/sx", "296", "", "", "", "S"], //Anna Bates
        9: ["ISTJ", "6w5", "so/sp", "631", "", "", "", "P"], //Elsie Hughes
        10: ["ESFJ", "2w3", "sp/so", "269", "", "", "", "P"], //William Mason
        11: ["INTJ", "3w4", "sp/sx", "368", "SLI", "", "", "MC"], //Thomas Barrow
        12: ["ESFJ", "9w1", "sx/sp", "286", "", "", "", "S"], //Cora Crawley, Lady Grantham
        13: ["ISFP", "6w7", "so/sx", "", "", "", "", "S"], //Diasy Mason
        14: ["ESFJ", "6w5", "so/sx", "628", "", "", "", "C"], //Beryl Patmore
        15: ["ESTJ", "6w5", "so/sp", "", "", "", "", "CP"] //Violet Crawley / Dowager Countess / Granny
    },
    "SW": { //Star Wars
        1: ["INFP", "9w1", "sp/so", "926", "IEE", "RCUAI", "EVLF", "PS"], //Luke Skywalker
        2: ["ENTJ", "1w2", "so/sp", "126", "LSE", "SCOAN", "VLEF", "C"], //Leia Organa
        3: ["ESTP", "7w8", "sp/sx", "783", "SLE", "SCUEN", "FVLE", "CS"], //Han Solo
        4: ["ISTJ", "8w9", "sp/sx", "864", "LSI", "RLOEI", "VLEF", "M"], //Darth Vader
        5: ["INFJ", "6w5", "so/sp", "612", "EII", "RCOAI", "LEVF", "P"], //Obi-Wan Kenobi
        6: ["ISFJ", "6w5", "sp/so", "612", "ESI", "RLOAN", "", "M"] //C-3PO
    },
    "GA": { //Grey's Anatomy
        1: ["ISFP", "4w3", "sx/so", "469", "IEI", "", "ELVF", "M"], //Meredith Grey
        2: ["ISTP", "3w4", "sp/sx", "358", "LSI", "", "", "MC"], //Cristina Yang
        3: ["ESFJ", "2w1", "sx/so", "216", "ESE", "", "", "S"], //Isobel "Izzie" Stevens
        4: ["ISTP", "8w9", "sp/sx", "836", "SLE", "", "", "CP"], //Alex Karev
        5: ["ISFJ", "9w1", "sx/so", "962", "SEI", "", "", "P"], //George O'Malley
        6: ["ESTJ", "1w2", "sx/sp", "136", "LSE", "", "", "C"], //Miranda Bailey
        7: ["ENFJ", "2w3", "so/sp", "216", "EII", "", "", "PS"], //Richard Webber
        8: ["ISTJ", "3w4", "sx/sp", "315", "LSE", "", "", "M"], //Preston Burke
        9: ["ENFJ", "3w2", "sp/sx", "386", "EIE", "", "", "PS"], //Derek Shepherd
        10: ["ENFJ", "3w2", "so/sx", "368", "LIE", "", "", "MC"] //Addison Montgomery
    },
    "BB": { //Breaking Bad
        1: ["INTJ", "5w6", "sp/so", "583", "ILI", "RLOEI", "VFLE", "MC"], //Walter White
        2: ["ESFJ", "1w2", "sp/so", "126", "ESI", "SLOAN", "VFEL", "C"], //Skyler White
        3: ["ESFP", "6w7", "so/sx", "694", "SEE", "SLUAN", "FEVL", "SM"], //Jesse Pinkman
        4: ["ESTP", "8w7", "so/sx", "873", "SLE", "SCOEN", "FVLE", "SC"], //Hank Schrader
        5: ["ESFP", "2w3", "sx/so", "268", "EIE", "SLUAN", "", "SC"], //Marie Schrader
        6: ["ISFP", "9w1", "sx/so", "946", "EII", "RLUAN", "", "MP"], //Walter White Jr.
        7: ["ENTP", "3w2", "so/sp", "379", "ILE", "SCUEI", "VFLE", "S"], //Jimmy McGill "Saul Goodman"
        8: ["INTJ", "1w9", "sp/so", "163", "LSE", "RCOEI", "VFLE", "PC"], //Gus Fring
        9: ["ISTJ", "9w8", "sp/sx", "962", "SLI", "RCOAN", "FLEV", "PC"], //Mike Ehrmantraut
        10: ["ISFP", "4w3", "sx/sp", "479", "SEI", "RLUEI", "", "SP"] //Jane Margolis
    },
    "FS": { //Firefly+Serenity
        1: ["ESTP", "8w9", "", "873", "", "SLE", "", "CS"], //Mal Reynolds
        2: ["INTJ", "8w7", "so/sx", "852", "SLE", "", "", ""], //River Tam
        3: ["ENFJ", "2w3", "", "", "", "", "", ""], //Inara Serra
        4: ["ENFP", "7w6", "", "729", "", "", "", "S"], //Kaylee Frye
        5: ["ISTJ", "1w9", "", "", "", "", "", ""], //Zoe Washburne
        6: ["ENFP", "6w7", "", "", "", "", "", ""], //Hoban Washburn
        7: ["ISTP", "6w7", "", "683", "SLE", "", "", ""], //Jayne Cobb
        8: ["ENFJ", "9w8", "", "", "", "", "", ""], //Shepherd Derrial Book
        9: ["INFJ", "2w1", "", "", "", "", "", ""], //Simon Tam
        10: ["", "", "", "", "", "", "", ""] //The Operative
    },
    "LOTR": { //Lord of the Rings
        1: ["INFP", "9w1", "sp/so", "946", "EII", "RLUAI", "FEVL", "PM"], //Frodo Baggins
        2: ["INFJ", "6w5", "so/sp", "612", "ESI", "RCOAI", "VFEL", "M"], //Aragorn
        3: ["ESTJ", "2w3", "so/sp", "286", "SEE", "SLOEN", "", "PC"], //Boromir
        4: ["ENTP", "7w6", "so/sx", "728", "ILE", "RCUAN", "", "CS"], //Meriadoc "Merry" Brandybuck
        5: ["ISFJ", "6w5", "sp/so", "629", "SEI", "SLOAN", "", "PM"], //Samwise "Sam" Gamgee
        6: ["INTJ", "5w6", "so/sp", "512", "LII", "RCOAI", "VELF", "M"], //Gandalf the Grey
        7: ["ESTP", "8w7", "sp/so", "873", "SEE", "SCUEN", "", "CS"], //Gimli
        8: ["ISFP", "9w8", "sx/sp", "936", "SLI", "", "", "SP"], //Legolas
        9: ["ESFP", "7w6", "so/sx", "792", "IEE", "SLUAN", "", "SP"], //Pippin Took
        10: ["ENTJ", "6w5", "sp/sx", "638", "SLE", "RCOEN", "", "CM"] //Gollum
    },
    "C": { //Community
        1: ["ENTP", "3w2", "so/sp", "378", "LIE", "SCUEI", "VLEF", "CS"], //Jeff Winger
        2: ["INFP", "4w5", "so/sx", "416", "EII", "SLUAI", "EVLF", "C"], //Britta Perry
        3: ["INTP", "5w4", "sp/sx", "549", "ILI", "RCUEI", "LVEF", "P"], //Abed Nadir
        4: ["ENFP", "7w6", "so/sx", "793", "SEE", "SCUAN", "EFVL", "S"], //Troy Barnes
        5: ["ISFJ", "1w2", "so/sp", "136", "ESE", "SLOEN", "VELF", "CS"], //Annie Edison
        6: ["ESFJ", "2w1", "so/sp", "216", "ESI", "SCOAN", "", "S"], //Shirley Bennett
        7: ["ESTP", "8w7", "sx/sp", "837", "SLE", "SLUEN", "", "C"], //Pierce Hawthorne
        8: ["ESFP", "7w6", "so/sx", "739", "ESE", "", "", "S"], //Dean Craig Pelton
        9: ["ENFP", "8w7", "sx/so", "872", "SLE", "SLUEI", "", "C"], //Ben "Kevin" Chang
        10: ["ENTP", "6w7", "sp/sx", "631", "", "", "", "PS"] //Ian Duncan
    },
    "WD": { //The Walking Dead
        1: ["ISTJ", "6w5", "sp/so", "612", "LSI", "RCOAN", "FVLE", "MC"], //Rick Grimes
        2: ["ESTP", "8w7", "sx/sp", "873", "SLE", "", "VFLE", "C"], //Shane Walsh
        3: ["ESFJ", "2w1", "so/sp", "216", "", "", "", "PC"], //Lori Grimes
        4: ["ESFP", "6w7", "sp/sx", "684", "SEE", "", "", "CS"], //Andrea Harrison
        5: ["ENFJ", "5w6", "sp/so", "594", "EII", "", "", "MP"], //Dale Horvath
        6: ["ISFJ", "6w7", "so/sp", "692", "SEI", "", "FEVL", "PM"], //Glenn Rhee
        7: ["ESTP", "6w7", "sp/so", "694", "EIE", "SLUAN", "", "CP"], //Carl Grimes
        8: ["ISTP", "8w9", "sp/sx", "846", "SLI", "RLUAN", "LFVE", "CP"], //Daryl Dixon
        9: ["ISFJ", "6w5", "sp/so", "694", "SEI", "RLOAN", "", "MP"], //Carol Peletier
        10: ["ESTP", "8w7", "sp/sx", "873", "SLE", "RLUEN", "", "CS"] //Merle Dixon
    },
    "BBT": { //The Big Bang Theory
        1: ["ISFJ", "9w1", "sp/so", "962", "EII", "RLOAI", "", "MP"], //Leonard Hofstadter
        2: ["ISTJ", "5w6", "sp/so", "513", "LII", "RCOEI", "LVFE", "MC"], //Sheldon Cooper
        3: ["ESFP", "7w6", "sx/so", "728", "ESE", "SCUAN", "EFVL", "S"], //Penny
        4: ["ENTP", "7W6", "so/sx", "739", "ILE", "", "", "S"], //Howard Wolowitz
        5: ["INFP", "4w5", "sx/sp", "496", "IEI", "", "ELFV", "MP"], //Rajesh "Raj" Koothrappali
        6: ["INTP", "5w4", "sx/so", "539", "ILE", "", "", "PC"], //Leslie Winkle
        7: ["ENTJ", "3w2", "sx/sp", "316", "LIE", "", "", "CS"], //Bernadette Rostenkowski
        8: ["INTP", "1w2", "sp/so", "126", "LII", "RLOAI", "LVEF", "MP"], //Amy Farrah Fowler
        9: ["ISFP", "4w3", "so/sx", "495", "", "", "", "M"], //Stuart Bloom
        10: ["ESFJ", "2w1", "", "", "", "", "", ""] //Mary Cooper (née Tucker)
    },
    "TD": { //True Detective
        1: ["INTP", "5w4", "sp/sx", "548", "ILI", "RLUEI", "LVEF", "M"], //Rustin Cohle
        2: ["ESFP", "8w9", "so/sx", "862", "SEE", "", "", "CS"], //Marty Hart
        3: ["ISFJ", "2w1", "", "", "", "", "", ""] //Maggie Hart
    },
    "PR": { //Parks and Recreation
        1: ["ESFJ", "3w2", "so/sp", "316", "ESE", "SLOAI", "VEFL", "S"], //Leslie Knope
        2: ["ISFJ", "2w1", "sp/so", "269", "SEI", "RLOAI", "FEVL", "PS"], //Ann Perkins
        3: ["INTP", "5w6", "sp/sx", "592", "", "", "", "P"], //Mark Brendanawicz
        4: ["ESTP", "3w2", "so/sx", "379", "SEE", "SLUEN", "VFEL", "S"], //Tom Haverford
        5: ["ISTJ", "5w6", "sp/sx", "583", "SLI", "RCOEN", "FVLE", "CP"], //Ron Swanson
        6: ["INTP", "5w4", "sx/sp", "584", "ILI", "SCUEI", "VFLE", "PC"], //April Ludgate
        7: ["ISFJ", "9w1", "sp/so", "962", "EII", "RCOAN", "EFLV", "SP"], //Garry "Jerry" Gergich
        8: ["ESTP", "8w7", "sp/sx", "873", "SLE", "SLUEN", "FVEL", "PC"], //Donna Meagle
        9: ["ISTJ", "1w9", "so/sp", "163", "LII", "RLOEI", "LFVE", "P"], //Ben Wyatt
        10: ["ENFJ", "3w2", "so/sx", "317", "ESE", "SLOAI", "VEFL", "S"] //Chris Traeger
    },
    "HG": { //The Hunger Games
        1: ["ISTP", "6w5", "sp/sx", "684", "SLI", "RLUEN", "LFVE", "PC"], //Katniss Everdeen
        2: ["ENFP", "2w3", "so/sx", "269", "EIE", "SCOAI", "EFVL", "SP"], //Peeta Mellark
        3: ["INTP", "5w6", "sp/so", "583", "ILI", "SCUEI", "VFLE", "MC"], //Haymitch Abernathy
        4: ["ESFJ", "2w3", "so/sx", "471", "ESE", "SLOAN", "VFLE", "S"], //Effie Trinket
        5: ["ENTJ", "8w9", "sp/so", "853", "LSI", "", "VFLE", "CM"], //Coriolanus Snow
        6: ["ENTJ", "3w4", "so/sp", "836", "LIE", "SCOEN", "", "CM"] //Gale Hawthorne
    },
    "FC": { //Fight Club
        1: ["ENTP", "8w7", "sx/so", "854", "SLE", "SCUEI", "VFLE", "C"], //Tyler Durden
        2: ["ISFJ", "9w1", "sp/sx", "964", "EII", "RLOAN", "FLEV", "M"], //The Narrator
        3: ["ESFP", "4w3", "sx/sp", "487", "IEE", "SLUEN", "FELV", "SC"] //Marla Singer
    },
    "SC": { //Sex and the City
        1: ["ENFP", "6w7", "so/sx", "649", "IEE", "", "EFVL", "SM"], //Carrie Bradshaw
        2: ["ISFJ", "2w1", "sx/so", "216", "", "", "", "PM"], //Charlotte York
        3: ["ISTJ", "6w5", "sp/so", "613", "", "", "", "MC"], //Miranda Hobbes
        4: ["ESTP", "7w8", "sx/so", "738", "SEE", "", "", "CS"], //Samantha Jones
        5: ["INTJ", "3w4", "sp/sx", "368", "", "", "", "CS"], //Mr. Big
        6: ["ESFP", "9w8", "", "", "", "", "", ""] //Steve Brady
    },
    "D": { //Dexter
        1: ["ISTJ", "1w9", "sp/sx", "153", "LSI", "RCOEN", "", "MP"], //Dexter Morgan
        2: ["ISFJ", "2w1", "so/sp", "269", "SEI", "", "", "P"], //Rita Bennet
        3: ["ENFP", "7w6", "sx/so", "741", "SLI", "", "", "S"], //Debra Morgan
        4: ["ESTP", "8w7", "sx/so", "836", "SLE", "", "", "C"], //James Doakes
        5: ["ESTJ", "3w4", "so/sp", "386", "SEE", "", "", "C"], //Maria LaGuerta
        6: ["ESFJ", "9w8", "so/sx", "972", "LSE", "", "", "PS"], //Angel Batista
        7: ["ENFJ", "6w5", "", "", "", "", "", "MC"], //Harry Morgan
        8: ["ENTP", "7w6", "", "794", "LII", "", "", ""], //Vince Masuka
        9: ["ESTJ", "8w7", "", "", "", "", "", ""], //Tom Matthews
        10: ["ESTP", "7w8", "", "", "", "", "", ""] //Joey Quinn
    },
    "DK": { //The Dark Knight
        1: ["INTJ", "1w9", "sp/so", "153", "LSI", "RCOEI", "LVEF", "CM"], //Bruce Wayne "Batman"
        2: ["ISFJ", "2w1", "sx/sp", "296", "", "", "", ""], //Alfred Pennyworth
        3: ["ENTP", "7w8", "sx/sp", "784", "ILE", "SLUEI", "VFLE", "CS"], //The Joker
        4: ["ISTJ", "1w9", "sx/sp", "", "ESI", "", "", "MC"], //James Gordon
        5: ["ENFJ", "3w2", "so/sx", "368", "EIE", "", "", "SC"], //Harvey Dent "Two-Face"
        6: ["ESFJ", "1w2", "so/sx", "162", "ESI", "", "", ""], //Rachel Dawes
        7: ["INTP", "5w4", "sx/sp", "549", "ILI", "", "", "PS"], //Lucius Fox
        8: ["ENFJ", "1w2", "", "", "", "", "", ""], //Anthony Garcia
        9: ["ENTJ", "5w6", "", "", "", "", "", ""], //Lau
        10: ["ESTJ", "3w2", "", "", "", "", "", ""] //Sal Maroni
    },
    "WSW": { //Westworld
        1: ["INFP", "2w1", "sx/so", "216", "EII", "", "", "MS"], //Dolores Abernathy
        2: ["ENTJ", "8w9", "sp/sx", "", "SEE", "", "", "CM"], //Maeve Millay
        3: ["INTP", "5w6", "", "", "LII", "", "", "M"], //Benard Lowe
        4: ["ISFJ", "9w8", "", "", "", "", "", ""], //Teddy Flood
        5: ["ISTJ", "6w5", "", "", "", "", "", "P"], //Ashley Stubbs
        6: ["ENTP", "7w6", "", "", "", "", "", "C"], //Lee Sizemore
        7: ["ENTP", "6w5", "", "", "ILI", "", "", "MC"], //Elsie Hughes
        8: ["ISTP", "8w9", "sp/sx", "", "SLE", "", "", "C"], //Man in Black
        9: ["INTJ", "5w4", "sx/sp", "548", "ILI", "RCOEI", "", "P"], //Dr. Robert Ford
        10: ["ESTJ", "3w4", "", "316", "", "", "", "CM"], //Theresa Cullen
        11: ["ENTJ", "3w4", "", "", "", "", "", ""], //Charlotte Hale
        12: ["INFJ", "9w1", "", "", "", "", "", ""], //Akecheta
        13: ["ISFP", "9w1", "", "926", "", "", "", "PS"], //Clementine Pennyfeather
        14: ["ESTP", "7w8", "so/sx", "738", "SLE", "", "", "S"], //Logan
        15: ["INFP", "9w1", "", "926", "", "", "", ""] //Felix Lutz
    },
    "LK": { //The Lion King
        1: ["ESFP", "7w6", "so/sx", "739", "ESE", "", "", "S"], //Simba
        2: ["ESFJ", "6w7", "sx/so", "682", "ESI", "", "", "CS"], //Nala
        3: ["ENTP", "7w8", "sp/sx", "784", "ILE", "", "LEVF", "CS"], //Timon
        4: ["ESFP", "9w8", "sx/so", "972", "SEI", "", "", "SP"], //Pumbaa
        5: ["INTJ", "3w4", "sx/so", "385", "EIE", "SLUEI", "VELF", "MC"], //Scar
        6: ["ENFJ", "1w2", "so/sp", "126", "ESI", "SCOAI", "", "PC"] //Mufasa
    },
    "CB": { //Casablanca
        1: ["ISTP", "9w8", "sp/so", "", "", "", "", ""], //Rick Blaine
        2: ["ISFJ", "9w1", "sx/so", "", "", "", "", ""], //Ilsa Lund
        3: ["INFJ", "1w2", "so/sp", "", "", "", "", ""] //Victor Laszlo
    },
    "BSG": { //Battlestar Galactica
        1: ["ISTJ", "8w9", "so/sp", "163", "LSE", "", "", ""], //William Adama
        2: ["INFJ", "2w3", "so/sp", "613", "IEI", "", "", "MS"], //Laura Roslin
        3: ["ESTP", "8w7", "sp/so", "873", "SLE", "", "", "C"], //Kara "Starbuck" Thrace
        4: ["INFP", "1w2", "sp/so", "", "", "", "", ""], //Lee 'Apollo' Adama
        5: ["ENTP", "3w4", "so/sp", "369", "ILE", "", "", ""], //Gaius Baltar
        6: ["INFJ", "2w1", "sx/so", "285", "", "", "", ""], //Number Six
        7: ["ISFJ", "6w7", "sp/so", "", "", "", "", ""], //Sharon "Boomer" Valerii
        8: ["ISTJ", "8w7", "", "", "LSI", "", "", ""], //Saul Tigh
        9: ["ISFJ", "6w5", "", "", "", "", "", ""], //Galen Tyrol
        10: ["ISFJ", "1w2", "", "", "", "", "", ""], //Karl "Helo" Agathon
        11: ["ISTJ", "5w4", "", "153", "", "", "", ""], //Felix Gaeta
        12: ["ISFJ", "9w1", "", "", "", "", "", ""], //Anastasia Dualla
        13: ["ISFJ", "6w7", "", "", "", "", "", ""], //Billy Keikeya
        14: ["ISFP", "7w6", "", "", "", "", "", ""], //Cally Henderson
        15: ["ENFP", "7w6", "", "", "", "", "", ""] //Samuel Anders
    },
    "MM": { //Mad Men
        1: ["ENTJ", "3w4", "sx/sp", "385", "SLE", "RCUEI", "VFLE", "MC"], //Donald "Don" Draper
        2: ["INFJ", "6w5", "so/sx", "631", "EII", "", "LVEF", ""], //Margaret "Peggy" Olson
        3: ["ENTP", "3w4", "so/sx", "361", "LIE", "", "VFLE", "CP"], //Peter "Pete" Campbell
        4: ["ISFJ", "1w2", "sp/so", "162", "ESI", "", "", "P"], //Betty Draper
        5: ["ENFJ", "3w2", "sx/so", "317", "ESE", "", "", "PM"], //Joan Holloway
        6: ["ESFJ", "2w3", "", "", "", "", "", ""], //Salvatore "Sal" Romano
        7: ["ENFP", "4w3", "", "", "", "", "", ""], //Paul Kinsey
        8: ["ENFJ", "6w7", "so/sp", "641", "EII", "", "", "PC"], //Kenneth "Ken" Cosgrove
        9: ["ISFJ", "6w5", "", "", "", "", "", ""], //Harlod "Harry" Crane
        10: ["INTJ", "5w4", "", "", "", "", "", ""], //Rachel Menken
        11: ["ESTP", "7w8", "sx/so", "738", "SEE", "", "", "S"], //Roger H. Sterling, Jr.
        12: ["INTP", "9w8", "", "953", "SLI", "", "", ""], //Bertram "Bert" Cooper
        13: ["ISFJ", "3w2", "", "", "", "", "", ""], //Henry Francis
        14: ["ISTJ", "6w5", "sp/so", "", "", "", "", "PM"], //Lane Pryce
        15: ["ENTP", "7w8", "", "", "SLI", "", "", ""] //Stan Rizzo
    },
    "PC": { //Pirates of the Carribean
        1: ["ENTP", "7w8", "sp/sx", "738", "ILE", "SCUEI", "FLVE", "SC"], //Captain Jack Sparrow
        2: ["ESTJ", "8w7", "sp/so", "837", "LIE", "SCOEN", "", "CS"], //Captain Hector Barbossa
        3: ["ISFJ", "6w7", "sx/sp", "638", "ESE", "", "", "SP"], //Joshamee Gibbs
        4: ["ISFJ", "1w2", "sx/so", "125", "ESI", "", "", "P"], //William Turner Jr.
        5: ["ESFP", "8w7", "so/sx", "873", "SEE", "SCOEI", "EVLF", "C"], //Elizabeth Swann
        6: ["ISTJ", "1w9", "sp/so", "136", "ESI", "", "", "PC"] //James Norrington
    },
    "BVS": { //Buffy the Vampire Slayer
        1: ["ESFP", "6w7", "so/sx", "641", "SEE", "SLUAN", "EFVL", "SP"], //Buffy Summers
        2: ["ENTP", "6w7", "sp/so", "693", "ILE", "", "", "SP"], //Xander Harris
        3: ["INFP", "6w5", "so/sx", "692", "EII", "RLOAI", "ELVF", "PM"], //Willow Rosenberg
        4: ["ESTJ", "3w2", "so/sp", "368", "LSE", "SCOEN", "VFEL", "CP"], //Cordelia Chase
        5: ["INTJ", "5w6", "so/sp", "512", "ILI", "RCOAI", "LVFE", "P"], //Rupert Giles
        6: ["ISFJ", "1w2", "sp/so", "146", "ESI", "RLOAI", "", "MP"] //Angel
    },
    "SL": { //Sherlock
        1: ["INTP", "5w6", "sx/sp", "538", "ILE", "RLUEI", "LVEF", "MC"], //Sherlock Holmes
        2: ["ISFJ", "6w5", "sp/so", "612", "ESI", "SLOAN", "FELV", "P"], //John Watson
        3: ["ISTJ", "1w9", "sp/sx", "162", "LSE", "RLOAN", "", "CP"], //Greg Lestrade
        4: ["ESFJ", "2w1", "so/sx", "269", "SEI", "", "", "PS"], //Martha Louis Hudson (née Sissons)
        5: ["ESTJ", "1w9", "sp/so", "163", "LSE", "SCOEI", "LVFE", "MP"], //Mycroft Holmes
        6: ["INFP", "2w1", "sx/so", "269", "EII", "", "", "PM"] //Molly Hooper
    },
    "SVU": { //Law & Order: SVU
        1: ["INFJ", "1w2", "sp/so", "162", "ESI", "RCOAN", "", "M"], //Olivia Benson
        2: ["INTP", "5w6", "sp/sx", "594", "ILE", "RCUEI", "", ""], //John Munch
        3: ["ISTJ", "6w5", "sp/so", "", "SLI", "", "", ""], //Captain Donald Cragen
        4: ["ESTJ", "8w9", "so/sp", "862", "LSE", "SLUEN", "", "C"], //Elliot Stabler
        5: ["ISTP", "9w8", "sp/sx", "954", "SLI", "RCUAN", "", "P"], //Odafin 'Fin' Tutuola
        6: ["ENTJ", "1w2", "so/sp", "", "LSI", "RCOEN", "", ""] //Dr. Melinda Warner
    },
    "JP": { //Jurassic Park
        1: ["ISTP", "5w6", "sp/sx", "593", "SLI", "RCOEI", "", "PC"], //Dr. Alan Grant
        2: ["ENFJ", "2w3", "so/sx", "261", "EIE", "SCOAI", "VFEL", "SP"], //Dr. Ellie Sattler
        3: ["ENTP", "5w6", "so/sp", "548", "ILE", "SCUEI", "VFLE", "PS"], //Dr. Ian Malcolm
        4: ["ENFP", "7w6", "so/sx", "731", "EIE", "", "", "S"], //John Hammond
        5: ["ISTP", "", "", "", "", "", "", ""], //Ray Arnold
        6: ["ENTP", "7w6", "sx/sp", "784", "ILE", "", "", "S"] //Dennis Nedry
    },
    "CRA": { //Crazy Rich Asians
        1: ["ENFJ", "6w7", "so/sp", "629", "IEE", "SLOAN", "", "S"], //Rachel Chu
        2: ["ISFJ", "6w5", "so/sx", "694", "ESI", "", "", "M"], //Nick Young
        3: ["ESTJ", "8w9", "so/sp", "836", "LSE", "", "", "CM"], //Eleanor Young
        4: ["ENTP", "7w6", "so/sp", "793", "SEE", "", "", "SC"], //Peik Lin Goh
        5: ["INFJ", "1w9", "so/sp", "136", "EIE", "", "", "MP"], //Astrid Young-Teo
        6: ["ESTP", "", "", "", "", "", "", ""] //Colin Khoo
    },
    "SV": { //Sillicon Valley
        1: ["INFP", "6w5", "sp/so", "641", "EII", "RLUEI", "", "M"], //Richard Hendricks
        2: ["ENTP", "8w7", "sp/so", "873", "SEE", "SLUEN", "", "CS"], //Erlich Bachman
        3: ["ISFP", "9w1", "", "964", "SLI", "", "", "SP"], //Nelson "Big Head" Bighetti
        4: ["ISTP", "8w9", "sp/so", "584", "LSI", "RCUEI", "FLVE", "CP"], //Bertram Gilfoyle
        5: ["ENFP", "3w4", "so/sx", "359", "IEE", "SCUAI", "", "SC"], //Dinesh Chugtai
        6: ["INTJ", "5w4", "", "", "", "", "", "PC"], //Peter Gregory
        7: ["ENFJ", "3w2", "so/sx", "", "LIE", "SCOAI", "", "SM"], //Monica Hall
        8: ["ISFJ", "2w1", "so/sx", "269", "SEI", "SCOAN", "", "SM"], //Donald "Jared" Dunn
        9: ["ENTJ", "8w7", "sp/so", "835", "LIE", "SLOEN", "", "C"], //Gavin Belson
        10: ["ISTP", "8w9", "sx/sp", "853", "", "", "", ""] //Jian Yang
    }
}; //437+3=440 //447
