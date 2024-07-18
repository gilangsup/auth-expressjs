import express, { Application } from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import authRoutes from './routes/authRoutes';
import protectedRoutes from './routes/protectedRoutes';

const app: Application = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api', protectedRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(error => console.log(error));
