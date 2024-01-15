import express, { Router, Request, Response } from 'express';
import authenticateToken from '../middleware/authenticate';
const router: Router = express.Router();

// Import controllers
import { postStartWatchMovie, postEndWatchMovie, getWatchMovie, getWatchMovieSubtitle, postStartWatchSeries, postEndWatchSeries, getWatchSeries, getWatchSeriesSubtitle, getProfileWatchHistory, getProfilePersonalOffer } from '../controller/content';

router.use(authenticateToken);

// API routes
router.post('/movie/:movieId/profile/:profileId/start', (req: Request, res: Response) => postStartWatchMovie(req, res));

router.post('/movie/:movieId/profile/:profileId/end', (req: Request, res: Response) => postEndWatchMovie(req, res));

router.get('/movie/:movieId', (req: Request, res: Response) => getWatchMovie(req, res));

router.get('/movie/:movieId/subtitle', (req: Request, res: Response) => getWatchMovieSubtitle(req, res));

router.post('/seriesId/:seriesId/profile/:profileId', (req: Request, res: Response) => postStartWatchSeries(req, res));

router.post('/seriesId/:seriesId/profile/:profileId', (req: Request, res: Response) => postEndWatchSeries(req, res));

router.get('/seriesId/:seriesId', (req: Request, res: Response) => getWatchSeries(req, res));

router.get('/seriesId/:seriesId/subtitle', (req: Request, res: Response) => getWatchSeriesSubtitle(req, res));

router.get('/profile/:profileId/watch-history', (req: Request, res: Response) => getProfileWatchHistory(req, res));

router.get('/profile/:profileId/presonal-offer', (req: Request, res: Response) => getProfilePersonalOffer(req, res));

export = router;