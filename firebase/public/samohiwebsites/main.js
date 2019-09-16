console.log("birds");

let teacherJsonList = [
    {
      "name": "Acker, Nathaniel Munoz",
      "ext": "71284",
      "room": "H204",
      "dep": "Social Studies",
      "house": "O",
      "email": "nacker@smmusd.org",
    },
    {
      "name": "Aiello, Jason",
      "ext": "71401",
      "room": "M101",
      "dep": "Performing Arts/Dept. Chair",
      "house": "S",
      "email": "jaiello@smmusd.org",
    },
    {
      "name": "Alvarado, Robert",
      "ext": "71131",
      "room": "E101",
      "dep": "Social Studies",
      "house": "H",
      "email": "ralvarado@smmusd.org",
      "id":"2",
    },
    {
      "name": "Anderson, Esther",
      "ext": "71275",
      "room": "B205",
      "dep": "Special Education",
      "house": "O",
      "email": "eandersen@smmusd.org"
    },
    {
      "name": "Arnold, Winston",
      "ext": "71105",
      "room": "i105",
      "dep": "Auto Shop",
      "house": "M",
      "email": "awinston@smmusd.org"
    },
    {
      "name": "Barraza, Kate",
      "ext": "71239",
      "room": "HC/E210",
      "dep": "Acting/Freshman Seminar",
      "house": "H",
      "email": "kbarraza@smmusd.org"
    },
    {
      "name": "Barraza, Pete",
      "ext": "71278",
      "room": "B208",
      "dep": "English",
      "house": "M",
      "email": "pbarraza@smmusd.org"
    },
    {
      "name": "Barron, Jesse",
      "ext": "71176",
      "room": "B106",
      "dep": "Foreign Language - Spanish",
      "house": "H",
      "email": "jbarron@smmusd.org"
    },
    {
      "name": "Bart-Bell, Dana",
      "ext": "71462",
      "room": "L210",
      "dep": "Librarian",
      "house": "S",
      "email": "dbartbell@smmusd.org"
    },
    {
      "name": "Battung, Jason",
      "ext": "71435",
      "room": "SG15",
      "dep": "PE/Dept. Chair",
      "house": "O",
      "email": "jbattung@smmusd.org"
    },
    {
      "name": "Bautista-Nicholas, Claudia",
      "ext": "71305",
      "room": "i305",
      "dep": "Foreign Language - Spanish, Immersion",
      "house": "I",
      "email": "cbautista@smmusd.org"
    },
    {
      "name": "Baxter, Catherine",
      "ext": "71513",
      "room": "AD503",
      "dep": "Dean",
      "house": "",
      "email": "cbaxter@smmusd.org"
    },
    {
      "name": "Bisson, Amy",
      "ext": "71150",
      "room": "L100",
      "dep": "Social Studies/Dept. Chair",
      "house": "S",
      "email": "abisson@smmusd.org"
    },
    {
      "name": "Blanck, Ryan",
      "ext": "71623",
      "room": "H120",
      "dep": "English",
      "house": "M",
      "email": "rblanck@smmusd.org"
    },
    {
      "name": "Bolan, Anette",
      "ext": "71578",
      "room": "BH20",
      "dep": "Assistant, Facility Use Department",
      "house": "",
      "email": "abolan@smmusd.org"
    },
    {
      "name": "Bouse, Amy",
      "ext": "71443",
      "room": "A103",
      "dep": "Art",
      "house": "I",
      "email": "abouse@smmusd.org"
    },
    {
      "name": "Boyd, Bryn",
      "ext": "71296",
      "room": "H216",
      "dep": "Social Studies",
      "house": "O",
      "email": "bboyd@smmusd.org"
    },
    {
      "name": "Bravo, Lissette",
      "ext": "71554",
      "room": "H106",
      "dep": "House Principal",
      "house": "M",
      "email": "lbravo@smmusd.org"
    },
    {
      "name": "Burdick, Bart",
      "ext": "71670",
      "room": "71670",
      "dep": "Gardener/Athletics (Golf)",
      "house": "",
      "email": "bburdick@smmusd.org"
    },
    {
      "name": "Burkett, Deena",
      "ext": "71589",
      "room": "BH20",
      "dep": "Sr. Office Specialist, Facility Use",
      "house": "",
      "email": "dburkett@smmusd.org"
    },
    {
      "name": "Burrell, Catherine",
      "ext": "71420",
      "room": "",
      "dep": "Lifeguard",
      "house": "",
      "email": "cburrell@smmusd.org"
    },
    {
      "name": "Ceccarelli, Alan",
      "ext": "71582",
      "room": "Barnum",
      "dep": "Technical Theater Coordinator",
      "house": "",
      "email": "aceccarelli@smmusd.org"
    },
    {
      "name": "Center-Brooks, Cheryl",
      "ext": "71567",
      "room": "E10",
      "dep": "Visual Impairment",
      "house": "M",
      "email": "ccenter-brooks@smmusd.org"
    },
    {
      "name": "Chapman, Amy",
      "ext": "71153",
      "room": "L104",
      "dep": "English/Yearbook",
      "house": "S",
      "email": "achapman@smmusd.org"
    },
    {
      "name": "Chapman, Jimmy",
      "ext": "71295",
      "room": "H215",
      "dep": "Foreign Language - Spanish / Athletics - G. Soccer Coach",
      "house": "O",
      "email": "jchapman@smmusd.org"
    },
    {
      "name": "Cherry, Robert",
      "ext": "71140",
      "room": "E117",
      "dep": "Special Education/History",
      "house": "H",
      "email": "rcherry@smmusd.org"
    },
    {
      "name": "Chew, Jenny",
      "ext": "71186",
      "room": "H106",
      "dep": "House Assistant",
      "house": "M",
      "email": "jchew@smmusd.org"
    },
    {
      "name": "Choi, Vivian",
      "ext": "71229",
      "room": "i208A",
      "dep": "I House Principal",
      "house": "I",
      "email": "vchoi@smmusd.org"
    },
    {
      "name": "Cohn, Jeff",
      "ext": "71569",
      "room": "E10",
      "dep": "Visual Impairment",
      "house": "I",
      "email": "jcohn@smmusd.org"
    },
    {
      "name": "Colburn, Margaret",
      "ext": "71209",
      "room": "i209",
      "dep": "Social Studies",
      "house": "I",
      "email": "mcolburn@smmusd.org"
    },
    {
      "name": "College Center",
      "ext": "71175",
      "room": "B115",
      "dep": "",
      "house": "",
      "email": "samohicollege@smmusd.org"
    },
    {
      "name": "Collins, Falanda",
      "ext": "71155",
      "room": "L105",
      "dep": "English",
      "house": "S",
      "email": "fcollins@smmusd.org"
    },
    {
      "name": "Contreras, Luis",
      "ext": "71622",
      "room": "T-2",
      "dep": "Math/ELD",
      "house": "M",
      "email": "lcontreras@smmusd.org"
    },
    {
      "name": "Corrigan, Charles",
      "ext": "71224",
      "room": "B207",
      "dep": "Special Education/Science",
      "house": "M",
      "email": "ccorrigan@smmusd.org"
    },
    {
      "name": "Cox, Shannon",
      "ext": "71257",
      "room": "L207",
      "dep": "Social Studies",
      "house": "S",
      "email": "scox@smmusd.org"
    },
    {
      "name": "Cruce, Marae",
      "ext": "71304",
      "room": "i304",
      "dep": "Math/ Math Dept. Chair",
      "house": "I",
      "email": "mcruce@smmusd.org"
    },
    {
      "name": "Cuda, Conrad",
      "ext": "71211",
      "room": "i211",
      "dep": "Social Studies",
      "house": "I",
      "email": "ccuda@smmusd.org"
    },
    {
      "name": "Danesi, Dana",
      "ext": "71154",
      "room": "L104",
      "dep": "English",
      "house": "H",
      "email": "ddanesi@smmusd.org"
    },
    {
      "name": "Dao, Thong",
      "ext": "71103",
      "room": "I103",
      "dep": "IT Support Tech",
      "house": "",
      "email": "tdao@smmusd.org"
    },
    {
      "name": "de la Cruz, Gilda",
      "ext": "71201",
      "room": "i201",
      "dep": "English",
      "house": "I",
      "email": "gdelacruz@smmusd.org"
    },
    {
      "name": "de la Rosa, Johanna",
      "ext": "71523",
      "room": "AD507",
      "dep": "Bilingual Community Liaison",
      "house": "",
      "email": "jdelarosa@smmusd.org"
    },
    {
      "name": "DeMirjian, Lisa",
      "ext": "71267",
      "room": "L200",
      "dep": "Advisor (10/12)",
      "house": "S",
      "email": "ldemirjian@smmusd.org"
    },
    {
      "name": "Denis, Randy",
      "ext": "71207",
      "room": "i207",
      "dep": "English/Social Studies",
      "house": "I",
      "email": "rdenis@smmusd.org"
    },
    {
      "name": "Dew, Stephanie",
      "ext": "71259",
      "room": "L209",
      "dep": "English",
      "house": "O",
      "email": "sdew@smmusd.org"
    },
    {
      "name": "Eckhart, Corey",
      "ext": "71624",
      "room": "T-4",
      "dep": "Science (Physics, Physical Science)",
      "house": "O",
      "email": "ceckhart@smmusd.org"
    },
    {
      "name": "Faas, Kathleen",
      "ext": "71202",
      "room": "i202",
      "dep": "English/Journalism",
      "house": "I",
      "email": "kfaas@smmusd.org"
    },
    {
      "name": "Facility Permit Office",
      "ext": "71586",
      "room": "BH20",
      "dep": "",
      "house": "",
      "email": ""
    },
    {
      "name": "Ferro, Emily",
      "ext": "71521",
      "room": "AD511",
      "dep": "Health Support",
      "house": "",
      "email": "eferro@smmusd.org"
    },
    {
      "name": "Fischer, Tania",
      "ext": "71441",
      "room": "A101/Track",
      "dep": "Art-Ceramics/Athletics (Track & Cross Country)",
      "house": "O",
      "email": "tfischer@smmusd.org"
    },
    {
      "name": "Flanders, Matt",
      "ext": "71152",
      "room": "L102/Pool",
      "dep": "Social Studies/Athletics (Water Polo & Swimming)",
      "house": "S",
      "email": "mflanders@smmusd.org"
    },
    {
      "name": "Flavin, Jennifer",
      "ext": "71552",
      "room": "H106",
      "dep": "M House Advisor (9, 11)",
      "house": "M",
      "email": "jix@smmusd.org"
    },
    {
      "name": "Flores, Ernesto",
      "ext": "71475",
      "room": "B115A",
      "dep": "College Counselor (A-G)",
      "house": "O",
      "email": "e.flores@smmusd.org"
    },
    {
      "name": "Forrer, Brooke",
      "ext": "71311",
      "room": "i311",
      "dep": "Language",
      "house": "M",
      "email": "bforrer@smmusd.org"
    },
    {
      "name": "Fujinaga, Evan",
      "ext": "71532",
      "room": "AD103B",
      "dep": "Athletic Director",
      "house": "S",
      "email": "efujinaga@smmusd.org"
    },
    {
      "name": "Fulcher, Nathan",
      "ext": "71203",
      "room": "i203",
      "dep": "English",
      "house": "I",
      "email": "nfulcher@smmusd.org"
    },
    {
      "name": "Gaida, Ingo",
      "ext": "71107",
      "room": "i107",
      "dep": "Science",
      "house": "H",
      "email": "igaida@smmusd.org"
    },
    {
      "name": "Galvan, Hugo",
      "ext": "71212",
      "room": "i211A",
      "dep": "Lab Technician",
      "house": "",
      "email": "hgalvan@smmusd.org"
    },
    {
      "name": "Garcia-Hecht, Veronica",
      "ext": "71253",
      "room": "L203",
      "dep": "Language",
      "house": "S",
      "email": "vgarcia@smmusd.org"
    },
    {
      "name": "Garrido, Jessica",
      "ext": "71227",
      "room": "i208C",
      "dep": "I House Advisor (9/11)",
      "house": "I",
      "email": "jgarrido@smmusd.org"
    },
    {
      "name": "Gibson, Jerry",
      "ext": "71577",
      "room": "BH20",
      "dep": "Facility Use Manager",
      "house": "",
      "email": "jgibson@smmus.org"
    },
    {
      "name": "Gilbert, Eileen",
      "ext": "71474",
      "room": "B122",
      "dep": "O House Assistant",
      "house": "O",
      "email": "egilbert@smmusd.org"
    },
    {
      "name": "Golden, Amy",
      "ext": "71268",
      "room": "L200",
      "dep": "Advisor (9/11)",
      "house": "S",
      "email": "agolden@smmusd.org"
    },
    {
      "name": "Gonsalves, Diane",
      "ext": "71133",
      "room": "E103",
      "dep": "English/Special Education",
      "house": "S",
      "email": "dgonsalves@smmusd.org"
    },
    {
      "name": "Gonzalez, Alicia",
      "ext": "71230",
      "room": "E200",
      "dep": "Math",
      "house": "H",
      "email": "a.gonzalez@smmusd.org"
    },
    {
      "name": "Gonzalez, Angelica",
      "ext": "71530",
      "room": "AD400",
      "dep": "Principal's Assistant",
      "house": "",
      "email": "amgonzalez@smmusd.org"
    },
    {
      "name": "Gonzalez, H. David",
      "ext": "71180",
      "room": "H100",
      "dep": "Special Education",
      "house": "S",
      "email": "hdgonzalez@smmusd.org"
    },
    {
      "name": "Gonzalez, Marciela",
      "ext": "71471",
      "room": "B122",
      "dep": "Advisor (9/11)",
      "house": "O",
      "email": "mgonzalez@smmusd.org"
    },
    {
      "name": "Gonzalez, Noemi",
      "ext": "71204",
      "room": "i204",
      "dep": "English",
      "house": "I",
      "email": "ngonzalez@smmusd.org"
    },
    {
      "name": "Gottlieb, David",
      "ext": "71298",
      "room": "H218",
      "dep": "Language",
      "house": "O",
      "email": "dgottlieb@smmusd.org"
    },
    {
      "name": "Graves, Gizelle",
      "ext": "71167",
      "room": "L117A",
      "dep": "Infant/Toddler Center (ITC)",
      "house": "S",
      "email": "ggraves@smmusd.org"
    },
    {
      "name": "Green, Nicole",
      "ext": "71425",
      "room": "S. Gym - Dance",
      "dep": "Dance",
      "house": "H",
      "email": "ngreen@smmusd.org"
    },
    {
      "name": "Gutierrez, Jessica",
      "ext": "71217",
      "room": "i217",
      "dep": "Science",
      "house": "I",
      "email": "jessicagutierrez@smmusd.org"
    },
    {
      "name": "Gutiérrez, Jorge",
      "ext": "71256",
      "room": "L206",
      "dep": "Foreign Language - Spanish",
      "house": "S",
      "email": "j.gutierrez@smmusd.org"
    },
    {
      "name": "Gutierrez, Laurie Ann",
      "ext": "71448",
      "room": "A013",
      "dep": "Art - Ceramics",
      "house": "H",
      "email": "lgutierrez@smmusd.org"
    },
    {
      "name": "Hafft, Ianna",
      "ext": "71313",
      "room": "i313",
      "dep": "Science",
      "house": "S",
      "email": "ihafft@smmusd.org"
    },
    {
      "name": "Hassenger, Karin",
      "ext": "71579",
      "room": "Barnum",
      "dep": "Facility Use",
      "house": "",
      "email": "khassenger@smmusd.org"
    },
    {
      "name": "Hecht, James",
      "ext": "71173",
      "room": "B10/Gym",
      "dep": "Math/Athletics (Boys Basketball)",
      "house": "M",
      "email": "jhecht@smmusd.org"
    },
    {
      "name": "Hobkirk, Carl",
      "ext": "71199",
      "room": "H119",
      "dep": "Social Studies",
      "house": "M",
      "email": "chobkirk@smmusd.org"
    },
    {
      "name": "Hoffman, Ryan",
      "ext": "71306",
      "room": "i306",
      "dep": "Math",
      "house": "O",
      "email": "rhoffman@smmusd.org"
    },
    {
      "name": "Honda, Julie",
      "ext": "71477",
      "room": "B115B",
      "dep": "College Counselor (H-N)",
      "house": "I",
      "email": "jhonda@smmusd.org"
    },
    {
      "name": "Howard, Robert",
      "ext": "71169",
      "room": "L108A",
      "dep": "Restorative Justice Coordinator",
      "house": "",
      "email": "rhoward@smmusd.org"
    },
    {
      "name": "Huls, Jeffe",
      "ext": "71404",
      "room": "M100",
      "dep": "Performing Arts - Choir",
      "house": "I",
      "email": "jhuls@smmusd.org"
    },
    {
      "name": "Hyon, Donald",
      "ext": "71197",
      "room": "H127",
      "dep": "Special Education",
      "house": "O",
      "email": "dhyon@smmusd.org"
    },
    {
      "name": "Iniguez, Wilma",
      "ext": "71527",
      "room": "AD500",
      "dep": "Student Records/Registrar",
      "house": "",
      "email": "winiguez@smmusd.org"
    },
    {
      "name": "Jauregui, Xavier",
      "ext": "71277",
      "room": "B207",
      "dep": "",
      "house": "M",
      "email": "xjauregui@smmusd.org"
    },
    {
      "name": "Jellison, Elspeth",
      "ext": "71245",
      "room": "E215",
      "dep": "Speech/Language Pathologist",
      "house": "",
      "email": "ejellison@smmusd.org"
    },
    {
      "name": "Joseph, Ashley",
      "ext": "71158",
      "room": "L108",
      "dep": "Student Outreach Specialist",
      "house": "S/I",
      "email": "ajoseph@smmusd.org"
    },
    {
      "name": "Kariya, Emily",
      "ext": "71255",
      "room": "L205",
      "dep": "Language/Social Studies, H House Teacher Leader",
      "house": "H",
      "email": "ekariya@smmusd.org"
    },
    {
      "name": "Karyadi, Adrienne",
      "ext": "71282",
      "room": "H202",
      "dep": "Social Studies",
      "house": "O",
      "email": "akaryadi@smmusd.org"
    },
    {
      "name": "Kay, Benjamin",
      "ext": "71215",
      "room": "i215",
      "dep": "Science",
      "house": "I",
      "email": "bkay@smmusd.org"
    },
    {
      "name": "Keiley, Harry",
      "ext": "71517",
      "room": "L210",
      "dep": "Student Support",
      "house": "",
      "email": "hkeiley@smmusd.org"
    },
    {
      "name": "Keith, Kelly",
      "ext": "71102",
      "room": "i102",
      "dep": "Special Education",
      "house": "M",
      "email": "kkeith@smmusd.org"
    },
    {
      "name": "Keller, Jeff",
      "ext": "71325",
      "room": "L108",
      "dep": "Outreach Specialist",
      "house": "O",
      "email": "jckeller@smmusd.org"
    },
    {
      "name": "Kelley, Margaret",
      "ext": "71190",
      "room": "H120",
      "dep": "English",
      "house": "O",
      "email": "mkelley@smmusd.org"
    },
    {
      "name": "Kemp, Anita",
      "ext": "71172",
      "room": "B102",
      "dep": "CTE-ROP/Marketing/Small Business",
      "house": "H",
      "email": "akemp@smmusd.org"
    },
    {
      "name": "Khem, Chamnauch",
      "ext": "71303",
      "room": "i303",
      "dep": "Foreign Language - Latin / AVID Coordinator",
      "house": "I",
      "email": "ckhem@smmusd.org"
    },
    {
      "name": "Kim, Douglas",
      "ext": "71147",
      "room": "E117",
      "dep": "Social Studies, G. Basketball",
      "house": "H",
      "email": "dkim@smmusd.org"
    },
    {
      "name": "Kirk, Matt",
      "ext": "71412",
      "room": "NG12A",
      "dep": "",
      "house": "S",
      "email": "mkirk@smmusd.org"
    },
    {
      "name": "Koehler, Kyle",
      "ext": "71130",
      "room": "E100",
      "dep": "English",
      "house": "H",
      "email": "kkoehler@smmusd.org"
    },
    {
      "name": "Komlos, Tristan",
      "ext": "71136",
      "room": "E109C",
      "dep": "House Principal",
      "house": "H",
      "email": "tkomlos@smmusd.org"
    },
    {
      "name": "Larios, Victoria (sub for L. Radford)",
      "ext": "71247",
      "room": "E217",
      "dep": "Math",
      "house": "H",
      "email": "vlarios@smmusd.org"
    },
    {
      "name": "LaRouche, Maureen",
      "ext": "71283",
      "room": "H203",
      "dep": "",
      "house": "I",
      "email": "mlarouche@smmusd.org"
    },
    {
      "name": "Lambert, Ramsey",
      "ext": "71430",
      "room": "South Gym",
      "dep": "PE/Football Coach",
      "house": "O",
      "email": "rlambert@smmusd.org"
    },
    {
      "name": "Ledford, Martin",
      "ext": "71446",
      "room": "A012",
      "dep": "CTE-ROP - Photography, Art Dept. Chair",
      "house": "S",
      "email": "mledford@smmusd.org"
    },
    {
      "name": "Lee, Chon",
      "ext": "71191",
      "room": "H121",
      "dep": "English",
      "house": "M",
      "email": "clee@smmusd.org"
    },
    {
      "name": "Lee, Emily",
      "ext": "71163",
      "room": "L113",
      "dep": "Math",
      "house": "S",
      "email": "e.lee@smmusd.org"
    },
    {
      "name": "LeVeaux, Mele",
      "ext": "71327",
      "room": "L108",
      "dep": "Outreach Specialist",
      "house": "M/H",
      "email": "mleveaux@smmusd.org"
    },
    {
      "name": "Library",
      "ext": "71460",
      "room": "L210",
      "dep": "",
      "house": "",
      "email": ""
    },
    {
      "name": "Lipetz, Sarah",
      "ext": "71221",
      "room": "i221",
      "dep": "Science/Dept. Chair",
      "house": "S",
      "email": "slipetz@smmusd.org"
    },
    {
      "name": "Lofstedt, Ritva",
      "ext": "71113",
      "room": "i113",
      "dep": "Science",
      "house": "O",
      "email": "rlofstedt@smmusd.org"
    },
    {
      "name": "Lopez, Gilbert",
      "ext": "71161",
      "room": "L111",
      "dep": "Mathematics",
      "house": "S",
      "email": ""
    },
    {
      "name": "Lotan, Shuli",
      "ext": "71519",
      "room": "AD502",
      "dep": "",
      "house": "",
      "email": "slotan@smmusd.org"
    },
    {
      "name": "Luong, Theresa",
      "ext": "71280",
      "room": "H200",
      "dep": "Math",
      "house": "O",
      "email": "tluong@smmusd.org"
    },
    {
      "name": "Macwan, Vijaya",
      "ext": "71317",
      "room": "i317",
      "dep": "Science - Chemistry",
      "house": "O",
      "email": "vmacwan@smmusd.org"
    },
    {
      "name": "Manzur, Juan",
      "ext": "71116",
      "room": "i103",
      "dep": "IT Support Tech",
      "house": "",
      "email": "jmanzur@smmusd.org"
    },
    {
      "name": "Marken, Ari",
      "ext": "71621",
      "room": "T-1",
      "dep": "Math",
      "house": "M",
      "email": "amarken@smmusd.org"
    },
    {
      "name": "McCaskill, Damon",
      "ext": "",
      "room": "",
      "dep": "Math",
      "house": "",
      "email": "dmccaskill@smmusd.org"
    },
    {
      "name": "McKellar, Leigh Anne",
      "ext": "71307",
      "room": "I307",
      "dep": "Language",
      "house": "H",
      "email": "lmckellar@smmusd.org"
    },
    {
      "name": "McKeown, Kevin",
      "ext": "71406",
      "room": "M102",
      "dep": "Music",
      "house": "I",
      "email": "komckeown@smmusd.org"
    },
    {
      "name": "Mead, Adrienne",
      "ext": "71542",
      "room": "AD202",
      "dep": "Psychologist",
      "house": "",
      "email": "amead@smmusd.org"
    },
    {
      "name": "Meadors, Amy",
      "ext": "71315",
      "room": "i315",
      "dep": "Science",
      "house": "I",
      "email": "ameadors@smmusd.org"
    },
    {
      "name": "Medrano, Dr. Hector",
      "ext": "71269",
      "room": "L200",
      "dep": "House Principal",
      "house": "S",
      "email": "hmedrano@smmusd.org"
    },
    {
      "name": "Mejia, Rosa",
      "ext": "71479",
      "room": "B115C",
      "dep": "College Counselor (O-Z)",
      "house": "H",
      "email": "rmejia@smmusd.org"
    },
    {
      "name": "Mendoza, Dina",
      "ext": "71546",
      "room": "AD100",
      "dep": "Enrollment",
      "house": "",
      "email": "dmendoza@smmusd.org"
    },
    {
      "name": "Mendoza, Virginia",
      "ext": "71132",
      "room": "E109",
      "dep": "H House Advisor (10, 12)",
      "house": "H",
      "email": "vmendoza@smmusd.org"
    },
    {
      "name": "Mickelopoulos, George",
      "ext": "71182",
      "room": "S203",
      "dep": "Special Education/Math",
      "house": "H",
      "email": "gmickelopoulos@smmusd.org"
    },
    {
      "name": "Mireles, Guadalupe",
      "ext": "71309",
      "room": "i309",
      "dep": "Language (Spanish)",
      "house": "I",
      "email": "mireles@smmusd.org"
    },
    {
      "name": "Morales, Diana",
      "ext": "0",
      "room": "AD400",
      "dep": "Switchboard/Bulletin",
      "house": "",
      "email": "dmorales@smmusd.org"
    },
    {
      "name": "Morris, Terry",
      "ext": "71250",
      "room": "L200",
      "dep": "House Assistant",
      "house": "S",
      "email": "tmorris@smmusd.org"
    },
    {
      "name": "Mun, Jason",
      "ext": "71323",
      "room": "E103",
      "dep": "",
      "house": "M",
      "email": "jmun@smmusd.org"
    },
    {
      "name": "Nesbitt, Cheryl",
      "ext": "71254",
      "room": "L204",
      "dep": "Japanese",
      "house": "M",
      "email": "cnesbitt@smmusd.org"
    },
    {
      "name": "Nicolas, Jenny",
      "ext": "71505",
      "room": "AD300",
      "dep": "Vikes Inn/ASB Financial Assistant",
      "house": "",
      "email": "jnicolas@smmusd.org"
    },
    {
      "name": "O'Brien, Diane",
      "ext": "71529",
      "room": "AD500",
      "dep": "Student Records",
      "house": "",
      "email": "dobrien@smmusd.org"
    },
    {
      "name": "Okla, Kelly John",
      "ext": "71290",
      "room": "H210",
      "dep": "Math",
      "house": "O",
      "email": "kokla@smmusd.org"
    },
    {
      "name": "Orgill, Sarah",
      "ext": "71192",
      "room": "H122",
      "dep": "English",
      "house": "M",
      "email": "sorgill@smmusd.org"
    },
    {
      "name": "Pantallion, Ayanna",
      "ext": "71319",
      "room": "i319",
      "dep": "Science",
      "house": "M",
      "email": "apantallion@smmusd.org"
    },
    {
      "name": "Parker, Trevor",
      "ext": "71159",
      "room": "L109",
      "dep": "Math",
      "house": "S",
      "email": "tparker@smmusd.org"
    },
    {
      "name": "Part, Brian",
      "ext": "71584",
      "room": "BH19",
      "dep": "Sports Facility Coordinator",
      "house": "",
      "email": "bpart@smmusd.org"
    },
    {
      "name": "Patenaude, Brian",
      "ext": "71432",
      "room": "B206",
      "dep": "",
      "house": "M",
      "email": "bpatenaude@smmusd.org"
    },
    {
      "name": "Paule-Sheahan, Lauren",
      "ext": "71480",
      "room": "B122",
      "dep": "O House Principal",
      "house": "O",
      "email": "lpaulesheahan@smmusd.org"
    },
    {
      "name": "Paulis, Sarah",
      "ext": "71157",
      "room": "L107",
      "dep": "English",
      "house": "O",
      "email": "spaulis@smmusd.org"
    },
    {
      "name": "Perry, Diane",
      "ext": "71543",
      "room": "AD200",
      "dep": "Psychologist",
      "house": "",
      "email": "dperry@smmusd.org"
    },
    {
      "name": "Perryman, Ashley",
      "ext": "71541",
      "room": "AD201",
      "dep": "Psychologist",
      "house": "",
      "email": "aperryman@smmusd.org"
    },
    {
      "name": "Peters, Lois",
      "ext": "71104",
      "room": "i104",
      "dep": "Special Education",
      "house": "I",
      "email": "lpeters@smmusd.org"
    },
    {
      "name": "Petrone, Joseph",
      "ext": "71289",
      "room": "H209",
      "dep": "Special Education",
      "house": "I",
      "email": "jpetrone@smmusd.org"
    },
    {
      "name": "Phelan, James",
      "ext": "71148",
      "room": "E103",
      "dep": "Special Ed/Social Studies",
      "house": "H",
      "email": "jphelan@smmusd.org"
    },
    {
      "name": "Pitts, Gregory",
      "ext": "71144",
      "room": "B110A",
      "dep": "Special Education/Dept. Chair",
      "house": "I",
      "email": "gpitts@smmusd.org"
    },
    {
      "name": "Price, Lohren",
      "ext": "71467",
      "room": "L210",
      "dep": "Library Assistant",
      "house": "",
      "email": "lprice@smmusd.org"
    },
    {
      "name": "Pulido, Maribel",
      "ext": "71551",
      "room": "H106",
      "dep": "M House Advisor (10/12)",
      "house": "M",
      "email": "mpulido@smmusd.org"
    },
    {
      "name": "Quinones, Kyra",
      "ext": "71271",
      "room": "B201",
      "dep": "Speech Language Pathologist",
      "house": "",
      "email": "kquinones@smmusd.org"
    },
    {
      "name": "Radford, Karen",
      "ext": "71506",
      "room": "AD406",
      "dep": "Office Assistant",
      "house": "",
      "email": "kradford@smmusd.org"
    },
    {
      "name": "Radford, Lance (see V. Larios)",
      "ext": "71247",
      "room": "E217",
      "dep": "Mathematics",
      "house": "H",
      "email": "lradford@smmusd.org"
    },
    {
      "name": "Reed, Lu Anne",
      "ext": "71510",
      "room": "Nurse's Office",
      "dep": "Nurse",
      "house": "",
      "email": "lreed@smmusd.org"
    },
    {
      "name": "Reveles, Favio",
      "ext": "71533",
      "room": "AD103C",
      "dep": "Plant Supervisor, M & O",
      "house": "",
      "email": "freveles@smmusd.org"
    },
    {
      "name": "Reyes, Katrina",
      "ext": "71213",
      "room": "i213",
      "dep": "ELD/Science",
      "house": "M",
      "email": "kreyes@smmusd.org"
    },
    {
      "name": "Rodriguez, Carolina",
      "ext": "71507",
      "room": "AD203",
      "dep": "Nurse",
      "house": "",
      "email": "carol.rodriguez@smmusd.org"
    },
    {
      "name": "Rodriguez, Sarah",
      "ext": "71137",
      "room": "E107",
      "dep": "English",
      "house": "H",
      "email": "sarah.rodriguez@smmusd.org"
    },
    {
      "name": "Rotondi, Sherie",
      "ext": "71535/71170",
      "room": "AD103E/B100",
      "dep": "Activities Director",
      "house": "S",
      "email": "srotondi@smmusd.org"
    },
    {
      "name": "Ruetschle, Valita",
      "ext": "71183",
      "room": "H103",
      "dep": "Special Education",
      "house": "M",
      "email": "vruetschle@smmusd.org"
    },
    {
      "name": "Rupprecht, Steve",
      "ext": "71288",
      "room": "H208",
      "dep": "Math",
      "house": "O",
      "email": "srupprecht@smmusd.org"
    },
    {
      "name": "Sakow, Terry",
      "ext": "71407",
      "room": "M102",
      "dep": "Performing Arts",
      "house": "M",
      "email": "tsakow@smmusd.org"
    },
    {
      "name": "Salumbides, RoseAnn",
      "ext": "71270",
      "room": "B202",
      "dep": "Social Studies",
      "house": "M",
      "email": "rsalumbides@smmusd.org"
    },
    {
      "name": "Sato, Liane",
      "ext": "71437",
      "room": "Gym",
      "dep": "PE/Science/Athletics - Volleyball",
      "house": "S",
      "email": "lsato@smmusd.org"
    },
    {
      "name": "Saunders, Shawn",
      "ext": "71442",
      "room": "A102",
      "dep": "CTE-ROP/Art - Digital Design",
      "house": "S",
      "email": "ssaunders@smmusd.org"
    },
    {
      "name": "Savage, Stephanie",
      "ext": "71175",
      "room": "B115",
      "dep": "College Center Assistant",
      "house": "",
      "email": "ssavage@smmusd.org"
    },
    {
      "name": "Schwartz, Marla",
      "ext": "71283",
      "room": "H203",
      "dep": "English",
      "house": "O",
      "email": "mschwartz@smmusd.org"
    },
    {
      "name": "Security Office",
      "ext": "71533",
      "room": "AD103C",
      "dep": "",
      "house": "",
      "email": ""
    },
    {
      "name": "Security (Weekends)",
      "ext": "71650",
      "room": "",
      "dep": "",
      "house": "",
      "email": ""
    },
    {
      "name": "Shelton, Antonio",
      "ext": "71504",
      "room": "AD401",
      "dep": "Principal",
      "house": "",
      "email": "ashelton@smmusd.org"
    },
    {
      "name": "Simone, Shaun",
      "ext": "71273",
      "room": "B206A",
      "dep": "Special Education",
      "house": "O",
      "email": "ssimone@smmusd.org"
    },
    {
      "name": "Shore, Andrea",
      "ext": "71151",
      "room": "L101",
      "dep": "English",
      "house": "S",
      "email": "ashore@smmusd.org"
    },
    {
      "name": "Silvestri, Marisa",
      "ext": "71205",
      "room": "i205",
      "dep": "Social Studies",
      "house": "I",
      "email": "msilvestri@smmusd.org"
    },
    {
      "name": "Simone, Laura",
      "ext": "71472",
      "room": "B122",
      "dep": "O House Advisor (10/12)",
      "house": "O",
      "email": "lsimone@smmusd.org"
    },
    {
      "name": "Simone, Shaun",
      "ext": "71273",
      "room": "B206A",
      "dep": "Tennis Coach",
      "house": "O",
      "email": "ssimone@smmusd.org"
    },
    {
      "name": "Skaggs, Debbie",
      "ext": "71438",
      "room": "Gym",
      "dep": "PE/PE Dept. Chair",
      "house": "H",
      "email": "dskaggs@smmusd.org"
    },
    {
      "name": "Smith, Nadia",
      "ext": "71297",
      "room": "H217",
      "dep": "French",
      "house": "O",
      "email": "nsmith@smmusd.org"
    },
    {
      "name": "Snyder, Breanna",
      "ext": "71223",
      "room": "i223",
      "dep": "Science",
      "house": "M",
      "email": "bsnyder@smmusd.org"
    },
    {
      "name": "Song, Kate",
      "ext": "71111",
      "room": "i111",
      "dep": "Science",
      "house": "I",
      "email": "ksong@smmusd.org"
    },
    {
      "name": "Springer, Caroline",
      "ext": "71504",
      "room": "AD400",
      "dep": "Principal's Assistant",
      "house": "",
      "email": "cspringer@smmusd.org"
    },
    {
      "name": "Striff, Jill",
      "ext": "71198",
      "room": "H118",
      "dep": "",
      "house": "",
      "email": "jstriff@smmusd.org"
    },
    {
      "name": "Sunseri, Jessi",
      "ext": "71445",
      "room": "A105",
      "dep": "Art",
      "house": "M",
      "email": "jsunseri@smmusd.org"
    },
    {
      "name": "Swenson, Joni",
      "ext": "71405",
      "room": "M101",
      "dep": "Performing Arts/Co-Dept. Chair",
      "house": "O",
      "email": "jswenson@smmusd.org"
    },
    {
      "name": "Tamthai, Aaron",
      "ext": "71285",
      "room": "H205",
      "dep": "Special Education",
      "house": "O",
      "email": "atamthai@smmusd.org"
    },
    {
      "name": "Textbook Room",
      "ext": "71550",
      "room": "AD12",
      "dep": "",
      "house": "",
      "email": ""
    },
    {
      "name": "Thrower, Lois",
      "ext": "71550",
      "room": "AD12",
      "dep": "Textbooks",
      "house": "H",
      "email": "lthrower@smmusd.org"
    },
    {
      "name": "Thun, Charles",
      "ext": "71164",
      "room": "L114",
      "dep": "Social Studies",
      "house": "S",
      "email": "cthun@smmusd.org"
    },
    {
      "name": "Toppel, Diane",
      "ext": "71181",
      "room": "H101",
      "dep": "English/Special Education",
      "house": "H",
      "email": "dtoppel@smmusd.org"
    },
    {
      "name": "Torres, Guadalupe",
      "ext": "71231",
      "room": "E201",
      "dep": "Math",
      "house": "H",
      "email": "gtorres@smmusd.org"
    },
    {
      "name": "Tovar, Stefani",
      "ext": "71460",
      "room": "L210",
      "dep": "Library",
      "house": "H",
      "email": "stovar@smmusd.org"
    },
    {
      "name": "Transcripts/Records",
      "ext": "71526",
      "room": "AD500",
      "dep": "",
      "house": "",
      "email": ""
    },
    {
      "name": "Trundle, Al",
      "ext": "71134",
      "room": "E109",
      "dep": "H House Adviosor (9/11)",
      "house": "H",
      "email": "atrundle@smmusd.org"
    },
    {
      "name": "Valencia, Yunuen",
      "ext": "71226",
      "room": "i208D",
      "dep": "I House Advisor (10/12)",
      "house": "I",
      "email": "yvalencia@smmusd.org"
    },
    {
      "name": "Veral, Ramón",
      "ext": "71308",
      "room": "i308",
      "dep": "Math/ELD",
      "house": "I",
      "email": "rveral@smmusd.org"
    },
    {
      "name": "Wang, Cathy",
      "ext": "71258",
      "room": "L208",
      "dep": "Foreign Language - Chinese",
      "house": "M",
      "email": "qwang@smmusd.org"
    },
    {
      "name": "Washington, Chaneé",
      "ext": "71208",
      "room": "i208",
      "dep": "House Assistant",
      "house": "I",
      "email": "cwashington@smmusd.org"
    },
    {
      "name": "Wethern, Heather",
      "ext": "71251",
      "room": "L201",
      "dep": "Foreign Language - Spanish / Dept. Chair",
      "house": "S",
      "email": "hwethern@smmusd.org"
    },
    {
      "name": "Whaley, Tom",
      "ext": "70287",
      "room": "M102",
      "dep": "Performing Arts",
      "house": "",
      "email": "twhaley@smmusd.org"
    },
    {
      "name": "Wishart, Bill",
      "ext": "71189",
      "room": "H123",
      "dep": "CTE-ROP/Art/FUD",
      "house": "",
      "email": "wwishart@smmusd.org"
    },
    {
      "name": "Yaghoubian, Rebecca",
      "ext": "71115",
      "room": "i115",
      "dep": "Science",
      "house": "M",
      "email": "ryaghoubian@smmusd.org"
    },
    {
      "name": "Yumori, Nicole",
      "ext": "71160",
      "room": "L110",
      "dep": "Math",
      "house": "S",
      "email": "nyumori@smmusd.org"
    }
   ];

$(document).ready(function() {
  const teacherTable = document.getElementById("insideTable");
  const iosButton = document.getElementById("iosB");
    var formattedTeacherList = [];
    for (let index = 0; index < teacherJsonList.length; index++) {
        const element = teacherJsonList[index];
        const theMap = {};
        theMap['text']=element['name'];
        theMap['id']=index;
        formattedTeacherList.push(theMap);
    }   
    var searchBar = $('.search');
    searchBar.select2({
        allowClear: true,
        data: formattedTeacherList,
        disabled: false,
        placeholder: "Search Teachers",
        SingleSelection: true,
        width: 'inherit'
    });
    searchBar.on(
      "select2:select",
      function (event) {
          for (let index = 0; index < formattedTeacherList.length; index++) {
            //console.log(event);
            //console.log(event['params']['data']['text']);
            const theTeacher = formattedTeacherList[index]['text'];
            console.log(theTeacher);
            if(event['params']['data']['text']==theTeacher){
              console.log("it found its teacher");
              teacherTable.innerHTML = composeTeacherRow(teacherJsonList[index]);
              break;
            }else{
              console.log("Didn't find");
            }

          }
          console.log("Selected");
      }
  );
  searchBar.on(
      "select2:unselect",
      function (e) {
        console.log("Unselected");
        teacherTable.innerHTML = "";

        for (const key in teacherJsonList) {
            const teacher = teacherJsonList[key];
            teacherTable.innerHTML+=composeTeacherRow(teacher);
        }
      }
  );
  
   for (const key in teacherJsonList) {
      const teacher = teacherJsonList[key];
      teacherTable.innerHTML+=composeTeacherRow(teacher);
   }
});

function composeFullTable(teacherJsonList){

}
function composeTeacherRow(teacher){
  return '<tr><td>'+teacher['name']+'</td><td>x'+teacher['ext']+'</td><td>'+teacher['room']+'</td><td>'+teacher['dep']+'</td><td><b>'+teacher['house']+'</b></td><td><a href=\"mailto:'+teacher['email']+'"'+'>'+teacher['email']+'</a></td></tr>';
}
function downloadIOS(){window.open("https://apps.apple.com/us/app/samohi-connect/id1465501734");}
function downloadAndroid(){window.open("https://play.google.com/store/apps/details?id=com.swerd.SamoConnect&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1")}
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
function downloadSAMO(){
  //  this.test = document.getElementById('platformWidget');

//console.log(getMobileOperatingSystem());
   // this.test.innerHTML = getMobileOperatingSystem();
    if(getMobileOperatingSystem()=="iOS"||getMobileOperatingSystem()=="unknown"){
        console.log("Ok its working");
        open("https://apps.apple.com/us/app/samohi-connect/id1465501734?ls=1", "_blank");
    }else if(getMobileOperatingSystem()=="Android" ||getMobileOperatingSystem()=="Windows Phone"){
      open("https://play.google.com/store/apps/details?id=com.swerd.SamoConnect&hl=en_US", "_blank");
    }
}