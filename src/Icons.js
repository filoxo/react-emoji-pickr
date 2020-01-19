import React from "react";

const IconBase = pathD => ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path d={pathD} />
  </svg>
);

export const IconActivity = IconBase(
  "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
);

export const IconCustom = IconBase(
  "M21 0c1.5 0 2.7 1.2 2.7 2.8v13.4l11.7-6.7c1.3-.8 3-.3 3.8 1 .7 1.3.3 3-1 3.7L26.5 21l11.7 6.8c1.3.7 1.7 2.4 1 3.7a2.8 2.8 0 01-3.8 1l-11.7-6.7v13.4c0 1.6-1.2 2.8-2.7 2.8s-2.8-1.2-2.8-2.8V25.8L6.6 32.5c-1.3.8-3 .3-3.8-1-.8-1.3-.3-3 1-3.7L15.5 21 4 14.2c-1.4-.7-1.9-2.4-1-3.6a2.7 2.7 0 013.7-1l11.6 6.6V2.8C18.2 1.2 19.4 0 21 0z"
);

export const IconFlags = IconBase(
  "M0 0l6 24h2L2 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.6 3h7.8l2 8H8.6l-2-8zm8.8 10l-2.9 1.9-.4-1.9h3.3zm3.6 0l-1.5-6h2l2 8H16l3-2z"
);

export const IconFoods = IconBase(
  "M17 5c-1.8 0-2.9.4-3.7 1 .5-1.3 1.8-3 4.7-3a1 1 0 000-2c-3 0-4.6 1.3-5.5 2.5l-.2.2c-.6-1.9-1.5-3.7-3-3.7C8.5 0 7.7.3 7 1c-2 1.5-1.7 2.9-.5 4C3.6 5.2 0 7.4 0 13c0 4.6 5 11 9 11 2 0 2.4-.5 3-1 .6.5 1 1 3 1 4 0 9-6.4 9-11 0-6-4-8-7-8M8.2 2.5c.7-.5 1-.5 1-.5.4.2 1 1.4 1.4 3-1.6-.6-2.8-1.3-3-1.8l.6-.7M15 22c-1 0-1.2-.1-1.6-.4l-.1-.2a2 2 0 00-2.6 0l-.1.2c-.4.3-.5.4-1.6.4-2.8 0-7-5.4-7-9C2 7 6.5 7 7 7c2 0 2.5.4 3.4 1.2l.3.3a2 2 0 002.6 0l.3-.3c1-.8 1.5-1.2 3.4-1.2.5 0 5 .1 5 6 0 3.6-4.2 9-7 9"
);
export const IconNature = IconBase(
  "M19 0c-1 0-2.2.8-3.1 1.5-1.3-.4-2.6-.5-3.9-.5-1.3 0-2.6.1-3.9.5-.9-.7-2-1.5-3-1.5C3.4 0 0 2.7 0 7c0 2.5.3 4.3 1 5l1.3 1c.2 3.1 1 5.2 2.6 6.3.9.6 2.2 1 3.2 1.1L8 21c0 1.8 2.4 3 4 3s4-1.2 4-3v-.6c2.5-.4 5.4-1.9 5.9-7.6.3-.2.8-.5 1-.8.8-.7 1.1-2.5 1.1-5 0-4.3-3.4-7-5-7M3.1 9.1l-.9 1.3C2.2 10 2 9 2 7c0-3.3 2.5-5 3-5 .3 0 .8.2 1.4.6A8 8 0 004 7.8c-.1.6-.4.9-.8 1.3M12 22c-.9 0-2-.7-2-1 0-.7.5-1.2 1-1.6v.6a1 1 0 102 0v-.6c.5.4 1 1 1 1.6 0 .3-1.1 1-2 1m3-3.5a4.8 4.8 0 00-1.3-1c1.1-.5 2.3-1.3 2.3-2.2 0-1.8-1.8-2.2-4-2.2s-4 .4-4 2.2c0 .9 1.2 1.7 2.3 2.2a4.8 4.8 0 00-1.3 1c-1 0-2.2-.3-3-.8-1.3-1-1.8-3-1.8-6.5.5-.9 1.5-1.5 1.8-3.1C6 6 7.4 4.4 8.4 3.5c1-.3 2.2-.5 3.5-.5 1.5 0 2.7.2 3.8.6C16.7 4.5 18 6 18 8c.3 1.6 1.3 2.2 1.8 3l.1.2c0 6-2 7-4.9 7.2m6.6-8.2v-.2a7.6 7.6 0 00-.8-1 3 3 0 01-.8-1.3 8 8 0 00-2.4-5.1c.6-.4 1-.6 1.3-.6.6 0 3 1.7 3.1 5 0 1.8-.3 3.2-.4 3.2M15.5 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3m-7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3"
);
export const IconObjects = IconBase(
  "M14.7 12.4c-.8 0-1.1-.8-1.5-1.8-.5-1-.7-1.5-1.2-1.5s-.8.5-1.3 1.5c-.4 1-.8 1.8-1.6 1.8h-.3c-.5-.2-.8-.7-1.3-1.8l-.2-1A3 3 0 007 9H7a1 1 0 010-2c1.7 0 2 1.4 2.2 2.1.5-1 1.3-2 2.8-2 1.5 0 2.3 1.1 2.7 2.1.2-.8.6-2.2 2.3-2.2a1 1 0 110 2c-.2 0-.3.5-.3.7a6.5 6.5 0 01-.3 1c-.5 1-.8 1.7-1.7 1.7M12 0a9 9 0 00-5 16.5V21s2 3 5 3 5-3 5-3v-4.5A9 9 0 0012 0zm0 2a7 7 0 110 14 7 7 0 010-14zM9 17.5a9 9 0 006 0v.8a7 7 0 01-3 .7 7 7 0 01-3-.7zm.2 3a8.9 8.9 0 002.8.5c1 0 1.9-.2 2.8-.5-.6.7-1.6 1.5-2.8 1.5-1.1 0-2.1-.8-2.8-1.5z"
);
export const IconPeople = IconBase(
  "M8 7a2 2 0 100 4 2 2 0 000-4m8 0a2 2 0 100 4 2 2 0 000-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1012 0M12 0a12 12 0 100 24 12 12 0 000-24m0 22a10 10 0 110-20 10 10 0 010 20"
);
export const IconPlaces = IconBase(
  "M22.5 9.5l-1-.4-.1-.1h.6c.6 0 1-.4 1-1 0-1-.9-2-2-2h-.6l-.8-1.7C19.3 3 18.1 2 16.8 2H7.2C6 2 4.7 3 4.4 4.3L3.6 6H3C1.9 6 1 7 1 8c0 .6.4 1 1 1h.6v.1l-1 .4a2 2 0 00-1.4 2l.7 7.6a1 1 0 001 .9H3v1c0 1.1.9 2 2 2h2a2 2 0 002-2v-1h6v1c0 1.1.9 2 2 2h2a2 2 0 002-2v-1h1.1a1 1 0 001-.9l.7-7.5a2 2 0 00-1.3-2.1M6.3 4.9c.1-.5.5-.9 1-.9h9.5c.4 0 .8.4 1 .9L19.2 9H4.7zM7 21H5v-1h2zm12 0h-2v-1h2zm2.2-3H2.8l-.7-6.6.9-.4h18l.9.4zM6.5 12a2.5 2.5 0 100 5 2.5 2.5 0 000-5m0 3a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5m11-3a2.5 2.5 0 100 5 2.5 2.5 0 000-5m0 3a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5"
);

export const IconRecent = IconBase(
  "M12 0a12 12 0 100 24 12 12 0 000-24m0 22a10 10 0 110-20 10 10 0 010 20m1-18h-2v7H9v2h2v2h2v-2h4v-2h-4z"
);

export const IconSymbols = IconBase(
  "M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5m0-3c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5m6 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5m0 3a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.5m.5-9l-9 9 1.5 1.5 9-9zm-5-2c2.2 0 4-1.1 4-2.5V2s1-.2 1.5 1c.5 1 .5 3 .5 3s1-1.1 1-3.1c0-3-3-2.9-3-2.9h-2v6.3a5.9 5.9 0 00-2-.3c-2.2 0-4 1.1-4 2.5s1.8 2.5 4 2.5m-6.7 9.5l-1.5-1.6A47.5 47.5 0 017.4 20l-2-2.2L7 16c.3-.4.3-1 .3-1.4 0-.6-.2-1.2-.8-1.7-.5-.6-1.3-1-2.3-1a3 3 0 00-2.4 1c-.5.6-.8 1.1-.8 1.7 0 .9.4 1.8 1.3 2.9-.9.6-1.5 1.2-1.8 1.7a3.5 3.5 0 00-.6 1.9c0 .8.3 1.5 1 2 .6.6 1.4.9 2.4.9a8 8 0 003.8-1.1l1 1.1h2.9L9 21.6l1.3-1.1zM3.6 14a1 1 0 01.7-.3c.3 0 .6 0 .7.3a.8.8 0 01.3.6c0 .5-.4 1.1-1.2 1.8-.6-.6-.8-1.2-.8-1.7a.9.9 0 01.3-.7m.1 7.9c-.4 0-.7-.1-1-.3-.3-.3-.4-.5-.4-.8 0-.6.5-1.3 1.5-2.1L6 21.2a5 5 0 01-2.3.8"
);
