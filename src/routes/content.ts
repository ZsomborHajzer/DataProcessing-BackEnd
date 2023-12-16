import express, { Router, Request, Response } from 'express';
import authenticateToken from '../middleware/authenticate';
const router: Router = express.Router();

// Import controllers
import { getMovie, getSeries, patchUpdateMovie, patchUpdateSeries, getPersonalizedContent, getViewingHistory } from '../controller/content';

router.use(authenticateToken);

// API routes
router.get('/movie/:movieId', (req: Request, res: Response) => getMovie(req, res));

router.get('/series/:seriesId', (req: Request, res: Response) => getSeries(req, res));

router.patch('/movie/:movieId', (req: Request, res: Response) => patchUpdateMovie(req, res));

router.patch('/series/:seriesId', (req: Request, res: Response) => patchUpdateSeries(req, res));

router.get('/presonalized-content', (req: Request, res: Response) => getPersonalizedContent(req, res));

router.get('/viewing-history', (req: Request, res: Response) => getViewingHistory(req, res));

export = router;