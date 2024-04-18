const TRAFFIC_SIGNAL = "TRAFFIC SIGNAL";
const SIGN_RELATED = "SIGN RELATED";
const ROAD_RELATED = "ROAD RELATED";
const LICENSE_RELATED = "LICENSE RELATED";
const GK_RELATED = "GENERAL_KNOWLEDGE_RELATED";

export const categories = [
  {
    name: TRAFFIC_SIGNAL,
    weightage: 5,
  },
  {
    name: SIGN_RELATED,
    weightage: 5,
  },
  {
    name: ROAD_RELATED,
    weightage: 5,
  },
  {
    name: LICENSE_RELATED,
    weightage: 5,
  },
  {
    name: GK_RELATED,
    weightage: 5,
  },
];

const signRelatedQuestions = [
  {
    id: "SIGN_1",
    question: "નીચે પૈકીની કઈ આકૃતિ ફરજીયાત (આદેશાત્મક) નિશાનીઓ દર્શાવે છે?",
    options: [
      {
        id: "A",
        answer: "",
        image: "circle",
      },
      {
        id: "B",
        answer: "",
        image: "triangle",
      },
      {
        id: "C",
        answer: "",
        image: "rectangle",
      },
      {
        id: "D",
        answer: "",
        image: "halt",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "A",
      answer: "",
      image: "circle",
    },
  },
  {
    id: "SIGN_2",
    question: "નીચે પૈકીની કઈ આકૃતિ ચેતવણીદર્શક નિશાનીઓ દર્શાવે છે?",
    options: [
      {
        id: "A",
        answer: "",
        image: "circle",
      },
      {
        id: "B",
        answer: "",
        image: "triangle",
      },
      {
        id: "C",
        answer: "",
        image: "rectangle",
      },
      {
        id: "D",
        answer: "",
        image: "halt",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "Triangle",
      image: "triangle",
    },
  },
  {
    id: "SIGN_3",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "overtake_prohibited",
    options: [
      {
        id: "A",
        answer: "આગળ સીધો રસ્તો છે.",
      },
      {
        id: "B",
        answer: "ઓવર ટેક કરવાની મનાઈ છે.",
      },
      {
        id: "C",
        answer: "એક માર્ગીય રસ્તો છે.",
      },
      {
        id: "D",
        answer: "ડાબી બાજુ પ્રવેશની મનાઈ છે.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "ઓવર ટેક કરવાની મનાઈ છે.",
    },
  },
  {
    id: "SIGN_4",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "noentry",
    options: [
      {
        id: "A",
        answer: "આગળ સીધો રસ્તો છે.",
      },
      {
        id: "B",
        answer: "નો એન્ટ્રી",
      },
      {
        id: "C",
        answer: "વન-વે",
      },
      {
        id: "D",
        answer: "ગતિ મર્યાદાનો અંત",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "નો એન્ટ્રી",
    },
  },
  {
    id: "SIGN_5",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "noparking",
    options: [
      {
        id: "A",
        answer: "આગળ સીધો રસ્તો છે.",
      },
      {
        id: "B",
        answer: "ઓવર ટેક કરવાની મનાઈ છે.",
      },
      {
        id: "C",
        answer: "એક માર્ગીય રસ્તો છે.",
      },
      {
        id: "D",
        answer: "ડાબી બાજુ પ્રવેશની મનાઈ છે.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "ઓવર ટેક કરવાની મનાઈ છે.",
    },
  },
  {
    id: "SIGN_6",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "speedlimit",
    options: [
      {
        id: "A",
        answer: "૫૦ કિ.મી/ કલાક કરતાં વધુ ઝડપે વાહન ચલાવવું નહિ.",
      },
      {
        id: "B",
        answer: "૫૦ કિ.મી/ કલાકની ઝડપે વાહન ચલાવવું.",
      },
      {
        id: "C",
        answer: "૫૦ કિ.મી/ કલાક કરતાં વધુ ઝડપે વાહન ચલાવવું.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "A",
      answer: "૫૦ કિ.મી/ કલાક કરતાં વધુ ઝડપે વાહન ચલાવવું નહિ.",
    },
  },
  {
    id: "SIGN_7",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "vehicle_nostop",
    options: [
      {
        id: "A",
        answer: "અંકુશનો અંત",
      },
      {
        id: "B",
        answer: "વાહનને અલ્પ સમય માટે પણ ઉભુ રાખવાની મનાઈ છે.",
      },
      {
        id: "C",
        answer: "પાર્કીંગની મનાઈ છે.",
      },
      {
        id: "D",
        answer: "ગતિ મર્યાદાનો અંત",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "વાહનને અલ્પ સમય માટે પણ ઉભુ રાખવાની મનાઈ છે.",
    },
  },
  {
    id: "SIGN_8",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "narrowroad",
    options: [
      {
        id: "A",
        answer: "સામે બંને તરફ રોડ છે.",
      },
      {
        id: "B",
        answer: "આગળ સાંકડો બ્રીજ છે.",
      },
      {
        id: "C",
        answer: "આગળ સાંકડો રસ્તો છે.",
      },
      {
        id: "D",
        answer: "આગળ રસ્તો નથી.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "આગળ સાંકડો બ્રીજ છે.",
    },
  },
  {
    id: "SIGN_9",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "roadmerge",
    options: [
      {
        id: "A",
        answer: "આગળ હોસ્પિટલ છે.",
      },
      {
        id: "B",
        answer: "આગળ ક્રોસ રોડ (બે રસ્તાઓ ભેગા થાય છે./ચાર રસ્તા છે.)",
      },
      {
        id: "C",
        answer: "પ્રવેશ મનાઈ છે.",
      },
      {
        id: "D",
        answer: "આગળ રસ્તો નથી.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "આગળ ક્રોસ રોડ (બે રસ્તાઓ ભેગા થાય છે./ચાર રસ્તા છે.)",
    },
  },
  {
    id: "SIGN_10",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "speedlimitover",
    options: [
      {
        id: "A",
        answer: "રસ્તો બંધ છે.",
      },
      {
        id: "B",
        answer: "પાર્કીંગની મનાઈ છે.",
      },
      {
        id: "C",
        answer: "ગતિ મર્યાદાનો અંત",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "C",
      answer: "ગતિ મર્યાદાનો અંત",
    },
  },
  {
    id: "SIGN_11",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "barrierahead",
    options: [
      {
        id: "A",
        answer: "આગળ વજન કાંટો છે.",
      },
      {
        id: "B",
        answer: "આગળ બેરિયર છે.",
      },
      {
        id: "C",
        answer: "રેલ્વે ક્રોસીગ છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "આગળ બેરિયર છે.",
    },
  },
  {
    id: "SIGN_12",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "rightturn",
    options: [
      {
        id: "A",
        answer: "ફરજીયાત ડાબી બાજુ રાખો.",
      },
      {
        id: "B",
        answer: "ડાબી બાજુ હાંકો.",
      },
      {
        id: "C",
        answer: "ડાબી બાજુ રસ્તો નથી.",
      },
      {
        id: "D",
        answer: "અંડરગ્રાઉંડ રસ્તો છે.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "ડાબી બાજુ હાંકો.",
    },
  },
  {
    id: "SIGN_13",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "straight_right",
    options: [
      {
        id: "A",
        answer: "ડાબી બાજુ વાળી શકાય.",
      },
      {
        id: "B",
        answer: "ડાબી બાજુ સાઈડ રોડ છે.",
      },
      {
        id: "C",
        answer:
          "ફરજીયાત આગળ વધો અથવા ડાબી બાજુ વાહન વાળી શકાય. (ડ) આગળ સાઈડ રોડ છે.",
      },
      {
        id: "D",
        answer: "આગળ સાઈડ રોડ છે.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "C",
      answer:
        "ફરજીયાત આગળ વધો અથવા ડાબી બાજુ વાહન વાળી શકાય. (ડ) આગળ સાઈડ રોડ છે.",
    },
  },
  {
    id: "SIGN_14",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "rest",
    options: [
      {
        id: "A",
        answer: "હોસ્પિટલ",
      },
      {
        id: "B",
        answer: "આરામ ગૃહ",
      },
      {
        id: "C",
        answer: "ફસ્ટ એઈડ",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "આરામ ગૃહ",
    },
  },

  {
    id: "SIGN_15",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "rest",
    options: [
      {
        id: "A",
        answer: "હોસ્પિટલ",
      },
      {
        id: "B",
        answer: "આરામ ગૃહ",
      },
      {
        id: "C",
        answer: "ફસ્ટ એઈડ",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "આરામ ગૃહ",
    },
  },

  {
    id: "SIGN_16",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "hospital",
    options: [
      {
        id: "A",
        answer: "હોસ્પિટલ",
      },
      {
        id: "B",
        answer: "આરામ ગૃહ",
      },
      {
        id: "C",
        answer: "ફસ્ટ એઈડ",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "A",
      answer: "હોસ્પિટલ",
    },
  },

  {
    id: "SIGN_17",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "giveway",
    options: [
      {
        id: "A",
        answer: "હોસ્પિટલ છે",
      },
      {
        id: "B",
        answer: "રસ્તો આપો.",
      },
      {
        id: "C",
        answer: "આગળ ટ્રાફિક આઈલેંડ છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "રસ્તો આપો.",
    },
  },
  {
    id: "SIGN_18",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "dangerousroad",
    options: [
      {
        id: "A",
        answer: "હોડી સેવા છે.",
      },
      {
        id: "B",
        answer: "આગળ સાંકડો રસ્તો છે.",
      },
      {
        id: "C",
        answer: "ભયજનક સૂપડી છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "C",
      answer: "ભયજનક સૂપડી છે.",
    },
  },

  {
    id: "SIGN_19",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "roaddivider",
    options: [
      {
        id: "A",
        answer: "રસ્તાની મધ્યમાં ગટર લાઈન છે.",
      },
      {
        id: "B",
        answer: "આગળ પુલ છે",
      },
      {
        id: "C",
        answer: "રોડ ડીવાયડરમાં જગ્યા છે.",
      },
      {
        id: "D",
        answer: "રસ્તો ખરબચડો છે.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "C",
      answer: "રોડ ડીવાયડરમાં જગ્યા છે.",
    },
  },

  {
    id: "SIGN_20",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "railwaycrossing",
    options: [
      {
        id: "A",
        answer: "ફાટકવાળું રેલ્વે ક્રોસીંગ",
      },
      {
        id: "B",
        answer: "ફાટક વગરનું રેલ્વે ક્રોસીંગ",
      },
      {
        id: "C",
        answer: "૨૦૦ મીટર આગળ ફાટકવાળું રેલ્વે ક્રોસીંગ",
      },
      {
        id: "D",
        answer: "૨૦૦ મીટર આગળ ફાટક વગરનું રેલ્વે ક્રોસીંગ",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "A",
      answer: "ફાટકવાળું રેલ્વે ક્રોસીંગ",
    },
  },

  {
    id: "SIGN_21",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "firstaid",
    options: [
      {
        id: "A",
        answer: "હોસ્પિટલ",
      },
      {
        id: "B",
        answer: "આરામ ગૃહ",
      },
      {
        id: "C",
        answer: "ફસ્ટ એઈડ",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "C",
      answer: "ફસ્ટ એઈડ",
    },
  },

  {
    id: "SIGN_22",
    question: "નીચે પૈકીની નિશાની શું દર્શાવે છે?",
    imageName: "roundabout",
    options: [
      {
        id: "A",
        answer: "જમણીબાજુ વળો",
      },
      {
        id: "B",
        answer: "ડાબીબાજુ વળો",
      },
      {
        id: "C",
        answer: "ગોળ ફરીને જાવ",
      },
      {
        id: "D",
        answer: "આ પ્રકારની ટ્રાફિક નિશાની નથી.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "C",
      answer: "ગોળ ફરીને જાવ",
    },
  },

  {
    id: "SIGN_23",
    question: "કયાં રંગના પટ્ટા દોરેલા ચિન્હો અકસ્માતની સંભાવના દર્શાવે છે.",
    options: [
      {
        id: "A",
        answer: "કાળા અને સફેદ",
      },
      {
        id: "B",
        answer: "કાળા અને પીળા",
      },
      {
        id: "C",
        answer: "કાળા",
      },
      {
        id: "D",
        answer: "લાલ",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "કાળા અને પીળા",
    },
  },

  {
    id: "SIGN_24",
    question:
      "કયાં રંગના પટ્ટા દોરેલા ચિન્હો રીપેરીંગ કામ ચાલુ છે તેમ દર્શાવે છે.",
    options: [
      {
        id: "A",
        answer: "કાળા અને સફેદ",
      },
      {
        id: "B",
        answer: "લાલ  અને સફેદ",
      },
      {
        id: "C",
        answer: "કાળા અને  લાલ",
      },
      {
        id: "D",
        answer: "લાલ",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "લાલ  અને સફેદ",
    },
  },

  {
    id: "SIGN_25",
    question: "તમે જ્યારે સ્કુલની ટ્રાફીક સંજ્ઞા જુઓ ત્યારે",
    options: [
      {
        id: "A",
        answer: "વાહન થોભાવો, હોર્ન વગાડો અને આગળ વધો.",
      },
      {
        id: "B",
        answer: "વાહન ધીમું કરો અને સાવચેતીથી આગળ વધો.",
      },
      {
        id: "C",
        answer: "સતત હોર્ન ચાલુ રાખો અને આગળ વધો.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "વાહન ધીમું કરો અને સાવચેતીથી આગળ વધો.",
    },
  },

  {
    id: "SIGN_26",
    question:
      "ડ્રાયવર પોતાનો જમણો હાથ બહાર કાઢી હથેળી નીચેની તરફ રાખી હાથ ઘણી વાર ઉપર નીચે કરે છે ત્યારે શું સમજશો?",
    options: [
      {
        id: "A",
        answer: "તે ડાબી બાજુ વળવા માંગે છે.",
      },
      {
        id: "B",
        answer: "તે વાહન ધીમું કરી રહ્યો છે.",
      },
      {
        id: "C",
        answer: "તે પાછળ આવતા વાહનને ઓવરટેક કરવા કહે છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: SIGN_RELATED,
    correctAnswer: {
      id: "B",
      answer: "તે વાહન ધીમું કરી રહ્યો છે.",
    },
  },
];

const trafficSignalRelatedQuestions = [
  {
    id: "TRAFFIC_SIGNAL_1",
    question: "ટ્રાફિક સિગ્નલમાં લાલ રંગનો ઉપયોગ કેમ કરવામાં આવે છે?",
    options: [
      {
        id: "A",
        answer: "ટૂંકી તરંગલંબાઇ",
      },
      {
        id: "B",
        answer: "લાંબી તરંગલંબાઇ",
      },
      {
        id: "C",
        answer: "લાંબી આવૃતિ",
      },
      {
        id: "D",
        answer: "ટૂંકી આવૃતિ",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "B",
      answer: "લાંબી તરંગલંબાઇ",
    },
  },
  {
    id: "TRAFFIC_SIGNAL_2",
    question:
      "ટ્રાફિક સિગ્નલમાં કયાં રંગને ઉર્જા અને સુર્યનું પ્રતીક માનવામાં આવે છે?",
    options: [
      {
        id: "A",
        answer: "લીલો",
      },
      {
        id: "B",
        answer: "પીળો",
      },
      {
        id: "C",
        answer: "લાલ",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "B",
      answer: "પીળો",
    },
  },
  {
    id: "TRAFFIC_SIGNAL_3",
    question:
      "ટ્રાફિક સિગ્નલમાં કયો રંગ પ્રકૃતિ અને શાંતિનું પ્રતીક માનવામાં આવે છે?",
    options: [
      {
        id: "A",
        answer: "લીલો",
      },
      {
        id: "B",
        answer: "પીળો",
      },
      {
        id: "C",
        answer: "લાલ",
      },
      {
        id: "D",
        answer: "સફેદ",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "A",
      answer: "લીલો",
    },
  },
  {
    id: "TRAFFIC_SIGNAL_4",
    question:
      "ચાર રસ્તા ઉપર ટ્રાફીક સિગ્નલની પીળી લાઇટ દેખાય ત્યારે ત્યાં પહોચતાં વાહનનો ડ્રાઈવર",
    options: [
      {
        id: "A",
        answer: "સલામતી નક્કી કરીને વાહન હંકારી જશે.",
      },
      {
        id: "B",
        answer: "થોભવા માટે વાહન ધીમું પાડશે.",
      },
      {
        id: "C",
        answer: "હોર્ન વગાડશે અને આગળ વધશે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "B",
      answer: "થોભવા માટે વાહન ધીમું પાડશે.",
    },
  },

  {
    id: "TRAFFIC_SIGNAL_5",
    question: "જ્યાં અંધ વ્યક્તિ સફેદ લાકડી હાથમાં પકડી રોડ ક્રોસ કરે ત્યારે",
    options: [
      {
        id: "A",
        answer:
          "વાહનનો ડ્રાયવર સફેદ લાકડીને વાહન ઉભું રાખવા માટેનું ટ્રાફિક સિગ્નલ ગણશે.",
      },
      {
        id: "B",
        answer: "હોર્ન વગાડશો અને આગળ વધશો.",
      },
      {
        id: "C",
        answer: "વાહન ધીમું કરશો અને સાવચેતીથી આગળ",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "A",
      answer:
        "વાહનનો ડ્રાયવર સફેદ લાકડીને વાહન ઉભું રાખવા માટેનું ટ્રાફિક સિગ્નલ ગણશે.",
    },
  },
  {
    id: "TRAFFIC_SIGNAL_5",
    question: "જ્યાં અંધ વ્યક્તિ સફેદ લાકડી હાથમાં પકડી રોડ ક્રોસ કરે ત્યારે",
    options: [
      {
        id: "A",
        answer:
          "વાહનનો ડ્રાયવર સફેદ લાકડીને વાહન ઉભું રાખવા માટેનું ટ્રાફિક સિગ્નલ ગણશે.",
      },
      {
        id: "B",
        answer: "હોર્ન વગાડશો અને આગળ વધશો.",
      },
      {
        id: "C",
        answer: "વાહન ધીમું કરશો અને સાવચેતીથી આગળ",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "A",
      answer:
        "વાહનનો ડ્રાયવર સફેદ લાકડીને વાહન ઉભું રાખવા માટેનું ટ્રાફિક સિગ્નલ ગણશે.",
    },
  },

  {
    id: "TRAFFIC_SIGNAL_6",
    question:
      "તમે એવા ચાર રસ્તા ઉપર પહોંચો છો જ્યાં સિગ્નલ લાઇટ કે પોલીસમેન નથી.",
    options: [
      {
        id: "A",
        answer: "અન્ય રોડ ઉપરથી ચાર રસ્તા તરફ આવતાં દરેક વાહનને જવાં દેશો.",
      },
      {
        id: "B",
        answer: "યોગ્ય સિગ્નલ હોર્ન વગાડી આગળ વધશો.",
      },
      {
        id: "C",
        answer:
          "તમારી જમણી તરફથી ચાર રસ્તા ઉપર આવતાં ટ્રાફિકને રસ્તો આપીને આગળ વધશો.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "C",
      answer:
        "તમારી જમણી તરફથી ચાર રસ્તા ઉપર આવતાં ટ્રાફિકને રસ્તો આપીને આગળ વધશો.",
    },
  },

  {
    id: "TRAFFIC_SIGNAL_7",
    question:
      "તમે એવા ચાર રસ્તા ઉપર પહોંચો છો જ્યાં પીળી સિગ્નલ લાઇટ ઝબકારા મારે છે ત્યારે?",
    options: [
      {
        id: "A",
        answer: "કોઇ પણ જાતનો પ્રતિબંધ ન હોવાથી એ જ ગતિ એ આગળ વધશો.",
      },
      {
        id: "B",
        answer: "વાહન થોભાવી લીલી લાઇટ થાય ત્યાં સુધી ઉભા રહેશો.",
      },
      {
        id: "C",
        answer: "વાહન ધીમું કરીને સલામત લાગે તેમ નક્કી થાય તો આગળ વધશો.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "C",
      answer: "વાહન ધીમું કરીને સલામત લાગે તેમ નક્કી થાય તો આગળ વધશો.",
    },
  },

  {
    id: "TRAFFIC_SIGNAL_8",
    question: "પીળા રંગની ટ્રાફીક લાઇટ ઝબુક – ઝબુક થાય છે એનો અર્થ",
    options: [
      {
        id: "A",
        answer: "લીલી લાઈટ થાય ત્યાં સુધી થોભો",
      },
      {
        id: "B",
        answer: "વાહન થોભાવો અને સલામત હોય તો આગળ વધો.",
      },
      {
        id: "C",
        answer: "વાહનની ગતિ ઓછી કરો અને સલામતી પૂર્વક આગળ વધો.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "C",
      answer: "વાહનની ગતિ ઓછી કરો અને સલામતી પૂર્વક આગળ વધો.",
    },
  },

  {
    id: "TRAFFIC_SIGNAL_9",
    question: "ટ્રાફિક જંકશન ઉપર લીલી લાઈટ પછી કઈ લાઈટ થશે?",
    options: [
      {
        id: "A",
        answer: "લાલ",
      },
      {
        id: "B",
        answer: "ભૂરી",
      },
      {
        id: "C",
        answer: "પીળી",
      },
      {
        id: "D",
        answer: "આપેલ તમામ",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "C",
      answer: "પીળી",
    },
  },

  {
    id: "TRAFFIC_SIGNAL_10",
    question: "રોડ સાઈનમાં વપરાતી સ્ટોપ લાઈનમાં કયો કલર હોય છે?",
    options: [
      {
        id: "A",
        answer: "પીળો",
      },
      {
        id: "B",
        answer: "સફેદ",
      },
      {
        id: "C",
        answer: "પીળો અને કાળો",
      },
      {
        id: "D",
        answer: "સફેદ અને કાળો",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      id: "C",
      answer: "સફેદ",
    },
  },
];

const roadRelatedQuestions = [
  {
    id: "ROAD_1",
    question: "નીચે મુજબની નિશાનીમાં તૂટક લાઈન શું દર્શાવે છે?",
    imageName: "laneChange_01",
    options: [
      {
        id: "A",
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો.",
      },
      {
        id: "B",
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો પરંતુ સાવધાની પૂર્વક",
      },
      {
        id: "C",
        answer: "લાઈન બદલવાની અને  ઓવર ટેક કરવાની મનાઈ છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "A",
      answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો.",
    },
  },
  {
    id: "ROAD_2",
    question: "નીચે મુજબની નિશાનીમાં સફેદ લાઈન શું દર્શાવે છે?",
    imageName: "laneChange_02",
    options: [
      {
        id: "A",
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો.",
      },
      {
        id: "B",
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો પરંતુ સાવધાની પૂર્વક",
      },
      {
        id: "C",
        answer: "લાઈન બદલવાની અને  ઓવર ટેક કરવાની મનાઈ છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "B",
      answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો પરંતુ સાવધાની પૂર્વક",
    },
  },
  {
    id: "ROAD_3",
    question: "નીચે મુજબની નિશાનીમાં ડબલ પીળી લાઈન શું દર્શાવે છે?",
    imageName: "laneChange_02",
    options: [
      {
        id: "A",
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો.",
      },
      {
        id: "B",
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો પરંતુ સાવધાની પૂર્વક",
      },
      {
        id: "C",
        answer: "લાઈન બદલવાની અને  ઓવર ટેક કરવાની મનાઈ છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "C",
      answer: "લાઈન બદલવાની અને  ઓવર ટેક કરવાની મનાઈ છે.",
    },
  },
  {
    id: "ROAD_4",
    question: "તમે કોઇ પણ વાહનને કઈ બાજુથી ઓવરટેક કરી શકો છો?",
    options: [
      {
        id: "A",
        answer: "આગળના વાહનની જમણી બાજુથી",
      },
      {
        id: "B",
        answer: "આગળના વાહનની ડાબી બાજુથી",
      },
      {
        id: "C",
        answer: "જો રસ્તો પહોળો હોય તો ડાબી બાજુથી",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "A",
      answer: "આગળના વાહનની જમણી બાજુથી",
    },
  },
  {
    id: "ROAD_5",
    question: "નીચે પૈકી કયાં સંજોગોમાં ઓવરટેકની મનાઈ છે?",
    options: [
      {
        id: "A",
        answer: "રાત્રિ દરમ્યાન",
      },
      {
        id: "B",
        answer: "આગળના વાહનની ગતિ",
      },
      {
        id: "C",
        answer: "અન્ય ટ્રાફિકને જ્યારે ભય ઉભો થાય તેવી શકયતા હોય ત્યારે",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "C",
      answer: "અન્ય ટ્રાફિકને જ્યારે ભય ઉભો થાય તેવી શકયતા હોય ત્યારે",
    },
  },
  {
    id: "ROAD_6",
    question: "વળાંક નજીક પહોંચો ત્યારે ઓવરટેક કરવું?",
    options: [
      {
        id: "A",
        answer: "માન્ય છે.",
      },
      {
        id: "B",
        answer: "માન્ય નથી.",
      },
      {
        id: "C",
        answer: "કાળજી લઈને માન્ય છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "B",
      answer: "માન્ય નથી.",
    },
  },
  {
    id: "ROAD_7",
    question:
      "પીળો અને સફેદ માર્ગ સૂચક સ્તંભ(માઇલ સ્ટોન) કયાં પ્રકારનો રસ્તો સૂચવે છે?",
    options: [
      {
        id: "A",
        answer: "સ્ટેટ હાઈવે",
      },
      {
        id: "B",
        answer: "નેશનલ હાઈવે",
      },
      {
        id: "C",
        answer: "શહેરી માર્ગ",
      },
      {
        id: "D",
        answer: "ગ્રામ્ય માર્ગ",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "B",
      answer: "નેશનલ હાઈવે",
    },
  },

  {
    id: "ROAD_8",
    question:
      "લીલો અને સફેદ માર્ગ સૂચક સ્તંભ(માઇલ સ્ટોન) કયાં પ્રકારનો રસ્તો સૂચવે છે?",
    options: [
      {
        id: "A",
        answer: "સ્ટેટ હાઈવે",
      },
      {
        id: "B",
        answer: "નેશનલ હાઈવે",
      },
      {
        id: "C",
        answer: "શહેરી માર્ગ",
      },
      {
        id: "D",
        answer: "ગ્રામ્ય માર્ગ",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "A",
      answer: "સ્ટેટ હાઈવે",
    },
  },

  {
    id: "ROAD_9",
    question:
      "લાલ(કેસરી) અને સફેદ માર્ગ સૂચક સ્તંભ(માઇલ સ્ટોન) કયાં પ્રકારનો રસ્તો સૂચવે છે?",
    options: [
      {
        id: "A",
        answer: "સ્ટેટ હાઈવે",
      },
      {
        id: "B",
        answer: "નેશનલ હાઈવે",
      },
      {
        id: "C",
        answer: "શહેરી માર્ગ",
      },
      {
        id: "D",
        answer: "ગ્રામ્ય માર્ગ",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "D",
      answer: "ગ્રામ્ય માર્ગ",
    },
  },

  {
    id: "ROAD_10",
    question:
      "કાળો અને સફેદ માર્ગ સૂચક સ્તંભ(માઇલ સ્ટોન) કયાં પ્રકારનો રસ્તો સૂચવે છે?",
    options: [
      {
        id: "A",
        answer: "સ્ટેટ હાઈવે",
      },
      {
        id: "B",
        answer: "નેશનલ હાઈવે",
      },
      {
        id: "C",
        answer: "શહેરી માર્ગ",
      },
      {
        id: "D",
        answer: "ગ્રામ્ય માર્ગ",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      id: "C",
      answer: "શહેરી માર્ગ",
    },
  },
];

const licenseRelatedQuestions = [
  {
    id: "LICENSE_1",
    question: "કાચા લાયસન્સની મુદ્દત કેટલી છે?",
    options: [
      {
        id: "A",
        answer: "૬ મહિના",
      },
      {
        id: "B",
        answer: "૧ મહિના",
      },
      {
        id: "C",
        answer: "૧૨ મહિના",
      },
      {
        id: "D",
        answer: "૩ મહિના",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "A",
      answer: "૬ મહિના",
    },
  },
  {
    id: "LICENSE_2",
    question: "નોન ટ્રાન્સપોર્ટ વાહન સાથે રાખવાના દસ્તાવેજો",
    options: [
      {
        id: "A",
        answer:
          "આર. સી. બુક , પી.યુ.સી., વીમા પ્રમાણપત્ર, મોટર ડ્રાયવિંગ લાયસન્સ",
      },
      {
        id: "B",
        answer: "આર. સી. બુક , પી.યુ.સી., વીમા પ્રમાણપત્ર, ટેક્ષ ટોકન",
      },
      {
        id: "C",
        answer: "આર. સી. બુક , પરમીટ , ટ્રીપશીટ",
      },
      {
        id: "D",
        answer: "આપેલ તમામ",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "A",
      answer:
        "આર. સી. બુક , પી.યુ.સી., વીમા પ્રમાણપત્ર, મોટર ડ્રાયવિંગ લાયસન્સ",
    },
  },
  {
    id: "LICENSE_3",
    question:
      "ગીયર વગરના મોટરસાયકલનું લાયસન્સ મેળવવા માટે ઓછામાં ઓછી ઉંમર કેટલી હોવી જોઈએ?",
    options: [
      {
        id: "A",
        answer: "૧૮ વર્ષ",
      },
      {
        id: "B",
        answer: "૧૬ વર્ષ",
      },
      {
        id: "C",
        answer: "૨૧ વર્ષ",
      },
      {
        id: "D",
        answer: "કોઇ ઉંમર મર્યાદા નક્કી નથી.",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "B",
      answer: "૧૬ વર્ષ",
    },
  },
  {
    id: "LICENSE_4",
    question:
      "ખાનગી વાહનમાં કેટલી વ્યકિત બેસાડી શકાય તે કયાં દસ્તાવેજમાં હોય છે?",
    options: [
      {
        id: "A",
        answer: "રજીસ્ટ્રેશન સર્ટીફીકેટમાં દર્શાવેલ સંખ્યા મુજબની વ્યકિત",
      },
      {
        id: "B",
        answer: "ટેક્ષ ટોકનમાં",
      },
      {
        id: "C",
        answer: "પરમીટમાં",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "A",
      answer: "રજીસ્ટ્રેશન સર્ટીફીકેટમાં દર્શાવેલ સંખ્યા મુજબની વ્યકિત",
    },
  },
  {
    id: "LICENSE_5",
    question: "તમે મોટર સાયકલનું લર્નર લાયસન્સ ધરાવતા હોય તો",
    options: [
      {
        id: "A",
        answer: "તમે જ્યારે ટ્રાફિક ઓછો હોય ત્યારે હાંકશો.",
      },
      {
        id: "B",
        answer:
          "મોટર સાયકલનું ડ્રાયવિંગ લાયસન્સ ધરાવનાર ઈન્સ્ટ્રકટર તમારી સાથે હશે તો જ તમે હાંકશો.",
      },
      {
        id: "C",
        answer: "તમે વાહન ઉપર કોઇ પણ વ્યકિતને પાછળ બેસાડશો.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "B",
      answer:
        "મોટર સાયકલનું ડ્રાયવિંગ લાયસન્સ ધરાવનાર ઈન્સ્ટ્રકટર તમારી સાથે હશે તો જ તમે હાંકશો.",
    },
  },
  {
    id: "LICENSE_6",
    question: "કાર ચલાવવા માટેનું લાયસન્સ લેવા માટે જરૂરી ઉંમર કેટલી છે?",
    options: [
      {
        id: "A",
        answer: "૧૬ વર્ષ",
      },
      {
        id: "B",
        answer: "૧૮ વર્ષ",
      },
      {
        id: "C",
        answer: "૨૦ વર્ષ",
      },
      {
        id: "D",
        answer: "૨૦ વર્ષ",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "B",
      answer: "૧૮ વર્ષ",
    },
  },
  {
    id: "LICENSE_7",
    question:
      "કોમર્શીયલ વાહન ચલાવવા માટેનું લાયસન્સ લેવા માટે જરૂરી ઉંમર કેટલી છે?",
    options: [
      {
        id: "A",
        answer: "૧૬ વર્ષ",
      },
      {
        id: "B",
        answer: "૧૮ વર્ષ",
      },
      {
        id: "C",
        answer: "૨૦ વર્ષ",
      },
      {
        id: "D",
        answer: "૨૦ વર્ષ",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "C",
      answer: "૨૦ વર્ષ",
    },
  },
  {
    id: "LICENSE_8",
    question: "અકસ્માતના કિસ્સામાં ડ્રાયવર ડ્રાયવિંગ લાયસન્સ ધરાવતા નથી.તો",
    options: [
      {
        id: "A",
        answer: "ઇન્સ્યુરન્સ કંપની સંપૂર્ણ ક્લેઇમ આપશે.",
      },
      {
        id: "B",
        answer: "ઇન્સ્યુરન્સ કંપની ક્લેઇમ નામંજૂર કરશે.",
      },
      {
        id: "C",
        answer: "અશંત: ક્લેઇમ મંજૂર કરશે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "B",
      answer: "ઇન્સ્યુરન્સ કંપની ક્લેઇમ નામંજૂર કરશે.",
    },
  },
  {
    id: "LICENSE_9",
    question: "સગીર બાળક ડ્રાયવિંગ કરતાં અકસ્માત થાય તો ?",
    options: [
      {
        id: "A",
        answer: "સગીર હોવાથી તેને સજા ન થઈ શકે",
      },
      {
        id: "B",
        answer: "બાળકના માં-બાપ અથવા વાલીને પણ જવાબદાર ગણશે.",
      },
      {
        id: "C",
        answer: "કાયદેસર પોલીસ ફરીયાદ નોંધાવવી અને તે મુજબ દંડ થશે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ. ",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "C",
      answer: "કાયદેસર પોલીસ ફરીયાદ નોંધાવવી અને તે મુજબ દંડ થશે.",
    },
  },
  {
    id: "LICENSE_10",
    question: "પાકા લાયસન્સ માટે તમે કેટલા દિવસ પછી અરજી કરી શકો?",
    options: [
      {
        id: "A",
        answer: "લર્નર લાયસન્સ ઈસ્યુ થયાની તારીખ ૩૦ દિવસ પછી",
      },
      {
        id: "B",
        answer: "લર્નર લાયસન્સ ઈસ્યુ થયાની તારીખ ૪૫ દિવસ પછી",
      },
      {
        id: "C",
        answer: "લર્નર લાયસન્સ ઈસ્યુ થયાની તારીખ ૬૦ દિવસ પછી",
      },
      {
        id: "D",
        answer: "લર્નર લાયસન્સ ઈસ્યુ થયાની તારીખ ૯૦ દિવસ પછી",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "A",
      answer: "લર્નર લાયસન્સ ઈસ્યુ થયાની તારીખ ૩૦ દિવસ પછી",
    },
  },

  {
    id: "LICENSE_11",
    question:
      "વાહન ચલાવતી વખતે ચાલકે ડ્રાયવિંગ લાયસન્સ કયાં સ્વરૂપે સાથે રાખવું ફરજીયાત છે?",
    options: [
      {
        id: "A",
        answer: "અસલ લાયસન્સ",
      },
      {
        id: "B",
        answer: "રંગીન ઝેરોક્ષ",
      },
      {
        id: "C",
        answer: "પ્રમાણિત નકલ",
      },
      {
        id: "D",
        answer: "આપેલ તમામ",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "A",
      answer: "અસલ લાયસન્સ",
    },
  },

  {
    id: "LICENSE_12",
    question:
      "ડ્રાયવિંગ લાયસન્સની મુદ્દત પુરી થયા બાદ કેટલા સમય સુધી ચાલક વાહન ચલાવી શકે છે?",
    options: [
      {
        id: "A",
        answer: "૩૦ દિવસ",
      },
      {
        id: "B",
        answer: "૦૭ દિવસ",
      },
      {
        id: "C",
        answer: "૧૫ દિવસ",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ",
      },
    ],
    category: LICENSE_RELATED,
    correctAnswer: {
      id: "A",
      answer: "૩૦ દિવસ",
    },
  },
];

const generalKnowledgeQuestions = [
  {
    id: "GK_1",
    question:
      "વાહને અકસ્માત કરી જયારે કોઈ વ્યક્તિને ઈજા કરેલ હોય ત્યારે તમે શું કરશો?",
    options: [
      {
        id: "A",
        answer: "વાહન નજીકના પોલીસ સ્ટેશનમાં લઈ જઈ અકસ્માતનો રિપોર્ટ લખાવશો.",
      },
      {
        id: "B",
        answer: "વાહન ત્યાં જ થોભાવી નજીકના પોલીસ સ્ટેશનમાં રિપોર્ટ લખાવશો.",
      },
      {
        id: "C",
        answer:
          "ઘાયલ વ્યક્તિને સારવાર મળે તે માટેના દરેક પગલાં લઈ ૨૪ કલાકમાં પોલીસ સ્ટેશનમાં રિપોર્ટ લખાવશો.",
      },
      {
        id: "D",
        answer: "આપેલ તમામ",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer:
        "ઘાયલ વ્યક્તિને સારવાર મળે તે માટેના દરેક પગલાં લઈ ૨૪ કલાકમાં પોલીસ સ્ટેશનમાં રિપોર્ટ લખાવશો.",
    },
  },
  {
    id: "GK_2",
    question: "નશો કરીને ડ્રાયવીંગ કરવું?",
    options: [
      {
        id: "A",
        answer: " પ્રાઇવેટ વાહનમાં મંજૂર છે.",
      },
      {
        id: "B",
        answer: "રાત્રિ દરમ્યાન મંજૂર છે.",
      },
      {
        id: "C",
        answer: "કોઈ પણ વાહનમાં મનાઈ છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "કોઈ પણ વાહનમાં મનાઈ છે.",
    },
  },
  {
    id: "GK_3",
    question: "ઓવરટેકીંગની મનાઈ છે?",
    options: [
      {
        id: "A",
        answer: "જ્યારે આગળનો રસ્તો બરાબર ન દેખાતો હોય",
      },
      {
        id: "B",
        answer: "રાત્રિ દરમ્યાન",
      },
      {
        id: "C",
        answer: "રસ્તાના સેન્ટરમાં સફેદ તૂટક લાઈનનું માર્કિગ કર્યુ હોય ત્યારે",
      },
      {
        id: "D",
        answer: "આપેલ તમામ",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "જ્યારે આગળનો રસ્તો બરાબર ન દેખાતો હોય",
    },
  },
  {
    id: "GK_4",
    question: "જરૂરિયાત વગર હોર્નનો વારંવાર ઉપયોગ ગુન્હો બને છે?",
    options: [
      {
        id: "A",
        answer: "હા",
      },
      {
        id: "B",
        answer: "ના",
      },
      {
        id: "C",
        answer: "એવો કાયદો નથી",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "હા",
    },
  },
  {
    id: "GK_5",
    question: "કોઈ પણ વાહન ચલાવતી વખતે મોબાઈલ ઉપર વાત કરવી જોઈએ?",
    options: [
      {
        id: "A",
        answer: "હા",
      },
      {
        id: "B",
        answer: "ના",
      },
      {
        id: "C",
        answer: "વાહન ધીમુ કરીને વાત કરવી.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "ના",
    },
  },

  {
    id: "GK_6",
    question: "સામેથી આવતા વાહનને તમારી કઈ સાઈડથી પસાર થવા દેશો?",
    options: [
      {
        id: "A",
        answer: "તમારી જમણી બાજુથી",
      },
      {
        id: "B",
        answer: "તમારી ડાબી બાજુથી",
      },
      {
        id: "C",
        answer: "કોઈ પણ અનૂકૂળ બાજુથી",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "તમારી જમણી બાજુથી",
    },
  },

  {
    id: "GK_7",
    question: "વાહનની હેન્ડ બ્રેકનો ઉપયોગ શા માટે કરવામાં આવે છે?",
    options: [
      {
        id: "A",
        answer: "વાહનની ગતિ ધીમી કરવા માટે",
      },
      {
        id: "B",
        answer: "વાહનની ગતિ ધીમી કરવા માટે",
      },
      {
        id: "C",
        answer: "વાહન પાર્કિંગ કરવા માટે",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "વાહન પાર્કિંગ કરવા માટે",
    },
  },

  {
    id: "GK_8",
    question:
      "હોસ્પિટલ પાસે તમે એક વાહનને ઓવર ટેઇક કરવા માંગો છો, તો શું કરશો?",
    options: [
      {
        id: "A",
        answer: "તમે સતત હોર્ન વગાડશો",
      },
      {
        id: "B",
        answer: "હોર્ન વગાડશો નહિ.",
      },
      {
        id: "C",
        answer: "ફ્કત તૂટક-તૂટક હોર્ન વગાડશો.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "હોર્ન વગાડશો નહિ.",
    },
  },

  {
    id: "GK_9",
    question: "ગતિ મર્યાદા કરતાં વધુ ગતિએ વાહન હાંકવુ",
    options: [
      {
        id: "A",
        answer:
          "એ ગુન્હો બને છે અને ડ્રાયવીંગ લાયસન્સ સસ્પેન્ડ અથવા કેન્સલ થઈ શકે છે.",
      },
      {
        id: "B",
        answer: "એ ગુન્હો બને છે  દંડ ભોગવવાની સજા થઈ શકે છે.",
      },
      {
        id: "C",
        answer: "બંને થઈ શકે છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "બંને થઈ શકે છે.",
    },
  },

  {
    id: "GK_10",
    question: "જ્યારે સ્કૂલ બસ વિધાર્થીઓને ચઢવા અથવા ઉતરવા માટે ઉભી હોય ત્યારે",
    options: [
      {
        id: "A",
        answer: "હોર્ન વગાડો અને આગળ વધો.",
      },
      {
        id: "B",
        answer:
          "ધીમેથી અને સાવચેતીથી આગળ વધો કારણકે વિધાર્થી અચાનક રોડ ક્રોસ કરે તેવી શકયતા છે.",
      },
      {
        id: "C",
        answer: "બંને થઈ શકે છે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "બંને થઈ શકે છે.",
    },
  },

  {
    id: "GK_11",
    question: "જ્યારે મોટર વાહન અકસ્માતમાં સંડોવાય ત્યારે આ વાહન હાંકનાર",
    options: [
      {
        id: "A",
        answer: "નજીકના પોલીસ સ્ટેશનમાં ૧૨ કલાકમાં જાણ કરશે.",
      },
      {
        id: "B",
        answer: "નજીકના પોલીસ સ્ટેશનમાં ૨૪ કલાકમાં જાણ કરશે.",
      },
      {
        id: "C",
        answer: "નજીકના પોલીસ સ્ટેશનમાં ૪૮ કલાકમાં જાણ કરશે.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "નજીકના પોલીસ સ્ટેશનમાં ૨૪ કલાકમાં જાણ કરશે.",
    },
  },
  {
    id: "GK_12",
    question: "રાત્રે શહેરમાં વાહન ચલાવતી વખતે",
    options: [
      {
        id: "A",
        answer: "વાહનની હેડ લાઈટના લો બીમનો ઉપયોગ કરીશું.",
      },
      {
        id: "B",
        answer: "વાહનની હેડ લાઈટના હાઇ બીમનો ઉપયોગ કરીશું",
      },
      {
        id: "C",
        answer: "બધી જ લાઇટો બંધ કરીશું.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "વાહનની હેડ લાઈટના લો બીમનો ઉપયોગ કરીશું.",
    },
  },
  {
    id: "GK_13",
    question: "રિર્વસ ગીયરમાં વાહન ચલાવવાની મનાઇ છે?",
    options: [
      {
        id: "A",
        answer: "એકમાર્ગીય રસ્તા ઉપર.",
      },
      {
        id: "B",
        answer: "બજારમાં",
      },
      {
        id: "C",
        answer: "સ્ટેટ હાઇવે ઉપર",
      },
      {
        id: "D",
        answer: "નેશનલ હાઇવે ઉપર",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "એકમાર્ગીય રસ્તા ઉપર.",
    },
  },
  {
    id: "GK_14",
    question: "ક્યાં પ્રકારનાં હોર્ન માન્ય છે?",
    options: [
      {
        id: "A",
        answer: "એર હોર્ન",
      },
      {
        id: "B",
        answer: "મલ્ટી ટોન હોર્ન",
      },
      {
        id: "C",
        answer: "ઈલેકટ્રીક હોર્ન",
      },
      {
        id: "D",
        answer: "આપેલ તમામ",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "ઈલેકટ્રીક હોર્ન",
    },
  },
  {
    id: "GK_15",
    question: "મોટર સાયકલ માટે વધુમાં વધુ કેટલી સ્પીડે ચલાવી શકાય?",
    options: [
      {
        id: "A",
        answer: "કોઈ મર્યાદા નથી",
      },
      {
        id: "B",
        answer: "૫૦ કિમી / કલાક",
      },
      {
        id: "C",
        answer: "૬૦ કિમી / કલાક",
      },
      {
        id: "D",
        answer: "૮૦ કિમી / કલાક",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "૫૦ કિમી / કલાક",
    },
  },
  {
    id: "GK_16",
    question: "નીચે પૈકી કયું વાહન ફ્કત ૬૫ કિ.મી. કરતા વધુ સ્પીડે ચલાવવા માન્ય છે?",
    options: [
      {
        id: "A",
        answer: "મોટર સાયકલ",
      },
      {
        id: "B",
        answer: "મોટર કાર",
      },
      {
        id: "C",
        answer: "સ્ટેજ કેરેજ બસ",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "મોટર કાર",
    },
  },
  {
    id: "GK_17",
    question: "મોટર કાર ચલાવવા માટે વધુમાં વધુ ગતિ મર્યાદા કેટલી છે?",
    options: [
      {
        id: "A",
        answer: "કોઈ મર્યાદા નથી",
      },
      {
        id: "B",
        answer: "૫૦ કિમી / કલાક",
      },
      {
        id: "C",
        answer: "૭૦ કિમી / કલાક",
      },
      {
        id: "D",
        answer: "૮૦ કિમી / કલાક",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "કોઈ મર્યાદા નથી",
    },
  },

  {
    id: "GK_18",
    question: "વધુમાં વધુ ૫૦ કિમી / કલાક ઝડપથી મોટર સાયકલ ચલાવી શકાય છે?",
    options: [
      {
        id: "A",
        answer: "રાત્રિ દરમ્યાન",
      },
      {
        id: "B",
        answer: "દિવસ દરમ્યાન",
      },
      {
        id: "C",
        answer: "કોઈ પણ સમયે",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "કોઈ પણ સમયે",
    },
  },

  {
    id: "GK_19",
    question: "ખાનગી વાહનની નંબર પ્લેટનો રંગ કેવો હોય છે?",
    options: [
      {
        id: "A",
        answer: "કાળા રંગની પ્લેટ ઉપર પીળા અક્ષર",
      },
      {
        id: "B",
        answer: "પીળા રંગની પ્લેટ ઉપર કાળા અક્ષર",
      },
      {
        id: "C",
        answer: "સફેદ રંગની પ્લેટ ઉપર કાળા અક્ષર",
      },
      {
        id: "D",
        answer: "લીલા રંગની પ્લેટ ઉપર સફેદ અક્ષર",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "સફેદ રંગની પ્લેટ ઉપર કાળા અક્ષર",
    },
  },

  {
    id: "GK_20",
    question: "વરસાદમાં બ્રેક લગાવતી વખતે સ્ટોપીંગ ડીસ્ટન્સ ઉપર શું અસર પડે છે?",
    options: [
      {
        id: "A",
        answer: "સ્ટોપીંગ ડીસ્ટન્સ વધે છે.",
      },
      {
        id: "B",
        answer: "સ્ટોપીંગ ડીસ્ટન્સ ઓછું થાય છે.",
      },
      {
        id: "C",
        answer: "કોઈ અસર થતી નથી",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "સ્ટોપીંગ ડીસ્ટન્સ વધે છે.",
    },
  },

  {
    id: "GK_21",
    question: "અકસ્માત વખતે મેડીકલ મદદ મેળવવા કયો ફોન નંબર ડાયલ કરશો?",
    options: [
      {
        id: "A",
        answer: "૧૦૮ અથવા ૧૦૨",
      },
      {
        id: "B",
        answer: "૧૦૦",
      },
      {
        id: "C",
        answer: "૧૨૧",
      },
      {
        id: "D",
        answer: "૧૮૧",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "૧૦૮ અથવા ૧૦૨",
    },
  },

  {
    id: "GK_22",
    question: "ભાડેથી ફરતાં વાહનની નંબર પ્લેટ કયાં કલરની હોય છે?",
    options: [
      {
        id: "A",
        answer: "કાળા રંગની પ્લેટ ઉપર પીળા અક્ષર",
      },
      {
        id: "B",
        answer: "પીળા રંગની પ્લેટ ઉપર કાળા અક્ષર",
      },
      {
        id: "C",
        answer: "સફેદ રંગની પ્લેટ ઉપર કાળા અક્ષર",
      },
      {
        id: "D",
        answer: "લીલા રંગની પ્લેટ ઉપર સફેદ અક્ષર",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "પીળા રંગની પ્લેટ ઉપર કાળા અક્ષર",
    },
  },

  {
    id: "GK_23",
    question: "અકસ્માતના કિસ્સામાં પેસેન્જરના બચાવ માટે સલામતીનું કયુ સાધન ફરજિયાત છે?",
    options: [
      {
        id: "A",
        answer: "સીટ બેલ્ટ",
      },
      {
        id: "B",
        answer: "બ્રેક પેંડલ",
      },
      {
        id: "C",
        answer: "એર બેગ",
      },
      {
        id: "D",
        answer: "પ્રાથમિક સારવાર કીટ",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "સીટ બેલ્ટ",
    },
  },

  {
    id: "GK_24",
    question: "ઢોળાવ વાળા રસ્તા ઉપરથી નીચે ઉતરતી વખતે તમે શું કરશો?",
    options: [
      {
        id: "A",
        answer: "કલચ પેંડલ દબાવી વાહનને ચાલવા દેશો.",
      },
      {
        id: "B",
        answer: "બળતણ બચાવવા એન્જીન બંધ કરીને વાહનને ઉતરવા દેશો.",
      },
      {
        id: "C",
        answer: "બંને ટાળશો.",
      },
      {
        id: "D",
        answer: "બંનેનું પાલન કરીશું",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "બંને ટાળશો.",
    },
  },

  {
    id: "GK_25",
    question: "કારની આગળની સીટ ઉપર બેઠેલા ૧૦ વર્ષના બાળકે સીટ બેલ્ટ લગાવવો જરૂરી છે?",
    options: [
      {
        id: "A",
        answer: "બાળકો માટે જરૂરી નથી.",
      },
      {
        id: "B",
        answer: "ફરજિયાત છે.",
      },
      {
        id: "C",
        answer: "ફ્કત પાછળની સીટ માટે જરૂરી છે.",
      },
      {
        id: "D",
        answer: "બાળકો માટે સીટ બેલ્ટ ન હોય.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "ફરજિયાત છે.",
    },
  },

  {
    id: "GK_26",
    question: "રીર્વસ લાઈટનો રંગ કેવો હોય છે?",
    options: [
      {
        id: "A",
        answer: "લાલ",
      },
      {
        id: "B",
        answer: "સફેદ",
      },
      {
        id: "C",
        answer: "કેસરી",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "સફેદ",
    },
  },

  {
    id: "GK_27",
    question: "અકસ્માતના સંજોગોમાં વ્યકિતની ચામડી બળી ગઈ હોય તો આપ શું કરશો?",
    options: [
      {
        id: "A",
        answer: "બળેલા ભાગને ઠંડા પાણીથી ધોઈને ઘાયલ વ્યકિતને છાંયડામાં લઈ જશો અને એમ્બ્યુલન્સ બોલાવશો.",
      },
      {
        id: "B",
        answer: "ફોલ્લા પડયા હોય તો તે ફોડશો.",
      },
      {
        id: "C",
        answer: "ચામડી સાથે ચોંટેલા કપડાં ઉખાડશો.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "બળેલા ભાગને ઠંડા પાણીથી ધોઈને ઘાયલ વ્યકિતને છાંયડામાં લઈ જશો અને એમ્બ્યુલન્સ બોલાવશો.",
    },
  },

  {
    id: "GK_28",
    question: "અકસ્માતના સંજોગોમાં માનવજીવનને બચાવવા કયાં પ્રકારનું જ્ઞાન આપને મદદરૂપ થઈ શકે?",
    options: [
      {
        id: "A",
        answer: "વાહનની માવજત",
      },
      {
        id: "B",
        answer: "પ્રાથમિક સારવાર",
      },
      {
        id: "C",
        answer: "કાયદાકીય",
      },
      {
        id: "D",
        answer: "આપેલ તમામ",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "પ્રાથમિક સારવાર",
    },
  },


  {
    id: "GK_29",
    question: ". અકસ્માતના સંજોગોમાં કોઈ વ્યકિતને પીઠ / કરોડરજ્જુમાં ઈજા થઈ છે તો આપ શું કરશો?",
    options: [
      {
        id: "A",
        answer: "ઘાયલ વ્યકિતને ઉંચકીને સલામત સ્થળે લઈ જશો.",
      },
      {
        id: "B",
        answer: "ઘાયલ વ્યકિતને ખસેડશો નહિ અને અન્ય વાહન ચાલકોને અકસ્માત અંગે ચેતવણી આપશો.",
      },
      {
        id: "C",
        answer: "ઘાયલ વ્યકિતના પગ ઉંચા કરીને ઈજાને તપાસશો.",
      },
      {
        id: "D",
        answer: "ઘાયલ વ્યકિતને ઉંધો સુવડાવી દઈશ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "ઘાયલ વ્યકિતને ખસેડશો નહિ અને અન્ય વાહન ચાલકોને અકસ્માત અંગે ચેતવણી આપશો.",
    },
  },

  {
    id: "GK_30",
    question: "અકસ્માતના સંજોગોમાં ઘાયલ વ્યકિતએ પહેરેલ હેલ્મેટમાંથી લોહી કરોડરજ્જુમાં ઈજા થઈ છે તો આપ શું કરશો?",
    options: [
      {
        id: "A",
        answer: "તેનો હેલ્મેટ ઉતારશો નહિ અને એમ્બ્યુલન્સ બોલાવશો.",
      },
      {
        id: "B",
        answer: "હેલ્મેટ ઉતારીને ઈજા તપાસશો.",
      },
      {
        id: "C",
        answer: "હેલ્મેટ ઉતારીને એમ્બ્યુલન્સ બોલાવાશો.",
      },
      {
        id: "D",
        answer: "તેનો હેલ્મેટ ઉતારીને ઉંધો સુવડાવી દઈશ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "A",
      answer: "તેનો હેલ્મેટ ઉતારશો નહિ અને એમ્બ્યુલન્સ બોલાવશો.",
    },
  },

  {
    id: "GK_31",
    question: "પ્રાથમિક સારવારમાં એ, બી, સી નો અર્થ શું થાય છે?",
    options: [
      {
        id: "A",
        answer: "એટેન્ટીવ, બ્રીધ, કોન્ટેક્ટ",
      },
      {
        id: "B",
        answer: "એર વે, બ્રીધીંગ, સર્ક્યુલેશન",
      },
      {
        id: "C",
        answer: "એક્સીલેટર, બ્રેક , ક્લચ",
      },
      {
        id: "D",
        answer: "એટેન્ટીવ, બ્રીધીંગ, સર્ક્યુલેશન",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "B",
      answer: "એર વે, બ્રીધીંગ, સર્ક્યુલેશન",
    },
  },

  {
    id: "GK_32",
    question: "અકસ્માતમાં બેભાન થયેલ વ્યકિતને મદદરૂપ થવા આપ શું કરશો?",
    options: [
      {
        id: "A",
        answer: "તેના કપડાં ઢીલા કરશો.",
      },
      {
        id: "B",
        answer: "આજુબાજુ ભીડ ન થવા દઈ તેને પુરતી હવા મળી રહે તેવી વ્યવસ્થા કરશો અને જો શિયાળો હોય તો ગરમ ધાબળો ઓઢાડશો",
      },
      {
        id: "C",
        answer: "ઉપરોક્ત બંને કરશો.",
      },
      {
        id: "D",
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "ઉપરોક્ત બંને કરશો.",
    },
  },

  {
    id: "GK_33",
    question: "મોબાઈલ ફોન ક્યારે વાપરી શકાય?",
    options: [
      {
        id: "A",
        answer: "જ્યારે વાહન અત્યંત ધીમી ગતિએ ચાલતુ હોય ત્યારે",
      },
      {
        id: "B",
        answer: "જ્યારે વાહન મધ્યમ ગતિએ એક્સપ્રેસ હાઈવે પર ચાલતુ હોય ત્યારે",
      },
      {
        id: "C",
        answer: "જ્યારે વાહન સાઈડમાં પાર્ક કરેલ હોય ત્યારે",
      },
      {
        id: "D",
        answer: "જ્યારે વાહન ચાલતુ હોય પરંતુ ટ્રાફિક ન હોય ત્યારે",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "જ્યારે વાહન સાઈડમાં પાર્ક કરેલ હોય ત્યારે",
    },
  },

  {
    id: "GK_34",
    question: "સી. સી. ટી. વી. નું પુરૂનામ જણાવો.",
    options: [
      {
        id: "A",
        answer: "કેમેરા સર્કિટ ટેલિવિઝન",
      },
      {
        id: "B",
        answer: "ક્લોઝ્ડ સર્કિટ ટેલિવિઝન",
      },
      {
        id: "C",
        answer: "કેમેરા સિકયોર ટેલિવિઝન",
      },
      {
        id: "D",
        answer: "ક્લોઝ્ડ સિકયોર ટેલિવિઝન",
      },
    ],
    category: GK_RELATED,
    correctAnswer: {
      id: "C",
      answer: "કેમેરા સિકયોર ટેલિવિઝન",
    },
  },
];

export const questions = [
  ...signRelatedQuestions,
  ...trafficSignalRelatedQuestions,
  ...roadRelatedQuestions,
  ...licenseRelatedQuestions,
  ...generalKnowledgeQuestions,
];
