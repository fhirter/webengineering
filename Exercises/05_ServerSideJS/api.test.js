import supertest from 'supertest';

import {beforeEach, describe, expect, it} from "vitest";

const host = "http://localhost:3000";
const basePath = "/api/v1";

describe('/users api', () => {
    const endpoint = "/users";

    const url = `${host}${basePath}`;
    const request = supertest(url);

    describe('GET', () => {
        let getUsers
        beforeEach(() => {
            getUsers = request
                .get(endpoint)
                .set('Accept', 'application/json');
        });

        it('should return an array on GET', () => {
            return new Promise((done) => {
                return getUsers
                    .expect('Content-Type', /application\/json/)
                    .expect(200)
                    .then(response => {
                        expect(response.body).toEqual(expect.any(Array));
                        done();
                    })
            })
        });
        it('should return 200 on GET', () => {
            return new Promise((done) => {
                return getUsers
                    .end((error, response) => {
                        expect(response.status).toBe(200);
                        done();
                    })
            })
        });
        it('should return application/json on GET', () => {
            return new Promise((done) => {
                return getUsers
                    .expect(200)
                    .end((error, response) => {
                        expect(response.headers['content-type']).toContain('application/json');
                        done();
                    })
            })
        });
    });
    it.todo('should create a user');
    it.todo('should delete a user');
});