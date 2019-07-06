import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelpController } from './help/help.controller';

@Module({
  imports: [],
  controllers: [AppController, HelpController],
  providers: [AppService],
})
export class AppModule {}
