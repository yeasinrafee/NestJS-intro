import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(params);
    console.log(query);
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers(
    @Body() body: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(ip);
    console.log(headers);
    console.log(body);
    return 'You sent a post request to users endpoint';
  }
}
