import { Request, Response, NextFunction } from 'express';
export declare class Flower {
    _model: any;
    constructor(norm: any);
    updateFlower(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteFlower(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllFlowers(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createFlower(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getFlowerById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
