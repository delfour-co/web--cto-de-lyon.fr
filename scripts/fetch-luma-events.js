#!/usr/bin/env node
/**
 * Script de build : récupère les événements Luma et les écrit dans data/luma-events.json.
 * Exécuter avant `hugo` pour inclure les événements à jour dans le site statique.
 * Évite les problèmes CORS en faisant la requête côté serveur au build.
 */

const fs = require('fs');
const path = require('path');

const API_URL =
  'https://api2.luma.com/calendar/get-items?calendar_api_id=cal-kZVcuAvB6h8seC2&pagination_limit=20&period=future';
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'luma-events.json');

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

async function fetchEvents() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`Luma API error: ${res.status}`);
  }
  const data = await res.json();
  const entries = data.entries || [];

  const events = entries.map((entry) => {
    const event = entry.event;
    const calendar = entry.calendar || {};
    const slug = calendar.slug || 'cto-de-lyon';
    const tag = entry.tags?.[0]?.name;
    return {
      name: event.name,
      startAt: event.start_at,
      formattedDate: formatDate(event.start_at),
      city: event.geo_address_info?.city || 'Lyon',
      url: `https://lu.ma/${slug}/${event.url}`,
      coverUrl: event.cover_url || null,
      tag: tag || null,
    };
  });

  const output = { events, fetchedAt: new Date().toISOString() };
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8');
  console.log(`✓ ${events.length} événement(s) Luma écrit(s) dans ${OUTPUT_PATH}`);
}

fetchEvents().catch((err) => {
  console.error('Erreur lors du fetch des événements Luma:', err.message);
  // Écrire un fichier vide pour que le build Hugo puisse continuer
  const fallback = { events: [], fetchedAt: null, error: err.message };
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(fallback, null, 2), 'utf-8');
  console.log('Fichier vide écrit, le build continuera avec une liste vide.');
  process.exit(0);
});
