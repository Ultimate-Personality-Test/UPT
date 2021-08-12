var query = window.location.search.substring(3);
var user_scores = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var display_array = [["MBTI", 16, 480], ["enneatype", 9, 54], ["enneawing", 18, 216], ["variant", 6, 72], ["tritype", 162, 972], ["family", 27, 324], ["socionics", 16, 144], ["big5", 32, 384], ["ap", 24, 432], ["4t", 16, 192]];
var character_scores =
    {
        "GOT": {
            1: ["Jon Snow", "GOT/1.jpg"],
            2: ["Tyrion Lannister", "GOT/2.jpg"],
            3: ["Daenerys Targaryen", "GOT/3.jpg"],
            4: ["Sansa Stark", "GOT/4.jpg"],
            5: ["Arya Stark", "GOT/5.jpg"],
            6: ["Jaime Lannister", "GOT/6.jpg"],
            7: ["Samwell Tarly", "GOT/7.jpg"],
            8: ["Jorah Mormont", "GOT/8.jpg"],
            9: ["Theon Greyjoy", "GOT/9.jpg"],
            10: ["Petyr Baelish", "GOT/10.jpg"],
            11: ["Davos Seaworth", "GOT/11.jpg"],
            12: ["Eddard Stark", "GOT/12.jpg"],
            13: ["Brandon Stark", "GOT/13.jpg"],
            14: ["Brienne of Tarth", "GOT/14.jpg"],
            15: ["Sandor Clegane", "GOT/15.jpg"],
            16: ["Varys", "GOT/16.jpg"],
            17: ["Catelyn Stark", "GOT/17.jpg"],
            18: ["Tywin Lannister", "GOT/18.jpg"],
            19: ["Margaery Tyrell", "GOT/19.jpg"],
            20: ["Robb Stark", "GOT/20.jpg"],
            21: ["Bronn", "GOT/21.jpg"],
            22: ["Stannis Baratheon", "GOT/22.jpg"],
            23: ["Joffrey Baratheon", "GOT/23.jpg"],
            24: ["Melisandre", "GOT/24.jpg"],
            25: ["Olenna Tyrell", "GOT/25.jpg"],
            26: ["Ygritte", "GOT/26.jpg"],
            27: ["Cersei Lannister", "GOT/27.jpg"],
            28: ["Shae", "GOT/28.jpg"],
            29: ["Oberyn Martell", "GOT/29.jpg"],
            30: ["Asha Greyjoy", "GOT/30.jpg"],
            "N": 30,
            "name": "Game of Thrones",
        },
        "HP": {
            1: ["Ron Weasley", "HP/1.jpg"],
            2: ["Harry Potter", "HP/2.jpg"],
            3: ["Hermione Granger", "HP/3.jpg"],
            4: ["Rubeus Hagrid", "HP/4.jpg"],
            5: ["Albus Dumbledore", "HP/5.jpg"],
            6: ["Minerva McGonagall", "HP/6.jpg"],
            7: ["Severus Snape", "HP/7.jpg"],
            8: ["Ginny Weasley", "HP/8.jpg"],
            9: ["Luna Lovegood", "HP/9.jpg"],
            10: ["Draco Malfoy", "HP/10.jpg"],
            11: ["Molly Weasley", "HP/11.jpg"],
            12: ["Lord Voldemort", "HP/12.jpg"],
            13: ["Cho Chang", "HP/13.jpg"],
            14: ["Fleur Delacour", "HP/14.jpg"],
            15: ["Viktor Krum", "HP/15.jpg"],
            16: ["Filius Flitwick", "HP/16.jpg"],
            17: ["Horace Slughorn", "HP/17.jpg"],
            18: ["George Weasley", "HP/18.jpg"],
            19: ["Alastor Moody", "HP/19.jpg"],
            20: ["Remus Lupin", "HP/20.jpg"],
            21: ["Arthur Weasley", "HP/21.jpg"],
            22: ["Cornelius Fudge", "HP/22.jpg"],
            23: ["Dolores Umbridge", "HP/23.jpg"],
            24: ["Petunia Dursley", "HP/24.jpg"],
            25: ["Moaning Myrtle", "HP/25.jpg"],
            26: ["Rita Skeeter", "HP/26.jpg"],
            27: ["Dobby", "HP/27.jpg"],
            28: ["Bellatrix Lestrange", "HP/28.jpg"],
            29: ["Nymphadora Tonks", "HP/29.jpg"],
            30: ["Sirius Black", "HP/30.jpg"],
            "N": 30,
            "name": "Harry Potter"
        },
        "TO": {
            1: ["Michael Scott", "TO/1.jpg"],
            2: ["Dwight Schrute", "TO/2.jpg"],
            3: ["Jim Halpert", "TO/3.jpg"],
            4: ["Pam Beesly", "TO/4.jpg"],
            5: ["Ryan Howard", "TO/5.jpg"],
            6: ["Andy Bernard", "TO/6.jpg"],
            7: ["Jan Levinson", "TO/7.jpg"],
            8: ["Stanley Hudson", "TO/8.jpg"],
            9: ["Kevin Malone", "TO/9.jpg"],
            10: ["Meredith Palmer", "TO/10.jpg"],
            11: ["Angela Martin", "TO/11.jpg"],
            12: ["Phyllis Lapin", "TO/12.jpg"],
            13: ["Kelly Kapoor", "TO/13.jpg"],
            14: ["Kelly Erin Hannon", "TO/14.jpg"],
            15: ["Robert California", "TO/15.jpg"],
            "N": 15,
            "name": "The Office"
        },
        "F": {
            1: ["Rachel Green", "F/1.jpg"],
            2: ["Monica Geller", "F/2.jpg"],
            3: ["Phoebe Buffay", "F/3.jpg"],
            4: ["Joey Tribbiani", "F/4.jpg"],
            5: ["Chandler Bing", "F/5.jpg"],
            6: ["Ross Geller", "F/6.jpg"],
            "N": 6,
            "name": "Friends"
        },
        "WW": {
            1: ["Josiah Bartlet", "WW/1.jpg"],
            2: ["Leo McGarry", "WW/2.jpg"],
            3: ["Josh Lyman", "WW/3.jpg"],
            4: ["Toby Ziegler", "WW/4.jpg"],
            5: ["Sam Seaborn", "WW/5.jpg"],
            6: ["C. J. Cregg", "WW/6.jpg"],
            7: ["Charlie Young", "WW/7.jpg"],
            8: ["Donna Moss", "WW/8.jpg"],
            9: ["Abbey Bartlet", "WW/9.jpg"],
            10: ["Joey Lucas", "WW/10.jpg"],
            "N": 10,
            "name": "The West Wing"
        },
        "L": {
            1: ["Sayid Jarrah", "L/1.jpg"],
            2: ["Claire Littleton", "L/2.jpg"],
            3: ["Jack Shephard", "L/3.jpg"],
            4: ["Hugo 'Hurley' Reyes", "L/4.jpg"],
            5: ["Shannon Rutherford", "L/5.jpg"],
            6: ["James 'Sawyer' Ford", "L/6.jpg"],
            7: ["Benjamin Linus", "L/7.jpg"],
            8: ["Jin-Soo Kwon", "L/8.jpg"],
            9: ["Michael Dawson", "L/9.jpg"],
            10: ["Desmond Hume", "L/10.jpg"],
            11: ["Sun-Hwa Kwon", "L/11.jpg"],
            12: ["Kate Austen", "L/12.jpg"],
            13: ["Charlie Pace", "L/13.jpg"],
            14: ["John Locke", "L/14.jpg"],
            15: ["Juliet Burke", "L/15.jpg"],
            "N": 15,
            "name": "LOST"
        },
        "TW": {
            1: ["Cedric Daniels", "TW/1.jpg"],
            2: ["Jimmy McNulty", "TW/2.jpg"],
            3: ["Kima Greggs", "TW/3.jpg"],
            4: ["Lester Freamon", "TW/4.jpg"],
            5: ["Bunk Moreland", "TW/5.jpg"],
            6: ["Thomas 'Herc' Hauk", "TW/6.jpg"],
            7: ["Ellis Carver", "TW/7.jpg"],
            8: ["Reginald 'Bubbles' Cousins", "TW/8.jpg"],
            9: ["William Rawls", "TW/9.jpg"],
            10: ["Roland 'Prez' Pryzbylewski", "TW/10.jpg"],
            11: ["Rhonda Pearlman", "TW/11.jpg"],
            12: ["Omar Little", "TW/12.jpg"],
            13: ["Ervin Burrell", "TW/13.jpg"],
            14: ["Preston 'Bodie' Broadus", "TW/14.jpg"],
            15: ["Russell 'Stringer' Bell", "TW/15.jpg"],
            16: ["Tommy Carcetti", "TW/16.jpg"],
            17: ["Avon Barksdale", "TW/17.jpg"],
            18: ["Chris Partlow", "TW/18.jpg"],
            19: ["Norman Wilson", "TW/19.jpg"],
            20: ["Michael Lee", "TW/20.jpg"],
            21: ["Maurice Levy", "TW/21.jpg"],
            22: ["Beatrice 'Beadie' Russell", "TW/22.jpg"],
            23: ["Dennis 'Cutty' Wise", "TW/23.jpg"],
            24: ["D'Angelo Barksdale", "TW/24.jpg"],
            25: ["Clay Davis", "TW/25.jpg"],
            26: ["Clarence Royce", "TW/26.jpg"],
            27: ["Spiros 'Vondas' Vondopoulos", "TW/27.jpg"],
            28: ["Frank Sobotka", "TW/28.jpg"],
            29: ["Ziggy Sobotka", "TW/29.jpg"],
            30: ["Nick Sobotka", "TW/30.jpg"],
            "N": 30,
            "name": "The Wire"
        },
        "ALA": {
            1: ["Aang", "ALA/1.jpg"],
            2: ["Zuko", "ALA/2.jpg"],
            3: ["Katara", "ALA/3.jpg"],
            4: ["Toph Beifong", "ALA/4.jpg"],
            5: ["Sokka", "ALA/5.jpg"],
            6: ["Azula", "ALA/6.jpg"],
            7: ["Iroh", "ALA/7.jpg"],
            8: ["Firelord Ozai", "ALA/8.jpg"],
            9: ["Ty Lee", "ALA/9.jpg"],
            10: ["Hakoda", "ALA/10.jpg"],
            "N": 10,
            "name": "Avatar: The Last Airbender"
        },
        "DS9": {
            1: ["Jadzia Dax", "DS9/1.jpg"],
            2: ["Odo", "DS9/2.jpg"],
            3: ["Worf", "DS9/3.jpg"],
            4: ["Nog", "DS9/4.jpg"],
            5: ["Quark", "DS9/5.jpg"],
            6: ["Benjamin Sisko", "DS9/6.jpg"],
            7: ["Elim Garak", "DS9/7.jpg"],
            8: ["Kira Nerys", "DS9/8.jpg"],
            9: ["Julian Bashir", "DS9/9.jpg"],
            10: ["Dukat", "DS9/10.jpg"],
            11: ["Rom", "DS9/11.jpg"],
            12: ["Miles O'Brien", "DS9/12.jpg"],
            13: ["Jake Sisko", "DS9/13.jpg"],
            14: ["Winn Adami", "DS9/14.jpg"],
            15: ["Kasidy Yates", "DS9/15.jpg"],
            "N": 15,
            "name": "Star Trek: Deep Space Nine"
        },
        "PP": {
            1: ["Mr. Darcy", "PP/1.jpg"],
            2: ["Elizabeth Bennet", "PP/2.jpg"],
            3: ["Mr. William Collins", "PP/3.jpg"],
            4: ["George Wickham", "PP/4.jpg"],
            5: ["Charles Bingley", "PP/5.jpg"],
            6: ["Georgiana Darcy", "PP/6.jpg"],
            7: ["Lydia Bennet", "PP/7.jpg"],
            8: ["Jane Bennet", "PP/8.jpg"],
            9: ["Mrs. Bennet", "PP/9.jpg"],
            10: ["Lady Catherine de Bourgh", "PP/10.jpg"],
            "N": 10,
            "name": "Pride and Prejudice"
        },
        "MCU": {
            1: ["Tony Stark", "MCU/1.jpg"],
            2: ["Captain America", "MCU/2.jpg"],
            3: ["Black Widow", "MCU/3.jpg"],
            4: ["Bruce Banner", "MCU/4.jpg"],
            5: ["Captain Marvel", "MCU/5.jpg"],
            6: ["Thor", "MCU/6.jpg"],
            7: ["Nick Fury", "MCU/7.jpg"],
            8: ["Dr. Strange", "MCU/8.jpg"],
            9: ["Black Panther", "MCU/9.jpg"],
            10: ["Gamora", "MCU/10.jpg"],
            11: ["Thanos", "MCU/11.jpg"],
            12: ["Peggy Carter", "MCU/12.jpg"],
            13: ["Loki", "MCU/13.jpg"],
            14: ["Hawkeye", "MCU/14.jpg"],
            15: ["Peter Jason Quill", "MCU/15.jpg"],
            "N": 15,
            "name": "Marvel Cinematic Universe"
        },
        "S": {
            1: ["Homer Simpson", "S/1.jpg"],
            2: ["Bart Simpson", "S/2.jpg"],
            3: ["Marge Simpson", "S/3.jpg"],
            4: ["Lisa Simpson", "S/4.jpg"],
            5: ["Apu Nahasapeemapetilon", "S/5.jpg"],
            6: ["Mr. Burns", "S/6.jpg"],
            7: ["Ned Flanders", "S/7.jpg"],
            8: ["Milhouse Van Houten", "S/8.jpg"],
            9: ["Moe Szyslak", "S/9.jpg"],
            10: ["Nelson Muntz", "S/10.jpg"],
            11: ["Krusty the Clown", "S/11.jpg"],
            12: ["Edna Krabappel", "S/12.jpg"],
            13: ["Waylon Smithers", "S/13.jpg"],
            14: ["Barney Gumble", "S/14.jpg"],
            15: ["Principal Skinner", "S/15.jpg"],
            "N": 15,
            "name": "The Simpsons"
        },
        "T7S": {
            1: ["Eric Forman", "T7S/1.jpg"],
            2: ["Jackie Burkhart", "T7S/2.jpg"],
            3: ["Michael Kelso", "T7S/3.jpg"],
            4: ["Steven Hyde", "T7S/4.jpg"],
            5: ["Donna Pinciotti", "T7S/5.jpg"],
            6: ["Fez", "T7S/6.jpg"],
            7: ["Kitty Forman", "T7S/7.jpg"],
            8: ["Red Forman", "T7S/8.jpg"],
            9: ["Midge Pinciotti", "T7S/9.jpg"],
            10: ["Bob Pinciotti", "T7S/10.jpg"],
            "N": 10,
            "name": "That 70's Show"
        },
        "DA": {
            1: ["Robert Crawley, 7th Earl of Grantham", "DA/1.jpg"],
            2: ["Lady Sybil Crawley", "DA/2.jpg"],
            3: ["Lady Edith Crawley", "DA/3.jpg"],
            4: ["Charlie Carson", "DA/4.jpg"],
            5: ["John Bates", "DA/5.jpg"],
            6: ["Lady Mary Crawley", "DA/6.jpg"],
            7: ["Sarah O'Brien", "DA/7.jpg"],
            8: ["Anna Bates", "DA/8.jpg"],
            9: ["Elsie Carson", "DA/9.jpg"],
            10: ["William Mason", "DA/10.jpg"],
            11: ["Thomas Barrow", "DA/11.jpg"],
            12: ["Cora Crawley, Countess of Grantham", "DA/12.jpg"],
            13: ["Daisy Mason", "DA/13.jpg"],
            14: ["Beryl Patmore", "DA/14.jpg"],
            15: ["Violet Crawley, Dowager Countess of Grantham", "DA/15.jpg"],
            "N": 15,
            "name": "Downton Abbey"
        },
        "SW": {
            1: ["Luke Skywalker", "SW/1.jpg"],
            2: ["Princess Leia", "SW/2.jpg"],
            3: ["Han Solo", "SW/3.jpg"],
            4: ["Darth Vader", "SW/4.jpg"],
            5: ["Obi-Wan Kenobi", "SW/5.jpg"],
            6: ["C-3PO", "SW/6.jpg"],
            "N": 6,
            "name": "Star Wars"
        },
        "GA": {
            1: ["Meredith Grey", "GA/1.jpg"],
            2: ["Cristina Yang", "GA/2.jpg"],
            3: ["Izzie Stevens", "GA/3.jpg"],
            4: ["Alex Karev", "GA/4.jpg"],
            5: ["George O&apos;Malley", "GA/5.jpg"],
            6: ["Miranda Bailey", "GA/6.jpg"],
            7: ["Richard Webber", "GA/7.jpg"],
            8: ["Preston Burke", "GA/8.jpg"],
            9: ["Derek Shepherd", "GA/9.jpg"],
            10: ["Addison Montgomery", "GA/10.jpg"],
            "N": 10,
            "name": "Grey&apos;s Anatomy"
        },
        "BB": {
            1: ["Walter White", "BB/1.jpg"],
            2: ["Skyler White", "BB/2.jpg"],
            3: ["Jesse Pinkman", "BB/3.jpg"],
            4: ["Hank Schrader", "BB/4.jpg"],
            5: ["Marie Schrader", "BB/5.jpg"],
            6: ["Flynn White", "BB/6.jpg"],
            7: ["Saul Goodman", "BB/7.jpg"],
            8: ["Gus Fring", "BB/8.jpg"],
            9: ["Mike Ehrmantraut", "BB/9.jpg"],
            10: ["Jane Margolis", "BB/10.jpg"],
            "N": 10,
            "name": "Breaking Bad"
        },
        "FS": {
            1: ["Malcolm Reynolds", "FS/1.jpg"],
            2: ["River Tam", "FS/2.jpg"],
            3: ["Inara Serra", "FS/3.jpg"],
            4: ["Kaylee Frye", "FS/4.jpg"],
            5: ["Zoe Washburne", "FS/5.jpg"],
            6: ["Hoban Washburne", "FS/6.jpg"],
            7: ["Jayne Cobb", "FS/7.jpg"],
            8: ["Derrial Book", "FS/8.jpg"],
            9: ["Simon Tam", "FS/9.jpg"],
            10: ["The Operative", "FS/10.jpg"],
            "N": 10,
            "name": "Firefly + Serenity"
        },
        "LOTR": {
            1: ["Frodo Baggins", "LOTR/1.jpg"],
            2: ["Aragorn", "LOTR/2.jpg"],
            3: ["Boromir", "LOTR/3.jpg"],
            4: ["Merry Brandybuck", "LOTR/4.jpg"],
            5: ["Samwise Gamgee", "LOTR/5.jpg"],
            6: ["Gandalf", "LOTR/6.jpg"],
            7: ["Gimli", "LOTR/7.jpg"],
            8: ["Legolas", "LOTR/8.jpg"],
            9: ["Pippin Took", "LOTR/9.jpg"],
            10: ["Gollum", "LOTR/10.jpg"],
            "N": 10,
            "name": "Lord of the Rings"
        },
        "C": {
            1: ["Jeff Winger", "C/1.jpg"],
            2: ["Britta Perry", "C/2.jpg"],
            3: ["Abed Nadir", "C/3.jpg"],
            4: ["Troy Barnes", "C/4.jpg"],
            5: ["Annie Edison", "C/5.jpg"],
            6: ["Shirley Bennett", "C/6.jpg"],
            7: ["Pierce Hawthorne", "C/7.jpg"],
            8: ["Craig Pelton", "C/8.jpg"],
            9: ["Ben Chang", "C/9.jpg"],
            10: ["Ian Duncan", "C/10.jpg"],
            "N": 10,
            "name": "Community"
        },
        "WD": {
            1: ["Rick Grimes", "WD/1.jpg"],
            2: ["Shane Walsh", "WD/2.jpg"],
            3: ["Lori Grimes", "WD/3.jpg"],
            4: ["Andrea", "WD/4.jpg"],
            5: ["Dale Horvath", "WD/5.jpg"],
            6: ["Glenn Rhee", "WD/6.jpg"],
            7: ["Carl Grimes", "WD/7.jpg"],
            8: ["Daryl Dixon", "WD/8.jpg"],
            9: ["Carol Peletier", "WD/9.jpg"],
            10: ["Merle Dixon", "WD/10.jpg"],
            "N": 10,
            "name": "The Walking Dead"
        },
        "BBT": {
            1: ["Leonard Hofstadter", "BBT/1.jpg"],
            2: ["Sheldon Cooper", "BBT/2.jpg"],
            3: ["Penny", "BBT/3.jpg"],
            4: ["Howard Wolowitz", "BBT/4.jpg"],
            5: ["Raj Koothrappali", "BBT/5.jpg"],
            6: ["Leslie Winkle", "BBT/6.jpg"],
            7: ["Bernadette Rostenkowski", "BBT/7.jpg"],
            8: ["Amy Farrah Fowler", "BBT/8.jpg"],
            9: ["Stuart Bloom", "BBT/9.jpg"],
            10: ["Mary Cooper", "BBT/10.jpg"],
            "N": 10,
            "name": "The Big Bang Theory"
        },
        "TD": {
            1: ["Rust Cohle", "TD/1.jpg"],
            2: ["Marty Hart", "TD/2.jpg"],
            3: ["Maggie Hart", "TD/3.jpg"],
            "N": 3,
            "name": "True Detective"
        },
        "PR": {
            1: ["Leslie Knope", "PR/1.jpg"],
            2: ["Ann Perkins", "PR/2.jpg"],
            3: ["Mark Brendanawicz", "PR/3.jpg"],
            4: ["Tom Haverford", "PR/4.jpg"],
            5: ["Ron Swanson", "PR/5.jpg"],
            6: ["April Ludgate", "PR/6.jpg"],
            7: ["Jerry Gergich", "PR/7.jpg"],
            8: ["Donna Meagle", "PR/8.jpg"],
            9: ["Ben Wyatt", "PR/9.jpg"],
            10: ["Chris Traeger", "PR/10.jpg"],
            "N": 10,
            "name": "Parks and Recreation"
        },
        "HG": {
            1: ["Katniss Everdeen", "HG/1.jpg"],
            2: ["Peeta Mellark", "HG/2.jpg"],
            3: ["Haymitch Abernathy", "HG/3.jpg"],
            4: ["Effie Trinket", "HG/4.jpg"],
            5: ["Coriolanus Snow", "HG/5.jpg"],
            6: ["Gale Hawthorne", "HG/6.jpg"],
            "N": 6,
            "name": "The Hunger Games"
        },
        "FC": {
            1: ["Tyler Durden", "FC/1.jpg"],
            2: ["The Narrator", "FC/2.jpg"],
            3: ["Marla Singer", "FC/3.jpg"],
            "N": 3,
            "name": "Fight Club"
        },
        "SC": {
            1: ["Carrie Bradshaw", "SC/1.jpg"],
            2: ["Charlotte York", "SC/2.jpg"],
            3: ["Miranda Hobbes", "SC/3.jpg"],
            4: ["Samantha Jones", "SC/4.jpg"],
            5: ["Mr. Big", "SC/5.jpg"],
            6: ["Steve Brady", "SC/6.jpg"],
            "N": 6,
            "name": "Sex and the City"
        },
        "D": {
            1: ["Dexter Morgan", "D/1.jpg"],
            2: ["Rita Bennett", "D/2.jpg"],
            3: ["Debra Morgan", "D/3.jpg"],
            4: ["James Doakes", "D/4.jpg"],
            5: ["Maria LaGuerta", "D/5.jpg"],
            6: ["Angel Batista", "D/6.jpg"],
            7: ["Harry Morgan", "D/7.jpg"],
            8: ["Vince Masuka", "D/8.jpg"],
            9: ["Thomas Matthews", "D/9.jpg"],
            10: ["Joey Quinn", "D/10.jpg"],
            "N": 10,
            "name": "Dexter"
        },
        "DK": {
            1: ["Bruce Wayne", "DK/1.jpg"],
            2: ["Alfred Pennyworth", "DK/2.jpg"],
            3: ["The Joker", "DK/3.jpg"],
            4: ["James Gordon", "DK/4.jpg"],
            5: ["Harvey Dent", "DK/5.jpg"],
            6: ["Rachel Dawes", "DK/6.jpg"],
            7: ["Lucius Fox", "DK/7.jpg"],
            8: ["Anthony Garcia", "DK/8.jpg"],
            9: ["Lau", "DK/9.jpg"],
            10: ["Sal Maroni", "DK/10.jpg"],
            "N": 10,
            "name": "The Dark Knight"
        },
        "WSW": {
            1: ["Dolores Abernathy", "WSW/1.jpg"],
            2: ["Maeve Millay", "WSW/2.jpg"],
            3: ["Bernard Lowe", "WSW/3.jpg"],
            4: ["Teddy Flood", "WSW/4.jpg"],
            5: ["Ashley Stubbs", "WSW/5.jpg"],
            6: ["Lee Sizemore", "WSW/6.jpg"],
            7: ["Elsie Hughes", "WSW/7.jpg"],
            8: ["Man in Black", "WSW/8.jpg"],
            9: ["Robert Ford", "WSW/9.jpg"],
            10: ["Theresa Cullen", "WSW/10.jpg"],
            11: ["Charlotte Hale", "WSW/11.jpg"],
            12: ["Akecheta", "WSW/12.jpg"],
            13: ["Clementine Pennyfeather", "WSW/13.jpg"],
            14: ["Logan Delos", "WSW/14.jpg"],
            15: ["Felix Lutz", "WSW/15.jpg"],
            "N": 15,
            "name": "Westworld"
        },
        "LK": {
            1: ["Simba", "LK/1.jpg"],
            2: ["Nala", "LK/2.jpg"],
            3: ["Timon", "LK/3.jpg"],
            4: ["Pumbaa", "LK/4.jpg"],
            5: ["Scar", "LK/5.jpg"],
            6: ["Mufasa", "LK/6.jpg"],
            "N": 6,
            "name": "The Lion King"
        },
        "CB": {
            1: ["Rick Blaine", "CB/1.jpg"],
            2: ["Ilsa Lund", "CB/2.jpg"],
            3: ["Victor Laszlo", "CB/3.jpg"],
            "N": 3,
            "name": "Casablanca"
        },
        "BSG": {
            1: ["William Adama", "BSG/1.jpg"],
            2: ["Laura Roslin", "BSG/2.jpg"],
            3: ["Kara 'Starbuck' Thrace", "BSG/3.jpg"],
            4: ["Lee 'Apollo' Adama", "BSG/4.jpg"],
            5: ["Gaius Baltar", "BSG/5.jpg"],
            6: ["Number Six", "BSG/6.jpg"],
            7: ["Sharon 'Boomer' Valerii", "BSG/7.jpg"],
            8: ["Saul Tigh", "BSG/8.jpg"],
            9: ["Galen Tyrol", "BSG/9.jpg"],
            10: ["Karl 'Helo' Agathon", "BSG/10.jpg"],
            11: ["Felix Gaeta", "BSG/11.jpg"],
            12: ["Anastasia Dualla", "BSG/12.jpg"],
            13: ["Billy Keikeya", "BSG/13.jpg"],
            14: ["Cally Henderson", "BSG/14.jpg"],
            15: ["Samuel 'Longshot' Anders", "BSG/15.jpg"],
            "N": 15,
            "name": "Battlestar Galactica"
        },
        "MM": {
            1: ["Don Draper", "MM/1.jpg"],
            2: ["Peggy Olson", "MM/2.jpg"],
            3: ["Pete Campbell", "MM/3.jpg"],
            4: ["Betty Draper", "MM/4.jpg"],
            5: ["Joan Holloway", "MM/5.jpg"],
            6: ["Salvatore Romano", "MM/6.jpg"],
            7: ["Paul Kinsey", "MM/7.jpg"],
            8: ["Ken Cosgrove", "MM/8.jpg"],
            9: ["Harry Crane", "MM/9.jpg"],
            10: ["Rachel Menken", "MM/10.jpg"],
            11: ["Roger Sterling", "MM/11.jpg"],
            12: ["Bert Cooper", "MM/12.jpg"],
            13: ["Henry Francis", "MM/13.jpg"],
            14: ["Lane Pryce", "MM/14.jpg"],
            15: ["Stan Rizzo", "MM/15.jpg"],
            "N": 15,
            "name": "Mad Men"
        },
        "PC": {
            1: ["Jack Sparrow", "PC/1.jpg"],
            2: ["Hector Barbossa", "PC/2.jpg"],
            3: ["Joshamee Gibbs", "PC/3.jpg"],
            4: ["Will Turner", "PC/4.jpg"],
            5: ["Elizabeth Swann", "PC/5.jpg"],
            6: ["James Norrington", "PC/6.jpg"],
            "N": 6,
            "name": "Pirates of the Caribbean"
        },
        "BVS": {
            1: ["Buffy Summers", "BVS/1.jpg"],
            2: ["Xander Harris", "BVS/2.jpg"],
            3: ["Willow Rosenberg", "BVS/3.jpg"],
            4: ["Cordelia Chase", "BVS/4.jpg"],
            5: ["Rupert Giles", "BVS/5.jpg"],
            6: ["Angel", "BVS/6.jpg"],
            "N": 6,
            "name": "Buffy the Vampire Slayer"
        },
        "SL": {
            1: ["Sherlock Holmes", "SL/1.jpg"],
            2: ["Dr. John Watson", "SL/2.jpg"],
            3: ["D.I. Greg Lestrade", "SL/3.jpg"],
            4: ["Mrs. Hudson", "SL/4.jpg"],
            5: ["Mycroft Holmes", "SL/5.jpg"],
            6: ["Molly Hooper", "SL/6.jpg"],
            "N": 6,
            "name": "Sherlock"
        },
        "SVU": {
            1: ["Olivia Benson", "SVU/1.jpg"],
            2: ["John Munch", "SVU/2.jpg"],
            3: ["Donald Cragen", "SVU/3.jpg"],
            4: ["Elliot Stabler", "SVU/4.jpg"],
            5: ["Odafin Tutuola", "SVU/5.jpg"],
            6: ["Melinda Warner", "SVU/6.jpg"],
            "N": 6,
            "name": "Law & Order: SVU"
        },
        "JP": {
            1: ["Dr. Alan Grant", "JP/1.jpg"],
            2: ["Dr. Ellie Sattler", "JP/2.jpg"],
            3: ["Dr. Ian Malcolm", "JP/3.jpg"],
            4: ["John Hammond", "JP/4.jpg"],
            5: ["Ray Arnold", "JP/5.jpg"],
            6: ["Dennis Nedry", "JP/6.jpg"],
            "N": 6,
            "name": "Jurassic Park"
        },
        "CRA": {
            1: ["Rachel Chu", "CRA/1.jpg"],
            2: ["Nick Young", "CRA/2.jpg"],
            3: ["Eleanor Sung-Young", "CRA/3.jpg"],
            4: ["Goh Peik Lin", "CRA/4.jpg"],
            5: ["Astrid Leong-Teo", "CRA/5.jpg"],
            6: ["Colin Khoo", "CRA/6.jpg"],
            "N": 6,
            "name": "Crazy Rich Asians"
        },
        "SV": {
            1: ["Richard Hendricks", "SV/1.jpg"],
            2: ["Erlich Bachman", "SV/2.jpg"],
            3: ["Nelson Bighetti", "SV/3.jpg"],
            4: ["Bertram Gilfoyle", "SV/4.jpg"],
            5: ["Dinesh Chugtai", "SV/5.jpg"],
            6: ["Peter Gregory", "SV/6.jpg"],
            7: ["Monica Hall", "SV/7.jpg"],
            8: ["Jared Dunn", "SV/8.jpg"],
            9: ["Gavin Belson", "SV/9.jpg"],
            10: ["Jian-Yang", "SV/10.jpg"],
            "N": 10,
            "name": "Silicon Valley"
        },
        "TP": {
            1: ["Dale Cooper", "TP/1.jpg"],
            2: ["Sheriff Truman", "TP/2.jpg"],
            3: ["Shelly Johnson", "TP/3.jpg"],
            4: ["Bobby Briggs", "TP/4.jpg"],
            5: ["Benjamin Horne", "TP/5.jpg"],
            6: ["Audrey Horne", "TP/6.jpg"],
            7: ["Norma Jennings", "TP/7.jpg"],
            8: ["James Hurley", "TP/8.jpg"],
            9: ["Ed Hurley", "TP/9.jpg"],
            10: ["Pete Martell", "TP/10.jpg"],
            11: ["Leland Palmer", "TP/11.jpg"],
            12: ["Josie Packard", "TP/12.jpg"],
            13: ["Catherine Martell", "TP/13.jpg"],
            14: ["Lucy Moran", "TP/14.jpg"],
            15: ["Donna Hayward", "TP/15.jpg"],
            "N": 15,
            "name": "Twin Peaks"
        },
        "XF": {
            1: ["Fox Mulder", "XF/1.jpg"],
            2: ["Dana Scully", "XF/2.jpg"],
            3: ["Walter Skinner", "XF/3.jpg"],
            "N": 3,
            "name": "The X-Files"
        },
        "GG": {
            1: ["Jay Gatsby", "GG/1.jpg"],
            2: ["Nick Carraway", "GG/2.jpg"],
            3: ["Daisy Buchanan", "GG/3.jpg"],
            4: ["Tom Buchanan", "GG/4.jpg"],
            5: ["Myrtle Wilson", "GG/5.jpg"],
            6: ["Jordan Baker", "GG/6.jpg"],
            "N": 6,
            "name": "The Great Gatsby"
        },
        "RJ": {
            1: ["Romeo Montague", "RJ/1.jpg"],
            2: ["Juliet Capulet", "RJ/2.jpg"],
            3: ["Friar Laurence", "RJ/3.jpg"],
            4: ["Mercutio", "RJ/4.jpg"],
            5: ["The Nurse", "RJ/5.jpg"],
            6: ["Benvolio", "RJ/6.jpg"],
            "N": 6,
            "name": "Romeo and Juliet"
        },
        "M": {
            1: ["Neo", "M/1.jpg"],
            2: ["Morpheus", "M/2.jpg"],
            3: ["Trinity", "M/3.jpg"],
            4: ["Agent Smith", "M/4.jpg"],
            5: ["Cypher", "M/5.jpg"],
            6: ["The Oracle", "M/6.jpg"],
            "N": 6,
            "name": "The Matrix"
        },
        "CBP": {
            1: ["Spike Spiegel", "CBP/1.jpg"],
            2: ["Jet Black", "CBP/2.jpg"],
            3: ["Faye Valentine", "CBP/3.jpg"],
            4: ["Ed", "CBP/4.jpg"],
            5: ["Vicious", "CBP/5.jpg"],
            6: ["Julia", "CBP/6.jpg"],
            "N": 6,
            "name": "Cowboy Bebop"
        },
        "SG1": {
            1: ["Jack O'Neill", "SG1/1.jpg"],
            2: ["Daniel Jackson", "SG1/2.jpg"],
            3: ["Samantha Carter", "SG1/3.jpg"],
            4: ["Teal'c", "SG1/4.jpg"],
            5: ["George S. Hammond", "SG1/5.jpg"],
            6: ["Janet Fraiser", "SG1/6.jpg"],
            "N": 6,
            "name": "Stargate SG-1"
        },
        "SB": {
            1: ["Seth", "SB/1.jpg"],
            2: ["Evan", "SB/2.jpg"],
            3: ["Fogell (McLovin)", "SB/3.jpg"],
            4: ["Jules", "SB/4.jpg"],
            5: ["Becca", "SB/5.jpg"],
            6: ["Officer Slater", "SB/6.jpg"],
            "N": 6,
            "name": "Superbad"
        },
        "MG": {
            1: ["Cady Heron", "MG/1.jpg"],
            2: ["Regina George", "MG/2.jpg"],
            3: ["Gretchen Wieners", "MG/3.jpg"],
            4: ["Karen Smith", "MG/4.jpg"],
            5: ["Janis Ian", "MG/5.jpg"],
            6: ["Damian Leigh", "MG/6.jpg"],
            7: ["Aaron Samuels", "MG/7.jpg"],
            8: ["Ms. Sharon Norbury", "MG/8.jpg"],
            9: ["June George", "MG/9.jpg"],
            10: ["Betsy Heron", "MG/10.jpg"],
            "N": 10,
            "name": "Mean Girls"
        },
        "LW": {
            1: ["Jo March", "LW/1.jpg"],
            2: ["Meg March", "LW/2.jpg"],
            3: ["Amy March", "LW/3.jpg"],
            4: ["Beth March", "LW/4.jpg"],
            5: ["Marmee March", "LW/5.jpg"],
            6: ["Theodore Laurence", "LW/6.jpg"],
            "N": 6,
            "name": "Little Women"
        },
        "I": {
            1: ["Dom Cobb", "I/1.jpg"],
            2: ["Arthur", "I/2.jpg"],
            3: ["Ariadne", "I/3.jpg"],
            4: ["Mal Cobb", "I/4.jpg"],
            5: ["Mr. Saito", "I/5.jpg"],
            6: ["Robert Fischer", "I/6.jpg"],
            "N": 6,
            "name": "Inception"
        },
        "A": {
            1: ["Dallas", "A/1.jpg"],
            2: ["Ellen Ripley", "A/2.jpg"],
            3: ["Lambert", "A/3.jpg"],
            4: ["Ash", "A/4.jpg"],
            5: ["the Alien", "A/5.jpg"],
            6: ["Parker", "A/6.jpg"],
            "N": 6,
            "name": "Alien"
        },
        "TS": {
            1: ["Woody", "TS/1.jpg"],
            2: ["Buzz Lightyear", "TS/2.jpg"],
            3: ["Mr. Potato Head", "TS/3.jpg"],
            4: ["Rex", "TS/4.jpg"],
            5: ["Bo Peep", "TS/5.jpg"],
            6: ["Sid Phillips", "TS/6.jpg"],
            "N": 6,
            "name": "Toy Story"
        },
        "RH": {
            1: ["Robin Hood", "RH/1.jpg"],
            2: ["Maid Marian", "RH/2.jpg"],
            3: ["Little John", "RH/3.jpg"],
            4: ["Friar Tuck", "RH/4.jpg"],
            5: ["Prince John", "RH/5.jpg"],
            6: ["Sheriff of Nottingham", "RH/6.jpg"],
            "N": 6,
            "name": "Robin Hood"
        },
        "ONB": {
            1: ["Piper Chapman", "ONB/1.jpg"],
            2: ["Alex Vause", "ONB/2.jpg"],
            3: ["Sam Healy", "ONB/3.jpg"],
            4: ["Red Reznikov", "ONB/4.jpg"],
            5: ["Crazy Eyes", "ONB/5.jpg"],
            6: ["Taystee Jefferson", "ONB/6.jpg"],
            7: ["Nicky Nichols", "ONB/7.jpg"],
            8: ["Pennsatucky Doggett", "ONB/8.jpg"],
            9: ["Lorna Morello", "ONB/9.jpg"],
            10: ["Flaca Gonzales", "ONB/10.jpg"],
            "N": 10,
            "name": "Orange is the New Black"
        },
        "FNL": {
            1: ["Eric Taylor", "FNL/1.jpg"],
            2: ["Tami Taylor", "FNL/2.jpg"],
            3: ["Smash Williams", "FNL/3.jpg"],
            4: ["Matt Saracen", "FNL/4.jpg"],
            5: ["Lyla Garrity", "FNL/5.jpg"],
            6: ["Tim Riggins", "FNL/6.jpg"],
            7: ["Tyra Collette", "FNL/7.jpg"],
            8: ["Landry Clarke", "FNL/8.jpg"],
            9: ["Jason Street", "FNL/9.jpg"],
            10: ["Julie Taylor", "FNL/10.jpg"],
            "N": 10,
            "name": "Friday Night Lights"
        },
        "AS": {
            1: ["Dagny Taggart", "AS/1.jpg"],
            2: ["Henry Rearden", "AS/2.jpg"],
            3: ["James Taggart", "AS/3.jpg"],
            4: ["John Galt", "AS/4.jpg"],
            5: ["Ellis Wyatt", "AS/5.jpg"],
            6: ["Francisco d'Anconia", "AS/6.jpg"],
            "N": 6,
            "name": "Atlas Shrugged"
        },
        "B99": {
            1: ["Jake Peralta", "B99/1.jpg"],
            2: ["Rosa Diaz", "B99/2.jpg"],
            3: ["Terry Jeffords", "B99/3.jpg"],
            4: ["Amy Santiago", "B99/4.jpg"],
            5: ["Charles Boyle", "B99/5.jpg"],
            6: ["Raymond Holt", "B99/6.jpg"],
            "N": 6,
            "name": "Brooklyn Nine-Nine"
        },
        "R": {
            1: ["Johnny", "R/1.jpg"],
            2: ["Lisa", "R/2.jpg"],
            3: ["Mark", "R/3.jpg"],
            4: ["Denny", "R/4.jpg"],
            5: ["Peter", "R/5.jpg"],
            6: ["Michelle", "R/6.jpg"],
            "N": 6,
            "name": "The Room"
        },
        "PF": {
            1: ["Vincent Vega", "PF/1.jpg"],
            2: ["Jules Winnfield", "PF/2.jpg"],
            3: ["Mia Wallace", "PF/3.jpg"],
            4: ["Ringo", "PF/4.jpg"],
            5: ["Marsellus Wallace", "PF/5.jpg"],
            6: ["Butch Coolidge", "PF/6.jpg"],
            "N": 6,
            "name": "Pulp Fiction"
        },
        "T": {
            1: ["Bella Swan", "T/1.jpg"],
            2: ["Edward Cullen", "T/2.jpg"],
            3: ["Jacob Black", "T/3.jpg"],
            4: ["Charlie Swan", "T/4.jpg"],
            5: ["Carlisle Cullen", "T/5.jpg"],
            6: ["Esme Cullen", "T/6.jpg"],
            7: ["Alice Cullen", "T/7.jpg"],
            8: ["Emmett Cullen", "T/8.jpg"],
            9: ["Rosalie Hale", "T/9.jpg"],
            10: ["Jasper Hale", "T/10.jpg"],
            "N": 10,
            "name": "Twilight"
        },
        "SF": {
            1: ["Jerry Seinfeld", "SF/1.jpg"],
            2: ["George Costanza", "SF/2.jpg"],
            3: ["Elaine Benes", "SF/3.jpg"],
            4: ["Cosmo Kramer", "SF/4.jpg"],
            5: ["Morty Seinfeld", "SF/5.jpg"],
            6: ["Helen Seinfeld", "SF/6.jpg"],
            "N": 6,
            "name": "Seinfeld"
        },
        "THM": {
            1: ["Charlie Harper", "THM/1.jpg"],
            2: ["Alan Harper", "THM/2.jpg"],
            3: ["Jake Harper", "THM/3.jpg"],
            4: ["Berta", "THM/4.jpg"],
            5: ["Evelyn Harper", "THM/5.jpg"],
            6: ["Judith Harper-Melnick", "THM/6.jpg"],
            "N": 6,
            "name": "Two and Half Men"
        },
        "NCIS": {
            1: ["Leroy Jethro Gibbs", "NCIS/1.jpg"],
            2: ["Anthony DiNozzo", "NCIS/2.jpg"],
            3: ["Abby Sciuto", "NCIS/3.jpg"],
            4: ["Donald Mallard", "NCIS/4.jpg"],
            5: ["Timothy McGee", "NCIS/5.jpg"],
            6: ["Jimmy Palmer", "NCIS/6.jpg"],
            "N": 6,
            "name": "NCIS"
        },
        "TIU": {
            1: ["Jack Pearson", "TIU/1.jpg"],
            2: ["Rebecca Pearson", "TIU/2.jpg"],
            3: ["Randall Pearson", "TIU/3.jpg"],
            4: ["Kate Pearson", "TIU/4.jpg"],
            5: ["Kevin Pearson", "TIU/5.jpg"],
            6: ["Beth Pearson", "TIU/6.jpg"],
            7: ["Toby Damon", "TIU/7.jpg"],
            8: ["William H. 'Shakespeare' Hill", "TIU/8.jpg"],
            9: ["Miguel Rivas", "TIU/9.jpg"],
            10: ["Sophie", "TIU/10.jpg"],
            "N": 10,
            "name": "This Is Us"
        },
        "AD": {
            1: ["Michael Bluth", "AD/1.jpg"],
            2: ["Lindsay Bluth Funke", "AD/2.jpg"],
            3: ["George Oscar 'Gob' Bluth", "AD/3.jpg"],
            4: ["George Michael Bluth", "AD/4.jpg"],
            5: ["Maeby Funke", "AD/5.jpg"],
            6: ["Buster Bluth", "AD/6.jpg"],
            7: ["Tobias Funke", "AD/7.jpg"],
            8: ["George Bluth, Sr.", "AD/8.jpg"],
            9: ["Oscar Bluth", "AD/9.jpg"],
            10: ["Lucille Bluth", "AD/10.jpg"],
            "N": 10,
            "name": "Arrested Development"
        },
        "O": {
            1: ["Marty Byrde", "O/1.jpg"],
            2: ["Wendy Byrde", "O/2.jpg"],
            3: ["Charlotte Byrde", "O/3.jpg"],
            4: ["Jonah Byrde", "O/4.jpg"],
            5: ["Ruth Langmore", "O/5.jpg"],
            6: ["Rachel Garrison", "O/6.jpg"],
            7: ["Roy Petty", "O/7.jpg"],
            8: ["Jacob Snell", "O/8.jpg"],
            9: ["Darlene Snell", "O/9.jpg"],
            10: ["Wyatt Langmore", "O/10.jpg"],
            "N": 10,
            "name": "Ozark"
        },
        "MASH": {
            1: ["Benjamin 'Hawkeye' Pierce", "MASH/1.jpg"],
            2: ["Margaret 'Hot Lips' Houlihan", "MASH/2.jpg"],
            3: ["Maxwell Klinger", "MASH/3.jpg"],
            4: ["Francis Mulcahy", "MASH/4.jpg"],
            5: ["Frank Burns", "MASH/5.jpg"],
            6: ["Walter 'Radar' O'Reilly", "MASH/6.jpg"],
            "N": 6,
            "name": "M*A*S*H"
        },
        "OFOCN": {
            1: ["Randle Patrick McMurphy", "OFOCN/1.jpg"],
            2: ["Nurse Mildred Ratched", "OFOCN/2.jpg"],
            3: ["'Chief' Bromden", "OFOCN/3.jpg"],
            4: ["Dale Harding", "OFOCN/4.jpg"],
            5: ["Billy Bibbit", "OFOCN/5.jpg"],
            6: ["Charlie Cheswick", "OFOCN/6.jpg"],
            "N": 6,
            "name": "One Flew Over the Cuckoo's Nest"
        },
        "DUNE": {
            1: ["Paul Atreides", "DUNE/1.jpg"],
            2: ["Lady Jessica", "DUNE/2.jpg"],
            3: ["Duke Leto Atreides", "DUNE/3.jpg"],
            4: ["Baron Vladimir Harkonnen", "DUNE/4.jpg"],
            5: ["Thufir Hawat", "DUNE/5.jpg"],
            6: ["Chani", "DUNE/6.jpg"],
            "N": 6,
            "name": "Dune"
        },
        "AK": {
            1: ["Princess Anna Karenina", "AK/1.jpg"],
            2: ["Count Alexei Karenin", "AK/2.jpg"],
            3: ["Count Alexei Vronsky", "AK/3.jpg"],
            4: ["Princess Darya 'Dolly' Oblonskaya", "AK/4.jpg"],
            5: ["Prince Stepan 'Stiva' Oblonsky", "AK/5.jpg"],
            6: ["Konstantin 'Kostya' Levin", "AK/6.jpg"],
            7: ["Princess Elizaveta 'Betsy' Tverskaya", "AK/7.jpg"],
            8: ["Princess Ekaterina 'Kitty' Shcherbatskaya", "AK/8.jpg"],
            9: ["Countess Vronskaya", "AK/9.jpg"],
            10: ["Countess Lidia Ivanovna", "AK/10.jpg"],
            "N": 10,
            "name": "Anna Karenina"
        },
        "SCRUBS": {
            1: ["John Michael Dorian", "SCRUBS/1.jpg"],
            2: ["Elliot Reid", "SCRUBS/2.jpg"],
            3: ["Christopher Turk", "SCRUBS/3.jpg"],
            4: ["Bob Kelso", "SCRUBS/4.jpg"],
            5: ["Perry Cox", "SCRUBS/5.jpg"],
            6: ["Carla Espinosa", "SCRUBS/6.jpg"],
            "N": 6,
            "name": "Scrubs"
        },
        "TNG": {
            1: ["Jean-Luc Picard", "TNG/1.jpg"],
            2: ["William Riker", "TNG/2.jpg"],
            3: ["Geordi La Forge", "TNG/3.jpg"],
            4: ["Tasha Yar", "TNG/4.jpg"],
            5: ["Worf", "TNG/5.jpg"],
            6: ["Beverly Crusher", "TNG/6.jpg"],
            7: ["Deanna Troi", "TNG/7.jpg"],
            8: ["Wesley Crusher", "TNG/8.jpg"],
            9: ["Data", "TNG/9.jpg"],
            10: ["Guinan", "TNG/10.jpg"],
            "N": 10,
            "name": "Star Trek: The Next Generation"
        },
        "G": {
            1: ["Hannah Horvath", "G/1.jpg"],
            2: ["Marnie Michaels", "G/2.jpg"],
            3: ["Jessa Johansson", "G/3.jpg"],
            4: ["Shoshanna Shapiro", "G/4.jpg"],
            5: ["Adam Sackler", "G/5.jpg"],
            6: ["Ray Ploshansky", "G/6.jpg"],
            "N": 6,
            "name": "Girls"
        },
        "PB": {
            1: ["Lincoln Burrows", "PB/1.jpg"],
            2: ["Michael Scofield", "PB/2.jpg"],
            3: ["Veronica Donovan", "PB/3.jpg"],
            4: ["Fernando Sucre", "PB/4.jpg"],
            5: ["Lincoln 'L.J.' Burrows, Jr.", "PB/5.jpg"],
            6: ["Brad Bellick", "PB/6.jpg"],
            7: ["Theodore 'T-Bag' Bagwell", "PB/7.jpg"],
            8: ["Sara Tancredi", "PB/8.jpg"],
            9: ["Benjamin Miles 'C-Note' Franklin", "PB/9.jpg"],
            10: ["John Abruzzi", "PB/10.jpg"],
            "N": 10,
            "name": "Prison Break"
        },
        "MNT": {
            1: ["Patrick Jane", "MNT/1.jpg"],
            2: ["Teresa Lisbon", "MNT/2.jpg"],
            3: ["Kimball Cho", "MNT/3.jpg"],
            4: ["Wayne Rigsby", "MNT/4.jpg"],
            5: ["Grace Van Pelt", "MNT/5.jpg"],
            6: ["Red John", "MNT/6.jpg"],
            "N": 6,
            "name": "The Mentalist"
        },
        "DH": {
            1: ["Susan Mayer", "DH/1.jpg"],
            2: ["Lynette Scavo", "DH/2.jpg"],
            3: ["Bree Van de Kamp", "DH/3.jpg"],
            4: ["Gabrielle Solis", "DH/4.jpg"],
            5: ["Edie Britt", "DH/5.jpg"],
            6: ["Carlos Solis", "DH/6.jpg"],
            7: ["Julie Mayer", "DH/7.jpg"],
            8: ["Mary Alice Young", "DH/8.jpg"],
            9: ["Mike Delfino", "DH/9.jpg"],
            10: ["Tom Scavo", "DH/10.jpg"],
            "N": 10,
            "name": "Desperate Housewives"
        },
        "GBU": {
            1: ["Blondie", "GBU/1.jpg"],
            2: ["Angel Eyes", "GBU/2.jpg"],
            3: ["Tuco", "GBU/3.jpg"],
            "N": 3,
            "name": "The Good, the Bad, and the Ugly"
        },
        "RLA": {
            1: ["Indiana Jones", "RLA/1.jpg"],
            2: ["Marion Ravenwood", "RLA/2.jpg"],
            3: ["Dr. Rene Belloq", "RLA/3.jpg"],
            4: ["Major Arnold Toht", "RLA/4.jpg"],
            5: ["Sallah", "RLA/5.jpg"],
            6: ["Dr. Marcus Brody", "RLA/6.jpg"],
            "N": 6,
            "name": "Raiders of the Lost Ark"
        },
        "FG": {
            1: ["Forrest Gump", "FG/1.jpg"],
            2: ["Jenny Curran", "FG/2.jpg"],
            3: ["Dan Taylor", "FG/3.jpg"],
            "N": 3,
            "name": "Forrest Gump"
        },
        "SsC": {
            1: ["Johnny Rose", "SsC/1.jpg"],
            2: ["Moira Rose", "SsC/2.jpg"],
            3: ["David Rose", "SsC/3.jpg"],
            4: ["Alexis Rose", "SsC/4.jpg"],
            5: ["Stevie Budd", "SsC/5.jpg"],
            6: ["Ted Mullens", "SsC/6.jpg"],
            "N": 6,
            "name": "Schitt's Creek"
        },
        "GLEE": {
            1: ["Kurt Hummel", "GLEE/1.jpg"],
            2: ["Sue Sylvester", "GLEE/2.jpg"],
            3: ["Rachel Berry", "GLEE/3.jpg"],
            4: ["Will Schuester", "GLEE/4.jpg"],
            5: ["Artie Abrams", "GLEE/5.jpg"],
            6: ["Santana Lopez", "GLEE/6.jpg"],
            7: ["Tina Cohen-Chang", "GLEE/7.jpg"],
            8: ["Mercedes Jones", "GLEE/8.jpg"],
            9: ["Noah Puckerman", "GLEE/9.jpg"],
            10: ["Brittany Pierce", "GLEE/10.jpg"],
            "N": 10,
            "name": "Glee"
        },
        "H": {
            1: ["Dr. Gregory House", "H/1.jpg"],
            2: ["Dr. Lisa Cuddy", "H/2.jpg"],
            3: ["Dr. James Wilson", "H/3.jpg"],
            4: ["Dr. Eric Foreman", "H/4.jpg"],
            5: ["Dr. Robert Chase", "H/5.jpg"],
            6: ["Dr. Allison Cameron", "H/6.jpg"],
            "N": 6,
            "name": "House, M.D."
        },
        "GP": {
            1: ["Eleanor Shellstrop", "GP/1.jpg"],
            2: ["Chidi Anagonye", "GP/2.jpg"],
            3: ["Tahani Al-Jamil", "GP/3.jpg"],
            4: ["Janet", "GP/4.jpg"],
            5: ["Jason Mendoza", "GP/5.jpg"],
            6: ["Michael", "GP/6.jpg"],
            "N": 6,
            "name": "The Good Place"
        },
        "WO": {
            1: ["Dorothy Gale", "WO/1.jpg"],
            2: ["The Wizard of Oz", "WO/2.jpg"],
            3: ["The Scarecrow", "WO/3.jpg"],
            4: ["The Tin Man", "WO/4.jpg"],
            5: ["The Cowardly Lion", "WO/5.jpg"],
            6: ["The Wicked Witch of the West", "WO/6.jpg"],
            "N": 6,
            "name": "The Wizard of Oz"
        },
        "CAS": {
            1: ["Sabrina Spellman", "CAS/1.jpg"],
            2: ["Harvey Kinkle", "CAS/2.jpg"],
            3: ["Hilda Spellman", "CAS/3.jpg"],
            4: ["Ambrose Spellman", "CAS/4.jpg"],
            5: ["Mary Wardwell", "CAS/5.jpg"],
            6: ["Rosalind Walker", "CAS/6.jpg"],
            7: ["Prudence Night", "CAS/7.jpg"],
            8: ["Agatha", "CAS/8.jpg"],
            9: ["Father Faustus Blackwood", "CAS/9.jpg"],
            10: ["Zelda Spellman", "CAS/10.jpg"],
            "N": 10,
            "name": "Chilling Adventures of Sabrina"
        },
        "T100": {
            1: ["Clarke Griffin", "T100/1.jpg"],
            2: ["Bellamy Blake", "T100/2.jpg"],
            3: ["Octavia Blake", "T100/3.jpg"],
            4: ["Raven Reyes", "T100/4.jpg"],
            5: ["Dr. Abigail Griffin", "T100/5.jpg"],
            6: ["John Murphy", "T100/6.jpg"],
            7: ["Marcus Kane", "T100/7.jpg"],
            8: ["Monty Green", "T100/8.jpg"],
            9: ["Nathan Miller", "T100/9.jpg"],
            10: ["Thelonious Jaha", "T100/10.jpg"],
            "N": 10,
            "name": "The 100"
        },
        "SCDL": {
            1: ["Olivia Pope", "SCDL/1.jpg"],
            2: ["Abby Whelan", "SCDL/2.jpg"],
            3: ["Quinn Perkins", "SCDL/3.jpg"],
            4: ["Huck", "SCDL/4.jpg"],
            5: ["Cyrus Beene", "SCDL/5.jpg"],
            6: ["David Rosen", "SCDL/6.jpg"],
            7: ["Mellie Grant", "SCDL/7.jpg"],
            8: ["Fitzgerald Grant", "SCDL/8.jpg"],
            9: ["Jake Ballard", "SCDL/9.jpg"],
            10: ["Rowan Pope", "SCDL/10.jpg"],
            "N": 10,
            "name": "Scandal"
        },
        "HGAWM": {
            1: ["Annalise Keating", "HGAWM/1.jpg"],
            2: ["Nate Lahey", "HGAWM/2.jpg"],
            3: ["Connor Walsh", "HGAWM/3.jpg"],
            4: ["Michaela Pratt", "HGAWM/4.jpg"],
            5: ["Asher Millstone", "HGAWM/5.jpg"],
            6: ["Frank Delfino", "HGAWM/6.jpg"],
            7: ["Bonnie Winterbottom", "HGAWM/7.jpg"],
            8: ["Oliver Hampton", "HGAWM/8.jpg"],
            9: ["Laurel Castillo", "HGAWM/9.jpg"],
            10: ["Wes Gibbins", "HGAWM/10.jpg"],
            "N": 10,
            "name": "How To Get Away With Murder"
        },
        "RD": {
            1: ["Archie Andrews", "RD/1.jpg"],
            2: ["Betty Cooper", "RD/2.jpg"],
            3: ["Veronica Lodge", "RD/3.jpg"],
            4: ["Jughead Jones", "RD/4.jpg"],
            5: ["Kevin Keller", "RD/5.jpg"],
            6: ["Cheryl Blossom", "RD/6.jpg"],
            "N": 6,
            "name": "Riverdale"
        },
        "SPF": {
            1: ["General Mark R. Naird", "SPF/1.jpg"],
            2: ["Dr. Adrian Mallory", "SPF/2.jpg"],
            3: ["F. Tony Scarapiducci", "SPF/3.jpg"],
            4: ["Erin Naird", "SPF/4.jpg"],
            5: ["Captain Angela Ali", "SPF/5.jpg"],
            6: ["Dr. Chan Kaifang", "SPF/6.jpg"],
            "N": 6,
            "name": "Space Force"
        },
        "GOG": {
            1: ["Serena van der Woodsen", "GOG/1.jpg"],
            2: ["Blair Waldorf", "GOG/2.jpg"],
            3: ["Dan Humphrey", "GOG/3.jpg"],
            4: ["Nate Archibald", "GOG/4.jpg"],
            5: ["Chuck Bass", "GOG/5.jpg"],
            6: ["Lily van der Woodsen", "GOG/6.jpg"],
            "N": 6,
            "name": "Gossip Girl"
        },
        "ARW": {
            1: ["John Diggle", "ARW/1.jpg"],
            2: ["Oliver Queen", "ARW/2.jpg"],
            3: ["Felicity Smoak", "ARW/3.jpg"],
            4: ["Laurel Lance", "ARW/4.jpg"],
            5: ["Quentin Lance", "ARW/5.jpg"],
            6: ["Thea Queen", "ARW/6.jpg"],
            "N": 6,
            "name": "Arrow"
        },
        "UA": {
            1: ["Vanya Hargreeves", "UA/1.jpg"],
            2: ["Luther Hargreeves", "UA/2.jpg"],
            3: ["Diego Hargreeves", "UA/3.jpg"],
            4: ["Allison Hargreeves", "UA/4.jpg"],
            5: ["Klaus Hargreeves", "UA/5.jpg"],
            6: ["Ben Hargreeves", "UA/6.jpg"],
            "N": 6,
            "name": "The Umbrella Academy"
        },
        "HNB": {
            1: ["Will Graham", "HNB/1.jpg"],
            2: ["Dr. Hannibal Lecter", "HNB/2.jpg"],
            3: ["Dr. Alana Bloom", "HNB/3.jpg"],
            4: ["Jack Crawford", "HNB/4.jpg"],
            5: ["Jimmy Price", "HNB/5.jpg"],
            6: ["Brian Zeller", "HNB/6.jpg"],
            7: ["Dr. Bedelia Du Maurier", "HNB/7.jpg"],
            8: ["Beverly Katz", "HNB/8.jpg"],
            9: ["Abigail Hobbs", "HNB/9.jpg"],
            10: ["Freddie Lounds", "HNB/10.jpg"],
            "N": 10,
            "name": "Hannibal"
        },
        "VD": {
            1: ["Stefan Salvatore", "VD/1.jpg"],
            2: ["Damon Salvatore", "VD/2.jpg"],
            3: ["Bonnie Bennett", "VD/3.jpg"],
            4: ["Caroline Forbes", "VD/4.jpg"],
            5: ["Matt Donovan", "VD/5.jpg"],
            6: ["Elena Gilbert", "VD/6.jpg"],
            "N": 6,
            "name": "The Vampire Diaries"
        },
        "CSI": {
            1: ["Nick Stokes", "CSI/1.jpg"],
            2: ["Greg Sanders", "CSI/2.jpg"],
            3: ["Al Robbins", "CSI/3.jpg"],
            4: ["Captain Jim Brass", "CSI/4.jpg"],
            5: ["Sara Sidle", "CSI/5.jpg"],
            6: ["David Phillips", "CSI/6.jpg"],
            "N": 6,
            "name": "CSI: Crime Scene Investigation"
        },
        "MR": {
            1: ["Elliot Alderson", "MR/1.jpg"],
            2: ["Mr. Robot", "MR/2.jpg"],
            3: ["Darlene", "MR/3.jpg"],
            4: ["Tyrell Wellick", "MR/4.jpg"],
            5: ["Angela Moss", "MR/5.jpg"],
            6: ["Dominique DiPierro", "MR/6.jpg"],
            "N": 6,
            "name": "Mr. Robot"
        },
        "FL": {
            1: ["Barry Allen", "FL/1.jpg"],
            2: ["Iris West", "FL/2.jpg"],
            3: ["Caitlin Snow", "FL/3.jpg"],
            4: ["Cisco Ramon", "FL/4.jpg"],
            5: ["Dr. Harry Wells", "FL/5.jpg"],
            6: ["Joe West", "FL/6.jpg"],
            "N": 6,
            "name": "The Flash"
        },
        "TGD": {
            1: ["Dr. Shaun Murphy", "TGD/1.jpg"],
            2: ["Dr. Claire Browne", "TGD/2.jpg"],
            3: ["Dr. Marcus Andrews", "TGD/3.jpg"],
            4: ["Dr. Aaron Glassman", "TGD/4.jpg"],
            5: ["Dr. Neil Melendez", "TGD/5.jpg"],
            6: ["Dr. Audrey Lim", "TGD/6.jpg"],
            "N": 6,
            "name": "The Good Doctor"
        },
        "V": {
            1: ["Selina Meyer", "V/1.jpg"],
            2: ["Amy Brookheimer", "V/2.jpg"],
            3: ["Gary Walsh", "V/3.jpg"],
            4: ["Dan Egan", "V/4.jpg"],
            5: ["Jonah Ryan", "V/5.jpg"],
            6: ["Mike McLintock", "V/6.jpg"],
            "N": 6,
            "name": "Veep"
        },
        "TGW": {
            1: ["Alicia Florrick", "TGW/1.jpg"],
            2: ["Cary Agos", "TGW/2.jpg"],
            3: ["Diane Lockhart", "TGW/3.jpg"],
            4: ["Kalinda Sharma", "TGW/4.jpg"],
            5: ["Will Gardner", "TGW/5.jpg"],
            6: ["Grace Florrick", "TGW/6.jpg"],
            "N": 6,
            "name": "The Good Wife"
        },
        "OB": {
            1: ["John B", "OB/1.jpg"],
            2: ["Sarah Cameron", "OB/2.jpg"],
            3: ["Kiara", "OB/3.jpg"],
            4: ["Pope", "OB/4.jpg"],
            5: ["JJ", "OB/5.jpg"],
            6: ["Topper", "OB/6.jpg"],
            "N": 6,
            "name": "Outer Banks"
        },
        "MU": {
            1: ["Mulan", "MU/1.jpg"],
            2: ["Mushu", "MU/2.jpg"],
            3: ["Li Shang", "MU/3.jpg"],
            4: ["Yao", "MU/4.jpg"],
            5: ["Chien-Po", "MU/5.jpg"],
            6: ["Ling", "MU/6.jpg"],
            "N": 6,
            "name": "Mulan"
        },
        "KE": {
            1: ["Villanelle", "KE/1.jpg"],
            2: ["Eve Polastri", "KE/2.jpg"],
            3: ["Carolyn Martens", "KE/3.jpg"],
            4: ["Konstantin", "KE/4.jpg"],
            5: ["Niko Polastri", "KE/5.jpg"],
            6: ["Kenny Stowton", "KE/6.jpg"],
            "N": 6,
            "name": "Killing Eve"
        },
        "TIHAY": {
            1: ["Kat Stratford", "TIHAY/1.jpg"],
            2: ["Patrick Verona", "TIHAY/2.jpg"],
            3: ["Cameron James", "TIHAY/3.jpg"],
            4: ["Bianca Stratford", "TIHAY/4.jpg"],
            5: ["Walter Stratford", "TIHAY/5.jpg"],
            6: ["Joey Donner", "TIHAY/6.jpg"],
            "N": 6,
            "name": "10 Things I Hate About You"
        },
        "BC": {
            1: ["John Bender", "BC/1.jpg"],
            2: ["Claire Standish", "BC/2.jpg"],
            3: ["Andrew Clark", "BC/3.jpg"],
            4: ["Brian Johnson", "BC/4.jpg"],
            5: ["Allison Reynolds", "BC/5.jpg"],
            6: ["Principal Vernon", "BC/6.jpg"],
            "N": 6,
            "name": "The Breakfast Club"
        },
        "CSTL": {
            1: ["Richard Castle", "CSTL/1.jpg"],
            2: ["Kate Beckett", "CSTL/2.jpg"],
            3: ["Martha Rodgers", "CSTL/3.jpg"],
            4: ["Javier Esposito", "CSTL/4.jpg"],
            5: ["Kevin Ryan", "CSTL/5.jpg"],
            6: ["Alexis Castle", "CSTL/6.jpg"],
            "N": 6,
            "name": "Castle"
        },
        "DAM": {
            1: ["Patty Hewes", "DAM/1.jpg"],
            2: ["Ellen Parsons", "DAM/2.jpg"],
            3: ["Tom Shayes", "DAM/3.jpg"],
            "N": 3,
            "name": "Damages"
        },
        "BL": {
            1: ["Alan Shore", "BL/1.jpg"],
            2: ["Denny Crane", "BL/2.jpg"],
            3: ["Shirley Schmidt", "BL/3.jpg"],
            "N": 3,
            "name": "Boston Legal"
        },
        "FAR": {
            1: ["John Crichton", "FAR/1.jpg"],
            2: ["Aeryn Sun", "FAR/2.jpg"],
            3: ["Ka D'Argo", "FAR/3.jpg"],
            4: ["Dominar Rygel XVI", "FAR/4.jpg"],
            5: ["Chiana", "FAR/5.jpg"],
            6: ["Scorpius", "FAR/6.jpg"],
            "N": 6,
            "name": "Farscape"
        },
        "FF": {
            1: ["Dominic Toretto", "FF/1.jpg"],
            2: ["Brian O'Conner", "FF/2.jpg"],
            3: ["Letty Ortiz", "FF/3.jpg"],
            4: ["Mia Toretto", "FF/4.jpg"],
            5: ["Han Lue", "FF/5.jpg"],
            6: ["Gisele Yashar", "FF/6.jpg"],
            "N": 6,
            "name": "Fast & Furious"
        },
        "O11": {
            1: ["Danny Ocean", "O11/1.jpg"],
            2: ["Rusty Ryan", "O11/2.jpg"],
            3: ["Linus Caldwell", "O11/3.jpg"],
            4: ["Basher Tarr", "O11/4.jpg"],
            5: ["Terry Benedict", "O11/5.jpg"],
            6: ["Tess Ocean", "O11/6.jpg"],
            "N": 6,
            "name": "Ocean's 11"
        },
        "TDPT": {
            1: ["Billy Costigan", "TDPT/1.jpg"],
            2: ["Colin Sullivan", "TDPT/2.jpg"],
            3: ["Frank Costello", "TDPT/3.jpg"],
            4: ["Sgt. Sean Dignam", "TDPT/4.jpg"],
            5: ["Capt. Oliver Queenan", "TDPT/5.jpg"],
            6: ["Dr. Madolyn Madden", "TDPT/6.jpg"],
            "N": 6,
            "name": "The Departed"
        },
        "SR": {
            1: ["Andy Dufresne", "SR/1.jpg"],
            2: ["Ellis Boyd 'Red' Redding", "SR/2.jpg"],
            3: ["Samuel Norton", "SR/3.jpg"],
            4: ["Heywood", "SR/4.jpg"],
            5: ["Byron Hadley", "SR/5.jpg"],
            6: ["Brooks Hatlen", "SR/6.jpg"],
            "N": 6,
            "name": "The Shawshank Redemption"
        },
        "SOP": {
            1: ["Tony Soprano", "SOP/1.jpg"],
            2: ["Dr. Jennifer Melfi", "SOP/2.jpg"],
            3: ["Carmela Soprano", "SOP/3.jpg"],
            4: ["Christopher Moltisanti", "SOP/4.jpg"],
            5: ["Junior Soprano", "SOP/5.jpg"],
            6: ["Silvio Dante", "SOP/6.jpg"],
            7: ["Paulie 'Walnuts' Gualtieri", "SOP/7.jpg"],
            8: ["A.J. Soprano", "SOP/8.jpg"],
            9: ["Meadow Soprano", "SOP/9.jpg"],
            10: ["Janice Soprano", "SOP/10.jpg"],
            "N": 10,
            "name": "The Sopranos"
        },
        "HIMYM": {
            1: ["Ted Mosby", "HIMYM/1.jpg"],
            2: ["Marshall Eriksen", "HIMYM/2.jpg"],
            3: ["Robin Scherbatsky", "HIMYM/3.jpg"],
            4: ["Barney Stinson", "HIMYM/4.jpg"],
            5: ["Lily Aldrin", "HIMYM/5.jpg"],
            "N": 5,
            "name": "How I Met Your Mother"
        },
        "LS": {
            1: ["Lilo Pelekai", "LS/1.jpg"],
            2: ["Nani Pelekai", "LS/2.jpg"],
            3: ["Dr. Jumba Jookiba", "LS/3.jpg"],
            4: ["Agt. Wendell Pleakley", "LS/4.jpg"],
            5: ["Cobra Bubbles", "LS/5.jpg"],
            6: ["Stitch", "LS/6.jpg"],
            "N": 6,
            "name": "Lilo & Stitch"
        },
        "GF": {
            1: ["Vito Corleone", "GF/1.jpg"],
            2: ["Michael Corleone", "GF/2.jpg"],
            3: ["Sonny Corleone", "GF/3.jpg"],
            4: ["Peter Clemenza", "GF/4.jpg"],
            5: ["Tom Hagen", "GF/5.jpg"],
            6: ["Emilio Barzini", "GF/6.jpg"],
            "N": 6,
            "name": "The Godfather"
        },
        "GWW": {
            1: ["Scarlett O'Hara", "GWW/1.jpg"],
            2: ["Rhett Butler", "GWW/2.jpg"],
            3: ["Melanie Hamilton", "GWW/3.jpg"],
            4: ["Ashley Wilkes", "GWW/4.jpg"],
            5: ["India Wilkes", "GWW/5.jpg"],
            6: ["Mammy", "GWW/6.jpg"],
            "N": 6,
            "name": "Gone With the Wind"
        },
        "TSL": {
            1: ["Clarice Starling", "TSL/1.jpg"],
            2: ["Dr. Hannibal Lecter", "TSL/2.jpg"],
            3: ["Jack Crawford", "TSL/3.jpg"],
            "N": 3,
            "name": "The Silence of the Lambs"
        },
        "TND": {
            1: ["James Bond", "TND/1.jpg"],
            2: ["M", "TND/2.jpg"],
            3: ["Q", "TND/3.jpg"],
            "N": 3,
            "name": "Tommorrow Never Dies"
        },
        "BI": {
            1: ["Jason Bourne", "BI/1.jpg"],
            2: ["Marie Kreutz", "BI/2.jpg"],
            3: ["Alexander Conklin", "BI/3.jpg"],
            "N": 3,
            "name": "The Bourne Identity"
        },
        "RM": {
            1: ["Rick Sanchez", "RM/1.jpg"],
            2: ["Morty Smith", "RM/2.jpg"],
            3: ["Summer Smith", "RM/3.jpg"],
            "N": 3,
            "name": "Rick and Morty"
        },
        "TM": {
            1: ["Mark Watney", "TM/1.jpg"],
            "N": 1,
            "name": "The Martian"
        },
        "AHX": {
            1: ["Danny Vinyard", "AHX/1.jpg"],
            2: ["Derek Vinyard", "AHX/2.jpg"],
            3: ["Dr. Bob Sweeney", "AHX/3.jpg"],
            "N": 3,
            "name": "American History X"
        },
        "R30": {
            1: ["Liz Lemon", "R30/1.jpg"],
            2: ["Tracy Jordan", "R30/2.jpg"],
            3: ["Kenneth Parcell", "R30/3.jpg"],
            4: ["Pete Hornberger", "R30/4.jpg"],
            5: ["Jack Donaghy", "R30/5.jpg"],
            6: ["Jenna Maroney", "R30/6.jpg"],
            "N": 6,
            "name": "30 Rock"
        },
        "UKS": {
            1: ["Kimmy Schmidt", "UKS/1.jpg"],
            2: ["Titus Andromedon", "UKS/2.jpg"],
            3: ["Lillian Kaushtupper", "UKS/3.jpg"],
            4: ["Jacqueline White", "UKS/4.jpg"],
            5: ["Cyndee Pokorny", "UKS/5.jpg"],
            "N": 5,
            "name": "Unbreakable Kimmy Schmidt"
        },
        "BTF": {
            1: ["Marty McFly", "BTF/1.jpg"],
            2: ["Doc Brown", "BTF/2.jpg"],
            3: ["Jennifer Parker", "BTF/3.jpg"],
            "N": 3,
            "name": "Back to the Future"
        },
        "T2": {
            1: ["T-800", "T2/1.jpg"],
            2: ["Sarah Connor", "T2/2.jpg"],
            3: ["John Connor", "T2/3.jpg"],
            "N": 3,
            "name": "Terminator 2: Judgement Day"
        },
        "NES": {
            1: ["Nancy Thompson", "NES/1.jpg"],
            2: ["Donald Thompson", "NES/2.jpg"],
            3: ["Freddy Krueger", "NES/3.jpg"],
            4: ["Glen Lantz", "NES/4.jpg"],
            5: ["Marge Thompson", "NES/5.jpg"],
            "N": 5,
            "name": "A Nightmare on Elm Street"
        },
        "CITW": {
            1: ["Dana Polk", "CITW/1.jpg"],
            2: ["Curt Vaughan", "CITW/2.jpg"],
            3: ["Jules Louden", "CITW/3.jpg"],
            4: ["Marty Mikalski", "CITW/4.jpg"],
            5: ["Holden McCrea", "CITW/5.jpg"],
            6: ["Steve Hadley", "CITW/6.jpg"],
            "N": 6,
            "name": "The Cabin in the Woods"
        },
        "GO": {
            1: ["Chris Washington", "GO/1.jpg"],
            2: ["Rose Armitage", "GO/2.jpg"],
            3: ["Dean Armitage", "GO/3.jpg"],
            4: ["Jeremy Armitage", "GO/4.jpg"],
            5: ["Missy Armitage", "GO/5.jpg"],
            6: ["Rod Williams", "GO/6.jpg"],
            "N": 6,
            "name": "Get Out"
        },
        "SD": {
            1: ["Shaun", "SD/1.jpg"],
            2: ["Ed", "SD/2.jpg"],
            3: ["Liz", "SD/3.jpg"],
            "N": 3,
            "name": "Shaun of the Dead"
        },
        "ZL": {
            1: ["Tallahassee", "ZL/1.jpg"],
            2: ["Columbus", "ZL/2.jpg"],
            3: ["Wichita", "ZL/3.jpg"],
            "N": 3,
            "name": "Zombieland"
        },
        "CXG": {
            1: ["Rebecca Bunch", "CXG/1.jpg"],
            2: ["Paula Proctor", "CXG/2.jpg"],
            3: ["Josh Chan", "CXG/3.jpg"],
            "N": 3,
            "name": "Crazy Ex-Girlfriend"
        },
        "HAM": {
            1: ["Alexander Hamilton", "HAM/1.jpg"],
            2: ["Eliza Hamilton", "HAM/2.jpg"],
            3: ["Aaron Burr", "HAM/3.jpg"],
            4: ["Angelica Schuyler", "HAM/4.jpg"],
            5: ["George Washington", "HAM/5.jpg"],
            6: ["King George III", "HAM/6.jpg"],
            "N": 6,
            "name": "Hamilton"
        },
        "P": {
            1: ["Kim Ki-taek", "P/1.jpg"],
            2: ["Park Dong-ik", "P/2.jpg"],
            3: ["Choi Yeon-gyo", "P/3.jpg"],
            4: ["Kim Ki-woo", "P/4.jpg"],
            5: ["Kim Ki-jung", "P/5.jpg"],
            6: ["Chung-sook", "P/6.jpg"],
            "N": 6,
            "name": "Parasite"
        },
        "MH": {
            1: ["Holden Ford", "MH/1.jpg"],
            2: ["Bill Tench", "MH/2.jpg"],
            3: ["Dr. Wendy Carr", "MH/3.jpg"],
            "N": 3,
            "name": "Mindhunter"
        },
        "MMFR": {
            1: ["Max Rockatansky", "MMFR/1.jpg"],
            2: ["Imperator Furiosa", "MMFR/2.jpg"],
            3: ["Nux", "MMFR/3.jpg"],
            "N": 3,
            "name": "Mad Max: Fury Road"
        },
        "GLAD": {
            1: ["Maximus", "GLAD/1.jpg"],
            2: ["Commodus", "GLAD/2.jpg"],
            3: ["Lucilla", "GLAD/3.jpg"],
            "N": 3,
            "name": "Gladiator"
        },
        "ESSM": {
            1: ["Joel Barish", "ESSM/1.jpg"],
            2: ["Clementine Kruczynski", "ESSM/2.jpg"],
            3: ["Mary Svevo", "ESSM/3.jpg"],
            "N": 3,
            "name": "Eternal Sunshine of the Spotless Mind"
        },
        "SUC": {
            1: ["Logan Roy", "SUC/1.jpg"],
            2: ["Roman Roy", "SUC/2.jpg"],
            3: ["Shiv Roy", "SUC/3.jpg"],
            4: ["Kendall Roy", "SUC/4.jpg"],
            5: ["Marcia Roy", "SUC/5.jpg"],
            6: ["Greg Hirsch", "SUC/6.jpg"],
            7: ["Frank Vernon", "SUC/7.jpg"],
            8: ["Tom Wambsgans", "SUC/8.jpg"],
            9: ["Connor Roy", "SUC/9.jpg"],
            10: ["Lawrence Yee", "SUC/10.jpg"],
            "N": 10,
            "name": "Succession"
        },
        "SN": {
            1: ["Mark Zuckerberg", "SN/1.jpg"],
            2: ["Eduardo Saverin", "SN/2.jpg"],
            3: ["Sean Parker", "SN/3.jpg"],
            4: ["Tyler Winklevoss", "SN/4.jpg"],
            5: ["Divya Narendra", "SN/5.jpg"],
            6: ["Christy Lee", "SN/6.jpg"],
            "N": 6,
            "name": "The Social Network"
        },
        "HUS": {
            1: ["Destiny", "HUS/1.jpg"],
            2: ["Ramona Vega", "HUS/2.jpg"],
            3: ["Elizabeth", "HUS/3.jpg"],
            "N": 3,
            "name": "Hustlers"
        },
        "BS": {
            1: ["Nina Sayers", "BS/1.jpg"],
            2: ["Lily", "BS/2.jpg"],
            3: ["Thomas Leroy", "BS/3.jpg"],
            "N": 3,
            "name": "Black Swan"
        },
        "TRNF": {
            1: ["Sam Witwicky", "TRNF/1.jpg"],
            2: ["Mikaela Banes", "TRNF/2.jpg"],
            3: ["Bumblebee", "TRNF/3.jpg"],
            4: ["Optimus Prime", "TRNF/4.jpg"],
            5: ["Megatron", "TRNF/5.jpg"],
            "N": 5,
            "name": "Transformers"
        },
        "MLP": {
            1: ["Applejack", "MLP/1.jpg"],
            2: ["Twilight Sparkle", "MLP/2.jpg"],
            3: ["Rarity", "MLP/3.jpg"],
            4: ["Pinkie Pie", "MLP/4.jpg"],
            5: ["Spike", "MLP/5.jpg"],
            6: ["Princess Celestia", "MLP/6.jpg"],
            "N": 6,
            "name": "My Little Pony: Friendship Is Magic"
        },
        "SP": {
            1: ["Stan Marsh", "SP/1.jpg"],
            2: ["Kyle Broflovski", "SP/2.jpg"],
            3: ["Eric Cartman", "SP/3.jpg"],
            4: ["Kenny McCormick", "SP/4.jpg"],
            5: ["Leopold 'Butters' Stotch", "SP/5.jpg"],
            "N": 5,
            "name": "South Park"
        },
        "NG": {
            1: ["Jess Day", "NG/1.jpg"],
            2: ["Nick Miller", "NG/2.jpg"],
            3: ["Schmidt", "NG/3.jpg"],
            4: ["Cece Parekh", "NG/4.jpg"],
            5: ["Winston Bishop", "NG/5.jpg"],
            "N": 5,
            "name": "New Girl"
        },
        "LM": {
            1: ["Jean Valjean", "LM/1.jpg"],
            2: ["Javert", "LM/2.jpg"],
            3: ["Fantine", "LM/3.jpg"],
            4: ["Cosette", "LM/4.jpg"],
            5: ["Marius Pontmercy", "LM/5.jpg"],
            "N": 5,
            "name": "Les Mis&#xE9;rables"
        },
        "GILG": {
            1: ["Lorelai Gilmore", "GILG/1.jpg"],
            2: ["Rory Gilmore", "GILG/2.jpg"],
            3: ["Lane Kim", "GILG/3.jpg"],
            4: ["Luke Danes", "GILG/4.jpg"],
            5: ["Michel Gerard", "GILG/5.jpg"],
            6: ["Emily Gilmore", "GILG/6.jpg"],
            7: ["Richard Gilmore", "GILG/7.jpg"],
            8: ["Sookie St. James", "GILG/8.jpg"],
            9: ["Kirk Gleason", "GILG/9.jpg"],
            10: ["Paris Geller", "GILG/10.jpg"],
            11: ["Miss Patty", "GILG/11.jpg"],
            12: ["Dean Forester", "GILG/12.jpg"],
            13: ["Logan Huntzberger", "GILG/13.jpg"],
            14: ["Jackson Belleville", "GILG/14.jpg"],
            15: ["Taylor Doose", "GILG/15.jpg"],
            "N": 15,
            "name": "Gilmore Girls"
        },
        "ARCH": {
            1: ["Sterling Archer", "ARCH/1.jpg"],
            2: ["Malory Archer", "ARCH/2.jpg"],
            3: ["Cyril Figgis", "ARCH/3.jpg"],
            4: ["Cheryl Tunt", "ARCH/4.jpg"],
            5: ["Pamela Poovey", "ARCH/5.jpg"],
            6: ["Lana Kane", "ARCH/6.jpg"],
            "N": 6,
            "name": "Archer"
        },
        "GB": {
            1: ["Peter Venkman", "GB/1.jpg"],
            2: ["Ray Stantz", "GB/2.jpg"],
            3: ["Egon Spengler", "GB/3.jpg"],
            4: ["Dana Barrett", "GB/4.jpg"],
            5: ["Louis Tully", "GB/5.jpg"],
            "N": 5,
            "name": "Ghostbusters"
        },
        "DWP": {
            1: ["Miranda Priestly", "DWP/1.jpg"],
            2: ["Andrea Sachs", "DWP/2.jpg"],
            3: ["Emily Charlton", "DWP/3.jpg"],
            "N": 3,
            "name": "The Devil Wears Prada"
        },
        "SPEED": {
            1: ["Jack Traven", "SPEED/1.jpg"],
            2: ["Howard Payne", "SPEED/2.jpg"],
            3: ["Annie Porter", "SPEED/3.jpg"],
            "N": 3,
            "name": "Speed"
        },
        "LU": {
            1: ["Lucifer Morningstar", "LU/1.jpg"],
            2: ["Chloe Decker", "LU/2.jpg"],
            3: ["Dan Espinoza", "LU/3.jpg"],
            4: ["Amenadiel", "LU/4.jpg"],
            5: ["Mazikeen", "LU/5.jpg"],
            6: ["Linda Martin", "LU/6.jpg"],
            "N": 6,
            "name": "Lucifer"
        },
        "Y": {
            1: ["John Dutton", "Y/1.jpg"],
            2: ["Kayce Dutton", "Y/2.jpg"],
            3: ["Beth Dutton", "Y/3.jpg"],
            4: ["Jamie Dutton", "Y/4.jpg"],
            5: ["Rip Wheeler", "Y/5.jpg"],
            6: ["Monica Dutton", "Y/6.jpg"],
            7: ["Jimmy Hurdstrom", "Y/7.jpg"],
            8: ["Thomas Rainwater", "Y/8.jpg"],
            9: ["Lloyd", "Y/9.jpg"],
            10: ["Colby", "Y/10.jpg"],
            "N": 10,
            "name": "Yellowstone"
        },
        "TF": {
            1: ["Stella Gibson", "TF/1.jpg"],
            2: ["Paul Spector", "TF/2.jpg"],
            3: ["Jim Burns", "TF/3.jpg"],
            "N": 3,
            "name": "The Fall"
        },
        "PK": {
            1: ["Ash Ketchum", "PK/1.jpg"],
            2: ["Misty", "PK/2.jpg"],
            3: ["Brock", "PK/3.jpg"],
            4: ["Professor Oak", "PK/4.jpg"],
            5: ["Jessie", "PK/5.jpg"],
            "N": 5,
            "name": "Pok&#xE9;mon"
        },
        "FR": {
            1: ["Anna", "FR/1.jpg"],
            2: ["Elsa", "FR/2.jpg"],
            3: ["Kristoff", "FR/3.jpg"],
            4: ["Olaf", "FR/4.jpg"],
            5: ["Hans", "FR/5.jpg"],
            "N": 5,
            "name": "Frozen"
        },
        "SM": {
            1: ["Sailor Moon", "SM/1.jpg"],
            2: ["Tuxedo Mask", "SM/2.jpg"],
            3: ["Sailor Mercury", "SM/3.jpg"],
            4: ["Sailor Mars", "SM/4.jpg"],
            5: ["Sailor Jupiter", "SM/5.jpg"],
            6: ["Sailor Venus", "SM/6.jpg"],
            "N": 6,
            "name": "Sailor Moon"
        },
        "WSS": {
            1: ["Maria", "WSS/1.jpg"],
            2: ["Tony", "WSS/2.jpg"],
            3: ["Riff", "WSS/3.jpg"],
            4: ["Anita", "WSS/4.jpg"],
            5: ["Lieutenant Schrank", "WSS/5.jpg"],
            "N": 5,
            "name": "West Side Story"
        },
        "VK": {
            1: ["Lagertha", "VK/1.jpg"],
            2: ["Bjorn Lothbrok", "VK/2.jpg"],
            3: ["Floki", "VK/3.jpg"],
            4: ["Torvi", "VK/4.jpg"],
            5: ["Ragnar Lothbrok", "VK/5.jpg"],
            6: ["Rollo Sigurdsson", "VK/6.jpg"],
            7: ["Ivar Ragnarsson", "VK/7.jpg"],
            8: ["Harald Finehair", "VK/8.jpg"],
            9: ["Ubbe Ragnarsson", "VK/9.jpg"],
            10: ["Judith of Northumbria", "VK/10.jpg"],
            "N": 10,
            "name": "Vikings"
        },
        "ENT": {
            1: ["Eric Murphy", "ENT/1.jpg"],
            2: ["Vincent Chase", "ENT/2.jpg"],
            3: ["Johnny 'Drama' Chase", "ENT/3.jpg"],
            4: ["Turtle", "ENT/4.jpg"],
            5: ["Ari Gold", "ENT/5.jpg"],
            "N": 5,
            "name": "Entourage"
        },
        "BLL": {
            1: ["John Rayburn", "BLL/1.jpg"],
            2: ["Meg Rayburn", "BLL/2.jpg"],
            3: ["Kevin Rayburn", "BLL/3.jpg"],
            4: ["Diana Rayburn", "BLL/4.jpg"],
            5: ["Eric O'Bannon", "BLL/5.jpg"],
            6: ["Sally Rayburn", "BLL/6.jpg"],
            "N": 6,
            "name": "Bloodline"
        },
        "SU": {
            1: ["Sam Winchester", "SU/1.jpg"],
            2: ["Dean Winchester", "SU/2.jpg"],
            3: ["Castiel", "SU/3.jpg"],
            "N": 3,
            "name": "Supernatural"
        },
        "EG": {
            1: ["Ender Wiggin", "EG/1.jpg"],
            2: ["Colonel Graff", "EG/2.jpg"],
            3: ["Petra Arkanian", "EG/3.jpg"],
            4: ["Valentine Wiggin", "EG/4.jpg"],
            5: ["Peter Wiggin", "EG/5.jpg"],
            6: ["Bean", "EG/6.jpg"],
            "N": 6,
            "name": "Ender's Game"
        },
        "XM": {
            1: ["Wolverine", "XM/1.jpg"],
            2: ["Professor X", "XM/2.jpg"],
            3: ["Magneto", "XM/3.jpg"],
            4: ["Mystique", "XM/4.jpg"],
            5: ["Jean Grey", "XM/5.jpg"],
            6: ["Cyclops", "XM/6.jpg"],
            7: ["Storm", "XM/7.jpg"],
            8: ["Rogue", "XM/8.jpg"],
            9: ["Iceman", "XM/9.jpg"],
            10: ["Colossus", "XM/10.jpg"],
            "N": 10,
            "name": "X-Men"
        },
        "SG": {
            1: ["Kara Danvers", "SG/1.jpg"],
            2: ["Alex Danvers", "SG/2.jpg"],
            3: ["J'onn J'onzz", "SG/3.jpg"],
            4: ["James Olsen", "SG/4.jpg"],
            5: ["Lena Luthor", "SG/5.jpg"],
            6: ["Winn Schott", "SG/6.jpg"],
            "N": 6,
            "name": "Supergirl"
        },
        "FN": {
            1: ["Nemo", "FN/1.jpg"],
            2: ["Marlin", "FN/2.jpg"],
            3: ["Dory", "FN/3.jpg"],
            "N": 3,
            "name": "Finding Nemo"
        },
        "LEGO": {
            1: ["Lord Business", "LEGO/1.jpg"],
            2: ["Vitruvius", "LEGO/2.jpg"],
            3: ["Emmet Brickowski", "LEGO/3.jpg"],
            4: ["Wyldstyle", "LEGO/4.jpg"],
            5: ["Batman", "LEGO/5.jpg"],
            "N": 5,
            "name": "The Lego Movie"
        },
        "TLM": {
            1: ["Princess Ariel", "TLM/1.jpg"],
            2: ["Ursula", "TLM/2.jpg"],
            3: ["Flounder", "TLM/3.jpg"],
            "N": 3,
            "name": "The Little Mermaid"
        },
        "SNW": {
            1: ["Snow White", "SNW/1.jpg"],
            2: ["The Queen", "SNW/2.jpg"],
            3: ["Doc", "SNW/3.jpg"],
            "N": 3,
            "name": "Snow White and the Seven Dwarfs"
        },
        "S7": {
            1: ["David Mills", "S7/1.jpg"],
            2: ["William Somerset", "S7/2.jpg"],
            3: ["Tracy Mills", "S7/3.jpg"],
            "N": 3,
            "name": "Se7en"
        },
        "GONEG": {
            1: ["Nick Dunne", "GONEG/1.jpg"],
            2: ["Amy Elliott Dunne", "GONEG/2.jpg"],
            3: ["Margo Dunne", "GONEG/3.jpg"],
            "N": 3,
            "name": "Gone Girl"
        },
        "TN": {
            1: ["Noah Calhoun", "TN/1.jpg"],
            2: ["Allison Hamilton", "TN/2.jpg"],
            3: ["Lon Hammond, Jr.", "TN/3.jpg"],
            "N": 3,
            "name": "The Notebook"
        },
        "BDS": {
            1: ["Paul Smecker", "BDS/1.jpg"],
            2: ["Connor MacManus", "BDS/2.jpg"],
            3: ["Murphy MacManus", "BDS/3.jpg"],
            4: ["David Della Rocco", "BDS/4.jpg"],
            5: ["Don Giuseppe 'Papa Joe' Yakavetta", "BDS/5.jpg"],
            "N": 5,
            "name": "The Boondock Saints"
        },
        "ASP": {
            1: ["Charlie Kelly", "ASP/1.jpg"],
            2: ["Dennis Reynolds", "ASP/2.jpg"],
            3: ["Mac", "ASP/3.jpg"],
            4: ["Dee Reynolds", "ASP/4.jpg"],
            5: ["Frank Reynolds", "ASP/5.jpg"],
            "N": 5,
            "name": "It's Always Sunny in Philadelphia"
        },
        "SUI": {
            1: ["Harvey Specter", "SUI/1.jpg"],
            2: ["Louis Litt", "SUI/2.jpg"],
            3: ["Donna Paulsen", "SUI/3.jpg"],
            4: ["Mike Ross", "SUI/4.jpg"],
            5: ["Rachel Zane", "SUI/5.jpg"],
            6: ["Jessica Pearson", "SUI/6.jpg"],
            "N": 6,
            "name": "Suits"
        },
        "MONH": {
            1: ["Tokio", "MONH/1.jpg"],
            2: ["El Profesor", "MONH/2.jpg"],
            3: ["Raquel Murillo", "MONH/3.jpg"],
            4: ["Berlin", "MONH/4.jpg"],
            5: ["Rio", "MONH/5.jpg"],
            6: ["Denver", "MONH/6.jpg"],
            7: ["Monica Gaztambide", "MONH/7.jpg"],
            8: ["Arturo Roman", "MONH/8.jpg"],
            9: ["Helsinki", "MONH/9.jpg"],
            10: ["Nairobi", "MONH/10.jpg"],
            "N": 10,
            "name": "Money Heist"
        },
        "AoS": {
            1: ["Phil Coulson", "AoS/1.jpg"],
            2: ["Melinda May", "AoS/2.jpg"],
            3: ["Daisy 'Skye' Johnson", "AoS/3.jpg"],
            4: ["Jemma Simmons", "AoS/4.jpg"],
            5: ["Leo Fitz", "AoS/5.jpg"],
            6: ["Alphonso 'Mack' Mackenzie", "AoS/6.jpg"],
            "N": 6,
            "name": "Agents of S.H.I.E.L.D."
        },
        "HT": {
            1: ["June Osborne", "HT/1.jpg"],
            2: ["Rita", "HT/2.jpg"],
            3: ["Janine Lindo", "HT/3.jpg"],
            4: ["Nick Blaine", "HT/4.jpg"],
            5: ["Serena Joy Waterford", "HT/5.jpg"],
            "N": 5,
            "name": "The Handmaid's Tale"
        },
        "OUT": {
            1: ["Regina Mills", "OUT/1.jpg"],
            2: ["Mr. Gold", "OUT/2.jpg"],
            3: ["Henry Mills", "OUT/3.jpg"],
            4: ["Emma Swan", "OUT/4.jpg"],
            5: ["Mary Margaret Blanchard", "OUT/5.jpg"],
            6: ["David Nolan", "OUT/6.jpg"],
            7: ["Captain Killian 'Hook' Jones", "OUT/7.jpg"],
            8: ["Belle French", "OUT/8.jpg"],
            9: ["Zelena", "OUT/9.jpg"],
            10: ["Granny Lucas", "OUT/10.jpg"],
            "N": 10,
            "name": "Once Upon a Time"
        },
        "SMV": {
            1: ["Clark Kent", "SMV/1.jpg"],
            2: ["Chloe Sullivan", "SMV/2.jpg"],
            3: ["Lana Lang", "SMV/3.jpg"],
            4: ["Lex Luthor", "SMV/4.jpg"],
            5: ["Lionel Luthor", "SMV/5.jpg"],
            6: ["Lois Lane", "SMV/6.jpg"],
            "N": 6,
            "name": "Smallville"
        },
        "AL": {
            1: ["Aladdin", "AL/1.jpg"],
            2: ["Genie", "AL/2.jpg"],
            3: ["Jasmine", "AL/3.jpg"],
            "N": 3,
            "name": "Aladdin"
        },
        "OL": {
            1: ["Claire Randall", "OL/1.jpg"],
            2: ["Jamie Fraser", "OL/2.jpg"],
            3: ["Murtagh Fraser", "OL/3.jpg"],
            "N": 3,
            "name": "Outlander"
        },
        "BATB": {
            1: ["Belle", "BATB/1.jpg"],
            2: ["Gaston", "BATB/2.jpg"],
            3: ["Maurice", "BATB/3.jpg"],
            4: ["Cogsworth", "BATB/4.jpg"],
            5: ["Lumiere", "BATB/5.jpg"],
            6: ["Beast", "BATB/6.jpg"],
            "N": 6,
            "name": "Beauty and the Beast"
        },
        "PBWF": {
            1: ["Charlie Kelmeckis", "PBWF/1.jpg"],
            2: ["Sam Button", "PBWF/2.jpg"],
            3: ["Patrick Stewart", "PBWF/3.jpg"],
            "N": 3,
            "name": "The Perks of Being a Wallflower"
        },
        "DHSAB": {
            1: ["Dr. Horrible", "DHSAB/1.jpg"],
            2: ["Captain Hammer", "DHSAB/2.jpg"],
            3: ["Penny", "DHSAB/3.jpg"],
            "N": 3,
            "name": "Dr. Horrible's Sing-Along Blog"
        },
        "BCS": {
            1: ["Jimmy McGill", "BCS/1.jpg"],
            2: ["Mike Ehrmantraut", "BCS/2.jpg"],
            3: ["Kim Wexler", "BCS/3.jpg"],
            4: ["Howard Hamlin", "BCS/4.jpg"],
            5: ["Nacho Varga", "BCS/5.jpg"],
            6: ["Chuck McGill", "BCS/6.jpg"],
            "N": 6,
            "name": "Better Call Saul"
        },
        "BW": {
            1: ["Mitch Buchannon", "BW/1.jpg"],
            2: ["Hobie Buchannon", "BW/2.jpg"],
            3: ["Michael 'Newmie' Newman", "BW/3.jpg"],
            4: ["C.J. Parker", "BW/4.jpg"],
            5: ["Garner Ellerbee", "BW/5.jpg"],
            6: ["Stephanie Holden", "BW/6.jpg"],
            "N": 6,
            "name": "Baywatch"
        },
        "JV": {
            1: ["Jane Villanueva", "JV/1.jpg"],
            2: ["Xiomara Villanueva", "JV/2.jpg"],
            3: ["Petra Solano", "JV/3.jpg"],
            4: ["Alba Villanueva", "JV/4.jpg"],
            5: ["Rogelio De La Vega", "JV/5.jpg"],
            6: ["Rafael Solano", "JV/6.jpg"],
            "N": 6,
            "name": "Jane the Virgin"
        },
        "GTH": {
            1: ["James Gordon", "GTH/1.jpg"],
            2: ["Harvey Bullock", "GTH/2.jpg"],
            3: ["Bruce Wayne", "GTH/3.jpg"],
            4: ["Oswald Cobblepot", "GTH/4.jpg"],
            5: ["Selina Kyle", "GTH/5.jpg"],
            6: ["Edward Nygma", "GTH/6.jpg"],
            7: ["Alfred Pennyworth", "GTH/7.jpg"],
            8: ["Barbara Kean", "GTH/8.jpg"],
            9: ["Leslie Thompkins", "GTH/9.jpg"],
            10: ["Lucius Fox", "GTH/10.jpg"],
            "N": 10,
            "name": "Gotham"
        },
        "DGI": {
            1: ["Archie 'Snake' Simpson", "DGI/1.jpg"],
            2: ["Clare Edwards", "DGI/2.jpg"],
            3: ["Alli Bhandari", "DGI/3.jpg"],
            4: ["Connor Deslauriers", "DGI/4.jpg"],
            5: ["Gavin 'Spinner' Mason", "DGI/5.jpg"],
            6: ["Emma Nelson", "DGI/6.jpg"],
            7: ["Manny Santos", "DGI/7.jpg"],
            8: ["Drew Torres", "DGI/8.jpg"],
            9: ["Jenna Middleton", "DGI/9.jpg"],
            10: ["Liberty Van Zandt", "DGI/10.jpg"],
            "N": 10,
            "name": "Degrassi: The Next Generation"
        },
        "RAT": {
            1: ["Remy", "RAT/1.jpg"],
            2: ["Alfredo Linguini", "RAT/2.jpg"],
            3: ["Chef Skinner", "RAT/3.jpg"],
            "N": 3,
            "name": "Ratatouille"
        },
        "COCO": {
            1: ["Miguel", "COCO/1.jpg"],
            2: ["H&#xE9;ctor", "COCO/2.jpg"],
            3: ["Ernesto de la Cruz", "COCO/3.jpg"],
            4: ["Mam&#xE1; Imelda", "COCO/4.jpg"],
            5: ["Mam&#xE1; Coco", "COCO/5.jpg"],
            "N": 5,
            "name": "Coco"
        },
        "S8": {
            1: ["Sun Bak", "S8/1.jpg"],
            2: ["Nomi Marks", "S8/2.jpg"],
            3: ["Kala Dandekar", "S8/3.jpg"],
            4: ["Riley Blue", "S8/4.jpg"],
            5: ["Wolfgang Bogdanow", "S8/5.jpg"],
            6: ["Lito Rodriguez", "S8/6.jpg"],
            7: ["Will Gorski", "S8/7.jpg"],
            8: ["Angelica Turing", "S8/8.jpg"],
            9: ["Amanita Caplan", "S8/9.jpg"],
            10: ["Hernando Fuentes", "S8/10.jpg"],
            "N": 10,
            "name": "Sense8"
        },
        "ID": {
            1: ["Steven Hiller", "ID/1.jpg"],
            2: ["Thomas J. Whitmore", "ID/2.jpg"],
            3: ["David Levinson", "ID/3.jpg"],
            "N": 3,
            "name": "Independence Day"
        },
        "SHL": {
            1: ["Frank Gallagher", "SHL/1.jpg"],
            2: ["Carl Gallagher", "SHL/2.jpg"],
            3: ["Lip Gallagher", "SHL/3.jpg"],
            4: ["Veronica Fisher", "SHL/4.jpg"],
            5: ["Kevin Ball", "SHL/5.jpg"],
            6: ["Debbie Gallagher", "SHL/6.jpg"],
            7: ["Ian Gallagher", "SHL/7.jpg"],
            8: ["Fiona Gallagher", "SHL/8.jpg"],
            9: ["Tommy", "SHL/9.jpg"],
            10: ["Kermit", "SHL/10.jpg"],
            "N": 10,
            "name": "Shameless"
        },
        "BOBB": {
            1: ["Bob Belcher", "BOBB/1.jpg"],
            2: ["Linda Belcher", "BOBB/2.jpg"],
            3: ["Tina Belcher", "BOBB/3.jpg"],
            4: ["Gene Belcher", "BOBB/4.jpg"],
            5: ["Louise Belcher", "BOBB/5.jpg"],
            "N": 5,
            "name": "Bob's Burgers"
        },
        "FB": {
            1: ["Fleabag", "FB/1.jpg"],
            2: ["Claire", "FB/2.jpg"],
            3: ["Godmother", "FB/3.jpg"],
            "N": 3,
            "name": "Fleabag"
        },
        "OD": {
            1: ["Odysseus", "OD/1.jpg"],
            2: ["Telemachus", "OD/2.jpg"],
            3: ["Penelope", "OD/3.jpg"],
            "N": 3,
            "name": "The Odyssey"
        },
        "PSY": {
            1: ["Shawn Spencer", "PSY/1.jpg"],
            2: ["Burton Guster", "PSY/2.jpg"],
            3: ["Carlton Lassiter", "PSY/3.jpg"],
            4: ["Juliet O'Hara", "PSY/4.jpg"],
            5: ["Henry Spencer", "PSY/5.jpg"],
            6: ["Karen Vick", "PSY/6.jpg"],
            "N": 6,
            "name": "Psych"
        },
        "WC": {
            1: ["Neal Caffrey", "WC/1.jpg"],
            2: ["Peter Burke", "WC/2.jpg"],
            3: ["Mozzie", "WC/3.jpg"],
            4: ["Elizabeth Burke", "WC/4.jpg"],
            5: ["Clinton Jones", "WC/5.jpg"],
            6: ["Diana Barrigan", "WC/6.jpg"],
            "N": 6,
            "name": "White Collar"
        },
        "B": {
            1: ["Temperance Brennan", "B/1.jpg"],
            2: ["Seeley Booth", "B/2.jpg"],
            3: ["Angela Montenegro", "B/3.jpg"],
            4: ["Jack Hodgins", "B/4.jpg"],
            5: ["Camille Saroyan", "B/5.jpg"],
            "N": 5,
            "name": "Bones"
        },
        "CH": {
            1: ["Calvin", "CH/1.jpg"],
            2: ["Hobbes", "CH/2.jpg"],
            3: ["Calvin's dad", "CH/3.jpg"],
            4: ["Calvin's mom", "CH/4.jpg"],
            5: ["Susie Derkins", "CH/5.jpg"],
            "N": 5,
            "name": "Calvin and Hobbes"
        },
        "PA": {
            1: ["Jonathan 'Gabe' Gabriel", "PA/1.jpg"],
            2: ["Tycho Brahe", "PA/2.jpg"],
            3: ["Anne Claire 'Annarchy' Brahe", "PA/3.jpg"],
            "N": 2,
            "name": "Penny Arcade"
        },
        "TA": {
            1: ["Elizabeth Jennings", "TA/1.jpg"],
            2: ["Philip Jennings", "TA/2.jpg"],
            3: ["Henry Jennings", "TA/3.jpg"],
            4: ["Paige Jennings", "TA/4.jpg"],
            5: ["Stan Beeman", "TA/5.jpg"],
            "N": 5,
            "name": "The Americans"
        },
        "ST": {
            1: ["Joyce Byers", "ST/1.jpg"],
            2: ["Jim Hopper", "ST/2.jpg"],
            3: ["Mike Wheeler", "ST/3.jpg"],
            4: ["Eleven", "ST/4.jpg"],
            5: ["Dustin Henderson", "ST/5.jpg"],
            6: ["Lucas Sinclair", "ST/6.jpg"],
            7: ["Nancy Wheeler", "ST/7.jpg"],
            8: ["Jonathan Byers", "ST/8.jpg"],
            9: ["Steve Harrington", "ST/9.jpg"],
            10: ["Karen Wheeler", "ST/10.jpg"],
            11: ["Will Byers", "ST/11.jpg"],
            12: ["Max Mayfield", "ST/12.jpg"],
            13: ["Erica Sinclair", "ST/13.jpg"],
            14: ["Billy Hargrove", "ST/14.jpg"],
            15: ["Robin Buckley", "ST/15.jpg"],
            "N": 15,
            "name": "Stranger Things"
        },
        "TT": {
            1: ["Jack Dawson", "TT/1.jpg"],
            2: ["Rose DeWitt Bukater", "TT/2.jpg"],
            3: ["Cal Hockley", "TT/3.jpg"],
            "N": 3,
            "name": "Titanic"
        },
        "SK": {
            1: ["Shrek", "SK/1.jpg"],
            2: ["Donkey", "SK/2.jpg"],
            3: ["Princess Fiona", "SK/3.jpg"],
            "N": 3,
            "name": "Shrek"
        },
        "MHC": {
            1: ["Juliana Crain", "MHC/1.jpg"],
            2: ["Inspector Kido", "MHC/2.jpg"],
            3: ["John Smith", "MHC/3.jpg"],
            "N": 3,
            "name": "The Man in the High Castle"
        },
        "HO": {
            1: ["Phil", "HO/1.jpg"],
            2: ["Stu", "HO/2.jpg"],
            3: ["Alan", "HO/3.jpg"],
            "N": 3,
            "name": "The Hangover"
        },
        "CAD": {
            1: ["Ethan Ryan MacManus", "CAD/1.jpg"],
            2: ["Lucas Davidowicz", "CAD/2.jpg"],
            3: ["Lilah MacManus", "CAD/3.jpg"],
            "N": 3,
            "name": "Ctrl+Alt+Del"
        },
        "GWH": {
            1: ["Will Hunting", "GWH/1.jpg"],
            2: ["Skylar", "GWH/2.jpg"],
            3: ["Dr. Sean Maguire", "GWH/3.jpg"],
            "N": 3,
            "name": "Good Will Hunting"
        },
        "PYO": {
            1: ["Norman Bates", "PYO/1.jpg"],
            2: ["Marion Crane", "PYO/2.jpg"],
            3: ["Lila Crane", "PYO/3.jpg"],
            "N": 3,
            "name": "Psycho"
        },
        "MF": {
            1: ["Jay Pritchett", "MF/1.jpg"],
            2: ["Gloria Delgado-Pritchett", "MF/2.jpg"],
            3: ["Claire Dunphy", "MF/3.jpg"],
            4: ["Phil Dunphy", "MF/4.jpg"],
            5: ["Mitchell Pritchett", "MF/5.jpg"],
            6: ["Cameron Tucker", "MF/6.jpg"],
            7: ["Luke Dunphy", "MF/7.jpg"],
            8: ["Manny Delgado", "MF/8.jpg"],
            9: ["Haley Dunphy", "MF/9.jpg"],
            10: ["Alex Dunphy", "MF/10.jpg"],
            "N": 10,
            "name": "Modern Family"
        },
        "DARK": {
            1: ["Jonas Kahnwald", "DARK/1.jpg"],
            2: ["Charlotte Doppler", "DARK/2.jpg"],
            3: ["Martha Nielsen", "DARK/3.jpg"],
            4: ["Hannah Kahnwald", "DARK/4.jpg"],
            5: ["Peter Doppler", "DARK/5.jpg"],
            6: ["Katharina Nielsen", "DARK/6.jpg"],
            "N": 6,
            "name": "Dark"
        },
        "CM": {
            1: ["Dr. Spencer Reid", "CM/1.jpg"],
            2: ["Penelope Garcia", "CM/2.jpg"],
            3: ["Jennifer Jareau", "CM/3.jpg"],
            4: ["David Rossi", "CM/4.jpg"],
            5: ["Aaron Hotchner", "CM/5.jpg"],
            6: ["Derek Morgan", "CM/6.jpg"],
            "N": 6,
            "name": "Criminal Minds"
        },
        "PKB": {
            1: ["Thomas Shelby", "PKB/1.jpg"],
            2: ["Arthur Shelby", "PKB/2.jpg"],
            3: ["Aunt Polly", "PKB/3.jpg"],
            4: ["Ada Shelby", "PKB/4.jpg"],
            5: ["Charlie Strong", "PKB/5.jpg"],
            6: ["Michael Gray", "PKB/6.jpg"],
            "N": 6,
            "name": "Peaky Blinders"
        },
        "SA": {
            1: ["Jackson 'Jax' Teller", "SA/1.jpg"],
            2: ["Gemma Teller Morrow", "SA/2.jpg"],
            3: ["Robert 'Bobby Elvis' Munson", "SA/3.jpg"],
            4: ["Alexander 'Tig' Trager", "SA/4.jpg"],
            5: ["Filip 'Chibs' Telford", "SA/5.jpg"],
            "N": 5,
            "name": "Sons of Anarchy"
        },
        "EM": {
            1: ["Caleb Smith", "EM/1.jpg"],
            2: ["Nathan Bateman", "EM/2.jpg"],
            3: ["Ava", "EM/3.jpg"],
            "N": 3,
            "name": "Ex Machina"
        },
        "TRT": {
            1: ["Tugg Speedman", "TRT/1.jpg"],
            2: ["Jeff Portnoy", "TRT/2.jpg"],
            3: ["Kirk Lazarus", "TRT/3.jpg"],
            "N": 3,
            "name": "Tropic Thunder"
        },
        "TB": {
            1: ["Billy Butcher", "TB/1.jpg"],
            2: ["Hughie Campbell", "TB/2.jpg"],
            3: ["Homelander", "TB/3.jpg"],
            4: ["Annie January", "TB/4.jpg"],
            5: ["Queen Maeve", "TB/5.jpg"],
            6: ["A-Train", "TB/6.jpg"],
            7: ["Mother's Milk", "TB/7.jpg"],
            8: ["The Deep", "TB/8.jpg"],
            9: ["Frenchie", "TB/9.jpg"],
            10: ["Kimiko Miyashiro", "TB/10.jpg"],
            11: ["Black Noir", "TB/11.jpg"],
            12: ["Ashley Barrett", "TB/12.jpg"],
            13: ["Madelyn Stillwell", "TB/13.jpg"],
            14: ["Becca Butcher", "TB/14.jpg"],
            15: ["Stormfront", "TB/15.jpg"],
            "N": 15,
            "name": "The Boys"
        },
        "WE": {
            1: ["Wynonna Earp", "WE/1.jpg"],
            2: ["Doc Holliday", "WE/2.jpg"],
            3: ["Waverly Earp", "WE/3.jpg"],
            4: ["Nicole Haught", "WE/4.jpg"],
            5: ["Jeremy Chetri", "WE/5.jpg"],
            "N": 5,
            "name": "Wynonna Earp"
        },
        "FUTR": {
            1: ["Philip J. Fry", "FUTR/1.jpg"],
            2: ["Turanga Leela", "FUTR/2.jpg"],
            3: ["Bender Bending Rodriguez", "FUTR/3.jpg"],
            4: ["Professor Hubert J. Farnsworth", "FUTR/4.jpg"],
            5: ["Amy Wong", "FUTR/5.jpg"],
            6: ["Hermes Conrad", "FUTR/6.jpg"],
            7: ["Dr. John A. Zoidberg", "FUTR/7.jpg"],
            8: ["Zapp Brannigan", "FUTR/8.jpg"],
            9: ["Kif Kroker", "FUTR/9.jpg"],
            10: ["Carol 'Mom' Miller", "FUTR/10.jpg"],
            "N": 10,
            "name": "Futurama"
        },
        "SS": {
            1: ["Jonah Simms", "SS/1.jpg"],
            2: ["Dina Fox", "SS/2.jpg"],
            3: ["Garrett McNeill", "SS/3.jpg"],
            4: ["Mateo Liwanag", "SS/4.jpg"],
            5: ["Glenn Sturgis", "SS/5.jpg"],
            6: ["Amy Sosa", "SS/6.jpg"],
            "N": 6,
            "name": "Superstore"
        },
        "ELM": {
            1: ["Sherlock Holmes", "ELM/1.jpg"],
            2: ["Joan Watson", "ELM/2.jpg"],
            3: ["Marcus Bell", "ELM/3.jpg"],
            "N": 3,
            "name": "Elementary"
        },
        "JB": {
            1: ["Jennifer Check", "JB/1.jpg"],
            2: ["Anita 'Needy' Lesnicki", "JB/2.jpg"],
            3: ["Chip Dove", "JB/3.jpg"],
            "N": 3,
            "name": "Jennifer's Body"
        },
        "WWCF": {
            1: ["Willy Wonka", "WWCF/1.jpg"],
            2: ["Grandpa Joe", "WWCF/2.jpg"],
            3: ["Charlie Bucket", "WWCF/3.jpg"],
            "N": 3,
            "name": "Willy Wonka & the Chocolate Factory"
        },
        "BLB": {
            1: ["Danny Reagan", "BLB/1.jpg"],
            2: ["Erin Reagan ", "BLB/2.jpg"],
            3: ["Jamie Reagan", "BLB/3.jpg"],
            4: ["Henry Reagan", "BLB/4.jpg"],
            5: ["Frank Reagan", "BLB/5.jpg"],
            6: ["Abigail Baker", "BLB/6.jpg"],
            "N": 6,
            "name": "Blue Bloods"
        },
        "CF": {
            1: ["Matthew Casey", "CF/1.jpg"],
            2: ["Kelly Severide ", "CF/2.jpg"],
            3: ["Wallace Boden", "CF/3.jpg"],
            4: ["Joe Cruz ", "CF/4.jpg"],
            5: ["Randall McHolland", "CF/5.jpg"],
            6: ["Capp", "CF/6.jpg"],
            "N": 6,
            "name": "Chicago Fire"
        },
        "HML": {
            1: ["Prince Hamlet", "HML/1.jpg"],
            2: ["Queen Gertrude ", "HML/2.jpg"],
            3: ["King Claudius", "HML/3.jpg"],
            4: ["Polonius ", "HML/4.jpg"],
            5: ["Ophelia", "HML/5.jpg"],
            6: ["Horatio", "HML/6.jpg"],
            "N": 6,
            "name": "Hamlet"
        },
        "MCB": {
            1: ["Macbeth", "MCB/1.jpg"],
            2: ["Lady Macbeth", "MCB/2.jpg"],
            "N": 2,
            "name": "Macbeth"
        },
        "DS": {
            1: ["Tom Hansen", "DS/1.jpg"],
            2: ["Summer Finn", "DS/2.jpg"],
            "N": 2,
            "name": "(500) Days of Summer"
        },
        "BKSM": {
            1: ["Molly Davidson", "BKSM/1.jpg"],
            2: ["Amy Antsler", "BKSM/2.jpg"],
            "N": 2,
            "name": "Booksmart"
        },
        "BLKL": {
            1: ["Raymond 'Red' Reddington", "BLKL/1.jpg"],
            2: ["Elizabeth Keen", "BLKL/2.jpg"],
            3: ["Donald Ressler", "BLKL/3.jpg"],
            4: ["Harold Cooper ", "BLKL/4.jpg"],
            5: ["Dembe Zuma", "BLKL/5.jpg"],
            6: ["Aram Mojtabai", "BLKL/6.jpg"],
            "N": 6,
            "name": "The Blacklist"
        },
        "BSU": {
            1: ["Jesse", "BSU/1.jpg"],
            2: ["C&#xE9;line", "BSU/2.jpg"],
            "N": 2,
            "name": "Before Sunrise"
        },
        "QG": {
            1: ["Beth Harmon", "QG/1.jpg"],
            "N": 1,
            "name": "The Queen's Gambit"
        }


    };

var MBTI_scores = { "ENFJ": 0, "ENFP": 0, "ENTJ": 0, "ENTP": 0, "ESFJ": 0, "ESFP": 0, "ESTJ": 0, "ESTP": 0, "INFJ": 0, "INFP": 0, "INTJ": 0, "INTP": 0, "ISFJ": 0, "ISFP": 0, "ISTJ": 0, "ISTP": 0 };
var enneatype_scores = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 };
var enneawing_scores = { "1w9": 0, "1w2": 0, "2w1": 0, "2w3": 0, "3w2": 0, "3w4": 0, "4w3": 0, "4w5": 0, "5w4": 0, "5w6": 0, "6w5": 0, "6w7": 0, "7w6": 0, "7w8": 0, "8w7": 0, "8w9": 0, "9w8": 0, "9w1": 0 };
var variant_scores = { "so/sp": 0, "so/sx": 0, "sp/so": 0, "sp/sx": 0, "sx/so": 0, "sx/sp": 0 };
var tritype_scores = { "125": 0, "126": 0, "127": 0, "135": 0, "136": 0, "137": 0, "145": 0, "146": 0, "147": 0, "152": 0, "153": 0, "154": 0, "162": 0, "163": 0, "164": 0, "172": 0, "173": 0, "174": 0, "215": 0, "216": 0, "217": 0, "251": 0, "258": 0, "259": 0, "261": 0, "268": 0, "269": 0, "271": 0, "278": 0, "279": 0, "285": 0, "286": 0, "287": 0, "295": 0, "296": 0, "297": 0, "315": 0, "316": 0, "317": 0, "351": 0, "358": 0, "359": 0, "361": 0, "368": 0, "369": 0, "371": 0, "378": 0, "379": 0, "385": 0, "386": 0, "387": 0, "395": 0, "396": 0, "397": 0, "415": 0, "416": 0, "417": 0, "451": 0, "458": 0, "459": 0, "461": 0, "468": 0, "469": 0, "471": 0, "478": 0, "479": 0, "485": 0, "486": 0, "487": 0, "495": 0, "496": 0, "497": 0, "512": 0, "513": 0, "514": 0, "521": 0, "528": 0, "529": 0, "531": 0, "538": 0, "539": 0, "541": 0, "548": 0, "549": 0, "582": 0, "583": 0, "584": 0, "592": 0, "593": 0, "594": 0, "612": 0, "613": 0, "614": 0, "621": 0, "628": 0, "629": 0, "631": 0, "638": 0, "639": 0, "641": 0, "648": 0, "649": 0, "682": 0, "683": 0, "684": 0, "692": 0, "693": 0, "694": 0, "712": 0, "713": 0, "714": 0, "721": 0, "728": 0, "729": 0, "731": 0, "738": 0, "739": 0, "741": 0, "748": 0, "749": 0, "782": 0, "783": 0, "784": 0, "792": 0, "793": 0, "794": 0, "825": 0, "826": 0, "827": 0, "835": 0, "836": 0, "837": 0, "845": 0, "846": 0, "847": 0, "852": 0, "853": 0, "854": 0, "862": 0, "863": 0, "864": 0, "872": 0, "873": 0, "874": 0, "925": 0, "926": 0, "927": 0, "935": 0, "936": 0, "937": 0, "945": 0, "946": 0, "947": 0, "952": 0, "953": 0, "954": 0, "962": 0, "963": 0, "964": 0, "972": 0, "973": 0, "974": 0 };
var socionics_scores = { "EIE": 0, "EII": 0, "ESE": 0, "ESI": 0, "IEE": 0, "IEI": 0, "ILE": 0, "ILI": 0, "LIE": 0, "LII": 0, "LSE": 0, "LSI": 0, "SEE": 0, "SEI": 0, "SLE": 0, "SLI": 0 };
var big5_scores = { "RCOAI": 0, "RCOAN": 0, "RCOEI": 0, "RCOEN": 0, "RCUAI": 0, "RCUAN": 0, "RCUEI": 0, "RCUEN": 0, "RLOAI": 0, "RLOAN": 0, "RLOEI": 0, "RLOEN": 0, "RLUAI": 0, "RLUAN": 0, "RLUEI": 0, "RLUEN": 0, "SCOAI": 0, "SCOAN": 0, "SCOEI": 0, "SCOEN": 0, "SCUAI": 0, "SCUAN": 0, "SCUEI": 0, "SCUEN": 0, "SLOAI": 0, "SLOAN": 0, "SLOEI": 0, "SLOEN": 0, "SLUAI": 0, "SLUAN": 0, "SLUEI": 0, "SLUEN": 0 };
var ap_scores = { "EFLV": 0, "EFVL": 0, "ELFV": 0, "ELVF": 0, "EVFL": 0, "EVLF": 0, "FELV": 0, "FEVL": 0, "FLEV": 0, "FLVE": 0, "FVEL": 0, "FVLE": 0, "LEFV": 0, "LEVF": 0, "LFEV": 0, "LFVE": 0, "LVEF": 0, "LVFE": 0, "VEFL": 0, "VELF": 0, "VFEL": 0, "VFLE": 0, "VLEF": 0, "VLFE": 0 };
var ft_scores = { "Choleric [Dominant]": 0, "Choleric-Melancholic": 0, "Choleric-Phlegmatic": 0, "Choleric-Sanguine": 0, "Melancholic-Choleric": 0, "Melancholic [Dominant]": 0, "Melancholic-Phlegmatic": 0, "Melancholic-Sanguine": 0, "Phlegmatic-Choleric": 0, "Phlegmatic-Melancholic": 0, "Phlegmatic [Dominant]": 0, "Phlegmatic-Sanguine": 0, "Sanguine-Choleric": 0, "Sanguine-Melancholic": 0, "Sanguine-Phlegmatic": 0, "Sanguine [Dominant]": 0 };
var family_scores = { "1-2-5": 0, "1-2-6": 0, "1-2-7": 0, "1-3-5": 0, "1-3-6": 0, "1-3-7": 0, "1-4-5": 0, "1-4-6": 0, "1-4-7": 0, "2-5-8": 0, "2-5-9": 0, "2-6-8": 0, "2-6-9": 0, "2-7-8": 0, "2-7-9": 0, "3-5-8": 0, "3-5-9": 0, "3-6-8": 0, "3-6-9": 0, "3-7-8": 0, "3-7-9": 0, "4-5-8": 0, "4-5-9": 0, "4-6-8": 0, "4-6-9": 0, "4-7-8": 0, "4-7-9": 0 };

var function_scores = { "Ni": 0, "Ne": 0, "Si": 0, "Se": 0, "Fi": 0, "Fe": 0, "Ti": 0, "Te": 0 }; 
var ennea_scores = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 };
var instinct_scores = { "so": 0, "sp": 0, "sx": 0 };
var trait_scores = { "R": 0, "S": 0, "C": 0, "L": 0, "O": 0, "U": 0, "A": 0, "E": 0, "I": 0, "N": 0 };
var aspect_scores = { "E1": 0, "F1": 0, "L1": 0, "V1": 0, "E2": 0, "F2": 0, "L2": 0, "V2": 0, "E3": 0, "F3": 0, "L3": 0, "V3": 0, "E4": 0, "F4": 0, "L4": 0, "V4": 0 };
var attitude_scores = { "Es+": 0, "Es-": 0, "Eo+": 0, "Eo-": 0, "Fs+": 0, "Fs-": 0, "Fo+": 0, "Fo-": 0, "Ls+": 0, "Ls-": 0, "Lo+": 0, "Lo-": 0, "Vs+": 0, "Vs-": 0, "Vo+": 0, "Vo-": 0 };
var temperament_scores = { "": 0, "Choleric": 0, "Melancholic": 0, "Phlegmatic": 0, "Sanguine": 0 };

var dom_func = { "": "", "ENFJ": "Fe", "ENFP": "Ne", "ENTJ": "Te", "ENTP": "Ne", "ESFJ": "Fe", "ESFP": "Se", "ESTJ": "Te", "ESTP": "Se", "INFJ": "Ni", "INFP": "Fi", "INTJ": "Ni", "INTP": "Ti", "ISFJ": "Si", "ISFP": "Fi", "ISTJ": "Si", "ISTP": "Ti" };
var aux_func = { "": "", "ENFJ": "Ni", "ENFP": "Fi", "ENTJ": "Ni", "ENTP": "Ti", "ESFJ": "Si", "ESFP": "Fi", "ESTJ": "Si", "ESTP": "Ti", "INFJ": "Fe", "INFP": "Ne", "INTJ": "Te", "INTP": "Ne", "ISFJ": "Fe", "ISFP": "Se", "ISTJ": "Te", "ISTP": "Se" };
var tert_func = { "": "", "ENFJ": "Se", "ENFP": "Te", "ENTJ": "Se", "ENTP": "Fe", "ESFJ": "Ne", "ESFP": "Te", "ESTJ": "Ne", "ESTP": "Fe", "INFJ": "Ti", "INFP": "Si", "INTJ": "Fi", "INTP": "Si", "ISFJ": "Ti", "ISFP": "Ni", "ISTJ": "Fi", "ISTP": "Ni" };
var inf_func = { "": "", "ENFJ": "Ti", "ENFP": "Si", "ENTJ": "Fi", "ENTP": "Si", "ESFJ": "Ti", "ESFP": "Ni", "ESTJ": "Fi", "ESTP": "Ni", "INFJ": "Se", "INFP": "Te", "INTJ": "Se", "INTP": "Fe", "ISFJ": "Ne", "ISFP": "Te", "ISTJ": "Ne", "ISTP": "Fe" };
var main_variant = { "": "", "so/sp": "so", "so/sx": "so", "sp/so": "sp", "sp/sx": "sp", "sx/so": "sx", "sx/sp": "sx" };
var main_temperament = { "": "", "Choleric [Dominant]": "Choleric", "Choleric-Melancholic": "Choleric", "Choleric-Phlegmatic": "Choleric", "Choleric-Sanguine": "Choleric", "Melancholic-Choleric": "Melancholic", "Melancholic [Dominant]": "Melancholic", "Melancholic-Phlegmatic": "Melancholic", "Melancholic-Sanguine": "Melancholic", "Phlegmatic-Choleric": "Phlegmatic", "Phlegmatic-Melancholic": "Phlegmatic", "Phlegmatic [Dominant]": "Phlegmatic", "Phlegmatic-Sanguine": "Phlegmatic", "Sanguine-Choleric": "Sanguine", "Sanguine-Melancholic": "Sanguine", "Sanguine-Phlegmatic": "Sanguine", "Sanguine [Dominant]": "Sanguine"};
var secondary_temperament = { "": "", "Choleric [Dominant]": "", "Choleric-Melancholic": "Melancholic", "Choleric-Phlegmatic": "Phlegmatic", "Choleric-Sanguine": "Sanguine", "Melancholic-Choleric": "Choleric", "Melancholic [Dominant]": "", "Melancholic-Phlegmatic": "Phlegmatic", "Melancholic-Sanguine": "Sanguine", "Phlegmatic-Choleric": "Choleric", "Phlegmatic-Melancholic": "Melancholic", "Phlegmatic [Dominant]": "", "Phlegmatic-Sanguine": "Sanguine", "Sanguine-Choleric": "Choleric", "Sanguine-Melancholic": "Melancholic", "Sanguine-Phlegmatic": "Phlegmatic", "Sanguine [Dominant]": "" };
var trait1 = { "": "", "RCOAI": "R", "RCOAN": "R", "RCOEI": "R", "RCOEN": "R", "RCUAI": "R", "RCUAN": "R", "RCUEI": "R", "RCUEN": "R", "RLOAI": "R", "RLOAN": "R", "RLOEI": "R", "RLOEN": "R", "RLUAI": "R", "RLUAN": "R", "RLUEI": "R", "RLUEN": "R", "SCOAI": "S", "SCOAN": "S", "SCOEI": "S", "SCOEN": "S", "SCUAI": "S", "SCUAN": "S", "SCUEI": "S", "SCUEN": "S", "SLOAI": "S", "SLOAN": "S", "SLOEI": "S", "SLOEN": "S", "SLUAI": "S", "SLUAN": "S", "SLUEI": "S", "SLUEN": "S" };
var trait2 = { "": "", "RCOAI": "C", "RCOAN": "C", "RCOEI": "C", "RCOEN": "C", "RCUAI": "C", "RCUAN": "C", "RCUEI": "C", "RCUEN": "C", "RLOAI": "L", "RLOAN": "L", "RLOEI": "L", "RLOEN": "L", "RLUAI": "L", "RLUAN": "L", "RLUEI": "L", "RLUEN": "L", "SCOAI": "C", "SCOAN": "C", "SCOEI": "C", "SCOEN": "C", "SCUAI": "C", "SCUAN": "C", "SCUEI": "C", "SCUEN": "C", "SLOAI": "L", "SLOAN": "L", "SLOEI": "L", "SLOEN": "L", "SLUAI": "L", "SLUAN": "L", "SLUEI": "L", "SLUEN": "L" };
var trait3 = { "": "", "RCOAI": "O", "RCOAN": "O", "RCOEI": "O", "RCOEN": "O", "RCUAI": "U", "RCUAN": "U", "RCUEI": "U", "RCUEN": "U", "RLOAI": "O", "RLOAN": "O", "RLOEI": "O", "RLOEN": "O", "RLUAI": "U", "RLUAN": "U", "RLUEI": "U", "RLUEN": "U", "SCOAI": "O", "SCOAN": "O", "SCOEI": "O", "SCOEN": "O", "SCUAI": "U", "SCUAN": "U", "SCUEI": "U", "SCUEN": "U", "SLOAI": "O", "SLOAN": "O", "SLOEI": "O", "SLOEN": "O", "SLUAI": "U", "SLUAN": "U", "SLUEI": "U", "SLUEN": "U" };
var trait4 = { "": "", "RCOAI": "A", "RCOAN": "A", "RCOEI": "E", "RCOEN": "E", "RCUAI": "A", "RCUAN": "A", "RCUEI": "E", "RCUEN": "E", "RLOAI": "A", "RLOAN": "A", "RLOEI": "E", "RLOEN": "E", "RLUAI": "A", "RLUAN": "A", "RLUEI": "E", "RLUEN": "E", "SCOAI": "A", "SCOAN": "A", "SCOEI": "E", "SCOEN": "E", "SCUAI": "A", "SCUAN": "A", "SCUEI": "E", "SCUEN": "E", "SLOAI": "A", "SLOAN": "A", "SLOEI": "E", "SLOEN": "E", "SLUAI": "A", "SLUAN": "A", "SLUEI": "E", "SLUEN": "E" };
var trait5 = { "": "", "RCOAI": "I", "RCOAN": "N", "RCOEI": "I", "RCOEN": "N", "RCUAI": "I", "RCUAN": "N", "RCUEI": "I", "RCUEN": "N", "RLOAI": "I", "RLOAN": "N", "RLOEI": "I", "RLOEN": "N", "RLUAI": "I", "RLUAN": "N", "RLUEI": "I", "RLUEN": "N", "SCOAI": "I", "SCOAN": "N", "SCOEI": "I", "SCOEN": "N", "SCUAI": "I", "SCUAN": "N", "SCUEI": "I", "SCUEN": "N", "SLOAI": "I", "SLOAN": "N", "SLOEI": "I", "SLOEN": "N", "SLUAI": "I", "SLUAN": "N", "SLUEI": "I", "SLUEN": "N" };
var aspectEs = { "": "", "EFLV": "Es+", "EFVL": "Es+", "ELFV": "Es+", "ELVF": "Es+", "EVFL": "Es+", "EVLF": "Es+", "FELV": "Es+", "FEVL": "Es+", "FLEV": "Es-", "FLVE": "Es-", "FVEL": "Es-", "FVLE": "Es-", "LEFV": "Es+", "LEVF": "Es+", "LFEV": "Es-", "LFVE": "Es-", "LVEF": "Es-", "LVFE": "Es-", "VEFL": "Es+", "VELF": "Es+", "VFEL": "Es-", "VFLE": "Es-", "VLEF": "Es-", "VLFE": "Es-" };
var aspectEo = { "": "", "EFLV": "Eo-", "EFVL": "Eo-", "ELFV": "Eo-", "ELVF": "Eo-", "EVFL": "Eo-", "EVLF": "Eo-", "FELV": "Eo+", "FEVL": "Eo+", "FLEV": "Eo-", "FLVE": "Eo+", "FVEL": "Eo-", "FVLE": "Eo+", "LEFV": "Eo+", "LEVF": "Eo+", "LFEV": "Eo-", "LFVE": "Eo+", "LVEF": "Eo-", "LVFE": "Eo+", "VEFL": "Eo+", "VELF": "Eo+", "VFEL": "Eo-", "VFLE": "Eo+", "VLEF": "Eo-", "VLFE": "Eo+" };
var aspectFs = { "": "", "EFLV": "Fs+", "EFVL": "Fs+", "ELFV": "Fs-", "ELVF": "Fs-", "EVFL": "Fs-", "EVLF": "Fs-", "FELV": "Fs+", "FEVL": "Fs+", "FLEV": "Fs+", "FLVE": "Fs+", "FVEL": "Fs+", "FVLE": "Fs+", "LEFV": "Fs-", "LEVF": "Fs-", "LFEV": "Fs+", "LFVE": "Fs+", "LVEF": "Fs-", "LVFE": "Fs-", "VEFL": "Fs-", "VELF": "Fs-", "VFEL": "Fs+", "VFLE": "Fs+", "VLEF": "Fs-", "VLFE": "Fs-" };
var aspectFo = { "": "", "EFLV": "Fo+", "EFVL": "Fo+", "ELFV": "Fo-", "ELVF": "Fo+", "EVFL": "Fo-", "EVLF": "Fo+", "FELV": "Fo-", "FEVL": "Fo-", "FLEV": "Fo-", "FLVE": "Fo-", "FVEL": "Fo-", "FVLE": "Fo-", "LEFV": "Fo-", "LEVF": "Fo+", "LFEV": "Fo+", "LFVE": "Fo+", "LVEF": "Fo+", "LVFE": "Fo-", "VEFL": "Fo-", "VELF": "Fo+", "VFEL": "Fo+", "VFLE": "Fo+", "VLEF": "Fo+", "VLFE": "Fo-" };
var aspectLs = { "": "", "EFLV": "Ls-", "EFVL": "Ls-", "ELFV": "Ls+", "ELVF": "Ls+", "EVFL": "Ls-", "EVLF": "Ls-", "FELV": "Ls-", "FEVL": "Ls-", "FLEV": "Ls+", "FLVE": "Ls+", "FVEL": "Ls-", "FVLE": "Ls-", "LEFV": "Ls+", "LEVF": "Ls+", "LFEV": "Ls+", "LFVE": "Ls+", "LVEF": "Ls+", "LVFE": "Ls+", "VEFL": "Ls-", "VELF": "Ls-", "VFEL": "Ls-", "VFLE": "Ls-", "VLEF": "Ls+", "VLFE": "Ls+" };
var aspectLo = { "": "", "EFLV": "Lo-", "EFVL": "Lo+", "ELFV": "Lo+", "ELVF": "Lo+", "EVFL": "Lo+", "EVLF": "Lo-", "FELV": "Lo-", "FEVL": "Lo+", "FLEV": "Lo+", "FLVE": "Lo+", "FVEL": "Lo+", "FVLE": "Lo-", "LEFV": "Lo-", "LEVF": "Lo-", "LFEV": "Lo-", "LFVE": "Lo-", "LVEF": "Lo-", "LVFE": "Lo-", "VEFL": "Lo+", "VELF": "Lo-", "VFEL": "Lo+", "VFLE": "Lo-", "VLEF": "Lo+", "VLFE": "Lo+" };
var aspectVs = { "": "", "EFLV": "Vs-", "EFVL": "Vs-", "ELFV": "Vs-", "ELVF": "Vs-", "EVFL": "Vs+", "EVLF": "Vs+", "FELV": "Vs-", "FEVL": "Vs-", "FLEV": "Vs-", "FLVE": "Vs-", "FVEL": "Vs+", "FVLE": "Vs+", "LEFV": "Vs-", "LEVF": "Vs-", "LFEV": "Vs-", "LFVE": "Vs-", "LVEF": "Vs+", "LVFE": "Vs+", "VEFL": "Vs+", "VELF": "Vs+", "VFEL": "Vs+", "VFLE": "Vs+", "VLEF": "Vs+", "VLFE": "Vs+" };
var aspectVo = { "": "", "EFLV": "Vo+", "EFVL": "Vo-", "ELFV": "Vo+", "ELVF": "Vo-", "EVFL": "Vo+", "EVLF": "Vo+", "FELV": "Vo+", "FEVL": "Vo-", "FLEV": "Vo+", "FLVE": "Vo-", "FVEL": "Vo+", "FVLE": "Vo+", "LEFV": "Vo+", "LEVF": "Vo-", "LFEV": "Vo+", "LFVE": "Vo-", "LVEF": "Vo+", "LVFE": "Vo+", "VEFL": "Vo-", "VELF": "Vo-", "VFEL": "Vo-", "VFLE": "Vo-", "VLEF": "Vo-", "VLFE": "Vo-" };
var aspect1 = { "": "", "EFLV": "E1", "EFVL": "E1", "ELFV": "E1", "ELVF": "E1", "EVFL": "E1", "EVLF": "E1", "FELV": "F1", "FEVL": "F1", "FLEV": "F1", "FLVE": "F1", "FVEL": "F1", "FVLE": "F1", "LEFV": "L1", "LEVF": "L1", "LFEV": "L1", "LFVE": "L1", "LVEF": "L1", "LVFE": "L1", "VEFL": "V1", "VELF": "V1", "VFEL": "V1", "VFLE": "V1", "VLEF": "V1", "VLFE": "V1" };
var aspect2 = { "": "", "EFLV": "F2", "EFVL": "F2", "ELFV": "L2", "ELVF": "L2", "EVFL": "V2", "EVLF": "V2", "FELV": "E2", "FEVL": "E2", "FLEV": "L2", "FLVE": "L2", "FVEL": "V2", "FVLE": "V2", "LEFV": "E2", "LEVF": "E2", "LFEV": "F2", "LFVE": "F2", "LVEF": "V2", "LVFE": "V2", "VEFL": "E2", "VELF": "E2", "VFEL": "F2", "VFLE": "F2", "VLEF": "L2", "VLFE": "L2" };
var aspect3 = { "": "", "EFLV": "L3", "EFVL": "V3", "ELFV": "F3", "ELVF": "V3", "EVFL": "F3", "EVLF": "L3", "FELV": "L3", "FEVL": "V3", "FLEV": "E3", "FLVE": "V3", "FVEL": "E3", "FVLE": "L3", "LEFV": "F3", "LEVF": "V3", "LFEV": "E3", "LFVE": "V3", "LVEF": "E3", "LVFE": "F3", "VEFL": "F3", "VELF": "L3", "VFEL": "E3", "VFLE": "L3", "VLEF": "E3", "VLFE": "F3" };
var aspect4 = { "": "", "EFLV": "V4", "EFVL": "L4", "ELFV": "V4", "ELVF": "F4", "EVFL": "L4", "EVLF": "F4", "FELV": "V4", "FEVL": "L4", "FLEV": "V4", "FLVE": "E4", "FVEL": "L4", "FVLE": "E4", "LEFV": "V4", "LEVF": "F4", "LFEV": "V4", "LFVE": "E4", "LVEF": "F4", "LVFE": "E4", "VEFL": "L4", "VELF": "F4", "VFEL": "L4", "VFLE": "E4", "VLEF": "F4", "VLFE": "E4" };
var judg_func = { "": "", "ENFJ": "Ni", "ENFP": "Ne", "ENTJ": "Ni", "ENTP": "Ne", "ESFJ": "Si", "ESFP": "Se", "ESTJ": "Si", "ESTP": "Se", "INFJ": "Ni", "INFP": "Ne", "INTJ": "Ni", "INTP": "Ne", "ISFJ": "Si", "ISFP": "Se", "ISTJ": "Si", "ISTP": "Se" };
var prec_func = { "": "", "ENFJ": "Fe", "ENFP": "Fi", "ENTJ": "Te", "ENTP": "Ti", "ESFJ": "Fe", "ESFP": "Fi", "ESTJ": "Te", "ESTP": "Ti", "INFJ": "Fe", "INFP": "Fi", "INTJ": "Te", "INTP": "Ti", "ISFJ": "Fe", "ISFP": "Fi", "ISTJ": "Te", "ISTP": "Ti" };
var dom_elem = { "": "", "EIE": "Fe", "EII": "Fi", "ESE": "Fe", "ESI": "Fi", "IEE": "Ne", "IEI": "Ni", "ILE": "Ne", "ILI": "Ni", "LIE": "Te", "LII": "Ti", "LSE": "Te", "LSI": "Ti", "SEE": "Se", "SEI": "Si", "SLE": "Si", "SLI": "Si" };
var aux_elem = { "": "", "EIE": "Ni", "EII": "Fe", "ESE": "Si", "ESI": "Se", "IEE": "Fi", "IEI": "Fe", "ILE": "Ti", "ILI": "Te", "LIE": "Ni", "LII": "Ne", "LSE": "Si", "LSI": "Se", "SEE": "Fi", "SEI": "Fe", "SLE": "Ti", "SLI": "Te" };

function get_scores() {
    for (var i = 0; i < user_scores.length; i++) {
        var s = query.substring(i * 2, i * 2 + 2);
        if (s == "--") {
            s = 100;
        }
        else if (s == "") {
            s = -1;
        }
        else {
            s = parseInt(s);
        }
        user_scores[i] = s;
    }
}

function calculate(scores_db) {
    for (var key1 in scores_db) {
        for (var key2 in scores_db[key1]) {
            var n = 0;
            var z = scores_db[key1][key2];
            var dsum = 0;
            var sumX = 0;
            var sumY = 0;
            var sumXY = 0;
            var sumX2 = 0;
            var sumY2 = 0;
            for (var i = 0; i < user_scores.length; i++) {
                var x = user_scores[i];
                var y = z[i]
                if (x != -1) {
                    dsum += Math.abs(x - y);
                    sumX += x;
                    sumY += y;
                    sumXY += x * y;
                    sumX2 += x * x;
                    sumY2 += y * y;
                    n++;
                }
            }
            character_scores[key1][key2][0] = 100 - dsum / n;
            character_scores[key1][key2][1] = 50 * (1 + (n * sumXY - sumX * sumY) / Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)));
        }
    }
}

function cleanse(dict, value = 0) {
    var d = {};
    for (var v in dict) {
        d[v] = value;
    }
    return d;
}

function cleanse2(dict) {
    var d = {};
    for (var v in dict) {
        d[v] = [0,0];
    }
    return d;
}

function avg(types_db, types_scores2, index, method) {
    var types_scores = cleanse2(types_scores2);
    for (var universe in types_db) {
        for (var character in types_db[universe]) {
            var da_type = types_db[universe][character][index];
            //document.getElementById("debug").innerHTML = universe + " " + character + " " + da_type;
            if (da_type != "") {
                types_scores[da_type][0] += character_scores[universe][character][method];
                types_scores[da_type][1]++;
            }
        }
    } //at this point, types_scores should contain the sum and the count of each type
    for (var type in types_scores) {
        if (types_scores[type][1] == 0) {
            types_scores[type][1] = 1;
        }
        types_scores[type] = types_scores[type][0] / types_scores[type][1];
    } //now it should contain the avg score for each type
    return types_scores;
}

function max(types_db, types_scores2, index, method) {
    var types_scores = cleanse(types_scores2);
    for (var universe in types_db) {
        for (var character in types_db[universe]) {
            var da_type = types_db[universe][character][index];
            if (da_type != "") {
                var val = character_scores[universe][character][method];
                if (types_scores[da_type] < val) {
                    types_scores[da_type] = val;
                }
            }
        }
    } //at this point, types_scores should contain the maximum of each type
    return types_scores;
}

function min(types_db, types_scores2, index, method) {
    var types_scores = cleanse(types_scores2, Infinity);
    for (var universe in types_db) {
        for (var character in types_db[universe]) {
            var da_type = types_db[universe][character][index];
            if (da_type != "") {
                var val = character_scores[universe][character][method];
                if (types_scores[da_type] > val) {
                    types_scores[da_type] = val;
                }
            }
        }
    } //at this point, types_scores should contain the minimum of each type, except for those who don't appear
    for (var v in types_scores) {
        if (types_scores[v] == Infinity) {
            types_scores[v] = 0;
        }
    }
    return types_scores;
}

function avg2(types_db, types_scores2, index, method, dict) {
    var types_scores = cleanse2(types_scores2);
    for (var universe in types_db) {
        for (var character in types_db[universe]) {
            var da_type = dict[types_db[universe][character][index]];
            //document.getElementById("debug").innerHTML = universe + " " + character + " " + da_type;
            if (da_type != "" || index == 9) {
                types_scores[da_type][0] += character_scores[universe][character][method];
                types_scores[da_type][1]++;
            }
        }
    } //at this point, types_scores should contain the sum and the count of each type
    for (var type in types_scores) {
        if (types_scores[type][1] == 0) {
            types_scores[type][1] = 1;
        }
        types_scores[type] = types_scores[type][0] / types_scores[type][1];
    } //now it should contain the avg score for each type
    return types_scores;
}

function max2(types_db, types_scores2, index, method, dict) {
    var types_scores = cleanse(types_scores2);
    for (var universe in types_db) {
        for (var character in types_db[universe]) {
            var da_type = dict[types_db[universe][character][index]];
            if (da_type != "" || index == 9) {
                var val = character_scores[universe][character][method];
                if (types_scores[da_type] < val) {
                    types_scores[da_type] = val;
                }
            }
        }
    } //at this point, types_scores should contain the maximum of each type
    return types_scores;
}

function min2(types_db, types_scores2, index, method, dict) {
    var types_scores = cleanse(types_scores2, Infinity);
    for (var universe in types_db) {
        for (var character in types_db[universe]) {
            var da_type = dict[types_db[universe][character][index]];
            if (da_type != "" || index == 9) {
                var val = character_scores[universe][character][method];
                if (types_scores[da_type] > val) {
                    types_scores[da_type] = val;
                }
            }
        }
    } //at this point, types_scores should contain the minimum of each type, except for those who don't appear
    for (var v in types_scores) {
        if (types_scores[v] == Infinity) {
            types_scores[v] = 0;
        }
    }
    return types_scores;
}

function add_scores(types_scores, basic_scores) {
    var da_scores = []
    var i = 0;
    for (var type in basic_scores) {
        da_scores[i] = basic_scores[type];
        i++;
    }
    da_scores.sort(function (a, b) {
        return b - a;
    });
    var length = da_scores.length;
    for (var type in basic_scores) {
        for (i = 0; i < length; i++) {
            if (basic_scores[type] == da_scores[i]) {
                types_scores[type] += length - i - 1;
                break;
            }
        }
    }
    return types_scores;
}

function score(types_db, types_scores, index, method, method2, dict = {}) {
    switch (method2) {
        case 0:
            var basic_scores = avg(types_db, types_scores, index, method);
            break;
        case 1:
            var basic_scores = max(types_db, types_scores, index, method);
            break;
        case 2:
            var basic_scores = min(types_db, types_scores, index, method);
            break;
        case 3:
            var basic_scores = avg2(types_db, types_scores, index, method, dict);
            break;
        case 4:
            var basic_scores = max2(types_db, types_scores, index, method, dict);
            break;
        case 5:
            var basic_scores = min2(types_db, types_scores, index, method, dict);
            break;
    }
    return basic_scores;
}

function do_the_thing(types_db, types_scores, index) {
    switch (index) {
        case 0:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    types_scores = add_scores(types_scores, score(types_db, types_scores, index, i, j));
                }
            }
            for (var i = 0; i < 2; i++) {
                for (var j = 3; j < 6; j++) {
                    var basic_scores1 = score(types_db, function_scores, index, i, j, dom_func);
                    var basic_scores2 = score(types_db, function_scores, index, i, j, aux_func);
                    var tt = cleanse(MBTI_scores);
                    for (var v in tt) {
                        tt[v] = 2 * basic_scores1[dom_func[v]] + basic_scores1[aux_func[v]];
                    }
                    types_scores = add_scores(types_scores, tt);
                    tt = cleanse(MBTI_scores);
                    for (var v in tt) {
                        tt[v] = basic_scores1[dom_func[v]] + basic_scores2[aux_func[v]];
                    }
                    types_scores = add_scores(types_scores, tt);
                    tt = cleanse(MBTI_scores);
                    for (var v in tt) {
                        tt[v] = 5 * basic_scores1[dom_func[v]] + 3 * basic_scores1[aux_func[v]] + basic_scores1[tert_func[v]] - basic_scores1[inf_func[v]];
                    }
                    types_scores = add_scores(types_scores, tt);
                    basic_scores1 = score(types_db, function_scores, index, i, j, judg_func);
                    basic_scores2 = score(types_db, function_scores, index, i, j, prec_func);
                    tt = cleanse(MBTI_scores);
                    for (var v in tt) {
                        if ((v[0] == "I" && v[3] == "J") || (v[0] == "E" && v[3] == "P")) {
                            tt[v] = 2 * basic_scores1[judg_func[v]] + basic_scores2[prec_func[v]];
                        }
                        else {
                            tt[v] = basic_scores1[judg_func[v]] + 2 * basic_scores2[prec_func[v]];
                        }
                    }
                    types_scores = add_scores(types_scores, tt);
                }
            }
            //improve
            break;
        case 1:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    types_scores = add_scores(types_scores, score(types_db, types_scores, index, i, j));
                }
            }
            break;
        case 2:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    types_scores = add_scores(types_scores, score(types_db, types_scores, index, i, j));
                }
            }
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    var basic_scores = score(types_db, ennea_scores, 1, i, j);
                    var tt = cleanse(enneawing_scores);
                    for (var v in tt) {
                        tt[v] = 3 * basic_scores[v[0]] + basic_scores[v[2]];
                    }
                    types_scores = add_scores(types_scores, tt);
                }
            }
            break;
        case 3:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    types_scores = add_scores(types_scores, score(types_db, types_scores, index, i, j));
                }
            }
            for (var i = 0; i < 2; i++) {
                for (var j = 3; j < 6; j++) {
                    var basic_scores = score(types_db, instinct_scores, index, i, j, main_variant);
                    var tt = cleanse(variant_scores);
                    for (var v in tt) {
                        tt[v] = 2 * basic_scores[v.substring(0, 2)] + basic_scores[v.substring(3)];
                    }
                    types_scores = add_scores(types_scores, tt);
                }
            }
            break;
        case 4:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    var basic_scores = score(types_db, ennea_scores, 1, i, j);
                    var tt = cleanse(tritype_scores);
                    for (var v in tt) {
                        tt[v] = 3 * basic_scores[v[0]] + 2 * basic_scores[v[1]] + basic_scores[v[2]];
                    }
                    types_scores = add_scores(types_scores, tt);
                }
            }
            break;
        case 5:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    types_scores = add_scores(types_scores, score(types_db, types_scores, index, i, j));
                }
            }
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    var basic_scores = score(types_db, ennea_scores, 1, i, j);
                    var tt = cleanse(family_scores);
                    for (var v in tt) {
                        tt[v] = basic_scores[v[0]] + basic_scores[v[2]] + basic_scores[v[4]];
                    }
                    types_scores = add_scores(types_scores, tt);
                }
            }
            break;
        case 6:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    types_scores = add_scores(types_scores, score(types_db, types_scores, index, i, j));
                }
                for (var i = 0; i < 2; i++) {
                    for (var j = 3; j < 6; j++) {
                        var basic_scores1 = score(types_db, function_scores, index, i, j, dom_elem);
                        var basic_scores2 = score(types_db, function_scores, index, i, j, aux_elem);
                        var tt = cleanse(socionics_scores);
                        for (var v in tt) {
                            tt[v] = basic_scores1[dom_elem[v]] + basic_scores2[aux_elem[v]];
                        }
                        types_scores = add_scores(types_scores, tt);
                    }
                }
            }
            //add
            break;
        case 7:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    types_scores = add_scores(types_scores, score(types_db, types_scores, index, i, j));
                }
            }
            for (var i = 0; i < 2; i++) {
                for (var j = 3; j < 6; j++) {
                    var basic_scores1 = score(types_db, trait_scores, index, i, j, trait1);
                    var basic_scores2 = score(types_db, trait_scores, index, i, j, trait2);
                    var basic_scores3 = score(types_db, trait_scores, index, i, j, trait3);
                    var basic_scores4 = score(types_db, trait_scores, index, i, j, trait4);
                    var basic_scores5 = score(types_db, trait_scores, index, i, j, trait5);
                    var tt = cleanse(big5_scores);
                    for (var v in tt) {
                        tt[v] = basic_scores1[v[0]] + basic_scores2[v[1]] + basic_scores3[v[2]] + basic_scores4[v[3]] + basic_scores5[v[4]];
                    }
                    types_scores = add_scores(types_scores, tt);
                }
            }
            //improve
            break;
        case 8:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    types_scores = add_scores(types_scores, score(types_db, types_scores, index, i, j));
                }
            }
            for (var i = 0; i < 2; i++) {
                for (var j = 3; j < 6; j++) {
                    var basic_scores1 = score(types_db, attitude_scores, index, i, j, aspectEo);
                    var basic_scores2 = score(types_db, attitude_scores, index, i, j, aspectEs);
                    var basic_scores3 = score(types_db, attitude_scores, index, i, j, aspectFo);
                    var basic_scores4 = score(types_db, attitude_scores, index, i, j, aspectFs);
                    var basic_scores5 = score(types_db, attitude_scores, index, i, j, aspectLo);
                    var basic_scores6 = score(types_db, attitude_scores, index, i, j, aspectLs);
                    var basic_scores7 = score(types_db, attitude_scores, index, i, j, aspectVo);
                    var basic_scores8 = score(types_db, attitude_scores, index, i, j, aspectVs);
                    var basic_scores = {};
                    for (var v in attitude_scores) {
                        basic_scores[v] = 0;
                        basic_scores[v] += basic_scores1[v];
                        basic_scores[v] += basic_scores2[v];
                        basic_scores[v] += basic_scores3[v];
                        basic_scores[v] += basic_scores4[v];
                        basic_scores[v] += basic_scores5[v];
                        basic_scores[v] += basic_scores6[v];
                        basic_scores[v] += basic_scores7[v];
                        basic_scores[v] += basic_scores8[v];
                    }
                    var tt = cleanse(ap_scores);
                    for (var v in tt) {
                        tt[v] = basic_scores[aspectEo[v]] + basic_scores[aspectEs[v]] + basic_scores[aspectFo[v]] + basic_scores[aspectFs[v]] + basic_scores[aspectLo[v]] + basic_scores[aspectLs[v]] + basic_scores[aspectVo[v]] + basic_scores[aspectVs[v]];
                    }
                    types_scores = add_scores(types_scores, tt);
                }
            }
            for (var i = 0; i < 2; i++) {
                for (var j = 3; j < 6; j++) {
                    var basic_scores1 = score(types_db, aspect_scores, index, i, j, aspect1);
                    var basic_scores2 = score(types_db, aspect_scores, index, i, j, aspect2);
                    var basic_scores3 = score(types_db, aspect_scores, index, i, j, aspect3);
                    var basic_scores4 = score(types_db, aspect_scores, index, i, j, aspect4);
                    var basic_scores = {};
                    for (var v in aspect_scores) {
                        basic_scores[v] = 0;
                        basic_scores[v] += basic_scores1[v];
                        basic_scores[v] += basic_scores2[v];
                        basic_scores[v] += basic_scores3[v];
                        basic_scores[v] += basic_scores4[v];
                    }
                    var tt = cleanse(ap_scores);
                    for (var v in tt) {
                        tt[v] = basic_scores[aspect1[v]] + basic_scores[aspect2[v]] + basic_scores[aspect3[v]] + basic_scores[aspect4[v]];
                    }
                    types_scores = add_scores(types_scores, tt);
                }
            }
            //improve
            break;
        case 9:
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 3; j++) {
                    types_scores = add_scores(types_scores, score(types_db, types_scores, index, i, j));
                }
            }
            for (var i = 0; i < 2; i++) {
                for (var j = 3; j < 6; j++) {
                    var basic_scores = score(types_db, temperament_scores, index, i, j, main_temperament);
                    var tt = cleanse(ft_scores);
                    for (var v in tt) {
                        tt[v] = 2 * basic_scores[main_temperament[v]] + basic_scores[secondary_temperament[v]];
                    }
                    types_scores = add_scores(types_scores, tt);
                }
            }
            break;
    }
    return types_scores;
}

function display(types_scores, index) {
    var da_scores = []
    var i = 0;
    var s = "";
    for (var type in types_scores) {
        da_scores[i] = [type, types_scores[type]];
        i++;
    }
    da_scores.sort(function (a, b) {
        return b[1] - a[1];
    });
    var length = da_scores.length;
    for (i = 0; i < length; i++) {
        var thingamajig = da_scores[i][1] * 100 / (display_array[index][2] - display_array[index][2] / display_array[index][1]);
        s += da_scores[i][0] + " " + Number(thingamajig.toFixed(2)) + "%<br/>";
    }
    document.getElementById(display_array[index][0]).innerHTML = s;
}

function final_scoring(types_db) {
    MBTI_scores = do_the_thing(types_db, MBTI_scores, 0);
    enneatype_scores = do_the_thing(types_db, enneatype_scores, 1);
    enneawing_scores = do_the_thing(types_db, enneawing_scores, 2);
    variant_scores = do_the_thing(types_db, variant_scores, 3);
    tritype_scores = do_the_thing(types_db, tritype_scores, 4);
    family_scores = do_the_thing(types_db, family_scores, 5);
    socionics_scores = do_the_thing(types_db, socionics_scores, 6);
    big5_scores = do_the_thing(types_db, big5_scores, 7);
    ap_scores = do_the_thing(types_db, ap_scores, 8);
    ft_scores = do_the_thing(types_db, ft_scores, 9);
}

function display_all() {
    display(MBTI_scores, 0);
    display(enneatype_scores, 1)
    display(enneawing_scores, 2);
    display(variant_scores, 3);
    display(tritype_scores, 4);
    display(family_scores, 5);
    display(socionics_scores, 6);
    display(big5_scores, 7);
    display(ap_scores, 8);
    display(ft_scores, 9);
}
