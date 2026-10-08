export interface KoreanWord {
  korean: string;
  romanization: string;
  english: string;
  category: string;
}

export const dailyWords: KoreanWord[] = [
  { korean: "\uC548\uB155\uD558\uC138\uC694", romanization: "annyeonghaseyo", english: "Hello", category: "Greetings" },
  { korean: "\uAC10\uC0AC\uD569\uB2C8\uB2E4", romanization: "gamsahamnida", english: "Thank you", category: "Politeness" },
  { korean: "\uC0AC\uB791\uD574\uC694", romanization: "saranghaeyo", english: "I love you", category: "Emotions" },
  { korean: "\uBB3C", romanization: "mul", english: "Water", category: "Food & Drink" },
  { korean: "\uC74C\uC2DD", romanization: "eumsik", english: "Food", category: "Food & Drink" },
  { korean: "\uD559\uAD50", romanization: "hakgyo", english: "School", category: "Education" },
  { korean: "\uCE5C\uAD6C", romanization: "chingu", english: "Friend", category: "People" },
  { korean: "\uD589\uBCF5\uD574\uC694", romanization: "haengbokhaeyo", english: "I'm happy", category: "Emotions" },
  { korean: "\uAC00\uC871", romanization: "gajok", english: "Family", category: "People" },
  { korean: "\uC5EC\uD589", romanization: "yeohaeng", english: "Travel", category: "Travel" },
  { korean: "\uCEE4\uD53C", romanization: "keopi", english: "Coffee", category: "Food & Drink" },
  { korean: "\uD55C\uAD6D", romanization: "hanguk", english: "Korea", category: "Places" },
];

export const hangulConsonants = [
  { char: "\u3131", name: "giyeok", sound: "g/k" },
  { char: "\u3134", name: "nieun", sound: "n" },
  { char: "\u3137", name: "digeut", sound: "d/t" },
  { char: "\u3139", name: "rieul", sound: "r/l" },
  { char: "\u3141", name: "mieum", sound: "m" },
  { char: "\u3142", name: "bieup", sound: "b/p" },
  { char: "\u3145", name: "siot", sound: "s" },
  { char: "\u3147", name: "ieung", sound: "ng/silent initial" },
  { char: "\u3148", name: "jieut", sound: "j" },
  { char: "\u314A", name: "chieut", sound: "ch" },
  { char: "\u314B", name: "kieuk", sound: "k" },
  { char: "\u314C", name: "tieut", sound: "t" },
  { char: "\u314D", name: "pieup", sound: "p" },
  { char: "\u314E", name: "hieut", sound: "h" },
];

export const hangulVowels = [
  { char: "\u314F", name: "a", sound: "a (ah)" },
  { char: "\u3151", name: "ya", sound: "ya" },
  { char: "\u3153", name: "eo", sound: "eo" },
  { char: "\u3155", name: "yeo", sound: "yeo" },
  { char: "\u3157", name: "o", sound: "o" },
  { char: "\u315B", name: "yo", sound: "yo" },
  { char: "\u315C", name: "u", sound: "u" },
  { char: "\u3160", name: "yu", sound: "yu" },
  { char: "\u3161", name: "eu", sound: "eu" },
  { char: "\u3163", name: "i", sound: "i" },
];

export const topikLevels = [
  { level: "TOPIK I", score: "Level 1\u20132", description: "Beginner level. Can perform basic conversations for daily life and understand fundamentals.", skills: "Basic greetings, self-introduction, shopping, simple sentence structure" },
  { level: "TOPIK II", score: "Level 3\u20134", description: "Intermediate level. Can handle everyday life and some public affairs, with a larger vocabulary.", skills: "Social conversation, formal writing, understanding news and culture" },
  { level: "TOPIK II", score: "Level 5\u20136", description: "Advanced level. Can use Korean fluently for academic and professional purposes.", skills: "Academic writing, professional communication, nuanced understanding" },
];

export const essentialWords = dailyWords.filter((word) => word.category !== "Emotions");

export const commonPhrases: KoreanWord[] = [
  dailyWords[0],
  dailyWords[1],
  dailyWords[2],
  dailyWords[3],
  { korean: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4", romanization: "joesonghamnida", english: "I'm sorry", category: "Politeness" },
  { korean: "\uC798 \uAC00\uC694", romanization: "jal gayo", english: "Goodbye", category: "Greetings" },
  { korean: "\uB9DB\uC788\uC5B4\uC694", romanization: "masisseoyo", english: "It's delicious", category: "Food & Drink" },
  { korean: "\uC5BC\uB9C8\uC608\uC694?", romanization: "eolmayeyo?", english: "How much is it?", category: "Shopping" },
  { korean: "\uC88B\uC544\uC694", romanization: "joayo", english: "Good / I like it", category: "Everyday" },
];

export const languageData = { essentialWords, commonPhrases, dailyWords };
