export interface Location {
  slug: string;
  name: string;
  nearby: string[];
  postalCodes: string[];
  treeSpecies: string[];
}

export const locations: Location[] = [
  { slug: 'pointe-claire', name: 'Pointe-Claire', nearby: ['Dorval', 'Beaconsfield', 'Kirkland'], postalCodes: ['H9R', 'H9S'], treeSpecies: ['Silver Maple', 'Norway Maple', 'White Ash'] },
  { slug: 'hudson', name: 'Hudson', nearby: ['Saint-Lazare', 'Vaudreuil', 'Île-Perrot'], postalCodes: ['J0P'], treeSpecies: ['Red Oak', 'Sugar Maple', 'White Pine'] },
  { slug: 'beaconsfield', name: 'Beaconsfield', nearby: ['Pointe-Claire', 'Kirkland', "Baie-D'Urfé"], postalCodes: ['H9W'], treeSpecies: ['Norway Maple', 'White Birch', 'Blue Spruce'] },
  { slug: 'saint-lazare', name: 'Saint-Lazare', nearby: ['Hudson', 'Vaudreuil', 'Île-Perrot'], postalCodes: ['J7T'], treeSpecies: ['Red Maple', 'Trembling Aspen', 'White Cedar'] },
  { slug: 'vaudreuil', name: 'Vaudreuil', nearby: ['Saint-Lazare', 'Île-Perrot', 'Pincourt'], postalCodes: ['J7V'], treeSpecies: ['Silver Maple', 'Balsam Fir', 'White Elm'] },
  { slug: 'kirkland', name: 'Kirkland', nearby: ['Pointe-Claire', 'Beaconsfield', 'Dollard-des-Ormeaux'], postalCodes: ['H9J', 'H9H'], treeSpecies: ['Sugar Maple', 'Green Ash', 'Eastern White Cedar'] },
  { slug: 'dollard-des-ormeaux', name: 'Dollard-des-Ormeaux', nearby: ['Kirkland', 'Pointe-Claire', 'Dorval'], postalCodes: ['H9A', 'H9B'], treeSpecies: ['Norway Maple', 'Manitoba Maple', 'White Spruce'] },
  { slug: 'dorval', name: 'Dorval', nearby: ['Pointe-Claire', 'Kirkland', 'Beaconsfield'], postalCodes: ['H9P', 'H9S'], treeSpecies: ['Silver Maple', 'American Elm', 'Colorado Blue Spruce'] },
  { slug: 'senneville', name: 'Senneville', nearby: ["Baie-D'Urfé", 'Beaconsfield', 'Kirkland'], postalCodes: ['H9X'], treeSpecies: ['Red Oak', 'White Pine', 'Sugar Maple'] },
  { slug: 'baie-d-urfe', name: "Baie-D'Urfé", nearby: ['Senneville', 'Beaconsfield', 'Kirkland'], postalCodes: ['H9X'], treeSpecies: ['White Oak', 'Eastern Hemlock', 'Paper Birch'] },
  { slug: 'ile-perrot', name: 'Île-Perrot', nearby: ['Pincourt', 'Vaudreuil', 'Saint-Lazare'], postalCodes: ['J7V'], treeSpecies: ['Silver Maple', 'Basswood', 'Black Walnut'] },
  { slug: 'pincourt', name: 'Pincourt', nearby: ['Île-Perrot', 'Vaudreuil', 'Saint-Lazare'], postalCodes: ['J7W'], treeSpecies: ['Red Maple', 'White Cedar', 'Lombardy Poplar'] },
];

export function getLocation(slug: string) {
  return locations.find(l => l.slug === slug);
}

export function getLocationSlug(name: string) {
  return locations.find(l => l.name === name)?.slug || name.toLowerCase().replace(/[' ]/g, '-');
}
