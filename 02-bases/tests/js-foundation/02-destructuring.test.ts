import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring',() => {
    // Prueba de que solo contenga el heroe
    test('Characteres should containt Flash and Superman', () => {
        expect(characters).toContain('Flash')
        expect(characters).toContain('Superman')
    })

    //! Prueba de que sea en el orden que queramos

    test('First character should be Flash, and second Superman',() => {
        const [ flash, superman] = characters
        expect(flash).toBe('Flash')
        expect(superman).toBe('Superman')
    })
})