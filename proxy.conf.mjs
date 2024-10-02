import 'dotenv/config';

export default {
    "/api": {
        target: process.env.LANGGRAPH_API_URL,
        pathRewrite: {
            "^/api": "",
        },
        changeOrigin: true,
        bypass(req) {
            req.headers["X-Api-Key"] = process.env.LANGGRAPH_API_KEY;
        },
    },
};
