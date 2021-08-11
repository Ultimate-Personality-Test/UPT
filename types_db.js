var types_db = {
    "GOT": { //Game of Thrones
        1: ["ISFP", "9", "9w1", "sp/so", "962", "2-6-9", "ESI", "", "FEVL", "Melancholic-Phlegmatic"], //Jon Snow
        2: ["ENTP", "7", "7w6", "sx/so", "731", "1-3-7", "ILE", "SLUEI", "LVEF", "Sanguine-Melancholic"], //Tyrion Lannister
        3: ["ENFJ", "1", "1w2", "sx/so", "146", "1-4-6", "ESI", "RCOAN", "EVLF", "Melancholic-Choleric"], //Daenerys Targaryen
        4: ["ESFJ", "3", "3w4", "sp/so", "361", "1-3-6", "SEI", "RCOAI", "FELV", "Phlegmatic-Melancholic"], //Sansa Stark
        5: ["ISTP", "8", "8w7", "sx/sp", "684", "4-6-8", "SLE", "RLOEI", "FLVE", "Choleric-Melancholic"], //Arya Stark
        6: ["ESTP", "3", "3w2", "sx/so", "397", "3-7-9", "ESE", "SCUEN", "FLEV", "Choleric-Melancholic"], //Jamie Lannister
        7: ["INFP", "6", "6w5", "sp/so", "694", "4-6-9", "EII", "", "", "Phlegmatic-Melancholic"], //Samwell Tarly
        8: ["ISFJ", "6", "6w5", "sx/so", "629", "2-6-9", "ESI", "", "", "Phlegmatic-Melancholic"], //Jorah Mormont
        9: ["ESFP", "6", "6w7", "sp/so", "641", "1-4-6", "SEE", "", "", "Choleric-Melancholic"], //Theon Greyjoy
        10: ["INTJ", "3", "3w4", "sp/sx", "351", "1-3-5", "LIE", "", "VLFE", "Phlegmatic [Dominant]"], //Petyr Baelish "Littlefinger"
        11: ["ISFP", "2", "2w1", "sp/so", "692", "2-6-9", "", "RCOAN", "FEVL", "Phlegmatic [Dominant]"], //Davos Seaworth
        12: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "ESI", "", "LFVE", "Phlegmatic [Dominant]"], //Eddard "Ned" Stark
        13: ["INFP", "9", "9w1", "sp/so", "954", "4-5-9", "", "", "", "Melancholic [Dominant]"], //Brandon Stark
        14: ["ISTJ", "1", "1w9", "sp/so", "163", "1-3-6", "LSI", "", "", "Melancholic-Phlegmatic"], //Brinne of Tarth
        15: ["ISTP", "8", "8w9", "sp/sx", "864", "4-6-8", "SLI", "", "", "Melancholic-Choleric"], //Sandor Clegane "The Hound"
        16: ["INFJ", "5", "5w6", "so/sp", "592", "2-5-9", "LII", "", "LEVF", "Phlegmatic [Dominant]"], //Lord Varys "The Spider"
        17: ["ISFJ", "9", "9w1", "so/sp", "926", "2-6-9", "ESI", "", "", "Phlegmatic-Choleric"], //Catelyn Stark (née Tully)
        18: ["ENTJ", "8", "8w9", "sp/so", "863", "3-6-8", "LSI", "SCOEI", "VFEL", "Melancholic-Choleric"], //Tywin Lannister
        19: ["ENFJ", "3", "3w2", "so/sx", "379", "3-7-9", "ESE", "SCOAI", "VEFL", "Sanguine-Melancholic"], //Margery Tyrell
        20: ["ESTJ", "1", "1w9", "so/sx", "163", "1-3-6", "ESI", "", "", "Choleric-Sanguine"], //Robb Stark
        21: ["ESTP", "7", "7w8", "sp/so", "739", "3-7-9", "SEE", "", "", "Sanguine-Choleric"], //Bronn
        22: ["ISTJ", "1", "1w9", "sp/so", "163", "1-3-6", "LSI", "RCOEN", "", "Melancholic-Choleric"], //Stannis Baratheon
        23: ["ESFP", "3", "3w4", "sx/sp", "387", "3-7-8", "SEE", "", "", "Choleric [Dominant]"], //Joffrey Baratheon
        24: ["INFJ", "1", "1w2", "sx/sp", "154", "1-4-5", "EIE", "", "VELF", "Melancholic-Phlegmatic"], //Melisandre "The Red Woman"
        25: ["ENTJ", "8", "8w7", "so/sx", "837", "3-7-8", "SLE", "", "", "Choleric [Dominant]"], //Olenna Tyrell "Queen of Thorns"
        26: ["ESTP", "8", "8w7", "sx/so", "873", "3-7-8", "SEE", "", "", "Choleric-Sanguine"], //Ygritte
        27: ["ESTJ", "3", "3w4", "sp/sx", "368", "3-6-8", "SEE", "", "VLFE", "Choleric [Dominant]"], //Cersei Lannister
        28: ["ESFP", "3", "3w4", "sx/so", "387", "3-7-8", "", "", "", "Choleric [Dominant]"], //Shae
        29: ["ESFP", "7", "7w8", "sx/so", "783", "3-7-8", "SEE", "", "", "Sanguine-Choleric"], //Oberyn Martell "The Red Viper"
        30: ["ESTJ", "8", "8w9", "so/sx", "837", "3-7-8", "", "", "", "Choleric-Phlegmatic"] //Yara Greyjoy
    },
    "HP": { //Harry Potter
        1: ["ESFP", "6", "6w7", "so/sx", "639", "3-6-9", "SEI", "SLUAN", "EFVL", "Sanguine [Dominant]"], //Ron Weasley
        2: ["ISFP", "9", "9w8", "sp/sx", "964", "4-6-9", "SLI", "RLUAN", "FEVL", "Phlegmatic-Choleric"], //Harry Potter
        3: ["ESTJ", "1", "1w2", "so/sp", "163", "1-3-6", "LSE", "SCOEI", "LVFE", "Choleric [Dominant]"], //Hermione Granger
        4: ["ISFP", "2", "2w1", "so/sx", "269", "2-6-9", "SEI", "RCUAN", "", "Phlegmatic-Sanguine"], //Rubeus Hagrid
        5: ["INFJ", "1", "1w9", "sp/so", "125", "1-2-5", "EII", "RCOAI", "LVEF", "Phlegmatic-Choleric"], //Albus Dumbledore
        6: ["ISTJ", "1", "1w2", "sp/so", "153", "1-3-5", "LSI", "RCOAI", "", "Melancholic-Choleric"], //Minerva McGonagall
        7: ["INTJ", "6", "6w5", "sp/sx", "641", "1-4-6", "LSI", "RLOEI", "LVFE", "Melancholic-Choleric"], //Severus Snape
        8: ["ISFJ", "6", "6w7", "so/sx", "692", "2-6-9", "SEE", "", "", "Phlegmatic-Sanguine"], //Ginny Weasley
        9: ["INFP", "9", "9w1", "sx/sp", "945", "4-5-9", "IEI", "RCUAI", "ELVF", "Phlegmatic [Dominant]"], //Luna Lovegood
        10: ["ESTJ", "3", "3w4", "so/sp", "361", "1-3-6", "EIE", "SLOEN", "VLFE", "Choleric [Dominant]"], //Draco Malfoy
        11: ["ESFJ", "2", "2w1", "so/sx", "216", "1-2-6", "ESI", "", "", "Phlegmatic [Dominant]"], //Molly Weasley
        12: ["ENTJ", "8", "8w7", "sp/sx", "385", "3-5-8", "SLE", "SCOEI", "VFLE", "Choleric [Dominant]"], //Voldemort
        13: ["ISFJ", "9", "9w1", "so/sp", "926", "2-6-9", "ESI", "SLUAI", "", "Sanguine-Melancholic"], //Cho Chang
        14: ["ESFJ", "3", "3w2", "sx/so", "371", "1-3-7", "ESE", "", "", "Sanguine-Phlegmatic"], //Fleur Delacour
        15: ["ISTP", "9", "9w8", "so/sp", "", "", "SLI", "", "", "Phlegmatic [Dominant]"], //Viktor Krum
        16: ["ISFJ", "6", "6w5", "", "", "", "", "", "", "Phlegmatic-Choleric"], //Filius Flitwick
        17: ["ESFJ", "3", "3w2", "so/sx", "296", "2-6-9", "ESE", "", "", "Sanguine-Phlegmatic"], //Horace Slughorn
        18: ["ENTP", "7", "7w6", "so/sx", "792", "2-7-9", "ILE", "SLUEI", "", "Sanguine [Dominant]"], //George Weasley
        19: ["ESTJ", "6", "6w5", "sp/so", "683", "3-6-8", "SLE", "", "", "Choleric-Melancholic"], //Alastor "Mad-Eye" Moody
        20: ["INFJ", "9", "9w1", "sp/so", "952", "2-5-9", "EII", "RCOAI", "ELFV", "Melancholic-Phlegmatic"], //Remus Lupin
        21: ["INTP", "5", "5w6", "sp/so", "592", "2-5-9", "ILE", "SCUEI", "VFLE", "Phlegmatic-Sanguine"], //Arthur Weasley
        22: ["ESTJ", "6", "6w5", "sp/sx", "", "", "", "", "", "Choleric [Dominant]"], //Cornelius Fudge
        23: ["ESTJ", "1", "1w2", "so/sp", "136", "1-3-6", "LSI", "SCOEN", "", "Choleric [Dominant]"], //Dolores Umbridge
        24: ["ESFJ", "1", "1w2", "sp/so", "162", "1-2-6", "ESI", "", "", "Choleric-Melancholic"], //Petunia Dursley
        25: ["ISFP", "4", "4w5", "so/sx", "", "", "SEE", "", "", "Melancholic [Dominant]"], //Moaning Myrtle
        26: ["ENTP", "3", "3w2", "so/sp", "", "", "IEE", "", "", "Sanguine [Dominant]"], //Rita Skeeter
        27: ["INFP", "6", "6w5", "so/sp", "629", "2-6-9", "ESI", "", "", "Melancholic-Phlegmatic"], //Dobby
        28: ["ESFP", "7", "7w8", "sx/so", "783", "3-7-8", "SEE", "SCOEI", "", "Choleric-Sanguine"], //Bellatrix Lestrange
        29: ["ENFP", "7", "7w6", "so/sp", "748", "4-7-8", "IEE", "", "", "Choleric [Dominant]"], //Nymphadora Tonks
        30: ["ESTP", "7", "7w8", "sx/so", "783", "3-7-8", "ILE", "SLUEN", "", "Sanguine-Choleric"] //Sirius Black
    },
    "TO": { //The Office
        1: ["ENFP", "7", "7w6", "sx/so", "729", "2-7-9", "EIE", "SLUAI", "EVLF", "Sanguine [Dominant]"], //Michael Scott
        2: ["ESTJ", "6", "6w5", "sx/sp", "613", "1-3-6", "LSI", "SLOEN", "LFVE", "Choleric [Dominant]"], //Dwight Schrute
        3: ["ENTP", "9", "9w8", "sp/so", "972", "2-7-9", "IEE", "SCUAI", "FLEV", "Phlegmatic-Sanguine"], //Jim Halpert
        4: ["ISFJ", "9", "9w1", "sp/so", "962", "2-6-9", "SEI", "RCOAN", "FEVL", "Phlegmatic [Dominant]"], //Pam Beesly
        5: ["ESTP", "3", "3w4", "sx/so", "378", "3-7-8", "SLE", "", "FLVE", "Melancholic-Phlegmatic"], //Ryan Howard
        6: ["ESFP", "3", "3w4", "so/sx", "379", "3-7-9", "SEE", "", "EVFL", "Sanguine-Choleric"], //Andy Bernard
        7: ["ENTJ", "3", "3w4", "so/sp", "387", "3-7-8", "LIE", "", "", "Choleric [Dominant]"], //Jan Levinson
        8: ["ISTP", "8", "8w9", "sp/sx", "953", "3-5-9", "SLI", "RCOEN", "", "Choleric-Phlegmatic"], //Stanley Hudson
        9: ["ISFP", "7", "7w6", "sx/sp", "792", "2-7-9", "SEI", "", "", "Phlegmatic [Dominant]"], //Kevin Malone
        10: ["ESTP", "7", "7w8", "sx/sp", "782", "2-7-8", "SLE", "", "", "Sanguine [Dominant]"], //Meredith Palmer
        11: ["ISTJ", "1", "1w9", "sp/sx", "163", "1-3-6", "ESI", "", "LVFE", "Melancholic [Dominant]"], //Angela Martin
        12: ["ISFJ", "2", "2w1", "sp/so", "216", "1-2-6", "IEI", "", "", "Phlegmatic-Melancholic"], //Phyllis Lapin
        13: ["ESFP", "3", "3w2", "so/sx", "379", "3-7-9", "SEE", "SLUEN", "EFLV", "Sanguine [Dominant]"], //Kelly Kapoor
        14: ["ENFP", "6", "6w7", "so/sp", "692", "2-6-9", "IEE", "", "", "Phlegmatic [Dominant]"], //Erin Hannon
        15: ["ENTJ", "5", "5w6", "sx/sp", "584", "4-5-8", "LIE", "SCUEI", "VFLE", "Melancholic-Choleric"] //Robert California
    },
    "F": { //Friends
        1: ["ESFP", "3", "3w4", "sx/so", "368", "3-6-8", "ESE", "SLUEN", "FVEL", "Sanguine [Dominant]"], //Rachel Green
        2: ["ESTJ", "1", "1w2", "so/sx", "136", "1-3-6", "ESE", "SLOAN", "VFEL", "Choleric [Dominant]"], //Monica Geller
        3: ["ENFP", "7", "7w8", "sx/so", "749", "4-7-9", "IEE", "SCUAI", "EVFL", "Sanguine [Dominant]"], //Pheobe Buffay
        4: ["ESFP", "7", "7w6", "sx/so", "793", "3-7-9", "ESE", "SCUAN", "FELV", "Sanguine [Dominant]"], //Joey Tribbiani
        5: ["ENTP", "6", "6w7", "so/sp", "639", "3-6-9", "ILE", "SLUAI", "LEVF", "Melancholic-Sanguine"], //Chandler Bing
        6: ["ISTJ", "6", "6w5", "sp/sx", "614", "1-4-6", "LII", "RLOEI", "LVEF", "Melancholic-Choleric"] //Ross Geller
    },
    "WW": { //The West Wing
        1: ["ENTJ", "3", "3w2", "so/sp", "583", "3-5-8", "", "", "", "Choleric-Sanguine"], //Jed Bartlet
        2: ["ISTJ", "1", "1w9", "sp/so", "", "", "", "", "", ""], //Leo McGarry
        3: ["ENTP", "8", "8w7", "sx/so", "836", "3-6-8", "SLE", "", "", "Phlegmatic [Dominant]"], //Josh Lyman
        4: ["INTJ", "5", "5w4", "so/sp", "164", "1-4-6", "", "", "", ""], //Toby Ziegler
        5: ["ENFP", "2", "2w3", "so/sp", "127", "1-2-7", "", "", "", ""], //Sam Seaborn
        6: ["ENFJ", "3", "3w2", "so/sp", "317", "1-3-7", "", "", "", ""], //CJ Cregg
        7: ["ISTJ", "9", "9w1", "", "", "", "", "", "", ""], //Chrlie Young
        8: ["ESFJ", "6", "6w7", "sp/so", "926", "2-6-9", "", "", "", ""], //Donna Moss
        9: ["ENFJ", "8", "8w9", "sp/so", "", "", "", "", "", ""], //Abbey Bartlet
        10: ["", "", "", "", "", "", "", "", "", ""] //Joey Lucas
    },
    "L": { //LOST
        1: ["ISTJ", "9", "9w8", "sp/so", "953", "3-5-9", "SLI", "", "", "Melancholic-Choleric"], //Sayid Jarrah
        2: ["ISFP", "9", "9w1", "sp/so", "694", "4-6-9", "", "", "", "Melancholic [Dominant]"], //Claire Littleton
        3: ["ESTJ", "1", "1w2", "so/sp", "126", "1-2-6", "LSE", "", "", "Choleric-Melancholic"], //Jack Shephard
        4: ["ISFP", "9", "9w1", "sp/so", "972", "2-7-9", "SEI", "", "", "Sanguine-Phlegmatic"], //Hugo "Hurley" Reyes
        5: ["ESFP", "7", "7w6", "sx/so", "748", "4-7-8", "", "", "", "Choleric-Sanguine"], //Shannon Rutherford
        6: ["ESTP", "8", "8w7", "sp/sx", "784", "4-7-8", "SEE", "", "VFLE", "Melancholic-Sanguine"], //James "Sawyer" Ford
        7: ["INTJ", "5", "5w6", "sp/sx", "584", "4-5-8", "LII", "", "", "Melancholic-Choleric"], //Benjamin Linus
        8: ["ISTJ", "1", "1w9", "sp/sx", "613", "1-3-6", "", "", "", "Melancholic-Choleric"], //Jin Kwon
        9: ["ISFJ", "6", "6w7", "sp/sx", "648", "4-6-8", "", "", "", "Melancholic [Dominant]"], //Michael Dawson
        10: ["INFP", "9", "9w1", "sx/sp", "694", "4-6-9", "EII", "", "", "Melancholic-Phlegmatic"], //Desmond Hume
        11: ["ISFJ", "2", "2w1", "so/sp", "269", "2-6-9", "", "", "", "Melancholic-Phlegmatic"], //Sun Kwon
        12: ["ISFP", "6", "6w7", "sp/sx", "649", "4-6-9", "", "", "", "Melancholic [Dominant]"], //Kate Austen
        13: ["ISFP", "6", "6w7", "so/sx", "694", "4-6-9", "IEI", "", "", "Sanguine-Melancholic"], //Charlie Pace
        14: ["INFJ", "4", "4w5", "sp/so", "459", "4-5-9", "IEI", "", "", "Melancholic [Dominant]"], //John Locke
        15: ["INFJ", "1", "1w9", "sp/so", "152", "1-2-5", "", "", "", "Melancholic-Phlegmatic"] //Juliet Burke
    },
    "TW": { //The Wire
        1: ["ISTJ", "1", "1w9", "", "", "", "LSE", "", "", "Phlegmatic [Dominant]"], //Cedric Daniels
        2: ["ENTP", "8", "8w7", "sx/so", "874", "4-7-8", "ILE", "SCUEN", "VLFE", "Sanguine-Choleric"], //Jimmy McNulty
        3: ["ISTP", "8", "8w7", "", "863", "3-6-8", "", "", "", ""], //Kima Greggs
        4: ["INTP", "5", "5w6", "sx/sp", "541", "1-4-5", "ILI", "RCUEI", "LVEF", "Phlegmatic [Dominant]"], //Lester Freamon
        5: ["ESTP", "7", "7w6", "", "792", "2-7-9", "IEE", "", "", ""], //Bunk Moreland
        6: ["ESTP", "7", "7w8", "", "", "", "", "", "", ""], //Thomas Herk Hauk
        7: ["ESFJ", "3", "3w2", "", "", "", "", "", "", ""], //Ellis Carver
        8: ["ENFP", "7", "7w6", "", "", "", "IEE", "", "", ""], //Bubbles
        9: ["ESTJ", "8", "8w7", "", "", "", "", "", "", "Choleric [Dominant]"], //William Rawls
        10: ["INFJ", "5", "5w6", "", "", "", "", "", "", "Melancholic-Sanguine"], //Roland "Prez" Pryzbylewski
        11: ["ESTJ", "3", "3w2", "", "", "", "", "", "", ""], //Rhonda Pearlman
        12: ["ISFP", "6", "6w5", "sx/sp", "682", "2-6-8", "SEE", "", "", "Phlegmatic-Sanguine"], //Omar Little
        13: ["ESTJ", "3", "3w4", "", "", "", "", "", "", ""], //Ervin Burrell
        14: ["ESTJ", "8", "8w9", "so/sp", "", "", "SEE", "", "", ""], //Bodie Broadus
        15: ["ENTJ", "3", "3w2", "sp/sx", "358", "3-5-8", "LIE", "RCOEI", "LVFE", "Melancholic-Choleric"], //Stringer Bell
        16: ["ENTJ", "3", "3w2", "", "316", "1-3-6", "EIE", "", "", ""], //Tommy Carcetti
        17: ["ESTP", "6", "6w7", "", "682", "2-6-8", "SEE", "", "", ""], //Avon Barksdale
        18: ["ISTP", "6", "6w5", "", "", "", "SLI", "", "", ""], //Chris Partlow
        19: ["ENTJ", "3", "3w2", "", "", "", "", "", "", ""], //Norman Wilson
        20: ["ISTP", "6", "6w5", "", "684", "4-6-8", "SLE", "", "", ""], //Michael Lee
        21: ["ENTP", "3", "3w4", "", "", "", "", "", "", ""], //Maurice Levy
        22: ["ISFJ", "2", "2w1", "", "", "", "", "", "", ""], //Beatrice "Beadie" Russell
        23: ["ISFP", "4", "4w3", "sx/sp", "", "", "", "", "", ""], //Dennis Cutty Wise
        24: ["ISFP", "4", "4w3", "", "469", "4-6-9", "EII", "", "", "Melancholic [Dominant]"], //D'Angelo Barksdale
        25: ["ESTP", "8", "8w9", "sp/sx", "873", "3-7-8", "SLE", "", "", "Sanguine [Dominant]"], //Clay Davis
        26: ["ESTJ", "", "", "", "", "", "", "", "", ""], //Clarence Royce
        27: ["ISTJ", "6", "6w7", "", "", "", "", "", "", ""], //Spiros Vondas
        28: ["ESTJ", "6", "6w5", "", "", "", "", "", "", ""], //Frank Sobotka
        29: ["ESFP", "7", "7w6", "so/sx", "782", "2-7-8", "", "", "", "Sanguine [Dominant]"], //Ziggy Sobotka
        30: ["ISTP", "6", "6w7", "", "", "", "", "", "", ""] //Nick Sobotka
    },
    "ALA": { //Avatar: The Last Airbender
        1: ["ENFP", "9", "9w1", "so/sx", "972", "2-7-9", "IEE", "SCUAI", "EVFL", "Sanguine [Dominant]"], //Aang
        2: ["INFP", "4", "4w3", "sp/sx", "461", "1-4-6", "ESI", "RLOEN", "EFVL", "Melancholic-Choleric"], //Zuko
        3: ["ESFJ", "2", "2w1", "so/sp", "216", "1-2-6", "ESI", "SCOAN", "EVFL", "Phlegmatic-Choleric"], //Katara
        4: ["ISTP", "8", "8w7", "sp/sx", "873", "3-7-8", "SLE", "SCUEN", "FVLE", "Choleric-Phlegmatic"], //Toph Beifong
        5: ["ESTJ", "6", "6w7", "so/sp", "631", "1-3-6", "LSE", "SLOEN", "LFVE", "Choleric-Sanguine"], //Sokka
        6: ["ENTJ", "8", "8w7", "so/sp", "386", "3-6-8", "SLE", "SLOEN", "VLFE", "Choleric [Dominant]"], //Azula
        7: ["ENFJ", "9", "9w1", "sx/so", "927", "2-7-9", "ESE", "SCUAI", "FEVL", "Phlegmatic-Sanguine"], //Iroh
        8: ["ESTJ", "8", "8w7", "sp/sx", "836", "3-6-8", "SLE", "SCOEN", "VFLE", "Choleric [Dominant]"], //Ozai
        9: ["ESFP", "7", "7w6", "so/sx", "749", "4-7-9", "ESE", "SCUAN", "EFVL", "Sanguine [Dominant]"], //Ty Lee
        10: ["ESTJ", "6", "6w5", "", "613", "1-3-6", "", "SCOAN", "", "Phlegmatic-Choleric"] //Hakoda
    },
    "DS9": { //Star Trek: Deep Space Nine
        1: ["ENTP", "7", "7w8", "sx/so", "731", "1-3-7", "ILE", "", "", "Sanguine [Dominant]"], //Jadzia Dax
        2: ["ISTJ", "1", "1w2", "sp/sx", "163", "1-3-6", "LSI", "", "", "Choleric-Melancholic"], //Odo
        3: ["ISTJ", "6", "6w5", "sp/sx", "613", "1-3-6", "LSI", "RLOEN", "", "Melancholic-Choleric"], //Worf
        4: ["ESTJ", "6", "6w5", "so/sp", "638", "3-6-8", "ILE", "", "", "Sanguine-Melancholic"], //Nog
        5: ["ESTP", "3", "3w2", "sp/sx", "378", "3-7-8", "EIE", "", "", "Sanguine [Dominant]"], //Quark
        6: ["ENFJ", "1", "1w9", "sp/so", "164", "1-4-6", "EII", "", "", "Melancholic [Dominant]"], //Benjamin Sisko
        7: ["ENTP", "5", "5w4", "sp/so", "538", "3-5-8", "ILE", "", "", "Melancholic [Dominant]"], //Elim Garak
        8: ["ISFP", "8", "8w7", "sp/sx", "864", "4-6-8", "SEE", "", "", "Choleric [Dominant]"], //Kira Nerys
        9: ["ENFP", "2", "2w3", "so/sp", "271", "1-2-7", "IEE", "", "", "Sanguine [Dominant]"], //Julian Bashir
        10: ["ENTJ", "8", "8w7", "sp/so", "835", "3-5-8", "SLE", "", "", "Choleric-Phlegmatic"], //Gul Dukat
        11: ["INTP", "6", "6w5", "sp/so", "692", "2-6-9", "SEI", "", "", "Phlegmatic [Dominant]"], //Rom
        12: ["ISTP", "9", "9w8", "sp/so", "953", "3-5-9", "ILI", "", "", "Melancholic-Phlegmatic"], //Miles O'Brien
        13: ["ENFP", "9", "9w1", "so/sx", "972", "2-7-9", "IEE", "", "", "Phlegmatic [Dominant]"], //Jake Sisko
        14: ["ESFJ", "3", "3w2", "so/sp", "316", "1-3-6", "LSE", "", "", "Choleric [Dominant]"], //Kai Winn Adami
        15: ["ESTP", "8", "8w9", "sx/sp", "", "", "", "", "", "Choleric-Sanguine"] //Kasidy Yates
    },
    "PP": { //Pride and Prejudice
        1: ["INTJ", "1", "1w9", "sp/so", "154", "1-4-5", "LII", "", "", "Melancholic-Choleric"], //Fitzwilliam Darcy
        2: ["ENFP", "7", "7w6", "so/sx", "714", "1-4-7", "ESE", "", "", "Sanguine [Dominant]"], //Elizabeth Bennet
        3: ["ISTJ", "1", "1w2", "", "136", "1-3-6", "SLI", "", "", "Melancholic [Dominant]"], //Mr. Collins
        4: ["ESTP", "7", "7w8", "so/sp", "", "", "SEE", "", "", "Choleric-Sanguine"], //George Wickham
        5: ["ESFJ", "9", "9w1", "so/sx", "927", "2-7-9", "SEI", "", "", "Sanguine-Phlegmatic"], //Charles Bingley
        6: ["ENFJ", "9", "9w1", "so/sx", "927", "2-7-9", "", "", "", "Sanguine [Dominant]"], //Georgina Darcy
        7: ["ESFP", "7", "7w8", "sp/so", "", "", "", "", "", "Sanguine [Dominant]"], //Lydia Bennet
        8: ["ISFJ", "9", "9w1", "sp/so", "926", "2-6-9", "EII", "", "", "Phlegmatic [Dominant]"], //Jane Bennet
        9: ["ESFJ", "2", "2w3", "so/sp", "", "", "", "", "", "Sanguine-Choleric"], //Mrs. Bennet
        10: ["ESTJ", "8", "8w7", "sx/so", "854", "4-5-8", "", "", "", "Choleric [Dominant]"] //Catherine de Bourgh
    },
    "MCU": { //Marvel Cinematic Universe
        1: ["ENTP", "7", "7w8", "sx/sp", "738", "3-7-8", "LIE", "SLUEI", "VLEF", "Choleric-Sanguine"], //Tony Stark "Iron Man"
        2: ["ISFJ", "1", "1w2", "so/sx", "126", "1-2-6", "ESI", "RCOAN", "EVFL", "Phlegmatic [Dominant]"], //Steve Rogers "Captain America"
        3: ["ISTP", "6", "6w5", "sx/sp", "612", "1-2-6", "LSE", "RLUEN", "VLEF", "Choleric-Melancholic"], //Natasha Rpmanoff "Black Widow"
        4: ["INTP", "9", "9w1", "sp/so", "954", "4-5-9", "ILI", "RCUAI", "LFEV", "Melancholic-Phlegmatic"], //Bruce Banner "Hulk"
        5: ["ISFP", "6", "6w7", "sp/so", "684", "4-6-8", "ESI", "", "", "Phlegmatic-Sanguine"], //Carol Danvers "Captain Marvel"
        6: ["ESTP", "7", "7w8", "sx/so", "782", "2-7-8", "SEE", "SCOAN", "VFLE", "Sanguine-Choleric"], //Thor
        7: ["ENTJ", "8", "8w9", "sp/so", "863", "3-6-8", "LIE", "", "VFLE", "Choleric [Dominant]"], //Nick Fury
        8: ["INTJ", "5", "5w6", "sp/so", "531", "1-3-5", "LII", "RCOEI", "LVFE", "Melancholic-Choleric"], //Stephen Strange "Doctor Strange"
        9: ["ISFJ", "1", "1w9", "so/sp", "162", "1-2-6", "ESI", "RCOAN", "", "Phlegmatic-Melancholic"], //T'Challa Black Panther
        10: ["ISTJ", "6", "6w5", "sp/so", "682", "2-6-8", "SLI", "RCOAN", "", "Melancholic [Dominant]"], //Gamora
        11: ["INTJ", "1", "1w9", "so/sp", "163", "1-3-6", "LSI", "RCOEI", "LVFE", "Melancholic-Choleric"], //Thanos
        12: ["ENTJ", "8", "8w9", "sp/so", "835", "3-5-8", "LIE", "", "", "Choleric [Dominant]"], //Peggy Carter
        13: ["INFJ", "4", "4w3", "sx/so", "468", "4-6-8", "EIE", "SCOEI", "VELF", "Melancholic-Choleric"], //Loki
        14: ["ISTP", "9", "9w8", "sp/sx", "962", "2-6-9", "SLI", "RCUEN", "FVLE", "Phlegmatic-Sanguine"], //Clint Barton "Hawkeye" 
        15: ["ESFP", "7", "7w6", "so/sx", "739", "3-7-9", "ESE", "SCUAN", "EFLV", "Sanguine [Dominant]"] //Peter Quill "Star-Lord"
    },
    "S": { //The Simpsons
        1: ["ESFP", "9", "9w8", "sp/sx", "972", "2-7-9", "SEI", "SLUEN", "FEVL", "Sanguine [Dominant]"], //Homer Simpson
        2: ["ESTP", "7", "7w8", "so/sx", "738", "3-7-8", "ILE", "SCUEN", "FELV", "Sanguine [Dominant]"], //Bart Simpson
        3: ["ISFJ", "2", "2w1", "so/sx", "269", "2-6-9", "ESI", "SLOAN", "EVFL", "Phlegmatic [Dominant]"], //Marge Simpson
        4: ["INFJ", "1", "1w2", "so/sp", "154", "1-4-5", "EII", "RLOAI", "VELF", "Melancholic [Dominant]"], //Lisa Simpson
        5: ["ENFJ", "2", "2w1", "so/sx", "296", "2-6-9", "ESI", "", "", "Melancholic [Dominant]"], //Apu Nahasapeemapetilon
        6: ["INTJ", "8", "8w9", "so/sp", "836", "3-6-8", "SLE", "RLOEI", "", "Choleric-Melancholic"], //Montgomery Burns
        7: ["ESFJ", "2", "2w1", "so/sx", "269", "2-6-9", "ESE", "SLOAN", "", "Sanguine-Phlegmatic"], //Ned Flanders
        8: ["ISFP", "6", "6w7", "sp/sx", "261", "1-2-6", "EII", "", "", "Melancholic [Dominant]"], //Milhouse Van Houten
        9: ["ISTP", "6", "6w5", "so/sx", "649", "4-6-9", "SLI", "", "", "Melancholic-Choleric"], //Moe Szyslak
        10: ["ESTP", "6", "6w7", "sx/so", "684", "4-6-8", "SLE", "", "", "Choleric-Melancholic"], //Nelson Muntz
        11: ["ESTP", "8", "8w7", "sx/so", "873", "3-7-8", "SLE", "", "", "Choleric-Melancholic"], //Krusty the Clown
        12: ["ESFP", "7", "7w6", "sp/sx", "794", "4-7-9", "ESE", "", "", "Melancholic-Choleric"], //Edna Krabappel
        13: ["ISFJ", "2", "2w1", "sx/sp", "629", "2-6-9", "ESI", "", "", "Phlegmatic [Dominant]"], //Waylon Smithers
        14: ["INFP", "4", "4w5", "sp/sx", "497", "4-7-9", "SEI", "", "", "Phlegmatic-Sanguine"], //Barney Gumble
        15: ["ISTJ", "1", "1w2", "sp/sx", "163", "1-3-6", "LSI", "", "", "Phlegmatic [Dominant]"] //Seymour Skinner
    },
    "T7S": { //That 70's Show
        1: ["INTP", "6", "6w7", "sp/so", "693", "3-6-9", "EII", "RLOAI", "LEFV", "Phlegmatic [Dominant]"], //Eric Forman
        2: ["ESTJ", "3", "3w2", "so/sx", "317", "1-3-7", "ESE", "SLOEN", "FVEL", "Choleric-Sanguine"], //Jackie Burkhart
        3: ["ESFP", "7", "7w6", "so/sx", "729", "2-7-9", "SEE", "", "EFVL", "Sanguine [Dominant]"], //Michael Kelso
        4: ["ISTP", "9", "9w8", "sp/sx", "974", "4-7-9", "SLI", "", "VLEF", "Phlegmatic [Dominant]"], //Steven Hyde
        5: ["ESTP", "9", "9w8", "so/sx", "962", "2-6-9", "SLE", "", "", "Phlegmatic-Choleric"], //Donna Pinciotti
        6: ["ENFP", "7", "7w6", "sx/so", "738", "3-7-8", "IEE", "", "", "Sanguine [Dominant]"], //Fez
        7: ["ESFJ", "2", "2w1", "so/sx", "216", "1-2-6", "SEI", "", "", "Sanguine-Choleric"], //Kitty Foreman
        8: ["ESTJ", "8", "8w9", "sp/sx", "863", "3-6-8", "LSI", "", "", "Choleric [Dominant]"], //Red Foreman
        9: ["ESFP", "7", "7w6", "so/sx", "794", "4-7-9", "", "", "", "Sanguine [Dominant]"], //Midge Pinciotti
        10: ["ENFP", "6", "6w7", "so/sp", "792", "2-7-9", "SEE", "", "", "Sanguine [Dominant]"] //Bob Pinciotti
    },
    "DA": { //Downton Abbey
        1: ["ISFJ", "2", "2w1", "so/sx", "215", "1-2-5", "", "", "", "Sanguine [Dominant]"], //Robert Crawley, Lord Grantham
        2: ["INFP", "9", "9w8", "so/sx", "947", "4-7-9", "EII", "", "", "Sanguine-Melancholic"], //Lady Sybil Crawley
        3: ["ISFP", "4", "4w3", "sp/sx", "469", "4-6-9", "ESI", "", "", "Melancholic-Sanguine"], //Lady Edith Crawley
        4: ["ISTJ", "1", "1w2", "sp/so", "152", "1-2-5", "LSI", "", "", "Choleric [Dominant]"], //Charlie Carson
        5: ["INFJ", "5", "5w6", "sp/sx", "592", "2-5-9", "", "", "", "Melancholic [Dominant]"], //John Bates
        6: ["ENTJ", "3", "3w4", "so/sp", "361", "1-3-6", "LIE", "RCUEN", "VLEF", "Choleric [Dominant]"], //Lady Mary Crawley
        7: ["INTJ", "4", "4w5", "sp/so", "", "", "", "", "", ""], //Sarah O'Brien
        8: ["ESFJ", "9", "9w1", "so/sx", "296", "2-6-9", "", "", "", "Sanguine [Dominant]"], //Anna Bates
        9: ["ISTJ", "6", "6w5", "so/sp", "631", "1-3-6", "", "", "", "Phlegmatic [Dominant]"], //Elsie Hughes
        10: ["ESFJ", "2", "2w3", "sp/so", "269", "2-6-9", "", "", "", "Phlegmatic [Dominant]"], //William Mason
        11: ["INTJ", "3", "3w4", "sp/sx", "368", "3-6-8", "SLI", "", "", "Melancholic-Choleric"], //Thomas Barrow
        12: ["ESFJ", "9", "9w1", "sx/sp", "286", "2-6-8", "", "", "", "Sanguine [Dominant]"], //Cora Crawley, Lady Grantham
        13: ["ISFP", "6", "6w7", "so/sx", "", "", "", "", "", "Sanguine [Dominant]"], //Diasy Mason
        14: ["ESFJ", "6", "6w5", "so/sx", "628", "2-6-8", "", "", "", "Choleric [Dominant]"], //Beryl Patmore
        15: ["ESTJ", "6", "6w5", "so/sp", "", "", "", "", "", "Choleric-Phlegmatic"] //Violet Crawley / Dowager Countess / Granny
    },
    "SW": { //Star Wars
        1: ["INFP", "9", "9w1", "sp/so", "926", "2-6-9", "IEE", "RCUAI", "EVLF", "Phlegmatic-Sanguine"], //Luke Skywalker
        2: ["ENTJ", "1", "1w2", "so/sp", "126", "1-2-6", "LSE", "SCOAN", "VLEF", "Choleric [Dominant]"], //Leia Organa
        3: ["ESTP", "7", "7w8", "sp/sx", "783", "3-7-8", "SLE", "SCUEN", "FVLE", "Choleric-Sanguine"], //Han Solo
        4: ["ISTJ", "8", "8w9", "sp/sx", "864", "4-6-8", "LSI", "RLOEI", "VLEF", "Melancholic [Dominant]"], //Darth Vader
        5: ["INFJ", "6", "6w5", "so/sp", "612", "1-2-6", "EII", "RCOAI", "LEVF", "Phlegmatic [Dominant]"], //Obi-Wan Kenobi
        6: ["ISFJ", "6", "6w5", "sp/so", "612", "1-2-6", "ESI", "RLOAN", "", "Melancholic [Dominant]"] //C-3PO
    },
    "GA": { //Grey's Anatomy
        1: ["ISFP", "4", "4w3", "sx/so", "469", "4-6-9", "IEI", "", "ELVF", "Melancholic [Dominant]"], //Meredith Grey
        2: ["ISTP", "3", "3w4", "sp/sx", "358", "3-5-8", "LSI", "", "", "Melancholic-Choleric"], //Cristina Yang
        3: ["ESFJ", "2", "2w1", "sx/so", "216", "1-2-6", "ESE", "", "", "Sanguine [Dominant]"], //Isobel "Izzie" Stevens
        4: ["ISTP", "8", "8w9", "sp/sx", "836", "3-6-8", "SLE", "", "", "Choleric-Phlegmatic"], //Alex Karev
        5: ["ISFJ", "9", "9w1", "sx/so", "962", "2-6-9", "SEI", "", "", "Phlegmatic [Dominant]"], //George O'Malley
        6: ["ESTJ", "1", "1w2", "sx/sp", "136", "1-3-6", "LSE", "", "", "Choleric [Dominant]"], //Miranda Bailey
        7: ["ENFJ", "2", "2w3", "so/sp", "216", "1-2-6", "EII", "", "", "Phlegmatic-Sanguine"], //Richard Webber
        8: ["ISTJ", "3", "3w4", "sx/sp", "315", "1-3-5", "LSE", "", "", "Melancholic [Dominant]"], //Preston Burke
        9: ["ENFJ", "3", "3w2", "sp/sx", "386", "3-6-8", "EIE", "", "", "Phlegmatic-Sanguine"], //Derek Shepherd
        10: ["ENFJ", "3", "3w2", "so/sx", "368", "3-6-8", "LIE", "", "", "Melancholic-Choleric"] //Addison Montgomery
    },
    "BB": { //Breaking Bad
        1: ["INTJ", "5", "5w6", "sp/so", "583", "3-5-8", "ILI", "RLOEI", "VFLE", "Melancholic-Choleric"], //Walter White
        2: ["ESFJ", "1", "1w2", "sp/so", "126", "1-2-6", "ESI", "SLOAN", "VFEL", "Choleric [Dominant]"], //Skyler White
        3: ["ESFP", "6", "6w7", "so/sx", "694", "4-6-9", "SEE", "SLUAN", "FEVL", "Sanguine-Melancholic"], //Jesse Pinkman
        4: ["ESTP", "8", "8w7", "so/sx", "873", "3-7-8", "SLE", "SCOEN", "FVLE", "Sanguine-Choleric"], //Hank Schrader
        5: ["ESFP", "2", "2w3", "sx/so", "268", "2-6-8", "EIE", "SLUAN", "", "Sanguine-Choleric"], //Marie Schrader
        6: ["ISFP", "9", "9w1", "sx/so", "946", "4-6-9", "EII", "RLUAN", "", "Melancholic-Phlegmatic"], //Walter White Jr.
        7: ["ENTP", "3", "3w2", "so/sp", "379", "3-7-9", "LIE", "SCUEI", "VFLE", "Sanguine [Dominant]"], //Jimmy McGill "Saul Goodman"
        8: ["INTJ", "1", "1w9", "sp/so", "163", "1-3-6", "LSE", "RCOEI", "VFLE", "Phlegmatic-Choleric"], //Gus Fring
        9: ["ISTJ", "9", "9w8", "sp/sx", "962", "2-6-9", "SLI", "RCOEN", "FLEV", "Phlegmatic-Choleric"], //Mike Ehrmantraut
        10: ["ISFP", "4", "4w3", "sx/sp", "479", "4-7-9", "SEI", "RLUEI", "", "Sanguine-Phlegmatic"] //Jane Margolis
    },
    "FS": { //Firefly+Serenity
        1: ["ESTP", "8", "8w9", "", "873", "3-7-8", "SLE", "", "", "Choleric-Sanguine"], //Mal Reynolds
        2: ["INTJ", "8", "8w7", "so/sx", "852", "2-5-8", "SLE", "", "", ""], //River Tam
        3: ["ENFJ", "2", "2w3", "", "", "", "", "", "", ""], //Inara Serra
        4: ["ENFP", "7", "7w6", "", "729", "2-7-9", "", "", "", "Sanguine [Dominant]"], //Kaylee Frye
        5: ["ISTJ", "1", "1w9", "", "", "", "", "", "", ""], //Zoe Washburne
        6: ["ENFP", "6", "6w7", "", "", "", "", "", "", ""], //Hoban Washburn
        7: ["ISTP", "6", "6w7", "", "683", "3-6-8", "SLE", "", "", ""], //Jayne Cobb
        8: ["ENFJ", "9", "9w8", "", "", "", "", "", "", ""], //Shepherd Derrial Book
        9: ["INFJ", "2", "2w1", "", "", "", "", "", "", ""], //Simon Tam
        10: ["", "", "", "", "", "", "", "", "", ""] //The Operative
    },
    "LOTR": { //Lord of the Rings
        1: ["INFP", "9", "9w1", "sp/so", "946", "4-6-9", "EII", "RLUAI", "FEVL", "Phlegmatic-Melancholic"], //Frodo Baggins
        2: ["INFJ", "6", "6w5", "so/sp", "612", "1-2-6", "ESI", "RCOAI", "VFEL", "Melancholic [Dominant]"], //Aragorn
        3: ["ESTJ", "2", "2w3", "so/sp", "286", "2-6-8", "SEE", "SLOEN", "", "Phlegmatic-Choleric"], //Boromir
        4: ["ENTP", "7", "7w6", "so/sx", "728", "2-7-8", "ILE", "RCUAN", "", "Choleric-Sanguine"], //Meriadoc "Merry" Brandybuck
        5: ["ISFJ", "6", "6w5", "sp/so", "629", "2-6-9", "SEI", "SLOAN", "", "Phlegmatic-Melancholic"], //Samwise "Sam" Gamgee
        6: ["INTJ", "5", "5w6", "so/sp", "512", "1-2-5", "LII", "RCOAI", "VELF", "Melancholic [Dominant]"], //Gandalf the Grey
        7: ["ESTP", "8", "8w7", "sp/so", "873", "3-7-8", "SEE", "SCUEN", "", "Choleric-Sanguine"], //Gimli
        8: ["ISFP", "9", "9w8", "sx/sp", "936", "3-6-9", "SLI", "", "", "Sanguine-Phlegmatic"], //Legolas
        9: ["ESFP", "7", "7w6", "so/sx", "792", "2-7-9", "IEE", "SLUAN", "", "Sanguine-Phlegmatic"], //Pippin Took
        10: ["ENTJ", "6", "6w5", "sp/sx", "638", "3-6-8", "SLE", "RCOEN", "", "Choleric-Melancholic"] //Gollum
    },
    "C": { //Community
        1: ["ENTP", "3", "3w2", "so/sp", "378", "3-7-8", "LIE", "SCUEI", "VLEF", "Choleric-Sanguine"], //Jeff Winger
        2: ["INFP", "4", "4w5", "so/sx", "416", "1-4-6", "EII", "SLUAI", "EVLF", "Choleric [Dominant]"], //Britta Perry
        3: ["INTP", "5", "5w4", "sp/sx", "549", "4-5-9", "ILI", "RCUEI", "LVEF", "Phlegmatic [Dominant]"], //Abed Nadir
        4: ["ENFP", "7", "7w6", "so/sx", "793", "3-7-9", "SEE", "SCUAN", "EFVL", "Sanguine [Dominant]"], //Troy Barnes
        5: ["ISFJ", "1", "1w2", "so/sp", "136", "1-3-6", "ESE", "SLOEN", "VELF", "Choleric-Sanguine"], //Annie Edison
        6: ["ESFJ", "2", "2w1", "so/sp", "216", "1-2-6", "ESI", "SCOAN", "", "Sanguine [Dominant]"], //Shirley Bennett
        7: ["ESTP", "8", "8w7", "sx/sp", "837", "3-7-8", "SLE", "SLUEN", "", "Choleric [Dominant]"], //Pierce Hawthorne
        8: ["ESFP", "7", "7w6", "so/sx", "739", "3-7-9", "ESE", "", "", "Sanguine [Dominant]"], //Dean Craig Pelton
        9: ["ENFP", "8", "8w7", "sx/so", "872", "2-7-8", "SLE", "SLUEI", "", "Choleric [Dominant]"], //Ben "Kevin" Chang
        10: ["ENTP", "6", "6w7", "sp/sx", "631", "1-3-6", "", "", "", "Phlegmatic-Sanguine"] //Ian Duncan
    },
    "WD": { //The Walking Dead
        1: ["ISTJ", "6", "6w5", "sp/so", "612", "1-2-6", "LSI", "RCOAN", "FVLE", "Melancholic-Choleric"], //Rick Grimes
        2: ["ESTP", "8", "8w7", "sx/sp", "873", "3-7-8", "SLE", "", "VFLE", "Choleric [Dominant]"], //Shane Walsh
        3: ["ESFJ", "2", "2w1", "so/sp", "216", "1-2-6", "", "", "", "Phlegmatic-Choleric"], //Lori Grimes
        4: ["ESFP", "6", "6w7", "sp/sx", "684", "4-6-8", "SEE", "", "", "Choleric-Sanguine"], //Andrea Harrison
        5: ["ENFJ", "5", "5w6", "sp/so", "594", "4-5-9", "EII", "", "", "Melancholic-Phlegmatic"], //Dale Horvath
        6: ["ISFJ", "6", "6w7", "so/sp", "692", "2-6-9", "SEI", "", "FEVL", "Phlegmatic-Melancholic"], //Glenn Rhee
        7: ["ESTP", "6", "6w7", "sp/so", "694", "4-6-9", "EIE", "SLUAN", "", "Choleric-Phlegmatic"], //Carl Grimes
        8: ["ISTP", "8", "8w9", "sp/sx", "846", "4-6-8", "SLI", "RLUAN", "LFVE", "Choleric-Phlegmatic"], //Daryl Dixon
        9: ["ISFJ", "6", "6w5", "sp/so", "694", "4-6-9", "SEI", "RLOAN", "", "Melancholic-Phlegmatic"], //Carol Peletier
        10: ["ESTP", "8", "8w7", "sp/sx", "873", "3-7-8", "SLE", "RLUEN", "", "Choleric-Sanguine"] //Merle Dixon
    },
    "BBT": { //The Big Bang Theory
        1: ["ISFJ", "9", "9w1", "sp/so", "962", "2-6-9", "EII", "RLOAI", "", "Melancholic-Phlegmatic"], //Leonard Hofstadter
        2: ["ISTJ", "5", "5w6", "sp/so", "513", "1-3-5", "LII", "RCOEI", "LVFE", "Melancholic-Choleric"], //Sheldon Cooper
        3: ["ESFP", "7", "7w6", "sx/so", "728", "2-7-8", "ESE", "SCUAN", "EFVL", "Sanguine [Dominant]"], //Penny
        4: ["ENTP", "7", "7w6", "so/sx", "739", "3-7-9", "ILE", "", "", "Sanguine [Dominant]"], //Howard Wolowitz
        5: ["INFP", "4", "4w5", "sx/sp", "496", "4-6-9", "IEI", "", "ELFV", "Melancholic-Phlegmatic"], //Rajesh "Raj" Koothrappali
        6: ["INTP", "5", "5w4", "sx/so", "539", "3-5-9", "ILE", "", "", "Phlegmatic-Choleric"], //Leslie Winkle
        7: ["ENTJ", "3", "3w2", "sx/sp", "316", "1-3-6", "LIE", "", "", "Choleric-Sanguine"], //Bernadette Rostenkowski
        8: ["INTP", "1", "1w2", "sp/so", "126", "1-2-6", "LII", "RLOAI", "LVEF", "Melancholic-Phlegmatic"], //Amy Farrah Fowler
        9: ["ISFP", "4", "4w3", "so/sx", "495", "4-5-9", "", "", "", "Melancholic [Dominant]"], //Stuart Bloom
        10: ["ESFJ", "2", "2w1", "", "216", "1-2-6", "", "", "", "Phlegmatic [Dominant]"] //Mary Cooper (née Tucker)
    },
    "TD": { //True Detective
        1: ["INTP", "5", "5w4", "sp/sx", "548", "4-5-8", "ILI", "RLUEI", "LVEF", "Melancholic [Dominant]"], //Rustin Cohle
        2: ["ESFP", "8", "8w9", "so/sx", "862", "2-6-8", "SEE", "", "", "Choleric-Sanguine"], //Marty Hart
        3: ["ISFJ", "2", "2w1", "", "", "", "", "", "", ""] //Maggie Hart
    },
    "PR": { //Parks and Recreation
        1: ["ESFJ", "3", "3w2", "so/sp", "316", "1-3-6", "ESE", "SLOAI", "VEFL", "Sanguine [Dominant]"], //Leslie Knope
        2: ["ISFJ", "2", "2w1", "sp/so", "269", "2-6-9", "SEI", "RLOAI", "FEVL", "Phlegmatic-Sanguine"], //Ann Perkins
        3: ["INTP", "5", "5w6", "sp/sx", "592", "2-5-9", "", "", "", "Phlegmatic [Dominant]"], //Mark Brendanawicz
        4: ["ESTP", "3", "3w2", "so/sx", "379", "3-7-9", "SEE", "SLUEN", "VFEL", "Sanguine [Dominant]"], //Tom Haverford
        5: ["ISTJ", "5", "5w6", "sp/sx", "583", "3-5-8", "SLI", "RCOEN", "FVLE", "Choleric-Phlegmatic"], //Ron Swanson
        6: ["INTP", "5", "5w4", "sx/sp", "584", "4-5-8", "ILI", "SCUEI", "VFLE", "Phlegmatic-Choleric"], //April Ludgate
        7: ["ISFJ", "9", "9w1", "sp/so", "962", "2-6-9", "EII", "RCOAN", "EFLV", "Sanguine-Phlegmatic"], //Garry "Jerry" Gergich
        8: ["ESTP", "8", "8w7", "sp/sx", "873", "3-7-8", "SLE", "SLUEN", "FVEL", "Phlegmatic-Choleric"], //Donna Meagle
        9: ["ISTJ", "1", "1w9", "so/sp", "163", "1-3-6", "LII", "RLOEI", "LFVE", "Phlegmatic [Dominant]"], //Ben Wyatt
        10: ["ENFJ", "3", "3w2", "so/sx", "317", "1-3-7", "ESE", "SLOAI", "VEFL", "Sanguine [Dominant]"] //Chris Traeger
    },
    "HG": { //The Hunger Games
        1: ["ISTP", "6", "6w5", "sp/sx", "684", "4-6-8", "SLI", "RLUEN", "LFVE", "Phlegmatic-Choleric"], //Katniss Everdeen
        2: ["ENFP", "2", "2w3", "so/sx", "269", "2-6-9", "EIE", "SCOAI", "EFVL", "Sanguine-Phlegmatic"], //Peeta Mellark
        3: ["INTP", "5", "5w6", "sp/so", "583", "3-5-8", "ILI", "SCUEI", "VFLE", "Melancholic-Choleric"], //Haymitch Abernathy
        4: ["ESFJ", "2", "2w3", "so/sx", "471", "1-4-7", "ESE", "SLOAN", "VFLE", "Sanguine [Dominant]"], //Effie Trinket
        5: ["ENTJ", "8", "8w9", "sp/so", "853", "3-5-8", "LSI", "", "VFLE", "Choleric-Melancholic"], //Coriolanus Snow
        6: ["ENTJ", "3", "3w4", "so/sp", "836", "3-6-8", "LIE", "SCOEN", "", "Choleric-Melancholic"] //Gale Hawthorne
    },
    "FC": { //Fight Club
        1: ["ENTP", "8", "8w7", "sx/so", "854", "4-5-8", "SLE", "SCUEI", "VFLE", "Choleric [Dominant]"], //Tyler Durden
        2: ["ISFJ", "9", "9w1", "sp/sx", "964", "4-6-9", "EII", "RLOAN", "FLEV", "Melancholic [Dominant]"], //The Narrator
        3: ["ESFP", "4", "4w3", "sx/sp", "487", "4-7-8", "IEE", "SLUEN", "FELV", "Sanguine-Choleric"] //Marla Singer
    },
    "SC": { //Sex and the City
        1: ["ENFP", "6", "6w7", "so/sx", "649", "4-6-9", "IEE", "", "EFVL", "Sanguine-Melancholic"], //Carrie Bradshaw
        2: ["ISFJ", "2", "2w1", "sx/so", "216", "1-2-6", "", "", "", "Phlegmatic-Melancholic"], //Charlotte York
        3: ["ISTJ", "6", "6w5", "sp/so", "613", "1-3-6", "", "", "", "Melancholic-Choleric"], //Miranda Hobbes
        4: ["ESTP", "7", "7w8", "sx/so", "738", "3-7-8", "SEE", "", "", "Choleric-Sanguine"], //Samantha Jones
        5: ["INTJ", "3", "3w4", "sp/sx", "368", "3-6-8", "", "", "", "Choleric-Sanguine"], //Mr. Big
        6: ["ESFP", "9", "9w8", "", "", "", "", "", "", ""] //Steve Brady
    },
    "D": { //Dexter
        1: ["ISTJ", "1", "1w9", "sp/sx", "153", "1-3-5", "LSI", "RCOEN", "", "Melancholic-Phlegmatic"], //Dexter Morgan
        2: ["ISFJ", "2", "2w1", "so/sp", "269", "2-6-9", "SEI", "", "", "Phlegmatic [Dominant]"], //Rita Bennet
        3: ["ENFP", "7", "7w6", "sx/so", "741", "1-4-7", "SLI", "", "", "Sanguine [Dominant]"], //Debra Morgan
        4: ["ESTP", "8", "8w7", "sx/so", "836", "3-6-8", "SLE", "", "", "Choleric [Dominant]"], //James Doakes
        5: ["ESTJ", "3", "3w4", "so/sp", "386", "3-6-8", "SEE", "", "", "Choleric [Dominant]"], //Maria LaGuerta
        6: ["ESFJ", "9", "9w8", "so/sx", "972", "2-7-9", "LSE", "", "", "Phlegmatic-Sanguine"], //Angel Batista
        7: ["ENFJ", "6", "6w5", "", "", "", "", "", "", "Melancholic-Choleric"], //Harry Morgan
        8: ["ENTP", "7", "7w6", "", "794", "4-7-9", "LII", "", "", ""], //Vince Masuka
        9: ["ESTJ", "8", "8w7", "", "", "", "", "", "", ""], //Tom Matthews
        10: ["ESTP", "7", "7w8", "", "", "", "", "", "", ""] //Joey Quinn
    },
    "DK": { //The Dark Knight
        1: ["INTJ", "1", "1w9", "sp/so", "153", "1-3-5", "LSI", "RCOEI", "LVEF", "Choleric-Melancholic"], //Bruce Wayne "Batman"
        2: ["ISFJ", "2", "2w1", "sx/sp", "296", "2-6-9", "", "", "", ""], //Alfred Pennyworth
        3: ["ENTP", "7", "7w8", "sx/sp", "784", "4-7-8", "ILE", "SLUEI", "VFLE", "Choleric-Sanguine"], //The Joker
        4: ["ISTJ", "1", "1w9", "sx/sp", "", "", "ESI", "", "", "Melancholic-Choleric"], //James Gordon
        5: ["ENFJ", "3", "3w2", "so/sx", "368", "3-6-8", "EIE", "", "", "Sanguine-Choleric"], //Harvey Dent "Two-Face"
        6: ["ESFJ", "1", "1w2", "so/sx", "162", "1-2-6", "ESI", "", "", ""], //Rachel Dawes
        7: ["INTP", "5", "5w4", "sx/sp", "549", "4-5-9", "ILI", "", "", "Phlegmatic-Sanguine"], //Lucius Fox
        8: ["ENFJ", "1", "1w2", "", "", "", "", "", "", ""], //Anthony Garcia
        9: ["ENTJ", "5", "5w6", "", "", "", "", "", "", ""], //Lau
        10: ["ESTJ", "3", "3w2", "", "", "", "", "", "", ""] //Sal Maroni
    },
    "WSW": { //Westworld
        1: ["INFP", "2", "2w1", "sx/so", "216", "1-2-6", "EII", "", "", "Melancholic-Sanguine"], //Dolores Abernathy
        2: ["ENTJ", "8", "8w9", "sp/sx", "", "", "SEE", "", "", "Choleric-Melancholic"], //Maeve Millay
        3: ["INTP", "5", "5w6", "", "", "", "LII", "", "", "Melancholic [Dominant]"], //Benard Lowe
        4: ["ISFJ", "9", "9w8", "", "", "", "", "", "", ""], //Teddy Flood
        5: ["ISTJ", "6", "6w5", "", "", "", "", "", "", "Phlegmatic [Dominant]"], //Ashley Stubbs
        6: ["ENTP", "7", "7w6", "", "", "", "", "", "", "Choleric [Dominant]"], //Lee Sizemore
        7: ["ENTP", "6", "6w5", "", "", "", "ILI", "", "", "Melancholic-Choleric"], //Elsie Hughes
        8: ["ISTP", "8", "8w9", "sp/sx", "", "", "SLE", "", "", "Choleric [Dominant]"], //Man in Black
        9: ["INTJ", "5", "5w4", "sx/sp", "548", "4-5-8", "ILI", "RCOEI", "", "Phlegmatic [Dominant]"], //Dr. Robert Ford
        10: ["ESTJ", "3", "3w4", "", "316", "1-3-6", "", "", "", "Choleric-Melancholic"], //Theresa Cullen
        11: ["ENTJ", "3", "3w4", "", "", "", "", "", "", ""], //Charlotte Hale
        12: ["INFJ", "9", "9w1", "", "", "", "", "", "", ""], //Akecheta
        13: ["ISFP", "9", "9w1", "", "926", "2-6-9", "", "", "", "Phlegmatic-Sanguine"], //Clementine Pennyfeather
        14: ["ESTP", "7", "7w8", "so/sx", "738", "3-7-8", "SLE", "", "", "Sanguine [Dominant]"], //Logan
        15: ["INFP", "9", "9w1", "", "926", "2-6-9", "", "", "", ""] //Felix Lutz
    },
    "LK": { //The Lion King
        1: ["ESFP", "7", "7w6", "so/sx", "739", "3-7-9", "ESE", "", "", "Sanguine [Dominant]"], //Simba
        2: ["ESFJ", "6", "6w7", "sx/so", "682", "2-6-8", "ESI", "", "", "Choleric-Sanguine"], //Nala
        3: ["ENTP", "7", "7w8", "sp/sx", "784", "4-7-8", "ILE", "", "LEVF", "Choleric-Sanguine"], //Timon
        4: ["ESFP", "9", "9w8", "sx/so", "972", "2-7-9", "SEI", "", "", "Sanguine-Phlegmatic"], //Pumbaa
        5: ["INTJ", "3", "3w4", "sx/so", "385", "3-5-8", "EIE", "SLUEI", "VELF", "Melancholic-Choleric"], //Scar
        6: ["ENFJ", "1", "1w2", "so/sp", "126", "1-2-6", "ESI", "SCOAI", "", "Phlegmatic-Choleric"] //Mufasa
    },
    "CB": { //Casablanca
        1: ["ISTP", "9", "9w8", "sp/so", "", "", "", "", "", ""], //Rick Blaine
        2: ["ISFJ", "9", "9w1", "sx/so", "", "", "", "", "", ""], //Ilsa Lund
        3: ["INFJ", "1", "1w2", "so/sp", "", "", "", "", "", ""] //Victor Laszlo
    },
    "BSG": { //Battlestar Galactica
        1: ["ISTJ", "8", "8w9", "so/sp", "163", "1-3-6", "LSE", "", "", ""], //William Adama
        2: ["INFJ", "2", "2w3", "so/sp", "613", "1-3-6", "IEI", "", "", "Melancholic-Sanguine"], //Laura Roslin
        3: ["ESTP", "8", "8w7", "sp/so", "873", "3-7-8", "SLE", "", "", "Choleric [Dominant]"], //Kara "Starbuck" Thrace
        4: ["INFP", "1", "1w2", "sp/so", "", "", "", "", "", ""], //Lee 'Apollo' Adama
        5: ["ENTP", "3", "3w4", "so/sp", "369", "3-6-9", "ILE", "", "", ""], //Gaius Baltar
        6: ["INFJ", "2", "2w1", "sx/so", "285", "2-5-8", "", "", "", ""], //Number Six
        7: ["ISFJ", "6", "6w7", "sp/so", "", "", "", "", "", ""], //Sharon "Boomer" Valerii
        8: ["ISTJ", "8", "8w7", "", "", "", "LSI", "", "", ""], //Saul Tigh
        9: ["ISFJ", "6", "6w5", "", "", "", "", "", "", ""], //Galen Tyrol
        10: ["ISFJ", "1", "1w2", "", "", "", "", "", "", ""], //Karl "Helo" Agathon
        11: ["ISTJ", "5", "5w4", "", "153", "1-3-5", "", "", "", ""], //Felix Gaeta
        12: ["ISFJ", "9", "9w1", "", "", "", "", "", "", ""], //Anastasia Dualla
        13: ["ISFJ", "6", "6w7", "", "", "", "", "", "", ""], //Billy Keikeya
        14: ["ISFP", "7", "7w6", "", "", "", "", "", "", ""], //Cally Henderson
        15: ["ENFP", "7", "7w6", "", "", "", "", "", "", ""] //Samuel Anders
    },
    "MM": { //Mad Men
        1: ["ENTJ", "3", "3w4", "sx/sp", "385", "3-5-8", "SLE", "RCUEI", "VFLE", "Melancholic-Choleric"], //Donald "Don" Draper
        2: ["INFJ", "6", "6w5", "so/sx", "631", "1-3-6", "EII", "", "LVEF", ""], //Margaret "Peggy" Olson
        3: ["ENTP", "3", "3w4", "so/sx", "361", "1-3-6", "LIE", "", "VFLE", "Choleric-Phlegmatic"], //Peter "Pete" Campbell
        4: ["ISFJ", "1", "1w2", "sp/so", "162", "1-2-6", "ESI", "", "", "Phlegmatic [Dominant]"], //Betty Draper
        5: ["ENFJ", "3", "3w2", "sx/so", "317", "1-3-7", "ESE", "", "", "Phlegmatic-Melancholic"], //Joan Holloway
        6: ["ESFJ", "2", "2w3", "", "", "", "", "", "", ""], //Salvatore "Sal" Romano
        7: ["ENFP", "4", "4w3", "", "", "", "", "", "", ""], //Paul Kinsey
        8: ["ENFJ", "6", "6w7", "so/sp", "641", "1-4-6", "EII", "", "", "Phlegmatic-Choleric"], //Kenneth "Ken" Cosgrove
        9: ["ISFJ", "6", "6w5", "", "", "", "", "", "", ""], //Harlod "Harry" Crane
        10: ["INTJ", "5", "5w4", "", "", "", "", "", "", ""], //Rachel Menken
        11: ["ESTP", "7", "7w8", "sx/so", "738", "3-7-8", "SEE", "", "", "Sanguine [Dominant]"], //Roger H. Sterling, Jr.
        12: ["INTP", "9", "9w8", "", "953", "3-5-9", "SLI", "", "", ""], //Bertram "Bert" Cooper
        13: ["ISFJ", "3", "3w2", "", "", "", "", "", "", ""], //Henry Francis
        14: ["ISTJ", "6", "6w5", "sp/so", "", "", "", "", "", "Phlegmatic-Melancholic"], //Lane Pryce
        15: ["ENTP", "7", "7w8", "", "", "", "SLI", "", "", ""] //Stan Rizzo
    },
    "PC": { //Pirates of the Carribean
        1: ["ENTP", "7", "7w8", "sp/sx", "738", "3-7-8", "ILE", "SCUEI", "FLVE", "Sanguine-Choleric"], //Captain Jack Sparrow
        2: ["ESTJ", "8", "8w7", "sp/so", "837", "3-7-8", "LIE", "SCOEN", "", "Choleric-Sanguine"], //Captain Hector Barbossa
        3: ["ISFJ", "6", "6w7", "sx/sp", "638", "3-6-8", "ESE", "", "", "Sanguine-Phlegmatic"], //Joshamee Gibbs
        4: ["ISFJ", "1", "1w2", "sx/so", "125", "1-2-5", "ESI", "", "", "Phlegmatic [Dominant]"], //William Turner Jr.
        5: ["ESFP", "8", "8w7", "so/sx", "873", "3-7-8", "SEE", "SCOEI", "EVLF", "Choleric [Dominant]"], //Elizabeth Swann
        6: ["ISTJ", "1", "1w9", "sp/so", "136", "1-3-6", "ESI", "", "", "Phlegmatic-Choleric"] //James Norrington
    },
    "BVS": { //Buffy the Vampire Slayer
        1: ["ESFP", "6", "6w7", "so/sx", "641", "1-4-6", "SEE", "SLUAN", "EFVL", "Sanguine-Phlegmatic"], //Buffy Summers
        2: ["ENTP", "6", "6w7", "sp/so", "693", "3-6-9", "ILE", "", "", "Sanguine-Phlegmatic"], //Xander Harris
        3: ["INFP", "6", "6w5", "so/sx", "692", "2-6-9", "EII", "RLOAI", "ELVF", "Phlegmatic-Melancholic"], //Willow Rosenberg
        4: ["ESTJ", "3", "3w2", "so/sp", "368", "3-6-8", "LSE", "SCOEN", "VFEL", "Choleric-Phlegmatic"], //Cordelia Chase
        5: ["INTJ", "5", "5w6", "so/sp", "512", "1-2-5", "ILI", "RCOAI", "LVFE", "Phlegmatic [Dominant]"], //Rupert Giles
        6: ["ISFJ", "1", "1w2", "sp/so", "146", "1-4-6", "ESI", "RLOAI", "", "Melancholic-Phlegmatic"] //Angel
    },
    "SL": { //Sherlock
        1: ["INTP", "5", "5w6", "sx/sp", "538", "3-5-8", "ILE", "RLUEI", "LVEF", "Melancholic-Choleric"], //Sherlock Holmes
        2: ["ISFJ", "6", "6w5", "sp/so", "612", "1-2-6", "ESI", "SLOAN", "FELV", "Phlegmatic [Dominant]"], //John Watson
        3: ["ISTJ", "1", "1w9", "sp/sx", "162", "1-2-6", "LSE", "RLOAN", "", "Choleric-Phlegmatic"], //Greg Lestrade
        4: ["ESFJ", "2", "2w1", "so/sx", "269", "2-6-9", "SEI", "", "", "Phlegmatic-Sanguine"], //Martha Louis Hudson (née Sissons)
        5: ["ESTJ", "1", "1w9", "sp/so", "163", "1-3-6", "LSE", "SCOEI", "LVFE", "Melancholic-Phlegmatic"], //Mycroft Holmes
        6: ["INFP", "2", "2w1", "sx/so", "269", "2-6-9", "EII", "", "", "Phlegmatic-Melancholic"] //Molly Hooper
    },
    "SVU": { //Law & Order: SVU
        1: ["INFJ", "1", "1w2", "sp/so", "162", "1-2-6", "ESI", "RCOAN", "", "Melancholic [Dominant]"], //Olivia Benson
        2: ["INTP", "5", "5w6", "sp/sx", "594", "4-5-9", "ILE", "RCUEI", "", ""], //John Munch
        3: ["ISTJ", "6", "6w5", "sp/so", "", "", "SLI", "", "", ""], //Captain Donald Cragen
        4: ["ESTJ", "8", "8w9", "so/sp", "862", "2-6-8", "LSE", "SLUEN", "", "Choleric [Dominant]"], //Elliot Stabler
        5: ["ISTP", "9", "9w8", "sp/sx", "954", "4-5-9", "SLI", "RCUAN", "", "Phlegmatic [Dominant]"], //Odafin 'Fin' Tutuola
        6: ["ENTJ", "1", "1w2", "so/sp", "", "", "LSI", "RCOEN", "", ""] //Dr. Melinda Warner
    },
    "JP": { //Jurassic Park
        1: ["ISTP", "5", "5w6", "sp/sx", "593", "3-5-9", "SLI", "RCOEI", "", "Phlegmatic-Choleric"], //Dr. Alan Grant
        2: ["ENFJ", "2", "2w3", "so/sx", "261", "1-2-6", "EIE", "SCOAI", "VFEL", "Sanguine-Phlegmatic"], //Dr. Ellie Sattler
        3: ["ENTP", "5", "5w6", "so/sp", "548", "4-5-8", "ILE", "SCUEI", "VFLE", "Phlegmatic-Sanguine"], //Dr. Ian Malcolm
        4: ["ENFP", "7", "7w6", "so/sx", "731", "1-3-7", "EIE", "", "", "Sanguine [Dominant]"], //John Hammond
        5: ["ISTP", "", "", "", "", "", "", "", "", ""], //Ray Arnold
        6: ["ENTP", "7", "7w6", "sx/sp", "784", "4-7-8", "ILE", "", "", "Sanguine [Dominant]"] //Dennis Nedry
    },
    "CRA": { //Crazy Rich Asians
        1: ["ENFJ", "6", "6w7", "so/sp", "629", "2-6-9", "IEE", "SLOAN", "", "Sanguine [Dominant]"], //Rachel Chu
        2: ["ISFJ", "6", "6w5", "so/sx", "694", "4-6-9", "ESI", "", "", "Melancholic [Dominant]"], //Nick Young
        3: ["ESTJ", "8", "8w9", "so/sp", "836", "3-6-8", "LSE", "", "", "Choleric-Melancholic"], //Eleanor Young
        4: ["ENTP", "7", "7w6", "so/sp", "793", "3-7-9", "SEE", "", "", "Sanguine-Choleric"], //Peik Lin Goh
        5: ["INFJ", "1", "1w9", "so/sp", "136", "1-3-6", "EIE", "", "", "Melancholic-Phlegmatic"], //Astrid Young-Teo
        6: ["ESTP", "", "", "", "", "", "", "", "", ""] //Colin Khoo
    },
    "SV": { //Sillicon Valley
        1: ["INFP", "6", "6w5", "sp/so", "641", "1-4-6", "EII", "RLUEI", "", "Melancholic [Dominant]"], //Richard Hendricks
        2: ["ENTP", "8", "8w7", "sp/so", "873", "3-7-8", "SEE", "SLUEN", "", "Choleric-Sanguine"], //Erlich Bachman
        3: ["ISFP", "9", "9w1", "", "964", "4-6-9", "SLI", "", "", "Sanguine-Phlegmatic"], //Nelson "Big Head" Bighetti
        4: ["ISTP", "8", "8w9", "sp/so", "584", "4-5-8", "LSI", "RCUEI", "FLVE", "Choleric-Phlegmatic"], //Bertram Gilfoyle
        5: ["ENFP", "3", "3w4", "so/sx", "359", "3-5-9", "IEE", "SCUAI", "", "Sanguine-Choleric"], //Dinesh Chugtai
        6: ["INTJ", "5", "5w4", "", "", "", "", "", "", "Phlegmatic-Choleric"], //Peter Gregory
        7: ["ENFJ", "3", "3w2", "so/sx", "", "", "LIE", "SCOAI", "", "Sanguine-Melancholic"], //Monica Hall
        8: ["ISFJ", "2", "2w1", "so/sx", "269", "2-6-9", "SEI", "SCOAN", "", "Sanguine-Melancholic"], //Donald "Jared" Dunn
        9: ["ENTJ", "8", "8w7", "sp/so", "835", "3-5-8", "LIE", "SLOEN", "", "Choleric [Dominant]"], //Gavin Belson
        10: ["ISTP", "8", "8w9", "sx/sp", "853", "3-5-8", "", "", "", ""] //Jian Yang
    },
    "TP": { //Twin Peaks
        1: ["INFJ", "5", "5w6", "so/sp", "512", "1-2-5", "LII", "SCOAI", "EVLF", "Sanguine-Phlegmatic"], //Dale Cooper
        2: ["ISFJ", "2", "2w1", "sp/so", "296", "2-6-9", "ESI", "", "", "Phlegmatic [Dominant]"], //Harry S. Truman
        3: ["ESFP", "6", "6w7", "sx/so", "629", "2-6-9", "", "", "", "Phlegmatic [Dominant]"], //Shelly Johnson
        4: ["ESTP", "7", "7w8", "sx/sp", "738", "3-7-8", "SLE", "", "", "Choleric [Dominant]"], //Robert "Bobby" Briggs
        5: ["ENTJ", "3", "3w4", "so/sp", "368", "3-6-8", "LIE", "", "VLFE", "Sanguine-Choleric"], //Benjamin "Ben" Horne
        6: ["ENTP", "7", "7w6", "sx/sp", "783", "3-7-8", "ILE", "SCUEI", "VFLE", "Sanguine [Dominant]"], //Audrey Horne
        7: ["ESFJ", "2", "2w1", "so/sx", "126", "1-2-6", "ESE", "", "", "Phlegmatic-Melancholic"], //Norma Jennings
        8: ["ISFP", "4", "4w5", "sp/sx", "469", "4-6-9", "SLI", "", "", "Melancholic [Dominant]"], //James Hurley
        9: ["ISTP", "9", "9w8", "sp/so", "962", "2-6-9", "SLI", "", "", "Phlegmatic [Dominant]"], //Big Ed Hurley
        10: ["ISFP", "9", "9w1", "sp/so", "927", "2-7-9", "ESI", "", "", "Phlegmatic [Dominant]"], //Pete Martell
        11: ["ENFJ", "3", "3w2", "so/sx", "361", "1-3-6", "ESE", "", "", "Sanguine [Dominant]"], //Leland "Lee" Palmer
        12: ["INFJ", "2", "2w1", "sp/so", "269", "2-6-9", "EIE", "RLOAI", "", "Melancholic [Dominant]"], //Jocelyn "Josie" Packard
        13: ["ENTJ", "8", "8w7", "sp/sx", "835", "3-5-8", "", "", "", "Choleric [Dominant]"], //Catherine Martell
        14: ["ESFJ", "2", "2w1", "", "269", "2-6-9", "ESE", "", "", "Phlegmatic [Dominant]"], //Lucy Moran
        15: ["ISFJ", "6", "6w7", "sp/sx", "641", "1-4-6", "LII", "SLOAI", "ELVF", "Melancholic [Dominant]"] //Donna Hayward
    },
    "XF": { //The X-Files
        1: ["INFP", "5", "5w4", "sp/sx", "514", "1-4-5", "ILI", "SCUEI", "", "Phlegmatic-Melancholic"], //Fox Mulder
        2: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "LSI", "RCOAI", "", "Melancholic-Choleric"], //Dana Scully
        3: ["ISTJ", "8", "8w9", "sp/so", "862", "2-6-8", "LSE", "", "", "Choleric [Dominant]"] //Walter Skinner
    },
    "GG": { //The Great Gatsby
        1: ["INFJ", "3", "3w2", "sx/so", "368", "3-6-8", "EIE", "RLOAI", "VELF", "Melancholic-Choleric"], //Jay Gatsby
        2: ["ISFJ", "9", "9w1", "so/sx", "926", "2-6-9", "", "RCOAN", "", "Melancholic-Phlegmatic"], //Nick Carraway
        3: ["ESFP", "9", "9w8", "sp/so", "962", "2-6-9", "", "SLUAN", "", "Sanguine-Choleric"], //Daisy Buchanan
        4: ["ESTJ", "8", "8w7", "sp/sx", "863", "3-6-8", "", "", "", "Choleric-Melancholic"], //Tom Buchanan
        5: ["ESFP", "7", "7w8", "sp/sx", "", "", "", "", "", ""], //Myrtle Wilson
        6: ["ISTP", "8", "8w9", "sp/so", "873", "3-7-8", "SLI", "SCUEN", "FLVE", "Phlegmatic-Choleric"] //Jordan Baker
    },
    "RJ": { //Romeo and Juliet
        1: ["INFP", "4", "4w3", "sx/so", "479", "4-7-9", "EIE", "SLUEN", "", "Melancholic-Choleric"], //Romeo Montague
        2: ["INFP", "4", "4w5", "sx/sp", "469", "4-6-9", "IEI", "RLUAI", "", "Phlegmatic-Melancholic"], //Juliet Capulet
        3: ["INFJ", "1", "1w9", "so/sp", "162", "1-2-6", "", "", "", "Phlegmatic-Melancholic"], //Friar Laurence
        4: ["ENTP", "7", "7w8", "sx/so", "748", "4-7-8", "EIE", "SCUEI", "", "Sanguine-Choleric"], //Mercutio
        5: ["ESFJ", "2", "2w3", "so/sx", "279", "2-7-9", "ESE", "SCOAN", "", "Sanguine [Dominant]"], //Nurse
        6: ["ISFJ", "9", "9w1", "sx/sp", "926", "2-6-9", "", "RCUAI", "", "Phlegmatic-Melancholic"] //Benvolio
    },
    "M": { //The Matrix
        1: ["INTP", "5", "5w4", "sp/sx", "549", "4-5-9", "ILI", "RCUEI", "LEVF", "Melancholic [Dominant]"], //Neo
        2: ["ENFJ", "9", "9w8", "so/sx", "936", "3-6-9", "EIE", "SCOAI", "", "Choleric-Phlegmatic"], //Morpheus
        3: ["ISTP", "6", "6w5", "sx/sp", "612", "1-2-6", "LSI", "RCOEN", "", "Melancholic-Sanguine"], //Trinity
        4: ["INTJ", "1", "1w9", "so/sp", "135", "1-3-5", "LSI", "RCOEI", "VLEF", "Choleric [Dominant]"], //Agent Smith
        5: ["ESTP", "3", "3w4", "sx/sp", "378", "3-7-8", "ILE", "", "", "Melancholic-Phlegmatic"], //Cypher
        6: ["INFJ", "2", "2w1", "so/sp", "296", "2-6-9", "EII", "", "", "Melancholic-Sanguine"] //The Oracle
    },
    "CBP": { //Cowboy Bebop
        1: ["ISTP", "9", "9w8", "sp/sx", "974", "4-7-9", "SLI", "RCUEN", "FLVE", "Phlegmatic [Dominant]"], //Spike Spiegel
        2: ["ISTJ", "6", "6w5", "sp/so", "612", "1-2-6", "LSI", "RCOAN", "LFVE", "Melancholic-Choleric"], //Jet Black
        3: ["ESTP", "7", "7w8", "so/sx", "738", "3-7-8", "SEE", "SLUEN", "FLVE", "Sanguine-Choleric"], //Faye Valentine
        4: ["ENTP", "7", "7w6", "sx/sp", "749", "4-7-9", "ILE", "SCUEI", "ELFV", "Sanguine [Dominant]"], //Radical Edward
        5: ["INTJ", "8", "8w9", "sp/sx", "864", "4-6-8", "LSI", "", "", "Choleric-Melancholic"], //Vicious
        6: ["INFJ", "9", "9w8", "sp/so", "964", "4-6-9", "SLI", "RLOAN", "", "Melancholic [Dominant]"] //Julia
    },
    "SG1": { //Stargate SG-1
        1: ["ISTP", "7", "7w8", "sp/so", "", "", "LSE", "", "", "Phlegmatic-Choleric"], //Jack O'Neill
        2: ["INFP", "5", "5w4", "so/sp", "", "", "LII", "", "", "Phlegmatic [Dominant]"], //Daniel Jackson
        3: ["INTJ", "5", "5w6", "so/sp", "", "", "LII", "", "", ""], //Samantha Carter
        4: ["ISTJ", "1", "1w9", "sp/so", "", "", "LSI", "", "", "Melancholic-Phlegmatic"], //Teal'c
        5: ["ISTJ", "", "", "", "", "", "", "", "", ""], //George Hammond
        6: ["ISFJ", "2", "2w3", "so/sp", "", "", "ESE", "", "", "Sanguine-Melancholic"] //Janet Fraiser
    },
    "SB": { //Superbad
        1: ["ESTP", "6", "6w7", "so/sp", "683", "3-6-8", "SLE", "SLUEN", "", "Choleric-Sanguine"], //Seth
        2: ["INFP", "9", "9w1", "sp/so", "962", "2-6-9", "IEI", "RCUAN", "FEVL", "Phlegmatic [Dominant]"], //Evan
        3: ["INTP", "6", "6w7", "sp/sx", "693", "3-6-9", "LII", "", "", "Phlegmatic-Sanguine"], //Fogell (McLovin)
        4: ["ENFJ", "2", "2w1", "so/sx", "269", "2-6-9", "", "", "", "Phlegmatic [Dominant]"], //Jules
        5: ["ESFP", "2", "2w3", "", "279", "2-7-9", "", "", "", ""], //Becca
        6: ["ENTP", "9", "9w8", "", "973", "3-7-9", "IEI", "", "", ""] //Officer Slater
    },
    "MG": { //Mean Girls
        1: ["ISFJ", "9", "9w1", "so/sp", "926", "2-6-9", "ESE", "SCOAN", "FEVL", "Phlegmatic [Dominant]"], //Cady Heron
        2: ["ESTJ", "3", "3w2", "so/sx", "387", "3-7-8", "SLE", "SLOEN", "VFEL", "Choleric [Dominant]"], //Regina George
        3: ["ESFJ", "6", "6w7", "so/sx", "629", "2-6-9", "ESE", "SLOAN", "FELV", "Sanguine-Phlegmatic"], //Gretchen Wieners
        4: ["ENFP", "7", "7w6", "so/sp", "729", "2-7-9", "IEE", "SCUAI", "EFVL", "Sanguine [Dominant]"], //Karen Smith
        5: ["ISFP", "8", "8w7", "sx/so", "847", "4-7-8", "SLE", "SLUEI", "EVLF", "Choleric-Melancholic"], //Janis Ian
        6: ["ENFP", "7", "7w6", "sp/so", "738", "3-7-8", "ESE", "SLUEI", "EFVL", "Sanguine [Dominant]"], //Damien
        7: ["ISFJ", "9", "9w8", "sp/sx", "962", "2-6-9", "SEI", "SCUAN", "", "Phlegmatic-Sanguine"], //Aaron Samuels
        8: ["INFJ", "1", "1w2", "so/sp", "125", "1-2-5", "ESI", "SCOAI", "", "Melancholic-Phlegmatic"], //Ms. Sharon Norbury
        9: ["ESFJ", "3", "3w2", "so/sx", "397", "3-7-9", "ESE", "", "", "Sanguine [Dominant]"], //June George
        10: ["ISTJ", "", "", "", "", "", "", "", "", ""] //Cady's Mom
    },
    "LW": { //Little Women
        1: ["ENFP", "8", "8w7", "so/sx", "478", "4-7-8", "EIE", "SLUEI", "VEFL", "Sanguine-Choleric"], //Josephine "Jo" March
        2: ["ESFJ", "2", "2w3", "so/sx", "296", "2-6-9", "ESE", "SCOAN", "", "Phlegmatic-Sanguine"], //Margaret "Meg" March
        3: ["ENTJ", "3", "3w4", "so/sx", "387", "3-7-8", "SEE", "SCOEN", "VLFE", "Sanguine-Choleric"], //Amy March
        4: ["ISFJ", "9", "9w1", "sx/sp", "926", "2-6-9", "EII", "RCOAI", "", "Phlegmatic-Melancholic"], //Elizabeth "Beth" March
        5: ["ENFJ", "2", "2w1", "so/sx", "217", "1-2-7", "ESE", "SCOAI", "", "Sanguine [Dominant]"], //Margaret "Marmee" March
        6: ["ISFP", "4", "4w5", "sx/so", "479", "4-7-9", "IEI", "SLUAI", "", "Melancholic-Phlegmatic"] //Theodore "Laurie" Laurence
    },
    "I": { //Inception
        1: ["ISTP", "9", "9w8", "sp/so", "583", "3-5-8", "ESI", "RLOEI", "ELVF", "Phlegmatic-Melancholic"], //Dominick Cobb
        2: ["ISTJ", "5", "5w6", "sp/so", "513", "1-3-5", "LII", "", "", "Melancholic [Dominant]"], //Arthur
        3: ["INTP", "5", "5w4", "sp/sx", "514", "1-4-5", "LII", "RCOAN", "FLEV", "Melancholic [Dominant]"], //Ariadne
        4: ["INFJ", "4", "4w5", "", "", "", "EIE", "", "", "Melancholic [Dominant]"], //Mal
        5: ["ENTJ", "3", "3w4", "sp/so", "387", "3-7-8", "LIE", "", "", ""], //Saito
        6: ["INFP", "9", "9w1", "sp/sx", "946", "4-6-9", "EII", "", "", "Melancholic [Dominant]"] //Robert Fischer
    },
    "A": { //Alien
        1: ["ISTP", "5", "5w6", "", "", "", "", "", "", "Melancholic-Phlegmatic"], //Arthur Dallas
        2: ["INTJ", "8", "8w9", "sp/sx", "853", "3-5-8", "LSI", "RCOEN", "", "Choleric-Melancholic"], //Ellen Ripley
        3: ["ISFJ", "6", "6w7", "", "", "", "", "", "", ""], //Joan Lambert
        4: ["ISTJ", "1", "1w2", "", "", "", "", "", "", "Melancholic [Dominant]"], //Ash
        5: ["ISTP", "7", "7w8", "sx/so", "", "", "", "", "", "Phlegmatic-Choleric"], //Alien / Xenomorph
        6: ["ESTP", "7", "7w8", "", "", "", "", "", "", "Sanguine-Melancholic"] //Dennis Parker
    },
    "TS": { //Toy Story
        1: ["ESFJ", "6", "6w7", "so/sp", "621", "1-2-6", "ESE", "SLOAN", "EFLV", "Sanguine-Choleric"], //Woody
        2: ["ESTP", "3", "3w2", "so/sx", "397", "3-7-9", "SEE", "SCOAN", "VEFL", "Choleric-Phlegmatic"], //Buzz Lightyear
        3: ["ESTJ", "8", "8w9", "sp/so", "862", "2-6-8", "LSE", "SLOEN", "", "Choleric [Dominant]"], //Mr. Potato Head
        4: ["ISFJ", "6", "6w7", "sp/so", "629", "2-6-9", "", "RLUAN", "", "Melancholic [Dominant]"], //Rex
        5: ["ISFJ", "2", "2w1", "sx/sp", "216", "1-2-6", "ESI", "RCOAN", "FVEL", "Phlegmatic-Sanguine"], //Bo-Peep
        6: ["ISTP", "8", "8w7", "sx/sp", "873", "3-7-8", "SLE", "SLUEN", "", "Phlegmatic-Choleric"] //Sid Phillips
    },
    "RH": { //Robin Hood
        1: ["ENTP", "7", "7w8", "so/sp", "728", "2-7-8", "LIE", "SLUAI", "", "Sanguine-Phlegmatic"], //Robin Hood
        2: ["INFJ", "9", "9w1", "sx/so", "947", "4-7-9", "EII", "", "", "Phlegmatic [Dominant]"], //Maid Marian
        3: ["ESFP", "7", "7w6", "so/sp", "", "", "SEE", "", "", "Phlegmatic [Dominant]"], //Little John
        4: ["ISFJ", "2", "2w1", "", "926", "2-6-9", "", "", "", "Phlegmatic-Choleric"], //Friar Tuck
        5: ["ESTJ", "8", "8w9", "sp/so", "836", "3-6-8", "", "", "", "Choleric [Dominant]"], //Prince John
        6: ["ESTP", "7", "7w8", "", "", "", "", "", "", "Sanguine-Choleric"] //Sheriff of Nottingham
    },
    "ONB": { //Orange is the New Black
        1: ["ENFP", "4", "4w3", "sx/so", "641", "1-4-6", "IEE", "SLUEI", "EFVL", "Phlegmatic [Dominant]"], //Piper Chapman
        2: ["ISTP", "8", "8w7", "sp/sx", "853", "3-5-8", "SLE", "SLOEI", "VFLE", "Choleric-Phlegmatic"], //Alex Vause
        3: ["ISFJ", "6", "6w5", "sx/sp", "612", "1-2-6", "", "", "", "Melancholic [Dominant]"], //Sam Healy
        4: ["ESTJ", "8", "8w9", "sx/sp", "826", "2-6-8", "LSE", "", "", "Choleric [Dominant]"], //Galina 'Red' Reznikov
        5: ["ENFP", "6", "6w7", "so/sx", "629", "2-6-9", "IEE", "SLOAI", "", "Sanguine [Dominant]"], //Suzanne 'Crazy Eyes' Warren
        6: ["ESFP", "7", "7w6", "sx/sp", "721", "1-2-7", "ESE", "", "", "Sanguine [Dominant]"], //Tasha 'Taystee' Jefferson
        7: ["ENTP", "7", "7w8", "sx/sp", "782", "2-7-8", "ILE", "SCUEI", "", "Sanguine-Phlegmatic"], //Nicole 'Nicky' Nichols
        8: ["ENFJ", "1", "1w9", "sx/so", "947", "4-7-9", "SEE", "SCUAN", "", "Melancholic-Sanguine"], //Tiffany 'Pennsatucky' Doggett
        9: ["ESFJ", "2", "2w3", "sx/so", "279", "2-7-9", "EIE", "", "", "Melancholic-Sanguine"], //Lorna Morello
        10: ["ISFP", "4", "4w3", "so/sp", "279", "2-7-9", "SEI", "SLUAN", "", "Sanguine [Dominant]"] //Marisol 'Flaca' Gonzales
    },
    "FNL": { //Friday Night Lights
        1: ["ESTJ", "1", "1w9", "so/sp", "163", "1-3-6", "", "", "", ""], //Eric Taylor
        2: ["ENFJ", "9", "9w1", "", "926", "2-6-9", "", "", "", ""], //Tami Taylor
        3: ["ESTP", "3", "3w4", "", "387", "3-7-8", "", "", "", ""], //Brian 'Smash' Williams
        4: ["ISFP", "9", "9w1", "", "", "", "", "", "", ""], //Matt Saracen
        5: ["ESFJ", "6", "6w7", "so/sx", "629", "2-6-9", "ESE", "SLOAI", "VEFL", "Sanguine-Choleric"], //Lyla Garrity
        6: ["ISTP", "9", "9w8", "so/sx", "926", "2-6-9", "SLE", "", "", ""], //Tim Riggins
        7: ["ESFP", "7", "7w8", "", "", "", "", "", "", ""], //Tyra Collette
        8: ["INTP", "5", "5w4", "", "", "", "", "", "", ""], //Landry Clarke
        9: ["INFJ", "", "", "", "", "", "", "", "", ""], //Jason Street
        10: ["INFP", "6", "6w7", "", "694", "4-6-9", "", "", "", ""] //Julie Taylor
    },
    "AS": { //Atlas Shrugged
        1: ["INTJ", "1", "1w9", "sp/sx", "", "", "", "", "", ""], //Dagny Taggart
        2: ["INTJ", "8", "8w9", "sp/sx", "", "", "", "", "", ""], //Henry Rearden
        3: ["ESFJ", "7", "7w8", "", "", "", "", "", "", "Sanguine-Choleric"], //James Taggart
        4: ["INTJ", "4", "4w5", "", "458", "4-5-8", "", "", "VLEF", ""], //John Galt
        5: ["ESTJ", "8", "8w7", "", "", "", "", "", "", ""], //Ellis Wyatt
        6: ["ENTP", "4", "4w3", "sp/sx", "", "", "", "", "", "Phlegmatic-Choleric"] //Francisco d'Anconia
    },
    "B99": { //Brooklyn Nine-Nine
        1: ["ENFP", "7", "7w6", "sx/so", "729", "2-7-9", "IEE", "SCUAI", "EVLF", "Sanguine [Dominant]"], //Jake Peralta
        2: ["ISTP", "8", "8w9", "sp/sx", "864", "4-6-8", "SLI", "RLUEN", "VFEL", "Choleric-Phlegmatic"], //Rosa Diaz
        3: ["ENFJ", "2", "2w1", "so/sp", "261", "1-2-6", "ESE", "SLOAN", "EVFL", "Phlegmatic [Dominant]"], //Terry Jeffords
        4: ["ISTJ", "3", "3w2", "sp/so", "316", "1-3-6", "LSE", "SLOAI", "VFEL", "Choleric [Dominant]"], //Amy Santiago
        5: ["ESFJ", "2", "2w3", "so/sx", "271", "1-2-7", "ESE", "SLOAI", "EFVL", "Sanguine [Dominant]"], //Charles Boyle
        6: ["ISTJ", "1", "1w9", "sp/so", "153", "1-3-5", "LSI", "RCOEI", "LFVE", "Phlegmatic [Dominant]"] //Raymond Holt
    },
    "R": { //The Room
        1: ["ENFJ", "2", "2w3", "so/sx", "261", "1-2-6", "EIE", "SCOAI", "EVFL", "Sanguine-Melancholic"], //Johnny
        2: ["ESTP", "8", "8w7", "sx/sp", "837", "3-7-8", "ESE", "SLOEI", "VFLE", "Choleric-Sanguine"], //Lisa
        3: ["ESFP", "7", "7w6", "so/sx", "792", "2-7-9", "SEE", "SCUAI", "FVLE", "Phlegmatic-Sanguine"], //Mark
        4: ["INFP", "6", "6w7", "sx/so", "692", "2-6-9", "IEI", "RCOEN", "ELVF", "Phlegmatic-Sanguine"], //Denny
        5: ["INFJ", "5", "5w6", "so/sp", "592", "2-5-9", "LII", "RCUAN", "LEVF", "Melancholic-Phlegmatic"], //Peter
        6: ["ENTJ", "1", "1w2", "", "", "", "", "", "", ""] //Michelle
    },
    "PF": { //Pulp Fiction
        1: ["ISTP", "9", "9w8", "sp/sx", "973", "3-7-9", "SLI", "RCUAN", "FVLE", "Phlegmatic-Sanguine"], //Vincent Vega
        2: ["ENFJ", "1", "1w9", "so/sx", "162", "1-2-6", "EIE", "SCOEI", "VFLE", "Choleric-Phlegmatic"], //Jules Winnfield
        3: ["ENTP", "7", "7w8", "sx/sp", "748", "4-7-8", "ILE", "SCUEI", "VFLE", "Sanguine-Phlegmatic"], //Mia Wallace
        4: ["ESTP", "7", "7w8", "sp/sx", "783", "3-7-8", "LIE", "", "FLVE", "Choleric-Sanguine"], //Pumpkin
        5: ["ENTJ", "8", "8w9", "sx/so", "835", "3-5-8", "LIE", "SCOEN", "VFLE", "Choleric-Phlegmatic"], //Marsellus Wallace
        6: ["ISTP", "9", "9w8", "sp/sx", "936", "3-6-9", "SLE", "", "FVEL", "Choleric [Dominant]"] //Butch Coolidge
    },
    "T": { //Twilight
        1: ["ISFP", "9", "9w8", "sx/sp", "946", "4-6-9", "ILI", "RLUAN", "FLEV", "Melancholic-Phlegmatic"], //Bella Swan
        2: ["INFJ", "6", "6w5", "sx/sp", "692", "2-6-9", "ESI", "RLOAI", "ELFV", "Melancholic [Dominant]"], //Edward Cullen
        3: ["ISFP", "6", "6w7", "so/sx", "628", "2-6-8", "SEE", "SLUEN", "", "Sanguine-Choleric"], //Jacob Black
        4: ["ISTJ", "6", "6w5", "sp/so", "621", "1-2-6", "SLI", "RLOAN", "", "Melancholic [Dominant]"], //Charlie Swan
        5: ["INFJ", "1", "1w2", "so/sp", "125", "1-2-5", "EII", "RCOAI", "", "Phlegmatic-Melancholic"], //Carlisle Cullen
        6: ["ESFJ", "2", "2w3", "so/sp", "271", "1-2-7", "ESI", "SCOAI", "VEFL", "Sanguine-Melancholic"], //Esme Cullen
        7: ["ENFP", "4", "4w3", "so/sx", "479", "4-7-9", "IEE", "SCUAI", "EFVL", "Sanguine [Dominant]"], //Alice Cullen
        8: ["ESTP", "7", "7w8", "sx/so", "728", "2-7-8", "SLE", "SCUEN", "", "Sanguine [Dominant]"], //Emmett Cullen
        9: ["ESTJ", "3", "3w4", "sp/sx", "361", "1-3-6", "LSI", "SLOEN", "VLFE", "Melancholic-Choleric"], //Rosalie Hale
        10: ["ISTP", "6", "6w5", "sx/sp", "649", "4-6-9", "SLI", "RCUAN", "FLEV", "Phlegmatic-Melancholic"] //Jasper Hale
    },
    "SF": { //Seinfeld
        1: ["INFJ", "1", "1w9", "so/sp", "163", "1-3-6", "LSI", "SCOEN", "", "Phlegmatic [Dominant]"], //Jerry Seinfeld
        2: ["INTP", "6", "6w7", "sp/sx", "684", "4-6-8", "ILI", "RLUEI", "FLEV", "Melancholic [Dominant]"], //George Costanza
        3: ["ESTJ", "3", "3w4", "so/sp", "317", "1-3-7", "EIE", "SCUEN", "", "Choleric [Dominant]"], //Elaine Benes
        4: ["ENTP", "7", "7w8", "sp/so", "749", "4-7-9", "ILE", "SLUAI", "", "Phlegmatic-Sanguine"], //Cosmo Kramer
        5: ["ESFJ", "6", "6w5", "", "", "", "", "", "", ""], //Morty Seinfeld
        6: ["ISFJ", "2", "2w3", "", "", "", "", "", "", ""] //Helen Seinfeld
    },
    "THM": { //Two and Half Men
        1: ["ESTP", "7", "7w8", "sx/sp", "793", "3-7-9", "SLE", "SCUEI", "FEVL", "Sanguine-Phlegmatic"], //Charlie Harper
        2: ["ISFJ", "6", "6w7", "sp/so", "694", "4-6-9", "IEE", "", "", "Melancholic-Phlegmatic"], //Alan Harper
        3: ["ESFP", "9", "9w8", "sp/so", "974", "4-7-9", "", "", "", "Sanguine-Phlegmatic"], //Jake Harper
        4: ["ESTJ", "8", "8w9", "sp/sx", "", "", "", "", "", "Phlegmatic-Choleric"], //Berta
        5: ["ENTJ", "3", "3w4", "sp/so", "", "", "", "", "", "Choleric [Dominant]"], //Evelyn Harper
        6: ["ISTJ", "1", "1w2", "", "", "", "", "", "", ""] //Judith Harper
    },
    "NCIS": { //NCIS
        1: ["ISTJ", "8", "8w9", "sp/sx", "852", "2-5-8", "LSI", "", "", ""], //Leroy Jethro Gibbs
        2: ["ESTP", "7", "7w6", "sx/so", "", "", "", "", "", "Sanguine-Choleric"], //Anthony "Tony" DiNozzo, Jr.
        3: ["INFP", "4", "4w5", "so/sx", "497", "4-7-9", "EII", "RLUAN", "", "Melancholic-Sanguine"], //Abigail "Abby" Sciuto
        4: ["ENFJ", "5", "5w6", "sx/sp", "", "", "", "", "", "Phlegmatic-Sanguine"], //Donald "Ducky" Mallard
        5: ["INTP", "6", "6w5", "so/sx", "", "", "", "", "", ""], //Timothy "Tim" McGee
        6: ["INTP", "6", "6w7", "so/sx", "", "", "", "", "", ""] //James "Jimmy" Palmer
    },
    "TIU": { //This Is Us
        1: ["ISFP", "9", "9w8", "so/sx", "926", "2-6-9", "ESI", "", "", "Melancholic-Choleric"], //Jack Pearson
        2: ["ENFJ", "4", "4w3", "sx/sp", "269", "2-6-9", "EIE", "", "", "Sanguine-Phlegmatic"], //Rebecca Pearson
        3: ["INFJ", "1", "1w2", "sx/sp", "162", "1-2-6", "IEI", "", "", ""], //Randall Pearson
        4: ["ISFJ", "9", "9w1", "sp/sx", "692", "2-6-9", "SEI", "", "", "Melancholic [Dominant]"], //Kate Pearson
        5: ["ESFP", "3", "3w2", "sx/so", "379", "3-7-9", "ESE", "", "", "Sanguine [Dominant]"], //Kevin Pearson
        6: ["ENTJ", "1", "1w2", "sx/sp", "125", "1-2-5", "LIE", "", "", ""], //Beth Pearson
        7: ["ENFP", "7", "7w6", "sp/so", "749", "4-7-9", "ILE", "", "", "Sanguine [Dominant]"], //Toby Damon
        8: ["INFP", "9", "9w1", "", "", "", "EII", "", "", "Phlegmatic [Dominant]"], //William Hill
        9: ["ISFP", "6", "6w7", "", "", "", "", "", "", ""], //Miguel Rivas
        10: ["ISFJ", "5", "5w4", "", "", "", "", "", "", ""] //Sophie
    },
    "AD": { //Arrested Development
        1: ["ISTJ", "1", "1w2", "so/sp", "162", "1-2-6", "ESI", "RCOAN", "LFEV", "Phlegmatic-Choleric"], //Michael Bluth
        2: ["ESFP", "7", "7w6", "so/sp", "738", "3-7-8", "ESE", "SCUAN", "VELF", "Sanguine [Dominant]"], //Lindsay Bluth Fünke
        3: ["ESFP", "7", "7w8", "so/sx", "378", "3-7-8", "SEE", "SLUEN", "VLEF", "Choleric-Sanguine"], //George Oscar "GOB" Bluth Jr.
        4: ["ISFJ", "9", "9w1", "sp/so", "962", "2-6-9", "EII", "RCOAN", "", "Phlegmatic-Melancholic"], //George Michael Bluth
        5: ["ENTP", "7", "7w8", "sx/sp", "784", "4-7-8", "ILE", "SCUEI", "VFLE", "Sanguine-Choleric"], //Mae "Maeby" Funke
        6: ["ISFJ", "6", "6w7", "sp/so", "694", "4-6-9", "ILI", "RLOAN", "FELV", "Melancholic [Dominant]"], //Byron "Buster" Bluth
        7: ["ENFP", "4", "4w3", "sx/so", "471", "1-4-7", "IEE", "SCUAI", "EVFL", "Sanguine [Dominant]"], //Tobias Funke
        8: ["ENTJ", "8", "8w9", "so/sp", "837", "3-7-8", "SEE", "SCOEN", "", "Choleric [Dominant]"], //George Bluth
        9: ["INFP", "4", "4w5", "sx/sp", "927", "2-7-9", "", "", "", "Phlegmatic [Dominant]"], //Oscar Bluth
        10: ["ESTJ", "3", "3w2", "so/sp", "385", "3-5-8", "LSE", "SLOEN", "VFLE", "Choleric-Melancholic"] //Lucille Bluth
    },
    "O": { //Ozark
        1: ["INTJ", "5", "5w6", "sp/so", "513", "1-3-5", "", "RCOEN", "", "Melancholic-Phlegmatic"], //Marty Byrde
        2: ["ENFJ", "3", "3w2", "so/sx", "387", "3-7-8", "EIE", "", "", "Choleric-Phlegmatic"], //Wendy Byrde
        3: ["ESTP", "7", "7w8", "sx/so", "783", "3-7-8", "", "", "", "Choleric-Melancholic"], //Charlotte Byrde
        4: ["INTP", "5", "5w4", "sp/so", "594", "4-5-9", "ILI", "RCUEI", "", "Melancholic [Dominant]"], //Jonah Byrde
        5: ["ESTJ", "8", "8w7", "sp/so", "836", "3-6-8", "", "SCOEI", "VFLE", "Choleric [Dominant]"], //Ruth Langmore
        6: ["ISFP", "9", "9w1", "", "", "", "", "", "", ""], //Rachel
        7: ["ENTJ", "3", "3w4", "", "385", "3-5-8", "", "", "", "Choleric-Phlegmatic"], //Agent Roy Petty
        8: ["ISTJ", "6", "6w5", "sp/so", "613", "1-3-6", "", "", "", "Phlegmatic-Choleric"], //Jacob Snell
        9: ["ESTP", "8", "8w7", "sx/sp", "864", "4-6-8", "", "", "", ""], //Darlene Snell
        10: ["INFP", "4", "4w5", "sp/so", "495", "4-5-9", "", "", "", "Phlegmatic-Sanguine"] //Wyatt Langmore
    },
    "MASH": { //M*A*S*H
        1: ["ENTP", "7", "7w8", "so/sx", "784", "4-7-8", "ILE", "", "", "Melancholic-Sanguine"], //Benjamin "Hawkeye" Pierce
        2: ["ESTJ", "1", "1w2", "so/sp", "136", "1-3-6", "", "", "", ""], //Margaret Houlihan
        3: ["ENFP", "7", "7w8", "sp/so", "", "", "", "", "", ""], //Maxwell Q. Klinger
        4: ["INFP", "6", "6w7", "so/sx", "629", "2-6-9", "", "", "", ""], //Father Mulcahy
        5: ["ISTJ", "6", "6w5", "sx/sp", "613", "1-3-6", "", "", "", "Choleric [Dominant]"], //Frank Burns
        6: ["ISFJ", "9", "9w1", "so/sx", "962", "2-6-9", "", "", "", ""] //Radar O'Reilly
    },
    "OFOCN": { //One Flew Over the Cuckoo's Nest
        1: ["ESTP", "7", "7w8", "sx/so", "783", "3-7-8", "SLE", "SLUEN", "", "Sanguine-Choleric"], //Randle McMurphy
        2: ["ISTJ", "1", "1w9", "so/sp", "163", "1-3-6", "LSI", "", "", "Phlegmatic-Choleric"], //Nurse Ratched
        3: ["INFJ", "9", "9w1", "sp/sx", "964", "4-6-9", "EII", "RLUAI", "", "Phlegmatic [Dominant]"], //"Chief" Bromden
        4: ["INTJ", "6", "6w5", "sx/so", "", "", "LII", "", "", ""], //Harding
        5: ["ISFP", "9", "9w1", "sx/sp", "946", "4-6-9", "SEI", "", "", "Phlegmatic [Dominant]"], //Billy Bibbit
        6: ["INFP", "6", "6w7", "", "", "", "IEE", "", "", ""] //Cheswick
    },
    "DUNE": { //Dune
        1: ["INFJ", "5", "5w6", "sx/sp", "583", "3-5-8", "", "", "", "Phlegmatic [Dominant]"], //Paul Atreides
        2: ["INFJ", "2", "2w1", "so/sx", "", "", "", "", "", "Melancholic-Choleric"], //Lady Jessica
        3: ["ENFJ", "8", "8w9", "so/sp", "863", "3-6-8", "", "", "", ""], //Duke Leto Atreides
        4: ["ENTJ", "8", "8w7", "sp/so", "835", "3-5-8", "", "", "", "Choleric-Phlegmatic"], //Baron Vladimir Harkonnen
        5: ["ISTJ", "6", "6w5", "", "", "", "", "", "", ""], //Thufir Hawat
        6: ["ISFJ", "6", "6w5", "so/sx", "", "", "", "", "", ""] //Chani
    },
    "AK": { //Anna Karenina
        1: ["ENFJ", "4", "4w3", "sx/so", "417", "1-4-7", "EIE", "SLOAN", "", "Sanguine-Melancholic"], //Anna Karenina
        2: ["ISTJ", "1", "1w9", "", "", "", "", "", "", ""], //Alexei Karenin
        3: ["ESFP", "7", "7w8", "", "", "", "SEE", "", "", "Sanguine-Phlegmatic"], //Count Vronsky
        4: ["ISFJ", "2", "2w1", "", "", "", "", "", "", ""], //Darya "Dolly" Oblonskaya
        5: ["ESFP", "7", "7w6", "so/sp", "", "", "ESE", "", "", "Choleric-Sanguine"], //Stepan "Stiva" Oblonsky
        6: ["INFP", "4", "4w5", "so/sp", "451", "1-4-5", "EII", "", "", "Melancholic [Dominant]"], //Konstantin Levin
        7: ["", "", "", "", "", "", "", "", "", ""], //Elizaveta "Betsy" Tverskaya
        8: ["ISFJ", "2", "2w1", "sx/so", "", "", "SEI", "", "", "Phlegmatic-Melancholic"], //Kitty Scherbatsky
        9: ["", "", "", "", "", "", "", "", "", ""], //Countess Vronskaya
        10: ["", "", "", "", "", "", "", "", "", ""] //Countess Lydia Ivanova
    },
    "SCRUBS": { //Scrubs
        1: ["ENFP", "7", "7w6", "so/sx", "794", "4-7-9", "IEE", "SCUEI", "", "Sanguine [Dominant]"], //John "J.D." Dorian
        2: ["ENFP", "6", "6w7", "so/sx", "", "", "", "RCUAI", "", "Sanguine-Melancholic"], //Elliot Reid
        3: ["ESTP", "7", "7w6", "so/sx", "729", "2-7-9", "ESE", "SCUAN", "", "Sanguine [Dominant]"], //Christopher Turk
        4: ["ESTJ", "8", "8w7", "", "", "", "LSE", "SCOEI", "", "Choleric [Dominant]"], //Bob Kelso
        5: ["ENTP", "8", "8w7", "sp/sx", "853", "3-5-8", "ILE", "RCOEI", "LFVE", "Choleric-Melancholic"], //Perry Cox
        6: ["ESFJ", "2", "2w3", "so/sx", "216", "1-2-6", "ESI", "SLOAN", "", "Sanguine-Choleric"] //Carla Espinosa
    },
    "TNG": { //Star Trek: The Next Generation
        1: ["INTJ", "1", "1w9", "sp/sx", "153", "1-3-5", "ILI", "RLOEN", "", "Melancholic-Phlegmatic"], //Jean-Luc Picard
        2: ["ESTP", "7", "7w6", "sx/so", "783", "3-7-8", "SLE", "SCOEN", "", "Sanguine-Choleric"], //William T. Riker
        3: ["ENTP", "5", "5w6", "sx/sp", "531", "1-3-5", "LII", "RCOAI", "", "Melancholic [Dominant]"], //Geordi La Forge
        4: ["ESTP", "8", "8w7", "", "", "", "", "", "", ""], //Tasha Yar
        5: ["ISTJ", "6", "6w5", "sp/sx", "613", "1-3-6", "LSI", "RLOEN", "", "Melancholic-Choleric"], //Worf
        6: ["ISFJ", "2", "2w3", "so/sp", "629", "2-6-9", "SEI", "RCOAI", "", "Phlegmatic [Dominant]"], //Beverly Crusher
        7: ["INFJ", "1", "1w2", "so/sx", "126", "1-2-6", "EII", "RCOAI", "", "Phlegmatic-Sanguine"], //Deanna Troi
        8: ["INFP", "4", "4w3", "sx/so", "", "", "ILI", "", "", "Phlegmatic-Melancholic"], //Wesley Crusher
        9: ["INTP", "5", "5w6", "so/sp", "529", "2-5-9", "LII", "RCOAI", "LVFE", "Phlegmatic [Dominant]"], //Data
        10: ["INFJ", "4", "4w5", "sp/so", "495", "4-5-9", "IEI", "", "", "Phlegmatic-Melancholic"] //Guinan
    },
    "G": { //Girls
        1: ["ENFP", "4", "4w3", "so/sx", "469", "4-6-9", "", "", "", "Sanguine [Dominant]"], //Hannah Horvath
        2: ["ESTJ", "3", "3w4", "so/sx", "361", "1-3-6", "", "", "", "Melancholic [Dominant]"], //Marnie Michaels
        3: ["ESTP", "8", "8w7", "sx/sp", "847", "4-7-8", "", "", "", "Choleric-Melancholic"], //Jessa Johansson
        4: ["ESFJ", "3", "3w2", "so/sp", "369", "3-6-9", "", "", "", ""], //Shoshanna Shapiro
        5: ["ISTP", "9", "9w8", "sp/sx", "", "", "", "", "", "Phlegmatic-Choleric"], //Adam Sackler
        6: ["INTP", "5", "5w6", "", "", "", "", "", "", "Phlegmatic-Choleric"] //Ray Ploshansky
    },
    "PB": { //Prison Break
        1: ["ESTP", "8", "8w9", "sx/sp", "862", "2-6-8", "SLI", "SCUEN", "", "Choleric-Phlegmatic"], //Lincoln Burrows
        2: ["INFJ", "5", "5w6", "sx/sp", "512", "1-2-5", "ILI", "RCOAI", "LEVF", "Phlegmatic-Melancholic"], //Michael Scofield
        3: ["ENFJ", "2", "2w3", "", "", "", "", "", "", ""], //Veronica Donovan
        4: ["ESFP", "7", "7w6", "sx/so", "792", "2-7-9", "SEI", "SLUAN", "", "Sanguine-Melancholic"], //Fernando Sucre
        5: ["ISFP", "6", "6w7", "", "", "", "", "", "", ""], //LJ Burrows
        6: ["ESTJ", "8", "8w7", "sx/so", "873", "3-7-8", "SLE", "", "", "Choleric [Dominant]"], //Brad Bellick
        7: ["ENTP", "7", "7w8", "sx/so", "783", "3-7-8", "EIE", "SLUEN", "VFLE", "Choleric-Sanguine"], //Theoore 'T-Bag' Bagwell
        8: ["ISFJ", "2", "2w1", "sp/sx", "269", "2-6-9", "ESI", "RCOAI", "", "Phlegmatic [Dominant]"], //Sara Tancredi
        9: ["ISTP", "6", "6w5", "sx/so", "683", "3-6-8", "SLE", "", "", "Phlegmatic-Choleric"], //Benjamin Miles 'C-Note' Franklin
        10: ["ESTJ", "8", "8w9", "", "863", "3-6-8", "SEE", "", "", "Choleric [Dominant]"] //John Abruzzi
    },
    "MNT": { //The Mentalist
        1: ["ENTP", "5", "5w4", "so/sp", "738", "3-7-8", "ILE", "SCUEI", "VFLE", "Sanguine-Phlegmatic"], //Patrick Jane
        2: ["ISTJ", "6", "6w5", "sp/so", "683", "3-6-8", "SLI", "RLOAI", "", "Choleric [Dominant]"], //Teresa Lisbon
        3: ["ISTP", "5", "5w6", "sp/so", "538", "3-5-8", "LSI", "", "", "Phlegmatic-Melancholic"], //Kimball Cho
        4: ["ESFP", "6", "6w7", "", "", "", "SEE", "", "", "Phlegmatic-Sanguine"], //Wayne Rigsby
        5: ["ISFJ", "6", "6w5", "sx/sp", "629", "2-6-9", "ESI", "", "", "Sanguine-Melancholic"], //Grace Van Pelt
        6: ["INTJ", "5", "5w4", "sp/sx", "548", "4-5-8", "ILI", "RCOEI", "", "Melancholic-Choleric"] //Red John
    },
    "DH": { //Desperate Housewives
        1: ["ENFP", "6", "6w7", "sp/sx", "749", "4-7-9", "IEE", "SLUAI", "", "Sanguine [Dominant]"], //Susan Mayer
        2: ["ENTJ", "8", "8w9", "sp/so", "836", "3-6-8", "LIE", "SCOEI", "VFLE", "Choleric [Dominant]"], //Lynette Scavo
        3: ["ESTJ", "1", "1w2", "so/sp", "126", "1-2-6", "LSE", "SCOEN", "", "Phlegmatic-Sanguine"], //Bree Van de Kamp
        4: ["ESTP", "7", "7w8", "sx/sp", "783", "3-7-8", "SLE", "SLUEN", "VLEF", "Choleric-Sanguine"], //Gabrielle Solís
        5: ["ESTP", "8", "8w7", "sx/so", "387", "3-7-8", "SLE", "SCUEN", "", "Sanguine [Dominant]"], //Edie Britt
        6: ["ESTJ", "8", "8w7", "", "837", "3-7-8", "", "", "", ""], //Carlos Solis
        7: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "", "", "", ""], //Julie Mayer
        8: ["ESFJ", "2", "2w1", "so/sp", "269", "2-6-9", "ESI", "", "", "Melancholic [Dominant]"], //Mary Alice Young
        9: ["ISTP", "5", "5w6", "sp/so", "512", "1-2-5", "", "", "", "Phlegmatic [Dominant]"], //Mike Delfino
        10: ["ESFP", "6", "6w7", "so/sp", "692", "2-6-9", "", "", "", "Phlegmatic-Sanguine"] //Tom Scavo
    },
    "GBU": { //The Good, the Bad, and the Ugly
        1: ["ISTP", "8", "8w9", "sp/sx", "863", "3-6-8", "SLI", "RCUEI", "FLEV", "Melancholic-Choleric"], //The Man With No Name
        2: ["ENTJ", "8", "8w9", "sp/sx", "835", "3-5-8", "SLE", "RCOEI", "", "Choleric-Melancholic"], //Angel Eyes
        3: ["ESTP", "7", "7w8", "sp/sx", "738", "3-7-8", "SEE", "SLUEN", "", "Sanguine-Choleric"] //Tuco
    },
    "RLA": { //Raiders of the Lost Ark
        1: ["ISTP", "5", "5w6", "sp/sx", "583", "3-5-8", "SLI", "RCUEI", "FLVE", "Choleric [Dominant]"], //Indiana Jones
        2: ["ESFP", "7", "7w8", "sx/so", "782", "2-7-8", "SEE", "", "", "Choleric-Sanguine"], //Marion Ravenwood
        3: ["ENFJ", "3", "3w4", "sp/sx", "386", "3-6-8", "LIE", "SCOEI", "VFLE", "Choleric [Dominant]"], //René Emile Belloq
        4: ["ESTP", "3", "3w4", "", "836", "3-6-8", "", "", "", ""], //Arnold Toht
        5: ["ENFJ", "2", "2w1", "sx/so", "279", "2-7-9", "ESE", "SCUAN", "", "Sanguine [Dominant]"], //Sallah
        6: ["INTP", "6", "6w5", "", "", "", "", "", "", "Melancholic-Phlegmatic"] //Marcus Brody
    },
    "FG": { //Forrest Gump
        1: ["ISFJ", "9", "9w1", "so/sx", "926", "2-6-9", "SEI", "RCOAN", "EVFL", "Phlegmatic [Dominant]"], //Forrest Gump
        2: ["ESFP", "4", "4w3", "sx/so", "469", "4-6-9", "ESE", "SLUEI", "", "Sanguine-Melancholic"], //Jenny Curran
        3: ["ESTJ", "1", "1w2", "so/sp", "163", "1-3-6", "LSI", "", "", "Choleric-Melancholic"] //Dan Taylor
    },
    "SsC": { //Schitt's Creek
        1: ["ISTJ", "1", "1w2", "so/sp", "163", "1-3-6", "", "SLOEN", "", "Phlegmatic [Dominant]"], //Johnny Rose
        2: ["ENFP", "3", "3w4", "so/sx", "361", "1-3-6", "EIE", "SLUEI", "FELV", "Melancholic [Dominant]"], //Moira Rose
        3: ["ISFP", "6", "6w7", "sp/sx", "641", "1-4-6", "", "SLUAN", "FLEV", "Phlegmatic-Melancholic"], //David Rose
        4: ["ESFP", "7", "7w8", "sx/so", "783", "3-7-8", "ILE", "SCUAN", "EFVL", "Sanguine [Dominant]"], //Alexis Rose
        5: ["INTP", "9", "9w8", "sp/sx", "964", "4-6-9", "SLI", "RLUEN", "FLEV", "Phlegmatic [Dominant]"], //Stevie Budd
        6: ["ESFJ", "2", "2w1", "so/sp", "269", "2-6-9", "EIE", "", "", "Phlegmatic [Dominant]"] //Ted Mullens
    },
    "GLEE": { //Glee
        1: ["INTJ", "4", "4w3", "so/sx", "416", "1-4-6", "EIE", "RCOAI", "", "Melancholic [Dominant]"], //Kurt Hummel
        2: ["ENTJ", "8", "8w7", "sx/sp", "837", "3-7-8", "SLE", "SLOEN", "", "Choleric [Dominant]"], //Sue Sylvester
        3: ["ENFJ", "3", "3w4", "so/sx", "386", "3-6-8", "EIE", "SLOEI", "VEFL", "Sanguine-Choleric"], //Rachel Berry
        4: ["ESFJ", "2", "2w3", "sx/so", "297", "2-7-9", "", "SCOAI", "", "Phlegmatic-Sanguine"], //Will Schuester
        5: ["INFJ", "5", "5w4", "sp/so", "592", "2-5-9", "IEI", "RCOAI", "FELV", "Melancholic-Phlegmatic"], //Artie Abrams
        6: ["ESTP", "8", "8w7", "sx/sp", "873", "3-7-8", "SLE", "SLUEN", "VFEL", "Choleric [Dominant]"], //Santana Lopez
        7: ["INFP", "4", "4w3", "sx/so", "487", "4-7-8", "IEE", "SLUEI", "", "Choleric-Sanguine"], //Tina Cohen-Chang
        8: ["ESFP", "3", "3w4", "sx/so", "386", "3-6-8", "", "SLOEN", "", "Sanguine-Choleric"], //Mercedes Jones
        9: ["ESTP", "8", "8w7", "sx/so", "683", "3-6-8", "", "", "", "Choleric-Sanguine"], //Noah Puckerman
        10: ["ENFP", "9", "9w1", "sx/so", "972", "2-7-9", "IEE", "SCUAI", "EFVL", "Sanguine-Phlegmatic"] //Brittany S. Pierce
    },
    "H": { //House, M.D.
        1: ["INTJ", "5", "5w6", "sp/sx", "584", "4-5-8", "ILE", "RCUEI", "VLEF", "Choleric-Melancholic"], //Dr. Gregory House
        2: ["ESTJ", "1", "1w9", "so/sp", "136", "1-3-6", "LSE", "", "", "Choleric [Dominant]"], //Lisa Cuddy
        3: ["INFJ", "2", "2w1", "so/sx", "269", "2-6-9", "EII", "RCOAI", "ELVF", "Phlegmatic [Dominant]"], //James Wilson
        4: ["ISTJ", "3", "3w4", "sp/so", "316", "1-3-6", "LSI", "RCOEN", "", "Choleric-Phlegmatic"], //Eric Foreman
        5: ["ISTP", "9", "9w8", "sp/sx", "937", "3-7-9", "SLI", "RCOAI", "LFVE", "Phlegmatic [Dominant]"], //Robert Chase
        6: ["INFP", "2", "2w1", "sx/so", "216", "1-2-6", "EII", "RCOAI", "", "Phlegmatic-Melancholic"] //Allison Cameron
    },
    "GP": { //The Good Place
        1: ["ESTP", "7", "7w8", "sp/sx", "783", "3-7-8", "SLE", "SLUEN", "VLEF", "Choleric-Sanguine"], //Eleanor Shellstrop
        2: ["INTP", "6", "6w5", "sp/so", "612", "1-2-6", "EII", "RLOAI", "LEVF", "Melancholic [Dominant]"], //Chidi Anagonye
        3: ["ESFJ", "3", "3w2", "so/sp", "317", "1-3-7", "ESE", "SCOAN", "VEFL", "Sanguine [Dominant]"], //Tahani Al-Jamil
        4: ["ISTJ", "5", "5w6", "so/sp", "512", "1-2-5", "LII", "SCOAI", "LFEV", "Phlegmatic [Dominant]"], //Janet
        5: ["ESFP", "7", "7w6", "so/sx", "792", "2-7-9", "ESE", "SCUAN", "FEVL", "Sanguine [Dominant]"], //Jason Mendoza
        6: ["ENTP", "3", "3w2", "so/sx", "371", "1-3-7", "ILE", "SCUEI", "VFLE", "Sanguine-Choleric"] //Michael
    },
    "WO": { //The Wizard of Oz
        1: ["ENFP", "9", "9w1", "sx/so", "926", "2-6-9", "ESE", "SCOAN", "LFEV", "Sanguine-Phlegmatic"], //Doroth Gale
        2: ["ENFP", "7", "7w6", "", "", "", "", "", "", ""], //The Wizard
        3: ["ENTP", "6", "6w7", "so/sp", "694", "4-6-9", "IEE", "SCUAI", "FELV", "Sanguine-Phlegmatic"], //The Scarecrow
        4: ["INFP", "9", "9w1", "sp/so", "926", "2-6-9", "EII", "SLUAI", "LEVF", "Melancholic [Dominant]"], //The Tin Man
        5: ["ESFP", "6", "6w7", "sx/so", "", "", "", "", "", ""], //The Cowardly Lion
        6: ["INTJ", "3", "3w4", "sp/sx", "385", "3-5-8", "", "", "", "Choleric [Dominant]"] //Wicked Witch of the West
    },
    "CAS": { //Chilling Adventures of Sabrina
        1: ["ENFP", "2", "2w3", "so/sx", "278", "2-7-8", "ILE", "SLUAI", "VELF", "Sanguine [Dominant]"], //Sabrina Spellman
        2: ["ISFP", "9", "9w1", "so/sx", "946", "4-6-9", "SEI", "RCOAN", "EFLV", "Phlegmatic [Dominant]"], //Harvey Kinkle
        3: ["ESFJ", "2", "2w1", "so/sx", "269", "2-6-9", "SEI", "SCOAN", "FEVL", "Sanguine-Phlegmatic"], //Hilda Spellman
        4: ["ENTP", "7", "7w6", "sx/sp", "748", "4-7-8", "ILE", "SCUEI", "VFLE", "Phlegmatic [Dominant]"], //Ambrose Spellman
        5: ["ISFJ", "1", "1w9", "", "", "", "", "", "", ""], //Ms. Wardwell
        6: ["ENFJ", "2", "2w1", "so/sp", "269", "2-6-9", "", "SCOEN", "EVLF", "Phlegmatic [Dominant]"], //Roz Walker
        7: ["ESTJ", "8", "8w7", "sx/sp", "873", "3-7-8", "SLE", "SCOEN", "VFEL", "Choleric [Dominant]"], //Prudence
        8: ["ISTP", "9", "9w8", "sx/sp", "935", "3-5-9", "ILI", "", "", "Melancholic-Phlegmatic"], //Agatha
        9: ["ISTJ", "3", "3w4", "so/sp", "315", "1-3-5", "LSI", "", "", "Choleric [Dominant]"], //Faustus Blackwood
        10: ["ESTJ", "1", "1w2", "sp/sx", "136", "1-3-6", "SLE", "SCOAN", "VFEL", "Choleric-Phlegmatic"] //Zelda Spellman
    },
    "T100": { //The 100
        1: ["INFJ", "1", "1w2", "so/sp", "162", "1-2-6", "ESI", "RCOAI", "VLFE", "Choleric-Phlegmatic"], //Clarke Griffin
        2: ["ESTP", "8", "8w7", "so/sx", "837", "3-7-8", "SLE", "SCUEN", "VFEL", "Choleric-Phlegmatic"], //Bellamy Blake
        3: ["ESFP", "8", "8w7", "sx/so", "873", "3-7-8", "SEE", "SLUEN", "FVEL", "Choleric-Sanguine"], //Octavia Blake
        4: ["ISTP", "5", "5w6", "sp/sx", "513", "1-3-5", "SLI", "RLOEI", "FLVE", "Choleric-Melancholic"], //Raven Reyes
        5: ["ESFJ", "2", "2w1", "sp/sx", "216", "1-2-6", "", "", "", "Sanguine-Melancholic"], //Abigail "Abby" Griffin
        6: ["ISTP", "6", "6w7", "sp/sx", "683", "3-6-8", "SLE", "RCUEN", "FLVE", "Choleric-Melancholic"], //Jonathan "John" Murphy
        7: ["INTJ", "1", "1w9", "so/sp", "126", "1-2-6", "LSI", "RCOEI", "VLFE", "Phlegmatic [Dominant]"], //Marcus Kane
        8: ["INTP", "5", "5w4", "sp/sx", "592", "2-5-9", "ILI", "RLUAI", "LEVF", "Melancholic-Phlegmatic"], //Monty Green
        9: ["ISTJ", "1", "1w9", "sx/sp", "163", "1-3-6", "", "", "", "Choleric-Phlegmatic"], //Nathan Miller
        10: ["ENFJ", "3", "3w2", "so/sp", "316", "1-3-6", "EIE", "", "", "Phlegmatic [Dominant]"] //Thelonious Jaha
    },
    "SCDL": { //Scandal
        1: ["ENTJ", "8", "8w9", "sx/sp", "836", "3-6-8", "", "", "", "Choleric [Dominant]"], //Olivia Pope
        2: ["ESFJ", "6", "6w7", "", "694", "4-6-9", "", "", "", ""], //Abby Whelan
        3: ["ENFP", "2", "2w1", "", "269", "2-6-9", "", "", "", ""], //Quinn Perkins
        4: ["ISTP", "6", "6w5", "", "", "", "", "", "", ""], //Huck
        5: ["ENTJ", "3", "3w4", "", "385", "3-5-8", "", "", "", ""], //Cyrus Beene
        6: ["INFP", "1", "1w9", "", "146", "1-4-6", "", "", "", ""], //David Rosen
        7: ["ENFJ", "3", "3w2", "", "315", "1-3-5", "", "RLUEN", "", "Sanguine-Choleric"], //Mellie Grant
        8: ["ENTP", "7", "7w8", "", "794", "4-7-9", "", "", "", ""], //Fitzgerald Grant
        9: ["ISTP", "1", "1w2", "", "163", "1-3-6", "", "", "", ""], //Jake Ballard
        10: ["INTJ", "8", "8w7", "sp/sx", "836", "3-6-8", "", "", "", "Choleric [Dominant]"] //Rowan Pope
    },
    "HGAWM": { //How to Get Away with Murder
        1: ["ENTJ", "8", "8w9", "sp/sx", "836", "3-6-8", "SLE", "SCOEN", "VFLE", "Choleric [Dominant]"], //Annalise Keating
        2: ["INTJ", "6", "6w5", "sp/sx", "683", "3-6-8", "", "SLOEI", "", "Choleric [Dominant]"], //Nate Lahey
        3: ["ESTP", "8", "8w7", "sp/sx", "873", "3-7-8", "SLE", "RLOEN", "FVEL", "Choleric-Sanguine"], //Connor Walsh
        4: ["ISTJ", "3", "3w4", "sx/sp", "386", "3-6-8", "LSE", "SLOEN", "VFLE", "Choleric [Dominant]"], //Michaela Pratt
        5: ["ESFP", "7", "7w6", "sx/so", "721", "1-2-7", "", "SLUAN", "EFVL", "Sanguine [Dominant]"], //Asher Millstone
        6: ["ISTP", "8", "8w7", "sp/sx", "862", "2-6-8", "SLE", "SCUEN", "FVEL", "Phlegmatic-Choleric"], //Francis "Frank" Delfino
        7: ["ISTJ", "1", "1w2", "sp/sx", "162", "1-2-6", "", "RCOEN", "VLEF", "Phlegmatic-Choleric"], //Bonnie Winterbottom
        8: ["ISFJ", "6", "6w7", "sp/sx", "692", "2-6-9", "IEI", "RLOAI", "LEFV", "Melancholic-Phlegmatic"], //Oliver Hampton
        9: ["INFJ", "2", "2w1", "sx/sp", "215", "1-2-5", "EII", "RLOAI", "FLEV", "Melancholic-Phlegmatic"], //Laurel Castillo
        10: ["INFP", "9", "9w1", "sp/so", "926", "2-6-9", "", "RLUEI", "EVLF", "Melancholic-Phlegmatic"] //Wesley "Wes" Gibbins
    },
    "RD": { //Riverdale
        1: ["ISFP", "6", "6w7", "sx/so", "629", "2-6-9", "SEI", "SLUAN", "EFVL", "Phlegmatic-Choleric"], //Archibald "Archie" Andrews
        2: ["INFJ", "1", "1w2", "so/sp", "126", "1-2-6", "ESI", "SLOAI", "EVLF", "Phlegmatic-Choleric"], //Elizabeth "Betty" Cooper
        3: ["ESFP", "7", "7w8", "sx/so", "378", "3-7-8", "SLE", "SCOAI", "FVEL", "Sanguine-Choleric"], //Veronica Lodge
        4: ["INTP", "4", "4w5", "sp/sx", "459", "4-5-9", "ILI", "RLUEI", "LFEV", "Melancholic [Dominant]"], //Jughead Jones
        5: ["ESFJ", "2", "2w1", "sx/so", "217", "1-2-7", "ESE", "SCOAN", "", "Sanguine [Dominant]"], //Kevin Keller
        6: ["ESTJ", "3", "3w4", "sx/so", "387", "3-7-8", "EIE", "SLOEI", "VFEL", "Choleric-Melancholic"] //Cheryl Blossom
    },
    "SPF": { //Space Force
        1: ["ESTJ", "1", "1w9", "sp/so", "146", "1-4-6", "LSE", "", "", "Melancholic-Choleric"], //General Mark R. Naird
        2: ["INTP", "5", "5w6", "", "583", "3-5-8", "", "", "", "Phlegmatic-Choleric"], //Dr. Adrian Mallory
        3: ["ESFP", "3", "3w2", "", "378", "3-7-8", "", "", "", "Sanguine [Dominant]"], //F. Tony Scarapiducci
        4: ["ISFP", "6", "6w7", "sx/sp", "638", "3-6-8", "", "", "", "Choleric [Dominant]"], //Erin Naird
        5: ["ISTJ", "6", "6w7", "sp/so", "693", "3-6-9", "ESI", "", "", ""], //Angela Ali
        6: ["INTP", "5", "5w6", "sp/sx", "592", "2-5-9", "LII", "", "", "Melancholic-Phlegmatic"] //Dr. Chan Keifang
    },
    "GOG": { //Gossip Girl
        1: ["ESFP", "7", "7w6", "sx/so", "749", "4-7-9", "SEE", "SCUEN", "EFVL", "Sanguine [Dominant]"], //Serena van der Woodsen
        2: ["ENTJ", "3", "3w4", "so/sp", "368", "3-6-8", "LSE", "SLOEI", "VFLE", "Choleric-Melancholic"], //Blair Waldorf
        3: ["INFJ", "4", "4w5", "sp/sx", "451", "1-4-5", "IEI", "RCOAI", "LVEF", "Phlegmatic-Melancholic"], //Dan Humphrey
        4: ["ISFP", "9", "9w1", "sp/sx", "962", "2-6-9", "ESI", "RCUAI", "EFVL", "Phlegmatic [Dominant]"], //Nate Archibald
        5: ["ESTP", "8", "8w7", "sx/sp", "837", "3-7-8", "SLE", "SLUEN", "VFLE", "Choleric [Dominant]"], //Chuck Bass
        6: ["ESFJ", "3", "3w2", "so/sp", "379", "3-7-9", "ESE", "", "", "Phlegmatic-Choleric"] //Lily van der Woodsen
    },
    "ARW": { //Arrow
        1: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "LSI", "", "", "Phlegmatic-Melancholic"], //John Diggle "Spartan"
        2: ["ESTP", "8", "8w9", "sx/sp", "863", "3-6-8", "SLE", "RCOEN", "VFLE", "Choleric-Melancholic"], //Oliver Queen "Green Arrow"
        3: ["INTP", "6", "6w5", "sx/so", "621", "1-2-6", "ILE", "SLUEI", "", "Sanguine-Melancholic"], //Felicity Smoak "Overwatch"
        4: ["ENFJ", "2", "2w3", "sx/so", "217", "1-2-7", "", "SLOAI", "", "Choleric-Melancholic"], //Laurel Lance "Black Canary"
        5: ["ISTJ", "1", "1w9", "sx/sp", "", "", "", "", "", ""], //Quentin Lance
        6: ["ISFP", "3", "3w4", "sp/so", "386", "3-6-8", "ESI", "", "", ""] //Thea Queen "Speedy"
    },
    "UA": { //The Umbrella Academy
        1: ["INFP", "4", "4w5", "sp/sx", "469", "4-6-9", "IEI", "RLUAN", "ELVF", "Melancholic [Dominant]"], //Number Seven "Vanya Hargreeves"
        2: ["ISTJ", "1", "1w2", "sp/so", "162", "1-2-6", "ESI", "RLOAN", "EVFL", "Phlegmatic-Melancholic"], //Number One "Luther Hargreeves"
        3: ["ISTP", "8", "8w7", "sp/sx", "836", "3-6-8", "SLE", "RLUEN", "VEFL", "Choleric [Dominant]"], //Number Two "Diego Hargreeves"
        4: ["ESFJ", "3", "3w2", "so/sx", "387", "3-7-8", "SEE", "SCOAN", "EVLF", "Sanguine [Dominant]"], //Number Three "Allison Hargreeves"
        5: ["ENTP", "7", "7w6", "sx/so", "749", "4-7-9", "ESE", "SLUEI", "EFLV", "Sanguine [Dominant]"], //Number Four "Klaus Hargreeves"
        6: ["INTP", "5", "5w6", "sp/sx", "592", "2-5-9", "LII", "RCOAI", "ELFV", "Phlegmatic [Dominant]"] //Number Six "Ben Hargreeves"
    },
    "HNB": { //Hannibal
        1: ["INFJ", "6", "6w5", "sp/sx", "649", "4-6-9", "EII", "RLOAI", "LEVF", "Melancholic [Dominant]"], //Will Graham
        2: ["INTJ", "5", "5w4", "sp/sx", "514", "1-4-5", "EIE", "RCOEI", "VLFE", "Choleric-Melancholic"], //Hannibal Lecter
        3: ["ESFJ", "2", "2w1", "so/sx", "216", "1-2-6", "ESE", "SCOAI", "", "Phlegmatic [Dominant]"], //Alana Bloom
        4: ["ESTJ", "8", "8w9", "so/sp", "863", "3-6-8", "LSE", "SCOEN", "VLFE", "Choleric [Dominant]"], //Jack Crawford
        5: ["INTP", "5", "5w6", "", "", "", "", "", "", "Phlegmatic-Sanguine"], //Jimmy Price
        6: ["ESTP", "7", "7w6", "", "", "", "", "", "", "Sanguine-Choleric"], //Brian Zeller
        7: ["INTJ", "5", "5w6", "sp/sx", "513", "1-3-5", "LII", "RCOEI", "VLEF", "Phlegmatic [Dominant]"], //Bedelia Du Maurier
        8: ["ISTP", "6", "6w7", "so/sp", "629", "2-6-9", "SEI", "SCOAI", "", "Phlegmatic [Dominant]"], //Beverly Katz
        9: ["INFP", "9", "9w1", "sp/sx", "964", "4-6-9", "", "RLUAI", "EVLF", "Melancholic [Dominant]"], //Abigail Hobbs
        10: ["ENTP", "3", "3w2", "so/sp", "387", "3-7-8", "ILE", "SCOEI", "", "Choleric [Dominant]"] //Freddie Lounds
    },
    "VD": { //The Vampire Diaries
        1: ["ISFJ", "1", "1w2", "sp/sx", "126", "1-2-6", "ESI", "RLOAI", "VELF", "Melancholic-Phlegmatic"], //Stefan Salvatore
        2: ["ESTP", "8", "8w7", "sx/so", "873", "3-7-8", "SLE", "SLUEI", "VFLE", "Choleric-Sanguine"], //Damon Salvatore
        3: ["INFJ", "6", "6w5", "sp/so", "621", "1-2-6", "ESI", "RCOAN", "", "Phlegmatic-Melancholic"], //Bonnie Bennet
        4: ["ESFJ", "3", "3w2", "so/sx", "316", "1-3-6", "ESE", "SLOAN", "VEFL", "Sanguine [Dominant]"], //Caroline Forbes
        5: ["ISTJ", "1", "1w2", "sp/sx", "162", "1-2-6", "LSI", "RCUAN", "", "Phlegmatic-Melancholic"], //Matt Donovan
        6: ["INFP", "2", "2w1", "sp/so", "296", "2-6-9", "SEI", "SCOAN", "EFVL", "Melancholic [Dominant]"] //Elena Gilbert
    },
    "CSI": { //CSI: Crime Scene Investigation
        1: ["ESFP", "", "", "", "", "", "", "", "", ""], //Nick Stokes
        2: ["ENFP", "7", "7w6", "", "", "", "", "", "", "Sanguine [Dominant]"], //Greg Sanders
        3: ["INFP", "", "", "", "", "", "", "", "", ""], //Dr. Albert "Al" Robbins
        4: ["ISTJ", "", "", "", "", "", "", "", "", ""], //Jim Brass
        5: ["INFJ", "2", "2w1", "", "", "", "", "", "", "Choleric-Melancholic"], //Sara Sidle
        6: ["", "", "", "", "", "", "", "", "", ""] //David Phillips
    },
    "MR": { //Mr. Robot
        1: ["INTP", "5", "5w4", "sp/sx", "541", "1-4-5", "ILI", "RLUEI", "LVEF", "Melancholic [Dominant]"], //Elliot Alderson
        2: ["ENTP", "6", "6w5", "sx/sp", "684", "4-6-8", "ILE", "SLUEI", "VLEF", "Sanguine-Melancholic"], //Mr. Robot
        3: ["ESTP", "7", "7w6", "sx/so", "784", "4-7-8", "SEE", "SLUEI", "", "Choleric-Sanguine"], //Darlene Alderson
        4: ["ENTJ", "3", "3w4", "sx/sp", "385", "3-5-8", "LIE", "SLOEI", "VFEL", "Choleric [Dominant]"], //Tyrell Wellick
        5: ["ESFJ", "6", "6w5", "sp/so", "692", "2-6-9", "ESI", "SCOEN", "", "Sanguine-Melancholic"], //Angela Moss
        6: ["ISTP", "9", "9w8", "sp/sx", "964", "4-6-9", "", "RCUEN", "", "Melancholic-Choleric"] //Dominique DiPierro
    },
    "FL": { //The Flash
        1: ["INFP", "6", "6w7", "sp/so", "621", "1-2-6", "IEE", "RLUAI", "", "Sanguine-Melancholic"], //Barry Allen
        2: ["ENFJ", "3", "3w2", "so/sx", "386", "3-6-8", "ESE", "SCOAI", "", "Sanguine-Phlegmatic"], //Iris West
        3: ["ISTJ", "6", "6w5", "sp/so", "612", "1-2-6", "SLI", "RCOAN", "", "Phlegmatic-Melancholic"], //Caitlin Snow
        4: ["ENFP", "7", "7w6", "sx/sp", "729", "2-7-9", "ESE", "SCUAI", "", "Sanguine [Dominant]"], //Cisco Ramon "Vibe"
        5: ["INTJ", "5", "5w6", "sp/so", "538", "3-5-8", "LII", "RCOEI", "LVFE", "Choleric [Dominant]"], //Harrison Wells (Earth-2)
        6: ["ISTJ", "6", "6w7", "sx/sp", "", "", "", "RCOAN", "", "Choleric-Phlegmatic"] //Joe West
    },
    "TGD": { //The Good Doctor
        1: ["ISTJ", "5", "5w6", "sp/sx", "513", "1-3-5", "LSE", "RCOAN", "LVEF", "Melancholic [Dominant]"], //Dr. Shaun Murphy
        2: ["ENFJ", "2", "2w1", "sp/so", "216", "1-2-6", "", "SLOAN", "", "Phlegmatic [Dominant]"], //Dr. Claire Browne
        3: ["ESTJ", "3", "3w2", "sp/so", "", "", "", "", "", "Choleric [Dominant]"], //Dr. Marcus Andrews
        4: ["ISFJ", "1", "1w2", "sp/sx", "126", "1-2-6", "EII", "", "EVLF", "Choleric [Dominant]"], //Dr. Aaron Glassman
        5: ["ENTJ", "1", "1w9", "sp/so", "135", "1-3-5", "", "", "", "Choleric-Melancholic"], //Dr. Neil Melendez
        6: ["ISTP", "5", "5w6", "sp/sx", "583", "3-5-8", "", "RCUAI", "", "Choleric [Dominant]"] //Dr. Audrey Lim
    },
    "V": { //Veep
        1: ["ENTP", "3", "3w2", "so/sp", "387", "3-7-8", "", "SLUEN", "", "Sanguine-Choleric"], //Selina Meyer
        2: ["ISTJ", "1", "1w2", "sp/so", "631", "1-3-6", "", "SLOEN", "", ""], //Amy Brookheimer
        3: ["ISFJ", "2", "2w3", "sx/sp", "269", "2-6-9", "", "RCOAN", "", "Melancholic [Dominant]"], //Gary Walsh
        4: ["ENTJ", "3", "3w4", "sp/sx", "317", "1-3-7", "", "SLUEI", "", ""], //Dan Egan
        5: ["ENTP", "3", "3w4", "sx/so", "378", "3-7-8", "", "SLUEI", "", "Sanguine-Choleric"], //Jonah Ryan
        6: ["ISFP", "9", "9w8", "sx/so", "974", "4-7-9", "", "RCUAI", "", ""] //Mike McLintock
    },
    "TGW": { //The Good Wife
        1: ["ISFJ", "1", "1w2", "so/sp", "", "", "ESI", "", "", ""], //Alicia Florrick
        2: ["ESTP", "3", "3w2", "", "", "", "", "", "", ""], //Cary Agos
        3: ["ENTJ", "3", "3w4", "so/sp", "", "", "", "", "", ""], //Diane Lockhart
        4: ["ISTP", "5", "5w4", "", "", "", "", "", "", ""], //Kalinda Sharma
        5: ["ESTP", "7", "7w8", "so/sx", "739", "3-7-9", "ESE", "", "", ""], //Will Gardner
        6: ["ISFJ", "4", "4w3", "", "", "", "", "", "", ""] //Grace Florrick
    },
    "OB": { //Outer Banks
        1: ["ENFJ", "6", "6w7", "sx/so", "628", "2-6-8", "IEE", "SCUAI", "EVFL", "Sanguine-Melancholic"], //John B. Routledge
        2: ["ESFP", "7", "7w6", "so/sp", "729", "2-7-9", "ESE", "SLUAI", "FVEL", "Sanguine [Dominant]"], //Sarah Cameron
        3: ["ISFP", "4", "4w3", "so/sp", "417", "1-4-7", "ESE", "SCOAI", "ELVF", "Sanguine-Phlegmatic"], //Kiara Carrera
        4: ["ISTJ", "6", "6w5", "sp/sx", "612", "1-2-6", "LSI", "RLOAI", "LVEF", "Phlegmatic [Dominant]"], //Pope Heyward
        5: ["ESTP", "7", "7w8", "sx/so", "784", "4-7-8", "SEE", "SLUEN", "VFEL", "Choleric-Sanguine"], //JJ Maybank
        6: ["ENTJ", "3", "3w2", "so/sx", "361", "1-3-6", "SLE", "SLOEN", "VFEL", "Choleric [Dominant]"] //Topper
    },
    "MU": { //Mulan
        1: ["ISTP", "9", "9w8", "sp/so", "964", "4-6-9", "ESI", "RCUAI", "VLEF", "Phlegmatic [Dominant]"], //Fa Mulan
        2: ["ENTP", "7", "7w8", "so/sp", "731", "1-3-7", "ILE", "SLUEI", "LEVF", "Choleric-Sanguine"], //Mushu
        3: ["ESTJ", "8", "8w9", "so/sp", "863", "3-6-8", "LSI", "RCOEN", "VFEL", "Choleric [Dominant]"], //General Li Shang
        4: ["ESTP", "8", "8w7", "sp/sx", "873", "3-7-8", "SEE", "SLUEN", "VFLE", "Choleric [Dominant]"], //Yao
        5: ["ISFJ", "9", "9w1", "sp/so", "926", "2-6-9", "SEI", "RCOAN", "FEVL", "Phlegmatic [Dominant]"], //Chien-Po
        6: ["ESFP", "6", "6w7", "sp/so", "639", "3-6-9", "", "", "", "Sanguine [Dominant]"] //Ling
    },
    "KE": { //Killing Eve
        1: ["ESFP", "7", "7w8", "sp/sx", "784", "4-7-8", "SEE", "SLUEN", "FEVL", "Sanguine-Choleric"], //Villanelle
        2: ["ENTP", "5", "5w6", "sx/so", "548", "4-5-8", "ILE", "SCUEI", "VFLE", "Choleric-Phlegmatic"], //Eve Polastri
        3: ["ENTJ", "8", "8w9", "so/sp", "835", "3-5-8", "LIE", "SCOEI", "VFLE", "Phlegmatic-Choleric"], //Carolyn Martens
        4: ["ENTP", "3", "3w2", "sp/sx", "385", "3-5-8", "ILE", "", "", "Phlegmatic-Choleric"], //Konstantin Vasiliev
        5: ["ESFJ", "6", "6w7", "sp/sx", "692", "2-6-9", "ESI", "RCUAN", "", "Phlegmatic-Sanguine"], //Niko Polastri
        6: ["INTP", "5", "5w4", "sp/so", "592", "2-5-9", "ILI", "", "", "Phlegmatic [Dominant]"] //Kenneth "Kenny" Stowton
    },
    "TIHAY": { //10 Things I Hate About You
        1: ["INTJ", "8", "8w9", "sp/sx", "845", "4-5-8", "ILI", "RLOEI", "VLEF", "Choleric [Dominant]"], //Kat Stratford
        2: ["ISTP", "7", "7w8", "sx/sp", "784", "4-7-8", "SLE", "SLUEN", "VFLE", "Choleric-Melancholic"], //Patrick Verona
        3: ["INFP", "9", "9w1", "sp/so", "962", "2-6-9", "EII", "SCOAN", "", "Phlegmatic [Dominant]"], //Cameron James
        4: ["ESFJ", "3", "3w2", "so/sp", "361", "1-3-6", "ESE", "SLOAN", "", "Sanguine-Phlegmatic"], //Bianca Startford
        5: ["ISTJ", "6", "6w7", "sp/so", "612", "1-2-6", "SLI", "", "", "Choleric-Phlegmatic"], //Walter Startford
        6: ["ESTP", "3", "3w4", "sp/sx", "378", "3-7-8", "SLE", "SLUEN", "", "Choleric-Sanguine"] //Joey Donner
    },
    "BC": { //The Breakfast Club
        1: ["ESTP", "8", "8w7", "sp/sx", "874", "4-7-8", "SLE", "SLUEN", "FLVE", "Sanguine-Choleric"], //John Bender
        2: ["ESFJ", "2", "2w3", "so/sp", "216", "1-2-6", "ESI", "SCOAN", "FEVL", "Phlegmatic [Dominant]"], //Claire Standish
        3: ["ISFJ", "2", "2w1", "so/sp", "268", "2-6-8", "ESI", "RCOAN", "FVEL", "Choleric-Phlegmatic"], //Andrew Clark
        4: ["ISFJ", "9", "9w1", "so/sp", "925", "2-5-9", "LII", "RCOAI", "LEFV", "Phlegmatic [Dominant]"], //Brian Johnson
        5: ["ISFP", "4", "4w5", "sp/sx", "469", "4-6-9", "SLI", "RLUAN", "ELFV", "Melancholic [Dominant]"], //Allison Reynolds
        6: ["ESTJ", "8", "8w7", "so/sp", "836", "3-6-8", "LSE", "SLOEN", "VLFE", "Choleric [Dominant]"] //Richard Vernon
    },
    "CSTL": { //Castle
        1: ["ENTP", "7", "7w8", "so/sx", "738", "3-7-8", "ILE", "SCUEI", "VLEF", "Sanguine [Dominant]"], //Richard Castle
        2: ["INTJ", "6", "6w5", "so/sx", "513", "1-3-5", "LSI", "RLOAI", "LVFE", "Choleric-Melancholic"], //Kate Beckett
        3: ["ESFP", "7", "7w8", "", "", "", "", "", "", ""], //Martha Rodgers
        4: ["ESTP", "8", "8w9", "sp/sx", "872", "2-7-8", "", "RLUAN", "FVLE", "Choleric-Sanguine"], //Javier Esposito
        5: ["ISFJ", "6", "6w7", "sx/sp", "", "", "", "RCUAI", "", "Melancholic-Sanguine"], //Kevin Ryan
        6: ["INFJ", "1", "1w2", "", "", "", "", "", "", ""] //Alexis Castle
    },
    "DAM": { //Damages
        1: ["ENTJ", "3", "3w2", "sp/so", "386", "3-6-8", "", "", "", ""], //Patty Hewes
        2: ["INTJ", "6", "6w5", "so/sp", "613", "1-3-6", "", "", "", ""], //Ellen Parsons
        3: ["ESFJ", "6", "6w7", "so/sp", "", "", "", "", "", ""] //Tom Shayes
    },
    "BL": { //Boston Legal
        1: ["ENTP", "6", "6w5", "so/sx", "641", "1-4-6", "", "SLOAI", "", "Sanguine-Melancholic"], //Alan Shore
        2: ["ESTP", "3", "3w4", "sp/sx", "387", "3-7-8", "", "", "", ""], //Denny Crane
        3: ["ENTJ", "8", "8w7", "", "", "", "", "", "", ""] //Shirley Schmidt
    },
    "FAR": { //Farscape
        1: ["ENFP", "7", "7w8", "", "", "", "SLE", "", "", ""], //John Crichton
        2: ["ISTJ", "6", "6w5", "", "", "", "", "", "", ""], //Aeryn Sun
        3: ["ESFJ", "6", "6w7", "sp/sx", "628", "2-6-8", "", "", "", ""], //Ka D'Argo
        4: ["ESTP", "3", "3w4", "", "379", "3-7-9", "", "", "", ""], //Rygel XVI
        5: ["ESFP", "7", "7w8", "", "", "", "", "", "", ""], //Chiana
        6: ["INTJ", "5", "5w6", "sp/so", "", "", "LII", "", "", "Melancholic-Choleric"] //Scorpius
    },
    "FF": { //Fast & Furious
        1: ["ESFJ", "8", "8w9", "so/sx", "827", "2-7-8", "SLE", "", "", "Phlegmatic [Dominant]"], //Dom Toretto
        2: ["ISFP", "7", "7w8", "so/sx", "783", "3-7-8", "SEE", "", "", "Phlegmatic-Sanguine"], //Brian O'Conner
        3: ["ESTP", "8", "8w7", "sx/so", "835", "3-5-8", "SLE", "", "", "Choleric-Phlegmatic"], //Letty Ortiz
        4: ["ISFJ", "2", "2w1", "so/sp", "", "", "", "", "", "Phlegmatic [Dominant]"], //Mia Toretto
        5: ["ISFP", "9", "9w1", "so/sx", "", "", "SEI", "", "", "Phlegmatic [Dominant]"], //Han Lue
        6: ["ISTP", "6", "6w5", "sp/sx", "", "", "", "", "", ""] //Gisele Yashar
    },
    "O11": { //Ocean's 11
        1: ["ENTJ", "3", "3w2", "sx/sp", "378", "3-7-8", "LIE", "SCOEI", "", "Phlegmatic-Choleric"], //Danny Ocean
        2: ["ESTP", "7", "7w8", "sp/sx", "738", "3-7-8", "SEE", "", "", "Sanguine [Dominant]"], //Robert "Rusty" Ryan
        3: ["INTP", "5", "5w6", "so/sp", "", "", "ILI", "", "", "Melancholic-Phlegmatic"], //Linus Caldwell
        4: ["ENTP", "7", "7w8", "sp/sx", "793", "3-7-9", "ILE", "", "", "Sanguine-Choleric"], //Basher Tarr
        5: ["ESTJ", "8", "8w9", "sp/so", "836", "3-6-8", "LSI", "", "", "Choleric-Melancholic"], //Terry Benedict
        6: ["ISFJ", "6", "6w5", "sp/sx", "612", "1-2-6", "ESI", "", "", "Melancholic-Phlegmatic"] //Tess Ocean
    },
    "TDPT": { //The Departed
        1: ["ISFP", "6", "6w5", "sp/sx", "684", "4-6-8", "SLI", "", "", "Choleric-Melancholic"], //Billy Costigan
        2: ["ESTJ", "3", "3w4", "so/sp", "368", "3-6-8", "LSE", "", "", "Choleric-Sanguine"], //Colin Sullivan
        3: ["ENTJ", "8", "8w7", "sx/so", "837", "3-7-8", "SLE", "", "", "Choleric [Dominant]"], //Frank Costello
        4: ["ESTP", "8", "8w7", "sx/so", "863", "3-6-8", "SLE", "SLUEN", "VFLE", "Choleric [Dominant]"], //Sgt. Sean Dignam
        5: ["ISFJ", "1", "1w9", "", "", "", "", "", "", "Phlegmatic-Melancholic"], //Capt. Oliver Queenan
        6: ["ESFJ", "2", "2w1", "", "", "", "", "", "", "Sanguine-Phlegmatic"] //Madolyn
    },
    "SR": { //The Shawshank Redemption
        1: ["INTJ", "1", "1w9", "sp/sx", "153", "1-3-5", "LII", "RCOAI", "VLFE", "Phlegmatic-Melancholic"], //Andy Dufresne
        2: ["ISTP", "9", "9w8", "sp/sx", "962", "2-6-9", "SEI", "SCOAN", "", "Phlegmatic [Dominant]"], //Ellis Boyd 'Red' Redding
        3: ["ESTJ", "8", "8w9", "sp/so", "386", "3-6-8", "ESI", "SCOEN", "", "Choleric [Dominant]"], //Warden Norton
        4: ["ISTP", "9", "9w8", "so/sp", "782", "2-7-8", "", "", "", "Sanguine-Melancholic"], //Heywood
        5: ["ESTP", "8", "8w7", "sx/sp", "873", "3-7-8", "SLE", "SCUEN", "FVLE", "Choleric [Dominant]"], //Byron Hadley
        6: ["ISFJ", "9", "9w1", "sp/so", "962", "2-6-9", "", "RLUAN", "", "Phlegmatic [Dominant]"] //Brooks Hatlen
    },
    "SOP": { //The Sopranos
        1: ["ENTJ", "8", "8w7", "sx/so", "863", "3-6-8", "SLE", "SLUEI", "VFEL", "Choleric-Melancholic"], //Anthony "Tony" Soprano
        2: ["INFJ", "1", "1w2", "sp/so", "152", "1-2-5", "EII", "RCOAI", "LEVF", "Phlegmatic [Dominant]"], //Dr. Jennifer Melfi
        3: ["ESFJ", "2", "2w3", "so/sx", "261", "1-2-6", "ESI", "SLOAN", "FVEL", "Melancholic-Choleric"], //Carmella Soprano
        4: ["ESFP", "6", "6w7", "sx/so", "648", "4-6-8", "SEE", "SLUEN", "EFVL", "Choleric-Melancholic"], //Christopher Moltisanti
        5: ["ISTJ", "6", "6w5", "so/sp", "683", "3-6-8", "LSI", "RLOEN", "", "Phlegmatic-Choleric"], //Corrado "Junior" Soprano
        6: ["ISTJ", "6", "6w5", "so/sp", "613", "1-3-6", "LSI", "RCOEN", "", "Phlegmatic-Choleric"], //Silvio Dante
        7: ["ESTP", "6", "6w7", "sx/sp", "683", "3-6-8", "SLE", "SLUEN", "FVLE", "Choleric-Sanguine"], //Paulie Gualtieri
        8: ["ISFP", "6", "6w7", "sp/sx", "649", "4-6-9", "SLI", "RLUEI", "", "Phlegmatic-Melancholic"], //A.J. Soprano
        9: ["ENFJ", "3", "3w2", "so/sx", "361", "1-3-6", "ESE", "SCOAI", "", "Sanguine-Choleric"], //Meadow Soprano
        10: ["ENFP", "2", "2w3", "sx/so", "278", "2-7-8", "EIE", "SLUEI", "", "Sanguine-Choleric"] //Janice Soprano
    },
    "HIMYM": { //How I Met Your Mother
        1: ["INFJ", "4", "4w5", "sx/so", "694", "4-6-9", "EII", "RLOAI", "EVLF", "Melancholic-Phlegmatic"], //Ted Mosby
        2: ["ENFP", "9", "9w1", "so/sx", "927", "2-7-9", "ESE", "SLUAI", "EFLV", "Sanguine-Phlegmatic"], //Marshall Eriksen
        3: ["ISTP", "8", "8w7", "sp/so", "836", "3-6-8", "SLE", "RLUEN", "FVLE", "Choleric-Phlegmatic"], //Robin Scherbatsky
        4: ["ENTP", "3", "3w4", "sx/so", "378", "3-7-8", "LIE", "SLOEI", "VLEF", "Sanguine [Dominant]"], //Barney Stinson
        5: ["ENFJ", "2", "2w1", "so/sx", "271", "1-2-7", "ESE", "SLOEI", "EFLV", "Sanguine-Choleric"] //Lily Aldrin
    },
    "LS": { //Lilo & Stitch
        1: ["ENFP", "7", "7w8", "sx/so", "748", "4-7-8", "IEE", "SLUAI", "EFLV", "Sanguine-Melancholic"], //Lilo Pelekai
        2: ["ESFJ", "2", "2w1", "so/sp", "287", "2-7-8", "ESI", "SLOAI", "", "Choleric [Dominant]"], //Nani Pelekai
        3: ["ENTP", "5", "5w4", "sp/sx", "548", "4-5-8", "ILE", "SLOEI", "", "Sanguine-Choleric"], //Dr. Jumba Jookiba
        4: ["ISFJ", "2", "2w1", "so/sp", "126", "1-2-6", "", "RLOAI", "LFVE", "Melancholic-Phlegmatic"], //Agt. Wendell Pleakley
        5: ["ISTJ", "8", "8w9", "sp/so", "835", "3-5-8", "LSI", "", "", "Choleric [Dominant]"], //Cobra Bubbles
        6: ["ESTP", "8", "8w7", "sp/sx", "874", "4-7-8", "SLE", "SLUEN", "FVLE", "Choleric [Dominant]"] //Stitch
    },
    "GF": { //The Godfather
        1: ["INFJ", "8", "8w9", "so/sp", "826", "2-6-8", "ESI", "RCOAI", "VEFL", "Melancholic-Phlegmatic"], //Vito Corleone
        2: ["INTJ", "8", "8w9", "sp/so", "853", "3-5-8", "LSI", "RCOEI", "VFLE", "Choleric-Melancholic"], //Michael Corleone
        3: ["ESTP", "8", "8w7", "so/sx", "836", "3-6-8", "SEE", "SLUEN", "VFLE", "Sanguine-Choleric"], //Santino "Sonny" Corleone
        4: ["ESFP", "2", "2w3", "", "", "", "ESE", "", "", "Sanguine [Dominant]"], //Peter "Fat Pete" Clemenza
        5: ["ISTJ", "6", "6w5", "so/sp", "613", "1-3-6", "LSI", "RCOAI", "", "Melancholic-Phlegmatic"], //Thomas "Tom" Hagen
        6: ["ENTJ", "3", "3w2", "sp/so", "358", "3-5-8", "LIE", "SLOEI", "", "Phlegmatic [Dominant]"] //Emilio Barzini
    },
    "GWW": { //Gone With the Wind
        1: ["ESTP", "3", "3w4", "sp/sx", "386", "3-6-8", "SEE", "SLUEN", "", "Choleric [Dominant]"], //Scarlett O'Hara
        2: ["ENTP", "7", "7w8", "sx/so", "783", "3-7-8", "ESE", "", "", "Sanguine-Choleric"], //Rhett Butler
        3: ["ISFJ", "9", "9w1", "so/sp", "296", "2-6-9", "EII", "RLOAN", "", "Phlegmatic [Dominant]"], //Melanie Hamilton
        4: ["INFP", "9", "9w1", "sp/so", "946", "4-6-9", "EII", "", "", "Melancholic-Phlegmatic"], //Ashley Wilkes
        5: ["ISTJ", "6", "6w5", "", "", "", "", "", "", ""], //India Wilkes
        6: ["ESTJ", "1", "1w9", "so/sp", "162", "1-2-6", "LSE", "", "", ""] //Mammy
    },
    "TND": { //Tomorrow Never Dies
        1: ["ESTP", "7", "7w8", "sp/sx", "683", "3-6-8", "SLI", "", "", "Phlegmatic-Choleric"], //James Bond (Brosnan)
        2: ["ISTJ", "1", "1w2", "sp/so", "163", "1-3-6", "LSI", "", "", "Melancholic-Choleric"], //M (Judy Dench)
        3: ["INTP", "5", "5w6", "sp/so", "594", "4-5-9", "LII", "", "", "Phlegmatic [Dominant]"] //Q / Major Boothroyd (Desmond Llewelyn)
    },
    "BI": { //The Bourne Identity
        1: ["ISTP", "6", "6w5", "sp/sx", "613", "1-3-6", "SLI", "", "", "Melancholic-Phlegmatic"], //Jason Bourne
        2: ["ISFP", "6", "6w7", "", "", "", "", "", "", ""], //Marie Kreutz
        3: ["ISTJ", "", "", "", "", "", "", "", "", ""] //Alexander Conklin
    },
    "RM": { //Rick and Morty
        1: ["ENTP", "7", "7w8", "sx/sp", "784", "4-7-8", "ILE", "SLUEI", "VLEF", "Choleric [Dominant]"], //Rick Sanchez
        2: ["ISFJ", "6", "6w7", "sp/so", "692", "2-6-9", "SEI", "RLOAN", "EFLV", "Phlegmatic-Melancholic"], //Morty Smith
        3: ["ESFP", "3", "3w2", "so/sx", "378", "3-7-8", "SEE", "SCUEN", "FLVE", "Choleric-Sanguine"] //Summer Smith
    },
    "TM": { //The Martian
        1: ["ENTP", "6", "6w7", "so/sx", "638", "3-6-8", "ILE", "SLUAI", "", "Phlegmatic-Sanguine"] //Mark Watney
    },
    "AHX": { //American History X
        1: ["ISFP", "6", "6w5", "", "694", "4-6-9", "IEI", "RLUAI", "", ""], //Danny Vinyard
        2: ["ENTJ", "8", "8w7", "so/sx", "852", "2-5-8", "LSI", "SLOEI", "", "Choleric [Dominant]"], //Derek Vinyard
        3: ["INFJ", "4", "4w3", "", "", "", "", "", "", ""] //Dr. Bob Sweeney
    },
    "R30": { //30 Rock
        1: ["INTP", "5", "5w6", "sp/so", "514", "1-4-5", "SLI", "RCOEN", "LVEF", "Phlegmatic-Melancholic"], //Elizabeth Miervaldis "Liz" Lemon
        2: ["ESFP", "7", "7w6", "so/sx", "739", "3-7-9", "SEE", "", "", ""], //Tracy Jordan
        3: ["ESFJ", "2", "2w1", "so/sx", "296", "2-6-9", "ESE", "", "", "Sanguine [Dominant]"], //Kenneth Parcell
        4: ["ISFJ", "6", "6w5", "sx/sp", "621", "1-2-6", "SEI", "", "", "Phlegmatic-Melancholic"], //Pete Hornberger
        5: ["ENTJ", "3", "3w4", "so/sp", "387", "3-7-8", "LIE", "", "", "Choleric [Dominant]"], //Jack Donaghy
        6: ["ESFP", "3", "3w4", "so/sp", "", "", "", "", "", "Sanguine-Choleric"] //Jenna Maroney
    },
    "UKS": { //Unbreakable Kimmy Schmidt
        1: ["ENFP", "2", "2w3", "so/sx", "721", "1-2-7", "ESE", "SLUAI", "EVFL", "Sanguine [Dominant]"], //Kimmy Schmidt
        2: ["ESFP", "3", "3w4", "so/sp", "378", "3-7-8", "SEE", "SLUEI", "EFVL", "Sanguine [Dominant]"], //Titus Andromedon
        3: ["ENFP", "8", "8w9", "sx/so", "974", "4-7-9", "IEE", "SLUEI", "LEVF", "Sanguine [Dominant]"], //Lillian Kaushtupper
        4: ["ESFJ", "3", "3w4", "so/sx", "378", "3-7-8", "", "SLOEN", "", "Choleric [Dominant]"], //Jacqueline White
        5: ["ESFJ", "6", "6w7", "", "629", "2-6-9", "", "", "", ""] //Cyndee Pokorny
    },
    "BTF": { //Back to the Future
        1: ["ESFP", "7", "7w6", "sp/sx", "738", "3-7-8", "IEE", "SCUAN", "EVLF", "Sanguine [Dominant]"], //Marty McFly
        2: ["ENTP", "5", "5w6", "sx/sp", "529", "2-5-9", "ILE", "SCUEI", "LEVF", "Sanguine-Choleric"], //Dr. Emmett "Doc" Brown
        3: ["ESFJ", "3", "3w2", "sx/so", "397", "3-7-9", "", "", "", "Sanguine [Dominant]"] //Jennifer Parker
    },
    "T2": { //Terminator 2: Judgement Day
        1: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "LSI", "RCOEI", "LVFE", "Phlegmatic [Dominant]"], //Terminator (T-800) "Uncle Bob"
        2: ["ISTP", "8", "8w9", "sp/sx", "864", "4-6-8", "ESI", "RCUEN", "VFLE", "Choleric [Dominant]"], //Sarah Connor (Terminator 2)
        3: ["ISFP", "6", "6w7", "sx/sp", "648", "4-6-8", "ESI", "RLUAN", "EFVL", "Melancholic [Dominant]"] //John Connor
    },
    "NES": { //A Nightmare on Elm Street
        1: ["ISFJ", "6", "6w5", "sp/sx", "612", "1-2-6", "", "", "", "Phlegmatic [Dominant]"], //Nancy Thompson
        2: ["", "", "", "", "", "", "", "", "", ""], //Donald Thompson
        3: ["ENTP", "7", "7w8", "sx/sp", "784", "4-7-8", "ILE", "SCUEI", "", "Choleric-Sanguine"], //Freddy Krueger
        4: ["ESFP", "3", "3w4", "", "", "", "", "", "", "Sanguine-Phlegmatic"], //Glen Lantz
        5: ["", "", "", "", "", "", "", "", "", ""] //Marge Thompson
    },
    "CITW": { //The Cabin in the Woods
        1: ["ISFJ", "6", "6w7", "", "", "", "", "", "", ""], //Dana
        2: ["ESTP", "3", "3w2", "", "", "", "", "", "", ""], //Curt
        3: ["ESFP", "7", "7w8", "", "", "", "SEE", "", "", ""], //Jules
        4: ["INTP", "6", "6w5", "", "", "", "", "", "", ""], //Marty
        5: ["ISFP", "9", "9w1", "", "", "", "", "", "", ""], //Holden
        6: ["", "", "", "", "", "", "", "", "", ""] //Steve Hadley
    },
    "GO": { //Get Out
        1: ["ISFP", "9", "9w1", "sp/sx", "963", "3-6-9", "EII", "RCUAN", "", "Phlegmatic [Dominant]"], //Chris Washington
        2: ["ENFJ", "3", "3w4", "sx/so", "317", "1-3-7", "EIE", "SCOEN", "", "Choleric-Sanguine"], //Rose Armitage
        3: ["ENTJ", "3", "3w4", "so/sp", "", "", "LSE", "", "", "Choleric [Dominant]"], //Dean Armitage
        4: ["ESTP", "7", "7w8", "sx/so", "783", "3-7-8", "SEE", "", "", "Choleric-Sanguine"], //Jeremy Armitage
        5: ["INFJ", "4", "4w3", "", "", "", "ILI", "", "", ""], //Missy Armitage
        6: ["ENFP", "6", "6w7", "so/sx", "693", "3-6-9", "ESE", "SCUAI", "", "Sanguine [Dominant]"] //Rod Williams
    },
    "SD": { //Shaun of the Dead
        1: ["ISFP", "9", "9w1", "sp/so", "962", "2-6-9", "SEI", "", "", "Phlegmatic [Dominant]"], //Shaun
        2: ["ESTP", "7", "7w8", "so/sp", "783", "3-7-8", "", "", "", "Sanguine-Phlegmatic"], //Edd
        3: ["ISFJ", "9", "9w1", "", "", "", "", "", "", ""] //Liz
    },
    "ZL": { //Zombieland
        1: ["ESTP", "8", "8w9", "sx/sp", "874", "4-7-8", "SEE", "", "", "Choleric-Melancholic"], //Tallahassee
        2: ["INTP", "5", "5w6", "sp/sx", "592", "2-5-9", "", "RCOEI", "", "Phlegmatic [Dominant]"], //Columbus
        3: ["ISTP", "6", "6w5", "sp/sx", "684", "4-6-8", "SLI", "", "", "Choleric-Phlegmatic"] //Wichita
    },
    "CXG": { //Crazy Ex-Girlfriend
        1: ["ENFP", "4", "4w3", "sx/so", "471", "1-4-7", "EIE", "SLUEI", "EVFL", "Sanguine [Dominant]"], //Rebecca Bunch
        2: ["ESFJ", "2", "2w1", "so/sp", "286", "2-6-8", "", "SLOAI", "", "Sanguine-Melancholic"], //Paula Proctor
        3: ["ESFP", "7", "7w6", "so/sx", "692", "2-6-9", "", "SCUAN", "", "Sanguine-Choleric"] //Josh Chan
    },
    "HAM": { //Hamilton
        1: ["ENTJ", "3", "3w4", "so/sp", "387", "3-7-8", "LIE", "SLOEI", "VLEF", "Choleric-Sanguine"], //Alexander Hamilton
        2: ["ISFJ", "2", "2w1", "so/sx", "296", "2-6-9", "EII", "RCOAN", "FEVL", "Melancholic-Phlegmatic"], //Eliza Hamilton
        3: ["INFJ", "9", "9w1", "sp/so", "936", "3-6-9", "EII", "RCOAI", "ELFV", "Phlegmatic-Choleric"], //Aaron Burr
        4: ["ENFJ", "8", "8w9", "so/sx", "826", "2-6-8", "ESI", "SCOAI", "VEFL", "Choleric-Sanguine"], //Angelica Schuyler
        5: ["ISTJ", "1", "1w9", "so/sp", "163", "1-3-6", "ESI", "RCOAI", "LFVE", "Melancholic-Phlegmatic"], //George Washington
        6: ["ESFP", "8", "8w7", "so/sx", "874", "4-7-8", "SEE", "SLUEN", "VFLE", "Choleric-Sanguine"] //King George III
    },
    "P": { //Parasite
        1: ["ISFP", "9", "9w8", "sp/so", "947", "4-7-9", "SEI", "", "", "Melancholic-Choleric"], //Kim Ki-taek
        2: ["ESTJ", "3", "3w2", "so/sp", "316", "1-3-6", "LSE", "", "", "Choleric-Phlegmatic"], //Park Dong-ik
        3: ["ESFJ", "2", "2w3", "so/sx", "261", "1-2-6", "ESE", "SLOAN", "", "Sanguine [Dominant]"], //Park Yeon-gyo
        4: ["ISFP", "9", "9w8", "sx/so", "937", "3-7-9", "SEI", "", "", "Melancholic-Phlegmatic"], //Kim Ki-woo
        5: ["ISTP", "8", "8w7", "sp/sx", "873", "3-7-8", "SLE", "RCUEN", "FVLE", "Choleric-Phlegmatic"], //Kim Ki-jeong
        6: ["ESTJ", "6", "6w7", "sx/sp", "638", "3-6-8", "LSE", "", "", "Choleric-Phlegmatic"] //Kim Chung-sook
    },
    "MH": { //Mindhunter
        1: ["INFJ", "5", "5w6", "sp/sx", "513", "1-3-5", "LII", "RCOAI", "LEVF", "Phlegmatic-Melancholic"], //Holden Ford
        2: ["ESTP", "8", "8w9", "sp/so", "863", "3-6-8", "LSE", "", "", "Choleric-Melancholic"], //Bill Tench
        3: ["INTJ", "5", "5w4", "sx/sp", "513", "1-3-5", "LIE", "", "VFLE", "Melancholic [Dominant]"] //Wendy Carr
    },
    "MMFR": { //Mad Max: Fury Road
        1: ["ISTP", "8", "8w9", "sp/sx", "864", "4-6-8", "SLI", "RCUEI", "", "Melancholic-Choleric"], //Max Rockatansky
        2: ["ENTJ", "8", "8w9", "sp/sx", "852", "2-5-8", "SLE", "", "", "Choleric-Melancholic"], //Imperator Furiosa
        3: ["ESFP", "7", "7w8", "", "", "", "", "", "", ""] //Nux
    },
    "GLAD": { //Gladiator
        1: ["ENTJ", "1", "1w2", "so/sx", "162", "1-2-6", "LSI", "RCOAI", "VFLE", "Phlegmatic-Choleric"], //Maximus Decimus Meridius
        2: ["ENFJ", "3", "3w2", "sx/so", "371", "1-3-7", "EIE", "SLOEN", "LEFV", "Sanguine-Melancholic"], //Commodus
        3: ["INFJ", "1", "1w2", "sx/sp", "152", "1-2-5", "ESI", "", "", "Phlegmatic-Melancholic"] //Lucilla
    },
    "ESSM": { //Eternal Sushine of the Spotless Mind
        1: ["ISFJ", "6", "6w5", "sp/sx", "694", "4-6-9", "EII", "RLUAI", "FLEV", "Melancholic [Dominant]"], //Joel Barish
        2: ["ENFP", "7", "7w8", "sx/sp", "748", "4-7-8", "SEE", "SLUEN", "EFVL", "Sanguine [Dominant]"], //Clementine Kruczynski
        3: ["ESFP", "2", "2w3", "sx/sp", "279", "2-7-9", "", "SLUAN", "", "Sanguine-Melancholic"] //Mary Svevo
    },
    "SUC": { //Succession
        1: ["ENTJ", "8", "8w7", "sp/so", "835", "3-5-8", "SLE", "SLOEN", "VFLE", "Choleric [Dominant]"], //Logan Roy
        2: ["ENTP", "7", "7w6", "sx/sp", "784", "4-7-8", "ILE", "SLUEN", "LFVE", "Sanguine-Choleric"], //Roman Roy
        3: ["ENTJ", "3", "3w4", "so/sp", "387", "3-7-8", "LIE", "SCOEI", "VLFE", "Choleric-Phlegmatic"], //Siobhan Roy
        4: ["ISFJ", "6", "6w7", "so/sx", "639", "3-6-9", "SEE", "RLOEN", "FELV", "Melancholic [Dominant]"], //Kendall Roy
        5: ["INFJ", "1", "1w9", "sp/sx", "125", "1-2-5", "ESI", "RLOEI", "ELFV", "Melancholic-Choleric"], //Marcia Roy
        6: ["INTP", "6", "6w7", "so/sp", "692", "2-6-9", "LII", "RCUAN", "FEVL", "Phlegmatic [Dominant]"], //Gregory Hirsch
        7: ["ISTJ", "6", "6w5", "sp/so", "612", "1-2-6", "ESI", "", "", "Phlegmatic-Melancholic"], //Frank Vernon
        8: ["ESFJ", "3", "3w2", "so/sx", "369", "3-6-9", "ESE", "SLUAN", "EVLF", "Sanguine-Phlegmatic"], //Tom Wambsgans
        9: ["INFP", "9", "9w1", "sp/sx", "497", "4-7-9", "ESE", "SLUAN", "FEVL", "Phlegmatic-Choleric"], //Connor Roy
        10: ["INTJ", "5", "5w6", "sp/sx", "583", "3-5-8", "", "RLOEI", "LVEF", "Melancholic-Choleric"] //Lawrence Yee
    },
    "SN": { //The Social Network
        1: ["INTP", "5", "5w6", "sp/sx", "538", "3-5-8", "ILI", "RLUEI", "LVEF", "Melancholic-Choleric"], //Mark Zuckerberg
        2: ["ISFJ", "1", "1w2", "so/sx", "163", "1-3-6", "ESI", "RCOAI", "", "Melancholic-Sanguine"], //Eduardo Saverin
        3: ["ENTP", "7", "7w8", "sx/sp", "738", "3-7-8", "ILE", "SCUEI", "FVLE", "Sanguine-Phlegmatic"], //Sean Parker
        4: ["ENTJ", "6", "6w5", "so/sp", "", "", "", "", "", "Choleric-Sanguine"], //Tyler Winklevoss
        5: ["ESTJ", "1", "1w9", "", "", "", "", "", "", ""], //Divya Narendra
        6: ["ESFP", "8", "8w7", "", "", "", "", "", "", ""] //Christy Ling
    },
    "HUS": { //Hustlers
        1: ["ISFP", "4", "4w3", "", "", "", "", "", "", ""], //Destiny
        2: ["ESTP", "3", "3w2", "so/sx", "378", "3-7-8", "SEE", "", "FVLE", "Choleric-Melancholic"], //Ramona Vega
        3: ["INFJ", "1", "1w9", "sp/so", "152", "1-2-5", "", "RCOAI", "", "Melancholic-Phlegmatic"] //Elizabeth
    },
    "BS": { //Black Swan
        1: ["INFJ", "1", "1w9", "sp/sx", "164", "1-4-6", "EII", "RLOAI", "EFLV", "Melancholic-Phlegmatic"], //Nina Sayers / The Swan Queen
        2: ["ESTP", "7", "7w8", "sx/so", "738", "3-7-8", "SLE", "SCUEN", "", "Sanguine [Dominant]"], //Lily / The Black Swan
        3: ["ENTJ", "8", "8w7", "sx/so", "837", "3-7-8", "EIE", "SLOEN", "", "Choleric [Dominant]"] //Thomas Leroy / The Gentleman
    },
    "TRNF": { //Transformers
        1: ["INTP", "6", "6w5", "sp/sx", "", "", "", "", "", "Phlegmatic-Choleric"], //Sam Witwicky
        2: ["ISTP", "6", "6w7", "sx/so", "683", "3-6-8", "SLE", "", "", "Sanguine-Choleric"], //Mikaela Banes
        3: ["ENFP", "7", "7w6", "", "", "", "", "", "", ""], //Bumblebee
        4: ["ENFJ", "1", "1w2", "sp/so", "136", "1-3-6", "ESI", "", "", "Melancholic-Choleric"], //Optimus Prime
        5: ["ENTJ", "8", "8w7", "so/sp", "836", "3-6-8", "SLE", "", "", "Choleric-Melancholic"] //Megatron
    },
    "MLP": { //My Little Pony: Friendship Is Magic
        1: ["ESTJ", "3", "3w2", "so/sp", "316", "1-3-6", "LSE", "SCOAN", "VEFL", "Choleric [Dominant]"], //Applejack
        2: ["ISTJ", "1", "1w2", "so/sp", "153", "1-3-5", "LSI", "RLOAI", "LVEF", "Melancholic [Dominant]"], //Twilight Sparkle
        3: ["ENFJ", "3", "3w4", "so/sx", "361", "1-3-6", "EIE", "SLOAI", "EFVL", "Sanguine-Melancholic"], //Rarity
        4: ["ENFP", "7", "7w6", "so/sx", "729", "2-7-9", "ESE", "SLUAI", "EVLF", "Sanguine [Dominant]"], //Pinkie Pie
        5: ["ISFP", "6", "6w7", "so/sp", "693", "3-6-9", "SEI", "RCUAN", "FEVL", "Phlegmatic-Sanguine"], //Spike
        6: ["ENFJ", "1", "1w2", "sp/so", "126", "1-2-6", "EII", "SCOAI", "LEFV", "Phlegmatic-Melancholic"] //Princess Celestia
    },
    "SP": { //South Park
        1: ["ISFP", "9", "9w1", "sp/sx", "945", "4-5-9", "SLI", "RLUAI", "LEFV", "Melancholic [Dominant]"], //Stan Marsh
        2: ["INFJ", "1", "1w2", "so/sx", "125", "1-2-5", "ESI", "SLOAI", "VLEF", "Choleric-Melancholic"], //Kyle Broflovski
        3: ["ENTJ", "8", "8w7", "sx/so", "837", "3-7-8", "SLE", "SLUEN", "VFLE", "Choleric [Dominant]"], //Eric Cartman
        4: ["ISTP", "9", "9w8", "sx/so", "972", "2-7-9", "SLI", "RCUAN", "FEVL", "Phlegmatic-Sanguine"], //Kenny McCormick
        5: ["INFP", "9", "9w1", "so/sx", "962", "2-6-9", "EII", "SLUAI", "EFVL", "Sanguine-Melancholic"] //Butters Stotch
    },
    "NG": { //New Girl
        1: ["ENFP", "2", "2w3", "so/sx", "279", "2-7-9", "IEE", "SCOAI", "EFVL", "Sanguine [Dominant]"], //Jessica "Jess" Day
        2: ["INTP", "6", "6w5", "sp/sx", "694", "4-6-9", "SLI", "RLUAI", "LEVF", "Melancholic-Choleric"], //Nick Miller
        3: ["ESTJ", "3", "3w2", "sx/so", "317", "1-3-7", "LSE", "SLOEI", "VFEL", "Choleric [Dominant]"], //Schmidt
        4: ["ESTP", "8", "8w9", "sp/sx", "827", "2-7-8", "LIE", "SCUEN", "FLVE", "Sanguine-Choleric"], //Cece Parekh
        5: ["ENFP", "9", "9w1", "sx/so", "974", "4-7-9", "", "SCUAN", "VFEL", "Sanguine [Dominant]"] //Winston Bishop
    },
    "LM": { //Les Misérables
        1: ["INFJ", "2", "2w1", "so/sp", "295", "2-5-9", "EII", "RCOAI", "", "Melancholic-Sanguine"], //Jean Valjean
        2: ["ISTJ", "1", "1w9", "sp/so", "163", "1-3-6", "LSI", "RLOEN", "LVEF", "Melancholic-Choleric"], //inspector Javert
        3: ["ISFP", "9", "9w1", "sx/sp", "926", "2-6-9", "SEI", "RLOAN", "FELV", "Phlegmatic-Melancholic"], //Fantine
        4: ["ISFJ", "2", "2w1", "sp/so", "296", "2-6-9", "EII", "RCOAN", "LEFV", "Phlegmatic [Dominant]"], //Cosette
        5: ["INFP", "4", "4w5", "sx/so", "479", "4-7-9", "IEI", "RLOAI", "ELFV", "Phlegmatic-Sanguine"] //Marius Pontmercy
    },
    "GILG": { //Gilmore Girls
        1: ["ENFP", "7", "7w8", "so/sx", "728", "2-7-8", "IEE", "SLUAI", "EVFL", "Sanguine [Dominant]"], //Lorelai Gilmore
        2: ["ISFJ", "1", "1w9", "sp/so", "163", "1-3-6", "EII", "RCOAI", "VLFE", "Phlegmatic-Sanguine"], //Rory Gilmore
        3: ["INFP", "9", "9w1", "so/sp", "947", "4-7-9", "LII", "SLUAI", "VEFL", "Phlegmatic-Sanguine"], //Lane Kim
        4: ["ISTP", "6", "6w5", "sp/sx", "612", "1-2-6", "SLI", "RLOEN", "FLVE", "Phlegmatic-Choleric"], //Luke Danes
        5: ["ISTJ", "4", "4w3", "sp/sx", "461", "1-4-6", "", "RCOEN", "", "Melancholic-Choleric"], //Michel Gerard
        6: ["ESTJ", "1", "1w2", "so/sp", "136", "1-3-6", "", "SCOEN", "VFEL", "Choleric [Dominant]"], //Emily Gilmore
        7: ["ISTJ", "1", "1w9", "sp/so", "153", "1-3-5", "", "RLOEI", "LFVE", "Choleric-Phlegmatic"], //Richard Gilmore
        8: ["ESFJ", "2", "2w3", "so/sx", "279", "2-7-9", "ESE", "SLOAI", "EVFL", "Sanguine [Dominant]"], //Sookie St. James
        9: ["INTP", "5", "5w4", "sp/sx", "549", "4-5-9", "", "", "", "Choleric-Phlegmatic"], //Kirk Gleason
        10: ["ENTJ", "8", "8w7", "sp/sx", "836", "3-6-8", "LIE", "SLOEI", "VLEF", "Choleric [Dominant]"], //Paris Geller
        11: ["ESFP", "2", "2w3", "sx/so", "279", "2-7-9", "", "SCUEI", "", "Sanguine [Dominant]"], //Miss Patty
        12: ["ISFP", "6", "6w7", "sx/sp", "628", "2-6-8", "ESI", "RLOAI", "", "Phlegmatic [Dominant]"], //Dean Forester
        13: ["ENTP", "7", "7w8", "so/sx", "738", "3-7-8", "", "SCUEN", "FLEV", "Choleric-Sanguine"], //Logan Huntzberger
        14: ["ESFJ", "1", "1w2", "so/sp", "126", "1-2-6", "", "", "", "Phlegmatic-Sanguine"], //Jackson Belleville
        15: ["ESTJ", "1", "1w2", "so/sp", "136", "1-3-6", "", "SLOEN", "", "Choleric [Dominant]"] //Taylor Doose
    },
    "ARCH": { //Archer
        1: ["ESTP", "7", "7w8", "sx/sp", "738", "3-7-8", "SLE", "SCUEN", "", "Choleric-Sanguine"], //Sterling Archer
        2: ["ENTJ", "8", "8w9", "sp/sx", "836", "3-6-8", "LIE", "SCOEI", "VLFE", "Choleric [Dominant]"], //Malory Archer
        3: ["ISFJ", "6", "6w5", "sp/so", "692", "2-6-9", "SEI", "", "", "Melancholic-Phlegmatic"], //Cyril Figgis
        4: ["ENFP", "7", "7w8", "sx/so", "784", "4-7-8", "EIE", "SLUEI", "FEVL", "Sanguine-Choleric"], //Cheryl Tunt
        5: ["ESTP", "7", "7w8", "sx/sp", "793", "3-7-9", "SLE", "RCOAI", "", "Sanguine-Phlegmatic"], //Pam Poovey
        6: ["ESTJ", "6", "6w5", "so/sp", "163", "1-3-6", "SLE", "", "", "Choleric [Dominant]"] //Lana Kane
    },
    "GB": { //Ghostbusters
        1: ["ENTP", "3", "3w4", "sp/so", "385", "3-5-8", "ILE", "", "", "Choleric-Sanguine"], //Dr. Peter Venkman
        2: ["INFP", "4", "4w3", "so/sp", "479", "4-7-9", "ILE", "", "", "Melancholic-Sanguine"], //Dr. Raymond 'Ray' Stantz
        3: ["INTP", "5", "5w6", "sx/sp", "538", "3-5-8", "LII", "", "", "Phlegmatic-Choleric"], //Dr. Egon Spengler
        4: ["ISFP", "6", "6w5", "", "", "", "", "", "", ""], //Dana Barrett
        5: ["ENFP", "6", "6w7", "", "", "", "", "", "", "Sanguine-Melancholic"] //Louis Tully
    },
    "DWP": { //The Devil Wears Prada
        1: ["ENTJ", "3", "3w4", "sp/so", "316", "1-3-6", "LIE", "SCOEI", "VFLE", "Choleric [Dominant]"], //Miranda Priestly
        2: ["ENFP", "2", "2w1", "so/sp", "296", "2-6-9", "", "SCUAI", "", "Sanguine-Melancholic"], //Andrea "Andy" Sachs
        3: ["ISTJ", "3", "3w4", "so/sp", "361", "1-3-6", "", "SLOEN", "", "Choleric-Melancholic"] //Emily Charlton
    },
    "SPEED": { //Speed
        1: ["ISTP", "6", "6w5", "so/sp", "683", "3-6-8", "LSI", "", "", "Melancholic-Choleric"], //Jack Traven
        2: ["ENTJ", "8", "8w7", "", "", "", "", "", "", "Choleric [Dominant]"], //Howard Payne
        3: ["ESFP", "7", "7w8", "", "", "", "", "", "", ""] //Annie Porter
    },
    "LU": { //Lucifer
        1: ["ENTP", "7", "7w8", "sx/so", "738", "3-7-8", "SEE", "SCUEI", "FVEL", "Sanguine-Choleric"], //Lucifer Morningstar
        2: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "LSI", "RCOEN", "LFEV", "Melancholic-Choleric"], //Chloe Decker
        3: ["ESFJ", "6", "6w5", "sp/so", "629", "2-6-9", "EII", "SLOAN", "", "Sanguine [Dominant]"], //Daniel "Dan" Espinoza
        4: ["ISFJ", "1", "1w9", "so/sp", "126", "1-2-6", "ESI", "RCOAN", "EVLF", "Melancholic-Phlegmatic"], //Amenadiel Firstborn
        5: ["ESTP", "8", "8w7", "sx/sp", "874", "4-7-8", "SLE", "SLUEN", "FLEV", "Choleric [Dominant]"], //Mazikeen "Maze" of Lilim
        6: ["ENFJ", "2", "2w1", "so/sx", "217", "1-2-7", "ESI", "SCOAI", "ELVF", "Sanguine [Dominant]"] //Linda Martin
    },
    "Y": { //Yellowstone
        1: ["ESTJ", "8", "8w9", "", "", "", "", "", "", ""], //John Dutton
        2: ["ISFP", "9", "9w8", "sp/sx", "964", "4-6-9", "", "", "", ""], //Kayce Dutton
        3: ["ENTJ", "8", "8w7", "", "684", "4-6-8", "", "", "", ""], //Beth Dutton
        4: ["ENFJ", "3", "3w4", "", "369", "3-6-9", "", "", "", ""], //Jamie Dutton
        5: ["ISTP", "8", "8w9", "", "863", "3-6-8", "", "", "", ""], //Rip Wheeler
        6: ["ISFJ", "6", "6w5", "", "628", "2-6-8", "", "", "", ""], //Monica Dutton
        7: ["ESFP", "", "", "", "", "", "", "", "", ""], //Jimmy Hurdstrom
        8: ["INTJ", "", "", "sp/so", "", "", "", "", "", ""], //Thomas Rainwater
        9: ["ISFJ", "", "", "so/sx", "", "", "", "", "", ""], //Lloyd
        10: ["", "", "", "", "", "", "", "", "", ""] //Colby
    },
    "TF": { //The Fall
        1: ["INTJ", "5", "5w6", "sp/sx", "548", "4-5-8", "ILI", "RCOEI", "", "Melancholic-Phlegmatic"], //Stella Gibson
        2: ["INTJ", "5", "5w4", "sp/sx", "584", "4-5-8", "ESI", "", "", "Melancholic-Choleric"], //Paul Spector
        3: ["ISFJ", "6", "6w5", "so/sx", "", "", "ESE", "", "", ""] //Jim Burns
    },
    "PK": { //Pokémon
        1: ["ESFP", "3", "3w2", "so/sx", "378", "3-7-8", "SEE", "SLUAI", "VELF", "Sanguine [Dominant]"], //Ash Ketchum (Satoshi)
        2: ["ESTJ", "6", "6w7", "so/sp", "682", "2-6-8", "ESI", "SLOAN", "VEFL", "Choleric [Dominant]"], //Misty (Kasumi)
        3: ["ISFJ", "9", "9w8", "sx/so", "926", "2-6-9", "SEI", "SCOAI", "", "Sanguine-Phlegmatic"], //Brock (Takeshi)
        4: ["INTP", "5", "5w6", "sp/so", "", "", "LII", "", "", ""], //Sammuel Oak (Dr. Õkido Yukinari)
        5: ["ENTJ", "3", "3w4", "so/sp", "386", "3-6-8", "SEE", "SLOEN", "VFEL", "Choleric [Dominant]"] //Jessie (Musashi)
    },
    "FR": { //Frozen
        1: ["ENFP", "2", "2w1", "so/sx", "279", "2-7-9", "ESE", "SLUAI", "EVLF", "Sanguine [Dominant]"], //Anna
        2: ["INFJ", "1", "1w9", "sp/so", "164", "1-4-6", "ESI", "RLOAI", "VELF", "Melancholic [Dominant]"], //Elsa
        3: ["ISTP", "9", "9w8", "sp/so", "963", "3-6-9", "SLI", "RCUAN", "FLVE", "Phlegmatic [Dominant]"], //Kristoff Bjorgman
        4: ["ENFP", "7", "7w6", "so/sx", "729", "2-7-9", "IEE", "SCUAI", "EVLF", "Sanguine [Dominant]"], //Olaf
        5: ["ENFJ", "3", "3w2", "so/sp", "378", "3-7-8", "SEE", "SCOEI", "VEFL", "Sanguine [Dominant]"] //Hans westergaard
    },
    "SM": { //Sailor Moon
        1: ["ESFJ", "2", "2w3", "so/sx", "269", "2-6-9", "IEE", "SCUAI", "EVLF", "Sanguine-Melancholic"], //Usagi Tsukino (Sailor Moon)
        2: ["ISTJ", "1", "1w9", "so/sp", "", "", "LSE", "", "VEFL", ""], //Mamoru Chiba (Tuxedo Mask)
        3: ["INFP", "9", "9w1", "sp/so", "964", "4-6-9", "LII", "RCOAI", "", "Melancholic [Dominant]"], //Ami Mizuno (Sailor Mercury)
        4: ["INTJ", "8", "8w9", "sx/sp", "863", "3-6-8", "ILI", "RLOEI", "", "Melancholic-Choleric"], //Rei Hino (Sailor Mars)
        5: ["ESFJ", "7", "7w8", "", "", "", "", "SCOAN", "", "Melancholic-Sanguine"], //Sailor Jupiter
        6: ["ESFP", "7", "7w8", "", "", "", "IEE", "", "", "Sanguine [Dominant]"] //Minako Aino (Sailor Venus)
    },
    "WSS": { //West Side Story
        1: ["ENFP", "6", "6w7", "", "", "", "", "", "", ""], //Maria
        2: ["INFP", "9", "9w1", "", "", "", "", "", "", ""], //Tony
        3: ["ESTP", "8", "8w7", "", "863", "3-6-8", "", "", "", ""], //Riff
        4: ["ENTP", "8", "8w7", "so/sx", "863", "3-6-8", "", "", "", ""], //Anita
        5: ["", "", "", "", "", "", "", "", "", ""] //Lieutenant Schrank
    },
    "VK": { //Vikinigs
        1: ["ESTJ", "8", "8w9", "sp/sx", "835", "3-5-8", "LSE", "SLOEN", "VLEF", "Choleric [Dominant]"], //Lagertha
        2: ["ESFP", "8", "8w7", "sp/sx", "837", "3-7-8", "SEE", "", "", "Choleric [Dominant]"], //Björn Ironside
        3: ["ENFP", "6", "6w7", "so/sx", "621", "1-2-6", "ILE", "SLOAN", "EVFL", "Sanguine-Choleric"], //Floki
        4: ["ISTP", "6", "6w5", "", "", "", "", "RCOAN", "", ""], //Torvi
        5: ["INTJ", "8", "8w9", "sx/sp", "853", "3-5-8", "SLE", "RLOEI", "VFLE", "Melancholic-Sanguine"], //Ragnar Lothbrok
        6: ["ESTP", "3", "3w4", "", "387", "3-7-8", "SEE", "", "", "Choleric-Phlegmatic"], //Rollo
        7: ["ENTJ", "8", "8w7", "so/sx", "835", "3-5-8", "SLE", "SCOEI", "VLFE", "Choleric-Melancholic"], //Ivar the Boneless
        8: ["ESTP", "3", "3w2", "sx/so", "387", "3-7-8", "SEE", "", "FLVE", "Sanguine-Melancholic"], //Harald Finehair
        9: ["ISFJ", "9", "9w1", "so/sx", "925", "2-5-9", "", "", "", "Phlegmatic-Sanguine"], //Ubbe
        10: ["INFP", "4", "4w5", "sp/sx", "458", "4-5-8", "", "", "", "Phlegmatic [Dominant]"] //Judith
    },
    "ENT": { //Entourage
        1: ["ISTJ", "6", "6w5", "sp/sx", "629", "2-6-9", "SLI", "", "", "Phlegmatic-Choleric"], //Eric "E" Murphy
        2: ["ISFP", "9", "9w8", "sp/so", "974", "4-7-9", "SEI", "", "", "Phlegmatic-Sanguine"], //Vincent Chase
        3: ["ESFJ", "2", "2w3", "so/sp", "371", "1-3-7", "ESE", "", "", "Choleric-Melancholic"], //Johnny "Drama" Chase
        4: ["ESTP", "7", "7w6", "so/sx", "792", "2-7-9", "SLE", "SCUAN", "", "Sanguine [Dominant]"], //Turtle
        5: ["ENTJ", "8", "8w7", "so/sx", "837", "3-7-8", "LIE", "", "", "Choleric [Dominant]"] //Ari Gold
    },
    "BLL": { //Bloodline
        1: ["ISTJ", "", "", "", "", "", "", "", "", ""], //John Rayburn
        2: ["ISFJ", "", "", "", "", "", "", "", "", ""], //Megan Rayburn
        3: ["ESFP", "", "", "", "", "", "", "", "", ""], //Kevin Rayburn
        4: ["ESFJ", "", "", "", "", "", "", "", "", ""], //Diana Rayburn
        5: ["INFJ", "", "", "", "", "", "", "", "", ""], //Eric O'Bannon
        6: ["ESFJ", "", "", "", "", "", "", "", "", ""] //Sally Rayburn
    },
    "SU": { //Supernatural
        1: ["INFJ", "6", "6w5", "so/sx", "641", "1-4-6", "IEI", "RCOAI", "LEVF", "Melancholic-Phlegmatic"], //Sam Winchester
        2: ["ESTP", "8", "8w7", "sx/sp", "873", "3-7-8", "SLE", "SLUAN", "VFLE", "Choleric-Sanguine"], //Dean Winchester
        3: ["ISTJ", "1", "1w2", "sp/so", "162", "1-2-6", "LSE", "RCOAN", "LVEF", "Melancholic-Phlegmatic"] //Castiel
    },
    "EG": { //Ender's Game
        1: ["INTJ", "5", "5w4", "sp/sx", "514", "1-4-5", "LII", "RCOAI", "", "Melancholic-Choleric"], //Ender Wiggin
        2: ["ENTJ", "1", "1w9", "sp/sx", "135", "1-3-5", "", "", "", ""], //Colonel Hyrum Graff
        3: ["ESFP", "7", "7w6", "", "", "", "", "", "", ""], //Petra Arkanian
        4: ["INFJ", "2", "2w1", "", "", "", "", "", "", ""], //Valentine Wiggin
        5: ["ENTJ", "8", "8w7", "sp/so", "583", "3-5-8", "SLE", "", "", "Choleric-Sanguine"], //Peter Wiggin
        6: ["INTP", "6", "6w5", "", "", "", "", "", "", ""] //Bean
    },
    "XM": { //X-Men
        1: ["ISTP", "8", "8w9", "sp/sx", "864", "4-6-8", "SLI", "RLUEN", "VFLE", "Melancholic-Choleric"], //James Howlett "Wolverine"
        2: ["INFJ", "1", "1w9", "so/sp", "125", "1-2-5", "EII", "RCOAI", "LEVF", "Phlegmatic [Dominant]"], //Charles Xavier "Professor X"
        3: ["INTJ", "8", "8w7", "sp/so", "853", "3-5-8", "SLE", "SCOEI", "VLEF", "Melancholic-Choleric"], //Erik Lensherr "Magneto"
        4: ["ISTP", "6", "6w5", "sp/sx", "683", "3-6-8", "LSI", "RCOEN", "VFLE", "Choleric [Dominant]"], //Raven Darkhölme "Mystique"
        5: ["ENFJ", "6", "6w5", "so/sp", "621", "1-2-6", "EII", "", "", "Phlegmatic-Melancholic"], //Jean Grey "Pheonix"
        6: ["ISTJ", "1", "1w9", "sx/so", "135", "1-3-5", "SLI", "RCOEN", "", "Phlegmatic-Melancholic"], //Scott Summers "Cyclops"
        7: ["ISFJ", "1", "1w2", "so/sp", "216", "1-2-6", "ESE", "SCOAN", "EFVL", "Melancholic [Dominant]"], //Ororo Munroe "Storm"
        8: ["INFP", "2", "2w1", "sx/so", "258", "2-5-8", "EII", "", "", "Sanguine-Choleric"], //Anna Marie "Rogue"
        9: ["ISFP", "6", "6w7", "sx/so", "749", "4-7-9", "SEI", "SCUAN", "FVEL", "Sanguine [Dominant]"], //Bobby Drake "Iceman"
        10: ["ISFJ", "1", "1w9", "so/sp", "163", "1-3-6", "ESI", "RCOAN", "", "Phlegmatic [Dominant]"], //Pietr Rasputin "Colossus"
    },
    "SG": { //Supergirl
        1: ["ESFJ", "2", "2w1", "so/sp", "216", "1-2-6", "ESE", "SLOAN", "EVFL", "Sanguine [Dominant]"], //Kara Danvers "Supergirl"
        2: ["ISTJ", "1", "1w2", "so/sx", "136", "1-3-6", "", "", "", "Melancholic-Choleric"], //Alex Danvers
        3: ["INTJ", "9", "9w8", "", "", "", "", "", "", ""], //J'ohn J'onzz "Martian Manhunter"
        4: ["ENFJ", "2", "2w3", "", "", "", "", "", "", ""], //James Olsen "Guardian"
        5: ["ENTJ", "1", "1w9", "sp/sx", "135", "1-3-5", "LIE", "RCOAI", "LVEF", "Choleric [Dominant]"], //Lena Luthor
        6: ["INTP", "6", "6w7", "", "", "", "", "", "", "Phlegmatic-Sanguine"] //Winn Schott
    },
    "FN": { //Finding Nemo
        1: ["ESFP", "7", "7w6", "so/sx", "748", "4-7-8", "IEE", "", "", "Sanguine-Phlegmatic"], //Nemo
        2: ["ISTJ", "6", "6w7", "sp/sx", "612", "1-2-6", "ESI", "RLOAN", "FELV", "Melancholic [Dominant]"], //Marlin
        3: ["ENFP", "7", "7w6", "so/sp", "729", "2-7-9", "IEE", "SCUAI", "EVLF", "Sanguine [Dominant]"] //Dory
    },
    "LEGO": { //The Lego Movie
        1: ["ESTJ", "3", "3w4", "so/sp", "361", "1-3-6", "LSE", "SLOEN", "VFLE", "Choleric [Dominant]"], //Lord Business
        2: ["INFJ", "9", "9w1", "sp/so", "952", "2-5-9", "LII", "RCUAI", "", "Phlegmatic [Dominant]"], //Vitruvius
        3: ["ESFJ", "9", "9w1", "so/sp", "927", "2-7-9", "ESE", "SCOAN", "EVLF", "Sanguine [Dominant]"], //Emmet Brickowski
        4: ["ISFP", "4", "4w3", "sp/sx", "468", "4-6-8", "SEI", "RCUAI", "", "Phlegmatic-Choleric"], //Lucy "Wyldstyle"
        5: ["ENTJ", "3", "3w4", "so/sp", "387", "3-7-8", "LIE", "RCUEN", "FLEV", "Choleric-Sanguine"] //Batman
    },
    "TLM": { //The Little Mermaid
        1: ["ENFP", "7", "7w6", "sx/so", "749", "4-7-9", "IEE", "SLUEI", "EFVL", "Sanguine [Dominant]"], //Ariel (The Little Mermaid)
        2: ["ENTJ", "3", "3w2", "so/sx", "378", "3-7-8", "EIE", "SLOEI", "VFLE", "Sanguine-Choleric"], //Ursula
        3: ["ISFJ", "2", "2w1", "sp/so", "269", "2-6-9", "SEI", "", "", "Phlegmatic-Sanguine"] //Flounder
    },
    "SNW": { //Snow White and the Seven Dwarfs
        1: ["ESFJ", "2", "2w1", "so/sx", "296", "2-6-9", "ESE", "SCOAN", "EFVL", "Phlegmatic-Sanguine"], //Snow White
        2: ["INTJ", "3", "3w4", "sx/sp", "385", "3-5-8", "EIE", "RLOEI", "VFEL", "Choleric-Phlegmatic"], //The Evil Queen
        3: ["ESFJ", "2", "2w1", "so/sp", "269", "2-6-9", "ESI", "SLOAN", "", "Sanguine [Dominant]"] //Doc
    },
    "S7": { //Se7en
        1: ["ESFP", "8", "8w7", "sx/so", "864", "4-6-8", "SEE", "", "", "Choleric [Dominant]"], //David Mills
        2: ["INTP", "1", "1w2", "sp/so", "154", "1-4-5", "LII", "RCOAI", "LVEF", "Phlegmatic [Dominant]"], //William Somerset
        3: ["ISFJ", "2", "2w1", "", "", "", "EII", "", "", ""] //Tracy Mills
    },
    "GONEG": { //Gone Girl
        1: ["ESTP", "9", "9w8", "sp/sx", "973", "3-7-9", "SLI", "SCUEN", "FVLE", "Phlegmatic-Sanguine"], //Nick Dunne
        2: ["INFJ", "3", "3w2", "sx/so", "351", "1-3-5", "EIE", "RLOEI", "VELF", "Melancholic-Choleric"], //Amy Elliott Dunne
        3: ["ENTP", "6", "6w7", "so/sx", "628", "2-6-8", "IEE", "", "", "Sanguine [Dominant]"] //Margo "Go" Dunne
    },
    "TN": { //The Notebook
        1: ["ISFP", "2", "2w1", "sx/sp", "286", "2-6-8", "", "RLUAN", "", "Melancholic-Choleric"], //Noah Calhoun
        2: ["ESFJ", "7", "7w6", "so/sx", "721", "1-2-7", "ESE", "SCOAN", "", "Sanguine [Dominant]"], //Allie Hamilton
        3: ["ENTP", "", "", "", "", "", "", "", "", ""] //Lon Hammond, Jr.
    },
    "BDS": { //The Boondock Saints
        1: ["ENTJ", "", "", "", "", "", "", "", "", ""], //Paul Smecker
        2: ["ENTP", "8", "8w7", "", "837", "3-7-8", "", "", "", ""], //Conner MacManus
        3: ["ISTP", "7", "7w8", "", "", "", "", "", "", ""], //Murphy MacManus
        4: ["ESFP", "6", "6w7", "", "", "", "", "", "", ""], //Rocco
        5: ["", "", "", "", "", "", "", "", "", ""] //Guiseppe Yakavetta
    },
    "ASP": { //It's Always Sunny in Philadelphia
        1: ["ENFP", "6", "6w7", "sx/sp", "649", "4-6-9", "IEI", "SLUAI", "FEVL", "Sanguine-Choleric"], //Charlie Kelly
        2: ["ENTJ", "3", "3w4", "sx/so", "387", "3-7-8", "EIE", "SLOEI", "VLFE", "Choleric [Dominant]"], //Dennis Reynolds
        3: ["ESFJ", "6", "6w7", "sx/sp", "631", "1-3-6", "ESE", "SLUEN", "EVFL", "Choleric-Sanguine"], //Ronald "Mac" McDonald
        4: ["ESFP", "3", "3w2", "so/sx", "378", "3-7-8", "SEE", "SLUEN", "VEFL", "Sanguine-Choleric"], //Dee Reynolds
        5: ["ESTP", "7", "7w8", "sp/sx", "783", "3-7-8", "SLE", "SCUEN", "FVLE", "Choleric-Sanguine"] //Frank Reynolds
    },
    "SUI": { //Suits
        1: ["ENTJ", "3", "3w2", "sx/sp", "385", "3-5-8", "LIE", "SCOEI", "VFLE", "Choleric [Dominant]"], //Harvey Specter
        2: ["ESTJ", "3", "3w4", "sp/so", "316", "1-3-6", "LSE", "", "", "Choleric [Dominant]"], //Louis Litt
        3: ["ENFJ", "2", "2w1", "so/sp", "216", "1-2-6", "EIE", "", "", "Sanguine [Dominant]"], //Donna Paulsen
        4: ["INFP", "6", "6w5", "so/sp", "613", "1-3-6", "ILI", "", "LVEF", "Sanguine-Phlegmatic"], //Michael Ross
        5: ["ESFJ", "3", "3w2", "so/sp", "397", "3-7-9", "ESI", "", "", "Phlegmatic [Dominant]"], //Rachel Zane
        6: ["ENTJ", "8", "8w9", "sp/sx", "835", "3-5-8", "SLE", "", "", "Choleric-Phlegmatic"] //Jessica Pearson
    },
    "MONH": { //Money Heist
        1: ["ESTP", "7", "7w8", "sx/sp", "784", "4-7-8", "SEE", "SLUEN", "VFLE", "Sanguine-Choleric"], //Tokyo
        2: ["INTJ", "1", "1w9", "sp/sx", "153", "1-3-5", "LII", "RCOAI", "LVEF", "Melancholic [Dominant]"], //Professor
        3: ["ESTJ", "1", "1w9", "sp/so", "163", "1-3-6", "LSE", "SLUEI", "VLFE", "Choleric-Melancholic"], //Raquel Murillo
        4: ["ENTJ", "3", "3w4", "sx/so", "385", "3-5-8", "EIE", "SCOEI", "VFLE", "Choleric-Sanguine"], //Berlín
        5: ["ISFP", "6", "6w7", "so/sx", "694", "4-6-9", "SEI", "SCOAI", "EFVL", "Phlegmatic-Sanguine"], //Río
        6: ["ESFP", "7", "7w8", "so/sx", "782", "2-7-8", "SEE", "SLUAN", "EFVL", "Sanguine-Choleric"], //Denver
        7: ["ISFJ", "9", "9w1", "sp/sx", "962", "2-6-9", "SEI", "RCUAI", "", "Melancholic-Phlegmatic"], //Mónica Gaztambide
        8: ["ESFJ", "3", "3w2", "so/sx", "361", "1-3-6", "ESE", "SCOEI", "VEFL", "Sanguine [Dominant]"], //Arturo Román
        9: ["ESFJ", "7", "7w8", "so/sx", "728", "2-7-8", "ESI", "SCUEI", "", "Sanguine-Choleric"], //Helsinki
        10: ["ESFP", "7", "7w8", "so/sx", "728", "2-7-8", "SEE", "SCUAN", "FLVE", "Sanguine [Dominant]"] //Nairóbi
    },
    "AoS": { //Agents of S.H.I.E.L.D
        1: ["ISFJ", "2", "2w1", "so/sx", "296", "2-6-9", "EII", "RLOAI", "ELVF", "Melancholic-Phlegmatic"], //Phil Coulson
        2: ["ISTP", "6", "6w5", "sp/sx", "683", "3-6-8", "LSI", "RCUEN", "", "Melancholic-Choleric"], //Melinda May
        3: ["ENFP", "4", "4w3", "so/sx", "479", "4-7-9", "IEE", "RLOAN", "VELF", "Melancholic-Sanguine"], //Skye / Daisy Johnson /"Quake"
        4: ["ISTJ", "1", "1w2", "sx/sp", "", "", "", "", "", "Melancholic-Choleric"], //Jemma Simmons
        5: ["INTP", "5", "5w4", "sx/so", "593", "3-5-9", "LII", "RLUEI", "LVEF", "Melancholic [Dominant]"], //Leopold James "Leo" Fitz
        6: ["ISTJ", "8", "8w9", "so/sp", "863", "3-6-8", "LSE", "RCOAN", "", "Melancholic-Choleric"] //Alphonso "Mack" Mackenzie
    },
    "HT": { //The Handmaid's Tale
        1: ["ISFP", "9", "9w8", "so/sx", "962", "2-6-9", "ESI", "RCUAI", "EVLF", "Phlegmatic-Melancholic"], //June Osborne
        2: ["ISFJ", "6", "6w5", "", "613", "1-3-6", "", "", "", ""], //Rita
        3: ["ENFP", "2", "2w3", "sx/so", "279", "2-7-9", "SEE", "SLUAN", "EFVL", "Sanguine [Dominant]"], //Janine / Ofwarren
        4: ["ISTP", "9", "9w8", "sp/sx", "963", "3-6-9", "SLI", "", "", "Phlegmatic [Dominant]"], //Nick Blaine
        5: ["ESTJ", "1", "1w2", "sx/sp", "613", "1-3-6", "ILI", "RLOEI", "VLEF", "Choleric [Dominant]"] //Serena Joy
    },
    "OUT": { //Once Upon a Time
        1: ["ENFJ", "2", "2w3", "sp/sx", "286", "2-6-8", "EIE", "SLOEI", "VFEL", "Choleric-Melancholic"], //Ragina Mills / The Evil Queen
        2: ["INTJ", "6", "6w5", "sp/sx", "683", "3-6-8", "LII", "RLOEI", "LVFE", "Melancholic-Choleric"], //Mr. Gold
        3: ["INFP", "7", "7w6", "sx/so", "749", "4-7-9", "EII", "SCUAI", "VEFL", "Sanguine-Phlegmatic"], //Henry Mills
        4: ["ISTP", "6", "6w5", "sp/sx", "682", "2-6-8", "SLI", "RCUAN", "VLEF", "Phlegmatic-Choleric"], //Emma Swan
        5: ["ISFP", "2", "2w1", "so/sx", "296", "2-6-9", "ESI", "SLOAN", "LEFV", "Phlegmatic-Sanguine"], //Mary Margaret Blanchard / Snow White
        6: ["ESFJ", "2", "2w3", "so/sx", "217", "1-2-7", "ESE", "SCOAN", "EVFL", "Sanguine-Phlegmatic"], //David Nolan / Prince Charming
        7: ["ESTP", "7", "7w8", "sx/sp", "783", "3-7-8", "SLE", "RLUEI", "FVLE", "Choleric-Sanguine"], //Killian Jones / Captain Hook
        8: ["INFP", "9", "9w1", "so/sp", "926", "2-6-9", "EII", "RCOAI", "EVLF", "Phlegmatic [Dominant]"], //Belle French
        9: ["ESFJ", "3", "3w2", "sx/sp", "378", "3-7-8", "EIE", "", "VEFL", "Choleric-Sanguine"], //Zelena / Wicked Witch of the West / Kelly West
        10: ["ESTJ", "8", "8w9", "", "", "", "", "", "", ""] //Widow Lucas / Granny
    },
    "SMV": { //Smallville
        1: ["ISFJ", "2", "2w3", "so/sp", "261", "1-2-6", "ESE", "RCOAI", "FEVL", "Melancholic-Sanguine"], //Clark Kent "Superman"
        2: ["ENFP", "3", "3w2", "so/sp", "379", "3-7-9", "ESE", "SCUAI", "", "Sanguine-Choleric"], //Chloe Sullivan
        3: ["ISFJ", "2", "2w1", "so/sp", "296", "2-6-9", "", "", "", ""], //Lana Lang
        4: ["INTJ", "3", "3w2", "sp/so", "358", "3-5-8", "", "SCOAI", "", "Melancholic-Choleric"], //Lex Luthor
        5: ["ENTJ", "8", "8w7", "", "835", "3-5-8", "", "", "", "Choleric [Dominant]"], //Lionel Luthor
        6: ["ESTP", "7", "7w8", "so/sx", "738", "3-7-8", "SLE", "", "", "Sanguine [Dominant]"] //Lois Lane
    },
    "AL": { //Aladdin
        1: ["ESFP", "7", "7w8", "so/sx", "739", "3-7-9", "IEE", "SCUAI", "FVEL", "Sanguine [Dominant]"], //Aladdin
        2: ["ENFP", "7", "7w6", "so/sx", "729", "2-7-9", "ESE", "SLUAI", "EFLV", "Sanguine [Dominant]"], //Genie
        3: ["ESFP", "8", "8w7", "sx/so", "872", "2-7-8", "SEE", "SLUEN", "VLFE", "Choleric-Phlegmatic"] //Jasmine
    },
    "OL": { //Outlander
        1: ["ISFP", "1", "1w2", "sp/sx", "", "", "ESI", "", "", "Melancholic-Choleric"], //Claire Fraser
        2: ["ENFJ", "9", "9w8", "so/sx", "278", "2-7-8", "IEE", "SLOAI", "VELF", "Sanguine-Phlegmatic"], //Jamie Fraser
        3: ["ISTJ", "8", "8w9", "", "864", "4-6-8", "", "", "", ""] //Murtagh Fraser
    },
    "BATB": { //Beauty and the Beast
        1: ["INFP", "4", "4w5", "sp/so", "497", "4-7-9", "IEI", "RCUAI", "ELVF", "Phlegmatic [Dominant]"], //Belle
        2: ["ESTP", "3", "3w2", "sx/so", "387", "3-7-8", "SLE", "SLUEN", "VFLE", "Choleric-Sanguine"], //Gaston
        3: ["INTP", "5", "5w6", "sp/sx", "529", "2-5-9", "LII", "RCUAI", "LEVF", "Phlegmatic [Dominant]"], //Maurice
        4: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "LSI", "RLOEN", "", "Melancholic [Dominant]"], //Cogsworth
        5: ["ESFP", "2", "2w3", "so/sx", "279", "2-7-9", "SEE", "SCUAI", "EFLV", "Sanguine [Dominant]"], //Lumiere
        6: ["ISFP", "8", "8w9", "sx/sp", "846", "4-6-8", "LSI", "RLUEN", "FLEV", "Melancholic-Choleric"] //The Beast / Prince Adam
    },
    "PBWF": { //The Perks of Being a Wallflower
        1: ["INFP", "9", "9w1", "sp/sx", "946", "4-6-9", "EII", "RLOAI", "ELFV", "Melancholic [Dominant]"], //Charlie Kelmeckis
        2: ["ESFJ", "2", "2w3", "so/sx", "279", "2-7-9", "ESE", "", "", "Sanguine-Melancholic"], //Samantha "Sam" Button
        3: ["ENFP", "7", "7w6", "so/sx", "748", "4-7-8", "EIE", "SCUAI", "EFLV", "Sanguine [Dominant]"] //Patrick Stewart
    },
    "DHSAB": { //Dr. Horrible's Sing-Along Blog
        1: ["INFP", "6", "6w5", "sp/so", "649", "4-6-9", "ILI", "", "", "Melancholic-Phlegmatic"], //Billy "Dr. Horrible"
        2: ["ESTP", "3", "3w4", "so/sp", "378", "3-7-8", "SEE", "", "", "Choleric-Sanguine"], //Captain Hammer
        3: ["ISFJ", "9", "9w1", "sp/so", "926", "2-6-9", "EII", "", "", "Phlegmatic [Dominant]"] //Penny
    },
    "BCS": { //Better Call Saul
        1: ["ENTP", "3", "3w2", "so/sp", "379", "3-7-9", "LIE", "SCUEI", "VFLE", "Sanguine [Dominant]"], //Jimmy McGill / Saul Goodman
        2: ["ISTJ", "9", "9w8", "sp/sx", "962", "2-6-9", "SLI", "RCOEN", "FLEV", "Phlegmatic-Choleric"], //Mike Ehrmantraut
        3: ["ESTJ", "6", "6w5", "sp/sx", "613", "1-3-6", "LSE", "RCOAN", "VLEF", "Choleric-Phlegmatic"], //Kim Wexler
        4: ["ENTJ", "3", "3w2", "so/sp", "316", "1-3-6", "LSE", "SCOAN", "", "Phlegmatic-Choleric"], //Howard Hamlin
        5: ["ISTP", "6", "6w5", "so/sx", "694", "4-6-9", "ESI", "RLUEN", "EFVL", "Melancholic [Dominant]"], //Ignacio "Nacho" Varga
        6: ["ISTJ", "1", "1w9", "sp/so", "135", "1-3-5", "LSI", "RLOEI", "LVFE", "Melancholic-Choleric"] //Charles "Chuck" McGill Jr.
    },
    "BW": { //Baywatch
        1: ["ESTJ", "8", "8w9", "sp/sx", "863", "3-6-8", "", "SCOAN", "", "Choleric [Dominant]"], //Mitch Buchannon
        2: ["", "", "", "", "", "", "", "", "", ""], //Hobie Buchannon
        3: ["", "", "", "", "", "", "", "", "", ""], //Newmie Newman
        4: ["ESFJ", "2", "2w3", "", "", "", "", "", "", ""], //C.J. Parker
        5: ["", "", "", "", "", "", "", "", "", ""], //Garner Ellerbee
        6: ["ISFJ", "1", "1w2", "", "", "", "", "", "", ""] //Stephanie Holden
    },
    "JV": { //Jane the Virgin
        1: ["ESFJ", "2", "2w1", "so/sx", "216", "1-2-6", "ESE", "SLOAI", "EVFL", "Sanguine-Phlegmatic"], //Jane Gloriana Villanueva
        2: ["ESFP", "7", "7w6", "sx/so", "738", "3-7-8", "SEE", "SLUEN", "", "Choleric-Sanguine"], //Xiomara Gloriana Villanueva
        3: ["ENTJ", "3", "3w4", "sx/sp", "368", "3-6-8", "LSE", "SLOEN", "VLFE", "Choleric-Sanguine"], //Petra Solano
        4: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "LSI", "RCOEN", "", "Melancholic [Dominant]"], //Alba Gloriana Villanueva
        5: ["ESFP", "3", "3w2", "so/sx", "378", "3-7-8", "ESE", "SLUAI", "", "Sanguine [Dominant]"], //Rogelio De La Vega
        6: ["ESTP", "3", "3w2", "sx/so", "378", "3-7-8", "SLE", "SLUEN", "VFLE", "Sanguine-Phlegmatic"] //Rafael Solano
    },
    "GTH": { //Gotham
        1: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "ESI", "RCOAN", "LFEV", "Phlegmatic-Choleric"], //James 'Jim' Gordon
        2: ["ESTP", "7", "7w6", "sp/sx", "783", "3-7-8", "SLE", "SCUAI", "", "Choleric-Sanguine"], //Harvey Bullock
        3: ["INTJ", "5", "5w6", "sx/sp", "512", "1-2-5", "LII", "RCOAI", "LVEF", "Phlegmatic-Melancholic"], //Bruce Wayne
        4: ["INFP", "3", "3w4", "so/sx", "386", "3-6-8", "EIE", "RLOEI", "ELVF", "Choleric-Melancholic"], //Oswald Cobblepot "Penguin"
        5: ["ISTP", "8", "8w7", "sp/sx", "684", "4-6-8", "LIE", "RLUEN", "FVLE", "Choleric [Dominant]"], //Selina Kyle
        6: ["INTP", "5", "5w4", "sx/sp", "583", "3-5-8", "ILE", "SCUEI", "VLEF", "Phlegmatic-Choleric"], //Edward Nygma "The Riddler"
        7: ["ISFJ", "6", "6w5", "sx/sp", "621", "1-2-6", "ESI", "", "", ""], //Alfred Pennyworth
        8: ["ISFP", "4", "4w3", "sx/sp", "478", "4-7-8", "SEE", "", "", "Sanguine-Choleric"], //Barbara Kean
        9: ["ENFJ", "2", "2w1", "so/sx", "", "", "", "", "", "Phlegmatic [Dominant]"], //Lee Thompkins
        10: ["INTP", "5", "5w6", "sx/sp", "593", "3-5-9", "LII", "RCOAI", "", "Phlegmatic [Dominant]"] //Lucius Fox
    },
    "DGI": { //Degrassi: The Next Generation
        1: ["ISFJ", "9", "9w1", "", "962", "2-6-9", "", "", "", ""], //Archie "Snake" Simpson (Mr. Simpson)
        2: ["INFJ", "1", "1w9", "", "", "", "", "RLOEI", "", ""], //Clare Edwards
        3: ["ESFP", "3", "3w2", "", "", "", "", "", "", ""], //Alli Bhandari
        4: ["INTP", "5", "5w4", "", "", "", "", "", "", ""], //Connor DeLaurier
        5: ["ESFP", "7", "7w6", "", "", "", "", "RCOEN", "", ""], //Gavin "Spinner" Mason
        6: ["ENFJ", "1", "1w2", "sx/so", "162", "1-2-6", "", "SLOAI", "", "Sanguine-Choleric"], //Emma Nelson
        7: ["ESFP", "2", "2w3", "sp/so", "728", "2-7-8", "SEE", "", "", "Sanguine-Phlegmatic"], //Manny Santos
        8: ["ESFP", "6", "6w7", "", "", "", "", "", "", ""], //Drew Torres
        9: ["ESFP", "3", "3w2", "", "", "", "", "", "", ""], //Jenna Middleton
        10: ["ISTJ", "1", "1w9", "", "", "", "", "", "", ""] //Liberty Van Zandt
    },
    "RAT": { //Ratatouille
        1: ["ISFP", "4", "4w3", "sx/sp", "471", "1-4-7", "SEI", "RCUEI", "EFVL", "Sanguine-Melancholic"], //Remy
        2: ["INFP", "6", "6w7", "sp/sx", "692", "2-6-9", "SEI", "RLUAN", "EFVL", "Phlegmatic-Sanguine"], //Alfredo Linguini
        3: ["ESTJ", "8", "8w7", "so/sp", "836", "3-6-8", "SLE", "RLOEN", "LFVE", "Choleric [Dominant]"] //Chef Skinner
    },
    "COCO": { //Coco
        1: ["ESFP", "7", "7w6", "so/sx", "739", "3-7-9", "ESE", "SCUAI", "EFVL", "Sanguine [Dominant]"], //Miguel Rivera
        2: ["ENTP", "6", "6w7", "so/sp", "629", "2-6-9", "IEE", "SLUEN", "EFVL", "Sanguine-Melancholic"], //Héctor
        3: ["ESTP", "3", "3w2", "so/sx", "378", "3-7-8", "EIE", "SLOEI", "VEFL", "Sanguine-Choleric"], //Ernesto de la Cruz
        4: ["ESTJ", "1", "1w2", "sp/sx", "162", "1-2-6", "LSI", "", "", "Choleric [Dominant]"], //Mamá Imelda
        5: ["ESFJ", "9", "9w1", "so/sx", "926", "2-6-9", "ESE", "", "", "Phlegmatic-Sanguine"] //Mamá Coco
    },
    "S8": { //Sense8
        1: ["ISTJ", "5", "5w6", "sp/sx", "582", "2-5-8", "LIE", "RCUEN", "", "Melancholic-Phlegmatic"], //Sun Bak
        2: ["INFJ", "5", "5w4", "sx/sp", "549", "4-5-9", "", "RLOAI", "LEVF", "Melancholic-Phlegmatic"], //Nomi Marks
        3: ["ISFJ", "2", "2w1", "sp/so", "296", "2-6-9", "EII", "RCOAI", "LEVF", "Phlegmatic [Dominant]"], //Kala Dandekar
        4: ["INFP", "4", "4w5", "sp/sx", "496", "4-6-9", "IEI", "RLUAI", "ELVF", "Melancholic-Phlegmatic"], //Riley Blue
        5: ["ISTP", "8", "8w9", "sx/sp", "872", "2-7-8", "", "RCUEN", "FLVE", "Phlegmatic-Choleric"], //Wolfgang Bogdanow
        6: ["ESFP", "3", "3w4", "so/sx", "379", "3-7-9", "ESE", "SLUAN", "EFVL", "Sanguine [Dominant]"], //Lito Rodriguez
        7: ["ISFJ", "1", "1w2", "so/sx", "126", "1-2-6", "", "RCOAN", "", "Phlegmatic-Melancholic"], //Will Gorski
        8: ["ENFJ", "2", "2w1", "so/sx", "217", "1-2-7", "", "", "", "Sanguine-Melancholic"], //Angelica Turing
        9: ["ENFP", "7", "7w6", "sx/so", "728", "2-7-8", "SEE", "", "", "Sanguine-Choleric"], //Amanita Caplan
        10: ["INFJ", "4", "4w5", "sx/so", "495", "4-5-9", "", "", "", "Phlegmatic-Melancholic"] //Hernando Fuentes
    },
    "ID": { //Independence Day
        1: ["ESTP", "7", "7w8", "so/sx", "", "", "LSE", "", "", "Sanguine-Choleric"], //Steven Hiller
        2: ["ENTJ", "1", "1w2", "", "", "", "LSI", "", "", "Melancholic-Choleric"], //Thomas Whitmore
        3: ["INTP", "5", "5w6", "sp/so", "594", "4-5-9", "LII", "", "", "Phlegmatic-Melancholic"] //David Levinson
    },
    "SHL": { //Shameless
        1: ["ENTP", "7", "7w8", "sx/sp", "738", "3-7-8", "ILE", "SLUEI", "FVLE", "Choleric [Dominant]"], //Frank Gallagher
        2: ["ESTP", "6", "6w7", "sp/sx", "684", "4-6-8", "LIE", "SCUAN", "FEVL", "Choleric-Sanguine"], //Carl Gallagher
        3: ["ENTP", "8", "8w7", "sx/sp", "863", "3-6-8", "ILE", "RLUEI", "VLEF", "Choleric-Sanguine"], //Phillip "Lip" Gallagher
        4: ["ESTJ", "8", "8w9", "sx/sp", "872", "2-7-8", "LSE", "SLOEN", "VFEL", "Sanguine-Choleric"], //Veronica Fisher
        5: ["ESFP", "9", "9w8", "so/sx", "972", "2-7-9", "ESE", "SCUAN", "FEVL", "Sanguine [Dominant]"], //Kevin Ball
        6: ["ESFJ", "2", "2w3", "so/sx", "268", "2-6-8", "ESE", "SLUAN", "VEFL", "Choleric [Dominant]"], //Debbie Gallagher
        7: ["ISFP", "6", "6w7", "so/sx", "694", "4-6-9", "ESI", "RLUAI", "FELV", "Melancholic [Dominant]"], //Ian Gallagher
        8: ["ENFJ", "2", "2w3", "sx/sp", "268", "2-6-8", "SEE", "SLOAN", "VEFL", "Sanguine-Melancholic"], //Fiona Gallagher
        9: ["ISTP", "9", "9w8", "", "", "", "", "", "", "Phlegmatic-Choleric"], //Tommy
        10: ["INTP", "", "", "", "", "", "", "", "", ""] //Kermit
    },
    "BOBB": { //Bob's Burgers
        1: ["ISTP", "9", "9w8", "sp/so", "963", "3-6-9", "SLI", "RCOEN", "LFVE", "Phlegmatic [Dominant]"], //Bob Belcher
        2: ["ESFJ", "2", "2w3", "so/sx", "271", "1-2-7", "ESE", "SLOAN", "EFVL", "Sanguine [Dominant]"], //Linda Belcher
        3: ["INFP", "4", "4w5", "sx/sp", "964", "4-6-9", "IEI", "RLUAI", "ELVF", "Melancholic [Dominant]"], //Tina Belcher
        4: ["ENFP", "7", "7w6", "sx/so", "729", "2-7-9", "ESE", "SCUAI", "EVLF", "Sanguine [Dominant]"], //Gene Belcher
        5: ["ENTP", "8", "8w7", "sp/sx", "837", "3-7-8", "SLE", "SLUEI", "FLVE", "Choleric [Dominant]"] //Louis Belcher
    },
    "FB": { //Fleabag
        1: ["ENTP", "7", "7w6", "sx/so", "748", "4-7-8", "ILE", "SLUEI", "LEVF", "Sanguine-Melancholic"], //Fleabag
        2: ["ISTJ", "1", "1w2", "sp/so", "163", "1-3-6", "", "RLOAN", "", "Phlegmatic-Melancholic"], //Claire
        3: ["ENFJ", "3", "3w4", "sx/so", "386", "3-6-8", "ESE", "SCOEI", "", "Sanguine-Choleric"] //Stepmother
    },
    "OD": { //The Odyssey
        1: ["ENTP", "8", "8w7", "so/sp", "835", "3-5-8", "ILE", "", "", "Melancholic-Choleric"], //Odysseus
        2: ["ISTP", "9", "9w8", "", "", "", "", "", "", ""], //Telemachus
        3: ["ISTJ", "1", "1w9", "sx/sp", "612", "1-2-6", "", "", "", ""] //Penelope
    },
    "PSY": { //Psych
        1: ["ENTP", "7", "7w6", "sx/so", "738", "3-7-8", "ILE", "SCUEI", "VFLE", "Sanguine-Choleric"], //Shawn Spencer
        2: ["ISFJ", "6", "6w7", "sp/so", "612", "1-2-6", "", "", "", "Melancholic [Dominant]"], //Burton "Gus" Guster
        3: ["ISTJ", "1", "1w2", "sp/sx", "135", "1-3-5", "SLI", "RLOEN", "LFEV", "Choleric-Melancholic"], //Carlton Lassiter
        4: ["ISFJ", "2", "2w1", "sp/so", "297", "2-7-9", "", "SCOAI", "EVLF", "Melancholic-Sanguine"], //Juliet O'Hara
        5: ["ESTJ", "8", "8w9", "sp/so", "835", "3-5-8", "LSE", "", "", "Melancholic-Choleric"], //Henry Spencer
        6: ["ESTJ", "1", "1w2", "sp/so", "", "", "", "", "", "Melancholic-Choleric"] //Karen Vick
    },
    "WC": { //White Collar
        1: ["ENTP", "7", "7w6", "so/sx", "738", "3-7-8", "ILE", "SCUEI", "VFLE", "Sanguine-Phlegmatic"], //Neal Caffrey
        2: ["ISTJ", "1", "1w9", "sp/so", "162", "1-2-6", "", "", "", "Melancholic-Phlegmatic"], //Peter Burke
        3: ["INTP", "6", "6w5", "sp/sx", "649", "4-6-9", "", "", "", "Melancholic-Sanguine"], //Mozzie
        4: ["ESFJ", "2", "2w3", "so/sp", "216", "1-2-6", "", "", "", "Sanguine [Dominant]"], //Elizabeth Burke
        5: ["ISTJ", "9", "9w1", "sp/so", "962", "2-6-9", "", "", "", "Phlegmatic-Melancholic"], //Clinton Jones
        6: ["ISTP", "6", "6w7", "sx/sp", "682", "2-6-8", "", "", "", "Phlegmatic-Choleric"] //Diana Barrigan
    },
    "B": { //Bones
        1: ["ISTJ", "5", "5w6", "sp/sx", "513", "1-3-5", "LII", "RCOEI", "LVEF", "Phlegmatic-Choleric"], //Temperance "Bones" Brennan
        2: ["ESFJ", "6", "6w7", "sp/so", "638", "3-6-8", "ESE", "SCOAN", "", "Choleric-Sanguine"], //Seeley Booth
        3: ["ESFP", "4", "4w3", "sx/so", "478", "4-7-8", "SEE", "SCUAI", "EFVL", "Sanguine [Dominant]"], //Angela Montenegro
        4: ["ENTP", "7", "7w6", "sp/sx", "784", "4-7-8", "", "RLOEI", "", "Choleric-Sanguine"], //Jack Hodgins
        5: ["ESTJ", "1", "1w2", "sp/so", "", "", "", "RCOAI", "", "Phlegmatic-Choleric"] //Dr. Camile Saroyan
    },
    "CH": { //Calvin and Hobbes
        1: ["ENTP", "7", "7w6", "sx/sp", "748", "4-7-8", "ILE", "SLUEI", "LEVF", "Choleric-Sanguine"], //Calvin
        2: ["ISFP", "9", "9w1", "sp/sx", "974", "4-7-9", "SEI", "RCUAI", "", "Phlegmatic [Dominant]"], //Hobbes
        3: ["ISTJ", "7", "7w6", "sp/sx", "712", "1-2-7", "SLI", "", "", "Sanguine [Dominant]"], //Calvin's dad
        4: ["ISFJ", "2", "2w1", "", "", "", "", "", "", "Melancholic-Choleric"], //Calvin's mom
        5: ["ISTJ", "1", "1w2", "", "", "", "", "", "", "Choleric-Phlegmatic"] //Susie Derkins
    },
    "PA": { //Penny Arcade
        1: ["ENFP", "7", "7w8", "", "", "", "", "", "", "Sanguine-Melancholic"], //Jonathan Gabriel
        2: ["INTP", "5", "5w4", "", "", "", "", "", "", "Phlegmatic-Melancholic"], //Tycho Brahe
        3: ["", "", "", "", "", "", "", "", "", ""] //Anne Claire Brahe
    },
    "TA": { //The Americans
        1: ["ENTJ", "8", "8w9", "sx/sp", "584", "4-5-8", "LII", "SCUEI", "VFLE", "Choleric-Phlegmatic"], //Elizabeth Jennings
        2: ["INFJ", "6", "6w5", "sx/sp", "648", "4-6-8", "IEI", "RLOAN", "", "Phlegmatic-Melancholic"], //Philip Jennings
        3: ["INTP", "7", "7w6", "", "", "", "", "", "", ""], //Henry Jennings
        4: ["INFJ", "6", "6w5", "sp/sx", "947", "4-7-9", "IEI", "", "", "Phlegmatic-Sanguine"], //Paige Jennings
        5: ["ESTJ", "5", "5w6", "so/sx", "594", "4-5-9", "SLI", "", "", "Phlegmatic-Melancholic"] //Stan Beeman
    },
    "ST": { //Stranger Things
        1: ["ENFP", "6", "6w7", "sp/sx", "628", "2-6-8", "EII", "SLUAI", "EFLV", "Phlegmatic-Choleric"], //Joyce Byers
        2: ["ISTP", "8", "8w9", "sp/sx", "862", "2-6-8", "LSE", "RLUEN", "FLVE", "Choleric [Dominant]"], //Jim Hopper
        3: ["ENFJ", "6", "6w7", "so/sx", "628", "2-6-8", "ESE", "SCUAI", "ELFV", "Choleric-Melancholic"], //Mike Wheeler
        4: ["ISFP", "6", "6w5", "sp/sx", "649", "4-6-9", "ESI", "RLUAN", "FEVL", "Melancholic-Choleric"], //Eleven Hopper
        5: ["ENTP", "7", "7w6", "so/sx", "792", "2-7-9", "ILE", "SLUAI", "LVEF", "Sanguine-Phlegmatic"], //Dustin Henderson
        6: ["ESTJ", "6", "6w5", "so/sp", "613", "1-3-6", "LSE", "SCOAN", "", "Choleric [Dominant]"], //Lucas Sinclair
        7: ["ESFJ", "1", "1w2", "sp/so", "163", "1-3-6", "ESI", "SCOAI", "LFVE", "Sanguine-Melancholic"], //Nancy Wheeler
        8: ["ISFP", "4", "4w5", "sp/sx", "469", "4-6-9", "IEI", "RLUEI", "ELFV", "Melancholic [Dominant]"], //Jonathan Byers
        9: ["ESFP", "7", "7w6", "so/sx", "792", "2-7-9", "ESE", "SCUAN", "FEVL", "Sanguine [Dominant]"], //Steve Harrington
        10: ["ESFJ", "2", "2w3", "so/sx", "261", "1-2-6", "ESE", "", "", "Sanguine [Dominant]"], //Karen Wheeler
        11: ["INFP", "9", "9w1", "so/sp", "946", "4-6-9", "EII", "RLUAI", "ELVF", "Melancholic-Phlegmatic"], //Will Byers
        12: ["ESTP", "8", "8w7", "so/sp", "874", "4-7-8", "SEE", "SLUEI", "FVLE", "Choleric [Dominant]"], //Max Mayfield
        13: ["ENTJ", "8", "8w7", "sp/so", "837", "3-7-8", "LIE", "SCOEI", "VFLE", "Choleric [Dominant]"], //Erica Sinclair
        14: ["ESTP", "8", "8w7", "sp/sx", "837", "3-7-8", "SEE", "SLUEN", "VFLE", "Choleric [Dominant]"], //Billy Hargrove
        15: ["ISTP", "9", "9w8", "sp/sx", "974", "4-7-9", "SLI", "SCUEI", "FLVE", "Phlegmatic [Dominant]"] //Robin Buckley
    },
    "TT": { //Titanic
        1: ["ESFP", "7", "7w6", "so/sx", "729", "2-7-9", "IEE", "SCUAI", "EFVL", "Sanguine [Dominant]"], //Jack Dawson
        2: ["ISFP", "4", "4w5", "so/sx", "497", "4-7-9", "IEI", "RLUEI", "VELF", "Melancholic [Dominant]"], //Rose DeWitt Bukater
        3: ["ESTJ", "3", "3w2", "so/sp", "386", "3-6-8", "LSE", "SLOEI", "", "Choleric-Melancholic"] //Caledon "Cal" Hockley
    },
    "SK": { //Shrek
        1: ["ISTP", "9", "9w8", "sp/sx", "964", "4-6-9", "SLI", "RLUEN", "FLEV", "Melancholic-Choleric"], //Shrek
        2: ["ESFP", "7", "7w6", "so/sx", "729", "2-7-9", "ESE", "SCUAN", "FELV", "Sanguine [Dominant]"], //Donkey
        3: ["ESFJ", "2", "2w1", "so/sx", "268", "2-6-8", "ESE", "SCOAN", "EVFL", "Sanguine-Melancholic"] //Fiona
    },
    "MHC": { //The Man in the High Castle
        1: ["INFP", "4", "4w5", "so/sp", "946", "4-6-9", "", "RLOAI", "", "Phlegmatic [Dominant]"], //Juliana Crain
        2: ["ISTJ", "1", "1w9", "", "163", "1-3-6", "", "", "", "Choleric [Dominant]"], //Takeshi Kido
        3: ["INTJ", "8", "8w9", "sp/so", "836", "3-6-8", "LSI", "RLOAI", "FLEV", "Melancholic-Choleric"] //Obergruppenführer John Smith
    },
    "HO": { //The Hangover
        1: ["ESTP", "7", "7w8", "sx/so", "738", "3-7-8", "SLE", "SLUEN", "", "Sanguine-Choleric"], //Phil Wenneck
        2: ["ISFJ", "6", "6w5", "sp/so", "693", "3-6-9", "ILI", "", "", "Melancholic [Dominant]"], //Stu Price
        3: ["INFP", "7", "7w8", "sx/so", "649", "4-6-9", "EIE", "", "", "Sanguine-Choleric"] //Alan Garner
    },
    "CAD": { //Ctrl+AltDel
        1: ["ENFP", "", "", "", "", "", "", "", "", ""], //Ethan Ryan MacManus
        2: ["INTP", "", "", "", "", "", "", "", "", ""], //Lucas Davidowicz
        3: ["ISTJ", "", "", "", "", "", "", "", "", "Phlegmatic [Dominant]"] //Lilah MacManus
    },
    "GWH": { //Good Will Hunting
        1: ["INTP", "6", "6w5", "sx/so", "684", "4-6-8", "ILE", "SLUEI", "VLEF", "Choleric-Melancholic"], //Will Hunting
        2: ["ENFJ", "2", "2w1", "so/sx", "271", "1-2-7", "IEE", "SCOAI", "", "Sanguine [Dominant]"], //Skylar
        3: ["INFP", "2", "2w1", "sx/sp", "269", "2-6-9", "EII", "RCOAI", "", "Phlegmatic-Melancholic"] //Sean Maguire
    },
    "PYO": { //Psyhco
        1: ["ISFJ", "6", "6w5", "sp/sx", "621", "1-2-6", "ESI", "RLOAN", "", "Melancholic-Phlegmatic"], //Norman Bates
        2: ["ISFP", "6", "6w7", "sp/sx", "638", "3-6-8", "", "", "", ""], //Marion Crane
        3: ["ENFP", "6", "6w7", "so/sx", "", "", "", "", "", ""] //Lila Crane
    },
    "MF": { //Modern Family
        1: ["ISTP", "8", "8w9", "sp/sx", "836", "3-6-8", "SLI", "RLOEN", "VLFE", "Choleric-Phlegmatic"], //Jason "Jay" Pritchett
        2: ["ESFJ", "2", "2w3", "sx/so", "278", "2-7-8", "ESE", "SLOAN", "FEVL", "Sanguine-Choleric"], //Gloria Delgado-Pritchett
        3: ["ESTJ", "1", "1w2", "so/sp", "126", "1-2-6", "LSE", "SLOAN", "VFLE", "Choleric [Dominant]"], //Claire Dunphy (née Pritchett)
        4: ["ENFP", "7", "7w6", "so/sx", "729", "2-7-9", "ESE", "SCUAI", "ELVF", "Sanguine-Phlegmatic"], //Philip "Phil" Dunphy
        5: ["ISTJ", "6", "6w5", "sp/sx", "613", "1-3-6", "SLI", "RLOAN", "LFEV", "Melancholic [Dominant]"], //Mitchell Pritchett
        6: ["ESFJ", "2", "2w3", "so/sx", "279", "2-7-9", "IEE", "SLUAN", "EFVL", "Sanguine-Melancholic"], //Cameron "Cam" Tucker
        7: ["ESTP", "7", "7w6", "sx/so", "793", "3-7-9", "ILE", "SCUEI", "EFVL", "Sanguine-Phlegmatic"], //Luke Dunphy
        8: ["INFJ", "4", "4w3", "sx/so", "451", "1-4-5", "EIE", "RCOAI", "EFVL", "Phlegmatic-Melancholic"], //Manny Delgado
        9: ["ESTP", "7", "7w8", "so/sx", "738", "3-7-8", "SEE", "SLUEN", "FEVL", "Sanguine [Dominant]"], //Haley Marshall (née Dunphy)
        10: ["ISTJ", "3", "3w4", "sp/so", "351", "1-3-5", "LII", "RLOEI", "LVFE", "Choleric-Melancholic"] //Alexandria "Alex" Dunphy
    },
    "DARK": { //Dark
        1: ["ISFP", "9", "9w1", "sp/sx", "945", "4-5-9", "SLI", "RLUAI", "EFLV", "Melancholic [Dominant]"], //Jonas Kahnwald
        2: ["ISTJ", "1", "1w9", "sp/so", "153", "1-3-5", "LIE", "", "", "Melancholic [Dominant]"], //Charlotte Doppler
        3: ["ISFP", "2", "2w1", "so/sx", "261", "1-2-6", "ESI", "SLUEN", "EFVL", "Melancholic-Phlegmatic"], //Martha Nielsen
        4: ["ISFP", "2", "2w3", "sx/sp", "268", "2-6-8", "ESI", "RLUEN", "", "Melancholic [Dominant]"], //Hannah Kahnwald
        5: ["ISFJ", "6", "6w5", "sp/so", "692", "2-6-9", "EII", "", "", "Phlegmatic-Melancholic"], //Peter Doppler
        6: ["ESFP", "8", "8w7", "sx/so", "872", "2-7-8", "SEE", "", "", "Sanguine-Choleric"] //Kathrina Nielsen
    },
    "CM": { //Criminal Minds
        1: ["INTP", "5", "5w6", "sx/so", "549", "4-5-9", "LII", "RCOAI", "LVEF", "Phlegmatic-Choleric"], //Spencer Reid
        2: ["ENFP", "4", "4w5", "so/sx", "469", "4-6-9", "IEE", "SLUAI", "EFLV", "Sanguine-Phlegmatic"], //Penelope Garcia
        3: ["ESFJ", "2", "2w1", "so/sx", "261", "1-2-6", "ESE", "SLOAI", "EFVL", "Phlegmatic [Dominant]"], //Jennifer Jareau
        4: ["ENTJ", "8", "8w9", "sx/sp", "", "", "", "", "", "Choleric [Dominant]"], //David Rossi
        5: ["ISTJ", "1", "1w9", "sp/so", "163", "1-3-6", "LSI", "RCOAN", "LVFE", "Choleric [Dominant]"], //Aaron Hotcher
        6: ["ESTP", "3", "3w2", "so/sx", "378", "3-7-8", "SLE", "SCOEN", "VEFL", "Sanguine [Dominant]"] //Derek Morgan
    },
    "PKB": { //Peaky Blinders
        1: ["ENTJ", "8", "8w9", "sp/sx", "835", "3-5-8", "LIE", "RCOEI", "VFLE", "Melancholic-Choleric"], //Thomas Shelby
        2: ["ESFP", "6", "6w7", "sx/so", "683", "3-6-8", "SEE", "SLUEN", "VEFL", "Choleric-Sanguine"], //Arthur Shelby
        3: ["ENFJ", "8", "8w9", "sx/so", "826", "2-6-8", "EIE", "", "VELF", "Melancholic-Sanguine"], //Polly Gray
        4: ["ENFP", "3", "3w2", "so/sx", "317", "1-3-7", "IEE", "", "", "Sanguine-Choleric"], //Ada Thorne
        5: ["ISTP", "9", "9w8", "sp/sx", "", "", "SLI", "", "", ""], //Charlie Strong
        6: ["INTJ", "5", "5w6", "sp/sx", "583", "3-5-8", "LSI", "RCOEI", "LVFE", "Melancholic-Choleric"] //Michael Gray
    },
    "SA": { //Sons of Anarchy
        1: ["INFJ", "8", "8w7", "so/sx", "852", "2-5-8", "ESI", "RCOAI", "", "Choleric-Melancholic"], //Jackson 'Jax' Teller
        2: ["ESTJ", "1", "1w2", "so/sp", "863", "3-6-8", "LIE", "", "", "Choleric [Dominant]"], //Gemma Teller Morrow
        3: ["INTP", "5", "5w6", "so/sx", "594", "4-5-9", "ILE", "", "", "Phlegmatic-Sanguine"], //Bobby Munson
        4: ["ESTP", "7", "7w8", "sp/so", "783", "3-7-8", "SLE", "SCUEN", "", "Sanguine-Choleric"], //Tig Trager
        5: ["ISFJ", "2", "2w1", "", "", "", "", "", "", "Phlegmatic-Choleric"] //Chibs Telford
    },
    "EM": { //Ex Machina
        1: ["ISFJ", "6", "6w5", "sp/sx", "693", "3-6-9", "", "", "", "Melancholic [Dominant]"], //Caleb Smith
        2: ["ENTJ", "8", "8w7", "sp/so", "873", "3-7-8", "", "", "", "Sanguine-Phlegmatic"], //Nathan Bateman
        3: ["INFJ", "5", "5w6", "sp/sx", "548", "4-5-8", "EIE", "", "", "Melancholic-Phlegmatic"] //Ava
    },
    "TRT": { //Tropic Thunder
        1: ["ISFP", "9", "9w8", "", "", "", "", "", "", ""], //Tugg Speedman
        2: ["ESFP", "7", "7w8", "", "", "", "", "", "", ""], //Jeff Portnoy
        3: ["INFJ", "5", "5w4", "sx/so", "541", "1-4-5", "IEI", "RCOEI", "", "Phlegmatic [Dominant]"] //Kirk Lazarus
    },
    "TB": { //The Boys
        1: ["ISTP", "8", "8w7", "sp/sx", "873", "3-7-8", "SLE", "SLUEI", "VFLE", "Choleric [Dominant]"], //Billy Butcher
        2: ["INFP", "6", "6w5", "sp/so", "694", "4-6-9", "IEE", "RLUAI", "LEVF", "Phlegmatic-Melancholic"], //Hughie Campbell
        3: ["ENTJ", "3", "3w4", "so/sp", "386", "3-6-8", "SLE", "SLOEN", "VFEL", "Choleric-Melancholic"], //Homelander
        4: ["ISFJ", "1", "1w2", "so/sp", "126", "1-2-6", "ESI", "RCOAN", "EVFL", "Melancholic [Dominant]"], //Starlight
        5: ["ISTJ", "9", "9w8", "sp/so", "963", "3-6-9", "SLI", "", "", "Melancholic-Choleric"], //Queen Maeve
        6: ["ESFP", "3", "3w4", "sp/so", "378", "3-7-8", "SEE", "SLUEN", "", "Sanguine-Choleric"], //A-Train
        7: ["ISTJ", "1", "1w9", "sp/so", "126", "1-2-6", "LSE", "", "FVLE", "Choleric [Dominant]"], //Mother's Milk
        8: ["ESTP", "7", "7w8", "sp/so", "748", "4-7-8", "SEE", "", "", "Melancholic-Choleric"], //The Deep
        9: ["ENFP", "7", "7w6", "sx/so", "794", "4-7-9", "SEE", "SCUAI", "FLVE", "Sanguine-Phlegmatic"], //Frenchie
        10: ["ISFP", "6", "6w5", "sx/sp", "694", "4-6-9", "SLI", "RLUAN", "VFEL", "Melancholic-Choleric"], //Kimiko Miyashiro "The Female"
        11: ["ISTP", "9", "9w8", "sp/sx", "954", "4-5-9", "LSI", "", "", "Phlegmatic-Sanguine"], //Black Noir
        12: ["ESTJ", "6", "6w7", "so/sx", "638", "3-6-8", "LSE", "", "", ""], //Ashley Barrett
        13: ["ENTJ", "3", "3w4", "so/sp", "316", "1-3-6", "EIE", "", "", "Sanguine-Choleric"], //Madelyn Stillwell
        14: ["ISFP", "9", "9w1", "sp/sx", "925", "2-5-9", "ESI", "", "", "Melancholic-Sanguine"], //Rebecca Butcher
        15: ["ESTP", "7", "7w8", "sx/so", "738", "3-7-8", "SLE", "", "VFLE", "Sanguine-Choleric"] //Stormfront
    },
    "WE": { //Wynonna Earp
        1: ["ESTP", "7", "7w8", "sx/sp", "748", "4-7-8", "SLE", "SLUEN", "FLEV", "Sanguine-Choleric"], //Wynonna Earp
        2: ["ISTP", "8", "8w7", "sp/sx", "", "", "", "RLUEN", "", ""], //Doc Holiday
        3: ["INFP", "9", "9w1", "so/sx", "926", "2-6-9", "IEI", "SLOAI", "", "Melancholic-Sanguine"], //Waverly Earp
        4: ["INFJ", "2", "2w1", "sp/sx", "269", "2-6-9", "", "RLOAN", "", ""], //Nicole Haught
        5: ["INTP", "5", "5w6", "", "594", "4-5-9", "", "", "", ""] //Jeremy Chetri
    },
    "FUTR": { //Futurama
        1: ["ISFP", "6", "6w7", "sx/so", "694", "4-6-9", "SEI", "SCUAN", "FELV", "Phlegmatic-Sanguine"], //Philip J. Fry
        2: ["ESTJ", "1", "1w2", "sp/so", "126", "1-2-6", "LSE", "SLOAI", "VLEF", "Choleric [Dominant]"], //Turanga Leela
        3: ["ESTP", "7", "7w8", "sx/so", "783", "3-7-8", "SLE", "SLUEN", "VFLE", "Choleric-Sanguine"], //Bender Bending Rodriguez
        4: ["ENTP", "5", "5w6", "sx/sp", "584", "4-5-8", "ILE", "SCUEI", "FLEV", "Phlegmatic-Sanguine"], //Professor Fransworth
        5: ["ESFP", "7", "7w6", "so/sx", "793", "3-7-9", "ESE", "", "", "Sanguine [Dominant]"], //Amy Wong
        6: ["ISTJ", "1", "1w9", "sp/so", "631", "1-3-6", "ESI", "", "", "Melancholic-Choleric"], //Hermes Conrad
        7: ["INTP", "9", "9w8", "sx/sp", "926", "2-6-9", "ILE", "SCUAI", "LEVF", "Phlegmatic-Sanguine"], //John A. Zoidberg
        8: ["ESTP", "3", "3w2", "sx/so", "378", "3-7-8", "SEE", "", "", "Sanguine [Dominant]"], //Zapp Brannigan
        9: ["ISFJ", "9", "9w1", "sp/so", "926", "2-6-9", "EII", "", "", "Phlegmatic-Melancholic"], //Kif Kroker
        10: ["ENTJ", "8", "8w7", "", "864", "4-6-8", "", "SLOEI", "", ""] //Mom
    },
    "SS": { //Superstore
        1: ["ENFP", "1", "1w9", "so/sp", "172", "1-2-7", "IEE", "SCOAI", "EVFL", "Sanguine [Dominant]"], //Jonah Simms
        2: ["ESTJ", "8", "8w9", "sp/so", "863", "3-6-8", "LSI", "SLOEN", "VFLE", "Choleric [Dominant]"], //Dina Fox
        3: ["ENTP", "5", "5w6", "sp/sx", "538", "3-5-8", "ILE", "RCUEI", "LVEF", "Sanguine-Choleric"], //Garrett McNeill
        4: ["ESFJ", "3", "3w4", "so/sp", "361", "1-3-6", "EIE", "SCOAN", "VEFL", "Choleric-Sanguine"], //Mateo Liwanag
        5: ["ESFJ", "2", "2w1", "so/sp", "261", "1-2-6", "ESE", "SLOAN", "EFLV", "Sanguine [Dominant]"], //Glenn Strugis
        6: ["ISTJ", "1", "1w2", "sp/so", "126", "1-2-6", "LSE", "SLOAN", "VEFL", "Melancholic [Dominant]"] //Amy Sosa (Dubanowski)
    },
    "ELM": { //Elementary
        1: ["INTP", "5", "5w6", "sp/sx", "548", "4-5-8", "ILE", "", "VFLE", "Melancholic-Choleric"], //Sherlock Holmes
        2: ["ISFJ", "9", "9w1", "so/sx", "631", "1-3-6", "ESI", "", "", "Melancholic-Phlegmatic"], //Joan Watson
        3: ["ESTJ", "", "", "", "", "", "", "", "", ""] //Marcus Bell
    },
    "JB": { //Jennifer's Body
        1: ["ESTP", "3", "3w4", "sx/so", "387", "3-7-8", "SLE", "SLUEN", "VEFL", "Sanguine-Choleric"], //Jennifer Check
        2: ["INFJ", "6", "6w5", "sp/sx", "612", "1-2-6", "EII", "RLOAI", "ELVF", "Melancholic [Dominant]"], //Anita "Needy" Lesnicki
        3: ["INFP", "1", "1w9", "sp/so", "164", "1-4-6", "SLI", "RLUAI", "ELFV", "Sanguine-Phlegmatic"] //Chip Dove
    },
    "WWCF": { //Willy Wonka & the Chocolate Factory
        1: ["ENTP", "4", "4w3", "so/sx", "478", "4-7-8", "ILE", "SLUEI", "LFEV", "Sanguine-Melancholic"], //Willy Wonka
        2: ["ENFJ", "7", "7w8", "so/sx", "782", "2-7-8", "EIE", "SLOAI", "FVLE", "Choleric-Sanguine"], //Grandpa Joe
        3: ["ISFJ", "9", "9w1", "sp/so", "926", "2-6-9", "EII", "RCOAN", "LEFV", "Phlegmatic [Dominant]"] //Charlie Bucket
    },
    "BLB": { //Blue Bloods
        1: ["ESTP", "8", "8w9", "so/sp", "862", "2-6-8", "", "", "", "Choleric-Sanguine"], //Danny Reagan
        2: ["ISTJ", "1", "1w2", "so/sp", "135", "1-3-5", "", "", "", "Choleric-Melancholic"], //Erin Reagan
        3: ["ISFP", "9", "9w1", "so/sp", "925", "2-5-9", "", "", "", ""], //Jamie Reagan
        4: ["ESFJ", "6", "6w5", "so/sp", "631", "1-3-6", "", "", "", "Choleric-Sanguine"], //Henry Reagan
        5: ["ISTJ", "1", "1w9", "sp/so", "163", "1-3-6", "ESI", "", "", "Melancholic-Choleric"], //Frank Reagan
        6: ["ISTJ", "6", "6w7", "", "", "", "", "", "", "Melancholic-Choleric"] //Abigail Baker
    },
    "CF": { //Chicago Fire
        1: ["ISTJ", "1", "1w2", "sp/sx", "163", "1-3-6", "LSE", "", "", "Choleric [Dominant]"], //Matthew Casey
        2: ["ESTP", "7", "7w8", "sp/so", "738", "3-7-8", "SLE", "", "FLEV", "Sanguine [Dominant]"], //Kelly Severside
        3: ["ISTJ", "2", "2w1", "so/sp", "216", "1-2-6", "LSI", "", "", "Phlegmatic [Dominant]"], //Wallace Boden
        4: ["ESFJ", "3", "3w2", "sp/so", "317", "1-3-7", "ESE", "", "", "Sanguine-Melancholic"], //Joe Cruz
        5: ["ISTJ", "9", "9w1", "", "", "", "", "", "", ""], //Randall "Mouch" McHolland
        6: ["", "", "", "", "", "", "", "", "", ""] //Harold Capp
    },
    "HML": { //Hamlet
        1: ["INTJ", "4", "4w5", "sp/sx", "451", "1-4-5", "EIE", "RLOEI", "ELVF", "Melancholic [Dominant]"], //Hamlet
        2: ["ISFJ", "6", "6w7", "", "", "", "", "", "", ""], //Gertrude
        3: ["ENTJ", "8", "8w9", "sx/sp", "835", "3-5-8", "", "", "", "Choleric [Dominant]"], //Claudius
        4: ["ESFJ", "2", "2w3", "so/sx", "268", "2-6-8", "", "", "", "Choleric-Sanguine"], //Polonius
        5: ["ISFP", "9", "9w1", "sp/sx", "964", "4-6-9", "EII", "", "", "Phlegmatic [Dominant]"], //Ophelia
        6: ["ENFP", "9", "9w1", "", "", "", "LII", "", "", ""] //Horatio
    },
    "MCB": { //Macbeth
        1: ["ISFP", "3", "3w4", "sp/so", "396", "3-6-9", "LSI", "SLUAN", "VFEL", "Melancholic-Choleric"], //Macbeth
        2: ["ENTJ", "3", "3w4", "sp/so", "385", "3-5-8", "EIE", "SLOEI", "VLFE", "Choleric [Dominant]"] //Lady Macbeth
    },
    "DS": { //(500) Days of Summer
        1: ["INFP", "4", "4w5", "sx/sp", "496", "4-6-9", "IEI", "RLUAI", "ELVF", "Phlegmatic-Melancholic"], //Tom Hansen
        2: ["ENTP", "7", "7w6", "sx/sp", "748", "4-7-8", "IEE", "SLUEI", "", "Sanguine [Dominant]"] //Summer Finn
    },
    "BKSM": { //Booksmart
        1: ["ENTJ", "3", "3w4", "sp/so", "315", "1-3-5", "LIE", "SLOEI", "LVEF", "Choleric [Dominant]"], //Molly Davidson
        2: ["INFJ", "6", "6w5", "sx/so", "694", "4-6-9", "EII", "RCOAI", "ELFV", "Phlegmatic-Melancholic"] //Amy Antsler
    },
    "BLKL": { //The Blacklist
        1: ["ENTJ", "8", "8w7", "sp/sx", "853", "3-5-8", "LIE", "SCOEI", "VFLE", "Choleric-Phlegmatic"], //Raymond Reddington
        2: ["ENFJ", "3", "3w2", "sp/sx", "", "", "ESI", "", "", "Choleric-Phlegmatic"], //Elizabeth "Liz" Keen
        3: ["ISTJ", "6", "6w5", "sp/sx", "863", "3-6-8", "", "", "", ""], //Donald Ressler
        4: ["ISTJ", "1", "1w2", "so/sp", "", "", "ESI", "", "", "Melancholic-Choleric"], //Harold Cooper
        5: ["INFJ", "6", "6w5", "sp/sx", "682", "2-6-8", "EII", "", "", "Phlegmatic [Dominant]"], //Dembe Zuma
        6: ["INFP", "4", "4w5", "sp/sx", "", "", "", "", "", "Melancholic-Choleric"] //Aram Mojtabai
    },
    "BSU": { //Before Sunrise
        1: ["ENTP", "7", "7w8", "sx/sp", "749", "4-7-9", "IEE", "", "", "Sanguine [Dominant]"], //Jesse Wallace
        2: ["INFP", "4", "4w5", "sx/sp", "459", "4-5-9", "EII", "RLUAI", "", "Melancholic-Sanguine"] //Céline
    },
    "QG": { //The Queen's Gambit
        1: ["INTJ", "5", "5w6", "sp/sx", "531", "1-3-5", "LII", "RLOEI", "LVFE", "Melancholic-Choleric"] //Elizabeth "Beth" Harmon
    }
    /*"": { //
        1: ["", "", "", "", "", "", "", "", ""], //
        2: ["", "", "", "", "", "", "", "", ""], //
        3: ["", "", "", "", "", "", "", "", ""], //
        4: ["", "", "", "", "", "", "", "", ""], //
        5: ["", "", "", "", "", "", "", "", ""], //
        6: ["", "", "", "", "", "", "", "", ""], //
        7: ["", "", "", "", "", "", "", "", ""], //
        8: ["", "", "", "", "", "", "", "", ""], //
        9: ["", "", "", "", "", "", "", "", ""], //
        10: ["", "", "", "", "", "", "", "", ""], //
        11: ["", "", "", "", "", "", "", "", ""], //
        12: ["", "", "", "", "", "", "", "", ""], //
        13: ["", "", "", "", "", "", "", "", ""], //
        14: ["", "", "", "", "", "", "", "", ""], //
        15: ["", "", "", "", "", "", "", "", ""], //
        16: ["", "", "", "", "", "", "", "", ""], //
        17: ["", "", "", "", "", "", "", "", ""], //
        18: ["", "", "", "", "", "", "", "", ""], //
        19: ["", "", "", "", "", "", "", "", ""], //
        20: ["", "", "", "", "", "", "", "", ""], //
        21: ["", "", "", "", "", "", "", "", ""], //
        22: ["", "", "", "", "", "", "", "", ""], //
        23: ["", "", "", "", "", "", "", "", ""], //
        24: ["", "", "", "", "", "", "", "", ""], //
        25: ["", "", "", "", "", "", "", "", ""], //
        26: ["", "", "", "", "", "", "", "", ""], //
        27: ["", "", "", "", "", "", "", "", ""], //
        28: ["", "", "", "", "", "", "", "", ""], //
        29: ["", "", "", "", "", "", "", "", ""], //
        30: ["", "", "", "", "", "", "", "", ""] //
    }*/
}; //1598
//-3 Double Worf, Jimmy Mcgill, Mike Ehrmantraut
