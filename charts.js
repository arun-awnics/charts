var ctxInd = document.getElementById("myChartInd");
var ctxIsr = document.getElementById("myChartIsr");

var myChartInd = new Chart(ctxInd, {
    type: 'line',
    data: {
        labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008",
            "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"
        ],
        datasets: [{
                label: 'Rural population',
                data: [761703316, 772342667, 782001991, 791442131, 800648753, 809635580,
                    818392527, 826885768, 835057853, 842861327, 850238363, 857150489,
                    863545492, 869499014, 875088795, 880378073, 885393934
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1
            },
            {
                label: 'Rural population (% of total population)',
                data: [72.333, 72.082, 71.756, 71.428, 71.097, 70.765,
                    70.431, 70.094, 69.754, 69.413, 69.07, 68.724,
                    68.369, 68.006, 67.634, 67.253, 66.864
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Rural population growth (annual %)',
                data: [1.47812858337624, 1.38711899257329, 1.24289658628947, 1.19994769938629,
                    1.15655767109907, 1.11619049132619, 1.07578381680643, 1.03244739449379,
                    0.983445017170553, 0.930143758276504, 0.871429216740337, 0.809676571770577,
                    0.743307651622444, 0.687062034384823, 0.640816140022156, 0.602608240861579,
                    0.568122551636081
                ],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Rural poverty gap at national poverty lines (%)',
                data: ["N.A", "N.A", "N.A", "N.A", 9.2, "N.A", "N.A", "N.A", "N.A", 6.8,
                    "N.A", 4.6, "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Urban population',
                data: [291347596, 299135188, 307805121, 316585717, 325487024, 334483094, 343585192,
                    352795471, 362089053, 371408805, 380742328, 390085540, 399520360,
                    409063193, 418770499, 428675907, 438777420
                ],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Urban population (% of total)',
                data: [27.667, 27.918, 28.244, 28.572, 28.903, 29.235, 29.569,
                    29.906, 30.246, 30.587, 30.93, 31.276, 31.631,
                    31.994, 32.366, 32.747, 33.136
                ],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Urban population growth (annual %)',
                data: [2.55003754722718, 2.63785626774386, 2.85712537050068, 2.81271740278297, 2.77285633095432,
                    2.72637411542578, 2.6848755372523, 2.64533941912174, 2.60016975858339, 2.54131718959927, 2.4819485637256,
                    2.42432065392539, 2.38986792053683, 2.36049226080764, 2.3453384556515, 2.33781371077401, 2.32910966691084
                ],
                backgroundColor: [
                    'rgba(153, 65, 89, 0.2)'
                ],
                borderColor: [
                    'rgba(153, 65, 89, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Urban poverty gap at national poverty lines (%)',
                data: ["N.A", "N.A", "N.A", "N.A", 5.8, "N.A", "N.A", "N.A", "N.A", 4.5,
                    "N.A", 2.5, "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(68, 54, 48, 0.2)'
                ],
                borderColor: [
                    'rgba(68, 54, 48, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'People practicing open defecation (% of population)',
                data: [63.3, 62, 60.7, 59.3, 58, 56.6, 55.3, 53.9, 52.6, 51.3,
                    49.9, 48.6, 47.3, 45.9, 44.6, 44.4, "N.A"
                ],
                backgroundColor: [
                    'rgba(156, 200, 50, 0.2)'
                ],
                borderColor: [
                    'rgba(156, 200, 50, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'People practicing open defecation, rural (% of rural population)',
                data: [79.3, 78, 76.7, 75.5, 74.2, 72.9, 71.6, 70.3, 69, 67.7,
                    66.4, 65.1, 63.8, 62.6, 61.3, 61.3, "N.A"
                ],
                backgroundColor: [
                    'rgba(50, 157, 56, 0.2)'
                ],
                borderColor: [
                    'rgba(50, 157, 56, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'People practicing open defecation, urban (% of urban population)',
                data: [21.4, 20.6, 19.8, 18.9, 18.1, 17.3, 16.4, 15.6,
                    14.8, 13.9, 13.1, 12.3, 11.4, 10.6, 9.8, 9.8, "N.A"
                ],
                backgroundColor: [
                    'rgba(20, 100, 200, 0.2)'
                ],
                borderColor: [
                    'rgba(20, 100, 200, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Incidence of tuberculosis (per 100,000 people)',
                data: [289, 288, 287, 285, 282, 279, 274, 268, 261, 254, 247, 241, 234,
                    228, 223, 217, "N.A"
                ],
                backgroundColor: [
                    'rgba(20, 5, 54, 0.2)'
                ],
                borderColor: [
                    'rgba(20, 5, 54, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Tuberculosis case detection rate (%, all forms)',
                data: [37, 35, 34, 34, 36, 36, 39, 41, 43, 44, 44, 44, 44, 43, 56, 59, "N.A"],
                backgroundColor: [
                    'rgba(20, 65, 95, 0.2)'
                ],
                borderColor: [
                    'rgba(20, 65, 95, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Tuberculosis treatment success rate (% of new cases)',
                data: [34, 54, 60, 76, 81, 87, 87, 88, 88, 89, 89, 89, 88, 88, 74, "N.A", "N.A"],
                backgroundColor: [
                    'rgba(20, 54, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(20, 54, 0, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Fixed telephone subscriptions',
                data: [32436134, 38536187, 41420000, 42000000, 46198025, 50176509, 40770000,
                    39250000, 37900000, 37060000, 35090000, 32835261, 30940618, 29032974, 27000105,
                    25520000, "N.A"
                ],
                backgroundColor: [
                    'rgba(0, 100, 50, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 100, 50, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Fixed telephone subscriptions (per 100 people)',
                data: [3.112090965, 3.637201954, 3.846919276, 3.839870938, 4.159637944, 4.451652062,
                    3.566026396, 3.386261828, 3.22645912, 3.113924423, 2.910524437,
                    2.688866322, 2.501896171, 2.318669108, 2.130350766, 1.990033763, "N.A"
                ],
                backgroundColor: [
                    'rgba(0, 50, 100, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 50, 100, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Access to electricity (% of population)',
                data: [59.56223679, 55.8, 62.3, 63.68630219, 64.4, 66.4319458, 67.9,
                    69.21004486, 70.61524963, 75, 76.3, 67.6, 79.9,
                    77.73751831, 79.16925812, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(50, 0, 80, 0.2)'
                ],
                borderColor: [
                    'rgba(50, 0, 80, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Access to electricity, rural (% of rural population)',
                data: [47.84576797, 43.6, 50.86945343, 52.38101196, 53.90047455,
                    55.43389893, 55.7, 58.56528473, 60.16558075, 66, 65.7, 55.8,
                    72.7, 68.37213135, 70.02897644, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(0, 0, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Access to electricity, urban (% of urban population)',
                data: [90.19394023, 87.6, 91.34016077, 91.94873633, 90.22724154,
                    93.05335118, 93.1, 94.15934654, 94.71450917, 96.1,
                    94, 92.9, 96.1, 97.64445415, 98.26935731, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(5, 10, 15, 0.2)'
                ],
                borderColor: [
                    'rgba(5, 10, 15, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'PM2.5 air pollution, mean annual exposure (micrograms per cubic meter)',
                data: [61.49603362, "N.A", "N.A", "N.A", "N.A", 65.66193004, "N.A", "N.A",
                    "N.A", "N.A", 64.63060009, 63.86602195, 66.08989937, 68.96813884,
                    71.62337709, 74.32984681, "N.A"
                ],
                backgroundColor: [
                    'rgba(65,64,65, 0.2)'
                ],
                borderColor: [
                    'rgba(65,64,65, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'PM2.5 air pollution, population exposed to levels exceeding WHO guideline value (% of total)',
                data: [99.98, "N.A", "N.A", "N.A", "N.A", 99.99, "N.A", "N.A",
                    "N.A", "N.A", 99.98, 99.98, 99.99, 99.99, 99.99, 99.99, "N.A"
                ],
                backgroundColor: [
                    'rgba(65,46,48, 0.2)'
                ],
                borderColor: [
                    'rgba(65,46,48, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Cause of death, by communicable diseases and maternal, prenatal and nutrition conditions (% of total)',
                data: [43.7, "N.A", "N.A", "N.A", "N.A", 39.5, "N.A", "N.A",
                    "N.A", "N.A", 33.4, "N.A", "N.A", "N.A", "N.A", 28.1, "N.A"
                ],
                backgroundColor: [
                    'rgba(15,16,89, 0.2)'
                ],
                borderColor: [
                    'rgba(15,16,89, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Cause of death, by non-communicable diseases (% of total)',
                data: [46.1, "N.A", "N.A", "N.A", "N.A", 50, "N.A", "N.A",
                    "N.A", "N.A", 55.7, "N.A", "N.A", "N.A", "N.A", 60.8, "N.A"
                ],
                backgroundColor: [
                    'rgba(06,49,83, 0.2)'
                ],
                borderColor: [
                    'rgba(06,49,83, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Births attended by skilled health staff (% of total)',
                data: [42.5, "N.A", "N.A", "N.A", "N.A", "N.A", 46.6, "N.A",
                    52.3, "N.A", 55.7, "N.A", "N.A", "N.A", 81.4, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(68,73,2, 0.2)'
                ],
                borderColor: [
                    'rgba(68,73,2, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Community health workers (per 1,000 people)',
                data: ["N.A", "N.A", "N.A", "N.A", 0.047, 0.046, "N.A", "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(64,64,12, 0.2)'
                ],
                borderColor: [
                    'rgba(64,64,12, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'External resources for health (% of total expenditure on health)',
                data: [0.54682082, 2.3455874, 0.27060095, 2.27621092, 2.22875655, 1.35869195,
                    1.22833141, 1.25907825, 1.51507999, 1.03320229, 1.27177203, 1.05733773,
                    1.15393159, 0.89472809, 0.95014852, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(98,76,46, 0.2)'
                ],
                borderColor: [
                    'rgba(98,76,46, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure per capita (current US$)',
                data: [19.60910784, 20.94381975, 21.06363291, 23.64568952, 26.80475703,
                    31.33998843, 34.64005687, 43.21204716, 46.91282666, 48.22854553,
                    59.18429667, 65.70508993, 64.92645947, 68.53283666, 74.99460433, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(61,43,93, 0.2)'
                ],
                borderColor: [
                    'rgba(61,43,93, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure per capita, PPP (constant 2011 international $)',
                data: [85.21068862, 94.68935605, 96.04216644, 101.4556394, 108.7334836,
                    122.5081237, 134.7347747, 148.9023605, 159.5943786, 173.4203991,
                    186.71596, 202.9518201, 217.1842987, 240.1245075, 267.408625, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(156,49,68, 0.2)'
                ],
                borderColor: [
                    'rgba(156,49,68, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'ARI treatment (% of children under 5 taken to a health provider)',
                data: ["N.A", "N.A", "N.A", "N.A", "N.A", "N.A", 68.7, "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", 76.9, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(18,235,43, 0.2)'
                ],
                borderColor: [
                    'rgba(18,235,43, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, private (% of GDP)',
                data: [3.151313451, 3.418514058, 3.375310593, 3.311607084, 3.197457824,
                    3.14791701, 3.136070657, 3.126930436, 3.176751508, 3.154766339,
                    3.118664001, 3.155774073, 3.205169252, 3.242231486, 3.277850712, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(156,236,56, 0.2)'
                ],
                borderColor: [
                    'rgba(156,236,56, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, public (% of GDP)',
                data: [1.112443009, 1.077996182, 1.025761987, 0.984930506, 1.022681766,
                    1.1342577, 1.110610623, 1.099600724, 1.162740942, 1.220971081,
                    1.161015809, 1.175376637, 1.183872748, 1.286886584, 1.407237618, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(84,132,1, 0.2)'
                ],
                borderColor: [
                    'rgba(84,132,1, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, public (% of government expenditure)',
                data: [4.38714412, 4.25354251, 3.82039385, 3.60425477, 4.03832739, 4.50839964,
                    4.39922564, 4.42518742, 4.34361163, 4.36884071, 4.2912175, 4.42150035,
                    4.48916295, 4.65673641, 5.04773107, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(45,46,51, 0.2)'
                ],
                borderColor: [
                    'rgba(45,46,51, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, public (% of total health expenditure)',
                data: [26.09067894, 23.97406264, 23.3070909, 22.92381912, 24.23336347,
                    26.48788938, 26.15243644, 26.01662409, 26.79439947, 27.90320724,
                    27.1285671, 27.13774505, 26.97337478, 28.41362412, 30.03652267, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(116,235,45, 0.2)'
                ],
                borderColor: [
                    'rgba(116,235,45, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, total (% of GDP)',
                data: [4.26375646, 4.49651024, 4.40107258, 4.29653759, 4.22013959, 4.28217471,
                    4.24668128, 4.22653116, 4.33949245, 4.37573742, 4.27967981, 4.33115071,
                    4.389042, 4.52911807, 4.68508833, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(26,56,54, 0.2)'
                ],
                borderColor: [
                    'rgba(26,56,54, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Out-of-pocket health expenditure (% of private expenditure on health)',
                data: [91.80860165, 92.41024699, 91.92023259, 91.61078604, 89.55372963,
                    89.64590967, 89.03092001, 88.19757106, 87.9596877, 87.83848361,
                    86.96277155, 88.43311469, 88.8496293, 89.1380325, 89.21420947, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(15,215,34, 0.2)'
                ],
                borderColor: [
                    'rgba(15,215,34, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Out-of-pocket health expenditure (% of total expenditure on health)',
                data: [67.85511415, 70.25575649, 70.49630043, 70.61009515, 67.85184883,
                    65.90060028, 65.74716524, 65.25154054, 64.39141761, 63.32872949,
                    63.37101772, 64.43436149, 64.8838858, 63.810687, 62.41736322, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(51,236,51, 0.2)'
                ],
                borderColor: [
                    'rgba(51,236,51, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Women participating in the three decisions (own health care, major household purchases, and visiting family) (% of women age 15-49)',
                data: ["N.A", "N.A", "N.A", "N.A", "N.A", "N.A", 39.3, "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(48,54,66, 0.2)'
                ],
                borderColor: [
                    'rgba(48,54,66, 1)'
                ],
                borderWidth: 1
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true
        },
        legend: {
            display: true
        }
    }
});

var myChartIsr = new Chart(ctxIsr, {
    type: 'line',
    data: {
        labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008",
            "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"
        ],
        datasets: [{
                label: 'Rural population',
                data: [553243, 562318, 569619, 575782, 581761, 587811, 593922, 600185,
                    606484, 616589, 623306, 630117, 636874, 643793, 651012, 658676, 666246
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1
            },
            {
                label: 'Rural population (% of total population)',
                data: [8.797, 8.733, 8.67, 8.607, 8.544, 8.482, 8.42, 8.359, 8.298,
                    8.237, 8.176, 8.114, 8.051, 7.988, 7.924, 7.86, 7.795
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Rural population growth (annual %)',
                data: [1.917431248, 1.627019982, 1.290019012, 1.076140055, 1.033059363,
                    1.034575719, 1.034252995, 1.048994342, 1.044040614, 1.652432836, 1.083489443,
                    1.086794648, 1.066631738, 1.080541205, 1.115082935, 1.170368436, 1.142721213
                ],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Rural poverty gap at national poverty lines (%)',
                data: ["N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Urban population',
                data: [5735757, 5876682, 6000381, 6113918, 6227239, 6342289, 6459778, 6579915,
                    6702316, 6869011, 7000294, 7135683, 7273626, 7415707, 7564688, 7721424, 7880854
                ],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Urban population (% of total)',
                data: [91.203, 91.267, 91.33, 91.393, 91.456, 91.518, 91.58, 91.641, 91.702,
                    91.763, 91.824, 91.886, 91.949, 92.012, 92.076, 92.14, 92.205
                ],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Urban population growth (annual %)',
                data: [2.712530951, 2.427257854, 2.083065028, 1.874484433, 1.836524486,
                    1.83066879, 1.835520758, 1.842687544, 1.843131099, 2.456699832, 1.893201155,
                    1.915582347, 1.91469576, 1.934538907, 1.989078551, 2.050769916, 2.043747065
                ],
                backgroundColor: [
                    'rgba(153, 65, 89, 0.2)'
                ],
                borderColor: [
                    'rgba(153, 65, 89, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Urban poverty gap at national poverty lines (%)',
                data: ["N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(68, 54, 48, 0.2)'
                ],
                borderColor: [
                    'rgba(68, 54, 48, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'People practicing open defecation (% of population)',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "N.A"],
                backgroundColor: [
                    'rgba(156, 200, 50, 0.2)'
                ],
                borderColor: [
                    'rgba(156, 200, 50, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'People practicing open defecation, rural (% of rural population)',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "N.A"],
                backgroundColor: [
                    'rgba(50, 157, 56, 0.2)'
                ],
                borderColor: [
                    'rgba(50, 157, 56, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'People practicing open defecation, urban (% of urban population)',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "N.A"],
                backgroundColor: [
                    'rgba(20, 100, 200, 0.2)'
                ],
                borderColor: [
                    'rgba(20, 100, 200, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Incidence of tuberculosis (per 100,000 people)',
                data: [10, 9.6, 8.6, 8.5, 8.1, 6.5, 5.8, 6.6, 5.2, 5.5,
                    5.3, 6.3, 7.6, 4.5, 5.2, 4, "N.A"
                ],
                backgroundColor: [
                    'rgba(20, 5, 54, 0.2)'
                ],
                borderColor: [
                    'rgba(20, 5, 54, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Tuberculosis case detection rate (%, all forms)',
                data: [87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, "N.A"],
                backgroundColor: [
                    'rgba(20, 65, 95, 0.2)'
                ],
                borderColor: [
                    'rgba(20, 65, 95, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Tuberculosis treatment success rate (% of new cases)',
                data: [86, 86, 87, 84, 87, 86, 84, 82, 88, 88, 84, 78, 81, 84, 89, "N.A", "N.A"],
                backgroundColor: [
                    'rgba(20, 54, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(20, 54, 0, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Fixed telephone subscriptions',
                data: [2974000, 3033000, 3006000, 2913000, 2896000, 2936295, 3004653, 3074602,
                    3224000, 3316000, 3408000, 3500000, 3594000, 3399000, 3427000, 3412000, "N.A"
                ],
                backgroundColor: [
                    'rgba(0, 100, 50, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 100, 50, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Fixed telephone subscriptions (per 100 people)',
                data: [49.45365682, 49.48128668, 48.18112255, 45.88281658, 44.77182294, 44.46454604,
                    44.4556776, 44.36611589, 45.3648238, 45.58825066, 45.92764132, 46.40477667,
                    47.01785279, 43.95366231, 43.8117249, 43.08337568, "N.A"
                ],
                backgroundColor: [
                    'rgba(0, 50, 100, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 50, 100, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Access to electricity (% of population)',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                    100, 100, 100, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(50, 0, 80, 0.2)'
                ],
                borderColor: [
                    'rgba(50, 0, 80, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Access to electricity, rural (% of rural population)',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                    100, 100, 100, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(0, 0, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Access to electricity, urban (% of urban population)',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                    100, 100, 100, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(5, 10, 15, 0.2)'
                ],
                borderColor: [
                    'rgba(5, 10, 15, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'PM2.5 air pollution, mean annual exposure (micrograms per cubic meter)',
                data: [17.12624191, "N.A", "N.A", "N.A", "N.A", 16.73646008, "N.A", "N.A",
                    "N.A", "N.A", 18.08463961, 17.82445218, 18.01229813, 18.96548792,
                    19.94741583, 21.09447276, "N.A"
                ],
                backgroundColor: [
                    'rgba(65,64,65, 0.2)'
                ],
                borderColor: [
                    'rgba(65,64,65, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'PM2.5 air pollution, population exposed to levels exceeding WHO guideline value (% of total)',
                data: [100, "N.A", "N.A", "N.A", "N.A", 100, "N.A", "N.A",
                    "N.A", "N.A", 100, 100, 100, 100, 100, 100, "N.A"
                ],
                backgroundColor: [
                    'rgba(65,46,48, 0.2)'
                ],
                borderColor: [
                    'rgba(65,46,48, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Cause of death, by communicable diseases and maternal, prenatal and nutrition conditions (% of total)',
                data: [6.7, "N.A", "N.A", "N.A", "N.A", 6.5, "N.A", "N.A",
                    "N.A", "N.A", 7.7, "N.A", "N.A", "N.A", "N.A", 9.6, "N.A"
                ],
                backgroundColor: [
                    'rgba(15,16,89, 0.2)'
                ],
                borderColor: [
                    'rgba(15,16,89, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Cause of death, by non-communicable diseases (% of total)',
                data: [87.5, "N.A", "N.A", "N.A", "N.A", 87.8, "N.A", "N.A",
                    "N.A", "N.A", 86.9, "N.A", "N.A", "N.A", "N.A", 86, "N.A"
                ],
                backgroundColor: [
                    'rgba(06,49,83, 0.2)'
                ],
                borderColor: [
                    'rgba(06,49,83, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Births attended by skilled health staff (% of total)',
                data: ["N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(68,73,2, 0.2)'
                ],
                borderColor: [
                    'rgba(68,73,2, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Community health workers (per 1,000 people)',
                data: ["N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(64,64,12, 0.2)'
                ],
                borderColor: [
                    'rgba(64,64,12, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'External resources for health (% of total expenditure on health)',
                data: ["N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(98,76,46, 0.2)'
                ],
                borderColor: [
                    'rgba(98,76,46, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure per capita (current US$)',
                data: [1490.048241, 1531.732025, 1366.905375, 1394.665025, 1445.933093,
                    1515.13435, 1592.649473, 1813.204363, 2145.391241, 2057.350086,
                    2247.646031, 2460.499391, 2514.567804, 2853.692444, 2910.288637, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(61,43,93, 0.2)'
                ],
                borderColor: [
                    'rgba(61,43,93, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure per capita, PPP (constant 2011 international $)',
                data: [1761.711912, 1880.815516, 1870.273692, 1750.576161, 1834.010497,
                    1829.320326, 1872.929651, 2004.384643, 1990.509134, 2041.132432,
                    2116.068777, 2231.816388, 2446.055935, 2571.885879, 2599.132254, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(156,49,68, 0.2)'
                ],
                borderColor: [
                    'rgba(156,49,68, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'ARI treatment (% of children under 5 taken to a health provider)',
                data: ["N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(18,235,43, 0.2)'
                ],
                borderColor: [
                    'rgba(18,235,43, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, private (% of GDP)',
                data: [2.509511594, 2.744892785, 2.593438275, 2.704115941, 2.712129328,
                    2.87981012, 2.677062464, 2.80800042, 2.766942027, 2.826508494,
                    2.665349368, 2.70512966, 2.868714755, 3.036182234, 3.056612272, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(156,236,56, 0.2)'
                ],
                borderColor: [
                    'rgba(156,236,56, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, public (% of GDP)',
                data: [4.460361462, 4.719172153, 4.737818754, 4.587586374,
                    4.473436246, 4.408425818, 4.702560226, 4.56088595, 4.471592985, 4.560773264,
                    4.612276482, 4.618524658, 4.865016995, 4.857808386, 4.751695808, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(84,132,1, 0.2)'
                ],
                borderColor: [
                    'rgba(84,132,1, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, public (% of government expenditure)',
                data: [9.28964979, 9.43486172, 9.22950675, 9.1448002, 9.52848999, 9.60881908,
                    10.53208816, 10.67554019, 10.59330686, 10.83466235, 11.17887416,
                    11.26701653, 11.76268565, 11.76268565, 11.56967868, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(45,46,51, 0.2)'
                ],
                borderColor: [
                    'rgba(45,46,51, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, public (% of total health expenditure)',
                data: [62.56394689, 62.01053733, 63.24188659, 61.69277257, 60.89523476,
                    59.29198037, 63.7235862, 61.89382928, 61.00403477, 61.14689564,
                    62.69257664, 62.45988006, 62.90646162, 61.53805622, 60.85435871, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(116,235,45, 0.2)'
                ],
                borderColor: [
                    'rgba(116,235,45, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Health expenditure, total (% of GDP)',
                data: [7.12928401, 7.61027457, 7.49158352, 7.43618123, 7.34611873, 7.43511313,
                    7.37962269, 7.36888637, 7.32999547, 7.45871596, 7.35697387, 7.39438605,
                    7.73373175, 7.89399062, 7.80830808, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(26,56,54, 0.2)'
                ],
                borderColor: [
                    'rgba(26,56,54, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Out-of-pocket health expenditure (% of private expenditure on health)',
                data: [80.47548214, 80.56389773, 77.53557611, 75.95266828, 75.22775183,
                    75.50610314, 71.76480868, 70.89433314, 68.96364547, 68.94284131,
                    67.31216762, 67.02519333, 67.55748096, 68.91641511, 68.9297045, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(15,215,34, 0.2)'
                ],
                borderColor: [
                    'rgba(15,215,34, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Out-of-pocket health expenditure (% of total expenditure on health)',
                data: [28.3274106, 29.05798728, 26.84128532, 27.6196632, 27.77349502,
                    29.24545143, 26.03369896, 27.01511561, 26.03254119, 26.12614927,
                    24.38644565, 24.52020184, 25.05946013, 26.50659284, 26.98297487, "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(51,236,51, 0.2)'
                ],
                borderColor: [
                    'rgba(51,236,51, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Women participating in the three decisions (own health care, major household purchases, and visiting family) (% of women age 15-49)',
                data: ["N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A",
                    "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A", "N.A"
                ],
                backgroundColor: [
                    'rgba(48,54,66, 0.2)'
                ],
                borderColor: [
                    'rgba(48,54,66, 1)'
                ],
                borderWidth: 1
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true
        },
        legend: {
            display: true
        }
    }
});