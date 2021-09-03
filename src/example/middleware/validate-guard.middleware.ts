import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateGuardMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { guard } = req.query;

    if (!guard || guard !== 'user') {
      throw new ForbiddenException('Not valid guard');
    }

    next();
  }
}
