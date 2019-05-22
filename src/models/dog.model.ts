import { Request, Response, NextFunction } from 'express';

export class Dog {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            breed: { type: String, maxlength: 24 },
            color: { type: String, maxlength: 24 },
            age: { type: String, maxlength: 24 },
            user_id: {
                type: Number,
                key: 'foreign',
                references: { table: 'User', foreignKey: 'id' },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
        }, 'A table to store dog info',
        [
            {
                route: '/get-all-dogs',
                method: 'POST',
                callback: this.getAllDogs,
                requireToken: true,
            },
            {
                route: '/get-dog-by-id/:id',
                method: 'POST',
                callback: this.getDogById,
                requireToken: true,
            }, {
                route: '/create-dog',
                method: 'POST',
                callback: this.createDog,
                requireToken: true,
            },{
                route: '/update-dog/id/:id',
                method: 'PUT',
                callback: this.updateDog,
                requireToken: true,
            }, {
                route: '/delete/id/:id',
                method: 'DELETE',
                callback: this.deleteDog,
                requireToken: true,
            }
        ]];
    }

    updateDog(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('req.body===>', req.body);
            let carCtrl = model.controller;
            let resp = await carCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    deleteDog(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('req.body===>', req.body);
            let carCtrl = model.controller;
            let resp = await carCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getAllDogs(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ["*"]
            }
            let carCtrl = model.controller;
            let resp = await carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    createDog(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log('req.body===>', req.body);
            let carCtrl = model.controller;
            let resp = await carCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getDogById(model: any) {
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