interface Word {
  id: number;
  ilocano: string | string[];
  english: string | string[];
  // level?: Level,
  // userReminder: string // to add for user to add their own reminder
}

interface Level {
  id?: number;
  levelName: string;
}

interface User {
    uid: string,
    userName: string,
    password: string
}

interface UserWordStat {
    user_uid: string,
    word_id: number,
    correct: number,
    incorrect: number
}

// used in reviews.r
interface WordResultWrapper {
  word: Word;
  incorrectCount: number;
  result: boolean | undefined;
}

interface Stat {
  correct: number;
  incorrect: number;
}


export { Word, Level, User, UserWordStat, WordResultWrapper, Stat };
