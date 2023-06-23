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

    test('Should get list of tomato varieties already grown on campus', async () => {
        const response = await request(app)
            .get('/tomatoes') //check on this
            
            expect(response.body).toMatchObject({})
    })

    test('Should get a single tomato by id', async () => {
        const response = await request(app)
            .get('/:id')

            expect(response.body).toMatchObject({})
    })

    test('Should update tomato property', async () => {
        const tomato = new Tomato({
            variety: 'Big Boy',
            skinColor: 'Red'
        })
        await tomato.save()

        const response = await request(app)
            .put(`/tomatoes/${tomato.id}`)
            .send({ variety: 'Big Man', skinColor: "Red" })
        
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Updated Successfully')
    })

    test('Should delete tomato', async () => {
        const tomatoes = new Tomato({
            variety: 'Green Zebra', 
            skinColor: 'Green'
        })
        await tomatoes.save()
        
        const response = await request(app)
            .delete(`/tomatoes/${tomatoes.id}`)
        expect(response.body).toEqual('Deleted Successfully')
    })


})