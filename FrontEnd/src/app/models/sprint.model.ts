import { Project } from "./project.model";
//import { Sprint } from "./sprint.model";
//import { Member } from "./member.model";

export class Sprint {
    constructor(
        public days: number,
        public comment: string,
        public updatedAt: Date,
        public createdAt: Date,
        public project_id: Number,
        public projects?: Project,
        public id?: number,
    ) { }
}
