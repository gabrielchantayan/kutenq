import { extendTheme } from '@mui/joy/styles';

const light = extendTheme({
    "palette": {
        "primary": {
            "solidBg": "var(--joy-palette-neutral-softColor)",
            "solidHoverBg": "var(--joy-palette-neutral-700)",
            "solidActiveBg": "var(--joy-palette-neutral-800)",
            "softColor": "var(--joy-palette-neutral-900)",
            "softActiveColor": "var(--joy-palette-neutral-800)",
            "softBg": "var(--joy-palette-neutral-200)",
            "softHoverBg": "var(--joy-palette-neutral-300)",
            "softActiveBg": "var(--joy-palette-neutral-400)",
            "outlinedColor": "var(--joy-palette-neutral-600)",
            "outlinedBorder": "var(--joy-palette-neutral-600)",
            "plainColor": "var(--joy-palette-neutral-800)",
            "plainHoverBg": "var(--joy-palette-neutral-100)",
            "plainActiveBg": "var(--joy-palette-neutral-300)",
            "plainDisabledColor": "var(--joy-palette-neutral-500)"
        }
    },
    components: {
        JoyTabs: {
            defaultProps: {
                backgroundcolor: 'background.body'
            }
        },
        JoyButton: {
            defaultProps: {
                background: 'gradient.primary'
            }
        }
    },
    typography: {
        h1: {
            fontSize: "var(--joy-fontSize-xl4)"
        },
        "body-md": {
            fontWeight: "var(--joy-fontWeight-bodyFontWeight)"
        }
    },
    fontFamily: {
        display: 'Cabrito_Didone_Norm_Bold_It, var(--joy-fontFamily-fallback)',
        body: 'Inter, var(--joy-fontFamily-fallback)',
    },
    colorSchemes: {
        light: {
            palette: {
                gradient: {
                    primary: 'linear-gradient(45deg, var(--joy-palette-neutral-900), var(--joy-palette-neutral-700)'
                },
            },
        },
    },
    fontWeight: {
        "bodyFontWeight": 500
    },
    fontSize: {
        xl4: "4rem"
    },
    vars: {
        fontSize: {
            xl4: "var(--joy-fontSize-xl4, 4rem)"
        },
        fontWeight: {
            "bodyFontWeight": "var(--joy-fontWeight-bodyFontWeight, 600)"
        },
    }
});


const dark = extendTheme({
    "colorSchemes": {
        "light": {
            palette: {
                primary: {
                    50: "#EDF5FD",
                    100: "#E3EFFB",
                    200: "#C7DFF7",
                    300: "#97C3F0",
                    400: "#4393E4",
                    500: "#0B6BCB",
                    600: "#185EA5",
                    700: "#12467B",
                    800: "#0A2744",
                    900: "#051423",
                    plainColor: "var(--joy-palette-primary-300, #97C3F0)",
                    plainHoverBg: "var(--joy-palette-primary-800, #0A2744)",
                    plainActiveBg: "var(--joy-palette-primary-700, #12467B)",
                    plainDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedColor: "var(--joy-palette-primary-200, #C7DFF7)",
                    outlinedBorder: "var(--joy-palette-primary-700, #12467B)",
                    outlinedHoverBg: "var(--joy-palette-primary-800, #0A2744)",
                    outlinedActiveBg: "var(--joy-palette-primary-700, #12467B)",
                    outlinedDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedDisabledBorder: "var(--joy-palette-neutral-800, #171A1C)",
                    softColor: "var(--joy-palette-primary-200, #C7DFF7)",
                    softBg: "var(--joy-palette-primary-800, #0A2744)",
                    softHoverBg: "var(--joy-palette-primary-700, #12467B)",
                    softActiveColor: "var(--joy-palette-primary-100, #E3EFFB)",
                    softActiveBg: "var(--joy-palette-primary-600, #185EA5)",
                    softDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    softDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    solidColor: "var(--joy-palette-common-white, #FFF)",
                    solidBg: "var(--joy-palette-primary-500, #0B6BCB)",
                    solidHoverBg: "var(--joy-palette-primary-600, #185EA5)",
                    solidActiveBg: "var(--joy-palette-primary-700, #12467B)",
                    solidDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    solidDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    mainChannel: "67 147 228",
                    lightChannel: "199 223 247",
                    darkChannel: "18 70 123",
                },
                neutral: {
                    plainColor: "var(--joy-palette-neutral-300, #CDD7E1)",
                    plainHoverBg: "var(--joy-palette-neutral-800, #171A1C)",
                    plainActiveBg: "var(--joy-palette-neutral-700, #32383E)",
                    plainDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedColor: "var(--joy-palette-neutral-200, #DDE7EE)",
                    outlinedBorder: "var(--joy-palette-neutral-700, #32383E)",
                    outlinedHoverBg: "var(--joy-palette-neutral-800, #171A1C)",
                    outlinedActiveBg: "var(--joy-palette-neutral-700, #32383E)",
                    outlinedDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedDisabledBorder: "var(--joy-palette-neutral-800, #171A1C)",
                    softColor: "var(--joy-palette-neutral-200, #DDE7EE)",
                    softBg: "var(--joy-palette-neutral-800, #171A1C)",
                    softHoverBg: "var(--joy-palette-neutral-700, #32383E)",
                    softActiveColor: "var(--joy-palette-neutral-100, #F0F4F8)",
                    softActiveBg: "var(--joy-palette-neutral-600, #555E68)",
                    softDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    softDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    solidColor: "var(--joy-palette-common-white, #FFF)",
                    solidBg: "var(--joy-palette-neutral-500, #636B74)",
                    solidHoverBg: "var(--joy-palette-neutral-600, #555E68)",
                    solidActiveBg: "var(--joy-palette-neutral-700, #32383E)",
                    solidDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    solidDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    plainHoverColor: "var(--joy-palette-neutral-300, #CDD7E1)",
                    mainChannel: "159 166 173",
                    lightChannel: "221 231 238",
                    darkChannel: "50 56 62",
                },
                danger: {
                    plainColor: "var(--joy-palette-danger-300, #F09898)",
                    plainHoverBg: "var(--joy-palette-danger-800, #430A0A)",
                    plainActiveBg: "var(--joy-palette-danger-700, #7D1212)",
                    plainDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedColor: "var(--joy-palette-danger-200, #F7C5C5)",
                    outlinedBorder: "var(--joy-palette-danger-700, #7D1212)",
                    outlinedHoverBg: "var(--joy-palette-danger-800, #430A0A)",
                    outlinedActiveBg: "var(--joy-palette-danger-700, #7D1212)",
                    outlinedDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedDisabledBorder: "var(--joy-palette-neutral-800, #171A1C)",
                    softColor: "var(--joy-palette-danger-200, #F7C5C5)",
                    softBg: "var(--joy-palette-danger-800, #430A0A)",
                    softHoverBg: "var(--joy-palette-danger-700, #7D1212)",
                    softActiveColor: "var(--joy-palette-danger-100, #FCE4E4)",
                    softActiveBg: "var(--joy-palette-danger-600, #A51818)",
                    softDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    softDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    solidColor: "var(--joy-palette-common-white, #FFF)",
                    solidBg: "var(--joy-palette-danger-500, #C41C1C)",
                    solidHoverBg: "var(--joy-palette-danger-600, #A51818)",
                    solidActiveBg: "var(--joy-palette-danger-700, #7D1212)",
                    solidDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    solidDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    mainChannel: "228 116 116",
                    lightChannel: "247 197 197",
                    darkChannel: "125 18 18",
                },
                success: {
                    plainColor: "var(--joy-palette-success-300, #A1E8A1)",
                    plainHoverBg: "var(--joy-palette-success-800, #042F04)",
                    plainActiveBg: "var(--joy-palette-success-700, #0A470A)",
                    plainDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedColor: "var(--joy-palette-success-200, #C7F7C7)",
                    outlinedBorder: "var(--joy-palette-success-700, #0A470A)",
                    outlinedHoverBg: "var(--joy-palette-success-800, #042F04)",
                    outlinedActiveBg: "var(--joy-palette-success-700, #0A470A)",
                    outlinedDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedDisabledBorder: "var(--joy-palette-neutral-800, #171A1C)",
                    softColor: "var(--joy-palette-success-200, #C7F7C7)",
                    softBg: "var(--joy-palette-success-800, #042F04)",
                    softHoverBg: "var(--joy-palette-success-700, #0A470A)",
                    softActiveColor: "var(--joy-palette-success-100, #E3FBE3)",
                    softActiveBg: "var(--joy-palette-success-600, #136C13)",
                    softDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    softDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    solidColor: "var(--joy-palette-common-white, #FFF)",
                    solidBg: "var(--joy-palette-success-500, #1F7A1F)",
                    solidHoverBg: "var(--joy-palette-success-600, #136C13)",
                    solidActiveBg: "var(--joy-palette-success-700, #0A470A)",
                    solidDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    solidDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    mainChannel: "81 188 81",
                    lightChannel: "199 247 199",
                    darkChannel: "10 71 10",
                },
                warning: {
                    plainColor: "var(--joy-palette-warning-300, #F3C896)",
                    plainHoverBg: "var(--joy-palette-warning-800, #2E1B05)",
                    plainActiveBg: "var(--joy-palette-warning-700, #492B08)",
                    plainDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedColor: "var(--joy-palette-warning-200, #FCE1C2)",
                    outlinedBorder: "var(--joy-palette-warning-700, #492B08)",
                    outlinedHoverBg: "var(--joy-palette-warning-800, #2E1B05)",
                    outlinedActiveBg: "var(--joy-palette-warning-700, #492B08)",
                    outlinedDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    outlinedDisabledBorder: "var(--joy-palette-neutral-800, #171A1C)",
                    softColor: "var(--joy-palette-warning-200, #FCE1C2)",
                    softBg: "var(--joy-palette-warning-800, #2E1B05)",
                    softHoverBg: "var(--joy-palette-warning-700, #492B08)",
                    softActiveColor: "var(--joy-palette-warning-100, #FDF0E1)",
                    softActiveBg: "var(--joy-palette-warning-600, #72430D)",
                    softDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    softDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    solidColor: "var(--joy-palette-common-white, #FFF)",
                    solidBg: "var(--joy-palette-warning-500, #9A5B13)",
                    solidHoverBg: "var(--joy-palette-warning-600, #72430D)",
                    solidActiveBg: "var(--joy-palette-warning-700, #492B08)",
                    solidDisabledColor: "var(--joy-palette-neutral-500, #636B74)",
                    solidDisabledBg: "var(--joy-palette-neutral-800, #171A1C)",
                    mainChannel: "234 154 62",
                    lightChannel: "252 225 194",
                    darkChannel: "73 43 8",
                },
                text: {
                    primary: "var(--joy-palette-neutral-100, #F0F4F8)",
                    secondary: "var(--joy-palette-neutral-300, #CDD7E1)",
                    tertiary: "var(--joy-palette-neutral-400, #9FA6AD)",
                    icon: "var(--joy-palette-neutral-400, #9FA6AD)",
                },
                background: {
                    body: "var(--joy-palette-common-black, #000)",
                    surface: "var(--joy-palette-neutral-900, #0B0D0E)",
                    popup: "var(--joy-palette-common-black, #000)",
                    level1: "var(--joy-palette-neutral-800, #171A1C)",
                    level2: "var(--joy-palette-neutral-700, #32383E)",
                    level3: "var(--joy-palette-neutral-600, #555E68)",
                    tooltip: "var(--joy-palette-neutral-600, #555E68)",
                    backdrop: 'rgba(var(--joy - palette - neutral - darkChannel, 251 252 254) / 0.25)',
                    divider: 'rgba(var(--joy - palette - neutral - mainChannel, 99 107 116) / 0.16)',
                focusVisible: "var(--joy-palette-primary-500, #0B6BCB)"
                },
                shadowRing: "0 0 #000",
                shadowChannel: "0 0 0",
                shadowOpacity: "0.6"
            }
        }
    }
})

export { light, dark }