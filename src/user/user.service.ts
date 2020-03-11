import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getName(): string {
    return 'I am Jensen!'
  }
}