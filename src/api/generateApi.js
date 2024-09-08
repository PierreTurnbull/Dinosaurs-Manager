import { generateApi } from "swagger-typescript-api";
import dotenv from "dotenv"
dotenv.config({ path: ".env.development" })

try {
    await generateApi({
        url: `${process.env.VITE_API_URL}/rest/v1/?apikey=${process.env.VITE_API_KEY}`,
        name: "Api.ts",
        typePrefix: "TApi",
        output: process.cwd() + "/src/api",
        httpClientType: "axios",
    })
} catch (error) {
    console.error(error)
}