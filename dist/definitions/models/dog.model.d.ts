import { Request, Response, NextFunction } from 'express';
export declare class Dog {
    _model: any;
    constructor(norm: any);
    updateDog(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteDog(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllDogs(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createDog(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getDogById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
