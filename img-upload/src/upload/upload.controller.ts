import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';

const generateFilename = (req: Request, file: Express.Multer.File, cb: Function) => {
  const uniqueSuffix = uuidv4();
  const ext = extname(file.originalname);
  cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
};

@Controller('upload')
export class UploadController {
  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: generateFilename,
      }),
    }),
  )
  async uploadSingleImage(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    if (!file) {
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    }

    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;

    return {
      message: 'Image uploaded successfully',
      fileUrl,
    };
  }

  @Post('images')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: generateFilename,
      }),
    }),
  )
  async uploadMultipleImages(
    @UploadedFiles() files: Express.Multer.File[],
    @Req() req: Request,
  ) {
    if (!files || files.length === 0) {
      throw new HttpException('No files uploaded', HttpStatus.BAD_REQUEST);
    }

    const fileUrls = files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);

    return {
      message: 'Images uploaded successfully',
      fileUrls,
    };
  }
}
