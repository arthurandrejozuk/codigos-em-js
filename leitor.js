import readline from 'readline';

export const leitor = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}