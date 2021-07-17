var types_db = {
    "GOT": { //Game of Thrones
        1: ["ISFP", "9", "9w1", "sp/so", "962", "ESI", "", "FEVL", "Melancholic-Phlegmatic"], //Jon Snow
        2: ["ENTP", "7", "7w6", "sx/so", "731", "ILE", "SLUEI", "LVEF", "Sanguine-Melancholic"], //Tyrion Lannister
        3: ["ENFJ", "1", "1w2", "sx/so", "146", "ESI", "RCOAN", "EVLF", "Melancholic-Choleric"], //Daenerys Targaryen
        4: ["ESFJ", "3", "3w4", "sp/so", "361", "SEI", "RCOAI", "FELV", "Phlegmatic-Melancholic"], //Sansa Stark
        5: ["ISTP", "8", "8w7", "sx/sp", "684", "SLE", "RLOEI", "FLVE", "Choleric-Melancholic"], //Arya Stark
        6: ["ESTP", "3", "3w2", "sx/so", "397", "ESE", "SCUEN", "FLEV", "Choleric-Melancholic"], //Jamie Lannister
        7: ["INFP", "6", "6w5", "sp/so", "694", "EII", "", "", "Phlegmatic-Melancholic"], //Samwell Tarly
        8: ["ISFJ", "6", "6w5", "sx/so", "629", "ESI", "", "", "Phlegmatic-Melancholic"], //Jorah Mormont
        9: ["ESFP", "6", "6w7", "sp/so", "641", "SEE", "", "", "Choleric-Melancholic"], //Theon Greyjoy
        10: ["INTJ", "3", "3w4", "sp/sx", "351", "LIE", "", "VLFE", "Phlegmatic [Dominant]"], //Petyr Baelish "Littlefinger"
        11: ["ISFP", "2", "2w1", "sp/so", "692", "", "RCOAN", "FEVL", "Phlegmatic [Dominant]"], //Davos Seaworth
        12: ["ISTJ", "1", "1w9", "sp/so", "162", "ESI", "", "LFVE", "Phlegmatic [Dominant]"], //Eddard "Ned" Stark
        13: ["INFP", "9", "9w1", "sp/so", "954", "", "", "", "Melancholic [Dominant]"], //Brandon Stark
        14: ["ISTJ", "1", "1w9", "sp/so", "163", "LSI", "", "", "Melancholic-Phlegmatic"], //Brinne of Tarth
        15: ["ISTP", "8", "8w9", "sp/sx", "864", "SLI", "", "", "Melancholic-Choleric"], //Sandor Clegane "The Hound"
        16: ["INFJ", "5", "5w6", "so/sp", "592", "LII", "", "LEVF", "Phlegmatic [Dominant]"], //Lord Varys "The Spider"
        17: ["ISFJ", "9", "9w1", "so/sp", "926", "ESI", "", "", "Phlegmatic-Choleric"], //Catelyn Stark (née Tully)
        18: ["ENTJ", "8", "8w9", "sp/so", "863", "LSI", "SCOEI", "VFEL", "Melancholic-Choleric"], //Tywin Lannister
        19: ["ENFJ", "3", "3w2", "so/sx", "379", "ESE", "SCOAI", "VEFL", "Sanguine-Melancholic"], //Margery Tyrell
        20: ["ESTJ", "1", "1w9", "so/sx", "163", "ESI", "", "", "Choleric-Sanguine"], //Robb Stark
        21: ["ESTP", "7", "7w8", "sp/so", "739", "SEE", "", "", "Sanguine-Choleric"], //Bronn
        22: ["ISTJ", "1", "1w9", "sp/so", "163", "LSI", "RCOEN", "", "Melancholic-Choleric"], //Stannis Baratheon
        23: ["ESFP", "3", "3w4", "sx/sp", "387", "SEE", "", "", "Choleric [Dominant]"], //Joffrey Baratheon
        24: ["INFJ", "1", "1w2", "sx/sp", "154", "EIE", "", "VELF", "Melancholic-Phlegmatic"], //Melisandre "The Red Woman"
        25: ["ENTJ", "8", "8w7", "so/sx", "837", "SLE", "", "", "Choleric [Dominant]"], //Olenna Tyrell "Queen of Thorns"
        26: ["ESTP", "8", "8w7", "sx/so", "873", "SEE", "", "", "Choleric-Sanguine"], //Ygritte
        27: ["ESTJ", "3", "3w4", "sp/sx", "368", "SEE", "", "VLFE", "Choleric [Dominant]"], //Cersei Lannister
        28: ["ESFP", "3", "3w4", "sx/so", "387", "", "", "", "Choleric [Dominant]"], //Shae
        29: ["ESFP", "7", "7w8", "sx/so", "783", "SEE", "", "", "Sanguine-Choleric"], //Oberyn Martell "The Red Viper"
        30: ["ESTJ", "8", "8w9", "so/sx", "837", "", "", "", "Choleric-Phlegmatic"] //Yara Greyjoy
    },
    "HP": { //Harry Potter
        1: ["ESFP", "6", "6w7", "so/sx", "639", "SEI", "SLUAN", "EFVL", "Sanguine [Dominant]"], //Ron Weasley
        2: ["ISFP", "9", "9w8", "sp/sx", "964", "SLI", "RLUAN", "FEVL", "Phlegmatic-Choleric"], //Harry Potter
        3: ["ESTJ", "1", "1w2", "so/sp", "163", "LSE", "SCOEI", "LVFE", "Choleric [Dominant]"], //Hermione Granger
        4: ["ISFP", "2", "2w1", "so/sx", "269", "SEI", "RCUAN", "", "Phlegmatic-Sanguine"], //Rubeus Hagrid
        5: ["INFJ", "1", "1w9", "sp/so", "125", "EII", "RCOAI", "LVEF", "Phlegmatic-Choleric"], //Albus Dumbledore
        6: ["ISTJ", "1", "1w2", "sp/so", "153", "LSI", "RCOAI", "", "Melancholic-Choleric"], //Minerva McGonagall
        7: ["INTJ", "6", "6w5", "sp/sx", "641", "LSI", "RLOEI", "LVFE", "Melancholic-Choleric"], //Severus Snape
        8: ["ISFJ", "6", "6w7", "so/sx", "692", "SEE", "", "", "Phlegmatic-Sanguine"], //Ginny Weasley
        9: ["INFP", "9", "9w1", "sx/sp", "945", "IEI", "RCUAI", "ELVF", "Phlegmatic [Dominant]"], //Luna Lovegood
        10: ["ESTJ", "3", "3w4", "so/sp", "361", "EIE", "SLOEN", "VLFE", "Choleric [Dominant]"], //Draco Malfoy
        11: ["ESFJ", "2", "2w1", "so/sx", "216", "ESI", "", "", "Phlegmatic [Dominant]"], //Molly Weasley
        12: ["ENTJ", "8", "8w7", "sp/sx", "385", "SLE", "SCOEI", "VFLE", "Choleric [Dominant]"], //Voldemort
        13: ["ISFJ", "9", "9w1", "so/sp", "926", "ESI", "SLUAI", "", "Sanguine-Melancholic"], //Cho Chang
        14: ["ESFJ", "3", "3w2", "sx/so", "371", "ESE", "", "", "Sanguine-Phlegmatic"], //Fleur Delacour
        15: ["ISTP", "9", "9w8", "so/sp", "", "SLI", "", "", "Phlegmatic [Dominant]"], //Viktor Krum
        16: ["ISFJ", "6", "6w5", "", "", "", "", "", "Phlegmatic-Choleric"], //Filius Flitwick
        17: ["ESFJ", "3", "3w2", "so/sx", "296", "ESE", "", "", "Sanguine-Phlegmatic"], //Horace Slughorn
        18: ["ENTP", "7", "7w6", "so/sx", "792", "ILE", "SLUEI", "", "Sanguine [Dominant]"], //George Weasley
        19: ["ESTJ", "6", "6w5", "sp/so", "683", "SLE", "", "", "Choleric-Melancholic"], //Alastor "Mad-Eye" Moody
        20: ["INFJ", "9", "9w1", "sp/so", "952", "EII", "RCOAI", "ELFV", "Melancholic-Phlegmatic"], //Remus Lupin
        21: ["INTP", "5", "5w6", "sp/so", "592", "ILE", "SCUEI", "VFLE", "Phlegmatic-Sanguine"], //Arthur Weasley
        22: ["ESTJ", "6", "6w5", "sp/sx", "", "", "", "", "Choleric [Dominant]"], //Cornelius Fudge
        23: ["ESTJ", "1", "1w2", "so/sp", "136", "LSI", "SCOEN", "", "Choleric [Dominant]"], //Dolores Umbridge
        24: ["ESFJ", "1", "1w2", "sp/so", "162", "ESI", "", "", "Choleric-Melancholic"], //Petunia Dursley
        25: ["ISFP", "4", "4w5", "so/sx", "", "SEE", "", "", "Melancholic [Dominant]"], //Moaning Myrtle
        26: ["ENTP", "3", "3w2", "so/sp", "", "IEE", "", "", "Sanguine [Dominant]"], //Rita Skeeter
        27: ["INFP", "6", "6w5", "so/sp", "629", "ESI", "", "", "Melancholic-Phlegmatic"], //Dobby
        28: ["ESFP", "7", "7w8", "sx/so", "783", "SEE", "SCOEI", "", "Choleric-Sanguine"], //Bellatrix Lestrange
        29: ["ENFP", "7", "7w6", "so/sp", "748", "IEE", "", "", "Choleric [Dominant]"], //Nymphadora Tonks
        30: ["ESTP", "7", "7w8", "sx/so", "783", "ILE", "SLUEN", "", "Sanguine-Choleric"] //Sirius Black
    },
    "TO": { //The Office
        1: ["ENFP", "7", "7w6", "sx/so", "729", "EIE", "SLUAI", "EVLF", "Sanguine [Dominant]"], //Michael Scott
        2: ["ESTJ", "6", "6w5", "sx/sp", "613", "LSI", "SLOEN", "LFVE", "Choleric [Dominant]"], //Dwight Schrute
        3: ["ENTP", "9", "9w8", "sp/so", "972", "IEE", "SCUAI", "FLEV", "Phlegmatic-Sanguine"], //Jim Halpert
        4: ["ISFJ", "9", "9w1", "sp/so", "962", "SEI", "RCOAN", "FEVL", "Phlegmatic [Dominant]"], //Pam Beesly
        5: ["ESTP", "3", "3w4", "sx/so", "378", "SLE", "", "FLVE", "Melancholic-Phlegmatic"], //Ryan Howard
        6: ["ESFP", "3", "3w4", "so/sx", "379", "SEE", "", "EVFL", "Sanguine-Choleric"], //Andy Bernard
        7: ["ENTJ", "3", "3w4", "so/sp", "387", "LIE", "", "", "Choleric [Dominant]"], //Jan Levinson
        8: ["ISTP", "8", "8w9", "sp/sx", "953", "SLI", "RCOEN", "", "Choleric-Phlegmatic"], //Stanley Hudson
        9: ["ISFP", "7", "7w6", "sx/sp", "792", "SEI", "", "", "Phlegmatic [Dominant]"], //Kevin Malone
        10: ["ESTP", "7", "7w8", "sx/sp", "782", "SLE", "", "", "Sanguine [Dominant]"], //Meredith Palmer
        11: ["ISTJ", "1", "1w9", "sp/sx", "163", "ESI", "", "LVFE", "Melancholic [Dominant]"], //Angela Martin
        12: ["ISFJ", "2", "2w1", "sp/so", "216", "IEI", "", "", "Phlegmatic-Melancholic"], //Phyllis Lapin
        13: ["ESFP", "3", "3w2", "so/sx", "379", "SEE", "SLUEN", "EFLV", "Sanguine [Dominant]"], //Kelly Kapoor
        14: ["ENFP", "6", "6w7", "so/sp", "692", "IEE", "", "", "Phlegmatic [Dominant]"], //Erin Hannon
        15: ["ENTJ", "5", "5w6", "sx/sp", "584", "LIE", "SCUEI", "VFLE", "Melancholic-Choleric"] //Robert California
    },
    "F": { //Friends
        1: ["ESFP", "3", "3w4", "sx/so", "368", "ESE", "SLUEN", "FVEL", "Sanguine [Dominant]"], //Rachel Green
        2: ["ESTJ", "1", "1w2", "so/sx", "136", "ESE", "SLOAN", "VFEL", "Choleric [Dominant]"], //Monica Geller
        3: ["ENFP", "7", "7w8", "sx/so", "749", "IEE", "SCUAI", "EVFL", "Sanguine [Dominant]"], //Pheobe Buffay
        4: ["ESFP", "7", "7w6", "sx/so", "793", "ESE", "SCUAN", "FELV", "Sanguine [Dominant]"], //Joey Tribbiani
        5: ["ENTP", "6", "6w7", "so/sp", "639", "ILE", "SLUAI", "LEVF", "Melancholic-Sanguine"], //Chandler Bing
        6: ["ISTJ", "6", "6w5", "sp/sx", "614", "LII", "RLOEI", "LVEF", "Melancholic-Choleric"] //Ross Geller
    },
    "WW": { //The West Wing
        1: ["ENTJ", "3", "3w2", "so/sp", "583", "", "", "", "Choleric-Sanguine"], //Jed Bartlet
        2: ["ISTJ", "1", "1w9", "sp/so", "", "", "", "", ""], //Leo McGarry
        3: ["ENTP", "8", "8w7", "sx/so", "836", "SLE", "", "", "Phlegmatic [Dominant]"], //Josh Lyman
        4: ["INTJ", "5", "5w4", "so/sp", "164", "", "", "", ""], //Toby Ziegler
        5: ["ENFP", "2", "2w3", "so/sp", "127", "", "", "", ""], //Sam Seaborn
        6: ["ENFJ", "3", "3w2", "so/sp", "317", "", "", "", ""], //CJ Cregg
        7: ["ISTJ", "9", "9w1", "", "", "", "", "", ""], //Chrlie Young
        8: ["ESFJ", "6", "6w7", "sp/so", "926", "", "", "", ""], //Donna Moss
        9: ["ENFJ", "8", "8w9", "sp/so", "", "", "", "", ""], //Abbey Bartlet
        10: ["", "", "", "", "", "", "", "", ""] //Joey Lucas
    },
    "L": { //LOST
        1: ["ISTJ", "9", "9w8", "sp/so", "953", "SLI", "", "", "Melancholic-Choleric"], //Sayid Jarrah
        2: ["ISFP", "9", "9w1", "sp/so", "694", "", "", "", "Melancholic [Dominant]"], //Claire Littleton
        3: ["ESTJ", "1", "1w2", "so/sp", "126", "LSE", "", "", "Choleric-Melancholic"], //Jack Shephard
        4: ["ISFP", "9", "9w1", "sp/so", "972", "SEI", "", "", "Sanguine-Phlegmatic"], //Hugo "Hurley" Reyes
        5: ["ESFP", "7", "7w6", "sx/so", "748", "", "", "", "Choleric-Sanguine"], //Shannon Rutherford
        6: ["ESTP", "8", "8w7", "sp/sx", "784", "SEE", "VFLE", "", "Melancholic-Sanguine"], //James "Sawyer" Ford
        7: ["INTJ", "5", "5w6", "sp/sx", "584", "LII", "", "", "Melancholic-Choleric"], //Benjamin Linus
        8: ["ISTJ", "1", "1w9", "sp/sx", "613", "", "", "", "Melancholic-Choleric"], //Jin Kwon
        9: ["ISFJ", "6", "6w7", "sp/sx", "648", "", "", "", "Melancholic [Dominant]"], //Michael Dawson
        10: ["INFP", "9", "9w1", "sx/sp", "694", "EII", "", "", "Melancholic-Phlegmatic"], //Desmond Hume
        11: ["ISFJ", "2", "2w1", "so/sp", "269", "", "", "", "Melancholic-Phlegmatic"], //Sun Kwon
        12: ["ISFP", "6", "6w7", "sp/sx", "649", "", "", "", "Melancholic [Dominant]"], //Kate Austen
        13: ["ISFP", "6", "6w7", "so/sx", "694", "IEI", "", "", "Sanguine-Melancholic"], //Charlie Pace
        14: ["INFJ", "4", "4w5", "sp/so", "459", "IEI", "", "", "Melancholic [Dominant]"], //John Locke
        15: ["INFJ", "1", "1w9", "sp/so", "152", "", "", "", "Melancholic-Phlegmatic"] //Juliet Burke
    },
    "TW": { //The Wire
        1: ["ISTJ", "1", "1w9", "", "", "LSE", "", "", "Phlegmatic [Dominant]"], //Cedric Daniels
        2: ["ENTP", "8", "8w7", "sx/so", "874", "ILE", "SCUEN", "VLFE", "Sanguine-Choleric"], //Jimmy McNulty
        3: ["ISTP", "8", "8w7", "", "863", "", "", "", ""], //Kima Greggs
        4: ["INTP", "5", "5w6", "sx/sp", "541", "ILI", "RCUEI", "LVEF", "Phlegmatic [Dominant]"], //Lester Freamon
        5: ["ESTP", "7", "7w6", "", "792", "IEE", "", "", ""], //Bunk Moreland
        6: ["ESTP", "7", "7w8", "", "", "", "", "", ""], //Thomas Herk Hauk
        7: ["ESFJ", "3", "3w2", "", "", "", "", "", ""], //Ellis Carver
        8: ["ENFP", "7", "7w6", "", "", "IEE", "", "", ""], //Bubbles
        9: ["ESTJ", "8", "8w7", "", "", "", "", "", "Choleric [Dominant]"], //William Rawls
        10: ["INFJ", "5", "5w6", "", "", "", "", "", "Melancholic-Sanguine"], //Roland "Prez" Pryzbylewski
        11: ["ESTJ", "3", "3w2", "", "", "", "", "", ""], //Rhonda Pearlman
        12: ["ISFP", "6", "6w5", "sx/sp", "682", "SEE", "", "", "Phlegmatic-Sanguine"], //Omar Little
        13: ["ESTJ", "3", "3w4", "", "", "", "", "", ""], //Ervin Burrell
        14: ["ESTJ", "8", "8w9", "so/sp", "", "SEE", "", "", ""], //Bodie Broadus
        15: ["ENTJ", "3", "3w2", "sp/sx", "358", "LIE", "RCOEI", "LVFE", "Melancholic-Choleric"], //Stringer Bell
        16: ["ENTJ", "3", "3w2", "", "316", "EIE", "", "", ""], //Tommy Carcetti
        17: ["ESTP", "6", "6w7", "", "682", "SEE", "", "", ""], //Avon Barksdale
        18: ["ISTP", "6", "6w5", "", "", "SLI", "", "", ""], //Chris Partlow
        19: ["ENTJ", "3", "3w2", "", "", "", "", "", ""], //Norman Wilson
        20: ["ISTP", "6", "6w5", "", "684", "SLE", "", "", ""], //Michael Lee
        21: ["ENTP", "3", "3w4", "", "", "", "", "", ""], //Maurice Levy
        22: ["ISFJ", "2", "2w1", "", "", "", "", "", ""], //Beatrice "Beadie" Russell
        23: ["ISFP", "4", "4w3", "sx/sp", "", "", "", "", ""], //Dennis Cutty Wise
        24: ["ISFP", "4", "4w3", "", "469", "EII", "", "", "Melancholic [Dominant]"], //D'Angelo Barksdale
        25: ["ESTP", "8", "8w9", "sp/sx", "873", "SLE", "", "", "Sanguine [Dominant]"], //Clay Davis
        26: ["", "", "", "", "", "", "", "", ""], //Clarence Royce
        27: ["ISTJ", "6", "6w7", "", "", "", "", "", ""], //Spiros Vondas
        28: ["ESTJ", "6", "6w5", "", "", "", "", "", ""], //Frank Sobotka
        29: ["ESFP", "7", "7w6", "so/sx", "782", "", "", "", "Sanguine [Dominant]"], //Ziggy Sobotka
        30: ["ISTP", "6", "6w7", "", "", "", "", "", ""] //Nick Sobotka
    },
    "ALA": { //Avatar: The Last Airbender
        1: ["ENFP", "9", "9w1", "so/sx", "972", "IEE", "SCUAI", "EVFL", "Sanguine [Dominant]"], //Aang
        2: ["INFP", "4", "4w3", "sp/sx", "461", "ESI", "RLOEN", "EFVL", "Melancholic-Choleric"], //Zuko
        3: ["ESFJ", "2", "2w1", "so/sp", "216", "ESI", "SCOAN", "EVFL", "Phlegmatic-Choleric"], //Katara
        4: ["ISTP", "8", "8w7", "sp/sx", "873", "SLE", "SCUEN", "FVLE", "Choleric-Phlegmatic"], //Toph Beifong
        5: ["ESTJ", "6", "6w7", "so/sp", "631", "LSE", "SLOEN", "LFVE", "Choleric-Sanguine"], //Sokka
        6: ["ENTJ", "8", "8w7", "so/sp", "386", "SLE", "SLOEN", "VLFE", "Choleric [Dominant]"], //Azula
        7: ["ENFJ", "9", "9w1", "sx/so", "927", "ESE", "SCUAI", "FEVL", "Phlegmatic-Sanguine"], //Iroh
        8: ["ESTJ", "8", "8w7", "sp/sx", "836", "SLE", "SCOEN", "VFLE", "Choleric [Dominant]"], //Ozai
        9: ["ESFP", "7", "7w6", "so/sx", "749", "ESE", "SCUAN", "EFVL", "Sanguine [Dominant]"], //Ty Lee
        10: ["ESTJ", "6", "6w5", "", "613", "", "SCOAN", "", "Phlegmatic-Choleric"] //Hakoda
    },
    "DS9": { //Star Trek: Deep Space Nine
        1: ["ENTP", "7", "7w8", "sx/so", "731", "ILE", "", "", "Sanguine [Dominant]"], //Jadzia Dax
        2: ["ISTJ", "1", "1w2", "sp/sx", "163", "LSI", "", "", "Choleric-Melancholic"], //Odo
        3: ["ISTJ", "6", "6w5", "sp/sx", "863", "LSI", "", "", "Choleric-Melancholic"], //Worf
        4: ["ESTJ", "6", "6w5", "so/sp", "638", "ILE", "", "", "Sanguine-Melancholic"], //Nog
        5: ["ESTP", "3", "3w2", "sp/sx", "378", "EIE", "", "", "Sanguine [Dominant]"], //Quark
        6: ["ENFJ", "1", "1w9", "sp/so", "164", "EII", "", "", "Melancholic [Dominant]"], //Benjamin Sisko
        7: ["ENTP", "5", "5w4", "sp/so", "538", "ILE", "", "", "Melancholic [Dominant]"], //Elim Garak
        8: ["ISFP", "8", "8w7", "sp/sx", "864", "SEE", "", "", "Choleric [Dominant]"], //Kira Nerys
        9: ["ENFP", "2", "2w3", "so/sp", "271", "IEE", "", "", "Sanguine [Dominant]"], //Julian Bashir
        10: ["ENTJ", "8", "8w7", "sp/so", "835", "SLE", "", "", "Choleric-Phlegmatic"], //Gul Dukat
        11: ["INTP", "6", "6w5", "sp/so", "692", "SEI", "", "", "Phlegmatic [Dominant]"], //Rom
        12: ["ISTP", "9", "9w8", "sp/so", "953", "ILI", "", "", "Melancholic-Phlegmatic"], //Miles O'Brien
        13: ["ENFP", "9", "9w1", "so/sx", "972", "IEE", "", "", "Phlegmatic [Dominant]"], //Jake Sisko
        14: ["ESFJ", "3", "3w2", "so/sp", "316", "LSE", "", "", "Choleric [Dominant]"], //Kai Winn Adami
        15: ["ESTP", "8", "8w9", "sx/sp", "", "", "", "", "Choleric-Sanguine"] //Kasidy Yates
    },
    "PP": { //Pride and Prejudice
        1: ["INTJ", "1", "1w9", "sp/so", "154", "LII", "", "", "Melancholic-Choleric"], //Fitzwilliam Darcy
        2: ["ENFP", "7", "7w6", "so/sx", "714", "ESE", "", "", "Sanguine [Dominant]"], //Elizabeth Bennet
        3: ["ISTJ", "1", "1w2", "", "136", "SLI", "", "", "Melancholic [Dominant]"], //Mr. Collins
        4: ["ESTP", "7", "7w8", "so/sp", "", "SEE", "", "", "Choleric-Sanguine"], //George Wickham
        5: ["ESFJ", "9", "9w1", "so/sx", "927", "SEI", "", "", "Sanguine-Phlegmatic"], //Charles Bingley
        6: ["ENFJ", "9", "9w1", "so/sx", "927", "", "", "", "Sanguine [Dominant]"], //Georgina Darcy
        7: ["ESFP", "7", "7w8", "sp/so", "", "", "", "", "Sanguine [Dominant]"], //Lydia Bennet
        8: ["ISFJ", "9", "9w1", "sp/so", "926", "EII", "", "", "Phlegmatic [Dominant]"], //Jane Bennet
        9: ["ESFJ", "2", "2w3", "so/sp", "", "", "", "", "Sanguine-Choleric"], //Mrs. Bennet
        10: ["ESTJ", "8", "8w7", "sx/so", "854", "", "", "", "Choleric [Dominant]"] //Catherine de Bourgh
    },
    "MCU": { //Marvel Cinematic Universe
        1: ["ENTP", "7", "7w8", "sx/sp", "738", "LIE", "SLUEI", "VLEF", "Choleric-Sanguine"], //Tony Stark "Iron Man"
        2: ["ISFJ", "1", "1w2", "so/sx", "126", "ESI", "RCOAN", "EVFL", "Phlegmatic [Dominant]"], //Steve Rogers "Captain America"
        3: ["ISTP", "6", "6w5", "sx/sp", "612", "LSE", "RLUEN", "VLEF", "Choleric-Melancholic"], //Natasha Rpmanoff "Black Widow"
        4: ["INTP", "9", "9w1", "sp/so", "954", "ILI", "RCUAI", "LFEV", "Melancholic-Phlegmatic"], //Bruce Banner "Hulk"
        5: ["ISFP", "6", "6w7", "sp/so", "684", "ESI", "", "", "Phlegmatic-Sanguine"], //Carol Danvers "Captain Marvel"
        6: ["ESTP", "7", "7w8", "sx/so", "782", "SEE", "SCOAN", "VFLE", "Sanguine-Choleric"], //Thor
        7: ["ENTJ", "8", "8w9", "sp/so", "863", "LIE", "", "VFLE", "Choleric [Dominant]"], //Nick Fury
        8: ["INTJ", "5", "5w6", "sp/so", "531", "LII", "RCOEI", "LVFE", "Melancholic-Choleric"], //Stephen Strange "Doctor Strange"
        9: ["ISFJ", "1", "1w9", "so/sp", "162", "ESI", "RCOAN", "", "Phlegmatic-Melancholic"], //T'Challa Black Panther
        10: ["ISTJ", "6", "6w5", "sp/so", "682", "SLI", "RCOAN", "", "Melancholic [Dominant]"], //Gamora
        11: ["INTJ", "1", "1w9", "so/sp", "163", "LSI", "RCOEI", "LVFE", "Melancholic-Choleric"], //Thanos
        12: ["ENTJ", "8", "8w9", "sp/so", "835", "LIE", "", "", "Choleric [Dominant]"], //Peggy Carter
        13: ["INFJ", "4", "4w3", "sx/so", "468", "EIE", "SCOEI", "VELF", "Melancholic-Choleric"], //Loki
        14: ["ISTP", "9", "9w8", "sp/sx", "962", "SLI", "RCUEN", "FVLE", "Phlegmatic-Sanguine"], //Clint Barton "Hawkeye" 
        15: ["ESFP", "7", "7w6", "so/sx", "739", "ESE", "SCUAN", "EFLV", "Sanguine [Dominant]"] //Peter Quill "Star-Lord"
    },
    "S": { //The Simpsons
        1: ["ESFP", "9", "9w8", "sp/sx", "972", "SEI", "SLUEN", "FEVL", "Sanguine [Dominant]"], //Homer Simpson
        2: ["ESTP", "7", "7w8", "so/sx", "738", "ILE", "SCUEN", "FELV", "Sanguine [Dominant]"], //Bart Simpson
        3: ["ISFJ", "2", "2w1", "so/sx", "269", "ESI", "SLOAN", "EVFL", "Phlegmatic [Dominant]"], //Marge Simpson
        4: ["INFJ", "1", "1w2", "so/sp", "154", "EII", "RLOAI", "VELF", "Melancholic [Dominant]"], //Lisa Simpson
        5: ["ENFJ", "2", "2w1", "so/sx", "296", "ESI", "", "", "Melancholic [Dominant]"], //Apu Nahasapeemapetilon
        6: ["INTJ", "8", "8w9", "so/sp", "836", "SLE", "RLOEI", "", "Choleric-Melancholic"], //Montgomery Burns
        7: ["ESFJ", "2", "2w1", "so/sx", "269", "ESE", "SLOAN", "", "Sanguine-Phlegmatic"], //Ned Flanders
        8: ["ISFP", "6", "6w7", "sp/sx", "261", "EII", "", "", "Melancholic [Dominant]"], //Milhouse Van Houten
        9: ["ISTP", "6", "6w5", "so/sx", "649", "SLI", "", "", "Melancholic-Choleric"], //Moe Szyslak
        10: ["ESTP", "6", "6w7", "sx/so", "684", "SLE", "", "", "Choleric-Melancholic"], //Nelson Muntz
        11: ["ESTP", "8", "8w7", "sx/so", "873", "SLE", "", "", "Choleric-Melancholic"], //Krusty the Clown
        12: ["ESFP", "7", "7w6", "sp/sx", "794", "ESE", "", "", "Melancholic-Choleric"], //Edna Krabappel
        13: ["ISFJ", "2", "2w1", "sx/sp", "629", "ESI", "", "", "Phlegmatic [Dominant]"], //Waylon Smithers
        14: ["INFP", "4", "4w5", "sp/sx", "497", "SEI", "", "", "Phlegmatic-Sanguine"], //Barney Gumble
        15: ["ISTJ", "1", "1w2", "sp/sx", "163", "LSI", "", "", "Phlegmatic [Dominant]"] //Seymour Skinner
    },
    "T7S": { //That 70's Show
        1: ["INTP", "6", "6w7", "sp/so", "693", "EII", "RLOAI", "LEFV", "Phlegmatic [Dominant]"], //Eric Forman
        2: ["ESTJ", "3", "3w2", "so/sx", "317", "ESE", "SLOEN", "FVEL", "Choleric-Sanguine"], //Jackie Burkhart
        3: ["ESFP", "7", "7w6", "so/sx", "729", "SEE", "", "EFVL", "Sanguine [Dominant]"], //Michael Kelso
        4: ["ISTP", "9", "9w8", "sp/sx", "974", "SLI", "", "VLEF", "Phlegmatic [Dominant]"], //Steven Hyde
        5: ["ESTP", "9", "9w8", "so/sx", "962", "SLE", "", "", "Phlegmatic-Choleric"], //Donna Pinciotti
        6: ["ENFP", "7", "7w6", "sx/so", "738", "IEE", "", "", "Sanguine [Dominant]"], //Fez
        7: ["ESFJ", "2", "2w1", "so/sx", "216", "SEI", "", "", "Sanguine-Choleric"], //Kitty Foreman
        8: ["ESTJ", "8", "8w9", "sp/sx", "863", "LSI", "", "", "Choleric [Dominant]"], //Red Foreman
        9: ["ESFP", "7", "7w6", "so/sx", "794", "", "", "", "Sanguine [Dominant]"], //Midge Pinciotti
        10: ["ENFP", "6", "6w7", "so/sp", "792", "SEE", "", "", "Sanguine [Dominant]"] //Bob Pinciotti
    },
    "DA": { //Downton Abbey
        1: ["ISFJ", "2", "2w1", "so/sx", "215", "", "", "", "Sanguine [Dominant]"], //Robert Crawley, Lord Grantham
        2: ["INFP", "9", "9w8", "so/sx", "947", "EII", "", "", "Sanguine-Melancholic"], //Lady Sybil Crawley
        3: ["ISFP", "4", "4w3", "sp/sx", "469", "ESI", "", "", "Melancholic-Sanguine"], //Lady Edith Crawley
        4: ["ISTJ", "1", "1w2", "sp/so", "152", "LSI", "", "", "Choleric [Dominant]"], //Charlie Carson
        5: ["INFJ", "5", "5w6", "sp/sx", "592", "", "", "", "Melancholic [Dominant]"], //John Bates
        6: ["ENTJ", "3", "3w4", "so/sp", "361", "LIE", "RCUEN", "VLEF", "Choleric [Dominant]"], //Lady Mary Crawley
        7: ["INTJ", "4", "4w5", "sp/so", "", "", "", "", ""], //Sarah O'Brien
        8: ["ESFJ", "9", "9w1", "so/sx", "296", "", "", "", "Sanguine [Dominant]"], //Anna Bates
        9: ["ISTJ", "6", "6w5", "so/sp", "631", "", "", "", "Phlegmatic [Dominant]"], //Elsie Hughes
        10: ["ESFJ", "2", "2w3", "sp/so", "269", "", "", "", "Phlegmatic [Dominant]"], //William Mason
        11: ["INTJ", "3", "3w4", "sp/sx", "368", "SLI", "", "", "Melancholic-Choleric"], //Thomas Barrow
        12: ["ESFJ", "9", "9w1", "sx/sp", "286", "", "", "", "Sanguine [Dominant]"], //Cora Crawley, Lady Grantham
        13: ["ISFP", "6", "6w7", "so/sx", "", "", "", "", "Sanguine [Dominant]"], //Diasy Mason
        14: ["ESFJ", "6", "6w5", "so/sx", "628", "", "", "", "Choleric [Dominant]"], //Beryl Patmore
        15: ["ESTJ", "6", "6w5", "so/sp", "", "", "", "", "Choleric-Phlegmatic"] //Violet Crawley / Dowager Countess / Granny
    },
    "SW": { //Star Wars
        1: ["INFP", "9", "9w1", "sp/so", "926", "IEE", "RCUAI", "EVLF", "Phlegmatic-Sanguine"], //Luke Skywalker
        2: ["ENTJ", "1", "1w2", "so/sp", "126", "LSE", "SCOAN", "VLEF", "Choleric [Dominant]"], //Leia Organa
        3: ["ESTP", "7", "7w8", "sp/sx", "783", "SLE", "SCUEN", "FVLE", "Choleric-Sanguine"], //Han Solo
        4: ["ISTJ", "8", "8w9", "sp/sx", "864", "LSI", "RLOEI", "VLEF", "Melancholic [Dominant]"], //Darth Vader
        5: ["INFJ", "6", "6w5", "so/sp", "612", "EII", "RCOAI", "LEVF", "Phlegmatic [Dominant]"], //Obi-Wan Kenobi
        6: ["ISFJ", "6", "6w5", "sp/so", "612", "ESI", "RLOAN", "", "Melancholic [Dominant]"] //C-3PO
    },
    "GA": { //Grey's Anatomy
        1: ["ISFP", "4", "4w3", "sx/so", "469", "IEI", "", "ELVF", "Melancholic [Dominant]"], //Meredith Grey
        2: ["ISTP", "3", "3w4", "sp/sx", "358", "LSI", "", "", "Melancholic-Choleric"], //Cristina Yang
        3: ["ESFJ", "2", "2w1", "sx/so", "216", "ESE", "", "", "Sanguine [Dominant]"], //Isobel "Izzie" Stevens
        4: ["ISTP", "8", "8w9", "sp/sx", "836", "SLE", "", "", "Choleric-Phlegmatic"], //Alex Karev
        5: ["ISFJ", "9", "9w1", "sx/so", "962", "SEI", "", "", "Phlegmatic [Dominant]"], //George O'Malley
        6: ["ESTJ", "1", "1w2", "sx/sp", "136", "LSE", "", "", "Choleric [Dominant]"], //Miranda Bailey
        7: ["ENFJ", "2", "2w3", "so/sp", "216", "EII", "", "", "Phlegmatic-Sanguine"], //Richard Webber
        8: ["ISTJ", "3", "3w4", "sx/sp", "315", "LSE", "", "", "Melancholic [Dominant]"], //Preston Burke
        9: ["ENFJ", "3", "3w2", "sp/sx", "386", "EIE", "", "", "Phlegmatic-Sanguine"], //Derek Shepherd
        10: ["ENFJ", "3", "3w2", "so/sx", "368", "LIE", "", "", "Melancholic-Choleric"] //Addison Montgomery
    },
    "BB": { //Breaking Bad
        1: ["INTJ", "5", "5w6", "sp/so", "583", "ILI", "RLOEI", "VFLE", "Melancholic-Choleric"], //Walter White
        2: ["ESFJ", "1", "1w2", "sp/so", "126", "ESI", "SLOAN", "VFEL", "Choleric [Dominant]"], //Skyler White
        3: ["ESFP", "6", "6w7", "so/sx", "694", "SEE", "SLUAN", "FEVL", "Sanguine-Melancholic"], //Jesse Pinkman
        4: ["ESTP", "8", "8w7", "so/sx", "873", "SLE", "SCOEN", "FVLE", "Sanguine-Choleric"], //Hank Schrader
        5: ["ESFP", "2", "2w3", "sx/so", "268", "EIE", "SLUAN", "", "Sanguine-Choleric"], //Marie Schrader
        6: ["ISFP", "9", "9w1", "sx/so", "946", "EII", "RLUAN", "", "Melancholic-Phlegmatic"], //Walter White Jr.
        7: ["ENTP", "3", "3w2", "so/sp", "379", "ILE", "SCUEI", "VFLE", "Sanguine [Dominant]"], //Jimmy McGill "Saul Goodman"
        8: ["INTJ", "1", "1w9", "sp/so", "163", "LSE", "RCOEI", "VFLE", "Phlegmatic-Choleric"], //Gus Fring
        9: ["ISTJ", "9", "9w8", "sp/sx", "962", "SLI", "RCOAN", "FLEV", "Phlegmatic-Choleric"], //Mike Ehrmantraut
        10: ["ISFP", "4", "4w3", "sx/sp", "479", "SEI", "RLUEI", "", "Sanguine-Phlegmatic"] //Jane Margolis
    },
    "FS": { //Firefly+Serenity
        1: ["ESTP", "8", "8w9", "", "873", "", "SLE", "", "Choleric-Sanguine"], //Mal Reynolds
        2: ["INTJ", "8", "8w7", "so/sx", "852", "SLE", "", "", ""], //River Tam
        3: ["ENFJ", "2", "2w3", "", "", "", "", "", ""], //Inara Serra
        4: ["ENFP", "7", "7w6", "", "729", "", "", "", "Sanguine [Dominant]"], //Kaylee Frye
        5: ["ISTJ", "1", "1w9", "", "", "", "", "", ""], //Zoe Washburne
        6: ["ENFP", "6", "6w7", "", "", "", "", "", ""], //Hoban Washburn
        7: ["ISTP", "6", "6w7", "", "683", "SLE", "", "", ""], //Jayne Cobb
        8: ["ENFJ", "9", "9w8", "", "", "", "", "", ""], //Shepherd Derrial Book
        9: ["INFJ", "2", "2w1", "", "", "", "", "", ""], //Simon Tam
        10: ["", "", "", "", "", "", "", "", ""] //The Operative
    },
    "LOTR": { //Lord of the Rings
        1: ["INFP", "9", "9w1", "sp/so", "946", "EII", "RLUAI", "FEVL", "Phlegmatic-Melancholic"], //Frodo Baggins
        2: ["INFJ", "6", "6w5", "so/sp", "612", "ESI", "RCOAI", "VFEL", "Melancholic [Dominant]"], //Aragorn
        3: ["ESTJ", "2", "2w3", "so/sp", "286", "SEE", "SLOEN", "", "Phlegmatic-Choleric"], //Boromir
        4: ["ENTP", "7", "7w6", "so/sx", "728", "ILE", "RCUAN", "", "Choleric-Sanguine"], //Meriadoc "Merry" Brandybuck
        5: ["ISFJ", "6", "6w5", "sp/so", "629", "SEI", "SLOAN", "", "Phlegmatic-Melancholic"], //Samwise "Sam" Gamgee
        6: ["INTJ", "5", "5w6", "so/sp", "512", "LII", "RCOAI", "VELF", "Melancholic [Dominant]"], //Gandalf the Grey
        7: ["ESTP", "8", "8w7", "sp/so", "873", "SEE", "SCUEN", "", "Choleric-Sanguine"], //Gimli
        8: ["ISFP", "9", "9w8", "sx/sp", "936", "SLI", "", "", "Sanguine-Phlegmatic"], //Legolas
        9: ["ESFP", "7", "7w6", "so/sx", "792", "IEE", "SLUAN", "", "Sanguine-Phlegmatic"], //Pippin Took
        10: ["ENTJ", "6", "6w5", "sp/sx", "638", "SLE", "RCOEN", "", "Choleric-Melancholic"] //Gollum
    },
    "C": { //Community
        1: ["ENTP", "3", "3w2", "so/sp", "378", "LIE", "SCUEI", "VLEF", "Choleric-Sanguine"], //Jeff Winger
        2: ["INFP", "4", "4w5", "so/sx", "416", "EII", "SLUAI", "EVLF", "Choleric [Dominant]"], //Britta Perry
        3: ["INTP", "5", "5w4", "sp/sx", "549", "ILI", "RCUEI", "LVEF", "Phlegmatic [Dominant]"], //Abed Nadir
        4: ["ENFP", "7", "7w6", "so/sx", "793", "SEE", "SCUAN", "EFVL", "Sanguine [Dominant]"], //Troy Barnes
        5: ["ISFJ", "1", "1w2", "so/sp", "136", "ESE", "SLOEN", "VELF", "Choleric-Sanguine"], //Annie Edison
        6: ["ESFJ", "2", "2w1", "so/sp", "216", "ESI", "SCOAN", "", "Sanguine [Dominant]"], //Shirley Bennett
        7: ["ESTP", "8", "8w7", "sx/sp", "837", "SLE", "SLUEN", "", "Choleric [Dominant]"], //Pierce Hawthorne
        8: ["ESFP", "7", "7w6", "so/sx", "739", "ESE", "", "", "Sanguine [Dominant]"], //Dean Craig Pelton
        9: ["ENFP", "8", "8w7", "sx/so", "872", "SLE", "SLUEI", "", "Choleric [Dominant]"], //Ben "Kevin" Chang
        10: ["ENTP", "6", "6w7", "sp/sx", "631", "", "", "", "Phlegmatic-Sanguine"] //Ian Duncan
    },
    "WD": { //The Walking Dead
        1: ["ISTJ", "6", "6w5", "sp/so", "612", "LSI", "RCOAN", "FVLE", "Melancholic-Choleric"], //Rick Grimes
        2: ["ESTP", "8", "8w7", "sx/sp", "873", "SLE", "", "VFLE", "Choleric [Dominant]"], //Shane Walsh
        3: ["ESFJ", "2", "2w1", "so/sp", "216", "", "", "", "Phlegmatic-Choleric"], //Lori Grimes
        4: ["ESFP", "6", "6w7", "sp/sx", "684", "SEE", "", "", "Choleric-Sanguine"], //Andrea Harrison
        5: ["ENFJ", "5", "5w6", "sp/so", "594", "EII", "", "", "Melancholic-Phlegmatic"], //Dale Horvath
        6: ["ISFJ", "6", "6w7", "so/sp", "692", "SEI", "", "FEVL", "Phlegmatic-Melancholic"], //Glenn Rhee
        7: ["ESTP", "6", "6w7", "sp/so", "694", "EIE", "SLUAN", "", "Choleric-Phlegmatic"], //Carl Grimes
        8: ["ISTP", "8", "8w9", "sp/sx", "846", "SLI", "RLUAN", "LFVE", "Choleric-Phlegmatic"], //Daryl Dixon
        9: ["ISFJ", "6", "6w5", "sp/so", "694", "SEI", "RLOAN", "", "Melancholic-Phlegmatic"], //Carol Peletier
        10: ["ESTP", "8", "8w7", "sp/sx", "873", "SLE", "RLUEN", "", "Choleric-Sanguine"] //Merle Dixon
    },
    "BBT": { //The Big Bang Theory
        1: ["ISFJ", "9", "9w1", "sp/so", "962", "EII", "RLOAI", "", "Melancholic-Phlegmatic"], //Leonard Hofstadter
        2: ["ISTJ", "5", "5w6", "sp/so", "513", "LII", "RCOEI", "LVFE", "Melancholic-Choleric"], //Sheldon Cooper
        3: ["ESFP", "7", "7w6", "sx/so", "728", "ESE", "SCUAN", "EFVL", "Sanguine [Dominant]"], //Penny
        4: ["ENTP", "7", "7w6", "so/sx", "739", "ILE", "", "", "Sanguine [Dominant]"], //Howard Wolowitz
        5: ["INFP", "4", "4w5", "sx/sp", "496", "IEI", "", "ELFV", "Melancholic-Phlegmatic"], //Rajesh "Raj" Koothrappali
        6: ["INTP", "5", "5w4", "sx/so", "539", "ILE", "", "", "Phlegmatic-Choleric"], //Leslie Winkle
        7: ["ENTJ", "3", "3w2", "sx/sp", "316", "LIE", "", "", "Choleric-Sanguine"], //Bernadette Rostenkowski
        8: ["INTP", "1", "1w2", "sp/so", "126", "LII", "RLOAI", "LVEF", "Melancholic-Phlegmatic"], //Amy Farrah Fowler
        9: ["ISFP", "4", "4w3", "so/sx", "495", "", "", "", "Melancholic [Dominant]"], //Stuart Bloom
        10: ["ESFJ", "2", "2w1", "", "", "", "", "", ""] //Mary Cooper (née Tucker)
    },
    "TD": { //True Detective
        1: ["INTP", "5", "5w4", "sp/sx", "548", "ILI", "RLUEI", "LVEF", "Melancholic [Dominant]"], //Rustin Cohle
        2: ["ESFP", "8", "8w9", "so/sx", "862", "SEE", "", "", "Choleric-Sanguine"], //Marty Hart
        3: ["ISFJ", "2", "2w1", "", "", "", "", "", ""] //Maggie Hart
    },
    "PR": { //Parks and Recreation
        1: ["ESFJ", "3", "3w2", "so/sp", "316", "ESE", "SLOAI", "VEFL", "Sanguine [Dominant]"], //Leslie Knope
        2: ["ISFJ", "2", "2w1", "sp/so", "269", "SEI", "RLOAI", "FEVL", "Phlegmatic-Sanguine"], //Ann Perkins
        3: ["INTP", "5", "5w6", "sp/sx", "592", "", "", "", "Phlegmatic [Dominant]"], //Mark Brendanawicz
        4: ["ESTP", "3", "3w2", "so/sx", "379", "SEE", "SLUEN", "VFEL", "Sanguine [Dominant]"], //Tom Haverford
        5: ["ISTJ", "5", "5w6", "sp/sx", "583", "SLI", "RCOEN", "FVLE", "Choleric-Phlegmatic"], //Ron Swanson
        6: ["INTP", "5", "5w4", "sx/sp", "584", "ILI", "SCUEI", "VFLE", "Phlegmatic-Choleric"], //April Ludgate
        7: ["ISFJ", "9", "9w1", "sp/so", "962", "EII", "RCOAN", "EFLV", "Sanguine-Phlegmatic"], //Garry "Jerry" Gergich
        8: ["ESTP", "8", "8w7", "sp/sx", "873", "SLE", "SLUEN", "FVEL", "Phlegmatic-Choleric"], //Donna Meagle
        9: ["ISTJ", "1", "1w9", "so/sp", "163", "LII", "RLOEI", "LFVE", "Phlegmatic [Dominant]"], //Ben Wyatt
        10: ["ENFJ", "3", "3w2", "so/sx", "317", "ESE", "SLOAI", "VEFL", "Sanguine [Dominant]"] //Chris Traeger
    },
    "HG": { //The Hunger Games
        1: ["ISTP", "6", "6w5", "sp/sx", "684", "SLI", "RLUEN", "LFVE", "Phlegmatic-Choleric"], //Katniss Everdeen
        2: ["ENFP", "2", "2w3", "so/sx", "269", "EIE", "SCOAI", "EFVL", "Sanguine-Phlegmatic"], //Peeta Mellark
        3: ["INTP", "5", "5w6", "sp/so", "583", "ILI", "SCUEI", "VFLE", "Melancholic-Choleric"], //Haymitch Abernathy
        4: ["ESFJ", "2", "2w3", "so/sx", "471", "ESE", "SLOAN", "VFLE", "Sanguine [Dominant]"], //Effie Trinket
        5: ["ENTJ", "8", "8w9", "sp/so", "853", "LSI", "", "VFLE", "Choleric-Melancholic"], //Coriolanus Snow
        6: ["ENTJ", "3", "3w4", "so/sp", "836", "LIE", "SCOEN", "", "Choleric-Melancholic"] //Gale Hawthorne
    },
    "FC": { //Fight Club
        1: ["ENTP", "8", "8w7", "sx/so", "854", "SLE", "SCUEI", "VFLE", "Choleric [Dominant]"], //Tyler Durden
        2: ["ISFJ", "9", "9w1", "sp/sx", "964", "EII", "RLOAN", "FLEV", "Melancholic [Dominant]"], //The Narrator
        3: ["ESFP", "4", "4w3", "sx/sp", "487", "IEE", "SLUEN", "FELV", "Sanguine-Choleric"] //Marla Singer
    },
    "SC": { //Sex and the City
        1: ["ENFP", "6", "6w7", "so/sx", "649", "IEE", "", "EFVL", "Sanguine-Melancholic"], //Carrie Bradshaw
        2: ["ISFJ", "2", "2w1", "sx/so", "216", "", "", "", "Phlegmatic-Melancholic"], //Charlotte York
        3: ["ISTJ", "6", "6w5", "sp/so", "613", "", "", "", "Melancholic-Choleric"], //Miranda Hobbes
        4: ["ESTP", "7", "7w8", "sx/so", "738", "SEE", "", "", "Choleric-Sanguine"], //Samantha Jones
        5: ["INTJ", "3", "3w4", "sp/sx", "368", "", "", "", "Choleric-Sanguine"], //Mr. Big
        6: ["ESFP", "9", "9w8", "", "", "", "", "", ""] //Steve Brady
    },
    "D": { //Dexter
        1: ["ISTJ", "1", "1w9", "sp/sx", "153", "LSI", "RCOEN", "", "Melancholic-Phlegmatic"], //Dexter Morgan
        2: ["ISFJ", "2", "2w1", "so/sp", "269", "SEI", "", "", "Phlegmatic [Dominant]"], //Rita Bennet
        3: ["ENFP", "7", "7w6", "sx/so", "741", "SLI", "", "", "Sanguine [Dominant]"], //Debra Morgan
        4: ["ESTP", "8", "8w7", "sx/so", "836", "SLE", "", "", "Choleric [Dominant]"], //James Doakes
        5: ["ESTJ", "3", "3w4", "so/sp", "386", "SEE", "", "", "Choleric [Dominant]"], //Maria LaGuerta
        6: ["ESFJ", "9", "9w8", "so/sx", "972", "LSE", "", "", "Phlegmatic-Sanguine"], //Angel Batista
        7: ["ENFJ", "6", "6w5", "", "", "", "", "", "Melancholic-Choleric"], //Harry Morgan
        8: ["ENTP", "7", "7w6", "", "794", "LII", "", "", ""], //Vince Masuka
        9: ["ESTJ", "8", "8w7", "", "", "", "", "", ""], //Tom Matthews
        10: ["ESTP", "7", "7w8", "", "", "", "", "", ""] //Joey Quinn
    },
    "DK": { //The Dark Knight
        1: ["INTJ", "1", "1w9", "sp/so", "153", "LSI", "RCOEI", "LVEF", "Choleric-Melancholic"], //Bruce Wayne "Batman"
        2: ["ISFJ", "2", "2w1", "sx/sp", "296", "", "", "", ""], //Alfred Pennyworth
        3: ["ENTP", "7", "7w8", "sx/sp", "784", "ILE", "SLUEI", "VFLE", "Choleric-Sanguine"], //The Joker
        4: ["ISTJ", "1", "1w9", "sx/sp", "", "ESI", "", "", "Melancholic-Choleric"], //James Gordon
        5: ["ENFJ", "3", "3w2", "so/sx", "368", "EIE", "", "", "Sanguine-Choleric"], //Harvey Dent "Two-Face"
        6: ["ESFJ", "1", "1w2", "so/sx", "162", "ESI", "", "", ""], //Rachel Dawes
        7: ["INTP", "5", "5w4", "sx/sp", "549", "ILI", "", "", "Phlegmatic-Sanguine"], //Lucius Fox
        8: ["ENFJ", "1", "1w2", "", "", "", "", "", ""], //Anthony Garcia
        9: ["ENTJ", "5", "5w6", "", "", "", "", "", ""], //Lau
        10: ["ESTJ", "3", "3w2", "", "", "", "", "", ""] //Sal Maroni
    },
    "WSW": { //Westworld
        1: ["INFP", "2", "2w1", "sx/so", "216", "EII", "", "", "Melancholic-Sanguine"], //Dolores Abernathy
        2: ["ENTJ", "8", "8w9", "sp/sx", "", "SEE", "", "", "Choleric-Melancholic"], //Maeve Millay
        3: ["INTP", "5", "5w6", "", "", "LII", "", "", "Melancholic [Dominant]"], //Benard Lowe
        4: ["ISFJ", "9", "9w8", "", "", "", "", "", ""], //Teddy Flood
        5: ["ISTJ", "6", "6w5", "", "", "", "", "", "Phlegmatic [Dominant]"], //Ashley Stubbs
        6: ["ENTP", "7", "7w6", "", "", "", "", "", "Choleric [Dominant]"], //Lee Sizemore
        7: ["ENTP", "6", "6w5", "", "", "ILI", "", "", "Melancholic-Choleric"], //Elsie Hughes
        8: ["ISTP", "8", "8w9", "sp/sx", "", "SLE", "", "", "Choleric [Dominant]"], //Man in Black
        9: ["INTJ", "5", "5w4", "sx/sp", "548", "ILI", "RCOEI", "", "Phlegmatic [Dominant]"], //Dr. Robert Ford
        10: ["ESTJ", "3", "3w4", "", "316", "", "", "", "Choleric-Melancholic"], //Theresa Cullen
        11: ["ENTJ", "3", "3w4", "", "", "", "", "", ""], //Charlotte Hale
        12: ["INFJ", "9", "9w1", "", "", "", "", "", ""], //Akecheta
        13: ["ISFP", "9", "9w1", "", "926", "", "", "", "Phlegmatic-Sanguine"], //Clementine Pennyfeather
        14: ["ESTP", "7", "7w8", "so/sx", "738", "SLE", "", "", "Sanguine [Dominant]"], //Logan
        15: ["INFP", "9", "9w1", "", "926", "", "", "", ""] //Felix Lutz
    },
    "LK": { //The Lion King
        1: ["ESFP", "7", "7w6", "so/sx", "739", "ESE", "", "", "Sanguine [Dominant]"], //Simba
        2: ["ESFJ", "6", "6w7", "sx/so", "682", "ESI", "", "", "Choleric-Sanguine"], //Nala
        3: ["ENTP", "7", "7w8", "sp/sx", "784", "ILE", "", "LEVF", "Choleric-Sanguine"], //Timon
        4: ["ESFP", "9", "9w8", "sx/so", "972", "SEI", "", "", "Sanguine-Phlegmatic"], //Pumbaa
        5: ["INTJ", "3", "3w4", "sx/so", "385", "EIE", "SLUEI", "VELF", "Melancholic-Choleric"], //Scar
        6: ["ENFJ", "1", "1w2", "so/sp", "126", "ESI", "SCOAI", "", "Phlegmatic-Choleric"] //Mufasa
    },
    "CB": { //Casablanca
        1: ["ISTP", "9", "9w8", "sp/so", "", "", "", "", ""], //Rick Blaine
        2: ["ISFJ", "9", "9w1", "sx/so", "", "", "", "", ""], //Ilsa Lund
        3: ["INFJ", "1", "1w2", "so/sp", "", "", "", "", ""] //Victor Laszlo
    },
    "BSG": { //Battlestar Galactica
        1: ["ISTJ", "8", "8w9", "so/sp", "163", "LSE", "", "", ""], //William Adama
        2: ["INFJ", "2", "2w3", "so/sp", "613", "IEI", "", "", "Melancholic-Sanguine"], //Laura Roslin
        3: ["ESTP", "8", "8w7", "sp/so", "873", "SLE", "", "", "Choleric [Dominant]"], //Kara "Starbuck" Thrace
        4: ["INFP", "1", "1w2", "sp/so", "", "", "", "", ""], //Lee 'Apollo' Adama
        5: ["ENTP", "3", "3w4", "so/sp", "369", "ILE", "", "", ""], //Gaius Baltar
        6: ["INFJ", "2", "2w1", "sx/so", "285", "", "", "", ""], //Number Six
        7: ["ISFJ", "6", "6w7", "sp/so", "", "", "", "", ""], //Sharon "Boomer" Valerii
        8: ["ISTJ", "8", "8w7", "", "", "LSI", "", "", ""], //Saul Tigh
        9: ["ISFJ", "6", "6w5", "", "", "", "", "", ""], //Galen Tyrol
        10: ["ISFJ", "1", "1w2", "", "", "", "", "", ""], //Karl "Helo" Agathon
        11: ["ISTJ", "5", "5w4", "", "153", "", "", "", ""], //Felix Gaeta
        12: ["ISFJ", "9", "9w1", "", "", "", "", "", ""], //Anastasia Dualla
        13: ["ISFJ", "6", "6w7", "", "", "", "", "", ""], //Billy Keikeya
        14: ["ISFP", "7", "7w6", "", "", "", "", "", ""], //Cally Henderson
        15: ["ENFP", "7", "7w6", "", "", "", "", "", ""] //Samuel Anders
    },
    "MM": { //Mad Men
        1: ["ENTJ", "3", "3w4", "sx/sp", "385", "SLE", "RCUEI", "VFLE", "Melancholic-Choleric"], //Donald "Don" Draper
        2: ["INFJ", "6", "6w5", "so/sx", "631", "EII", "", "LVEF", ""], //Margaret "Peggy" Olson
        3: ["ENTP", "3", "3w4", "so/sx", "361", "LIE", "", "VFLE", "Choleric-Phlegmatic"], //Peter "Pete" Campbell
        4: ["ISFJ", "1", "1w2", "sp/so", "162", "ESI", "", "", "Phlegmatic [Dominant]"], //Betty Draper
        5: ["ENFJ", "3", "3w2", "sx/so", "317", "ESE", "", "", "Phlegmatic-Melancholic"], //Joan Holloway
        6: ["ESFJ", "2", "2w3", "", "", "", "", "", ""], //Salvatore "Sal" Romano
        7: ["ENFP", "4", "4w3", "", "", "", "", "", ""], //Paul Kinsey
        8: ["ENFJ", "6", "6w7", "so/sp", "641", "EII", "", "", "Phlegmatic-Choleric"], //Kenneth "Ken" Cosgrove
        9: ["ISFJ", "6", "6w5", "", "", "", "", "", ""], //Harlod "Harry" Crane
        10: ["INTJ", "5", "5w4", "", "", "", "", "", ""], //Rachel Menken
        11: ["ESTP", "7", "7w8", "sx/so", "738", "SEE", "", "", "Sanguine [Dominant]"], //Roger H. Sterling, Jr.
        12: ["INTP", "9", "9w8", "", "953", "SLI", "", "", ""], //Bertram "Bert" Cooper
        13: ["ISFJ", "3", "3w2", "", "", "", "", "", ""], //Henry Francis
        14: ["ISTJ", "6", "6w5", "sp/so", "", "", "", "", "Phlegmatic-Melancholic"], //Lane Pryce
        15: ["ENTP", "7", "7w8", "", "", "SLI", "", "", ""] //Stan Rizzo
    },
    "PC": { //Pirates of the Carribean
        1: ["ENTP", "7", "7w8", "sp/sx", "738", "ILE", "SCUEI", "FLVE", "Sanguine-Choleric"], //Captain Jack Sparrow
        2: ["ESTJ", "8", "8w7", "sp/so", "837", "LIE", "SCOEN", "", "Choleric-Sanguine"], //Captain Hector Barbossa
        3: ["ISFJ", "6", "6w7", "sx/sp", "638", "ESE", "", "", "Sanguine-Phlegmatic"], //Joshamee Gibbs
        4: ["ISFJ", "1", "1w2", "sx/so", "125", "ESI", "", "", "Phlegmatic [Dominant]"], //William Turner Jr.
        5: ["ESFP", "8", "8w7", "so/sx", "873", "SEE", "SCOEI", "EVLF", "Choleric [Dominant]"], //Elizabeth Swann
        6: ["ISTJ", "1", "1w9", "sp/so", "136", "ESI", "", "", "Phlegmatic-Choleric"] //James Norrington
    },
    "BVS": { //Buffy the Vampire Slayer
        1: ["ESFP", "6", "6w7", "so/sx", "641", "SEE", "SLUAN", "EFVL", "Sanguine-Phlegmatic"], //Buffy Summers
        2: ["ENTP", "6", "6w7", "sp/so", "693", "ILE", "", "", "Sanguine-Phlegmatic"], //Xander Harris
        3: ["INFP", "6", "6w5", "so/sx", "692", "EII", "RLOAI", "ELVF", "Phlegmatic-Melancholic"], //Willow Rosenberg
        4: ["ESTJ", "3", "3w2", "so/sp", "368", "LSE", "SCOEN", "VFEL", "Choleric-Phlegmatic"], //Cordelia Chase
        5: ["INTJ", "5", "5w6", "so/sp", "512", "ILI", "RCOAI", "LVFE", "Phlegmatic [Dominant]"], //Rupert Giles
        6: ["ISFJ", "1", "1w2", "sp/so", "146", "ESI", "RLOAI", "", "Melancholic-Phlegmatic"] //Angel
    },
    "SL": { //Sherlock
        1: ["INTP", "5", "5w6", "sx/sp", "538", "ILE", "RLUEI", "LVEF", "Melancholic-Choleric"], //Sherlock Holmes
        2: ["ISFJ", "6", "6w5", "sp/so", "612", "ESI", "SLOAN", "FELV", "Phlegmatic [Dominant]"], //John Watson
        3: ["ISTJ", "1", "1w9", "sp/sx", "162", "LSE", "RLOAN", "", "Choleric-Phlegmatic"], //Greg Lestrade
        4: ["ESFJ", "2", "2w1", "so/sx", "269", "SEI", "", "", "Phlegmatic-Sanguine"], //Martha Louis Hudson (née Sissons)
        5: ["ESTJ", "1", "1w9", "sp/so", "163", "LSE", "SCOEI", "LVFE", "Melancholic-Phlegmatic"], //Mycroft Holmes
        6: ["INFP", "2", "2w1", "sx/so", "269", "EII", "", "", "Phlegmatic-Melancholic"] //Molly Hooper
    },
    "SVU": { //Law & Order: SVU
        1: ["INFJ", "1", "1w2", "sp/so", "162", "ESI", "RCOAN", "", "Melancholic [Dominant]"], //Olivia Benson
        2: ["INTP", "5", "5w6", "sp/sx", "594", "ILE", "RCUEI", "", ""], //John Munch
        3: ["ISTJ", "6", "6w5", "sp/so", "", "SLI", "", "", ""], //Captain Donald Cragen
        4: ["ESTJ", "8", "8w9", "so/sp", "862", "LSE", "SLUEN", "", "Choleric [Dominant]"], //Elliot Stabler
        5: ["ISTP", "9", "9w8", "sp/sx", "954", "SLI", "RCUAN", "", "Phlegmatic [Dominant]"], //Odafin 'Fin' Tutuola
        6: ["ENTJ", "1", "1w2", "so/sp", "", "LSI", "RCOEN", "", ""] //Dr. Melinda Warner
    },
    "JP": { //Jurassic Park
        1: ["ISTP", "5", "5w6", "sp/sx", "593", "SLI", "RCOEI", "", "Phlegmatic-Choleric"], //Dr. Alan Grant
        2: ["ENFJ", "2", "2w3", "so/sx", "261", "EIE", "SCOAI", "VFEL", "Sanguine-Phlegmatic"], //Dr. Ellie Sattler
        3: ["ENTP", "5", "5w6", "so/sp", "548", "ILE", "SCUEI", "VFLE", "Phlegmatic-Sanguine"], //Dr. Ian Malcolm
        4: ["ENFP", "7", "7w6", "so/sx", "731", "EIE", "", "", "Sanguine [Dominant]"], //John Hammond
        5: ["ISTP", "", "", "", "", "", "", "", ""], //Ray Arnold
        6: ["ENTP", "7", "7w6", "sx/sp", "784", "ILE", "", "", "Sanguine [Dominant]"] //Dennis Nedry
    },
    "CRA": { //Crazy Rich Asians
        1: ["ENFJ", "6", "6w7", "so/sp", "629", "IEE", "SLOAN", "", "Sanguine [Dominant]"], //Rachel Chu
        2: ["ISFJ", "6", "6w5", "so/sx", "694", "ESI", "", "", "Melancholic [Dominant]"], //Nick Young
        3: ["ESTJ", "8", "8w9", "so/sp", "836", "LSE", "", "", "Choleric-Melancholic"], //Eleanor Young
        4: ["ENTP", "7", "7w6", "so/sp", "793", "SEE", "", "", "Sanguine-Choleric"], //Peik Lin Goh
        5: ["INFJ", "1", "1w9", "so/sp", "136", "EIE", "", "", "Melancholic-Phlegmatic"], //Astrid Young-Teo
        6: ["ESTP", "", "", "", "", "", "", "", ""] //Colin Khoo
    },
    "SV": { //Sillicon Valley
        1: ["INFP", "6", "6w5", "sp/so", "641", "EII", "RLUEI", "", "Melancholic [Dominant]"], //Richard Hendricks
        2: ["ENTP", "8", "8w7", "sp/so", "873", "SEE", "SLUEN", "", "Choleric-Sanguine"], //Erlich Bachman
        3: ["ISFP", "9", "9w1", "", "964", "SLI", "", "", "Sanguine-Phlegmatic"], //Nelson "Big Head" Bighetti
        4: ["ISTP", "8", "8w9", "sp/so", "584", "LSI", "RCUEI", "FLVE", "Choleric-Phlegmatic"], //Bertram Gilfoyle
        5: ["ENFP", "3", "3w4", "so/sx", "359", "IEE", "SCUAI", "", "Sanguine-Choleric"], //Dinesh Chugtai
        6: ["INTJ", "5", "5w4", "", "", "", "", "", "Phlegmatic-Choleric"], //Peter Gregory
        7: ["ENFJ", "3", "3w2", "so/sx", "", "LIE", "SCOAI", "", "Sanguine-Melancholic"], //Monica Hall
        8: ["ISFJ", "2", "2w1", "so/sx", "269", "SEI", "SCOAN", "", "Sanguine-Melancholic"], //Donald "Jared" Dunn
        9: ["ENTJ", "8", "8w7", "sp/so", "835", "LIE", "SLOEN", "", "Choleric [Dominant]"], //Gavin Belson
        10: ["ISTP", "8", "8w9", "sx/sp", "853", "", "", "", ""] //Jian Yang
    }
}; //437+3=440 //447