import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: 
  <div style={{display: "flex", fontWeight: "bold"}}>
    <img width={120} height={50} src="./components/logo.png" placeholder='Owlracle Logo'/>
    Owlracle 
  </div>,
  project: {
    link: 'https://github.com/Mr-Ye-Cao/Owlracle.git',
  },
  chat: {
    link: 'https://discord.gg/WSBbXqPh',
  },
  docsRepositoryBase: 'https://github.com/Mr-Ye-Cao/Owlracle.git',
  footer: {
    text: 'Owlracle Documentation',
  },
}

export default config
