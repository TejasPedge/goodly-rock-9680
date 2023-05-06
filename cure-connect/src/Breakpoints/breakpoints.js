import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const breakpoints = {
    '1107px' : '1107px',
    '929px' : '929px',
    '872px' : '872px',
    '760px' : '760px',
    '732px' : '732px',
    '1208px' : '1208px',
    '1063px' : '1063px',    
    '955px' : '955px',
    '816px' : '816px',
    '734px' : '734px',
    '620px' : '620px',
    '301px' : '301px',
    '247px' : '247px',
    '241px' : '241px',
    '595px' : '595px',
    '375px' : '375px',
    '282px' : '282px',
    '478px' : '478px',
}

// color customizations

const colors_customization = {
    primary: {
        100: "#00b5b7",
    },
}

// styles overrides

const styles = {
    global: (props) => ({
        body: {
            fontFamily: 'Montserrat, sans-serif;',
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('#f4f4f4', 'gray.800')(props),
            lineHeight: 'base',
        },
    }),
};

// components styling


export const theme = extendTheme({ breakpoints, colors : colors_customization, styles})

