class SSCStudent{
constructor(name,engMarks,telMarks,matMarks,hinMarks,sciMarks,socMarks){
    
    console.log(`Creating SSCStudent copy`)
    this.name=name;
    this.engMarks=engMarks;
    this.telMarks=telMarks;
    this.matMarks=matMarks;
    this.hinMarks=hinMarks;
    this.sciMarks=sciMarks;
    this.socMarks=socMarks;

    console.log(name,engMarks,telMarks,matMarks,hinMarks,sciMarks,socMarks)
}
calculateResult=()=>{
    let passMarks=35;
    if( this.engMarks>=passMarks &&
        this.telMarks>=passMarks &&
        this.matMarks>=passMarks &&
        this.hinMarks>=passMarks &&
        this.sciMarks>=passMarks &&
        this.socMarks>=passMarks 
    ){
        console.log(`${this.name} passed in ssc`);
    }else{
        console.log(`${this.name} failed in ssc`);
    }
}
}

export default SSCStudent;