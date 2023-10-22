//user_id
//content
//used_flag
//notification_id

export class CreateNotificationsDto {
  content: string;
  used_flag: string;
  notification_id: number;
}
export class CreateNotificationsResponse {
  user_id: number;
  content: string;
  used_flag: string;
  notification_id: number;
}
export class UpdateNotificationDto {
  user_id: number;
  content: string;
  used_flag: string;
  notification_id: number;
}
export class UpdateNotificationResponse {
  user_id: number;
  content: string;
  used_flag: string;
  notification_id: number;
}
export class GetNotificationsDto {
  user_id: number;
  content: string;
  used_flag: string;
  notification_id: number;
}
