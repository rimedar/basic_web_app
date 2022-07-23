import { Router } from 'express';

const router = Router();

router.get('/', (req, resp) =>
	resp.render('index', { title: 'Node Web Page' })
);
router.get('/about', (req, resp) =>
	resp.render('about', { title: 'About Me' })
);
router.get('/contact', (req, resp) =>
	resp.render('contact', { title: 'Contact :)' })
);

export default router;
