import { SerializedStyles, css } from "@emotion/react"

export function rfont<T = any>(rfont: number, func: (target: T, rfont: number) => any): Function {
    return function (target: T) {
        return func(target, rfont)
    }
}

export function pxToRem(px: number | string, rfont: number = 16): string | undefined {
    if (typeof px === "string") {
        px = Number(px.replace("px", ""))
    } else {
        px = Number(px)
    }

    if (isNaN(px)) {
        return undefined
    }

    return `${(1 / rfont) * px}rem`
}

export function remToPx(rem: string): number {
    return 0
}

export function getPaddingStyles(args: any): SerializedStyles {
    return css({ padding: 0 })
}
