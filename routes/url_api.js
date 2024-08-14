import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {

    try {
        res.json({ latest_version: "2.0.0", url: "https://drive.google.com/file/d/1s7F_wo_RHrQP0qjNCDj-PnU4GkQa1aGP/view?usp=sharing", });


    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});



/**
 * @swagger
 * /login:
 *   post:
 *     description: Login a User
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *       required: true
 *     responses:
 *       '200':
 *         description: Success
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

export default router;