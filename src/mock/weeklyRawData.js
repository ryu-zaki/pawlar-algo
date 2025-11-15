const windows = {
    breakfast: { start: 300, end: 659 }, //5:00 - 10:59
    lunch: { start: 660, end: 1019 }, // 11:00 - 4:59
    dinner: { start: 1020, end: 1379 }
};

const day1Events = [
    { time: 420, servings: 1 },
    { time: 615, servings: 1 },
    { time: 810, servings: 1 },
    { time: 1020, servings: 1 },
    { time: 1230, servings: 1 }
];

const day2Events = [
    { time: 480, servings: 1 },
    { time: 720, servings: 1 },
    { time: 930, servings: 1 },
    { time: 1140, servings: 1 }

];

const day3Events = [
    { time: 390, servings: 1 },
    { time: 585, servings: 1 },
    { time: 780, servings: 1 },
    { time: 975, servings: 1 },
    { time: 1170, servings: 1 },
    { time: 1350, servings: 1 }
];

const day4Events = [
    { time: 450, servings: 1 },
    { time: 645, servings: 1 },
    { time: 1080, servings: 1 },
    { time: 1275, servings: 1 }
];

const day5Events = [
    { time: 540, servings: 1 },
    { time: 750, servings: 1 },
    { time: 960, servings: 1 },
    { time: 1170, servings: 1 },
    { time: 1365, servings: 1 }
];

const day6Events = [
    { time: 360, servings: 1 },
    { time: 555, servings: 1 },
    { time: 750, servings: 1 },
    { time: 945, servings: 1 },
    { time: 1140, servings: 1 },
    { time: 1335, servings: 1 }
];

const day7Events = [
    { time: 480, servings: 1 },
    { time: 690, servings: 1 },
    { time: 900, servings: 1 },
    { time: 1110, servings: 1 }
];

const weeklyRawData = [
    day1Events,
    day2Events,
    day3Events,
    day4Events,
    day5Events,
    day6Events,
    day7Events
];

const day1Events_set1 = [
    { time: 330, servings: 1 },
    { time: 620, servings: 1 },
    { time: 815, servings: 1 },
    { time: 1025, servings: 1 },
    { time: 1235, servings: 1 }
];

const day2Events_set1 = [
    { time: 585, servings: 1 },
    { time: 725, servings: 1 },
    { time: 935, servings: 1 },
    { time: 1145, servings: 1 }
];

const day3Events_set1 = [
    { time: 395, servings: 1 },
    { time: 590, servings: 1 },
    { time: 785, servings: 1 },
    { time: 980, servings: 1 },
    { time: 1175, servings: 1 },
    { time: 1355, servings: 1 }
];

const day4Events_set1 = [
    { time: 455, servings: 1 },
    { time: 650, servings: 1 },
    { time: 1085, servings: 1 },
    { time: 1280, servings: 1 }
];

const day5Events_set1 = [
    { time: 545, servings: 1 },
    { time: 755, servings: 1 },
    { time: 965, servings: 1 },
    { time: 1175, servings: 1 },
    { time: 1370, servings: 1 }
];

const day6Events_set1 = [
    { time: 365, servings: 1 },
    { time: 560, servings: 1 },
    { time: 755, servings: 1 },
    { time: 950, servings: 1 },
    { time: 1145, servings: 1 },
    { time: 1340, servings: 1 }
];

const day7Events_set1 = [
    { time: 485, servings: 1 },
    { time: 695, servings: 1 },
    { time: 905, servings: 1 },
    { time: 1115, servings: 1 }
];

const weeklyRawData_set1 = [
    day1Events_set1,
    day2Events_set1,
    day3Events_set1,
    day4Events_set1,
    day5Events_set1,
    day6Events_set1,
    day7Events_set1
];

// Set 2
const day1Events_set2 = [
    { time: 410, servings: 1 },
    { time: 600, servings: 1 },
    { time: 800, servings: 1 },
    { time: 1010, servings: 1 }
];

const day2Events_set2 = [
    { time: 470, servings: 1 },
    { time: 710, servings: 1 },
    { time: 920, servings: 1 },
    { time: 1130, servings: 1 },
    { time: 1300, servings: 1 }
];

const day3Events_set2 = [
    { time: 380, servings: 1 },
    { time: 575, servings: 1 },
    { time: 770, servings: 1 },
    { time: 965, servings: 1 },
    { time: 1160, servings: 1 }
];

const day4Events_set2 = [
    { time: 440, servings: 1 },
    { time: 635, servings: 1 },
    { time: 1070, servings: 1 },
    { time: 1265, servings: 1 },
    { time: 1380, servings: 1 }
];

const day5Events_set2 = [
    { time: 530, servings: 1 },
    { time: 740, servings: 1 },
    { time: 950, servings: 1 }
];

const day6Events_set2 = [
    { time: 350, servings: 1 },
    { time: 545, servings: 1 },
    { time: 740, servings: 1 },
    { time: 935, servings: 1 },
    { time: 1130, servings: 1 },
    { time: 1325, servings: 1 }
];

const day7Events_set2 = [
    { time: 470, servings: 1 },
    { time: 680, servings: 1 },
    { time: 890, servings: 1 },
    { time: 1100, servings: 1 }
];

const weeklyRawData_set2 = [
    day1Events_set2,
    day2Events_set2,
    day3Events_set2,
    day4Events_set2,
    day5Events_set2,
    day6Events_set2,
    day7Events_set2
];

// Set 3
const day1Events_set3 = [
    { time: 440, servings: 1 },
    { time: 630, servings: 1 },
    { time: 825, servings: 1 },
    { time: 1035, servings: 1 },
    { time: 1245, servings: 1 },
    { time: 1350, servings: 1 }
];

const day2Events_set3 = [
    { time: 495, servings: 1 },
    { time: 735, servings: 1 },
    { time: 945, servings: 1 }
];

const day3Events_set3 = [
    { time: 405, servings: 1 },
    { time: 600, servings: 1 },
    { time: 795, servings: 1 },
    { time: 990, servings: 1 },
    { time: 1185, servings: 1 }
];

const day4Events_set3 = [
    { time: 465, servings: 1 },
    { time: 660, servings: 1 },
    { time: 1095, servings: 1 }
];

const day5Events_set3 = [
    { time: 555, servings: 1 },
    { time: 765, servings: 1 },
    { time: 975, servings: 1 },
    { time: 1185, servings: 1 },
    { time: 1380, servings: 1 }
];

const day6Events_set3 = [
    { time: 375, servings: 1 },
    { time: 570, servings: 1 },
    { time: 765, servings: 1 },
    { time: 960, servings: 1 }
];

const day7Events_set3 = [
    { time: 495, servings: 1 },
    { time: 705, servings: 1 },
    { time: 915, servings: 1 },
    { time: 1125, servings: 1 },
    { time: 1300, servings: 1 }
];

const weeklyRawData_set3 = [
    day1Events_set3,
    day2Events_set3,
    day3Events_set3,
    day4Events_set3,
    day5Events_set3,
    day6Events_set3,
    day7Events_set3
];

// Set 4
const day1Events_set4 = [
    { time: 425, servings: 1 },
    { time: 610, servings: 1 },
    { time: 805, servings: 1 },
    { time: 1015, servings: 1 },
    { time: 1225, servings: 1 }
];

const day2Events_set4 = [
    { time: 475, servings: 1 },
    { time: 715, servings: 1 },
    { time: 925, servings: 1 },
    { time: 1135, servings: 1 }
];

const day3Events_set4 = [
    { time: 385, servings: 1 },
    { time: 580, servings: 1 },
    { time: 775, servings: 1 },
    { time: 970, servings: 1 },
    { time: 1165, servings: 1 },
    { time: 1345, servings: 1 }
];

const day4Events_set4 = [
    { time: 445, servings: 1 },
    { time: 640, servings: 1 },
    { time: 1075, servings: 1 },
    { time: 1270, servings: 1 }
];

const day5Events_set4 = [
    { time: 535, servings: 1 },
    { time: 745, servings: 1 },
    { time: 955, servings: 1 },
    { time: 1165, servings: 1 },
    { time: 1360, servings: 1 }
];

const day6Events_set4 = [
    { time: 355, servings: 1 },
    { time: 550, servings: 1 },
    { time: 745, servings: 1 },
    { time: 940, servings: 1 },
    { time: 1135, servings: 1 }
];

const day7Events_set4 = [
    { time: 475, servings: 1 },
    { time: 685, servings: 1 },
    { time: 895, servings: 1 },
    { time: 1105, servings: 1 }
];

const weeklyRawData_set4 = [
    day1Events_set4,
    day2Events_set4,
    day3Events_set4,
    day4Events_set4,
    day5Events_set4,
    day6Events_set4,
    day7Events_set4
];

// Set 5
const day1Events_set5 = [
    { time: 435, servings: 1 },
    { time: 625, servings: 1 },
    { time: 820, servings: 1 },
    { time: 1030, servings: 1 }
];

const day2Events_set5 = [
    { time: 490, servings: 1 },
    { time: 730, servings: 1 },
    { time: 940, servings: 1 },
    { time: 1150, servings: 1 }
];

const day3Events_set5 = [
    { time: 400, servings: 1 },
    { time: 595, servings: 1 },
    { time: 790, servings: 1 },
    { time: 985, servings: 1 },
    { time: 1180, servings: 1 },
    { time: 1360, servings: 1 }
];

const day4Events_set5 = [
    { time: 460, servings: 1 },
    { time: 655, servings: 1 },
    { time: 1090, servings: 1 },
    { time: 1285, servings: 1 }
];

const day5Events_set5 = [
    { time: 550, servings: 1 },
    { time: 760, servings: 1 },
    { time: 970, servings: 1 },
    { time: 1180, servings: 1 }
];

const day6Events_set5 = [
    { time: 370, servings: 1 },
    { time: 565, servings: 1 },
    { time: 760, servings: 1 },
    { time: 955, servings: 1 },
    { time: 1150, servings: 1 },
    { time: 1345, servings: 1 }
];

const day7Events_set5 = [
    { time: 490, servings: 1 },
    { time: 700, servings: 1 },
    { time: 910, servings: 1 },
    { time: 1120, servings: 1 }
];

const weeklyRawData_set5 = [
    day1Events_set5,
    day2Events_set5,
    day3Events_set5,
    day4Events_set5,
    day5Events_set5,
    day6Events_set5,
    day7Events_set5
];

export { 
    weeklyRawData, 
    windows,
    weeklyRawData_set1,
    weeklyRawData_set2,
    weeklyRawData_set3,
    weeklyRawData_set4,
    weeklyRawData_set5
};