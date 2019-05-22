import { Request, Response, NextFunction } from 'express';

export class Toy {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            type: { type: String, maxlength: 24 },
            material: { type: String, maxlength: 24 },
            color: { type: String, maxlength: 24 },
            user_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'User', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store toy info',
        [
            {
                route: '/get-all-toys',
                method: 'POST',
                callback: this.getAllToys,
                requireToken: true,
            },
            {
                route: '/get-toy-by-id/:id',
                method: 'POST',
                callback: this.getToyById,
                requireToken: true,
            }, 
             {
                route: '/update-toy/id/:id',
                method: 'PUT',
                callback: this.updateToy,
                requireToken: true,
            },
        ]];
    }

    updateToy(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('req.body===>', req.body);
            let carCtrl = model.controller;
            let resp = await carCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getAllToys(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let carCtrl = model.controller;
            let resp = await carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getToyById(model: any) {
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