export class Todo {
    id: number;
    isDone: boolean
    constructor(
        public description: string,
        public priority: Priority, 
    ) {
        this.id = Date.now();
        this.isDone = false
    }
}

type Priority = "Low" | "Medium" | "High"


    export const defaultValue: Todo = {
        id: 0,
        description: "",
        priority: "Low",
        isDone: false
    }
