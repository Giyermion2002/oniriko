import { useState } from "react";
import { Box, Typography, IconButton, Dialog } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../../data/galleryData";
import { useTranslation } from "react-i18next";
import "./Gallery.scss";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <Box className="gallery-page">
      <Box className="gallery-header">
        <Typography variant="h2" className="gallery-title">{t("gallery.title")}</Typography>
        <Typography variant="subtitle1" className="gallery-subtitle">
          {t("gallery.subtitle")}
        </Typography>
      </Box>

      <Box className="gallery-container">
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="gallery-item"
              onClick={() => setSelectedImg(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt || `Gallery image ${image.id}`}
                loading="lazy"
                className="gallery-image"
              />
              <div className="gallery-item-overlay">
                <Typography variant="body2">{image.alt}</Typography>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </Box>

      {/* Lightbox / Modal de imagen completa */}
      <Dialog
        fullScreen
        open={!!selectedImg}
        onClose={() => setSelectedImg(null)}
        className="gallery-lightbox"
        PaperProps={{
          onClick: () => setSelectedImg(null),
          className: "gallery-lightbox-paper"
        }}
      >
        <IconButton
          onClick={() => setSelectedImg(null)}
          className="lightbox-close"
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <AnimatePresence>
          {selectedImg && (
            <motion.img
              key={selectedImg}
              src={selectedImg}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="lightbox-image"
            />
          )}
        </AnimatePresence>
      </Dialog>
    </Box>
  );
};

export default Gallery;
