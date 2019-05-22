import { Request, Response, NextFunction } from 'express';
export declare class Toy {
    _model: any;
    constructor(norm: any);
    updateToy(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteToy(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllToys(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createToy(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getToyById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
