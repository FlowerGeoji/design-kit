import { babel } from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"

export default [
    {
        input: "./src/index.ts",
        output: {
            dir: "./dist/src",
            format: "es",
            preserveModules: true,
            sourcemap: true,
        },
        plugins: [
            // 바벨 트랜스파일러 설정
            babel({
                babelHelpers: "bundled",
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: {
                                chrome: 100,
                                safari: 15,
                                firefox: 91,
                            },
                        },
                    ],
                    "@babel/preset-typescript",
                    "@babel/preset-react",
                    "@emotion/babel-preset-css-prop",
                ],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            }),
            typescript({ tsconfig: "../../tsconfig.json" }),
        ],
    },
    // {
    //     input: "./src/index.ts",
    //     output: {
    //         file: "./dist/index.cjs",
    //         format: "commonjs",
    //         sourcemap: true,
    //     },
    //     plugins: [
    //         // 바벨 트랜스파일러 설정
    //         babel({
    //             babelHelpers: "bundled",
    //             presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    //             extensions: [".js", ".jsx", ".ts", ".tsx"],
    //         }),
    //         typescript({ tsconfig: "../../tsconfig.json" }),
    //     ],
    // },
]
