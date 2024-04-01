import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';

@Injectable()
export class UploadService {
  private readonly s3Client = new S3Client({
    region: this.configService.getOrThrow('AWS_S3_REGION'),
  });

  constructor(private readonly configService: ConfigService) {}
  async uploadFile(fileName: string, file: Buffer) {
    const fileAlreadyExists = await this.s3Client.send(
      new HeadObjectCommand({
        Bucket: 'aws-s3-uploadfile-nestjs',
        Key: fileName,
      }),
    );

    if (fileAlreadyExists) {
      throw new HttpException('File already exists!', HttpStatus.BAD_REQUEST);
    }
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: 'aws-s3-uploadfile-nestjs',
        Key: fileName,
        Body: file,
      }),
    );
  }
}
