import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    console.log("id do controller " + user_id);
    const user = this.turnUserAdminUseCase.execute({ user_id });
    return response.status(201).send(user);
  }
}

export { TurnUserAdminController };
