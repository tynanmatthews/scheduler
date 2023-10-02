export interface Task {
    id: number;
    name: string;
    description: string;
    done: boolean;
    category: "work" | "health" | "social" | "personal" | "other";
    difficulty: 1|2|3|4|5;
    type: "task";
    optional: boolean;
    location: string;
    due?: number; //epoch time
    repeats?: "daily" | "weekly" | "fortnightly" | "monthly" | "bimonthly" | "yearly";
    cost?: number; //in dollars
}

export interface Event {
    id: number;
    name: string;
    description: string;
    done: boolean;
    category: "work" | "health" | "social" | "personal" | "other";
    difficulty: 1|2|3|4|5;
    type: "event";
    optional: boolean;
    location: string;
    startTime: number; //epoch time
    endTime: number; //epoch time
}