const {sum, modulus, sayHelloTo, addProduct, duplicateObject} = require('./functions')

test('Deverá somar dois numeros' , () => {
    const result = sum(1, 1)

    expect(result).toBe(2)
})

test('deverá retorna o valor absoluto de um numero' , () => {

    expect(modulus(10)).toBe(10)
    expect(modulus(-10)).toBe(10)
    expect(modulus(0)).toBeGreaterThanOrEqual(0)
})

test('deverá retornar hello com um nome' , () => {

    expect(sayHelloTo('João')).toMatch(/^Hello, .+\!$/)
})

test('deverá criar um novo objeto' , () => {
    const animal = {especie: 'cachorro', cor: 'preto'}

    const novoObjeto = duplicateObject(animal)

    expect(novoObjeto).toStrictEqual(animal)
})

test('deverá adicionar um novo ao carrinho' , () => {
    const carrinho = []

    addProduct('celular' , carrinho)
    addProduct('mouse' , carrinho)

    expect(carrinho).toContain('celular')
    expect(carrinho).toContain('mouse')
})