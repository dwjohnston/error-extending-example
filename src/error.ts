export class WError extends Error{

    data?: unknown; 
    oldError?: Error; 

    constructor(message: string, oldError?: Error, data?: unknown, ...rest) {
        super(message); 
        if (oldError) {
            this.oldError =  oldError; 
        }
        this.data = data; 

        this.stack = `
Error: ${this.message}
${this.data? 'Data: ' +  JSON.stringify(this.data, null, 2) : ''}
${this.stack} 
${this.oldError?  "\nCaused by: \n" + this.oldError.stack : ''}
        `;
        // this.stack = this.toString();
    }
}
