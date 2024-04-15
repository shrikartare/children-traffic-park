const TRAFFIC_SIGNAL = "TRAFFIC_SIGNAL";
const ROAD_RELATED = "ROAD_RELATED";

export const questions = [
  {
    id: 1,
    question: "ટ્રાફિક સિગ્નલમાં લાલ રંગનો ઉપયોગ કેમ કરવામાં આવે છે?",
    options: [
      {
        answer: "ટૂંકી તરંગલંબાઇ",
        image: "",
      },
      {
        answer: "લાંબી તરંગલંબાઇ",
        image: "",
      },
      {
        answer: "લાંબી આવૃતિ",
        image: "",
      },
      {
        answer: "ટૂંકી આવૃતિ",
        image: "",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      answer: "લાંબી તરંગલંબાઇ",
      image: "",
    },
  },
  {
    id: 2,
    question:
      "ટ્રાફિક સિગ્નલમાં કયાં રંગને ઉર્જા અને સુર્યનું પ્રતીક માનવામાં આવે છે?",
    options: [
      {
        answer: "લીલો",
        image: "",
      },
      {
        answer: "પીળો",
        image: "",
      },
      {
        answer: "લાલ",
        image: "",
      },
      {
        answer: "આપેલ પૈકી એક પણ નહિ",
        image: "",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      answer: "લીલો",
      image: "",
    },
  },
  {
    id: 3,
    question:
      "ટ્રાફિક સિગ્નલમાં કયો રંગ પ્રકૃતિ અને શાંતિનું પ્રતીક માનવામાં આવે છે?",
    options: [
      {
        answer: "લીલો",
        image: "",
      },
      {
        answer: "પીળો",
        image: "",
      },
      {
        answer: "લાલ",
        image: "",
      },
      {
        answer: "સફેદ",
        image: "",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      answer: "લીલો",
      image: "",
    },
  },
  {
    id: 4,
    question:
      "ચાર રસ્તા ઉપર ટ્રાફીક સિગ્નલની પીળી લાઇટ દેખાય ત્યારે ત્યાં પહોચતાં વાહનનો ડ્રાઈવર",
    options: [
      {
        answer: "સલામતી નક્કી કરીને વાહન હંકારી જશે.",
        image: "",
      },
      {
        answer: "થોભવા માટે વાહન ધીમું પાડશે.",
        image: "",
      },
      {
        answer: "હોર્ન વગાડશે અને આગળ વધશે.",
        image: "",
      },
      {
        answer: "આપેલ પૈકી એક પણ નહિ.",
        image: "",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      answer: "થોભવા માટે વાહન ધીમું પાડશે.",
      image: "",
    },
  },
  {
    id: 5,
    question: "જ્યાં અંધ વ્યક્તિ સફેદ લાકડી હાથમાં પકડી રોડ ક્રોસ કરે ત્યારે",
    options: [
      {
        answer:
          "વાહનનો ડ્રાયવર સફેદ લાકડીને વાહન ઉભું રાખવા માટેનું ટ્રાફિક સિગ્નલ ગણશે.",
        image: "",
      },
      {
        answer: "હોર્ન વગાડશો અને આગળ વધશો.",
        image: "",
      },
      {
        answer: "વાહન ધીમું કરશો અને સાવચેતીથી આગળ",
        image: "",
      },
      {
        answer: "આપેલ પૈકી એક પણ નહિ.",
        image: "",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      answer:
        "વાહનનો ડ્રાયવર સફેદ લાકડીને વાહન ઉભું રાખવા માટેનું ટ્રાફિક સિગ્નલ ગણશે.",
      image: "",
    },
  },
  {
    id: 6,
    question:
      "તમે એવા ચાર રસ્તા ઉપર પહોંચો છો જ્યાં સિગ્નલ લાઇટ કે પોલીસમેન નથી.",
    options: [
      {
        answer: "અન્ય રોડ ઉપરથી ચાર રસ્તા તરફ આવતાં દરેક વાહનને જવાં દેશો.",
        image: "",
      },
      {
        answer: "યોગ્ય સિગ્નલ હોર્ન વગાડી આગળ વધશો.",
        image: "",
      },
      {
        answer:
          "તમારી જમણી તરફથી ચાર રસ્તા ઉપર આવતાં ટ્રાફિકને રસ્તો આપીને આગળ વધશો.",
        image: "",
      },
      {
        answer: "આપેલ પૈકી એક પણ નહિ.",
        image: "",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      answer:
        "તમારી જમણી તરફથી ચાર રસ્તા ઉપર આવતાં ટ્રાફિકને રસ્તો આપીને આગળ વધશો.",
      image: "",
    },
  },
  {
    id: 7,
    question: "પીળા રંગની ટ્રાફીક લાઇટ ઝબુક – ઝબુક થાય છે એનો અર્થ",
    options: [
      {
        answer: "લીલી લાઈટ થાય ત્યાં સુધી થોભો",
      },
      {
        answer: "વાહન થોભાવો અને સલામત હોય તો આગળ વધો.",
      },
      {
        answer: "વાહનની ગતિ ઓછી કરો અને સલામતી પૂર્વક આગળ વધો.",
      },
      {
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      answer: "વાહનની ગતિ ઓછી કરો અને સલામતી પૂર્વક આગળ વધો.",
    },
  },
  {
    id: 8,
    question: "ટ્રાફિક જંકશન ઉપર લીલી લાઈટ પછી કઈ લાઈટ થશે?",
    options: [
      {
        answer: "લાલ",
      },
      {
        answer: "ભૂરી",
      },
      {
        answer: "પીળી",
      },
      {
        answer: "આપેલ તમામ",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      answer: "પીળી",
    },
  },
  {
    id: 9,
    question: "રોડ સાઈનમાં વપરાતી સ્ટોપ લાઈનમાં કયો કલર હોય છે?",
    options: [
      {
        answer: "પીળો",
      },
      {
        answer: "સફેદ",
      },
      {
        answer: "પીળો અને કાળો",
      },
      {
        answer: "સફેદ અને કાળો",
      },
    ],
    category: TRAFFIC_SIGNAL,
    correctAnswer: {
      answer: "સફેદ",
    },
  },
  {
    id: 10,
    question: "નીચે મુજબની નિશાનીમાં તૂટક લાઈન શું દર્શાવે છે?",
    imageName: "laneChange_01",
    options: [
      {
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો.",
      },
      {
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો પરંતુ સાવધાની પૂર્વક",
      },
      {
        answer: "લાઈન બદલવાની અને  ઓવર ટેક કરવાની મનાઈ છે.",
      },
      {
        answer: "આપેલ પૈકી એક પણ નહિ.",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો.",
    },
  },
  {
    id: 11,
    question: "નીચે પૈકીની કઈ આકૃતિ ફરજીયાત (આદેશાત્મક) નિશાનીઓ દર્શાવે છે?",
    options: [
      {
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો.",
        image: "circle",
      },
      {
        answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો પરંતુ સાવધાની પૂર્વક",
        image: "triangle",
      },
      {
        answer: "લાઈન બદલવાની અને  ઓવર ટેક કરવાની મનાઈ છે.",
        image: "rectangle",
      },
      {
        answer: "આપેલ પૈકી એક પણ નહિ.",
        image: "halt",
      },
    ],
    category: ROAD_RELATED,
    correctAnswer: {
      answer: "લેન બદલી શકો છો અને ઓવરટેક કરી શકો છો.",
    },
  },
];  

export const categories = [
  {
    name: TRAFFIC_SIGNAL,
    weightage: 8,
  },
  {
    name: ROAD_RELATED,
    weightage: 1,
  },
];
