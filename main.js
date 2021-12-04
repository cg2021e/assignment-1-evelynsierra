function main(){
    var canvas = document.getElementById("Canvas");
    var gl = canvas.getContext("webgl");

    var cube = [
        // Face atas
        0.13, -0.593, 0.3262, 0,0,0, //Index 0
        -0.13, -0.593, 0.3262, 0,0,0, //Index 1
        0.13, -0.417, 0.3262, 0,0,0, //Index 2
        -0.13, -0.417, 0.3262, 0,0,0, //Index 3

        //Face bawah
        0.13, -0.593, 0.22345, 0,0,0, //Index 4
        -0.13, -0.593, 0.22345, 0,0,0, //Index 5
        0.13, -0.417, 0.22345, 0,0,0, //Index 6
        -0.13, -0.417, 0.22345, 0,0,0, //Index 7

        //Face samping kiri
        0.13, -0.593, 0.3262, 0,0,0, //Index 8
        0.13, -0.417, 0.3262, 0,0,0, //Index 9
        0.13, -0.593, 0.22345, 0,0,0, //Index 10
        0.13, -0.417, 0.22345, 0,0,0, //Index 11

        //Face samping depan
        0.13, -0.417, 0.3262, 0,0,0, //Index 12
        -0.13, -0.417, 0.3262, 0,0,0, //Index 13
        0.13, -0.417, 0.22345, 0,0,0, //Index 14
        -0.13, -0.417, 0.22345, 0,0,0, //Index 15

        //Face samping kanan
        -0.13, -0.417, 0.3262, 0,0,0, //Index 16
        -0.13, -0.593, 0.3262, 0,0,0, //Index 17
        -0.13, -0.417, 0.22345, 0,0,0, //Index 18
        -0.13, -0.593, 0.22345, 0,0,0, //Index 19

        //Face samping belakang
        0.13, -0.593, 0.3262, 0,0,0, //Index 20
        -0.13, -0.593, 0.3262, 0,0,0, //Index 21
        0.13, -0.593, 0.22345, 0,0,0, //Index 22
        -0.13, -0.593, 0.22345, 0,0,0, //Index 23

    //badan penghapus

        //Face atas
        0.13, -0.94, 0.33899, 0.737, 0.682,0.580, //Index 24
        -0.13,-0.94, 0.33899, 0.737, 0.682,0.580, //Index 25
        0.13,-0.55, 0.33899, 0.737, 0.682,0.580, //Index 26
        -0.13, -0.55, 0.33899, 0.737, 0.682,0.580, //Index 27

        //Face bawah
        0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 28
       -0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 29
        0.13,-0.55, 0.2062, 0.737, 0.682,0.580, //Index 30
        -0.13, -0.55, 0.2062, 0.737, 0.682,0.580, //Index 31

        //Face samping kiri
        0.13, -0.94, 0.33899, 0.737, 0.682,0.580, //Index 32
        0.13,-0.55, 0.33899, 0.737, 0.682,0.580, //Index 33
        0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 34
        0.13,-0.55, 0.2062, 0.737, 0.682,0.580, //Index 35

        //Face samping depan
        0.13,-0.55, 0.33899, 0.737, 0.682,0.580, //Index 36
        -0.13, -0.55, 0.33899, 0.737, 0.682,0.580, //Index 37
        0.13,-0.55, 0.2062, 0.737, 0.682,0.580, //Index 38
        -0.13, -0.55, 0.2062, 0.737, 0.682,0.580, //Index 39

        //Face samping kanan
        -0.13, -0.55, 0.33899, 0.737, 0.682,0.580, //Index 40
        -0.13,-0.94, 0.33899, 0.737, 0.682,0.580, //Index 41
        -0.13, -0.55, 0.2062, 0.737, 0.682,0.580, //Index 42
        -0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 43

        //Face samping belakang
        0.13, -0.94, 0.33899, 0.737, 0.682,0.580, //Index 44
        -0.13,-0.94, 0.33899, 0.737, 0.682,0.580, //Index 45
        0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 46
       -0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 47




    //     Face Atas
        -0.05, -0.05, 0.32088,      1, 1, 1, //Index 48
        -0.05, 0.05, 0.32088,      1, 1, 1, //Index 49
        0.05, -0.05, 0.32088,      1, 1, 1, //Index 50
        0.05, 0.05, 0.32088,      1, 1, 1, //Index 51

        //Face bawah
        -0.05,	-0.05,	0.22088, 1, 1, 1, //Index 52
        -0.05,	0.05,	0.22088, 1, 1, 1, //Index 53
        0.05,	-0.05,	0.22088, 1, 1, 1, //Index 54
        0.05,	0.05,	0.22088, 1, 1, 1, //Index 55

        //Face samping kiri
        -0.05,	-0.05,	0.32088,      1, 1, 1, //Index 56
        0.05,	-0.05,	0.32088,      1, 1, 1, //Index 57
        -0.05,	-0.05,	0.22088,      1, 1, 1, //Index 58
        0.05,	-0.05,	0.22088,    1, 1, 1, //Index 59

        //Face samping depan
        0.05, -0.05, 0.32088,      1, 1, 1, //Index 60
        0.05,	0.05,	0.22088,      1, 1, 1, //Index 61
        0.05,	-0.05,	0.22088,    1, 1, 1, //Index 62
        0.05,	0.05,	0.22088,    1, 1, 1, //Index 63

        //Face samping kanan
        0.05,	0.05,	0.32088,      1, 1, 1, //Index 64
        -0.05,	0.05,	0.32088,      1, 1, 1, //Index 65
        0.05,	0.05,	0.22088,    1, 1, 1, //Index 66
        -0.05,	0.05,	0.22088,    1, 1, 1, //Index 67

        //Face samping belakang
        -0.05,	-0.05,	0.32088,      1, 1, 1, //Index 68
        -0.05,	0.05,	0.32088,      1, 1, 1, //Index 69
       -0.05,	-0.05,	0.22088,    1, 1, 1, //Index 70
        -0.05,	0.05,	0.22088,    1, 1, 1, //Index 71


        // Kepala penghapus
        //Face atas
        -0.127, 0.591, 0.3262, 0,0,0, //Index 72
        0.1304, 0.591, 0.3262, 0,0,0, //Index 73
        -0.127, 0.414, 0.3262, 0,0,0, //Index 74
        0.13043, 0.414, 0.3262, 0,0,0, //Index 75

        //Face bawah
        -0.127,0.591, 0.22345, 0,0,0, //Index 76
        0.1304,0.591, 0.22345, 0,0,0, //Index 77
        -0.127,0.414, 0.22345, 0,0,0, //Index 78
        0.1304,0.414, 0.22345, 0,0,0, //Index 79

        //Face samping kiri
        -0.127, 0.591, 0.3262, 0,0,0, //Index 80
        -0.127, 0.414, 0.3262, 0,0,0, //Index 81
        -0.127,0.591, 0.22345, 0,0,0,//Index 82
        -0.127,0.414, 0.22345, 0,0,0, //Index 83

        //Face samping depan
        -0.127, 0.414, 0.3262, 0,0,0, //Index 84
        0.1304,0.414, 0.3262, 0,0,0, //Index 85
        -0.127,0.414, 0.22345, 0,0,0, //Index 86
        0.13043, 0.414, 0.22345, 0,0,0, //Index 87

        //Face samping kanan
        0.1304,0.414, 0.3262, 0,0,0, //Index 88
        0.1304, 0.591, 0.3262, 0,0,0, //Index 89
        0.13043, 0.414, 0.22345, 0,0,0, //Index 90
        0.13043, 0.591, 0.22345, 0,0,0, //Index 91

        //Face samping belakang
        -0.127, 0.591, 0.3262, 0,0,0, //Index 92
        0.1304, 0.591, 0.3262, 0,0,0, //Index 93
        -0.127,0.591, 0.22345, 0,0,0, //Index 94
        0.1304,0.591, 0.22345, 0,0,0, //Index 95



    // //Badan penghapus
    //     //Face atas
        -0.139, 0.940, 0.338, 0.737, 0.682,0.580, //Index 96
        0.139, 0.940, 0.338, 0.737, 0.682,0.580, //Index 97
        -0.139, 0.548, 0.338, 0.737, 0.682,0.580, //Index 98
        0.139, 0.548, 0.338, 0.737, 0.682,0.580, //Index 99

        //Face bawah
        -0.139, 0.940, 0.2062, 0.737, 0.682,0.580, //Index 100
        0.139, 0.940, 0.2062, 0.737, 0.682,0.580, //Index 101
        -0.139, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 102
        0.139, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 103

        //Face samping kiri
        -0.139, 0.940, 0.338, 0.737, 0.682,0.580, //Index 104
        -0.139, 0.548, 0.338, 0.737, 0.682,0.580, //Index 105
        -0.139, 0.940, 0.2062, 0.737, 0.682,0.580, //Index 106
        -0.139, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 107

        //Face samping depan
        -0.139, 0.548, 0.338, 0.737, 0.682,0.580, //Index 108
        0.139, 0.548, 0.338, 0.737, 0.682,0.580, //Index 109
        -0.139, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 110
        0.139, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 111

        //Face samping kanan
        0.139, 0.548, 0.338, 0.737, 0.682,0.580, //Index 112
        0.139, 0.940,0.338, 0.737, 0.682,0.580, //Index 113
        0.139, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 114
        0.139, 0.940,0.2062, 0.737, 0.682,0.580, //Index 115

        //Face samping belakang
        -0.139, 0.940, 0.338, 0.737, 0.682,0.580, //Index 116
        0.139, 0.940,0.338, 0.737, 0.682,0.580, //Index 117
        -0.139, 0.940, 0.2062, 0.737, 0.682,0.580, //Index 118
        0.139, 0.940, 0.2062, 0.737, 0.682,0.580 //Index 119
    ];

    var indicesCube = [
        //Face atas
        0, 1, 2,        1, 2, 3,
        //Face belakang
        4, 5, 6,        5, 6, 7,
        //Face samping kiri
        8,9,10,         9,10,11,
        //Face samping depan
        12,13,14,       13,14,15,
        //Face samping kanan
        16,17,18,       17,18,19,
        //Face samping belakang
        20,21,22,       21,22,23,

        //Badan penghapus
        24,25,26,      25,26,27,
        28,29,30,      29,30,31,
        32,33,34,      33,34,35,
        36,37,38,      37,38,39,
        40,41,42,      41,42,43,
        44,45,46,      45,46,47,



        //Face atas
        48, 49, 50,        49, 50, 51,
        //Face belakang
        52, 53, 54,        53, 54, 55,
        //Face samping kiri
        56,57,58,         57,58,59,
        //Face samping depan
        60,61,62 ,       61,62,63,
        //Face samping kanan
        64,65,66, 65,66,67, 
        //Face samping belakang
        68,69,70,       69,70,71,


         //Face atas
         72, 73, 74,        73, 74, 75,
         //Face belakang
         76, 77, 78,        77, 78, 79,
         //Face samping kiri
         80,81,82,         81,82,83,
         //Face samping depan
         84,85,86,       85,86,87,
         //Face samping kanan
         88,89,90,       89,90,91,
         //Face samping belakang
         92,93,94,       93,94,95,

         //Badan penghapus
         96,97,98,      97,98,99,
         100,101,102,      101,102,103,
         104,105,106,      105,106,107,
         108,109,110,      109,110,111,
         112,113,114,      113,114,115,
         116,117,118,      117,118,119
    ];

    var penghapusKiri = [
     //kepala penghapus
        //Face atas
        0.13, -0.591, 0.3262, 0,0,0, //Index 0
        -0.127, -0.593, 0.3262, 0,0,0, //Index 1
        0.13, -0.417, 0.3262, 0,0,0, //Index 2
        -0.127, -0.417, 0.3262, 0,0,0, //Index 3

        //Face bawah
        0.13, -0.591, 0.22345, 0,0,0, //Index 4
        -0.127, -0.593, 0.22345, 0,0,0, //Index 5
        0.13, -0.417, 0.22345, 0,0,0, //Index 6
        -0.127, -0.417, 0.22345, 0,0,0, //Index 7

        //Face samping kiri
        0.13, -0.591, 0.3262, 0,0,0, //Index 8
        -0.13, -0.417, 0.3262, 0,0,0, //Index 9
        0.13, -0.593, 0.22345, 0,0,0, //Index 10
        0.13, -0.417, 0.22345, 0,0,0, //Index 11

        //Face samping depan
        0.13, -0.417, 0.3262, 0,0,0, //Index 12
        -0.127, -0.417, 0.3262, 0,0,0, //Index 13
        0.13, -0.417, 0.22345, 0,0,0, //Index 14
        -0.127, -0.417, 0.22345, 0,0,0, //Index 15

        //Face samping kanan
        -0.127, -0.593, 0.3262, 0,0,0, //Index 16
        -0.127, -0.417, 0.3262, 0,0,0, //Index 17
        -0.127, -0.593, 0.22345, 0,0,0, //Index 18
        -0.127, -0.417, 0.22345, 0,0,0, //Index 19

        //Face samping belakang
        0.13, -0.591, 0.3262, 0,0,0, //Index 20
        -0.127, -0.593, 0.3262, 0,0,0, //Index 21
        0.13, -0.593, 0.22345, 0,0,0, //Index 22
        -0.127, -0.593, 0.22345, 0,0,0, //Index 23

    //badan penghapus

        //Face atas
        0.13, -0.94, 0.33899, 0.737, 0.682,0.580, //Index 24
        -0.13,-0.94, 0.33899, 0.737, 0.682,0.580, //Index 25
        0.13,-0.55, 0.33899, 0.737, 0.682,0.580, //Index 26
        -0.13, -0.55, 0.33899, 0.737, 0.682,0.580, //Index 27

        //Face bawah
        0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 28
       -0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 29
        0.13,-0.55, 0.2062, 0.737, 0.682,0.580, //Index 30
        -0.13, -0.55, 0.2062, 0.737, 0.682,0.580, //Index 31

        //Face samping kiri
        0.13, -0.94, 0.33899, 0.737, 0.682,0.580, //Index 32
        0.13,-0.55, 0.33899, 0.737, 0.682,0.580, //Index 33
        0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 34
        0.13,-0.55, 0.2062, 0.737, 0.682,0.580, //Index 35

        //Face samping depan
        0.13,-0.55, 0.33899, 0.737, 0.682,0.580, //Index 36
        -0.13, -0.55, 0.33899, 0.737, 0.682,0.580, //Index 37
        0.13,-0.55, 0.2062, 0.737, 0.682,0.580, //Index 38
        -0.13, -0.55, 0.2062, 0.737, 0.682,0.580, //Index 39

        //Face samping kanan
        -0.13, -0.55, 0.33899, 0.737, 0.682,0.580, //Index 40
        -0.13,-0.94, 0.33899, 0.737, 0.682,0.580, //Index 41
        -0.13, -0.55, 0.2062, 0.737, 0.682,0.580, //Index 42
        -0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 43

        //Face samping belakang
        0.13, -0.94, 0.33899, 0.737, 0.682,0.580, //Index 44
        -0.13,-0.94, 0.33899, 0.737, 0.682,0.580, //Index 45
        0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 46
       -0.13,-0.94, 0.2062, 0.737, 0.682,0.580, //Index 47

    ];

    var indicesPenghapusKiri = [
         //Face atas
         0, 1, 2,        1, 2, 3,
         //Face belakang
         4, 5, 6,        5, 6, 7,
         //Face samping kiri
         8,9,10,         9,10,11,
         //Face samping depan
         12,13,14,       13,14,15,
         //Face samping kanan
         16,17,18,       17,18,19,
         //Face samping belakang
         20,21,22,       21,22,23,

         //Badan penghapus
         24,25,26,      25,26,27,
         28,29,30,      29,30,31,
         32,33,34,      33,34,35,
         36,37,38,      37,38,39,
         40,41,42,      41,42,43,
         44,45,46,      45,46,47
    ];

    var penghapusKanan = [
    // Kepala penghapus
        //Face atas
        -0.127, 0.591, 0.3262, 0,0,0, //Index 0
        0.1304, 0.591, 0.3262, 0,0,0, //Index 1
        -0.127, 0.414, 0.3262, 0,0,0, //Index 2
        0.13043, 0.414, 0.3262, 0,0,0, //Index 3

        //Face bawah
        -0.127,0.591, 0.22345, 0,0,0, //Index 4
        -0.1304,0.591, 0.22345, 0,0,0, //Index 5
        -0.127,0.414, 0.22345, 0,0,0, //Index 6
        -0.1304,0.414, 0.22345, 0,0,0, //Index 7

        //Face samping kiri
        -0.127, 0.591, 0.3262, 0,0,0, //Index 8
        -0.127, 0.414, 0.3262, 0,0,0, //Index 9
        -0.127,0.591, 0.22345, 0,0,0,//Index 10
        -0.127,0.414, 0.22345, 0,0,0, //Index 11

        //Face samping depan
        -0.127, 0.414, 0.3262, 0,0,0, //Index 12
        0.1304,0.414, 0.3262, 0,0,0, //Index 13
        -0.127,0.414, 0.22345, 0,0,0, //Index 14
        0.13043, 0.414, 0.22345, 0,0,0, //Index 15

        //Face samping kanan
        0.1304,0.414, 0.3262, 0,0,0, //Index 16
        0.1304, 0.591, 0.3262, 0,0,0, //Index 17
        0.13043, 0.414, 0.22345, 0,0,0, //Index 18
        0.13043, 0.591, 0.22345, 0,0,0, //Index 19

        //Face samping belakang
        -0.127, 0.591, 0.3262, 0,0,0, //Index 20
        0.1304, 0.591, 0.3262, 0,0,0, //Index 21
        -0.127,0.591, 0.22345, 0,0,0 //Index 22
        -0.1304,0.591, 0.22345, 0,0,0, //Index 23

    //Badan penghapus
        //Face atas
        -0.139, 0.940, 0.338, 0.737, 0.682,0.580, //Index 24
        0.136, 0.940, 0.338, 0.737, 0.682,0.580, //Index 25
        -0.1366, 0.54, 0.338, 0.737, 0.682,0.580, //Index 26
        0.139, 0.54, 0.338, 0.737, 0.682,0.580, //Index 27

        //Face bawah
        -0.139, 0.940, 0.2062, 0.737, 0.682,0.580, //Index 28
        0.136, 0.940, 0.2062, 0.737, 0.682,0.580, //Index 29
        -0.136, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 30
        0.139, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 31

        //Face samping kiri
        -0.139, 0.940, 0.338, 0.737, 0.682,0.580, //Index 32
        -0.136, 0.548, 0.338, 0.737, 0.682,0.580, //Index 33
        -0.139, 0.940, 0.2062, 0.737, 0.682,0.580, //Index 34
        -0.136, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 35

        //Face samping depan
        -0.136, 0.54, 0.338, 0.737, 0.682,0.580, //Index 36
        0.139, 0.54, 0.338, 0.737, 0.682,0.580, //Index 37
        -0.136, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 38
        0.139, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 39

        //Face samping kanan
        0.139, 0.54, 0.338, 0.737, 0.682,0.580, //Index 40
        0.136, 0.940,0.338, 0.737, 0.682,0.580, //Index 41
        0.139, 0.548, 0.2062, 0.737, 0.682,0.580, //Index 42
        0.136, 0.940,0.2062, 0.737, 0.682,0.580, //Index 43

        //Face samping belakang
        -0.139, 0.940, 0.338, 0.737, 0.682,0.580, //Index 44
        0.136, 0.940,0.338, 0.737, 0.682,0.580, //Index 45
        -0.139, 0.940, 0.2062, 0.737, 0.682,0.580, //Index 46
        0.136, 0.940, 0.2062, 0.737, 0.682,0.580 //Index 47
    ];

    var indicesPenghapusKanan = [
         //Face atas
         0, 1, 2,        1, 2, 3,
         //Face belakang
         4, 5, 6,        5, 6, 7,
         //Face samping kiri
         8,9,10,         9,10,11,
         //Face samping depan
         12,13,14,       13,14,15,
         //Face samping kanan
         16,17,18,       17,18,19,
         //Face samping belakang
         20,21,22,       21,22,23,

         //Badan penghapus
         24,25,26,      25,26,27,
         28,29,30,      29,30,31,
         32,33,34,      33,34,35,
         36,37,38,      37,38,39,
         40,41,42,      41,42,43,
         44,45,46,      45,46,47
    ];

    
   // var vertices = [...cube,...rightVertices]; 
    var vertices = [...cube];

    var indices = [...indicesCube];

    // Create a linked-list for storing the vertices data
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Create a linked-list for storing the indices data
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    var vertexShaderSource = `
    attribute vec3 aPosition;
    attribute vec3 aColor;
    varying vec3 vColor;
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
    void main() {
        gl_Position = uProjection * uView * uModel * (vec4(aPosition / 2.0, 1.0));
        vColor = aColor;
    }
`;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
    
      // Create .c in GPU
      var vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertexShaderSource);
      var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragmentShaderSource);
  
      // Compile .c into .o
      gl.compileShader(vertexShader);
      gl.compileShader(fragmentShader);
  
      // Prepare a .exe shell (shader program)
      var shaderProgram = gl.createProgram();
  
      // Put the two .o files into the shell
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
  
      // Link the two .o files, so together they can be a runnable program/context.
      gl.linkProgram(shaderProgram);
  
      // Start using the context (analogy: start using the paints and the brushes)
      gl.useProgram(shaderProgram);
    
    // Teach the computer how to collect
    // the positional values from ARRAY_BUFFER
    // to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        3, 
        gl.FLOAT, 
        false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        0
    );
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    // var primitive = gl.TRIANGLES;
    // var offset = 0;
    //var nVertex = 144;

    //Connect the uniform transformation matrices
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");

    // Set the projection matrix in the vertex shader
    var projection = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        projection,
        Math.PI / 3,
        1,
        0.5,
        10
    );
    gl.uniformMatrix4fv(uProjection, false, projection);

    let cameraX = 0;
    let cameraY = 0.0;
    let cameraZ = 2.0;

    // Set the view matrix in the vertex shader
    var view = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(
        view,
        [cameraX, cameraY, cameraZ],
        [cameraX, 0.0, -10],
        [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);

    var freeze = false;
    // Apply some interaction using mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick, false);

    var speed = [3/600, 2/600, 0];
    var change = [0, 0, 0];

    function render() {
        if (!freeze) { // If it is not freezing, then animate the rectangle
            if (change[0] >= 0.5 || change[0] <= -0.5) speed[0] = -speed[0];
            if (change[1] >= 0.5 || change[1] <= -0.5) speed[1] = -speed[1];
            change[0] = change[0] + speed[0];
            change[1] = change[1] + speed[1];
            // Init the model matrix
            var model = glMatrix.mat4.create();
            // Define a rotation matrix about x axis and store it to the model matrix
            glMatrix.mat4.rotate(model, model, change[0], [1, 0, 0]);
            // Define a rotation matrix about y axis and store it to the model matrix
            glMatrix.mat4.rotate(model, model, change[1], [0, 1, 0]);
            // Define a translation matrix and store it to the model matrix
            glMatrix.mat4.translate(model, model, change);
            // Set the model matrix in the vertex shader
            gl.uniformMatrix4fv(uModel, false, model);
            // Reset the frame buffer
            gl.enable(gl.DEPTH_TEST);
            gl.clearColor(0.7, 0.6, 0.6, 0.8);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            // gl.drawArrays(primitive, offset, nVertex);
            gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
            // gl.drawElements(gl.TRIANGLES, indicesPenghapusKiri.length, gl.UNSIGNED_SHORT, 0);
            // gl.drawElements(gl.TRIANGLES, indicesPenghapusKanan.length, gl.UNSIGNED_SHORT, 0);

            
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}