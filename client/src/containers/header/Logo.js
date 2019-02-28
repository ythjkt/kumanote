import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const StyledLogo = styled(Link)`
  margin-right: auto;
  display: flex;
  align-items: center;

  & svg {
    height: 20px;
  }
`

export default function Logo() {
  return (
    <StyledLogo to="/app">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.03 7.94">
        <title>Kumanote</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M0,0H3.45V.38c-.9.11-1,.17-1,1.22v2a2,2,0,0,0,.88-.57A24.6,24.6,0,0,0,5.16,1c.32-.38.26-.55-.28-.63l-.27,0V0h3V.38a2.59,2.59,0,0,0-2,1c-.45.45-1.17,1.17-1.79,1.83.82,1.07,1.9,2.45,2.71,3.42.52.62.68.72,1.33.8V7.8H5.67C5,7,4,5.6,3.05,4.4,2.79,4.05,2.6,4,2.42,4v2.2c0,1,.1,1.09,1,1.2V7.8H0V7.41c.92-.09,1-.17,1-1.2V1.6C1,.55.92.47,0,.38Z" />
            <path d="M13.88,7.51a19.12,19.12,0,0,0-2.1.43V7.09a2.75,2.75,0,0,1-1.7.85c-.92,0-1.54-.59-1.54-1.73V3.78c0-.59-.08-.66-.39-.73L7.87,3V2.64c.58,0,1.47-.12,2-.2,0,.45,0,1,0,1.78v1.7c0,.88.45,1.16.91,1.16a1.33,1.33,0,0,0,1-.42V3.79c0-.59-.08-.68-.44-.74L11,3V2.64a21.28,21.28,0,0,0,2.13-.2V6.37c0,.62.08.73.48.77l.29,0Z" />
            <path d="M21,7.8V7.44c.58-.08.65-.14.65-.92v-2c0-.94-.38-1.25-.9-1.25a1.66,1.66,0,0,0-1,.45c0,.15,0,.32,0,.51V6.6c0,.7.06.76.65.84V7.8H17.75V7.44c.6-.08.67-.12.67-.86V4.44c0-.87-.33-1.21-.87-1.21a1.81,1.81,0,0,0-1.05.44V6.58c0,.72.07.78.61.86V7.8H14.44V7.44c.7-.09.75-.14.75-.89V4c0-.71,0-.79-.62-.89V2.81a9.51,9.51,0,0,0,1.93-.47v.92c.25-.18.48-.35.78-.53a1.75,1.75,0,0,1,1-.35,1.36,1.36,0,0,1,1.32.93c.3-.23.58-.42.88-.61a1.65,1.65,0,0,1,.93-.32c1,0,1.55.69,1.55,1.89V6.58c0,.72.07.76.68.86V7.8Z" />
            <path d="M28.14,7.94a1,1,0,0,1-.69-.24,1.14,1.14,0,0,1-.3-.49,4,4,0,0,1-1.32.73,1.53,1.53,0,0,1-1.54-1.51c0-.61.29-.92.92-1.16a11.94,11.94,0,0,0,1.91-.78V4c0-.71-.31-1.11-.85-1.11a.64.64,0,0,0-.52.25,2.84,2.84,0,0,0-.3.79.41.41,0,0,1-.43.35.67.67,0,0,1-.64-.58c0-.19.15-.33.41-.53a6,6,0,0,1,1.84-.83,1.89,1.89,0,0,1,1.14.33,1.63,1.63,0,0,1,.63,1.45V6.32c0,.56.19.72.4.72a.92.92,0,0,0,.38-.11l.12.36Zm-1-3-.83.41c-.39.2-.64.42-.64.84a.84.84,0,0,0,.78.92,1,1,0,0,0,.69-.28Z" />
            <path d="M33.15,7.8V7.44c.58-.08.63-.15.63-1v-2c0-.85-.37-1.22-.93-1.22a1.71,1.71,0,0,0-1.05.44V6.55c0,.77.06.81.62.89V7.8h-2.7V7.44c.69-.11.76-.14.76-.93V4c0-.73-.08-.78-.65-.89V2.81a10.78,10.78,0,0,0,2-.47c0,.21,0,.61,0,.9.24-.17.49-.35.78-.53a1.68,1.68,0,0,1,1-.33c1,0,1.57.7,1.57,1.89V6.54c0,.78.06.81.67.9V7.8Z" />
            <path d="M39.3,2.38A2.61,2.61,0,0,1,42,5.06a2.74,2.74,0,1,1-5.48.16A2.78,2.78,0,0,1,39.3,2.38Zm-.16.43c-.6,0-1.14.62-1.14,2.05s.55,2.64,1.39,2.64c.56,0,1.1-.4,1.1-2.13C40.49,3.8,40,2.81,39.14,2.81Z" />
            <path d="M45.23,7.8a1.24,1.24,0,0,1-.48.14c-.87,0-1.36-.44-1.36-1.48V3.06h-.78l-.06-.13.33-.41h.51v-1c.35-.26.84-.61,1.19-.89l.15.06c0,.39,0,1.06,0,1.84H46a.46.46,0,0,1-.09.54H44.71v3c0,.94.38,1.09.65,1.09A1.37,1.37,0,0,0,46,7l.11.36Z" />
            <path d="M51,6.68a2.78,2.78,0,0,1-2.11,1.26,2.42,2.42,0,0,1-2.45-2.59,3.16,3.16,0,0,1,.85-2.14,2.6,2.6,0,0,1,1.82-.83A1.91,1.91,0,0,1,51,4.27c0,.22,0,.38-.17.42s-1.87.14-3.13.19c0,1.42.84,2.08,1.7,2.08a2,2,0,0,0,1.36-.57ZM48.85,2.84c-.5,0-1,.53-1.06,1.5.56,0,1.12,0,1.67,0,.18,0,.25,0,.25-.23C49.73,3.45,49.4,2.84,48.85,2.84Z" />
          </g>
        </g>
      </svg>
    </StyledLogo>
  )
}