function loadfbcomments() {
    var d = document;
    var s = "script";
    var id = "facebook-jssdk";
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);

    document.getElementById("comments_placeholder").style.display = "none";
}

var graphData = [];

const pcorr = (x, y) => {
    let sumX = 0,
        sumY = 0,
        sumXY = 0,
        sumX2 = 0,
        sumY2 = 0;
    const minLength = x.length = y.length = Math.min(x.length, y.length),
        reduce = (xi, idx) => {
            const yi = y[idx];
            sumX += xi;
            sumY += yi;
            sumXY += xi * yi;
            sumX2 += xi * xi;
            sumY2 += yi * yi;
        }
    x.forEach(reduce);
    return (minLength * sumXY - sumX * sumY) / Math.sqrt((minLength * sumX2 - sumX * sumX) * (minLength * sumY2 - sumY * sumY));
};


function MeanDifference(x, y) {
    var dsum = 0;
    for (var i = 0; i < x.length; i++) {
        dsum += Math.abs(x[i] - y[i]);
    }

    return dsum / x.length;
}

var user_scores = [[44, 82, [], 833356, 0, 0], [166, 31, [], 2648, 1, 0], [37, 87, [], 1347, 2, 0], [212, 80, [], 3058, 3, 0], [87, 79, [], 854, 4, 0], [79, 80, [], 867, 5, 0], [4, 76, [], 1165, 6, 0], [12, 77, [], 870, 7, 0], [88, 79, [], 766, 8, 0], [77, 79, [], 985, 9, 0], [133, 80, [], 1665, 10, 0], [179, 82, [], 1586, 11, 0], [81, 81, [], 858, 12, 0], [143, 82, [], 805, 13, 0], [338, 81, [], 1250, 14, 0], [114, 73, [], 806, 15, 0], [29, 76, [], 721, 16, 0], [180, 95, [], 1364, 17, 0], [15, 100, [], 780, 18, 0], [111, 81, [], 798, 19, 0], [115, 83, [], 793, 20, 0], [121, 90, [], 698, 21, 0], [28, 95, [], 743, 22, 0], [139, 84, [], 843, 23, 0], [5, 97, [], 1544, 24, 0], [66, 91, [], 856, 25, 0], [8, 98, [], 2332, 26, 0], [20, 95, [], 1419, 27, 0], [57, 94, [], 910, 28, 0], [231, 93, [], 806, 29, 0], [229, 94, [], 785, 30, 0], [35, 99, [], 2200, 31, 0], [186, 97, [], 881, 32, 0], [134, 94, [], 933, 33, 0], [206, 98, [], 957, 34, 0], [267, 97, [], 944, 35, 0]];

function sortFunction(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] < b[2]) ? 1 : -1;
    }
}

var ALGO = 1;

function calculate() {

    var groups = ["GOT", "HP", "F", "TO", "WW", "PP", "ALA", "L",
        "DS9", "MCU", "T7S", "GA", "S", "SW", "BB", "LOTR", "DA", "BBT",
        "PR", "FS", "TD", "C", "WD", "HG", "FC", "SC", "D",
        "TW", "WSW", "DK", "LK", "CB", "BSG", "MM",
        "BVS", "CRA", "JP", "PC", "SL", "SV", "SVU", "TP",
        "CBP", "M", "RJ", "GG", "XF", "SG1", "MG", "SB",
        "RH", "LW", "I", "A", "TS",
        "ONB", "FNL", "AS", "B99", "R", "PF", "T", "SF", "THM", "NCIS", "TIU", "AD", "O", "MASH",
        "OFOCN", "DUNE", "AK", "SCRUBS", "TNG", "G", "PB", "MNT", "DH",
        "GBU", "RLA", "FG", "SsC", "GLEE", "H", "GP", "WO", "CAS",
        "T100", "SCDL", "HGAWM",
        "RD", "SPF", "GOG", "ARW", "UA", "HNB", "VD", "CSI",
        "MR", "FL", "TGD", "V", "TGW", "OB", "MU", "KE", "TIHAY",
        "BC", "CSTL", "DAM", "BL", "FAR", "FF", "O11", "TDPT",
        "SR", "SOP", "HIMYM", "LS", "GF", "GWW", "TSL", "TND",
        "BI", "RM", "TM",

        "AHX", "R30", "UKS", "BTF", "T2", "NES", "CITW",
        "GO", "SD", "ZL", "CXG", "HAM", "P", "MH", "MMFR",
        "GLAD", "ESSM", "SUC", "SN", "HUS", "BS", "TRNF", "MLP",
        "SP", "NG", "LM", "GILG", "ARCH", "GB", "DWP", "SPEED",
        "LU", "Y", "TF", "PK", "FR", "SM", "WSS", "VK", "ENT",
        "BLL", "SU", "EG", "XM", "SG", "FN", "LEGO", "TLM", "SNW",
        "S7", "GONEG", "TN", "BDS", "ASP", "SUI", "MONH", "AoS",
        "HT", "OUT", "SMV", "AL", "OL", "BATB", "PBWF", "DHSAB",
        "BCS", "BW", "JV", "GTH", "DGI", "RAT", "COCO", "S8", "ID",
        "SHL", "BOBB", "FB", "OD",


        "QG", "BSU", "BLKL", "BKSM", "DS", "MCB", "HML", "CF", "BLB", "WWCF", "JB",
        "ELM", "SS", "FUTR", "WE", "TB", "TRT", "EM", "SA", "PKB", "CM",
        "DARK", "MF", "PYO", "GWH", "CAD", "HO", "MHC", "SK", "TT", "ST", "TA",
        "PA", "CH", "B", "WC", "PSY"
    ];

    var u = document.getElementById("universe_select").value;

    if (u != "") {
        groups = [u];
    }

    var matches = [];

    for (var g = 0; g < groups.length; g++) {

        for (var c = 1; c <= Object.keys(scores_db[groups[g]]).length; c++) {
            var x = [];
            var y = [];

            for (var i = 0; i < user_scores.length; i++) {
                var t_id = user_scores[i][0];
                var t_s = user_scores[i][1];

                if (user_scores[i][5] == 1) {
                    continue;
                }

                x.push(scores_db[groups[g]][c][t_id - 1]);
                y.push(t_s);
            }

            if (document.getElementById("algorithm_select").value == "UPC") {
                matches.push([c, groups[g], Math.round(100 * (1 + pcorr(x, y)) / 2, 2)]);
            }
            else if (document.getElementById("algorithm_select").value == "UMD") {
                matches.push([c, groups[g], Math.round(100 - 2 * MeanDifference(x, y), 2)]);
            }
        }
    }

    matches.sort(sortFunction);

    document.getElementById("output").innerHTML = "";

    for (var c = 0; c < matches.length; c++) {
        document.getElementById("output").innerHTML += "<li><a href='https://openpsychometrics.org/tests/characters/stats/" + matches[c][1] + "/" + matches[c][0] + "/'>" + subjects[matches[c][1]][matches[c][0]][0] + "</a> (" + subjects[matches[c][1]]["name"] + "): " + matches[c][2] + "%</li>";
    }

    graphData = [];
    var matchx = matches[0];

    for (var i = 0; i < user_scores.length; i++) {
        var t_id = user_scores[i][0];
        var t_s = user_scores[i][1];

        if (user_scores[i][5] == 1) {
            continue;
        }

        var ys = t_s;
        var cs = scores_db[matchx[1]][matchx[0]][t_id - 1];

        graphData.push([parseInt(ys), parseInt(cs), measures[t_id][1] + " (versus " + measures[t_id][0] + ")\nYour score: " + ys + "\nCharacter score: " + cs]);
    }

    var cdiv = document.getElementById("chart_div");


    if (window.innerWidth > 500) {
        cdiv.style.width = "490px";
        cdiv.style.height = "490px";
    }
    else {
        cdiv.style.width = (window.innerWidth - 10) + "px";
        cdiv.style.height = (window.innerWidth - 10) + "px";
    }

    BEST_MATCH_NAME = subjects[matchx[1]][matchx[0]][0];
    document.getElementById("char_percent").innerHTML = matchx[2];

    document.getElementById("profile_pic").src = "https://openpsychometrics.org/tests/characters/test-resources/pics/" + subjects[matchx[1]][matchx[0]][1];

    document.getElementById("match_name_disp").innerHTML = "<b>" + subjects[matchx[1]][matchx[0]][0] + "</b> (" + subjects[matchx[1]]["name"] + ")";

    google.charts.load('current', { 'packages': ['corechart'] });

    google.setOnLoadCallback(drawVisualization);
}

var BEST_MATCH_NAME = "";


function drawVisualization(cname) {

    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn('number', 'char');
    dataTable.addColumn('number', 'you');

    // column for tooltip content
    dataTable.addColumn({ type: 'string', role: 'tooltip' });

    dataTable.addRows(
        graphData
    );

    var options = {
        hAxis: { title: 'You', minValue: 0, maxValue: 100, gridlines: { count: 1 } },
        vAxis: { title: BEST_MATCH_NAME, minValue: 0, maxValue: 100, gridlines: { count: 1 } },
        legend: 'none',
        backgroundColor: { fill: "#F5F5F5" },
        'chartArea': { 'width': '80%', 'height': '80%' },
    };


    // create and draw the visualization.
    var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    chart.draw(dataTable, options);
}

function show() {
    document.getElementById("match_list_placeholder").style.display = "none";
    document.getElementById("match_list").style.display = "block";
}

function hide() {
    document.getElementById("match_list_placeholder").style.display = "block";
    document.getElementById("match_list").style.display = "none";
}

function rate_test(r, u) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "feedback_rate.php?r=" + r + "&u=" + u, true);
    xmlHttp.send(null);

    document.getElementById("feedback_form").style.display = "none";
    document.getElementById("feedback_thanks").style.display = "block";

}

function gcs_check() {
    var el = document.getElementsByClassName("p402_hide")[0];

    if (el.offsetParent === null) {
        console.log("hidden");
    }
    else {
        console.log("open");
    }

    setTimeout("gcs_check()", 150);
}

window.onload = function () {
    calculate();

    if (true) {
        hideCompleteResults();
    }
    setTimeout("console.log(window._402nosurvey);", 1000);

    setTimeout("console.log(window._402nosurvey);", 2000);
}

function hideCompleteResults() {
    document.getElementById("matchlockedbox").style.display = "block";
    document.getElementById("matchlistcontainer").style.display = "none";
}

function openCompleteResults() {
    document.getElementById("matchlockedbox").style.display = "none";
    document.getElementById("matchlistcontainer").style.display = "block";

    try { _402_Show(); } catch (e) { console.log(e); }

    var elmnt = document.getElementById("listmark");
    elmnt.scrollIntoView();
}