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
    }
};