/* Escreva um teste para uma função que dado um índice (0) e o tamanho do array,
 retorne a Sequência de Fibonacci iniciando no índice e finalizando depois do tamanho
especificado para o array */


describe ('Fibonacci function', () => {
    it("should check fibonacci", () => {
        
        const output = 6


        expect(fibonacci(2,4)).toEqual(output);
    })
})