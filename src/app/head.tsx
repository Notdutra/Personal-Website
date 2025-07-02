// This file is used to define custom favicon and related meta tags for the Next.js app.
// Place this file in the /src/app directory to customize the <head> section for all routes.
import React from 'react';

export default function Head() {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}
