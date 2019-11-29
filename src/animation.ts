import { keyframes } from '@emotion/core'
export const heartbeat = keyframes`
from {
   transform: scale(1.1);
   transform-origin: center center;
   animation-timing-function: ease-out;
 }
 10% {
   transform: scale(1);
   animation-timing-function: ease-in;
 }
 17% {
   transform: scale(0.91);
   animation-timing-function: ease-out;
 }
 33% {
   transform: scale(0.98);
   animation-timing-function: ease-in;
 }
 45% {
   transform: scale(0.87);
   animation-timing-function: ease-out;
 }
 62% {
   transform: scale(1.1);
   animation-timing-function: ease-in;
 }
`
