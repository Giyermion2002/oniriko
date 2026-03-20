// Escanea automáticamente todas las imágenes de la carpeta gallery
// Soporta png, jpg, jpeg y svg
const imageModules = import.meta.glob("../assets/images/gallery/*.{png,jpg,jpeg,svg}", {
  eager: true,
  as: 'url'
});

export interface GalleryImage {
  id: number;
  url: string;
  alt?: string;
}

// Convertimos el objeto de módulos en un array compatible con el componente Gallery
export const galleryImages: GalleryImage[] = Object.entries(imageModules).map(([_path, url], index) => {
  return {
    id: index + 1,
    url: url as string
  };
});
