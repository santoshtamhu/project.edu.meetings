const { default: mongoose } = require("mongoose");
dotenv.config();
const MONGO = process.env.MONGODB_URI;
mongoose.connect(MONGO).then(() => console.log("DB Connected!"));
