import React from 'react';

const GOOGLE_API_KEY = 'AIzaSyDCEMq9pYdJyu1D--gWkHmqywSllD0Rkqs';
// const GOOGLE_SIGNATURE = 'pex4G-ziEtB46jMfq09dfo3pcKo=';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch Address!');
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
