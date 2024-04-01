import {
  Controller,
  FileTypeValidator,
  Logger,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  private readonly logger = new Logger(UploadController.name);
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType: 'image/png',
          }),
          new MaxFileSizeValidator({
            maxSize: 1000000,
            message: 'Tamanho máximo deve ser 1 mb de arquivo',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    await this.uploadService.uploadFile(file.originalname, file.buffer);
    this.logger.log(
      `Upload do arquivo ${file.originalname} de tamanho ${file.size} realizado com sucesso!`,
    );
  }
}
