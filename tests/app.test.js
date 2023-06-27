const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app.js')
const PORT = process.env.PORT || 3002
const server = app.listen(`${PORT}`, () => console.log('Testing on PORT'))
const Tomato = require('../models/tomato.js')
const User = require('../models/user.js')
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
                fleshColor: 'checking',  breed: 'checking',
                leafType: 'checking',    plantType: 'checking',
                plantHeight: 4, 
                fruitShape: 'checking'
            })
        expect(response.statusCode).toBe(200)
        expect(response.body.tomato.variety).toEqual('checking')
        expect(response.body.tomato.skinColor).toEqual('checking')
        expect(response.body.tomato.fleshColor).toEqual('checking')
        expect(response.body.tomato.breed).toEqual('checking')
        expect(response.body.tomato.leafType).toEqual('checking')
        expect(response.body.tomato.plantType).toEqual('checking')
        expect(response.body.tomato.plantHeight).toEqual(4)
        expect(response.body.tomato.fruitShape).toEqual('checking')
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
            skinColor: 'Red', 
            breed: 'Hybrid', 
            plantType: 'Indeterminate',
            plantHeight: 4, 
            fruitShape: 'Flattened Globe'
        })
        await tomato.save()

        const response = await request(app)
            .put(`/tomatoes/${tomato.id}`)
            .send({
                variety: 'Big Man',
                skinColor: "Red",
                breed: 'Hybrid', 
                plantType: 'Indeterminate',
                plantHeight: 4, 
                fruitShape: 'Globe'
            })
        
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Updated Successfully')
    })

    test('Should delete tomato', async () => {
        const tomatoes = new Tomato({
            variety: 'Big Boy',
            skinColor: 'Red', 
            breed: 'Hybrid', 
            plantType: 'Indeterminate',
            plantHeight: 4, 
            fruitShape: 'Flattened Globe'
        })
        await tomatoes.save();
        
        const response = await request(app)
            .delete(`/tomatoes/${tomatoes.id}`)
        expect(response.body).toEqual({ message: 'Deleted Successfully'})
    })

    test('Should create user', async () => {
        const response = await request(app)
            .post('/user')
            .send({
                userName: "checking", 
                email: "checking",
                password: "checking"
            })
           
        expect(response.statusCode).toBe(200)
        console.log(response.body)
        expect(response.body.newUser.userName).toBe("checking")
        expect(response.body.newUser.email).toBe("checking")
        //expect(response.body.password).toEqual("checking")
        expect(response.body).toHaveProperty('token')

    })

    test('Should login user', async () => {
        const user = new User({ userName: 'string', email: 'string', password: 'string' })
        await user.save()
        const response = await request(app)
            .post('/user/login')
            .send(({ userName: 'string', email: 'string', password: 'string' }))
        //console.log(response.body)
        expect(response.statusCode).toBe(200)
        expect(response.body.user.userName).toEqual('string')
        expect(response.body.user.email).toEqual('string')
        expect(typeof response.body.user.password).toBe('string')
        expect(response.body).toHaveProperty('token')
     })

    test('Should logout user', async () => {
        const response = await request(app)
            .post('/user/logout')
            .send({ userName: 'string', email: 'string', password: 'string'})
            console.log('logout')
            console.log(response.body)
        expect(response.body.message).toBe('Logged Out')
    })

}) 