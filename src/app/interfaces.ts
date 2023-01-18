interface Word {
  id: number;
  ilocano: string | string[]; // should this just be a string array?
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

export { Word, Level, User, UserWordStat };
