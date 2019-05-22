import { Request, Response, NextFunction } from 'express';

export class Flower {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            type: { type: String, maxlength: 24 },
            color: { type: String, maxlength: 24 },
            user_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'User', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store flower info',
        [
            {
                route: '/get-all-flowers',
                method: 'POST',
                callback: this.getAllFlowers,
                requireToken: true,
            },
            {
                route: '/get-flower-by-id/:id',
                method: 'POST',
                callback: this.getFlowerById,
                requireToken: true,
            }, {
                route: '/update-flower/id/:id',
                method: 'PUT',
                callback: this.updateFlower,
                requireToken: true,
            },
        ]];
    }

    updateFlower(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('req.body===>', req.body);
            let carCtrl = model.controller;
            let resp = await carCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getAllFlowers(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let carCtrl = model.controller;
            let resp = await carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getFlowerById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            }
            let carCtrl = model.controller;
            let resp = await carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

}