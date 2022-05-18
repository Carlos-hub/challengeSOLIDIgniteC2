import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const all = this.showUserProfileUseCase.execute({ id });

    return response.status(200).send(all);
  }
}

export { ShowUserProfileController };
