const TRAFFIC_SIGNAL = "TRAFFIC_SIGNAL";
const SIGN_RELATED = "SIGN_RELATED";
const ROAD_RELATED = "ROAD_RELATED";
const LICENSE_RELATED = "LICENSE_RELATED";
const GK_RELATED = "GK_RELATED";

export const categories = [
  {
    name: TRAFFIC_SIGNAL,
    weightage: 3,
  },
  {
    name: SIGN_RELATED,
    weightage: 3,
  },
  {
    name: ROAD_RELATED,
    weightage: 3,
  },
  {
    name: LICENSE_RELATED,
    weightage: 3,
  },
  {
    name: GK_RELATED,
    weightage: 3,
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
];

export const questions = [
  ...signRelatedQuestions,
  ...trafficSignalRelatedQuestions,
  ...roadRelatedQuestions,
  ...licenseRelatedQuestions,
  ...generalKnowledgeQuestions,
];
