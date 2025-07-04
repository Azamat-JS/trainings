import { Injectable, Logger } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { OnEvent } from '@nestjs/event-emitter';
import { CreateStudentDto } from 'src/student/dto/create-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassThrough } from 'stream';
import { time } from 'console';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService){}
  private readonly logger = new Logger(NotificationService.name)

  @OnEvent('student.created')
 async create(payload: any) {
    this.logger.log('Notification:', payload.data)
    const notification = await this.prisma.notification.create({data: {
      title: 'Yangi student',
      body: `Yangi o'quvchi qo'shildi ismi: ${payload.data.name}, va sinfi: ${payload.data.class}`
    }})
    return notification;
  }

  @Interval(3000)
 async logNotification(){
 this.logger.log('ishladi')
 }

//  @Cron(CronExpression.EVERY_10_SECONDS)
//  motivation(){
//   this.logger.log('Keep up the good work!')
//  }

  findAll() {
    return `This action returns all notification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
