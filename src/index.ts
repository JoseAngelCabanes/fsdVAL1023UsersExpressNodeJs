import express from "express";

import { router } from "./routes/usersRoutes";

const app = express()

const PORT = process.env.PORT || 4000

// middleware
app.use(express.json())

app.use('/users', router)

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
})