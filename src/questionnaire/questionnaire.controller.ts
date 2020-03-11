import { Controller } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';

@Controller()
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}
}