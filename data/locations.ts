export interface Location {
  slug: string;
  name: string;
  nearby: string[];
}

export const locations: Location[] = [
  { slug: 'pointe-claire', name: 'Pointe-Claire', nearby: ['Dorval', 'Beaconsfield', 'Kirkland'] },
  { slug: 'hudson', name: 'Hudson', nearby: ['Saint-Lazare', 'Vaudreuil', 'Île-Perrot'] },
  { slug: 'beaconsfield', name: 'Beaconsfield', nearby: ['Pointe-Claire', 'Kirkland', "Baie-D'Urfé"] },
  { slug: 'saint-lazare', name: 'Saint-Lazare', nearby: ['Hudson', 'Vaudreuil', 'Île-Perrot'] },
  { slug: 'vaudreuil', name: 'Vaudreuil', nearby: ['Saint-Lazare', 'Île-Perrot', 'Pincourt'] },
  { slug: 'kirkland', name: 'Kirkland', nearby: ['Pointe-Claire', 'Beaconsfield', 'Dollard-des-Ormeaux'] },
  { slug: 'dollard-des-ormeaux', name: 'Dollard-des-Ormeaux', nearby: ['Kirkland', 'Pointe-Claire', 'Dorval'] },
  { slug: 'dorval', name: 'Dorval', nearby: ['Pointe-Claire', 'Kirkland', 'Beaconsfield'] },
  { slug: 'senneville', name: 'Senneville', nearby: ["Baie-D'Urfé", 'Beaconsfield', 'Kirkland'] },
  { slug: 'baie-d-urfe', name: "Baie-D'Urfé", nearby: ['Senneville', 'Beaconsfield', 'Kirkland'] },
  { slug: 'ile-perrot', name: 'Île-Perrot', nearby: ['Pincourt', 'Vaudreuil', 'Saint-Lazare'] },
  { slug: 'pincourt', name: 'Pincourt', nearby: ['Île-Perrot', 'Vaudreuil', 'Saint-Lazare'] },
];

export function getLocation(slug: string) {
  return locations.find(l => l.slug === slug);
}

export function getLocationSlug(name: string) {
  return locations.find(l => l.name === name)?.slug || name.toLowerCase().replace(/[' ]/g, '-');
}
