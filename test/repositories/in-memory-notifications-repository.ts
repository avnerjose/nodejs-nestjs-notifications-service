import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async findById(notificationId: string): Promise<Notification | null> {
    return (
      this.notifications.find((item) => item.id === notificationId) ?? null
    );
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.reduce(
      (acc, cur) => (cur.recipientId === recipientId ? acc + 1 : acc),
      0,
    );
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (item) => item.recipientId === recipientId,
    );
  }
}
