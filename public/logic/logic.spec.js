import logic from './logic'
describe('parseRuntime', () => {
    it('should take a movie runtime from the server and parse it', () => {
        // expect(1).toBe(1);
        expect(logic.parseRuntime('2h28m')).toBe('2h 28min');
    });
});