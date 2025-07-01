declare module "*.svg" {
  import React from "react"
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}