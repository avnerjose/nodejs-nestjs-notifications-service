import { Injectable } from '@nestjs/common';
import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      category,
      content: new Content(content),
      recipientId,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
