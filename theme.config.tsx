import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Llama Docs" />
      <meta property="og:description" content="Documentation for the Llama onchain smart contract governance framework" />
    </>
  ),
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 228 232" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8678 153.597C24.8885 151.84 25.588 150.159 26.8194 148.907C28.0509 147.656 29.7187 146.93 31.4727 146.883H119.418C123.569 146.892 127.681 146.081 131.519 144.497C135.357 142.914 138.846 140.588 141.785 137.653C144.725 134.718 147.059 131.232 148.652 127.393C150.246 123.555 151.068 119.439 151.072 115.282V0.5H126.188V115.282C126.167 117.039 125.468 118.72 124.236 119.972C123.005 121.224 121.337 121.949 119.583 121.996H31.5553C23.189 122.005 15.1678 125.337 9.25198 131.261C3.3361 137.186 0.00874223 145.219 0 153.597V231.103H24.8678V153.597ZM162.086 24.3981H160.98L162.037 25.4564V48.6074H184.923L195.656 59.4552C188.525 60.9136 182.116 64.7918 177.51 70.4347C172.904 76.0777 170.384 83.1396 170.375 90.4279V231.136H195.144V90.3948C195.17 88.6221 195.884 86.9293 197.136 85.6758C198.388 84.4222 200.078 83.7066 201.848 83.681H205.662C220.276 83.681 225.23 75.5286 226.699 72.1055C228.169 68.6825 230.431 59.3394 220.094 48.9546L195.854 24.4807H188.308L162.086 24.3981ZM112.124 222.055C107.112 219.957 101.733 218.879 96.3004 218.883C90.8681 218.879 85.4893 219.957 80.4773 222.055C75.4652 224.153 70.92 227.229 67.1064 231.103H37.0042C42.4219 219.974 50.8538 210.593 61.3381 204.031C71.8223 197.469 83.937 193.989 96.3004 193.989C108.664 193.989 120.779 197.469 131.263 204.031C141.747 210.593 150.179 219.974 155.597 231.103H125.494C121.681 227.229 117.136 224.153 112.124 222.055Z" fill="url(#paint0_linear_202_125)"/>
        <defs>
<linearGradient id="paint0_linear_202_125" x1="-64.157" y1="164.741" x2="228.002" y2="165.492" gradientUnits="userSpaceOnUse">
<stop stop-color="#B10BFF"/>
<stop offset="1" stop-color="#6A45EC"/>
</linearGradient>
      </defs>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Llama
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/llamaxyz/llama',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/llamaxyz/llama/-docs',
  footer: {
    text: 'Llama Docs Repository',
  },
}

export default config
