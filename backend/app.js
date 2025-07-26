import express from express;
import cors from cors;

const app = express();
dotenv.config({ path : "./config/config.env" });

app.use (
    cors({
        origin : [process.env.FRONTEND_URL],
        methods : ["POST"],
        credentials : true
    })
)

export default app;