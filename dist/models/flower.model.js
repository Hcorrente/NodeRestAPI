"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Flower {
    constructor(norm) {
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
                    route: '/create-flower',
                    method: 'POST',
                    callback: this.createFlower,
                    requireToken: true,
                }, {
                    route: '/update-flower/id/:id',
                    method: 'PUT',
                    callback: this.updateFlower,
                    requireToken: true,
                }, {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteFlower,
                    requireToken: true,
                }
            ]];
    }
    updateFlower(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let carCtrl = model.controller;
            let resp = yield carCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deleteFlower(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let carCtrl = model.controller;
            let resp = yield carCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllFlowers(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let carCtrl = model.controller;
            let resp = yield carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createFlower(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let carCtrl = model.controller;
            let resp = yield carCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getFlowerById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let carCtrl = model.controller;
            let resp = yield carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Flower = Flower;