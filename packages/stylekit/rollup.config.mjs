import { babel } from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"

export default {
    input: "./src/index.tsx",
    output: {
        file: "./dist/index.mjs",
        format: "es",
        sourcemap: true,
    },
    plugins: [
        // 바벨 트랜스파일러 설정
        babel({
            babelHelpers: "bundled",
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
        typescript({ tsconfig: "../../tsconfig.json" }),
    ],
}
