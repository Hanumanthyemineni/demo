import { demo } from '../index';
test('demo', () => {
    expect(demo('Carl')).toBe('Hello Carl');
});