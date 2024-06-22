const app = require('../../src/app');
const supertest = require('supertest');

const mockGetHero = jest.fn();
const mockGetHeroProfile = jest.fn();
const mockGetAllHeroes = jest.fn();
const mockGetAllHeroProfiles = jest.fn();
jest.mock('../../src/repositories/hero-repository', () => ({
  HeroRepository: jest.fn().mockImplementation(() => ({
    getHero: mockGetHero,
    getHeroProfile: mockGetHeroProfile,
    getAllHeroes: mockGetAllHeroes,
    getAllHeroProfiles: mockGetAllHeroProfiles,
  })),
}));

describe('GET /heroes', () => {
  const request = supertest(app);

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('[200] get heroes without auth info in header', (done) => {
    // mock
    mockGetAllHeroes.mockResolvedValueOnce([
      {
        id: 1,
        name: 'Daredevil',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
      },
      {
        id: 2,
        name: 'Thor',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
      },
      {
        id: 3,
        name: 'Iron Man',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
      },
      {
        id: 4,
        name: 'Hulk',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
      },
    ]);

    // test
    request
      .get('/heroes')
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual({
          heroes: [
            {
              id: 1,
              name: 'Daredevil',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
            },
            {
              id: 2,
              name: 'Thor',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
            },
            {
              id: 3,
              name: 'Iron Man',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
            },
            {
              id: 4,
              name: 'Hulk',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
            },
          ],
        });
        expect(mockGetAllHeroes).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('[200] get hero profiles if carrying correct auth info in header', (done) => {
    // mock
    mockGetAllHeroProfiles.mockResolvedValueOnce([
      {
        id: 1,
        name: 'Daredevil',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
        profile: {
          str: 0,
          int: 8,
          agi: 10,
          luk: 7,
        },
      },
      {
        id: 2,
        name: 'Thor',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
        profile: {
          str: 8,
          int: 2,
          agi: 0,
          luk: 14,
        },
      },
      {
        id: 3,
        name: 'Iron Man',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
        profile: {
          str: 6,
          int: 9,
          agi: 6,
          luk: 9,
        },
      },
      {
        id: 4,
        name: 'Hulk',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
        profile: {
          str: 10,
          int: 1,
          agi: 4,
          luk: 2,
        },
      },
    ]);

    // test
    request
      .get('/heroes')
      .set('Name', 'testname')
      .set('Password', 'test')
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual({
          heroes: [
            {
              id: 1,
              name: 'Daredevil',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
              profile: {
                str: 0,
                int: 8,
                agi: 10,
                luk: 7,
              },
            },
            {
              id: 2,
              name: 'Thor',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
              profile: {
                str: 8,
                int: 2,
                agi: 0,
                luk: 14,
              },
            },
            {
              id: 3,
              name: 'Iron Man',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
              profile: {
                str: 6,
                int: 9,
                agi: 6,
                luk: 9,
              },
            },
            {
              id: 4,
              name: 'Hulk',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
              profile: {
                str: 10,
                int: 1,
                agi: 4,
                luk: 2,
              },
            },
          ],
        });
        expect(mockGetAllHeroProfiles).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('[200] get heroes if carrying incorrect auth info in header', (done) => {
    // mock
    mockGetAllHeroes.mockResolvedValueOnce([
      {
        id: 1,
        name: 'Daredevil',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
      },
      {
        id: 2,
        name: 'Thor',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
      },
      {
        id: 3,
        name: 'Iron Man',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
      },
      {
        id: 4,
        name: 'Hulk',
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
      },
    ]);

    // test
    request
      .get('/heroes')
      .set('show', 'me the secret')
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual({
          heroes: [
            {
              id: 1,
              name: 'Daredevil',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
            },
            {
              id: 2,
              name: 'Thor',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
            },
            {
              id: 3,
              name: 'Iron Man',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
            },
            {
              id: 4,
              name: 'Hulk',
              image:
                'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
            },
          ],
        });
        expect(mockGetAllHeroes).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('[404] no hero found if db is empty', (done) => {
    // mock
    mockGetAllHeroProfiles.mockResolvedValueOnce([]);

    // test
    request
      .get('/heroes')
      .set('Name', 'testname')
      .set('Password', 'test')
      .expect(404)
      .then((resp) => {
        expect(resp.body).toEqual({
          message: 'I am sorry, no hero here.',
        });
        expect(mockGetAllHeroProfiles).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('[500] HeroRepository throw error when not carring auth info in header', (done) => {
    // mock
    mockGetAllHeroes.mockRejectedValueOnce(new Error('random orm error'));

    // test
    request
      .get('/heroes')
      .expect(500)
      .then((resp) => {
        expect(resp.body).toEqual({
          message: 'internal error',
        });
        expect(mockGetAllHeroes).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('[500] HeroRepository throw error when carring correct auth info in header', (done) => {
    // mock
    mockGetAllHeroProfiles.mockRejectedValueOnce(new Error('random orm error'));

    // test
    request
      .get('/heroes')
      .set('Name', 'testname')
      .set('Password', 'test')
      .expect(500)
      .then((resp) => {
        expect(resp.body).toEqual({
          message: 'internal error',
        });
        expect(mockGetAllHeroProfiles).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });
});
