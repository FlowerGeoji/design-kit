import { getPaddingStyles, pxToRem, rfont } from "../src"

// pxToRem(number) => string
describe("pxToRem(number) => string 테스트", () => {
    it("pxToRem(number: 1px단위) 테스트", () => {
        for (let px = 0; px <= 16; px++) {
            const remFromPx = pxToRem(px)
            expect(remFromPx).toBe(`${(1 / 16) * px}rem`)
        }
    })

    it("pxToRem(number: 1px단위, rfont: number) 테스트", () => {
        for (let px = 0; px <= 16; px++) {
            const remFromPx = pxToRem(px, 16)
            expect(remFromPx).toBe(`${(1 / 16) * px}rem`)
        }
        for (let px = 0; px <= 16; px++) {
            const remFromPx = pxToRem(px, 14)
            expect(remFromPx).toBe(`${(1 / 14) * px}rem`)
        }
        for (let px = 0; px <= 16; px++) {
            const remFromPx = pxToRem(px, 12)
            expect(remFromPx).toBe(`${(1 / 12) * px}rem`)
        }
    })

    it("rfont(14, pxToRem) 테스트", () => {
        const pxToRem16 = rfont(16, pxToRem)
        for (let px = 0; px <= 16; px++) {
            const remFromPx = pxToRem16(px)
            expect(remFromPx).toBe(`${(1 / 16) * px}rem`)
        }

        const pxToRem14 = rfont(14, pxToRem)
        for (let px = 0; px <= 16; px++) {
            const remFromPx = pxToRem14(px)
            expect(remFromPx).toBe(`${(1 / 14) * px}rem`)
        }

        const pxToRem12 = rfont(12, pxToRem)
        for (let px = 0; px <= 16; px++) {
            const remFromPx = pxToRem12(px)
            expect(remFromPx).toBe(`${(1 / 12) * px}rem`)
        }
    })
})

// remToPx(string) => number
describe("remToPx(string) => number 테스트", () => {
    // it("pxToRem(number: 1px단위) 테스트", () => {
    //     for (let px = 0; px <= 16; px++) {
    //         const remFromPx = pxToRem(px)
    //         expect(remFromPx).toBe(`${(1 / 16) * px}rem`)
    //     }
    // })
    // it("pxToRem(number: 1px단위, rfont: number) 테스트", () => {
    //     for (let px = 0; px <= 16; px++) {
    //         const remFromPx = pxToRem(px, 16)
    //         expect(remFromPx).toBe(`${(1 / 16) * px}rem`)
    //     }
    //     for (let px = 0; px <= 16; px++) {
    //         const remFromPx = pxToRem(px, 14)
    //         expect(remFromPx).toBe(`${(1 / 14) * px}rem`)
    //     }
    //     for (let px = 0; px <= 16; px++) {
    //         const remFromPx = pxToRem(px, 12)
    //         expect(remFromPx).toBe(`${(1 / 12) * px}rem`)
    //     }
    // })
    // it("rfont(14, pxToRem) 테스트", () => {
    //     const pxToRem16 = rfont(16, pxToRem)
    //     for (let px = 0; px <= 16; px++) {
    //         const remFromPx = pxToRem16(px)
    //         expect(remFromPx).toBe(`${(1 / 16) * px}rem`)
    //     }
    //     const pxToRem14 = rfont(14, pxToRem)
    //     for (let px = 0; px <= 16; px++) {
    //         const remFromPx = pxToRem14(px)
    //         expect(remFromPx).toBe(`${(1 / 16) * px}rem`)
    //     }
    //     const pxToRem12 = rfont(12, pxToRem)
    //     for (let px = 0; px <= 16; px++) {
    //         const remFromPx = pxToRem12(px)
    //         expect(remFromPx).toBe(`${(1 / 16) * px}rem`)
    //     }
    // })
})

describe("getPaddingStyles 테스트", () => {
    // // getPaddingStyles(number) => string
    // it("getPaddingStyles(number) => string", () => {
    //     const styles = getPaddingStyles(0)
    //     console.log({ styles })
    //     expect(styles.name).toBe("css")
    // })
    // // getPaddingStyles({p}) => string
    // it("getPaddingStyles({p}) => string", () => {
    //     expect(getPaddingStyles({ p: 1 })).toBe(7)
    // })
    // // getPaddingStyles({p}) => string
    // it("getPaddingStyles({p}) => string", () => {
    //     expect(getPaddingStyles({ px: 1 })).toBe(7)
    // })
    // // getPaddingStyles({p}) => string
    // it("getPaddingStyles({p}) => string", () => {
    //     expect(getPaddingStyles({ py: 1 })).toBe(7)
    // })
    // // getPaddingStyles({pt}) => string
    // it("getPaddingStyles({p}) => string", () => {
    //     expect(getPaddingStyles({ pt: 1 })).toBe(7)
    // })
    // // getPaddingStyles({pr}) => string
    // it("getPaddingStyles({p}) => string", () => {
    //     expect(getPaddingStyles({ pr: 1 })).toBe(7)
    // })
    // // getPaddingStyles({pb}) => string
    // it("getPaddingStyles({p}) => string", () => {
    //     expect(getPaddingStyles({ pb: 1 })).toBe(7)
    // })
    // // getPaddingStyles({pl}) => string
    // it("getPaddingStyles({p}) => string", () => {
    //     expect(getPaddingStyles({ pl: 1 })).toBe(7)
    // })
    // // getPaddingStyles({p, px, py}) => string
    // it("getPaddingStyles({p, px, py}) => string", () => {
    //     expect(getPaddingStyles({ p: 1, px: 2, py: 3 })).toBe(7)
    // })
    // // getPaddingStyles({p, px, py, pt, pr, pb, pl}) => string
    // it("getPaddingStyles({p, px, py, pt, pr, pb, pl}) => string", () => {
    //     expect(getPaddingStyles({ p: 1, px: 2, py: 3, pt: 4, pr: 5, pb: 6, pl: 7 })).toBe(7)
    // })
})
