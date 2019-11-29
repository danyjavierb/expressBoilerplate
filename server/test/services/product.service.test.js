'use strict'

const mongoose = require('mongoose');

const mongo = require('./../../config/mongo');
const productService = require('../../api/services/product.service');
const productModel = require('../../api/models/product');

beforeAll(async () => await mongo.connect());

afterEach(async () => await mongo.clearDatabase());

afterAll(async () => await mongo.closeDatabase());

describe('product create ', () => {


    it('can be created correctly', async () => {
        expect(async () => await productService.create(wellFormedProduct))
            .not
            .toThrow();
    });

    it('can be created without description', async () => {
        expect(async () => {
            await productService.create(badFormedProduct)
        })
            .not
            .toThrow();
    });


    it('exists after being created', async () => {
        await productService.create(wellFormedProduct);

        const createdProduct = await productModel.findOne();

        expect(wellFormedProduct.name)
            .toBe(productComplete.name);
    });

    it('requires name and price', async () => {

        await expect(productService.create(badFormedProductOnlyDesc))
            .rejects
            .toThrow(mongoose.Error.ValidationError);

    });
});

const wellFormedProduct = {
    name: "MANCHESTER UNITED ICON LONG-SLEEVE TOP",
    unit_price: 38,
    description: "This football shirt celebrates the 20-year anniversary of Manchester United's record-breaking treble. It's designed with a commemorative shield-shaped badge on lightweight jacquard fabric. The front is embroidered with the hard-fought distinction, \"Treble Winners.\"",
};

const badFormedProduct = {
    name: "MANCHESTER UNITED ICON LONG-SLEEVE TOP",
    unit_price: 38,
};

const badFormedProductOnlyDesc = {
  description: "description"
};