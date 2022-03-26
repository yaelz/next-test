import logic from './logic'
describe('parseRuntime', () => {
    it('should parse movie run time to display', () => {
        expect(logic.parseRuntime('2h28m')).toBe('2h 28min');
    });
});