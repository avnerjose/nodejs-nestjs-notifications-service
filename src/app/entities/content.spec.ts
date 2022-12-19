import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu um pedido de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification with less then 5 characters', () => {
    expect(() => new Content('abcd')).toThrow();
  });

  it('should not be able to create a notification with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
