export class sgp {
    programId: number; 
    actorId: number; 
    actorName: string; 
    character: string; 

    constructor(programId: number, actorId: number, actorName: string, character: string) {
        this.programId = programId;
        this.actorId = actorId;
        this.actorName = actorName;
        this.character = character;
    }
}