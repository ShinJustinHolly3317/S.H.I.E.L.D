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

describe('GET /heroes/:id', () => {
  const request = supertest(app);

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('[200] get hero by id without auth info in header', (done) => {
    // mock
    mockGetHero.mockResolvedValueOnce({
      id: 1,
      name: 'Daredevil',
      image:
        'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
    });

    // test
    request
      .get('/heroes/1')
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual({
          id: 1,
          name: 'Daredevil',
          image:
            'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
        });
        expect(mockGetHero).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('`[200] get hero profile by id if carrying correct auth info in header`', (done) => {
    // mock
    mockGetHeroProfile.mockResolvedValueOnce({
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
    });

    // test
    request
      .get('/heroes/1')
      .set('Name', 'testname')
      .set('Password', 'test')
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual({
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
        });
        expect(mockGetHeroProfile).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('[200] get hero by id if carrying incorrect auth info in header', (done) => {
    // mock
    mockGetHero.mockResolvedValueOnce({
      id: 1,
      name: 'Daredevil',
      image:
        'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
    });

    // test
    request
      .get('/heroes/1')
      .set('show', 'me the secret')
      .expect(200)
      .then((resp) => {
        expect(resp.body).toEqual({
          id: 1,
          name: 'Daredevil',
          image:
            'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
        });
        expect(mockGetHero).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('[404] no hero found if db is empty', (done) => {
    // mock
    mockGetHeroProfile.mockResolvedValueOnce(undefined);

    // test
    request
      .get('/heroes/1')
      .set('Name', 'testname')
      .set('Password', 'test')
      .expect(404)
      .then((resp) => {
        expect(resp.body).toEqual({
          message: 'I am sorry, no hero here.',
        });
        expect(mockGetHeroProfile).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('[500] HeroRepository throw error when not carring auth info in header', (done) => {
    // mock
    mockGetHero.mockRejectedValueOnce(new Error('random orm error'));

    // test
    request
      .get('/heroes/1')
      .expect(500)
      .then((resp) => {
        expect(resp.body).toEqual({
          message: 'internal error',
        });
        expect(mockGetHero).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });

  it('[500] HeroRepository throw error when carring correct auth info in header', (done) => {
    // mock
    mockGetHeroProfile.mockRejectedValueOnce(new Error('random orm error'));

    // test
    request
      .get('/heroes/1')
      .set('Name', 'testname')
      .set('Password', 'test')
      .expect(500)
      .then((resp) => {
        expect(resp.body).toEqual({
          message: 'internal error',
        });
        expect(mockGetHeroProfile).toHaveBeenCalledTimes(1);
        done();
      })
      .catch((err) => done(err));
  });
});
