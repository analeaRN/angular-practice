export interface Word {
    id?: number,
    ilocano: string | string[], // should this just be a string array?
    english: string | string[],
    level?: Level,
    // userReminder: string // to add for user to add their own reminder
}

export interface Level {
    id?: number
    levelName: string
}