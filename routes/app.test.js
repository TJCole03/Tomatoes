const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app.js')
const PORT = process.env.PORT || 3002
const server = app.listen(`${PORT}`, () => console.log('Testing on PORT'))
const Tomato = require('../models/tomatoesModel')
let mongoServer; 

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

describe('Test Endpoints', () => {

    test('Should log new tomato variety', async () => {
        const response = await request(app)
        .post('/tomatoes') //what does this line connect to? what is it supposed to connect to? 
            .send({
                variety: 'checking', skinColor: 'checking',
                // fleshColor: 'checking',  breed: 'checking',
                // leafType: 'checking',    plantType: 'checking',
                // plantHeight: 'checking', fruitShape: 'checking'
            })
        expect(response.statusCode).toBe(200)
        expect(response.body.variety).toEqual('checking')
        expect(response.body.skinColor).toEqual('checking')
        // expect(response.body.fleshColor).toEqual('checking')
        // expect(response.body.breed).toEqual('checking')
        // expect(response.body.leafType).toEqual('checking')
        // expect(response.body.plantType).toEqual('checking')
        // expect(response.body.plantHeight).toEqual('checking')
        // expect(response.body.fruitShape).toEqual('checking')
    })



})