import { Module } from '@nestjs/common';
import { BookNameService } from './book-name.service';
import { BookNameController } from './book-name.controller';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [MulterModule.register({ dest: './uploads' })],
  controllers: [BookNameController],
  providers: [BookNameService],
})
export class BookNameModule {}
