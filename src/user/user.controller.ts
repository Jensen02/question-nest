import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('api/v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('name')
  getName(): string {
    return this.userService.getName()
  }
}