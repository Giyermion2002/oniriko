import { useTranslation } from "react-i18next";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Menu = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("menu.title")}</h1>
            <p>{t("menu.description")}</p>

            <div style={{ height: '600px' }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js`}>
                    <Viewer fileUrl="pdf\menu.pdf" />
                </Worker>
            </div>
        </div>
    );
}

export default Menu;
