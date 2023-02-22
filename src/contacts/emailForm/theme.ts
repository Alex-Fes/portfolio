import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // this is styles for the new variants
          '&.subvariant-hovered': {
            '& fieldset': {
              border: `1px solid  rgba(255, 255, 255, .2)`,
              borderRadius: '0',
              transition: 'all .3s ease',
            },
            '& .MuiInputBase-input:hover + fieldset': {
              border: `1px solid #888`,
              borderRadius: '0',
            },
            '& .MuiInputBase-input:focus + fieldset': {
              border: '1px solid #987750',
              borderRadius: '0',
              transition: 'all .5s ease',
              textDecoration: 'none',
            },
            '& .MuiFormControl-root:focus': {
              border: `0`,
            },
            '& .MuiInputBase-input': {
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '1',
              letterSpacing: '0.5px',
              color: '#d8ccbe82',
            },
            '& .MuiOutlinedInput-root:focus': {
              border: '0',
            },
            '& .MuiInputLabel-root': {
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '1',
              letterSpacing: '0.5px',
              color: '#d8ccbe82',
              backgroundColor: '#252322',
              // width: '90px',
              textAlign: 'center',
            },
            '& .Mui-error': {
              color: '#dd3936',
            },
            '& .Mui-disabled': {
              opacity: '0.5',
            },
          },
        },
      },
    },
  },
})
