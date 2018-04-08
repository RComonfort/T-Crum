import { Project } from "./models/project.model.ts";

export class Technology {
    constructor(
        public name: string,
        public projects?: Project[],
        public id?: number,
    ) { }
}