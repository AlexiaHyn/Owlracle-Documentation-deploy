import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: 
  <div style={{display: "flex", alignItems: "center", fontWeight: "bold", backgroundColor: "white", borderRadius: "5px", padding: "5px"}}>
    <img width={50} src="/logo.png" placeholder='Owlracle Logo' />
    <div style={{color: "black", marginLeft: "5px"}}>Owlracle</div>
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
