/// <reference types="styled-jsx" />

import 'react'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

declare module '*.cssx' {
  const value: string
  export default value
}
